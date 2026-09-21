import React from 'react'

const NatureGoodness = () => {
  return (
    <>
       <section className="bg-white py-14 sm:py-20 px-2 sm:px-4 md:px-20 relative overflow-hidden min-h-[70vh] sm:min-h-[60vh]">
        <h2 className="text-[#23aa5d] text-3xl xs:text-3xl md:text-5xl text-center mb-3 sm:mb-4 font-[heading-1]">
          Nature’s Goodness in Every Sip!
        </h2>
        <p className="text-center text-gray-700 max-w-md sm:max-w-2xl mx-auto mb-8 sm:mb-12 font-[para] text-base sm:text-lg leading-relaxed">
          At Zussioberry, we believe in keeping it real — no <br className="hidden xs:inline" />
          artificial flavors, no chemicals, just pure ingredients <br className="hidden xs:inline" />from nature.
        </p>

        {/* Decorative Images - Hide on mobile for better UX */}
        <div className="hidden sm:block absolute left-0 top-0 w-32 md:w-64">
          <img src="/assets/sectionZussioberry/FAQs.png" alt="Lemon Decor" className="w-full" />
        </div>
        <div className="hidden sm:block absolute right-0 bottom-0 w-32 md:w-64">
          <img src="/assets/sectionZussioberry/RightFAQs.png" alt="Lemon Decor" className="w-full" />
        </div>

        <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row justify-center items-stretch px-0 sm:px-4 md:px-20">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center mx-auto mb-6 sm:mb-0 w-full sm:w-1/3 max-w-xs">
            <img
              src="/assets/SmallZussioberry/1.png"
              alt="Natural"
              className="w-20 h-20 sm:w-28 sm:h-28 object-contain mb-2"
            />
            <h3 className="text-lg sm:text-xl font-extrabold font-[heading-2] mb-2 mt-1">100% Natural</h3>
            <p className="text-gray-600 font-[para] text-sm sm:text-base leading-relaxed">
              Crafted with only real <br className="hidden xs:inline" />
              fruits and herbs — no <br className="hidden xs:inline" />
              artificial additives,<br className="hidden xs:inline" /> ever.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center mx-auto mb-6 sm:mb-0 w-full sm:w-1/3 max-w-xs">
            <img
              src="/assets/SmallZussioberry/2.png"
              alt="Fresh"
              className="w-20 h-20 sm:w-28 sm:h-28 object-contain mb-2 sm:mb-4"
            />
            <h3 className="text-lg sm:text-xl font-extrabold mb-2 font-[heading-2]">Super Fresh</h3>
            <p className="text-gray-600 font-[para] text-sm sm:text-base leading-relaxed">
              Prepared fresh daily<br className="hidden xs:inline" /> to retain nutrients and <br className="hidden xs:inline" /> deliver unmatched <br className="hidden xs:inline" />taste.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center mx-auto w-full sm:w-1/3 max-w-xs">
            <img
              src="/assets/SmallZussioberry/3.png"
              alt="Local"
              className="w-20 h-20 sm:w-28 sm:h-28 object-contain mb-2 sm:mb-4"
            />
            <h3 className="text-lg sm:text-xl font-extrabold mb-2 font-[heading-2]">Locally Supported</h3>
            <p className="text-gray-600 font-[para] text-sm sm:text-base leading-relaxed">
              We source locally to<br className="hidden xs:inline" /> ensure quality,<br className="hidden xs:inline" /> support farmers, and<br className="hidden xs:inline" /> reduce our carbon <br className="hidden xs:inline" />footprint.
            </p>
          </div>
        </div>
      </section> 
    </>
  )
}

export default NatureGoodness