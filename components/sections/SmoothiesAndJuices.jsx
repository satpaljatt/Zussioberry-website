"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Fresh Fruit & Vegetable Juice",
    image: "/assets/SmallZussioberry/beverage/freshfruitjuice.jpg",
    rating: 5,
    price: "₹119.00",
    href: "/our-products",
  },
  {
    id: 2,
    name: "Fruit Milkshake",
    image: "/assets/SmallZussioberry/beverage/fruitmilkshake.jpg",
    rating: 5,
    price: "₹139.00",
    href: "/our-products",
  },
  {
    id: 3,
    name: "Falooda",
    image: "/assets/SmallZussioberry/beverage/Falooda.JPG",
    rating: 4,
    price: "₹169.00",
    href: "/our-products",
  },
  {
    id: 4,
    name: "Frappe",
    image: "/assets/SmallZussioberry/beverage/newFrappe.jpg",
    rating: 5,
    price: "₹189.00",
    href: "/our-products",
  },
  {
    id: 5,
    name: "Boba Drinks",
    image: "/assets/SmallZussioberry/beverage/Boba drink.jpg",
    rating: 5,
    price: "₹149.00",
    href: "/our-products",
  },
  {
    id: 6,
    name: "Mojito",
    image: "/assets/SmallZussioberry/beverage/mojito.jpg",
    rating: 5,
    price: "₹129.00",
    href: "/our-products",
  },
  {
    id: 7,
    name: "Smoothie",
    image: "/assets/SmallZussioberry/beverage/smothie.JPG",
    rating: 4,
    price: "₹179.00",
    href: "/our-products",
  },
  {
    id: 8,
    name: "Dry Fruit MilkShake",
    image: "/assets/SmallZussioberry/beverage/DRYFRUITMILKSHAKE.jpg",
    rating: 5,
    price: "₹199.00",
    href: "/our-products",
  },
];

export default function SmoothiesAndJuices() {
  return (
    <section className="relative w-full bg-white pt-[115px] pb-[105px] overflow-hidden">
      {/* Left Hand-drawn Sketch Background Doodle (TASTY) */}
      <div className="absolute left-0 top-[80px] md:top-[120px] z-0 pointer-events-none select-none w-[180px] sm:w-[260px] lg:w-[330px] opacity-90">
        <Image
          src="/assets/home/smoothies/h1-background-img-1.png"
          alt="Tasty doodle"
          width={330}
          height={380}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Right Hand-drawn Sketch Background Doodle */}
      <div className="absolute right-0 bottom-[40px] md:bottom-[60px] z-0 pointer-events-none select-none w-[140px] sm:w-[200px] lg:w-[260px] opacity-80">
        <Image
          src="/assets/home/smoothies/h1-img-5.png"
          alt="Fruit doodle right"
          width={260}
          height={300}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Top Heart Accent Image (Frappé Authentic Painted Heart) */}
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
            Smoothies &amp; Juices
          </h2>

          {/* Cursive Subtitle (Frappé Dawning of a New Day 30px) */}
          <p
            style={{ fontFamily: "'Dawning of a New Day', cursive" }}
            className="text-[26px] sm:text-[30px] md:text-[32px] font-normal text-[#a4a4a4] leading-[1.3em] tracking-[0.02em]"
          >
            Smoothie demo designed for you
          </p>
        </div>

        {/* 8-Product Grid (2 Rows of 4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-12 max-w-[1140px] mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col items-center text-center"
            >
              {/* Image Container with 600:680 Aspect Ratio */}
              <Link
                href={product.href}
                className="relative w-full aspect-[600/680] overflow-hidden rounded-[4px] bg-[#fbfaf7] block shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Soft Pink "Add to Cart" Hover Overlay (Commented out: offline cafe menu) */}
                {/* <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-black/10">
                  <span
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                    className="bg-[#fab9be] hover:bg-[#f7a5ac] text-white text-[11px] uppercase tracking-[0.16em] font-semibold py-2.5 px-6 rounded-[2px] shadow-sm transition-colors duration-200"
                  >
                    add to cart
                  </span>
                </div> */}
              </Link>

              {/* Product Info */}
              <div className="pt-4 pb-2 flex flex-col items-center gap-1.5 w-full">
                <Link href={product.href}>
                  <h3
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                    className="text-[18px] md:text-[19px] font-[500] text-[#5a5a5a] transition-colors duration-200 group-hover:text-[#23aa5d]"
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
                          ? "text-[#fab9be] fill-current"
                          : "text-[#e8e8e8] fill-current"
                      }`}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Price (Indian Rupee in Open Sans Light 300) */}
                <span
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                  className="text-[15px] font-[300] text-[#8f8f8f]"
                >
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
