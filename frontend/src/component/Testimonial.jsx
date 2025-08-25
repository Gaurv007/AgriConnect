import Layout from './Layout'

import Gaurav from "../assets/gaurav.jpg";
import Adarsh from "../assets/Adarsh.jpg";
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Updated testimonials data with agricultural context
  const testimonialsData = [
    {
      name: "Gaurav Kumar",
      title: "Frontend Developer & UI/UX Designer",
      image: Gaurav, // Replace with Gaurav
      alt: "Portrait of Gaurav Kumar",
      rating: 5,
      text: "AgriConnect has revolutionized how we approach modern farming. The user interface is intuitive, and the AI-powered features have significantly improved our crop yield predictions.",
      role: "Lead Developer",
      experience: "3+ Years",
      specialization: "Agricultural UI/UX"
    },
    {
      name: "Adarsh Dubey",
      title: "Backend Developer",
      image: Adarsh, // Replace with Adarsh
      alt: "Portrait of Adarsh Dubey",
      rating: 5,
      text: "Building the backend infrastructure for AgriConnect was challenging but rewarding. The platform now handles thousands of farming requests seamlessly.",
      role: "Backend Architect",
      experience: "4+ Years", 
      specialization: "Agricultural Data Systems"
    },
    {
      name: "Ansh Singh",
      title: "AI/ML Specialist",
      image: Gaurav, // Replace with appropriate image
      alt: "Portrait of Ansh Singh",
      rating: 5,
      text: "Implementing machine learning algorithms for crop prediction and soil analysis has been incredibly fulfilling. Our AI models are helping farmers make better decisions.",
      role: "AI Engineer",
      experience: "2+ Years",
      specialization: "Agricultural AI"
    },
    {
      name: "Grees Kumar", 
      title: "AI/ML Engineer",
      image: Gaurav, // Replace with appropriate image
      alt: "Portrait of Grees Kumar",
      rating: 4,
      text: "Working on the smart irrigation and weather prediction systems has been amazing. Technology is truly transforming traditional farming practices.",
      role: "ML Engineer",
      experience: "2+ Years",
      specialization: "Smart Farming Tech"
    },
    {
      name: "Kshit Joshi",
      title: "Quality Assurance Specialist",
      image: Gaurav, // Replace with appropriate image  
      alt: "Portrait of Kshit Joshi",
      rating: 5,
      text: "Ensuring AgriConnect works flawlessly across all devices and scenarios is crucial for farmers who depend on it daily. Quality is our top priority.",
      role: "QA Lead",
      experience: "3+ Years",
      specialization: "Agricultural Software Testing"
    }
  ];

  const stats = [
    { icon: '👥', number: '5', label: 'Team Members' },
    { icon: '🏆', number: '100%', label: 'Satisfaction' },
    { icon: '⭐', number: '4.8', label: 'Average Rating' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialsData.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`inline-block w-5 h-5 text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-400'
        }`}
      >
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <div>
      {/* Main Content */}
      <div className="relative z-10 px-4 py-8">
        {/* Header Section */}
        <div className={`flex justify-center items-center flex-col mt-14 mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white/90 text-sm font-semibold mb-4 border border-white/20">
              👥 Meet Our AgriConnect Team
            </span>
            <h1 className="font-extrabold text-5xl lg:text-6xl mb-6 text-white leading-tight">
              Team Testimonials
              <span className="block text-3xl lg:text-4xl bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent mt-2">
                AgriConnect Creators
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate developers and specialists who built AgriConnect to revolutionize modern farming.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`max-w-4xl mx-auto mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Testimonial - Large Display */}
        <div className={`max-w-6xl mx-auto mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-6xl text-green-400/30">"</div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src={testimonialsData[currentSlide].image}
                    alt={testimonialsData[currentSlide].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
                  ⭐
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {renderStars(testimonialsData[currentSlide].rating)}
                </div>
                
                <p className="text-xl lg:text-2xl text-white/90 mb-6 italic leading-relaxed">
                  "{testimonialsData[currentSlide].text}"
                </p>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {testimonialsData[currentSlide].name}
                  </h3>
                  <p className="text-green-400 font-semibold mb-2">
                    {testimonialsData[currentSlide].title}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-white/70">
                    <span>Role: {testimonialsData[currentSlide].role}</span>
                    <span>Experience: {testimonialsData[currentSlide].experience}</span>
                  </div>
                </div>

                <div className="inline-block bg-white/10 rounded-full px-4 py-2 text-sm text-white/80 border border-white/20">
                  {testimonialsData[currentSlide].specialization}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevSlide}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/30 transition-all duration-300 group"
              >
                <span className="text-white text-xl group-hover:scale-110 inline-block transition-transform duration-300">←</span>
              </button>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/40 w-3'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/30 transition-all duration-300 group"
              >
                <span className="text-white text-xl group-hover:scale-110 inline-block transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* All Team Members Grid */}
 <div
  className={`max-w-7xl mx-auto transform transition-all duration-1000 delay-600 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`}
>
  <h2 className="text-3xl font-bold text-white text-center mb-12">
    Our Complete Development Team
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {testimonialsData.map((testimonial, index) => {
      // Check if it's the last 2 items
      const isLastTwo =
        index >= testimonialsData.length - 2 &&
        testimonialsData.length % 3 === 2;

      return (
        <div
          key={index}
          className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 cursor-pointer 
            ${index === currentSlide ? "ring-2 ring-green-400 bg-white/20" : ""}
            ${isLastTwo ? "lg:col-span-1 mx-auto" : ""}
          `}
          onClick={() => setCurrentSlide(index)}
        >
          {/* Profile Image */}
          <div className="text-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-3 border-white/20 group-hover:border-green-400/50 transition-all duration-300">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
              {testimonial.name}
            </h3>
            <p className="text-green-400 font-medium text-sm mb-3">
              {testimonial.title}
            </p>

            {/* Rating */}
            <div className="flex justify-center mb-4">
              {renderStars(testimonial.rating)}
            </div>
          </div>

          {/* Testimonial Text */}
          <p className="text-white/70 text-sm leading-relaxed mb-4 text-center">
            "{testimonial.text}"
          </p>

          {/* Additional Info */}
          <div className="text-center">
            <div className="inline-block bg-white/10 rounded-full px-3 py-1 text-xs text-white/80 border border-white/20 mb-2">
              {testimonial.experience}
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>


        {/* Call to Action */}
        <div className={`max-w-4xl mx-auto mt-16 text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              🌾 Join Our Agricultural Revolution!
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Our passionate team continues to innovate and improve AgriConnect. Want to be part of the future of farming?
            </p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Get Started with AgriConnect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;