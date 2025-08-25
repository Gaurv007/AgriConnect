import os
import io
import json
import sqlite3
from fastapi import FastAPI, UploadFile, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import pandas as pd
from datetime import datetime
from typing import TypedDict, Optional
from langchain_core.runnables import RunnableConfig
from langchain_core.documents import Document
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.prompts import PromptTemplate
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_groq import ChatGroq
from langgraph.graph import StateGraph
import logging  
from langchain_pinecone import PineconeVectorStore
from pinecone import Pinecone, ServerlessSpec
import speech_recognition as sr   # 🎤 For speech-to-text


global_index_name = None

def setup_index_and_features(user_id: str):
    global global_index_name
    index_name = "violation22-index"

    if index_name not in [i['name'] for i in pc.list_indexes()]:
        pc.create_index(
            name=index_name,
            dimension=384,
            metric="cosine",
            spec=ServerlessSpec(cloud="aws", region="us-east-1")
        )

    global_index_name = index_name
    return pc.Index(index_name)

# === Paths and Chat DB ===
chat_db_path = "chat_history.db"

def init_db():
    conn = sqlite3.connect(chat_db_path)
    conn.execute('''CREATE TABLE IF NOT EXISTS ChatHistory (
        user_id TEXT,
        timestamp TEXT,
        question TEXT,
        answer TEXT
    );''')
    conn.commit()
    conn.close()

def save_chat(user_id, question, answer):
    conn = sqlite3.connect(chat_db_path)
    conn.execute("INSERT INTO ChatHistory (user_id, timestamp, question, answer) VALUES (?, ?, ?, ?)",
                 (user_id, datetime.utcnow().isoformat(), question, answer))
    conn.commit()
    conn.close()

def get_recent_history(user_id, limit=5):
    conn = sqlite3.connect(chat_db_path)
    cursor = conn.cursor()
    cursor.execute("SELECT question, answer FROM ChatHistory WHERE user_id = ? ORDER BY timestamp DESC LIMIT ?", (user_id, limit))
    rows = cursor.fetchall()
    conn.close()
    return list(reversed(rows))

# === PDF Utilities ===
def get_pdf_text(pdf_docs):
    text = ""
    for pdf in pdf_docs:
        reader = PdfReader(pdf)
        for page in reader.pages:
            content = page.extract_text()
            if content:
                text += content
    return text

def get_text_chunks(text):
    splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    return splitter.split_text(text)

def get_vector_store(chunks):
    if not global_index_name:
        raise ValueError("Index not initialized. Call setup_index_and_features() first.")

    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

    vector_store = PineconeVectorStore(
        index=pc.Index(global_index_name),
        embedding=embeddings,
        text_key="text"
    )

    metadatas = [{"source": f"chunk_{i}"} for i in range(len(chunks))]
    vector_store.add_texts(texts=chunks, metadatas=metadatas)

def load_vector_store():
    if not global_index_name:
        raise ValueError("Index not initialized. Call setup_index_and_features() first.")

    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    
    vector_store = PineconeVectorStore(
        index=pc.Index(global_index_name),
        embedding=embeddings,
        text_key="text"
    )
    return vector_store

# === LangGraph State ===
class QAState(TypedDict):
    question: str
    pdf_answer: Optional[str]
    final_answer: Optional[str]

def pdf_node(state: QAState, config: RunnableConfig) -> QAState:
    vectorstore = load_vector_store()
    docs = vectorstore.similarity_search(state["question"], k=2)
    return {
        **state,
        "pdf_answer": "\n\n".join([d.page_content if isinstance(d, Document) else str(d) for d in docs]) if docs else ""
    }

def final_node(state: QAState) -> QAState:
    llm = ChatGroq(
        groq_api_key=os.environ["GROQ_API_KEY"],
        model_name="llama3-8b-8192",
        temperature=0.3
    )

    history = state.get("chat_history", [])
    memory_context = "\n".join([f"User: {q}\nAssistant: {a}" for q, a in history]) 

    context = f"{state.get('pdf_answer', '')}"

    prompt = PromptTemplate(
        template="""
You are AgriConnect — a friendly and helpful agriculture assistant.  

Here is the recent chat history:
{memory_context}

Here is the information available to you:
{context}

Guidelines:
- Use only the provided information above.  
- If the answer is not explicitly found in the information, say: "Sorry, I don’t have that information right now."  
- Do not mention that the answer came from documents, context, or any sources.  
- Be natural, warm, and concise — like you're talking to a farmer or a friend.  

Question: {question}

Reply:
""",
        input_variables=["memory_context", "question", "context"]
    )

    chain = create_stuff_documents_chain(llm, prompt)

    result = chain.invoke({
        "memory_context": memory_context,
        "question": state["question"],
        "context": [Document(page_content=context)]
    }).strip()

    return {**state, "final_answer": result, "source": "context"}

def create_graph(index):
    builder = StateGraph(QAState)

    # Nodes
    builder.add_node("pdf", pdf_node)
    builder.add_node("final", final_node)

    # Flow
    builder.add_edge("pdf", "final")

    # Default entry point (for text)
    builder.set_entry_point("pdf")

    return builder.compile()

# === FastAPI App ===
app = FastAPI(title="AgriConnect: PDF Chat", description="Chat with PDFs using FastAPI")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

init_db()

@app.post("/ask")
async def ask_question(user_id: str = Form(...), question: str = Form(...)):
    index_obj = setup_index_and_features(user_id)
    graph = create_graph(index_obj)

    state = graph.invoke({"question": question, "user_id": user_id})
    answer = state.get("final_answer", "Sorry, I couldn’t find relevant information.")
    save_chat(user_id, question, answer)

    return JSONResponse({"answer": answer})

@app.post("/upload_pdfs")
async def upload_pdfs(user_id: str = Form(...), files: list[UploadFile] = None):
    if not files:
        return JSONResponse({"error": "No PDF files uploaded"}, status_code=400)

    index_obj = setup_index_and_features(user_id)
    raw_text = get_pdf_text([f.file for f in files])
    chunks = get_text_chunks(raw_text)
    get_vector_store(chunks)

    return JSONResponse({"status": "PDFs processed and indexed!"})

# @app.post("/speech_to_text")
# async def speech_to_text(user_id: str = Form(...), audio_file: UploadFile = None):
#     if not audio_file:
#         return JSONResponse({"error": "No audio uploaded"}, status_code=400)

#     recognizer = sr.Recognizer()
#     audio_bytes = await audio_file.read()
#     audio_file_io = io.BytesIO(audio_bytes)

#     with sr.AudioFile(audio_file_io) as source:
#         audio = recognizer.record(source)

#     try:
#         user_question = recognizer.recognize_google(audio)
#         index_obj = setup_index_and_features(user_id)
#         graph = create_graph(index_obj)

#         state = graph.invoke({"question": user_question, "user_id": user_id})
#         answer = state.get("final_answer", "Sorry, I couldn’t find relevant information.")
#         save_chat(user_id, user_question, answer)

#         return JSONResponse({"question": user_question, "answer": answer})

#     except sr.UnknownValueError:
#         return JSONResponse({"error": "Could not understand speech"}, status_code=400)
#     except sr.RequestError:
#         return JSONResponse({"error": "Speech service unavailable"}, status_code=500)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
