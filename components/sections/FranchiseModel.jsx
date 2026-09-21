"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const FranchiseModel = () => {
  const router = useRouter();
  
  // Franchise model data
  const franchiseSteps = [
    {
      title: "EXPRESS KIOSK",
      description: "Compact. Quick-serve. High Returns. Perfect for malls, food courts, cinemas, railway stations & airports.",
      details: [
        "+ Area: 80-150 sq. ft.",
        "+ Menu: Juices, milkshakes, smoothies, fruit pops, bubble tea",
        "+ Target Audience: On-the-go customers, commuters",
        "+ Highlight: Minimal staff, quick ROI"
      ],
      image: "/assets/model/2express.jpg"
    },
    {
      title: "JUICE BOUTIQUE",
      description: "A refreshing retail twist to healthy indulgence. Designed for high street corners, shopping centers & wellness zones.",
      details: [
        "+ Area: 300-600 sq. ft.",
        "+ Menu: Full beverage line, fresh cut fruits, gelato & desserts",
        "+ Ambience: Urban and vibrant with branding aesthetics",
        "+ Highlight: Mid-size store with strong takeaway business"
      ],
      image: "/assets/model/3juicebutique.jpg"
    },
    {
      title: "EXPERIENCE BAR",
      description: "Immersive café with visual preparation and dine-in setup. Ideal for college zones, tech parks, and lifestyle streets.",
      details: [
        "+ Area: 800-1200 sq. ft.",
        "+ Menu: Full menu + food (wraps, pasta, sandwiches, burgers)",
        "+ Ambience: Modern, Instagrammable interior",
        "+ Highlight: Sit-down café experience with curated food pairings"
      ],
      image: "/assets/model/4experiance.jpg"
    },
    {
      title: "MOBILE LOUNGE",
      description: "On wheels. On trend. On demand. A fully-equipped Zussioberry outlet on a mobile van.",
      details: [
        "+ Area: Mobile (Van format)",
        "+ Menu: Core beverage range, light snacks, popsicles",
        "+ Use Case: Events, carnivals, corporate parks, townships",
        "+ Highlight: Zero rent, city-wide mobility, high outreach"
      ],
      image: "/assets/model/6mobile.jpg"
    },
    {
      title: "GLOBAL FLAGSHIP STORE",
      description: "The ultimate zussioberry destination. Built for metra cities, tourist hubs & premium locations.",
      details: [
        "+ Area: 1000 - 2000 sq. ft.",
        "+ Menu: Full food + beverage range, desserts, gelato bar",
        "+ Ambience: Premium dining with open kitchen, lounge zones",
        "+ Highlight: Brand ambassador outlet; hosts launches; events"
      ],
      image: "/assets/model/5global.jpg"
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.03,
      transition: {
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -30 },
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
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  // Function to handle Apply Now button click
  const handleApplyNow = () => {
    // Navigate to franchise page
    router.push('/franchise');
    
    // After navigation, scroll to the form section
    // We use setTimeout to ensure the page has loaded
    setTimeout(() => {
      const formSection = document.getElementById('franchise-form');
      if (formSection) {
        // Get navbar height
        const navbar = document.querySelector('header, nav, .navbar, [class*="header"], [class*="nav"]');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        
        // Calculate the position to scroll to
        const offsetPosition = formSection.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 500); // Adjust timeout if needed based on your page load speed
  };

  return (
    <motion.div 
      className="text-center z-10 relative px-4 sm:px-6 py-0 md:py-12 mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      variants={containerVariants}
    >
      
      {/* Main Heading */}
      <motion.div 
        className="mb-16"
        variants={itemVariants}
      >
        <h3 className="text-3xl xs:text-3xl md:text-5xl font-[heading-1]">
          Our <span className="text-[#23aa5d]">Franchise Model</span>
        </h3>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-[para]">
          A proven system designed for your success. From initial setup to ongoing operations, 
          we provide the framework and support you need to thrive.
        </p>
      </motion.div>

      {/* Main Content Section - Image Left, Content Right */}
      <motion.div 
        className="max-w-6xl mx-auto mb-20"
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Left */}
          <motion.div 
            className="lg:w-1/2"
            variants={imageVariants}
          >
            <motion.div 
              className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-80 lg:h-96 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src="./assets/model/1highway.jpg" alt="Franchise Model" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Content Right */}
          <motion.div 
            className="lg:w-1/2 text-left"
            variants={contentVariants}
          >
            <h4 className="text-2xl md:text-3xl font-[heading-2] font-bold text-gray-800 mb-4">
              HIGHWAY EXCLUSIVE
            </h4>
            <p className="text-gray-600 font-[para] mb-4">
              Fuel up with freshness! Tailored for petrol pumps, highway plazas, and rest areas.
            </p>
            <ul className="space-y-2 mt-6">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-[#23aa5d] mr-2 font-bold">+</span>
                <span className="text-gray-600 font-[para]">Area: 3000-5000 sq. ft.</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-[#23aa5d] mr-2 font-bold">+</span>
                <span className="text-gray-600 font-[para]">Menu: Food & beverages for travelers, takeaway friendly</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-[#23aa5d] mr-2 font-bold">+</span>
                <span className="text-gray-600 font-[para]">Ambience: Quick-serve yet relaxing</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-[#23aa5d] mr-2 font-bold">+</span>
                <span className="text-gray-600 font-[para]">Highlight: High volume, low competition, 24x7 potential</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Franchise Models Section - 3 in first row, 2 in second row centered */}
      <div className="max-w-6xl mx-auto">
        {/* Mobile: vertical stack */}
        <div className="flex flex-col gap-6 max-w-xs mx-auto sm:hidden">
          {franchiseSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg transition-transform duration-200 shadow-sm overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <img 
                src={step.image}
                alt={step.title} 
                className="w-full h-48 object-cover bg-gray-200"
              />
              <div className="p-5">
                <h5 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h5>
                <p className="text-sm text-gray-600 font-[para] mb-3">{step.description}</p>
                <ul className="space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-gray-600">{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: 3 models in first row, 2 models in second row centered */}
        <motion.div 
          className="hidden sm:flex flex-col items-center gap-6 md:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {/* First Row - 3 models */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
            {franchiseSteps.slice(0, 3).map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg transition-transform duration-200 shadow-sm overflow-hidden"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-48 object-cover bg-gray-200"
                />
                <div className="p-6">
                  <h5 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h5>
                  <p className="text-sm text-gray-600 font-[para] mb-3">{step.description}</p>
                  <ul className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-gray-600">{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 models centered */}
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl">
              {franchiseSteps.slice(3, 5).map((step, index) => (
                <motion.div
                  key={index + 3}
                  className="bg-gray-50 rounded-lg transition-transform duration-200 shadow-sm overflow-hidden"
                  variants={cardVariants}
                  whileHover="hover"
                  custom={index + 3}
                >
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-48 object-cover bg-gray-200"
                  />
                  <div className="p-6">
                    <h5 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h5>
                    <p className="text-sm text-gray-600 font-[para] mb-3">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-gray-600">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Apply Now Button - Bottom Center */}
      <motion.div 
        className="mt-12 mb-0 md:mb-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <button
          onClick={handleApplyNow}
          className="bg-[#23aa5d] hover:bg-green-600 text-white font-semibold py-2 px-8 rounded-full text-lg transition duration-300 shadow-lg cursor-pointer"
        >
          Apply Now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default FranchiseModel;