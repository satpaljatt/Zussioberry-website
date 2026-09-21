"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

const BeveragesSection = () => {
  const router = useRouter();
  
  const beverages = [
    { name: "Fresh Fruit & Vegetable Juice", products: 3, img: "/assets/SmallZussioberry/beverage/freshfruitjuice.jpg" },
    { name: "Fruit Milkshake", products: 3, img: "/assets/SmallZussioberry/beverage/fruitmilkshake.jpg" },
    { name: "Falooda", products: 3, img: "/assets/SmallZussioberry/beverage/Falooda.JPG" },
    //{ name: "Milkshake", products: 3, img: "/assets/SmallZussioberry/beverage/Juice.jpg" },
    { name: "Frappe", products: 3, img: "/assets/SmallZussioberry/beverage/newFrappe.jpg" },
    { name: "Boba Drinks", products: 3, img: "/assets/SmallZussioberry/beverage/Boba drink.jpg" },
    { name: "Mojito", products: 3, img: "/assets/SmallZussioberry/beverage/mojito.jpg" },
    { name: "Smoothie", products: 3, img: "/assets/SmallZussioberry/beverage/smothie.JPG" },
    { name: "Dry Fruit MilkShake", products: 3, img: "/assets/SmallZussioberry/beverage/DRYFRUITMILKSHAKE.jpg" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    hover: {
      rotate: 8,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#23aa5d",
      color: "white",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const handleViewProducts = () => {
    router.push('/our-products');
  };

  return (
    <motion.section 
      className="relative py-20 px-6 overflow-hidden pb-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      variants={containerVariants}
    >
      {/* Left Side Decorative Image */}
      {/* <div className="hidden md:block absolute left-0 top-8 -z-10">
        <Image
          src="/assets/SectionLeftImg.png"
          alt="Orange Slice"
          width={180}
          height={180}
          className="object-contain opacity-80"
          priority
        />
      </div> */}

      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Heading */}
        <motion.div variants={itemVariants}>
          <p className="font-[para] text-xl text-[#23aa5d]">Best For You</p>
          <h2 className="text-3xl xs:text-3xl md:text-5xl font-[heading-1] mt-2">Our Beverage</h2>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {beverages.map((bev, index) => (
            <motion.div 
              key={index} 
              className="space-y-2 group"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <motion.div 
                className="relative w-full h-[350px]"
                variants={imageVariants}
              >
                <Image
                  src={bev.img}
                  alt={bev.name}
                  fill
                  className="object-cover rounded-xl shadow-sm"
                />
              </motion.div>
              <h3 className="text-lg mt-6 font-semibold font-[para]">{bev.name}</h3>
              {/* <p className="text-gray-500 text-sm font-[para]">{bev.products} products</p> */}
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div 
          className="flex justify-center"
          variants={buttonVariants}
        >
          <motion.button 
            onClick={handleViewProducts}
            className="bg-transparent cursor-pointer border border-[#23aa5d] text-[#23aa5d] px-5 py-2 rounded-full flex items-center gap-3 shadow-md hover:bg-[#23aa5d] hover:text-white transition font-[para]"
            whileHover="hover"
            whileTap="tap"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#23aa5d] text-white mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" />
              </svg>
            </span>
            <span className="font-semibold">View all Products</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default BeveragesSection;