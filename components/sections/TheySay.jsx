"use client";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non mi non nisl pulvinar aliquet. Morbi aliquet tortor ac metus bibendum.",
    author: "Ema Richardson",
    role: "Smoothie lover",
  },
  {
    id: 2,
    quote:
      "Zussioberry is our favorite spot for authentic fruit shakes and delicious beverages. Fresh ingredients and unmatched quality every single time.",
    author: "Lena Richardson",
    role: "Smoothie lover",
  },
  {
    id: 3,
    quote:
      "The taste, texture, and natural goodness in every cup is truly refreshing. The best smoothie and beverage experience in town!",
    author: "Anna Richardson",
    role: "Smoothie lover",
  },
];

export default function TheySay() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="relative w-full bg-white pt-14 pb-20 md:pt-16 md:pb-24 overflow-hidden text-center select-none">
      <div className="max-w-[920px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading (Frappé Quicksand Light 47px) */}
        <h2
          style={{ fontFamily: "'Quicksand', sans-serif" }}
          className="text-[34px] sm:text-[42px] md:text-[47px] font-[300] text-[#5a5a5a] tracking-[0.01em] leading-tight mb-8 md:mb-10"
        >
          They Say
        </h2>

        {/* Testimonial Quote with Cursive Watermark Backdrop */}
        <div className="relative flex flex-col items-center justify-center min-h-[160px] md:min-h-[140px] px-2">
          {/* Subtle Calligraphy Watermark Backdrop */}
          <span
            aria-hidden="true"
            style={{ fontFamily: "'Dawning of a New Day', cursive" }}
            className="absolute inset-0 flex items-center justify-center text-[100px] sm:text-[140px] md:text-[170px] text-[#5a5a5a]/[0.04] pointer-events-none select-none -top-6"
          >
            Frappé
          </span>

          {/* Testimonial Quote in Dawning of a New Day 30px */}
          <p
            key={current.id}
            style={{ fontFamily: "'Dawning of a New Day', cursive" }}
            className="text-[25px] sm:text-[29px] md:text-[32px] font-normal text-[#a4a4a4] leading-[1.45em] tracking-[0.02em] max-w-[820px] transition-opacity duration-500 ease-in-out"
          >
            {current.quote}
          </p>
        </div>

        {/* Author Details */}
        <div className="mt-8 mb-7">
          <h4
            style={{ fontFamily: "'Quicksand', sans-serif" }}
            className="text-[18px] md:text-[19px] font-[500] text-[#5a5a5a] tracking-[0.01em]"
          >
            {current.author}
          </h4>
          <span
            style={{ fontFamily: "'Open Sans', sans-serif" }}
            className="text-[14px] font-[300] text-[#a4a4a4] block mt-1"
          >
            {current.role}
          </span>
        </div>

        {/* Pagination Dots (Soft Pink Active Dot) */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "bg-[#fab9be] scale-125"
                  : "bg-[#dcdcdc] hover:bg-[#fab9be]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
