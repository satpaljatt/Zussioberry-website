import React from "react";

const FullMenu = () => {
  return (
    <>
      <section className="flex items-center justify-center bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-20 min-h-[70vh]">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-10 lg:gap-16">
          
          
          <div className="flex-1 w-full max-w-md flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-[#23aa5d] text-3xl xs:text-3xl md:text-5xl font-[heading-1] mb-2">
              Explore Our Full Menu
            </h2>
            <p className="text-gray-800 text-lg sm:text-xl mb-6 mt-2 font-[heading-2]">
              A Delicious Variety to Refresh and Delight
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6 w-full">
              <div className="relative bg-gray-100 p-1.5 sm:p-2 rounded-lg shadow flex items-end min-h-[70px] sm:min-h-[100px]">
                <img
                  src="/assets/SmallZussioberry/Explore1.png"
                  alt="Juices"
                  className="absolute left-0 bottom-3 sm:bottom-7 -translate-x-1/3 translate-y-1/3 w-14 h-14 sm:w-24 sm:h-24 z-10"
                />
                <div className="ml-14 sm:ml-20">
                  <p className="text-lg sm:text-2xl font-bold">15+</p>
                  <p className="text-lg sm:text-2xl text-black font-bold font-[para]">Juices</p>
                </div>
              </div>

              <div className="relative bg-gray-100 p-1.5 sm:p-2 rounded-lg shadow flex items-end min-h-[70px] sm:min-h-[100px]">
                <img
                  src="/assets/SmallZussioberry/Explore2.png"
                  alt="Icecream"
                  className="absolute left-3 sm:left-7 bottom-2 sm:bottom-6 -translate-x-1/3 translate-y-1/3 w-12 h-12 sm:w-20 sm:h-20 z-10"
                />
                <div className="ml-14 sm:ml-20">
                  <p className="text-lg sm:text-2xl font-bold">12+</p>
                  <p className="text-lg sm:text-2xl text-black font-bold font-[para]">Icecream</p>
                </div>
              </div>

              <div className="relative bg-gray-100 p-1.5 sm:p-2 rounded-lg shadow flex items-end min-h-[70px] sm:min-h-[100px]">
                <img
                  src="/assets/SmallZussioberry/Explore3.png"
                  alt="Falooda"
                  className="absolute left-0 bottom-3 sm:bottom-7 -translate-x-1/3 translate-y-1/3 w-14 h-14 sm:w-24 sm:h-24 z-10"
                />
                <div className="ml-14 sm:ml-20">
                  <p className="text-lg sm:text-2xl font-bold">6+</p>
                  <p className="text-lg sm:text-2xl text-black font-bold font-[para]">Falooda</p>
                </div>
              </div>

              <div className="relative bg-gray-100 p-1.5 sm:p-2 rounded-lg shadow flex items-end min-h-[70px] sm:min-h-[100px]">
                <img
                  src="/assets/SmallZussioberry/Explore4.png"
                  alt="Milkshake"
                  className="absolute left-0 bottom-3 sm:bottom-7 -translate-x-1/3 translate-y-1/3 w-14 h-14 sm:w-24 sm:h-24 z-10"
                />
                <div className="ml-14 sm:ml-20">
                  <p className="text-lg sm:text-2xl font-bold">18+</p>
                  <p className="text-lg sm:text-2xl text-black font-bold font-[para]">Milkshake</p>
                </div>
              </div>
            </div>

            <a
              href="/menu"
              className="bg-[#23aa5d] cursor-pointer px-5 py-2 mt-3 sm:px-6 sm:py-2.5 text-white rounded-lg hover:bg-green-600 text-sm sm:text-base md:text-lg font-[para] transition inline-block text-center"
            >
              View More
            </a>
          </div>

          
          <div className="flex-1 w-full max-w-sm flex justify-center items-center">
            <img
              src="/assets/ImgAbout.png"
              alt="Green Juice"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FullMenu;
