"use client";
import React from "react";
import { motion } from "framer-motion";

const WelcomeTo = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <section className="flex items-center justify-center min-h-[80vh] py-8 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={containerVariants}
        >
          
          {/* Left Image */}
          <motion.div 
            className="lg:w-1/2 flex justify-center order-2 lg:order-1"
            variants={imageVariants}
          >
            <motion.img
              src="/assets/zlogo1.png"
              alt="Zussioberry Logo"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Right Content Area */}
          <motion.div 
            className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 lg:ml-4"
            variants={contentVariants}
          >
            <motion.h2 
              className="text-[#23aa5d] text-3xl xs:text-4xl md:text-5xl font-bold mb-2 font-[heading-1]"
              variants={itemVariants}
            >
              Welcome to Zussioberry
            </motion.h2>
            <motion.h3 
              className="text-xl sm:text-2xl font-medium mb-4 text-gray-800 pt-4"
              variants={itemVariants}
            >
              Blended with Delight, Backed by Innovation
            </motion.h3>
            
            {/* Content with optimized spacing */}
            <div className="w-full max-w-xl space-y-3">
              <motion.p 
                className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal"
                variants={itemVariants}
              >
                Welcome to Zussioberry, where nature, taste, and technology come together. We're more than a café brand—we're a system-driven enterprise built to serve fresh flavors, reliable quality, and rewarding opportunities.
              </motion.p>
              
              <motion.p 
                className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal"
                variants={itemVariants}
              >
                From juices, smoothies, shakes, faloodas, and bubble teas to pizzas, pastas, wraps, burrito bowls, and Thai curries, Zussioberry brings together a world of food and beverages under one brand.
              </motion.p>
              
              <motion.div 
                className="pt-2"
                variants={itemVariants}
              >
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal mb-2">
                  And that's not all—we also manufacture in-house frozen desserts:
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-[#23aa5d] mr-2 text-lg">•</span>
                    <span className="text-gray-700 text-sm">Natural Ice Creams</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-[#23aa5d] mr-2 text-lg">•</span>
                    <span className="text-gray-700 text-sm">Traditional Kulfis</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-[#23aa5d] mr-2 text-lg">•</span>
                    <span className="text-gray-700 text-sm">Refreshing Popsicles</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-[#23aa5d] mr-2 text-lg">•</span>
                    <span className="text-gray-700 text-sm">Premium Gelatos</span>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal"
                variants={itemVariants}
              >
                With state-of-the-art plate freezing technology and centralized production, Zussioberry ensures year-round consistency, unmatched freshness, and profitability for every franchise.
              </motion.p>
            </div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-xs sm:max-w-none sm:w-auto"
              variants={itemVariants}
            >
              <motion.a
                href="/about-us"
                className="bg-[#23aa5d] cursor-pointer px-5 py-2.5 text-white rounded-lg text-sm font-medium transition inline-block text-center shadow-md"
                whileHover={{ scale: 1.05, backgroundColor: "#1c8a4a" }}
                whileTap={{ scale: 0.95 }}
              >
                View More
              </motion.a>
              <motion.a
                href="/franchise"
                className="border border-[#23aa5d] cursor-pointer px-5 py-2.5 text-[#23aa5d] rounded-lg hover:bg-[#23aa5d] hover:text-white text-sm font-medium transition inline-block text-center"
                whileHover={{ scale: 1.05, backgroundColor: "#23aa5d", color: "white" }}
                whileTap={{ scale: 0.95 }}
              >
                Franchise Opportunity
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default WelcomeTo;

/*<p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-8 font-[para] max-w-xl">
        Zussioberry is your go-to destination for the most delicious
        and vibrant fresh fruit juices, milkshakes, smoothies, falooda,
        ice-creams and more. We're more than just a cafe; we're a
        celebration of flavor and fun! Our menu is a delightful fusion
        of classic favorites and innovative creations, all crafted
        with the freshest ingredients and a passion for taste.
       </p> */