
'use client';
import React from 'react'
import Link from 'next/link';
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2
      }
    }
  };

  const linkVariants = {
    hover: {
      x: 5,
      color: "#23aa5d",
      transition: {
        duration: 0.2
      }
    }
  };

  // Social media links data
  const socialLinks = [
    { 
      href: "https://www.instagram.com/zussioberry/", 
      icon: IoLogoInstagram,
      hoverClass: "hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500"
    },
    { 
      href: "https://www.facebook.com/profile.php?id=61557420845442", 
      icon: FaFacebookF,
      hoverClass: "hover:bg-blue-600"
    },
    { 
      href: "https://www.youtube.com/@Zussioberry", 
      icon: FaYoutube,
      hoverClass: "hover:bg-red-600"
    },
    { 
      href: "https://wa.me/919270206096", 
      icon: FaWhatsapp,
      hoverClass: "hover:bg-green-500"
    }
  ];

  // Quick links data
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/franchise", label: "Franchise" },
    { href: "/blogs", label: "Blogs" },
    { href: "/our-products", label: "Our Products" },
    { href: "/career", label: "Career" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      <motion.footer 
        className="relative text-white px-6 pt-10 pb-4 font-[para]"
        style={{
          backgroundImage: "url('/assets/FooterImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={containerVariants}
      >
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 items-start py-12 mb-6 border-b border-white/20"
            variants={containerVariants}
          >

            <motion.div 
              className="flex flex-col items-center md:items-start"
              variants={itemVariants}
            >
              <motion.img
                src="/assets/zlogo2.png"
                alt="ZussioBerry Logo"
                width={150}
                height={60}
                className="mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <p className="text-sm text-gray-300 leading-relaxed max-w-xs text-center md:text-left">
                Zussioberry brings you the finest range of natural juices, milkshakes, and more — made fresh with love and quality ingredients. Taste the difference in every sip!
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center justify-center lg:pl-0"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold mb-3 text-white text-center">Quick Links</h3>
              <ul className="text-sm text-gray-300 space-y-1 leading-6 text-left">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.href}
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <Link href={link.href} className="hover:underline block">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-3 text-white text-center md:text-left">Contact Info</h3>
              <p className="text-sm text-gray-300 mb-1">Regd office address : Zussioberry Foods and Beverages LLP, Elitra Awing 1106, casa bella gold, Lodha palava, near Elitra Mall, kalyan shil Road, Dombivali East 421204, Maharashtra, India.
              </p>
              <p className="text-sm text-gray-300 mt-6 mb-1">
                Phone No : <a href="tel:+919270206096" className="hover:text-[#23aa5d] transition-colors duration-200">+91 9270206096</a>
              </p>
              
              {/* Social Media Icons - Fixed */}
              <div className="flex justify-center md:justify-start space-x-4 text-[#23aa5d] text-xl mt-8">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.div
                      key={social.href}
                      variants={socialIconVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      custom={index}
                    >
                      <Link 
                        href={social.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`rounded-full border-2 border-[#23aa5d] p-2 hover:border-transparent hover:text-white transition-all duration-300 block ${social.hoverClass}`}
                      >
                        <IconComponent />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm px-1 pb-8"
            variants={itemVariants}
          >
            <p>© Copyrights Zussioberry 2025. All Rights Reserved</p>
            <p className="mt-2 md:mt-0">Terms & Condition | Privacy Policy</p>
          </motion.div>
        </div>
      </motion.footer>
    </>
  )
}

export default Footer
