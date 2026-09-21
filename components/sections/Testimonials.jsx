"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Amit Sharma",
      position: "Local Business Owner",
      content: "Zussioberry has completely changed the café experience in our city. The shakes are so fresh and unique, it feels premium yet friendly. Customers love coming back!",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Nair",
      position: "College Student",
      content: "I love the variety of flavors at Zussioberry. It's not just about taste, but also the fun vibe that makes it my go-to hangout spot.",
      rating: 5
    },
    {
      id: 3,
      name: "Ravi Verma",
      position: "Entrepreneur",
      content: "The concept of zero fruit waste and freshly blended drinks is brilliant. It shows how a brand can be both tasty and responsible at the same time.",
      rating: 5
    },
    {
      id: 4,
      name: "Sneha Verma",
      position: "Housewife",
      content: "I was amazed by the variety! From mocktails to gelatos, everything tastes premium. The best part is knowing the fruits are processed fresh in-house.",
      rating: 5
    },
    {
      id: 5,
      name: "Vikas Patel",
      position: "Engineer",
      content: "The Biscoff Shake is pure indulgence! Thick, creamy, and loaded with flavor — perfect for dessert lovers like me.",
      rating: 5
    },
    {
      id: 6,
      name: "Kunal Mehta",
      position: "Student",
      content: "I tried the Veg Cheese Wrap and honestly, the melted cheese with fresh veggies was irresistible. Tastes way better than the usual fast food wraps.",
      rating: 5
    }
  ];

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-start mb-3">
        {[...Array(5)].map((_, index) => (
          <motion.svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsToShow = 3;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  // Auto carousel with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Manual navigation
  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - itemsToShow : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  // Reset transitioning after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Calculate the exact transform percentage to ensure 3 cards are fully visible
  const calculateTransform = () => {
    const cardWidthPercentage = 100 / itemsToShow;
    return currentIndex * cardWidthPercentage;
  };

  return (
    <motion.div 
      className="text-center z-10 relative px-4 sm:px-6 py-12 mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      
      {/* Main Heading */}
      <motion.div 
        className="mb-12"
        variants={itemVariants}
      >
        <h3 className="text-3xl xs:text-3xl md:text-5xl font-[heading-1]">
          What Our <span className="text-[#23aa5d]">Customers Say</span>
        </h3>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-[para]">
          Hear from our valued customers about their Zussioberry experience
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto relative">
        
        {/* Desktop: Carousel with 3 cards */}
        <div className="hidden sm:block">
          <div className="relative overflow-hidden px-12">
            {/* Carousel Track */}
            <motion.div 
              className={`flex gap-6`}
              animate={{ x: `-${calculateTransform()}%` }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="flex-shrink-0 w-[calc(33.333%-16px)]"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full mx-1 flex flex-col">
                    <StarRating rating={testimonial.rating} />
                    <p className="text-gray-600 font-[para] text-sm leading-relaxed mb-4 text-left flex-grow">
                      "{testimonial.content}"
                    </p>
                    <div className="text-left mt-auto">
                      <h5 className="font-[heading-2] font-bold text-gray-800">{testimonial.name}</h5>
                      <p className="text-[#23aa5d] text-sm font-[para]">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 z-10 shadow-md"
              aria-label="Previous testimonials"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2">
              {testimonials.slice(0, testimonials.length - itemsToShow + 1).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#23aa5d]' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  animate={{ 
                    scale: index === currentIndex ? 1.5 : 1 
                  }}
                />
              ))}
            </div>

            <motion.button 
              onClick={handleNext}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 z-10 shadow-md"
              aria-label="Next testimonials"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile: Vertical stack */}
        <motion.div 
          className="sm:hidden flex flex-col gap-6 max-w-md mx-auto"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-50 p-5 rounded-lg shadow-sm flex flex-col"
              variants={cardVariants}
              whileHover="hover"
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-gray-600 font-[para] text-sm leading-relaxed mb-4 text-left flex-grow">
                "{testimonial.content}"
              </p>
              <div className="text-left mt-auto">
                <h5 className="font-[heading-2] font-bold text-gray-800">{testimonial.name}</h5>
                <p className="text-[#23aa5d] text-sm font-[para]">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials;