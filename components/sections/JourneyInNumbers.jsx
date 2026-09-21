"use client";
import React from 'react'
import { Trophy, Utensils, Lightbulb, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const JourneyInNumbers = () => {
  const stats = [
    {
      number: "18+",
      label: "years of legacy",
      icon: Trophy,
    },
    {
      number: "100+",
      label: "food and beverages",
      icon: Utensils,
    },
    {
      number: "unique",
      label: "business model",
      icon: Lightbulb,
    },
    {
      number: "10,000+",
      label: "satisfied customers",
      icon: Users,
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      className="bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      variants={containerVariants}
    >
      <div className="text-center max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl xs:text-3xl md:text-5xl font-[heading-1] mb-4"
          variants={itemVariants}
        >
          Our <span className="text-[#23aa5d]">Journey</span> in Numbers
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-[para] mb-12"
          variants={itemVariants}
        >
          From humble beginnings to becoming a trusted brand, these numbers tell our story of dedication and growth.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={statVariants}
                whileHover="hover"
                custom={index}
              >
                {/* Mobile Layout */}
                <div className="sm:hidden bg-gray-50 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-center mb-4">
                    <motion.div 
                      className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm mr-4"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <IconComponent className="w-7 h-7 text-[#23aa5d]" />
                    </motion.div>
                    <div className="text-left">
                      <div className="text-[#23aa5d] text-2xl font-bold font-[heading-2]">
                        {stat.number}
                      </div>
                      <h3 className="font-[para] font-semibold text-gray-700 text-sm capitalize">
                        {stat.label}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:block bg-gray-50 rounded-2xl p-8 shadow-sm">
                  <motion.div 
                    className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <IconComponent className="w-8 h-8 text-[#23aa5d]" />
                  </motion.div>
                  <div className="text-[#23aa5d] text-3xl font-bold font-[heading-2] mb-2">
                    {stat.number}
                  </div>
                  <h3 className="font-[para] font-semibold text-gray-700 text-lg capitalize">
                    {stat.label}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default JourneyInNumbers