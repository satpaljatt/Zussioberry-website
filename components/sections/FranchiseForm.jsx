'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCommentDots, FaPaperPlane, FaCheckCircle, FaRocket } from 'react-icons/fa';

const FranchiseForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Location options for dropdown
  const locationOptions = [
    'Indore',
    'Thane',
    'Bhopal',
    'Visakhapatnam',
    'Patna',
    'Vadodara',
    'Ghaziabad',
    'Other'
  ];

  // Phone number functionality
  const phoneNumber = '+919270206096';
  const displayPhone = '+91 92702 06096';
  
  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);
    
    // Simulate submission animation feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          location: '',
          message: '',
        });
      }, 4000);
    }, 1000);
  };

  return (
    <section id="franchise-form" className="w-full bg-[url('/assets/contactBanner.png')] bg-cover bg-center py-12 sm:py-24 px-4 sm:px-6 relative z-10 overflow-hidden">
      {/* Dark Ambient Overlay & Glowing Orbs */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 backdrop-blur-[2px] pointer-events-none" />
      
      {/* Decorative Animated Glow Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-[#23aa5d]/30 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-14 relative z-10">

        {/* Mobile: Heading and Call section on top */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="block md:hidden w-full text-center mb-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23aa5d]/20 border border-[#23aa5d]/40 text-[#23aa5d] text-xs font-semibold uppercase tracking-wider mb-3">
            <FaRocket className="text-xs" /> Partner With Us
          </div>
          <h2 className="text-3xl xs:text-4xl text-white font-[heading-1] tracking-wide mb-3">
            Franchise <span className="text-[#23aa5d]">Enquiry Form</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-200 font-[para] mb-6 max-w-md mx-auto">
            Interested in owning a Zussioberry franchise? Submit your details and let&apos;s connect.
          </p>

          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCall}
            className="group cursor-pointer bg-white/10 backdrop-blur-md border border-white/30 hover:border-[#23aa5d] px-5 py-3.5 rounded-2xl w-full max-w-xs mx-auto flex flex-col items-center justify-center text-center gap-1.5 shadow-lg hover:shadow-[0_10px_30px_rgba(35,170,93,0.3)] transition-all duration-300"
          >
            <p className="text-sm uppercase tracking-wider text-gray-300 font-[para] font-medium">
              Any Queries ? Call At
            </p>
            <p className="text-[#23aa5d] text-xl font-bold flex items-center justify-center gap-2 group-hover:text-emerald-400 transition-colors">
              <span className="p-2 rounded-full bg-[#23aa5d]/20 border border-[#23aa5d]/40 group-hover:bg-[#23aa5d] group-hover:text-white transition-all">
                <FaPhoneAlt className="text-sm" />
              </span>
              {displayPhone}
            </p>
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[34rem] relative flex flex-col items-center"
        >
          {/* Form Card with Glass Glow & Rounded Borders */}
          <div className="relative z-10 w-full rounded-2xl overflow-hidden bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] border border-white/40 transition-all duration-300 hover:shadow-[0_25px_70px_rgba(35,170,93,0.25)]">

            {/* Form Header / Illustration Banner */}
            <div className="w-full relative overflow-hidden group">
              <img
                src="/assets/AnyFormTopImg.png"
                alt="Order Form Illustration"
                className="w-full object-cover max-h-36 sm:max-h-40 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-r from-[#23aa5d] to-[#1a8848] text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full shadow-[0_8px_20px_rgba(35,170,93,0.4)] border border-white/30 text-center"
                >
                  <span className="text-sm sm:text-base md:text-lg font-bold tracking-wide flex items-center justify-center gap-2">
                    <FaRocket className="text-yellow-300 animate-pulse text-sm" />
                    Start Your Business Journey
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Form Fields Container */}
            <div className="p-5 sm:p-7 md:p-8">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#23aa5d]/20 border-2 border-[#23aa5d] flex items-center justify-center text-[#23aa5d] text-3xl shadow-[0_0_30px_rgba(35,170,93,0.4)] animate-bounce">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 font-[heading-1]">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 font-[para] max-w-sm text-sm sm:text-base">
                    Your franchise enquiry has been received. Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-4 sm:space-y-4" onSubmit={handleSubmit}>
                  {/* Name Fields (Grid for responsiveness) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#23aa5d] transition-colors">
                        <FaUser className="text-sm" />
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name *"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl bg-gray-50/80 text-gray-800 placeholder:text-gray-400 text-sm sm:text-base transition-all duration-200 focus:bg-white focus:border-[#23aa5d] focus:outline-none focus:ring-4 focus:ring-[#23aa5d]/15 shadow-sm hover:border-gray-400"
                        required
                      />
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#23aa5d] transition-colors">
                        <FaUser className="text-sm" />
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name *"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl bg-gray-50/80 text-gray-800 placeholder:text-gray-400 text-sm sm:text-base transition-all duration-200 focus:bg-white focus:border-[#23aa5d] focus:outline-none focus:ring-4 focus:ring-[#23aa5d]/15 shadow-sm hover:border-gray-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#23aa5d] transition-colors">
                      <FaEnvelope className="text-sm" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl bg-gray-50/80 text-gray-800 placeholder:text-gray-400 text-sm sm:text-base transition-all duration-200 focus:bg-white focus:border-[#23aa5d] focus:outline-none focus:ring-4 focus:ring-[#23aa5d]/15 shadow-sm hover:border-gray-400"
                      required
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#23aa5d] transition-colors">
                      <FaPhone className="text-sm" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl bg-gray-50/80 text-gray-800 placeholder:text-gray-400 text-sm sm:text-base transition-all duration-200 focus:bg-white focus:border-[#23aa5d] focus:outline-none focus:ring-4 focus:ring-[#23aa5d]/15 shadow-sm hover:border-gray-400"
                      required
                    />
                  </div>

                  {/* Location Dropdown */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#23aa5d] transition-colors">
                      <FaMapMarkerAlt className="text-sm" />
                    </div>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl bg-gray-50/80 text-gray-800 placeholder:text-gray-400 text-sm sm:text-base transition-all duration-200 focus:bg-white focus:border-[#23aa5d] focus:outline-none focus:ring-4 focus:ring-[#23aa5d]/15 shadow-sm hover:border-gray-400 cursor-pointer appearance-none"
                      required
                    >
                      <option value="" disabled className="text-gray-400">Select Preferred Location *</option>
                      {locationOptions.map((location, index) => (
                        <option key={index} value={location} className="text-gray-800">
                          {location}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative group">
                    <div className="absolute top-3 left-0 pl-3.5 pointer-events-none text-gray-400 group-focus-within:text-[#23aa5d] transition-colors">
                      <FaCommentDots className="text-sm" />
                    </div>
                    <textarea
                      name="message"
                      placeholder="Your Message *"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl bg-gray-50/80 text-gray-800 placeholder:text-gray-400 text-sm sm:text-base resize-none transition-all duration-200 focus:bg-white focus:border-[#23aa5d] focus:outline-none focus:ring-4 focus:ring-[#23aa5d]/15 shadow-sm hover:border-gray-400"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full cursor-pointer relative overflow-hidden bg-gradient-to-r from-[#23aa5d] via-[#209d55] to-[#177a41] text-white font-[para] font-semibold py-3 sm:py-3.5 rounded-xl text-base sm:text-lg transition-all duration-300 shadow-[0_8px_25px_rgba(35,170,93,0.35)] hover:shadow-[0_12px_35px_rgba(35,170,93,0.5)] focus:outline-none focus:ring-2 focus:ring-[#23aa5d] focus:ring-offset-2 flex items-center justify-center gap-2 group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </span>
                    {/* Shimmer Light Bar */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* Desktop: Heading and Call section on right */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hidden md:flex relative md:w-1/2 text-white flex-col justify-start h-full gap-5 pt-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#23aa5d]/20 border border-[#23aa5d]/40 text-[#23aa5d] text-xs font-semibold uppercase tracking-wider w-fit">
            <FaRocket className="text-xs" /> Partner With Us
          </div>

          <h2 className="text-5xl lg:text-6xl text-white font-[heading-1] leading-tight drop-shadow-md">
            Franchise <span className="text-[#23aa5d]">Enquiry Form</span>
          </h2>

          <p className="text-lg lg:text-xl leading-relaxed text-gray-200 font-[para] max-w-lg">
            Interested in owning a Zussioberry franchise? Submit your details and let&apos;s connect to build a high-return business together.
          </p>

          {/* Value points badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md pt-2">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#23aa5d] shadow-[0_0_10px_#23aa5d]" />
              <span className="text-sm text-gray-200 font-medium">Quick 24h Response</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#23aa5d] shadow-[0_0_10px_#23aa5d]" />
              <span className="text-sm text-gray-200 font-medium">High ROI Models</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#23aa5d] shadow-[0_0_10px_#23aa5d]" />
              <span className="text-sm text-gray-200 font-medium">Prime Locations</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#23aa5d] shadow-[0_0_10px_#23aa5d]" />
              <span className="text-sm text-gray-200 font-medium">End-to-End Support</span>
            </div>
          </div>

          {/* Interactive Call Card */}
          <motion.div 
            whileHover={{ scale: 1.03, translateY: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCall}
            className="group cursor-pointer bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/30 hover:border-[#23aa5d] px-7 py-5 rounded-2xl w-fit max-w-md flex flex-col items-start gap-2 shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_45px_rgba(35,170,93,0.35)] transition-all duration-300 mt-2"
          >
            <p className="text-xs uppercase tracking-widest text-gray-300 font-[para] font-semibold">
              Any Queries ? Call At
            </p>
            <div className="flex items-center gap-3.5">
              <div className="relative">
                <span className="p-3 rounded-xl bg-[#23aa5d] text-white flex items-center justify-center text-lg shadow-[0_0_20px_rgba(35,170,93,0.6)] group-hover:rotate-12 transition-transform">
                  <FaPhoneAlt />
                </span>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#23aa5d]"></span>
                </span>
              </div>
              <div>
                <p className="text-[#23aa5d] text-2xl lg:text-3xl font-bold tracking-wide group-hover:text-emerald-400 transition-colors">
                  {displayPhone}
                </p>
                <p className="text-xs text-gray-400 font-medium">Click to dial directly</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default FranchiseForm;