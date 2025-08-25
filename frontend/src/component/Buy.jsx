import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import agrilogo from "../assets/agrilogo.png";
import tractor from "../assets/tractor.jpg";
import harvester from "../assets/harvester.jpg";
import tools from "../assets/tools.avif";
import land from "../assets/land.jpg";
import straw from "../assets/straw.jpg";
import labour from "../assets/labour.jpeg";

const Buy = () => {
    const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const rentalItems = [
    {
      id: 1,
      name: 'Tractor',
      image: tractor,
      description: 'Heavy-duty tractors for all farming needs'
    },
    {
      id: 2,
      name: 'Harvester',
      image: harvester,
      description: 'Efficient harvesting equipment'
    },
    {
      id: 3,
      name: 'Labour Services',
      image: labour,
      description: 'Skilled agricultural workers'
    },
    {
      id: 4,
      name: 'Farm Tools',
      image: tools,
      description: 'Essential farming tools and equipment'
    },
    {
      id: 5,
      name: 'Agricultural Land',
      image: land,
      description: 'Fertile land for farming projects'
    },
    {
      id: 6,
      name: 'Straw & Feed',
      image: straw,
      description: 'Quality straw and animal feed'
    }
  ];

  const handleRentClick = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedItem(null);
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

      {/* Navbar */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-4">
          <img src={agrilogo} alt="AgriConnect" className="h-16 w-auto drop-shadow-lg" />

        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300 font-semibold"
    >
            Get My Booking
          </button>

          <button  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300 font-semibold"
    >
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
                  Rent Now
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Rental Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-t-3xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Rent {selectedItem?.name}</h3>
                    <p className="text-green-100">Fill out the details below</p>
                  </div>
                  <button 
                    onClick={closeForm}
                    className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"  >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition duration-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition duration-300"
                        placeholder="+91 9876543210"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition duration-300"
                      placeholder="farmer@example.com"
                      required
                    />
                  </div>

                  {/* Rental Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Rental Start Date
                      </label>
                      <input
                        type="date"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Rental Duration (Days)
                      </label>
                      <input
                        type="number"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition duration-300"
                        placeholder="Number of days"
                        min="1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Delivery Address
                    </label>
                    <textarea
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition duration-300"
                      rows="3"
                      placeholder="Enter your farm address for delivery"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Requirements (Optional)
                    </label>
                    <textarea
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition duration-300"
                      rows="3"
                      placeholder="Any specific requirements or notes..."
                    ></textarea>
                  </div>

                  {/* Form Actions */}
                  <div className="flex space-x-4 pt-6">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 px-6 rounded-xl transition duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                    >
                      Submit Rental Request
                    </button>
                  </div>
                </form>
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

}

export default Buy
