"use client";
import React from 'react';
import { motion } from 'framer-motion';

const MakeOrder = () => {
  // Phone number functionality
  const phoneNumber = '+919270206096';
  
  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(34, 170, 93, 0.2)",
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.03,
      backgroundColor: "#1c8a4a",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const callBoxVariants = {
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.section
      className="relative bg-cover bg-center min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center px-2 sm:px-4 md:px-8 py-10 sm:py-16"
      style={{
        backgroundImage: "url('/assets/contactBanner.png')",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      variants={containerVariants}
    >
        
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start justify-center">
        {/* Left */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-white mb-6 md:mb-0"
          variants={contentVariants}
        >
          <motion.h2 
            className="text-3xl xs:text-3xl md:text-5xl text-[#23aa5d] mb-3 sm:mb-4 font-[heading-1] text-center md:text-left"
            variants={itemVariants}
          >
             Enquiry Now! 
          </motion.h2>
          <motion.h3 
            className="text-lg xs:text-xl sm:text-2xl font-[heading-2] mb-3 sm:mb-4 text-center md:text-left"
            variants={itemVariants}
          >
            Freshness Just a Click Away!
          </motion.h3>
          <motion.p 
            className="text-base font-[para] sm:text-lg leading-relaxed text-gray-200 mb-6 sm:mb-8 max-w-lg text-center md:text-left"
            variants={itemVariants}
          >
            Have a question about our juices, smoothies, or services? Send us your enquiry and our team will reach out with all the details you need. It’s quick, simple, and designed to help you get the freshest information in no time.
          </motion.p>
          {/* Call */}
          <div 
            className="border border-white px-6 py-4 sm:px-6 sm:py-5 rounded-md w-full max-w-xs flex flex-col items-center justify-center text-center mx-auto md:mx-0"
            
          >
            <p className="mb-2 sm:mb-3 text-lg sm:text-xl whitespace-nowrap font-[para]">Any Queries? Call At</p>
            <p
              onClick={handleCall}
              className="text-[#23aa5d] text-lg sm:text-xl flex items-center whitespace-nowrap cursor-pointer hover:text-green-400 transition-colors"
              
            >
              <i className="fas fa-phone-alt mr-2"></i>{phoneNumber}
            </p>
          </div>
        </motion.div>

      <motion.div 
        className="w-full md:w-1/2 relative flex flex-col items-center bg-white rounded-lg shadow-lg"
        variants={formVariants}
      >
        {/* White Container */}
        <div className="relative z-10 w-full p-0 rounded-md font-[para] md:mt-0">
          
          {/* Green Banner Inside White */}
          <div className="w-full relative">
            <img
              src="/assets/AnyFormTopImg.png"
              alt="Order Form Illustration"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-black text-2xl sm:text-3xl font-[para] font-bold px-6 -mt-5 py-2 rounded">
                Share your enquiry!
              </span>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-5 sm:p-8">
            <form className="space-y-4 sm:space-y-5">
              <motion.input
                type="text"
                placeholder="Your Name *"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-800 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[#23aa5d] focus:border-transparent"
                whileFocus={inputVariants.focus}
              />
              <motion.input
                type="email"
                placeholder="Your Email *"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-800 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[#23aa5d] focus:border-transparent"
                whileFocus={inputVariants.focus}
              />
              <motion.input
                type="text"
                placeholder="Your Phone Number *"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-800 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[#23aa5d] focus:border-transparent"
                whileFocus={inputVariants.focus}
              />
              <motion.input
                type="text"
                placeholder="Current Opening *"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-800 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[#23aa5d] focus:border-transparent"
                whileFocus={inputVariants.focus}
              />
              <motion.textarea
                placeholder="Your Address *"
                rows={3}
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-800 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#23aa5d] focus:border-transparent"
                whileFocus={inputVariants.focus}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="w-full cursor-pointer bg-[#23aa5d] text-white font-[para] py-2.5 sm:py-3 rounded-md hover:bg-green-600 text-lg transition focus:outline-none focus:ring-2 focus:ring-[#23aa5d] focus:ring-offset-2"
                whileHover={buttonVariants.hover}
                whileTap={buttonVariants.tap}
              >
                Submit
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>

      </div>
    </motion.section>
  );
};

export default MakeOrder;