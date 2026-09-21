"use client";

import Image from "next/image";

const SummerCooler = () => {
  return (
    <section
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[90vh] flex items-center"
      style={{
        backgroundImage: "url('/assets/AboutBanner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="absolute inset-0 pointer-events-none" aria-hidden="true"></div> */}
      <div className="relative max-w-6xl mx-auto w-full px-4 py-10 sm:py-14 md:py-16 flex flex-col-reverse md:grid md:grid-cols-2 gap md:gap-10 items-center h-full">
        {/* Text Content */}
        <div className="w-full flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0 justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-[heading-1] text-white mb-3 sm:mb-4">
            5 <span className="font-[heading-1]">Summer Cooler</span>
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-[heading-2] font-bold text-white mb-3 sm:mb-4">
            This summer replace sugary drinks
          </h3>
          <p className="text-xs sm:text-sm md:text-lg font-[para] text-gray-200 leading-relaxed mb-5 sm:mb-6 max-w-xl">
            With the mercury rising in India, the quest for cool drinks that
            don’t take a toll on health has never been more pressing. As
            awareness of the ill effects of sugar-infused drinks grows,
            individuals are opting for healthier options that are cooling as
            well as nutritious. Today’s health-conscious Indians are once again
            looking to traditional cooling ingredients in new avatars. Here are
            some refreshing options...
          </p>
          <button className="bg-[#23aa5d] cursor-pointer px-5 py-2 sm:px-6 sm:py-2.5 text-white rounded-lg hover:bg-green-600 text-base sm:text-lg font-[para] transition">
            View Menu
          </button>
        </div>
        {/* Image */}
        <div className="w-full flex justify-center md:justify-end items-center">
          <Image
            src="/assets/sectionZussioberry/BlogImg.png"
            alt="Summer Cooler Drinks"
            width={320}
            height={320}
            className="rounded-lg shadow-lg w-60 h-60 sm:w-80 sm:h-80 object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default SummerCooler;

