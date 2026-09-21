'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';
import { useRouter } from 'next/navigation';

const slides = [
  {
    bg: "/assets/home/banner1.jpg",
  },
  {
    bg: "/assets/home/banner2.jpg",
  },
  {
    bg: "/assets/home/banner3.jpg",
  },
];

const Slider = () => {
  const router = useRouter();

  // Animation variants for slider content
  const slideVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        speed={1000}
        className="w-full h-full custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div 
              className="w-full h-full relative flex items-center justify-center overflow-hidden"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Fixed responsive image - object-cover for all screen sizes */}
              <motion.img
                src={slide.bg}
                alt={`Slide ${index + 1}`}
                className="w-full h-full max-h-[70vh] md:max-h-[80vh] object-cover"
                variants={imageVariants}
                whileHover="hover"
              />

              {/* -------------------------------------------------------------- */}
              {/* FRAPPÉ KINETIC FLOATING PARTICLES (SERVE HAPPINESS BANNER)     */}
              {/* -------------------------------------------------------------- */}
              {slide.bg.includes('banner3') && (
                <>
                  {/* Left Watermelon Seeds Cluster */}
                  <motion.img
                    src="/assets/dev-tools/seed.png"
                    alt="Floating watermelon seeds"
                    className="absolute top-[36%] left-[6%] sm:left-[8%] w-[55px] md:w-[75px] z-20 pointer-events-none select-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
                    animate={{
                      y: [0, -12, 2, 8, 0],
                      rotate: [0, -3, 3, -1, 0]
                    }}
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Right Watermelon Seeds */}
                  <motion.img
                    src="/assets/dev-tools/seed-2.png"
                    alt="Floating seeds"
                    className="absolute top-[38%] right-[10%] sm:right-[12%] w-[45px] md:w-[60px] z-20 pointer-events-none select-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
                    animate={{
                      y: [0, 8, -8, 4, 0],
                      rotate: [0, 3, -2, 2, 0]
                    }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Right Floating Red Grape */}
                  <motion.img
                    src="/assets/dev-tools/grapes.png"
                    alt="Floating grape"
                    className="absolute top-[44%] right-[6%] sm:right-[8%] w-[50px] md:w-[68px] z-20 pointer-events-none select-none drop-shadow-[0_6px_14px_rgba(0,0,0,0.2)]"
                    animate={{
                      y: [0, -12, 4, -4, 0],
                      rotate: [0, -4, 4, 0]
                    }}
                    transition={{
                      duration: 4.6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </>
              )}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom animated pagination dots */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: #23aa5d;
          opacity: 1;
          transform: scale(1.2);
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          color: #23aa5d;
          transition: all 0.3s ease;
        }
        
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          transform: scale(1.1);
        }

        /* Ensure swiper takes full width */
        .custom-swiper {
          width: 100%;
        }
        
        .swiper-slide {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Slider;