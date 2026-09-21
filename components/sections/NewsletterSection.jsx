// "use client";
// import Image from "next/image";
// import React from 'react';
// import { motion } from 'framer-motion';

// const NewsletterSection = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { duration: 1, ease: "easeOut" }
//     }
//   };

//   const backgroundImageVariants = {
//     hidden: { scale: 1.05 },
//     visible: {
//       scale: 1,
//       transition: { duration: 1.2, ease: "easeOut" }
//     }
//   };

//   const headingVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
//     }
//   };

//   return (
//     <div className="w-full">
//       {/* Heading */}
//       <motion.div 
//         className="w-full py-8 sm:py-12 bg-white"
//         variants={headingVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="text-center w-full px-4">
//           <h3 className="text-green-600 text-lg sm:text-xl font-[heading-2] font-bold mb-2">
//             Exciting Opportunity
//           </h3>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[heading-1] text-black">
//             Upcoming Franchise
//           </h2>
//         </div>
//       </motion.div>

//       {/* Banner Section */}
//       <motion.section 
//         className="relative w-full flex items-center justify-center mb-12 md:mb-20 overflow-hidden"
//         style={{
//           height: "auto",
//         }}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//       >
//         <motion.div
//           variants={backgroundImageVariants}
//           className="relative w-full h-auto"
//         >
//           <Image
//             src="/assets/FooterBanner.jpg"
//             alt="Big Deals Background"
//             width={1920}
//             height={1080}
//             priority
//             className="w-full h-auto object-contain"
//           />
//         </motion.div>
//       </motion.section>
//     </div>
//   );
// };

// export default NewsletterSection;



"use client";
import React from 'react';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const backgroundImageVariants = {
    hidden: { scale: 1.05 },
    visible: {
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  };

  return (
    <div className="w-full">
      {/* Heading */}
      <motion.div 
        className="w-full py-8 sm:py-12 bg-white"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center w-full px-4">
          <h3 className="text-green-600 text-lg sm:text-xl font-[heading-2] font-bold mb-2">
            Exciting Opportunity
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[heading-1] text-black">
            Upcoming Franchise
          </h2>
        </div>
      </motion.div>

      {/* Video Banner Section */}
      <motion.section 
        className="relative w-full flex items-center justify-center mb-12 md:mb-20 overflow-hidden"
        style={{
          height: "auto",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          variants={backgroundImageVariants}
          className="relative w-full h-auto"
        >
          {/* Video Element */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-auto object-contain"
            style={{
              // Hide all controls and ensure clean appearance
              outline: 'none',
              border: 'none',
            }}
            // Optional: Add poster for loading state
            // poster="/assets/video-poster.jpg"
          >
            <source src="/assets/upcomingvideo.mp4" type="video/mp4" />
            <source src="/assets/franchise-video.webm" type="video/webm" />
            {/* Fallback image if video doesn't load */}
            <img 
              src="/assets/FooterBanner.jpg" 
              alt="Upcoming Franchise"
              className="w-full h-auto object-contain"
            />
          </video>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default NewsletterSection;