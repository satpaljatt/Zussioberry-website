"use client";
import React from 'react'
import { Trophy, Utensils, Lightbulb, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const WhyChoose = () => {
  const features = [
    {
      title: "✔ Proven Concept",
      description: "Our successful business model ensures profitability and growth.",
      bg: "bg-gray-50"
    },
    {
      title: "✔ Comprehensive Support",
      description: "We provide full training, marketing, and operational assistance.",
      bg: "bg-gray-50"
    },
    {
      title: "✔ Innovative Products",
      description: "Premium fresh juices and creative blendable options your customers will love.",
      bg: "bg-gray-50"
    },
    {
      title: "✔ Brand Strength",
      description: "Established brand reputation and loyal customer base for franchise success.",
      bg: "bg-gray-50"
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

  const featureVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };
  
  return (
    <motion.div 
      className="text-center z-10 relative px-4 sm:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      variants={containerVariants}
    >
      {/* WhyChoose Section Only */}
      <div className="mt-[5rem]">
        <motion.h3 
          className="text-3xl xs:text-3xl md:text-5xl font-[heading-1]"
          variants={itemVariants}
        >
          Why <span className="text-[#23aa5d]">Partner</span> With Us?
        </motion.h3>
        <motion.p 
          className="text-gray-600 mt-4 max-w-xl mx-auto font-[para]"
          variants={itemVariants}
        >
          Become a part of our growing family and share the taste of success as
          you serve refreshing flavors and build lasting connections in your
          community.
        </motion.p>

        {/* Features */}
        {/* Mobile: vertical stack */}
        <div className="mt-10 flex flex-col gap-6 max-w-xs mx-auto sm:hidden">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`${feature.bg} p-5 rounded-lg transition-transform duration-200 shadow-sm`}
              variants={featureVariants}
              whileHover="hover"
              custom={index}
            >
              <h4 className="text-[#23aa5d] text-base font-[heading-2] font-bold">{feature.title}</h4>
              <p className="text-sm text-gray-600 mt-2 font-[para]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Desktop: grid */}
        <motion.div 
          className="mt-10 hidden sm:grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`${feature.bg} p-6 rounded-lg transition-transform duration-200 shadow-sm`}
              variants={featureVariants}
              whileHover="hover"
              custom={index}
            >
              <h4 className="text-[#23aa5d] text-lg font-[heading-2] font-bold">{feature.title}</h4>
              <p className="text-sm text-gray-600 mt-2 font-[para]">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default WhyChoose