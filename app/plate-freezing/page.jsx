// Plate Freezing Page
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";

const PlateFreezing = () => {
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
            The Science of Freshness: Plate Freezing Technology
          </h2>
          <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed font-[para] max-w-xl mx-auto">
            At Zussioberry, innovation drives quality. Our proprietary plate freezing technology preserves fruit pulp at its peak freshness, locking in nutrition and flavor for year-round supply.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-white overflow-hidden">

        {/* Main Content Grid */}
        <section className="py-10 px-4 sm:px-6 md:py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6 w-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-green-600 text-center lg:text-left">
                  Plate Freezing Benefits
                </h2>
                
                <p className="text-gray-700 text-lg leading-relaxed font-[para]">
                  Our advanced plate freezing technology ensures that every Zussioberry outlet delivers consistent quality and exceptional taste.
                </p>
                
                {/* Technology Benefits */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">●</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Consistency</h3>
                      <p className="text-gray-600 text-sm">Every outlet serves the same great taste</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">●</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Cost Efficiency</h3>
                      <p className="text-gray-600 text-sm">Reduced wastage & bulk supply advantage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">●</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Innovation</h3>
                      <p className="text-gray-600 text-sm">Base for beverages, desserts, and food</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">●</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Franchise Growth</h3>
                      <p className="text-gray-600 text-sm">Centralized production = easy scalability</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image with Green Circle Overlay - Hidden on mobile */}
              <div className="relative w-full flex justify-center items-center mt-10 lg:mt-20 min-h-[250px] sm:min-h-[350px]">
                {/* Green Circle in the top left - Hidden on mobile */}
                <div className="hidden lg:block absolute -top-16 -left-10 sm:-top-24 sm:left-auto sm:-right-16 lg:top-[-30%] lg:left-[70%] z-10 pointer-events-none">
                  <div className="w-40 h-40 sm:w-60 sm:h-60 lg:w-[70vh] lg:h-[70vh] bg-green-500 rounded-full opacity-80"></div>
                </div>
                <div className="relative h-56 sm:h-80 md:h-96 w-full max-w-md overflow-hidden z-20">
                  <Image
                    src="/assets/SmallZussioberry/Desserts.png"
                    alt="Plate Freezing Technology"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Button */}
        <section className="py-10 px-4 sm:px-6 pb-16"> {/* Increased bottom padding */}
          <div className="max-w-5xl mx-auto flex justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full flex items-center transition duration-300 text-center cursor-pointer">
              
            
              Learn More About Our Supply Chain
              <IoIosArrowForward className="ml-2" />
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default PlateFreezing