import React, { useState } from 'react';

// SVG Icon Components (no external dependencies)
const User = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const Calendar = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const Clock = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
);

const MapPin = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Phone = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Mail = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const Star = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"></polygon>
  </svg>
);

const LogOut = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16,17 21,12 16,7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

const ChevronRight = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
);

const Package = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Dummy user data
  const userData = {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    joinDate: "January 2023",
    totalBookings: 12,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  };

  // Dummy booking data
  const bookings = [
    {
      id: "BK001",
      service: "Premium Hotel Suite",
      date: "2024-03-15",
      time: "14:00",
      location: "Grand Plaza Hotel, NYC",
      status: "confirmed",
      price: "$299",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=100&fit=crop"
    },
    {
      id: "BK002",
      service: "Spa & Wellness Package",
      date: "2024-03-22",
      time: "10:30",
      location: "Luxury Spa Resort",
      status: "pending",
      price: "$189",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=100&h=100&fit=crop"
    },
    {
      id: "BK003",
      service: "Fine Dining Experience",
      date: "2024-02-28",
      time: "19:00",
      location: "Michelin Star Restaurant",
      status: "completed",
      price: "$156",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&h=100&fit=crop"
    }
  ];

  const availableServices = [
    {
      id: "SV001",
      name: "Luxury Hotel Booking",
      description: "Premium accommodation with world-class amenities",
      price: "From $200/night",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=100&h=100&fit=crop"
    },
    {
      id: "SV002",
      name: "Spa & Wellness",
      description: "Relaxing spa treatments and wellness packages",
      price: "From $120/session",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop"
    },
    {
      id: "SV003",
      name: "Restaurant Reservations",
      description: "Fine dining at exclusive restaurants",
      price: "From $80/person",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=100&h=100&fit=crop"
    },
    {
      id: "SV004",
      name: "Event Planning",
      description: "Complete event management services",
      price: "From $500/event",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=100&h=100&fit=crop"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleLogout = () => {
    alert('Logging out...');
  };

  const handleBookService = (serviceId) => {
    alert(`Booking service ${serviceId}...`);
  };

  const renderProfile = () => (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <img 
          src={userData.avatar} 
          alt="Profile" 
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-200"
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{userData.name}</h2>
        <p className="text-gray-600">Premium Member since {userData.joinDate}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Mail className="text-blue-600 mr-3" size={20} />
            <span className="font-semibold text-gray-700">Email</span>
          </div>
          <p className="text-gray-800">{userData.email}</p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Phone className="text-green-600 mr-3" size={20} />
            <span className="font-semibold text-gray-700">Phone</span>
          </div>
          <p className="text-gray-800">{userData.phone}</p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <MapPin className="text-purple-600 mr-3" size={20} />
            <span className="font-semibold text-gray-700">Location</span>
          </div>
          <p className="text-gray-800">{userData.location}</p>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Star className="text-orange-600 mr-3" size={20} />
            <span className="font-semibold text-gray-700">Total Bookings</span>
          </div>
          <p className="text-gray-800 text-2xl font-bold">{userData.totalBookings}</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Welcome back, {userData.name.split(' ')[0]}!</h3>
        <p>Thank you for being a valued member. Enjoy exclusive benefits and premium services.</p>
      </div>
    </div>
  );

  const renderBookings = () => (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Calendar className="mr-3 text-blue-600" />
        Your Bookings
      </h2>
      
      <div className="space-y-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-start space-x-4 mb-4 md:mb-0">
                <img 
                  src={booking.image} 
                  alt={booking.service}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{booking.service}</h3>
                  <p className="text-gray-600 mb-2">Booking ID: {booking.id}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {booking.date}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {booking.time}
                    </span>
                    <span className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {booking.location}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)} mb-2`}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </span>
                <p className="text-xl font-bold text-gray-800">{booking.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {bookings.length === 0 && (
        <div className="text-center py-12">
          <Calendar size={64} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-600 mb-2">No bookings yet</h3>
          <p className="text-gray-500">Start exploring our services to make your first booking!</p>
        </div>
      )}
    </div>
  );

  const renderNewBooking = () => (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Package className="mr-3 text-green-600" />
        Available Services
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {availableServices.map((service) => (
          <div key={service.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4 mb-4">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <p className="text-lg font-bold text-blue-600">{service.price}</p>
              </div>
            </div>
            
            <button 
              onClick={() => handleBookService(service.id)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              Book Now
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-xl min-h-screen">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <img 
                src={userData.avatar} 
                alt="Profile" 
                className="w-12 h-12 rounded-full border-2 border-blue-200"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{userData.name}</h3>
                <p className="text-sm text-gray-600">Premium Member</p>
              </div>
            </div>
          </div>
          
          <nav className="p-4">
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${
                  activeTab === 'profile' 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <User className="mr-3" size={20} />
                My Profile
              </button>
              
              <button
                onClick={() => setActiveTab('bookings')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${
                  activeTab === 'bookings' 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Calendar className="mr-3" size={20} />
                Check Your Bookings
              </button>
              
              <button
                onClick={() => setActiveTab('newBooking')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${
                  activeTab === 'newBooking' 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Package className="mr-3" size={20} />
                Get My Booking
              </button>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors flex items-center"
                >
                  <LogOut className="mr-3" size={20} />
                  Log Out
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'profile' && renderProfile()}
          {activeTab === 'bookings' && renderBookings()}
          {activeTab === 'newBooking' && renderNewBooking()}
        </div>
      </div>
    </div>
  );
};

export default Profile;