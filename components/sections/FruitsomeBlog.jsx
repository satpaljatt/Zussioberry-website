"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "The Secret Behind Our Signature Fruit Blends",
    slug: "the-secret-behind-our-signature-fruit-blends",
    image: "/assets/blogs/BerryBS.JPG",
    date: "January 23, 2026",
    description:
      "At Zussioberry, every sip is a burst of natural goodness. Discover how the careful selection of fresh fruits and in-house processing preserves flavor and maximum nutrition.",
    author: "admin",
    category: "Food",
  },
  {
    id: 2,
    title: "Top 7 Must-Try Drinks & Snacks at Zussioberry Café",
    slug: "top-7-must-try-drinks-snacks-at-zussioberry-cafe",
    image: "/assets/blogs/MangoS.JPG",
    date: "February 14, 2026",
    description:
      "Looking for a place where fresh flavors meet fun vibes? Explore our top hand-crafted beverages, delicious faloodas, and smoothies that make Zussioberry a favorite spot.",
    author: "admin",
    category: "Food",
  },
  {
    id: 3,
    title: "Why Fresh Fruit Pulp Makes the Healthiest Shakes",
    slug: "why-fresh-fruit-pulp-makes-the-healthiest-shakes",
    image: "/assets/blogs/TropicalC.JPG",
    date: "March 02, 2026",
    description:
      "Discover the true benefits of using pure, unadulterated fruit pulp in shakes and desserts. Learn why real fruit nutrition outshines artificial flavorings every time.",
    author: "admin",
    category: "Food",
  },
];

export default function FruitsomeBlog() {
  return (
    <section className="relative w-full bg-[#FFF64F] pt-20 md:pt-28 pb-0 overflow-hidden">
      {/* Floating Fruit Particle (Left) */}
      <div className="absolute top-20 -left-6 sm:left-4 lg:left-8 w-[60px] sm:w-[85px] z-20 pointer-events-none select-none drop-shadow-md animate-smooth-float gpu-accelerate">
        <Image
          src="/assets/decorations/raspberry-corner.png"
          alt="Floating raspberry"
          width={90}
          height={90}
          loading="lazy"
          className="w-full h-auto object-contain mix-blend-multiply"
        />
      </div>

      {/* Floating Leaf Particle (Right) */}
      <div className="absolute top-36 -right-4 sm:right-6 lg:right-10 w-[55px] sm:w-[75px] z-20 pointer-events-none select-none drop-shadow-md animate-smooth-float-reverse gpu-accelerate">
        <Image
          src="/assets/home/raw-menu/floating-leaf.png"
          alt="Floating leaf"
          width={80}
          height={100}
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 md:mb-24">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Top Heart Accent */}
          <div className="flex justify-center mb-3">
            <Image
              src="/assets/home/smoothies/heart-image.png"
              alt="Heart icon"
              width={26}
              height={26}
              className="w-[24px] md:w-[26px] h-auto object-contain"
              priority
            />
          </div>

          {/* Section Main Title */}
          <h2
            style={{ fontFamily: "'Quicksand', sans-serif" }}
            className="text-[34px] sm:text-[44px] md:text-[50px] font-bold text-[#222222] tracking-tight leading-[1.15] mb-2 drop-shadow-xs"
          >
            Our Fruitsome Blog
          </h2>

          {/* Bouncing Cursive Subtitle */}
          <motion.p
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ fontFamily: "'Dawning of a New Day', cursive" }}
            className="text-[28px] sm:text-[34px] md:text-[38px] font-normal text-[#5a5000] leading-[1.3em] tracking-[0.02em]"
          >
            Rise &amp; Energize with fresh reads
          </motion.p>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col bg-gradient-to-b from-[#FFF5F9] via-[#FFE5F0] to-[#FFD3E6] rounded-[24px] p-5 shadow-[0_14px_35px_rgba(255,103,154,0.22)] border-2 border-white hover:shadow-[0_22px_50px_rgba(255,103,154,0.38)] transition-all duration-300 text-left"
            >
              {/* Outer Wrapper for Image & Ribbon */}
              <div className="relative w-full aspect-square overflow-hidden rounded-[18px] shadow-sm">
                {/* Authentic Date Ribbon Tag */}
                <div
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    clipPath:
                      "polygon(0 0, 100% 0, 86% 50%, 100% 100%, 0 100%)",
                    WebkitClipPath:
                      "polygon(0 0, 100% 0, 86% 50%, 100% 100%, 0 100%)",
                  }}
                  className="absolute top-[16px] left-0 bg-[#23aa5d] text-white text-[12px] sm:text-[13px] font-semibold py-[4px] pl-[16px] pr-[26px] z-20 pointer-events-none select-none tracking-normal shadow-md whitespace-nowrap"
                >
                  {post.date}
                </div>

                {/* Inner Image Container with Hover Zoom */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="relative w-full h-full block bg-white"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-600 ease-out group-hover:scale-110"
                  />
                </Link>
              </div>

              {/* Text Info Below Image */}
              <div className="pt-5 pb-1 flex flex-col flex-1 justify-between">
                <div>
                  <Link href={`/blogs/${post.slug}`}>
                    <h3
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                      className="text-[19px] md:text-[20px] font-bold text-[#1f2937] transition-colors duration-200 group-hover:text-[#e02e6d] leading-[1.35em] mb-2.5 line-clamp-2"
                    >
                      {post.title}
                    </h3>
                  </Link>
                  <p
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                    className="text-[#4b5563] text-[13.5px] md:text-[14px] font-normal leading-[23px] line-clamp-3 mb-4"
                  >
                    {post.description}
                  </p>
                </div>

                {/* Footer Meta */}
                <div
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                  className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#6b7280] pt-3.5 border-t border-[#f4c2d7]/70"
                >
                  <span>By</span>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-[#1f2937] hover:text-[#e02e6d] font-semibold transition-colors"
                  >
                    {post.author}
                  </Link>
                  <span className="mx-1 text-[#e0a9c2]">/</span>
                  <Link
                    href="/blogs"
                    className="text-[#23aa5d] font-bold transition-colors hover:underline"
                  >
                    {post.category}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Wave Transition into Dark Footer-matching Review Section (#0b1c0e) */}
      <div className="w-full overflow-hidden leading-none block -mb-[1px]">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[45px] sm:h-[65px] md:h-[90px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,35 C320,95 680,-10 1020,55 C1240,95 1380,30 1440,40 L1440,90 L0,90 Z"
            fill="#0b1c0e"
          />
        </svg>
      </div>
    </section>
  );
}
