"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

const Page = () => {
  const timelineRef = useRef(null);
  const yearRefs = useRef([]);

  const timelineData = [
    {
      year: "2007",
      title: "Mini juice kiosk at DAKC (Navi Mumbai)",
    },
    {
      year: "2008",
      title: "Add another outlet at RCP (Navi Mumbai)",
    },
    {
      year: "2009",
      title: "Open juice shop at Spencers Hypermarket (Malad)",
    },
    {
      year: "2010",
      title: "Open juice café at RCP (Navi Mumbai)",
    },
    {
      year: "2012",
      title: "Subair joined as the partner",
    },
    {
      year: "2014",
      title: "Ekta taken over the café business operations",
    },
    {
      year: "2014",
      title:
        "Started small frozen fruit processing unit at Mahape MIDC under company name Paradise Juice Private Limited",
    },
    {
      year: "2015",
      title: "PJPL Targeted Horeca and B2B under the brand name Frutteto",
    },
    {
      year: "2016",
      title: "PJPL completed its first export",
    },
    {
      year: "2017",
      title: "Moved to a new factory in Nashik",
    },
    {
      year: "2020",
      title: "Frutteto moved to a much bigger production base increasing its capacity by 6 times.",
    },
    {
      year: "2024",
      title: "Launched the brand Zussioberry blended with delight",
    },
    {
      year: "2025",
      title: "upgraded all the existing juice outlet as a brand name - Zussioberry ",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = yearRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              // Add delay based on index for staggered animation
              setTimeout(() => {
                entry.target.classList.add("animate-in");
              }, index * 150);
            }
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    yearRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      yearRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Initialize refs array
  if (yearRefs.current.length !== timelineData.length) {
    yearRefs.current = Array(timelineData.length).fill().map((_, i) => yearRefs.current[i] || React.createRef());
  }

  return (
    <>
      <section
        className="relative bg-center bg-cover min-h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/AboutUs.png')",
        }}
      >
        <div className="relative z-10 max-w-6xl w-full mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-0">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
            <h2 className="font-[heading-1] text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-6 text-white">
              From a Juice Kiosk to a Global Brand in the Making
              <br className="hidden xs:inline" /> A Love for Flavor!
            </h2>
            <p className="text-sm xs:text-base md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed font-[para] max-w-lg">
              The Zussioberry journey began with a small juice counter and a big
              dream: to make fruits and flavors more exciting, accessible, and
              innovative. Over 15+ years, we've grown into a multi-format
              franchise brand with food, beverages, and frozen desserts loved by
              families everywhere.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/assets/zlogo2.png"
              alt="Juice Glass"
              className="w-64 xs:w-70 sm:w-60 md:w-full max-w-xs sm:max-w-sm md:max-w-xl h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Updated "What Makes Us Unique" Section to match FranchiseIntro style */}
      <section className="py-16 px-4 sm:px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl xs:text-3xl md:text-5xl font-[heading-1] mb-4">
            What <span className="text-[#23aa5d]">Makes Us Unique</span>?
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto font-[para]">
            At Zussioberry, we combine innovation with tradition to create
            exceptional experiences for our customers.
          </p>

          {/* Features - matching FranchiseIntro style */}
          {(() => {
            const features = [
              {
                title: "Proprietary Plate Freezing Technology",
                description:
                  "Our advanced freezing technology preserves the natural flavor and nutrients of fruit pulp, ensuring superior quality in all our frozen products.",
                bg: "bg-gray-50",
              },
              {
                title: "In-House Manufacturing",
                description:
                  "We proudly craft all our natural ice creams, kulfis, popsicles, and gelato in-house, maintaining the highest quality standards and authentic flavors.",
                bg: "bg-gray-50",
              },
              {
                title: "Diverse Menu Offerings",
                description:
                  "Our extensive menu uniquely combines fruit-based beverages with world cuisines and desserts, offering something for every palate and occasion.",
                bg: "bg-gray-50",
              },
              {
                title: "FOCO Franchise System",
                description:
                  "Our Franchise Owned, Company Operated (FOCO) model ensures consistent quality, brand standards, and sustainable growth for all our partners.",
                bg: "bg-gray-50",
              },
            ];
            return (
              <>
                {/* Mobile: vertical stack, Desktop: grid */}
                <div className="mt-10 flex flex-col gap-6 px-2 max-w-xs mx-auto sm:hidden">
                  {features.map((feature, idx) => (
                    <div
                      key={feature.title}
                      className={`${feature.bg} p-5 rounded-lg transition-transform duration-200 shadow-sm`}
                    >
                      <h4 className="text-[#23aa5d] text-base font-[heading-2] font-bold">
                        ✔ {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-2 font-[para]">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 max-w-6xl mx-auto">
                  {features.map((feature, idx) => (
                    <div
                      key={feature.title}
                      className={`${feature.bg} p-6 rounded-lg transition-transform duration-200 shadow-sm`}
                    >
                      <h4 className="text-[#23aa5d] text-lg font-[heading-2] font-bold">
                        ✔ {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-2 font-[para]">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* Enhanced Timeline Section with Scroll Animations */}
      <section className="py-16 px-4 sm:px-6 md:px-20 bg-white" ref={timelineRef}>
        <div className="text-center mb-12">
          <h2 className="text-[#23aa5d] text-3xl sm:text-4xl md:text-5xl font-[heading-1] mb-4">
            Our Journey Through the Years
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg font-[para]">
            Take a look at the key milestones that shaped Zussioberry into the
            brand it is today.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {timelineData.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="bg-[#23aa5d] text-white text-sm font-bold px-3 py-2 rounded-full">
                    {item.year}
                  </div>
                  {index < timelineData.length - 1 && (
                    <div className="w-0.5 h-6 bg-[#23aa5d] opacity-30 mt-2"></div>
                  )}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#23aa5d] flex-1">
                  <p className="text-gray-800 font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Timeline with Perfect Connecting Lines and Animations */}
          <div className="hidden md:block relative">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[#23aa5d] opacity-30 h-full top-0"></div>

            <div className="space-y-4">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between relative min-h-[120px] timeline-item"
                  ref={el => yearRefs.current[index] = el}
                >
                  {/* Left Side Content - Even Indexes */}
                  <div
                    className={`w-[45%] ${
                      index % 2 === 0 ? "block" : "invisible"
                    }`}
                  >
                    {index % 2 === 0 && (
                      <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#23aa5d] relative mr-8 timeline-content-left">
                        <p className="text-gray-800 font-medium text-lg pr-4">
                          {item.title}
                        </p>
                        {/* Horizontal connecting line - Only show when content exists */}
                        <div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-[#23aa5d] opacity-50 -translate-y-1/2"></div>
                      </div>
                    )}
                  </div>

                  {/* Center Year Marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-[#23aa5d] text-white text-sm font-bold px-4 py-3 rounded-full border-4 border-white shadow-lg relative timeline-year">
                      {item.year}
                      {/* Horizontal connecting lines - Only show when content exists on that side */}
                      {index % 2 === 0 && (
                        <div className="absolute top-1/2 -left-12 w-12 h-0.5 bg-[#23aa5d] opacity-50 -translate-y-1/2"></div>
                      )}
                      {index % 2 !== 0 && (
                        <div className="absolute top-1/2 -right-12 w-12 h-0.5 bg-[#23aa5d] opacity-50 -translate-y-1/2"></div>
                      )}
                    </div>
                  </div>

                  {/* Right Side Content - Odd Indexes */}
                  <div
                    className={`w-[45%] ${
                      index % 2 !== 0 ? "block" : "invisible"
                    }`}
                  >
                    {index % 2 !== 0 && (
                      <div className="bg-white p-5 rounded-xl shadow-sm border-r-4 border-[#23aa5d] relative ml-8 timeline-content-right">
                        <p className="text-gray-800 font-medium text-lg pl-4">
                          {item.title}
                        </p>
                        {/* Horizontal connecting line - Only show when content exists */}
                        <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-[#23aa5d] opacity-50 -translate-y-1/2"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add CSS for animations */}
        <style jsx>{`
          /* Initial states */
          .timeline-item .timeline-content-left {
            opacity: 0;
            transform: translateX(-50px) scale(0.8);
            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .timeline-item .timeline-content-right {
            opacity: 0;
            transform: translateX(50px) scale(0.8);
            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .timeline-item .timeline-year {
            opacity: 0;
            transform: scale(0);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          /* Animated states */
          .timeline-item.animate-in .timeline-content-left {
            opacity: 1;
            transform: translateX(0) scale(1);
          }

          .timeline-item.animate-in .timeline-content-right {
            opacity: 1;
            transform: translateX(0) scale(1);
          }

          .timeline-item.animate-in .timeline-year {
            opacity: 1;
            transform: scale(1);
          }

          /* Staggered animation delays */
          .timeline-item:nth-child(1).animate-in .timeline-year { transition-delay: 0.1s; }
          .timeline-item:nth-child(1).animate-in .timeline-content-left,
          .timeline-item:nth-child(1).animate-in .timeline-content-right { transition-delay: 0.2s; }

          .timeline-item:nth-child(2).animate-in .timeline-year { transition-delay: 0.3s; }
          .timeline-item:nth-child(2).animate-in .timeline-content-left,
          .timeline-item:nth-child(2).animate-in .timeline-content-right { transition-delay: 0.4s; }

          .timeline-item:nth-child(3).animate-in .timeline-year { transition-delay: 0.5s; }
          .timeline-item:nth-child(3).animate-in .timeline-content-left,
          .timeline-item:nth-child(3).animate-in .timeline-content-right { transition-delay: 0.6s; }

          .timeline-item:nth-child(4).animate-in .timeline-year { transition-delay: 0.7s; }
          .timeline-item:nth-child(4).animate-in .timeline-content-left,
          .timeline-item:nth-child(4).animate-in .timeline-content-right { transition-delay: 0.8s; }

          .timeline-item:nth-child(5).animate-in .timeline-year { transition-delay: 0.9s; }
          .timeline-item:nth-child(5).animate-in .timeline-content-left,
          .timeline-item:nth-child(5).animate-in .timeline-content-right { transition-delay: 1.0s; }

          .timeline-item:nth-child(6).animate-in .timeline-year { transition-delay: 1.1s; }
          .timeline-item:nth-child(6).animate-in .timeline-content-left,
          .timeline-item:nth-child(6).animate-in .timeline-content-right { transition-delay: 1.2s; }

          .timeline-item:nth-child(7).animate-in .timeline-year { transition-delay: 1.3s; }
          .timeline-item:nth-child(7).animate-in .timeline-content-left,
          .timeline-item:nth-child(7).animate-in .timeline-content-right { transition-delay: 1.4s; }

          .timeline-item:nth-child(8).animate-in .timeline-year { transition-delay: 1.5s; }
          .timeline-item:nth-child(8).animate-in .timeline-content-left,
          .timeline-item:nth-child(8).animate-in .timeline-content-right { transition-delay: 1.6s; }

          .timeline-item:nth-child(9).animate-in .timeline-year { transition-delay: 1.7s; }
          .timeline-item:nth-child(9).animate-in .timeline-content-left,
          .timeline-item:nth-child(9).animate-in .timeline-content-right { transition-delay: 1.8s; }

          .timeline-item:nth-child(10).animate-in .timeline-year { transition-delay: 1.9s; }
          .timeline-item:nth-child(10).animate-in .timeline-content-left,
          .timeline-item:nth-child(10).animate-in .timeline-content-right { transition-delay: 2.0s; }

          .timeline-item:nth-child(11).animate-in .timeline-year { transition-delay: 2.1s; }
          .timeline-item:nth-child(11).animate-in .timeline-content-left,
          .timeline-item:nth-child(11).animate-in .timeline-content-right { transition-delay: 2.2s; }

          .timeline-item:nth-child(12).animate-in .timeline-year { transition-delay: 2.3s; }
          .timeline-item:nth-child(12).animate-in .timeline-content-left,
          .timeline-item:nth-child(12).animate-in .timeline-content-right { transition-delay: 2.4s; }

          .timeline-item:nth-child(13).animate-in .timeline-year { transition-delay: 2.5s; }
          .timeline-item:nth-child(13).animate-in .timeline-content-left,
          .timeline-item:nth-child(13).animate-in .timeline-content-right { transition-delay: 2.6s; }
        `}</style>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-16 px-4 sm:px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] mb-4">
              Our <span className="text-[#23aa5d]">Core Principles</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-[para]">
              The foundation of our success lies in our commitment to these
              fundamental values
            </p>
          </div>

          {/* Mission, Vision & Values - Single Line Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            {/* Mission */}
            <div className="flex-1 flex flex-col items-center text-center p-6 max-w-sm">
              <div className="mb-4 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src="./assets/about/Miss.png" 
                  alt="Mission" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-[heading-2] font-bold text-gray-800 mb-3">
                Mission
              </h3>
              <p className="text-gray-600 font-[para]">
                Deliver joy through food, beverages, and desserts, while
                empowering entrepreneurs.
              </p>
            </div>

            {/* Vertical Separator - Hidden on mobile */}
            <div className="hidden lg:block h-40 w-px bg-gray-300 mx-4"></div>

            {/* Vision */}
            <div className="flex-1 flex flex-col items-center text-center p-6 max-w-sm">
              <div className="mb-4 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src="./assets/about/Vision.png" 
                  alt="Vision" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-[heading-2] font-bold text-gray-800 mb-3">
                Vision
              </h3>
              <p className="text-gray-600 font-[para]">
                To become a global leader in fruit-based foods, beverages, and
                desserts through innovation and strong systems.
              </p>
            </div>

            {/* Vertical Separator - Hidden on mobile */}
            <div className="hidden lg:block h-40 w-px bg-gray-300 mx-4"></div>

            {/* Values */}
            <div className="flex-1 flex flex-col items-center text-center p-6 max-w-sm">
              <div className="mb-4 w-24 h-24 md:w-32 md:h-32 overflow-hidden flex items-center justify-center">
                <img 
                  src="./assets/about/Values.png" 
                  alt="Values" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-[heading-2] font-bold text-gray-800 mb-3">
                Values
              </h3>
              <p className="text-gray-600 font-[para]">
                Integrity, innovation, and customer-centricity drive every
                decision we make, ensuring quality and trust in all our
                relationships.
              </p>
            </div>
          </div>

          {/* Horizontal Separators - Visible only on mobile */}
          <div className="lg:hidden flex justify-center my-8">
            <div className="w-40 h-px bg-gray-300"></div>
          </div>
          <div className="lg:hidden flex justify-center my-8">
            <div className="w-40 h-px bg-gray-300"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;