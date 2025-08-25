import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import agrilogo from '../assets/agrilogo.png';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-6xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            
            {/* Left Side - Visual Section */}
            <div className="lg:w-1/2 bg-gradient-to-br from-green-500 via-green-600 to-blue-600 relative overflow-hidden flex items-center justify-center p-12">
              {/* Decorative Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300/20 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-20 w-24 h-24 bg-white/15 rounded-full blur-xl"></div>
              </div>

              <div className="relative text-center text-white z-10">
                {/* Logo */}
                <div className="mb-8">
                  <img 
                    src={agrilogo} 
                    alt="AgriConnect" 
                    className="h-20 w-auto mx-auto drop-shadow-lg mb-4" 
                  />
                  <h1 className="text-4xl font-bold mb-2">AgriConnect</h1>
                  <p className="text-xl opacity-90">Smart Farming Solutions</p>
                </div>

                {/* Feature Cards */}
                <div className="space-y-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition duration-300">
                    <div className="text-3xl mb-3">🚜</div>
                    <h3 className="font-semibold mb-2">Equipment Rental</h3>
                    <p className="text-sm opacity-90">Access modern farming equipment at affordable prices</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition duration-300">
                    <div className="text-3xl mb-3">🤖</div>
                    <h3 className="font-semibold mb-2">AI Assistant</h3>
                    <p className="text-sm opacity-90">Get smart farming guidance and insights</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition duration-300">
                    <div className="text-3xl mb-3">🌱</div>
                    <h3 className="font-semibold mb-2">Crop Management</h3>
                    <p className="text-sm opacity-90">Optimize your harvest with data-driven insights</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="lg:w-1/2 flex items-center justify-center p-12">
              <div className="w-full max-w-md">
                {/* Welcome Text */}
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">
                    Welcome Back!
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Enter your credentials to access your farming dashboard
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mt-4"></div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                  {/* Email Input */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="farmer@example.com"
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-green-500 focus:bg-white transition duration-300 group-hover:border-gray-300"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-2xl">📧</span>
                      </div>
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-4 pr-12 focus:outline-none focus:border-green-500 focus:bg-white transition duration-300 group-hover:border-gray-300"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-gray-700 transition duration-300"
                      >
                        <span className="text-xl">{showPassword ? '🙈' : '👁️'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                      />
                      <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <button 
                      type="button" 
                      className="text-sm text-green-600 hover:text-green-700 font-semibold transition duration-300"
                    >
                      Forgot password?
                    </button>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-[1.02] hover:shadow-xl transition duration-300"
                  >
                    <span className="flex items-center justify-center">
                      <span>Login to Dashboard</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-8">
                  <div className="flex-1 border-t border-gray-300"></div>
                  <span className="px-4 text-gray-500 text-sm">or</span>
                  <div className="flex-1 border-t border-gray-300"></div>
                </div>

                {/* Social Login Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition duration-300 flex items-center justify-center">
                    <span className="text-xl mr-3">🌐</span>
                    Continue with Google
                  </button>
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-gray-600 mt-8">
                  New to AgriConnect?{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/signup')}
                    className="text-green-600 hover:text-green-700 font-semibold transition duration-300 hover:underline"
                  >
                    Create an account
                  </button>
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">10K+</div>
                    <div className="text-xs text-gray-500">Farmers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">500+</div>
                    <div className="text-xs text-gray-500">Equipment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">50+</div>
                    <div className="text-xs text-gray-500">Cities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;