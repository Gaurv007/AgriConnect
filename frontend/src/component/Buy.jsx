import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchEquipments } from "../State/Auth/Action";
import agrilogo from "../assets/agrilogo.png";
import tractor from "../assets/tractor.jpg";
import harvester from "../assets/harvester.jpg";
import tools from "../assets/tools.avif";
import land from "../assets/land.jpg";
import straw from "../assets/straw.jpg";
import labour from "../assets/labour.jpeg";
const Buy = () => {
  // ✅ Redux setup
  const dispatch = useDispatch();
  const { equipments, equipmentLoading, equipmentError } = useSelector(
    (state) => state.auth
  );

  // ✅ Chatbot states
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm your AgriBot assistant. How can I help you with your farming needs today?",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  const userId = "user_123";
  const navigate = useNavigate();

  // ✅ UI states
  const [showProductTable, setShowProductTable] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // ✅ Chat logic
  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = { sender: "user", text: inputText };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");

    try {
      const formData = new FormData();
      formData.append("user_id", userId);
      formData.append("question", inputText);

      const response = await fetch("http://127.0.0.1:8001/ask", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      const botReply = {
        sender: "bot",
        text: data.answer || "Sorry, I could not find an answer.",
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error contacting the assistant. Please try again." },
      ]);
      console.error("Chat error:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ Fetch equipments on mount
useEffect(() => {
  if (selectedCategory) {
    dispatch(fetchEquipments(selectedCategory.key));
  }
}, [selectedCategory, dispatch]);

  // ✅ Rental categories
 const rentalItems = [
  { id: 1, key: "TRACTOR", name: "Tractor", image: tractor, description: "Heavy-duty tractors for all farming needs" },
  { id: 2, key: "HARVESTOR", name: "Harvester", image: harvester, description: "Efficient harvesting equipment" },
  { id: 3, key: "LABOUR", name: "Labour Services", image: labour, description: "Skilled agricultural workers" },
  { id: 4, key: "TOOLS", name: "Farm Tools", image: tools, description: "Essential farming tools and equipment" },
  { id: 5, key: "LAND", name: "Agricultural Land", image: land, description: "Fertile land for farming projects" },
  { id: 6, key: "FODDER", name: "Straw & Feed", image: straw, description: "Quality straw and animal feed" },
];

  // ✅ UI handlers
  const handleRentClick = (item) => {
    setSelectedCategory(item);
    setShowProductTable(true);
  };

  

  const closeTable = () => {
    setShowProductTable(false);
    setSelectedCategory(null);
  };

 
  // ✅ Utility for condition badge
  const getStatusColor = (condition) => {
    switch (condition.toLowerCase()) {
      case "excellent":
        return "bg-green-100 text-green-800";
      case "very good":
        return "bg-blue-100 text-blue-800";
      case "good":
        return "bg-yellow-100 text-yellow-800";
      case "experienced":
        return "bg-purple-100 text-purple-800";
      case "expert":
        return "bg-indigo-100 text-indigo-800";
      case "fresh":
        return "bg-green-100 text-green-800";
      case "high quality":
        return "bg-emerald-100 text-emerald-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-32 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-green-300/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Chatbot Section */}
      <div>
        {/* Floating Chat Toggle Button */}
        <div className="fixed bottom-6 right-6 z-50">
          {isChatOpen && (
            <div className="absolute bottom-20 right-0 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🌾</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">AgriBot</h3>
                    <p className="text-white/80 text-xs">Your Farming Assistant</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white/80 hover:text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Chat Body */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'items-start space-x-2'}`}>
                    {msg.sender === 'bot' && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">🤖</span>
                      </div>
                    )}
                    <div
                      className={`rounded-lg px-3 py-2 shadow-sm max-w-xs text-sm ${
                        msg.sender === 'user'
                          ? 'bg-green-500 text-white'
                          : 'bg-white text-gray-800'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="border-t border-gray-200 p-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none focus:border-green-500"
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Chat Button */}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            {isChatOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-4">
          <img src={agrilogo} alt="AgriConnect" className="h-16 w-auto drop-shadow-lg" />
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300 font-semibold">
            Get My Booking
          </button>
          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300 font-semibold">
            Check Booking
          </button>
          <button 
            onClick={() => navigate('/home')}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300 font-semibold"
          >
            ← Back to Home
          </button>
          <button onClick={()=>navigate("/")} className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300 font-semibold">
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-40 px-8 pb-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            What would you like to rent today?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose from our wide range of agricultural equipment and services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Rental Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rentalItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-500"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition duration-300">
                  {item.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Rent Button */}
                <button 
                  onClick={() => handleRentClick(item)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                >
                  View Available Items
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Product Table Modal */}
        {showProductTable && selectedCategory && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-white">Available {selectedCategory.name}</h3>
                    <p className="text-green-100">Choose from our verified providers</p>
                  </div>
                  <button 
                    onClick={closeTable}
                    className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Table Content */}
              <div className="overflow-x-auto max-h-[70vh]">
                <table className="w-full">
        <thead className="bg-gray-50 sticky top-0">
  <tr>
    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Description
    </th>
    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Price
    </th>
    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Price Type
    </th>
    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Action
    </th>
  </tr>
</thead>

  <tbody className="bg-white divide-y divide-gray-200">
  {equipments?.filter((eq) => eq.category === selectedCategory.key)

    .map((eq) => (
      <tr key={eq.id} className="hover:bg-gray-50 transition-colors duration-200">
        <td className="px-6 py-4">
          <div className="text-sm text-gray-900">{eq.description}</div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm font-bold text-green-600">₹{eq.price}</div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-700">{eq.pricingUnit}</div>
        </td>
        <td className="px-6 py-4">
          <button
            onClick={() => alert("Login flow will be implemented here")}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Rent Now
          </button>
        </td>
      </tr>
    ))}
</tbody>


                </table>
              </div>
            </div>
          </div>
        )}

       

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-80">Equipment Available</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-80">Service Support</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-sm opacity-80">Cities Covered</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-sm opacity-80">Happy Farmers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy; 