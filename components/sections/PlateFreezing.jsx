import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
            ⚙️ The Science of Freshness: Plate Freezing Technology
          </h2>
          <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed font-[para] max-w-xl mx-auto">
            At Zussioberry, innovation drives quality. Our proprietary plate freezing technology preserves fruit pulp at its peak freshness, locking in nutrition and flavor for year-round supply.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-white min-h-screen overflow-hidden py-16 px-4 sm:px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-md h-80 md:h-96 overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/assets/SmallZussioberry/Technology.png"
                  alt="Plate Freezing Technology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-gray-800">This ensures:</h3>
              
              {/* Technology Benefits */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Consistency</h3>
                    <p className="text-gray-600">Every outlet serves the same great taste</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Cost Efficiency</h3>
                    <p className="text-gray-600">Reduced wastage & bulk supply advantage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
                    <p className="text-gray-600">Base for beverages, desserts, and food</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Franchise Growth</h3>
                    <p className="text-gray-600">Centralized production = easy scalability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <Link
              href="/supply-chain"
              className="bg-[#23aa5d] text-white px-8 py-3 rounded-lg hover:bg-green-600 text-lg font-[para] transition text-center w-full sm:w-auto"
            >
              Learn More About Our Supply Chain
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlateFreezing


     {/*<div className="relative z-10 flex w-full px-4 sm:px-6 md:px-8 lg:w-[70%] items-center justify-start md:justify-center h-full">
        
        <div className="relative z-10 flex items-center justify-center w-full h-full py-8">
          <motion.div 
            className="bg-[#d9d4b8]/90 rounded-full w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] flex flex-col justify-center items-center text-center p-6 sm:p-8 md:px-6 shadow-lg"
            variants={circleVariants}
            whileHover={circleVariants.hover}
          >
            <motion.p 
              className="text-xs sm:text-sm italic text-gray-700"
              variants={itemVariants}
            >
              Exciting News!
            </motion.p>
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-bold mt-1 sm:mt-2"
              variants={itemVariants}
            >
              Opening Soon
            </motion.h2>
            <motion.p 
              className="text-gray-700 text-xs sm:text-sm mt-2 sm:mt-3 max-w-[240px] sm:max-w-xs"
              variants={itemVariants}
            >
              We're brewing something special! Get ready for an unforgettable experience with our fresh juices, smoothies, and healthy beverages coming to your neighborhood soon.
            </motion.p>

           
            <motion.div 
              className="mt-4 sm:mt-6 flex items-center bg-white rounded-full overflow-hidden shadow-md w-full max-w-[240px] sm:max-w-xs"
              variants={itemVariants}
            >
              <motion.input
                type="email"
                placeholder="Get notified when we open"
                className="px-3 sm:px-4 py-2 text-xs sm:text-sm outline-none flex-grow"
                whileFocus={inputVariants.focus}
              />
              <motion.button 
                className="bg-[#23aa5d] cursor-pointer text-white px-3 sm:px-4 py-2 flex-shrink-0"
                whileHover={buttonVariants.hover}
                whileTap={buttonVariants.tap}
              >
                →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div> */}