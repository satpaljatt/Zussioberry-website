import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FrozenDessertsPage = () => {
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
            ❄️ Crafted In-House. Loved Everywhere.
          </h2>
          <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed font-[para] max-w-xl mx-auto">
            Unlike other cafés, Zussioberry produces its own frozen desserts. Our centralized kitchens ensure quality, innovation, and cost efficiency across all outlets.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-white min-h-screen overflow-hidden py-16 px-4 sm:px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed font-[para]">
                By manufacturing in-house, we give franchisees an exclusive advantage: higher margins, unique products, and strong customer loyalty.
              </p>
              
              {/* Dessert Features */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Natural Ice Creams</h3>
                    <p className="text-gray-600">100% real fruit & natural ingredients</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Kulfi</h3>
                    <p className="text-gray-600">Traditional flavors reimagined for today's market</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Popsicles</h3>
                    <p className="text-gray-600">Fun, fruity, and refreshing for all ages</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl mt-1">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Gelato</h3>
                    <p className="text-gray-600">Luxurious, creamy indulgence with global appeal</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-80 md:h-96 overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/assets/SmallZussioberry/Desserts.png"
                  alt="Zussioberry Frozen Desserts"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Link
              href="/franchise"
              className="bg-[#23aa5d] text-white px-8 py-3 rounded-lg hover:bg-green-600 text-lg font-[para] transition text-center w-full sm:w-auto"
            >
              Become a Franchisee
            </Link>
            <Link
              href="/desserts"
              className="border border-[#23aa5d] text-[#23aa5d] px-8 py-3 rounded-lg hover:bg-[#23aa5d] hover:text-white text-lg font-[para] transition text-center w-full sm:w-auto"
            >
              Explore Dessert Range
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FrozenDessertsPage