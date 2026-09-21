"use client";
import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppSticky = () => {
  const phoneNumber = "9270206096";
  const message = "Hello! I'm interested in your products.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // WhatsApp button animation variants
  const whatsappButtonVariants = {
    initial: { 
      scale: 1,
      boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)"
    },
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(37, 211, 102, 0.7)",
        "0 0 0 8px rgba(37, 211, 102, 0)", // Reduced from 12px to 8px for mobile
        "0 0 0 0 rgba(37, 211, 102, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.15,
      backgroundColor: "#128C7E",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  // Glow effect variant for WhatsApp - optimized for mobile
  const whatsappGlowEffectVariants = {
    initial: { 
      opacity: 0,
      scale: 1
    },
    animate: {
      opacity: [0, 0.4, 0], // Reduced opacity for mobile
      scale: [1, 1.1, 1.2], // Reduced scale for mobile
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeOut"
      }
    }
  };

  // Shimmer effect variant for WhatsApp
  const whatsappShimmerEffectVariants = {
    initial: { x: "-100%" },
    animate: {
      x: "200%",
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="whatsapp-sticky"
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        cursor: 'pointer',
        width: '60px', // Fixed container width
        height: '60px', // Fixed container height
      }}
      whileHover="hover"
      whileTap="tap"
    >
      {/* Outer Glow Effect - Contained within parent */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-6px', // Reduced from -10px
          left: '-6px', // Reduced from -10px
          right: '-6px', // Reduced from -10px
          bottom: '-6px', // Reduced from -10px
          backgroundColor: '#25D366',
          borderRadius: '50%',
          filter: 'blur(6px)', // Reduced blur for mobile
          zIndex: 1,
        }}
        variants={whatsappGlowEffectVariants}
        initial="initial"
        animate="animate"
      />
      
      {/* Main Button with Pulse Animation */}
      <motion.div
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 2,
        }}
        variants={whatsappButtonVariants}
        initial="initial"
        animate="pulse"
      >
        {/* Shimmer Effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)', // Reduced opacity
            transform: 'skewX(-20deg)',
          }}
          variants={whatsappShimmerEffectVariants}
          initial="initial"
          animate="animate"
        />
        
        {/* WhatsApp Icon */}
        <svg 
          width="30" 
          height="30" 
          viewBox="0 0 24 24" 
          fill="white"
          style={{ position: 'relative', zIndex: 3 }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.285A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppSticky;