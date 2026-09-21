// "use client";
// import Image from "next/image";
// import React from 'react'

// const FreshFruitsJuices = () => {
//   return (
//     <section className="relative py-20 px-6 overflow-hidden">
//       {/* Background Illustration */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         <Image
//           src="/assets/SectionBG.png"
//           alt="Background Illustration"
//           fill
//           priority
//           className="object-cover opacity-100"
//           style={{ zIndex: 0 }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Side - Juice Bottles Image */}
//         <div className="flex justify-center items-center">
//           <div className="relative w-[700px] h-[700px] md:w-[500px] md:h-[500px]">
//             <Image
//               src="/assets/SmallZussioberry/juice_img.png"
//               alt="Fruit Juices"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right Side - Content */}
//         <div className="space-y-2 text-center md:text-left">
//           <p className="text-xl text-[#23aa5d] font-[para]">Drink For Health</p>
//           <h2 className="text-3xl xs:text-3xl md:text-5xl  font-[heading-1] leading-snug">
//             Fresh Fruit <span className="text-[#23aa5d]">Juices</span>
//           </h2>
//           <p className="text-gray-600 font-[para] text-lg leading-relaxed max-w-md mx-auto md:mx-0">
//             Us percipit urbanitas referrentur ea. Mei at numquam molestiae
//             intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an,
//             pro ne malis semper perpetua.
//           </p>
//           <div>
//             <button className="bg-transparent cursor-pointer mt-6 border border-[#23aa5d] text-[#23aa5d] px-5 py-2 rounded-full flex items-center gap-3 shadow-md hover:bg-[#23aa5d] hover:text-white transition font-[para]">
//               <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#23aa5d] text-white mr-1">
//                 {/* Icon: Shopping Cart (Heroicons outline) */}
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" />
//                 </svg>
//               </span>
//               <span className="font-semibold">Buy Now</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FreshFruitsJuices;


"use client";
import Image from "next/image";
import React from 'react'

const FreshFruitsJuices = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/assets/SectionBG.png"
          alt="Background Illustration"
          fill
          priority
          className="object-cover opacity-100"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Side - Juice Bottles Image */}
        <div className="flex justify-center items-center order-2 md:order-1">
          <div className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
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
        <div className="space-y-2 text-center md:text-left order-1 md:order-2">
          <p className="text-lg sm:text-xl text-[#23aa5d] font-[para]">Drink For Health</p>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[heading-1] leading-tight sm:leading-snug">
            Fresh Fruit <span className="text-[#23aa5d]">Juices</span>
          </h2>
          <p className="text-gray-600 font-[para] text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0 mt-3 sm:mt-4">
            Us percipit urbanitas referrentur ea. Mei at numquam molestiae
            intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an,
            pro ne malis semper perpetua.
          </p>
          <div className="mt-4 sm:mt-6">
            <button className="bg-transparent cursor-pointer border border-[#23aa5d] text-[#23aa5d] px-4 sm:px-5 py-2 rounded-full flex items-center gap-2 sm:gap-3 shadow-md hover:bg-[#23aa5d] hover:text-white transition font-[para] mx-auto md:mx-0 w-fit">
              <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#23aa5d] text-white">
                {/* Icon: Shopping Cart (Heroicons outline) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" />
                </svg>
              </span>
              <span className="font-semibold text-sm sm:text-base">Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreshFruitsJuices;