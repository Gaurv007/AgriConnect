import React from 'react';
import About from './About';
import Details from './Details';
import Testimonials from './Testimonial';
import Footer from './Footer';
import agrilogo from "../assets/agrilogo.png";
import rentImg from "../assets/rent.png";
import buyImg from "../assets/buy.png";
import assistantImg from "../assets/assistatn.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

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
        {[...Array(20)].map((_, i) => (
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

      {/* Navbar */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-4">
          <img src={agrilogo} alt="AgriConnect" className="h-16 w-auto drop-shadow-lg" />
          <div className="text-white">
          
          </div>
        </div>
        
        <button onClick={()=>navigate("/")} className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300 font-semibold">
          Logout
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-40 flex flex-col items-center justify-center px-8 py-12">
        <div className="text-center text-white mb-16">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-green-200 bg-clip-text text-transparent drop-shadow-2xl">
            Welcome to AgriConnect
          </h2>
          <p className="text-xl opacity-90 max-w-2xl  mx-auto leading-relaxed">
            Revolutionizing agriculture with smart technology solutions for modern farmers
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full"></div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
          
          {/* Rent Card */}
          <div 
            onClick={() => navigate("/rent")}
            className="group relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 hover:-rotate-1 transition duration-500 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative p-8">
              <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <img src={rentImg} alt="Rent" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-4 group-hover:shadow-lg transition duration-300">
                  <span className="text-2xl">🚜</span>
                </div>
                
                <h3 className="text-3xl font-bold text-green-700 mb-4 group-hover:text-green-800 transition duration-300">
                  Lend Equipment
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Access modern farming equipment at affordable prices. Boost your productivity without high upfront costs.
                </p>
                
                <div className="inline-flex items-center text-green-600 font-semibold group-hover:text-green-700 transition duration-300">
                  <span>Explore Rentals</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Buy Card */}
          <div 
            onClick={() => navigate("/buy")}
            className="group relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 hover:rotate-1 transition duration-500 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative p-8">
              <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <img src={buyImg} alt="Buy" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4 group-hover:shadow-lg transition duration-300">
                  <span className="text-2xl">🛒</span>
                </div>
                
                <h3 className="text-3xl font-bold text-blue-700 mb-4 group-hover:text-blue-800 transition duration-300">
                  Rent Products
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Purchase quality agricultural tools, seeds, and machinery from trusted sellers with complete confidence.
                </p>
                
                <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition duration-300">
                  <span>Shop Now</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Assistant Card */}
          <div 
            onClick={() => navigate("/assistant")}
            className="group relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 hover:-rotate-1 transition duration-500 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative p-8">
              <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <img src={assistantImg} alt="Assistant" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-4 group-hover:shadow-lg transition duration-300">
                  <span className="text-2xl">🤖</span>
                </div>
                
                <h3 className="text-3xl font-bold text-orange-700 mb-4 group-hover:text-orange-800 transition duration-300">
                  AI Assistant
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Get AI-powered farming guidance, weather forecasts, and crop care tips for maximum yields.
                </p>
                
                <div className="inline-flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition duration-300">
                  <span>Get Assistance</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-4xl">
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-sm opacity-80">Happy Farmers</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-80">Equipment Available</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-sm opacity-80">Cities Covered</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-80">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;