"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Fresh Fruit & Vegetable Juice",
    image: "/assets/SmallZussioberry/beverage/freshfruitjuice.jpg",
    rating: 5,
    price: "₹119.00",
    badge: "Cold Pressed",
    badgeColor: "#23aa5d",
    href: "/our-products",
  },
  {
    id: 2,
    name: "Fruit Milkshake",
    image: "/assets/SmallZussioberry/beverage/fruitmilkshake.jpg",
    rating: 5,
    price: "₹139.00",
    badge: "Bestseller",
    badgeColor: "#F76D3C",
    href: "/our-products",
  },
  {
    id: 3,
    name: "Falooda",
    image: "/assets/SmallZussioberry/beverage/Falooda.JPG",
    rating: 4,
    price: "₹169.00",
    badge: "Classic Favorite",
    badgeColor: "#9333ea",
    href: "/our-products",
  },
  {
    id: 4,
    name: "Frappe",
    image: "/assets/SmallZussioberry/beverage/newFrappe.jpg",
    rating: 5,
    price: "₹189.00",
    badge: "Rich & Creamy",
    badgeColor: "#d97706",
    href: "/our-products",
  },
  {
    id: 5,
    name: "Boba Drinks",
    image: "/assets/SmallZussioberry/beverage/Boba drink.jpg",
    rating: 5,
    price: "₹149.00",
    badge: "Trending",
    badgeColor: "#2563eb",
    href: "/our-products",
  },
  {
    id: 6,
    name: "Mojito",
    image: "/assets/SmallZussioberry/beverage/mojito.jpg",
    rating: 5,
    price: "₹129.00",
    badge: "Chilled Refresh",
    badgeColor: "#059669",
    href: "/our-products",
  },
  {
    id: 7,
    name: "Smoothie",
    image: "/assets/SmallZussioberry/beverage/smothie.JPG",
    rating: 4,
    price: "₹179.00",
    badge: "100% Organic",
    badgeColor: "#23aa5d",
    href: "/our-products",
  },
  {
    id: 8,
    name: "Dry Fruit MilkShake",
    image: "/assets/SmallZussioberry/beverage/DRYFRUITMILKSHAKE.jpg",
    rating: 5,
    price: "₹199.00",
    badge: "Royal Special",
    badgeColor: "#e11d48",
    href: "/our-products",
  },
];

export default function SmoothiesAndJuices() {
  return (
    <section className="relative w-full bg-[#B4C817] pt-[90px] md:pt-[110px] pb-0 overflow-hidden">
      {/* 1. Floating Raspberry Particle (Left) */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 8, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[140px] -left-6 sm:left-4 lg:left-8 w-[65px] sm:w-[90px] lg:w-[110px] z-20 pointer-events-none select-none drop-shadow-[0_12px_20px_rgba(0,0,0,0.2)]"
      >
        <Image
          src="/assets/decorations/raspberry-corner.png"
          alt="Floating raspberry"
          width={120}
          height={120}
          className="w-full h-auto object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* 2. Floating Kiwi Particle (Right) */}
      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, -10, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-[280px] -right-6 sm:right-4 lg:right-8 w-[70px] sm:w-[95px] lg:w-[120px] z-20 pointer-events-none select-none drop-shadow-[0_12px_20px_rgba(0,0,0,0.2)]"
      >
        <Image
          src="/assets/decorations/kiwi-corner.png"
          alt="Floating kiwi slice"
          width={130}
          height={130}
          className="w-full h-auto object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* 3. Floating Organic Leaf Accent */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-[160px] left-[10%] w-[35px] sm:w-[45px] z-20 pointer-events-none select-none opacity-85"
      >
        <Image
          src="/assets/home/raw-menu/floating-leaf.png"
          alt="Floating leaf"
          width={45}
          height={60}
          className="w-full h-auto object-contain drop-shadow-md"
        />
      </motion.div>

      {/* 4. Rotating Circular Badge (Top Right) */}
      <div className="absolute top-12 right-6 lg:right-16 z-20 hidden sm:block pointer-events-none select-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="relative w-[100px] h-[100px] lg:w-[115px] lg:h-[115px] flex items-center justify-center rounded-full bg-white/15 backdrop-blur-xs border-2 border-dashed border-white/50 text-white shadow-lg"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
              fill="transparent"
            />
            <text className="text-[10.5px] font-bold uppercase tracking-[0.22em] fill-white">
              <textPath href="#circlePath">
                ★ 100% FRESH ★ ZUSSIOBERRY
              </textPath>
            </text>
          </svg>
          <span className="absolute text-lg">🍓</span>
        </motion.div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 md:mb-20">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Top Heart Accent */}
          <div className="flex justify-center mb-3">
            <Image
              src="/assets/home/smoothies/heart-image.png"
              alt="Heart icon"
              width={26}
              height={26}
              className="w-[24px] md:w-[26px] h-auto object-contain drop-shadow-md"
              priority
            />
          </div>

          {/* Section Main Title */}
          <h2
            style={{ fontFamily: "'Quicksand', sans-serif" }}
            className="text-[34px] sm:text-[44px] md:text-[50px] font-bold text-white tracking-tight leading-[1.15] mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.18)]"
          >
            Smoothies &amp; Juices
          </h2>

          {/* Bouncing Cursive Subtitle */}
          <motion.p
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ fontFamily: "'Dawning of a New Day', cursive" }}
            className="text-[28px] sm:text-[34px] md:text-[38px] font-normal text-white/95 leading-[1.2em] tracking-[0.03em] drop-shadow-[0_1px_5px_rgba(0,0,0,0.12)]"
          >
            Smoothie demo designed for you
          </motion.p>
        </div>

        {/* 8-Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 max-w-[1180px] mx-auto">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col items-center text-center bg-gradient-to-b from-[#FFFF94] via-[#FFF64F] to-[#FFE636] rounded-[24px] p-4.5 shadow-[0_12px_35px_rgba(255,246,79,0.55),0_0_25px_rgba(255,255,255,0.6)] border-2 border-white hover:border-white hover:shadow-[0_20px_50px_rgba(255,246,79,0.9),0_0_40px_rgba(255,255,255,0.9)] transition-all duration-300"
            >
              {/* Product Badge */}
              <div className="absolute top-5 left-5 z-20 pointer-events-none">
                <span
                  style={{ backgroundColor: product.badgeColor }}
                  className="inline-block text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md"
                >
                  {product.badge}
                </span>
              </div>

              {/* Image Container with Smooth Hover Zoom */}
              <Link
                href={product.href}
                className="relative w-full aspect-[600/680] overflow-hidden rounded-[16px] bg-white p-1 block shadow-sm"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover rounded-[14px] transition-transform duration-600 ease-out group-hover:scale-110"
                />
              </Link>

              {/* Product Info */}
              <div className="pt-4 pb-1 flex flex-col items-center gap-1.5 w-full">
                <Link href={product.href} className="w-full">
                  <h3
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                    className="text-[17px] md:text-[18px] font-bold text-[#1a1a1a] transition-colors duration-200 group-hover:text-[#000000] line-clamp-1 px-1"
                    title={product.name}
                  >
                    {product.name}
                  </h3>
                </Link>

                {/* Star Rating */}
                <div className="flex items-center gap-1 my-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < product.rating
                          ? "text-[#d97706] fill-current"
                          : "text-white/60 fill-current"
                      }`}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Price (Indian Rupee) Highlighted Pill */}
                <span
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                  className="text-[15px] font-extrabold text-[#111111] bg-white border border-white px-4 py-1 rounded-full shadow-sm mt-0.5"
                >
                  {product.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave Transition into Raw Menu Mint Green (#abe9b0) */}
      <div className="w-full overflow-hidden leading-none block -mb-[1px]">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[45px] sm:h-[65px] md:h-[90px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,35 C320,90 680,-15 1020,55 C1240,95 1380,30 1440,40 L1440,90 L0,90 Z"
            fill="#abe9b0"
          />
        </svg>
      </div>
    </section>
  );
}
