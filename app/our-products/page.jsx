import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

const MenuPage = () => {
  const beverages = [
    'Fresh Juices & Smoothies',
    'Milkshakes & Ice Cream Shakes',
    'Falooda & Desi Coolers',
    'Bubble Tea & Boba Brews',
    'Mocktails, Slushies & Frappes'
  ]

  const food = [
    'Sandwiches, Wraps & Burgers',
    'Pizzas & Pastas',
    'Thai Curries & Fusion Meals',
    'Burrito Bowls & Rice Plates',
    'Nachos, Fries & Quick Bites',
    'Soups & Salads'
  ]

  const desserts = [
    'Natural Ice Creams – pure fruit & milk-based indulgence',
    'Kulfi – nostalgic Indian classics with creamy richness',
    'Popsicles – refreshing frozen fruit on a stick',
    'Gelato – smooth, premium, European delight'
  ]

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/careerBanner.png')",
        }}>
        
        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-[heading-1] mb-4">
            Taste the Full Spectrum of Zussioberry
          </h2>
          <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed font-[para] max-w-xl mx-auto">
            We don't just serve food—we create experiences.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <div className="bg-white min-h-screen overflow-hidden">

      {/* Beverages Section */}
      <section className="py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Beverages List */}
            <div className="space-y-6 w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-green-600 text-center lg:text-left">
                Beverages
              </h2>
              <div className="space-y-3">
                {beverages.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3 justify-center sm:justify-start"
                  >
                    <span className="text-green-500">➤</span>
                    <span className="text-gray-700 font-[para] text-base sm:text-lg font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Beverages Image with Green Circle Overlay */}
            <div className="relative w-full flex justify-center items-center mt-10 lg:mt-20 min-h-[250px] sm:min-h-[350px]">
              {/* Green Circle in the top left */}
              <div className="absolute -top-16 -left-10 sm:-top-24 sm:left-auto sm:-right-16 lg:top-[-30%] lg:left-[70%] z-10 pointer-events-none">
                <div className="w-40 h-40 sm:w-60 sm:h-60 lg:w-[70vh] lg:h-[70vh] bg-green-500 rounded-full opacity-80"></div>
              </div>
              <div className="relative h-56 sm:h-80 md:h-96 w-full max-w-md overflow-hidden shadow-2xl z-20">
                <img
                  src="/assets/SmallZussioberry/juice.png"
                  alt="Beverages"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="py-10 px-4 sm:px-6 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Food Image - Now on left */}
            <div className="relative w-full flex justify-center items-center mt-10 lg:mt-20 min-h-[250px] sm:min-h-[350px] order-1">
              <div className="relative h-56 sm:h-80 md:h-96 w-full max-w-md overflow-hidden shadow-2xl z-20">
                <img
                  src="/assets/SmallZussioberry/milkshake.png"
                  alt="Food"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Food List - Now on right */}
            <div className="space-y-6 w-full order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-green-600 text-center lg:text-left">
                Food
              </h2>
              <div className="space-y-3">
                {food.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3 justify-center md:justify-start">
                    <span className="text-green-500">➤</span>
                    <span className="text-gray-700 text-base sm:text-lg font-[para] font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desserts Section */}
      <section className="py-10 px-4 sm:px-6 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Desserts List */}
            <div className="space-y-6 w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-green-600 text-center lg:text-left">
                Frozen Desserts
              </h2>
              <div className="space-y-3">
                {desserts.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-green-500">➤</span>
                    <span className="text-gray-700 font-[para] text-base sm:text-lg font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Try Our Frozen Desserts Button */}
              <div className="pt-4 flex justify-center lg:justify-start">
                <a href="/frozen-desserts" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full flex items-center transition duration-300">
                  Try Our Frozen Desserts
                  <IoIosArrowForward className="ml-2" />
                </a>
              </div>
            </div>

            {/* Desserts Image */}
            <div className="relative w-full flex justify-center items-center mb-8 lg:mb-0">
              <div className="relative h-56 sm:h-80 w-full max-w-md overflow-hidden shadow-2xl">
                <img
                  src="/assets/SmallZussioberry/Smoothie.png"
                  alt="Desserts"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Full Menu Button */}
      <section className="py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex justify-center">
          <a 
            href="/assets/Zussioberry Menu.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full flex items-center transition duration-300"
          >
            View Full Menu
            <IoIosArrowForward className="ml-2" />
          </a>
        </div>
      </section>

      </div>
    </>
  )
}

export default MenuPage