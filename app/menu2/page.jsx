"use client";
import Image from "next/image";
import React from 'react'

const page = () => {

    const beverages = [
        { name: "Milkshake", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-1.jpg" },
        { name: "Frappe", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-2.jpg" },
        { name: "Boba Drinks", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-3.jpg" },
        { name: "Mojito", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-4.jpg" },
        { name: "Slushy", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-5.jpg" },
        { name: "Hot Chocolate", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-6.jpg" },
        { name: "Smoothie", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-7.jpg" },
        { name: "Coffee", products: 3, img: "/assets/SmallZussioberry/beverage/beverage-8.jpg" },
    ];


  return (
    <>

    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/assets/SectionBG.png"
          alt="Background Illustration"
          fill
          priority
          className="object-cover opacity-100"
          style={{ zIndex: 0 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Juice Bottles Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-[700px] h-[700px] md:w-[500px] md:h-[500px]">
            <Image
              src="/assets/SmallZussioberry/juice_img.png"
              alt="Fruit Juices"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-4 text-center md:text-left">
          <p className="text-xl text-[#beb996] font-[heading-1]">Drink For Health</p>
          <h2 className="text-4xl md:text-6xl font-bold font-[para] leading-snug">
            Fresh Fruit <span className="text-[#de9190]">Juices</span>
          </h2>
          <p className="text-gray-600 font-[para] text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Us percipit urbanitas referrentur ea. Mei at numquam molestiae
            intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an,
            pro ne malis semper perpetua.
          </p>
          <div>
            <button className="bg-transparent border border-[#de9190] text-[#de9190] px-5 py-2 rounded-full flex items-center gap-3 shadow-md hover:bg-[#de9190] hover:text-white transition font-[para]">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#de9190] text-white mr-1">
                {/* Icon: Shopping Cart (Heroicons outline) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" />
                </svg>
              </span>
              <span className="font-semibold">Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>



    <section className="relative py-20 px-6 overflow-hidden">
      {/* Left Side Decorative Image */}
      <div className="hidden md:block absolute left-0 top-8 -z-10">
        <Image
          src="/assets/SectionLeftImg.png"
          alt="Orange Slice"
          width={180}
          height={180}
          className="object-contain opacity-80"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Heading */}
        <div>
          <p className="font-[heading-1] text-xl text-[#beb996]">Best For You</p>
          <h2 className="text-4xl md:text-4xl font-[para] mt-2 font-medium">Our Beverage</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {beverages.map((bev, index) => (
            <div key={index} className="space-y-2 group">
              <div className="relative w-full h-[350px]">
                <Image
                  src={bev.img}
                  alt={bev.name}
                  fill
                  className="object-cover rounded-xl shadow-sm transition-transform duration-500 group-hover:rotate-8"
                />
              </div>
              <h3 className="text-lg mt-6 font-semibold font-[para]">{bev.name}</h3>
              <p className="text-gray-500 text-sm font-[para]">{bev.products} products</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-transparent border border-[#de9190] text-[#de9190] px-5 py-2 rounded-full flex items-center gap-3 shadow-md hover:bg-[#de9190] hover:text-white transition font-[para]">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#de9190] text-white mr-1">
              {/* Icon: Shopping Cart (Heroicons outline) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" />
              </svg>
            </span>
            <span className="font-semibold">View all Products</span>
          </button>
        </div>
      </div>
    </section>



    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/SmallZussioberry/beverage/bgImg.jpg"
        alt="Big Deals Background"
        fill
        priority
        className="object-cover"
      />

      {/* Top & Bottom Effect */}
      <div className="absolute top-0 left-0 w-full">
        <Image
          src="/assets/SmallZussioberry/beverage/pattern-1.png"
          alt="Overlay Top"
          width={1600}
          height={100}
          className="w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full rotate-180">
        <Image
          src="/assets/SectionBottomTexture.png"
          alt="Overlay Bottom"
          width={1600}
          height={100}
          className="w-full object-cover"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-[#d9d4b8]/90 rounded-full w-[350px] h-[350px] flex flex-col justify-center items-center text-center px-6 shadow-lg">
          <p className="text-sm italic text-gray-700">30% Off For Juice</p>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Big Deals of the Week
          </h2>
          <p className="text-gray-700 text-sm mt-3">
            Us percipit urbanitas referrentur ea. Mei at numquam molestiae
            intellegam. Ansed dictas accumsan.
          </p>

          {/* Email Input */}
          <div className="mt-6 flex items-center bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Type your email"
              className="px-4 py-2 text-sm outline-none w-48 md:w-56"
            />
            <button className="bg-pink-500 text-white px-4 py-2 hover:bg-pink-600 transition">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default page

