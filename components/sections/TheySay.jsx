"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Local Business Owner, Dombivli",
    quote:
      "Zussioberry has completely redefined our café experience. The shakes are so fresh, thick, and bursting with real fruit pulp. It feels like premium luxury at honest prices. My family comes here every single weekend!",
    rating: 5,
    favorite: "Signature Mango & Berry Blends",
    avatar: "/assets/menplaceholder.webp",
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "College Student, Mumbai",
    quote:
      "Hands down the best hangout spot in town! From their chilled boba drinks to the delicious faloodas, everything tastes 100% natural without any artificial syrup aftertaste. The café vibe is simply unmatched!",
    rating: 5,
    favorite: "Boba Drinks & Kulfi Falooda",
    avatar: "/assets/womenplaceholder.webp",
  },
  {
    id: 3,
    name: "Ravi Verma",
    role: "Fitness Entrepreneur",
    quote:
      "As someone who tracks what goes into my body, their zero fruit waste and freshly blended drink concept is brilliant. Pure fruit goodness, no preservatives, and high nutritional value. Absolutely in love with their smoothies.",
    rating: 5,
    favorite: "Fresh Cold-Pressed Smoothies",
    avatar: "/assets/menplaceholder.webp",
  },
  {
    id: 4,
    name: "Sneha Verma",
    role: "Food & Lifestyle Explorer",
    quote:
      "I was completely blown away by the taste and presentation! You can genuinely taste real fruit pulp in every sip. The dry fruit shakes and gelatos are pure indulgence. Can't wait to visit again!",
    rating: 5,
    favorite: "Dry Fruit Shakes & Real Gelatos",
    avatar: "/assets/womenplaceholder.webp",
  },
];

export default function TheySay() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance reviews every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = reviews[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="relative w-full bg-[#160a26] text-white pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden select-none">
      {/* Ambient Radial Berry & Purple Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_rgba(192,38,211,0.2),_transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,_rgba(225,29,72,0.12),_transparent_60%)] pointer-events-none" />

      {/* Floating Fruit Accent on Left (Kiwi) */}
      <div className="absolute top-20 -left-6 sm:left-4 lg:left-8 w-[60px] sm:w-[85px] z-10 pointer-events-none select-none opacity-80 drop-shadow-xl animate-smooth-float gpu-accelerate">
        <Image
          src="/assets/decorations/kiwi-corner.png"
          alt="Floating kiwi"
          width={90}
          height={90}
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Floating Straw on Bottom Left */}
      <div className="absolute -bottom-8 -left-6 sm:left-4 w-[110px] sm:w-[150px] md:w-[180px] pointer-events-none select-none z-10 opacity-70 drop-shadow-2xl animate-smooth-float-reverse gpu-accelerate">
        <Image
          src="/assets/home/raw-menu/straw-green.png"
          alt="Striped straw"
          width={180}
          height={210}
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Floating Blueberry Accent on Right */}
      <div className="absolute top-24 right-6 sm:right-14 w-8 sm:w-11 pointer-events-none select-none z-10 opacity-90 drop-shadow-lg animate-smooth-float gpu-accelerate">
        <Image
          src="/assets/home/raw-menu/blueberry-2.png"
          alt="Blueberry"
          width={44}
          height={44}
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Floating Raspberry Accent on Bottom Right */}
      <div className="absolute bottom-12 -right-4 sm:right-6 lg:right-12 w-[55px] sm:w-[75px] z-10 pointer-events-none select-none opacity-75 drop-shadow-xl animate-smooth-float-reverse gpu-accelerate">
        <Image
          src="/assets/decorations/raspberry-corner.png"
          alt="Raspberry"
          width={75}
          height={75}
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 relative z-20">
        {/* Engaging Headline */}
        <div className="text-center mb-10 md:mb-14">
          <motion.p
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ fontFamily: "'Dawning of a New Day', cursive" }}
            className="text-[30px] sm:text-[36px] md:text-[42px] text-[#e879f9] leading-none mb-2 drop-shadow-sm"
          >
            Real Sips, Real Stories
          </motion.p>

          <h2
            style={{ fontFamily: "'Quicksand', sans-serif" }}
            className="text-[34px] sm:text-[44px] md:text-[50px] font-bold text-white tracking-tight leading-[1.15] mb-3 drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)]"
          >
            Why India Loves Zussioberry
          </h2>

          <p
            style={{ fontFamily: "'Open Sans', sans-serif" }}
            className="text-purple-200/80 text-[14px] sm:text-[15.5px] max-w-[620px] mx-auto font-light leading-relaxed"
          >
            Crafted with 100% natural fruit pulp, in-house processing, and zero artificial flavors. Hear directly from the people who love our drinks!
          </p>
        </div>

        {/* Elevated Glassmorphic Review Showcase Card */}
        <div className="relative max-w-[880px] mx-auto bg-[#24123a]/90 backdrop-blur-md border border-[#4a2268] rounded-[28px] p-6 sm:p-10 md:p-14 shadow-[0_20px_60px_rgba(18,6,32,0.7)]">
          {/* Subtle Calligraphy Watermark Backdrop */}
          <span
            aria-hidden="true"
            style={{ fontFamily: "'Dawning of a New Day', cursive" }}
            className="absolute inset-0 flex items-center justify-center text-[75px] sm:text-[115px] md:text-[155px] text-purple-400/[0.04] pointer-events-none select-none whitespace-nowrap overflow-hidden"
          >
            Zussioberry
          </span>

          {/* Rating Badges & Verified Pill */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-purple-400/15">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 sm:w-5 h-4 sm:h-5 text-[#f59e0b] fill-current drop-shadow-sm"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-[12.5px] sm:text-[13.5px] font-semibold text-purple-100/90 ml-1.5 tracking-wide">
                5.0 / 5.0
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 bg-fuchsia-500/15 border border-fuchsia-500/35 text-[#e879f9] text-[11px] sm:text-[12px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <span>✓</span> Verified Guest Review
            </span>
          </div>

          {/* Active Review Quote */}
          <div className="relative z-10 min-h-[140px] md:min-h-[120px] flex items-center justify-center px-1 sm:px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <p
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                  className="text-[18px] sm:text-[22px] md:text-[24px] font-[500] text-purple-50 leading-[1.6] md:leading-[1.65] italic tracking-[0.01em]"
                >
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Favorite Sip Tag */}
                <span className="inline-block mt-4 text-[12px] sm:text-[13px] font-medium text-[#fbcfe8] tracking-wide bg-purple-900/40 border border-purple-700/40 px-3.5 py-1 rounded-full">
                  🍓 Favorite: {current.favorite}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Author Details & Avatar Selector */}
          <div className="relative z-10 mt-8 pt-6 border-t border-purple-400/15 flex flex-col items-center">
            {/* 4 Clickable Avatars with Glowing Ring */}
            <div className="flex items-center justify-center gap-3.5 sm:gap-5 mb-4">
              {reviews.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${
                    currentIndex === idx
                      ? "w-14 h-14 sm:w-16 sm:h-16 ring-4 ring-[#c026d3] shadow-[0_0_20px_rgba(192,38,211,0.6)] scale-110"
                      : "w-10 h-10 sm:w-12 sm:h-12 opacity-50 hover:opacity-85 ring-2 ring-purple-300/30"
                  }`}
                  aria-label={`View review by ${item.name}`}
                >
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Author Name & Role */}
            <h3
              style={{ fontFamily: "'Quicksand', sans-serif" }}
              className="text-[19px] sm:text-[21px] font-bold text-white tracking-wide"
            >
              {current.name}
            </h3>
            <span
              style={{ fontFamily: "'Open Sans', sans-serif" }}
              className="text-[12.5px] sm:text-[13.5px] font-medium text-purple-200/70 block mt-0.5 tracking-wide"
            >
              {current.role}
            </span>
          </div>

          {/* Carousel Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#2a1444]/80 hover:bg-[#c026d3] text-white flex items-center justify-center transition-all duration-200 cursor-pointer border border-[#522573] backdrop-blur-sm z-20 shadow-lg"
          >
            ←
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#2a1444]/80 hover:bg-[#c026d3] text-white flex items-center justify-center transition-all duration-200 cursor-pointer border border-[#522573] backdrop-blur-sm z-20 shadow-lg"
          >
            →
          </button>
        </div>

        {/* Pagination Pill Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 h-2.5 bg-gradient-to-r from-[#e879f9] to-[#c026d3] rounded-full shadow-[0_0_10px_rgba(232,121,249,0.7)]"
                  : "w-2.5 h-2.5 bg-purple-400/30 rounded-full hover:bg-purple-300/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
