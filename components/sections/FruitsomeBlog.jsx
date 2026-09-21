"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <section className="relative w-full bg-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Top Heart Accent (Frappé Authentic Painted Heart) */}
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

          {/* Section Main Title (Frappé Quicksand Light 47px) */}
          <h2
            style={{ fontFamily: "'Quicksand', sans-serif" }}
            className="text-[34px] sm:text-[42px] md:text-[47px] font-[300] text-[#5a5a5a] tracking-[0.01em] leading-[1.2em] mb-1"
          >
            Our Fruitsome Blog
          </h2>

          {/* Cursive Subtitle (Frappé Dawning of a New Day 30px) */}
          <p
            style={{ fontFamily: "'Dawning of a New Day', cursive" }}
            className="text-[26px] sm:text-[30px] md:text-[32px] font-normal text-[#a4a4a4] leading-[1.3em] tracking-[0.02em]"
          >
            Smoothie demo designed for you
          </p>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group flex flex-col text-left">
              {/* Outer Wrapper for Image & Overhanging Ribbon */}
              <div className="relative w-full aspect-square">
                {/* Authentic Frappé Date Ribbon Tag (Aligned to Start / Left edge of Image) */}
                <div
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    clipPath:
                      "polygon(0 0, 100% 0, 86% 50%, 100% 100%, 0 100%)",
                    WebkitClipPath:
                      "polygon(0 0, 100% 0, 86% 50%, 100% 100%, 0 100%)",
                  }}
                  className="absolute top-[18px] md:top-[20px] left-0 bg-[#abe9b0] text-white text-[13px] md:text-[13.5px] font-[400] py-[4px] md:py-[5px] pl-[18px] md:pl-[20px] pr-[28px] md:pr-[30px] z-20 pointer-events-none select-none tracking-normal shadow-sm whitespace-nowrap text-left"
                >
                  {post.date}
                </div>

                {/* Inner Image Container with Rounded Corners & Hover Zoom */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="relative w-full h-full overflow-hidden rounded-[4px] bg-[#fbfaf7] block shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </Link>
              </div>

              {/* Text Info Below Image */}
              <div className="pt-5 pb-2 flex flex-col flex-1 justify-between">
                <div>
                  <Link href={`/blogs/${post.slug}`}>
                    <h3
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                      className="text-[20px] md:text-[21px] font-[600] text-[#5a5a5a] transition-colors duration-200 group-hover:text-[#23aa5d] leading-[1.35em] mb-2.5 line-clamp-2"
                    >
                      {post.title}
                    </h3>
                  </Link>
                  <p
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                    className="text-[#8f8f8f] text-[13.5px] md:text-[14px] font-[300] leading-[23px] line-clamp-3 mb-4"
                  >
                    {post.description}
                  </p>
                </div>

                {/* Footer Meta */}
                <div
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                  className="flex items-center gap-1 text-[12px] font-[300] text-[#a4a4a4] pt-3 border-t border-gray-100"
                >
                  <span>By</span>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-[#5a5a5a] hover:text-[#23aa5d] font-[400] transition-colors"
                  >
                    {post.author}
                  </Link>
                  <span className="mx-1">/</span>
                  <Link
                    href="/blogs"
                    className="text-[#5a5a5a] hover:text-[#23aa5d] font-[400] transition-colors"
                  >
                    {post.category}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
