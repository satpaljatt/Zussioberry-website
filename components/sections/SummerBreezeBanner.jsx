"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SummerBreezeBanner() {
  return (
    <section className="relative w-full bg-[#FF679A] text-white pt-16 md:pt-24 pb-0 overflow-hidden">
      {/* Decorative Floating Seed Particles */}
      <div className="absolute top-10 left-[8%] w-10 sm:w-12 pointer-events-none select-none opacity-85 z-0 animate-smooth-float gpu-accelerate">
        <Image
          src="/assets/dev-tools/seed.png"
          alt="Floating seed"
          width={50}
          height={50}
          loading="lazy"
          className="w-full h-auto object-contain drop-shadow-md"
        />
      </div>

      <div className="absolute top-[40%] right-[7%] w-9 sm:w-11 pointer-events-none select-none opacity-80 z-0 animate-smooth-float-reverse gpu-accelerate">
        <Image
          src="/assets/home/raw-menu/floating-leaf.png"
          alt="Floating leaf"
          width={40}
          height={55}
          loading="lazy"
          className="w-full h-auto object-contain drop-shadow-md"
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Visual: Circular Fruit Highlight with Orbiting Badges */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[430px] md:h-[430px] flex items-center justify-center">
              {/* Outer Pulsing Glow Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-white/25 animate-pulse pointer-events-none" />
              <div className="absolute inset-3 sm:inset-4 rounded-full bg-white/12 backdrop-blur-xs border border-white/40 shadow-[0_18px_50px_rgba(0,0,0,0.18)]" />

              {/* Main Beverage Showcase Image with Hover Zoom */}
              <motion.div
                whileHover={{ scale: 1.06, rotate: 3 }}
                transition={{ duration: 0.4 }}
                className="relative w-[85%] h-[85%] z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] flex items-center justify-center"
              >
                <Image
                  src="/assets/SmallZussioberry/juice_img.png"
                  alt="Fresh Summer Beverage Showcase"
                  fill
                  sizes="(max-width: 768px) 300px, 420px"
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Orbiting Top Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 sm:top-2 -left-2 sm:left-4 z-20 bg-white text-[#FF679A] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"
              >
                <span className="text-[#23aa5d]">●</span>
                <span>100% Real Fruit</span>
              </motion.div>

              {/* Orbiting Bottom Badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 sm:bottom-4 -right-2 sm:right-4 z-20 bg-[#23aa5d] text-white font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-lg"
              >
                Zero Preservatives
              </motion.div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Bouncing Cursive Tagline */}
            <motion.p
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ fontFamily: "'Dawning of a New Day', cursive" }}
              className="text-[32px] sm:text-[40px] md:text-[46px] text-white leading-none mb-2 tracking-wide drop-shadow-sm"
            >
              Light the summer breeze
            </motion.p>

            {/* Main Heading */}
            <h2
              style={{ fontFamily: "'Quicksand', sans-serif" }}
              className="text-[34px] sm:text-[44px] md:text-[50px] font-bold tracking-tight leading-[1.15] mb-5 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
            >
              Pure Freshness In Every Single Sip
            </h2>

            {/* Description */}
            <p
              style={{ fontFamily: "'Open Sans', sans-serif" }}
              className="text-white/95 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] max-w-[540px] mb-8 font-light"
            >
              Experience handcrafted fruit smoothies, revitalizing cold-pressed juices, and thick gourmet shakes made with nature&apos;s best ingredients to keep you refreshed and energized all day.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-9">
              {["Fresh On Order", "Rich in Vitamins", "Artisan Blends", "Natural Sweetness"].map((feat, i) => (
                <span
                  key={i}
                  className="bg-white/18 backdrop-blur-sm border border-white/35 text-white text-xs sm:text-[13px] font-semibold px-3.5 py-1.5 rounded-full shadow-xs"
                >
                  ✓ {feat}
                </span>
              ))}
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="/our-products"
                className="bg-white text-[#FF679A] hover:bg-neutral-100 font-bold text-[14px] sm:text-[15px] tracking-wide px-7 py-3.5 rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Explore Full Menu
              </Link>

              <Link
                href="/franchise"
                className="bg-transparent hover:bg-white/15 text-white border-2 border-white font-bold text-[14px] sm:text-[15px] tracking-wide px-7 py-[12px] rounded-[10px] transition-all duration-200 cursor-pointer"
              >
                Franchise Opportunity
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Transition into Wave 3 (Sunny Yellow #FFF64F) */}
      <div className="w-full overflow-hidden leading-none block -mb-[1px]">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[45px] sm:h-[65px] md:h-[90px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C380,-15 760,85 1100,25 C1260,-5 1380,20 1440,30 L1440,90 L0,90 Z"
            fill="#FFF64F"
          />
        </svg>
      </div>
    </section>
  );
}
