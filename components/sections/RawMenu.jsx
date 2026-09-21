"use client";
import React from "react";
import Image from "next/image";

const menuCol1 = [
  {
    id: 1,
    name: "Pink Smoothie",
    price: "₹149",
    desc: "Lorem ipsum dolor sit amet, consectetur elit.",
    image: "/assets/home/raw-menu/thumb-pink-smoothie.png",
  },
  {
    id: 2,
    name: "Orange Smoothie",
    price: "₹169",
    desc: "Lorem ipsum dolor sit amet, consectetur elit.",
    image: "/assets/home/raw-menu/thumb-orange-smoothie.png",
  },
  {
    id: 3,
    name: "White Smoothie",
    price: "₹159",
    desc: "Lorem ipsum dolor sit amet, consectetur elit.",
    image: "/assets/home/raw-menu/thumb-white-smoothie.png",
  },
  {
    id: 4,
    name: "Green Smoothie",
    price: "₹189",
    desc: "Lorem ipsum dolor sit amet, consectetur elit.",
    image: "/assets/home/raw-menu/thumb-green-smoothie.png",
  },
];

const menuCol2 = [
  {
    id: 5,
    name: "Kiwi Smoothie",
    price: "₹179",
    desc: "Lorem ipsum dolor sit amet, consectetur elit.",
    image: "/assets/home/raw-menu/thumb-kiwi-smoothie.png",
  },
  {
    id: 6,
    name: "Red Smoothie",
    price: "₹199",
    desc: "Lorem ipsum dolor sit amet, consectetur elit.",
    image: "/assets/home/raw-menu/thumb-red-smoothie.png",
  },
  {
    id: 7,
    name: "Kale Smoothie",
    price: "₹189",
    desc: "Lorem ipsum dolor sit amet, consectetur elit.",
    image: "/assets/home/raw-menu/thumb-kale-smoothie.png",
  },
  {
    id: 8,
    name: "Pink Smoothie",
    price: "₹159",
    desc: "Lorem ipsum dolor sit amet, consectetur elit.",
    image: "/assets/home/raw-menu/thumb-berry-smoothie.png",
  },
];

export default function RawMenu() {
  return (
    <section className="relative w-full bg-[#abe9b0] pt-[115px] pb-[125px] md:pt-[135px] md:pb-[145px] overflow-hidden">
      {/* 1. Top Torn Paper Cutout Edge */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none select-none">
        <Image
          src="/assets/home/raw-menu/torn-paper-top.png"
          alt="Top torn edge"
          width={1920}
          height={37}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* 2. Bottom Torn Paper Cutout Edge */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none select-none">
        <Image
          src="/assets/home/raw-menu/torn-paper-bottom.png"
          alt="Bottom torn edge"
          width={1920}
          height={37}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* 3. Top-Left "100% RAW INGREDIENTS" Ribbon & Seeds Badge */}
      <div className="absolute top-[-5px] left-[-10px] sm:top-[5px] sm:left-[5px] lg:top-[15px] lg:left-[20px] w-[180px] sm:w-[240px] lg:w-[290px] z-10 pointer-events-none select-none">
        <Image
          src="/assets/home/raw-menu/raw-ingrediants.png"
          alt="100% Raw Ingredients"
          width={298}
          height={247}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 4. Bottom-Left Pink & Green Striped Straws */}
      <div className="absolute bottom-[-15px] left-[-15px] sm:bottom-[-10px] sm:left-[-5px] lg:bottom-[-5px] lg:left-[10px] w-[170px] sm:w-[230px] lg:w-[290px] z-10 pointer-events-none select-none">
        <div className="relative w-full h-[200px] sm:h-[260px] lg:h-[320px]">
          {/* Pink Straw */}
          <div className="absolute bottom-0 left-0 w-[85%]">
            <Image
              src="/assets/home/raw-menu/straw-pink.png"
              alt="Pink straw"
              width={468}
              height={715}
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Green Straw */}
          <div className="absolute bottom-[-10px] left-[-15px] w-[95%]">
            <Image
              src="/assets/home/raw-menu/straw-green.png"
              alt="Green straw"
              width={503}
              height={586}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* 5. Top-Right Spoon with Blueberries */}
      <div className="absolute top-[20px] right-[-10px] sm:top-[30px] sm:right-[5px] lg:top-[40px] lg:right-[20px] w-[210px] sm:w-[270px] lg:w-[330px] z-10 pointer-events-none select-none">
        <Image
          src="/assets/home/raw-menu/spoon-blueberries.png"
          alt="Spoon with blueberries"
          width={309}
          height={151}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 6. Falling Blueberries Tumbling Down along the Right */}
      <div className="absolute top-[140px] right-[65px] sm:top-[175px] sm:right-[95px] lg:top-[205px] lg:right-[115px] w-[24px] sm:w-[28px] lg:w-[32px] z-10 pointer-events-none select-none animate-pulse">
        <Image
          src="/assets/home/raw-menu/blueberry-1.png"
          alt="Blueberry 1"
          width={40}
          height={39}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="absolute top-[200px] right-[45px] sm:top-[245px] sm:right-[70px] lg:top-[285px] lg:right-[90px] w-[22px] sm:w-[26px] lg:w-[30px] z-10 pointer-events-none select-none">
        <Image
          src="/assets/home/raw-menu/blueberry-2.png"
          alt="Blueberry 2"
          width={45}
          height={45}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="absolute top-[265px] right-[75px] sm:top-[320px] sm:right-[105px] lg:top-[370px] lg:right-[130px] w-[22px] sm:w-[25px] lg:w-[28px] z-10 pointer-events-none select-none animate-pulse">
        <Image
          src="/assets/home/raw-menu/blueberry-3.png"
          alt="Blueberry 3"
          width={37}
          height={37}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="absolute top-[335px] right-[55px] sm:top-[400px] sm:right-[80px] lg:top-[460px] lg:right-[100px] w-[24px] sm:w-[28px] lg:w-[32px] z-10 pointer-events-none select-none">
        <Image
          src="/assets/home/raw-menu/blueberry-4.png"
          alt="Blueberry 4"
          width={36}
          height={35}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="absolute top-[405px] right-[80px] sm:top-[480px] sm:right-[110px] lg:top-[550px] lg:right-[135px] w-[20px] sm:w-[23px] lg:w-[26px] z-10 pointer-events-none select-none animate-pulse">
        <Image
          src="/assets/home/raw-menu/blueberry-5.png"
          alt="Blueberry 5"
          width={43}
          height={43}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 7. Subtle Floating Leaf Doodles */}
      <div className="absolute top-[260px] left-[30px] lg:left-[70px] w-[26px] sm:w-[30px] opacity-70 rotate-[20deg] pointer-events-none select-none">
        <Image
          src="/assets/home/raw-menu/floating-leaf.png"
          alt="Leaf doodle"
          width={31}
          height={49}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="absolute bottom-[230px] left-[80px] lg:left-[130px] w-[24px] sm:w-[28px] opacity-65 rotate-[-45deg] pointer-events-none select-none">
        <Image
          src="/assets/home/raw-menu/floating-leaf.png"
          alt="Leaf doodle"
          width={31}
          height={49}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="absolute bottom-[190px] right-[30px] lg:right-[90px] w-[26px] sm:w-[30px] opacity-70 rotate-[60deg] pointer-events-none select-none">
        <Image
          src="/assets/home/raw-menu/floating-leaf.png"
          alt="Leaf doodle"
          width={31}
          height={49}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Main Container */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Center "RAW MENU" Graphic Heading */}
        <div className="flex justify-center mb-10 md:mb-14">
          <Image
            src="/assets/home/raw-menu/raw-menu.png"
            alt="RAW MENU"
            width={181}
            height={186}
            className="w-[145px] sm:w-[165px] md:w-[185px] h-auto object-contain"
            priority
          />
        </div>

        {/* 2-Column Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-7 md:gap-y-9 max-w-[980px] mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 md:gap-7">
            {menuCol1.map((item) => (
              <div
                key={item.id}
                className="flex items-center group transition-transform duration-300 hover:translate-x-1"
              >
                {/* Circular Thumbnail Photo */}
                <div className="w-[72px] h-[72px] sm:w-[78px] sm:h-[78px] md:w-[82px] md:h-[84px] rounded-full overflow-hidden shrink-0 shadow-sm border-2 border-white/40 bg-white/20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={82}
                    height={84}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 ml-4 sm:ml-5 flex flex-col justify-center">
                  <div className="flex items-baseline w-full">
                    <h4
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                      className="text-white text-[18px] md:text-[19px] font-[600] tracking-[0.01em] whitespace-nowrap"
                    >
                      {item.name}
                    </h4>
                    <span className="flex-1 border-b border-dotted border-white/60 mx-3 relative -top-[3px]"></span>
                    <span
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                      className="text-white text-[17px] md:text-[18px] font-[600] whitespace-nowrap"
                    >
                      {item.price}
                    </span>
                  </div>
                  <p
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                    className="text-white/85 text-[13.5px] md:text-[14px] font-[300] leading-[22px] mt-1 text-left"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 md:gap-7">
            {menuCol2.map((item) => (
              <div
                key={item.id}
                className="flex items-center group transition-transform duration-300 hover:translate-x-1"
              >
                {/* Circular Thumbnail Photo */}
                <div className="w-[72px] h-[72px] sm:w-[78px] sm:h-[78px] md:w-[82px] md:h-[84px] rounded-full overflow-hidden shrink-0 shadow-sm border-2 border-white/40 bg-white/20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={82}
                    height={84}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 ml-4 sm:ml-5 flex flex-col justify-center">
                  <div className="flex items-baseline w-full">
                    <h4
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                      className="text-white text-[18px] md:text-[19px] font-[600] tracking-[0.01em] whitespace-nowrap"
                    >
                      {item.name}
                    </h4>
                    <span className="flex-1 border-b border-dotted border-white/60 mx-3 relative -top-[3px]"></span>
                    <span
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                      className="text-white text-[17px] md:text-[18px] font-[600] whitespace-nowrap"
                    >
                      {item.price}
                    </span>
                  </div>
                  <p
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                    className="text-white/85 text-[13.5px] md:text-[14px] font-[300] leading-[22px] mt-1 text-left"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
