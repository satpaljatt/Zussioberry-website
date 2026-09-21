"use client";
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const FranchiseIntro = () => {
  const router = useRouter();

  const scrollToForm = () => {
    const formSection = document.getElementById('franchise-form');
    if (formSection) {
      // Get navbar height (adjust the selector based on your navbar class/id)
      const navbar = document.querySelector('header, nav, .navbar, [class*="header"], [class*="nav"]');
      const navbarHeight = navbar ? navbar.offsetHeight : 80; // Default to 80px if not found
      
      // Calculate the position to scroll to (form position minus navbar height plus some padding)
      const offsetPosition = formSection.offsetTop - navbarHeight - 20; // 20px extra padding
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Franchise model data
  const franchiseSteps = [
    {
      title: "EXPRESS KIOSK",
      description: "Compact. Quick-serve. High Returns. Perfect for malls, food courts, cinemas, railway stations & airports.",
      details: [
        "+ Area: 80-150 sq. ft.",
        "+ Menu: Juices, milkshakes, smoothies, fruit pops, bubble tea",
        "+ Target Audience: On-the-go customers, commuters",
        "+ Highlight: Minimal staff, quick ROI"
      ],
      image: "/assets/model/2express.jpg"
    },
    {
      title: "JUICE BOUTIQUE",
      description: "A refreshing retail twist to healthy indulgence. Designed for high street corners, shopping centers & wellness zones.",
      details: [
        "+ Area: 300-600 sq. ft.",
        "+ Menu: Full beverage line, fresh cut fruits, gelato & desserts",
        "+ Ambience: Urban and vibrant with branding aesthetics",
        "+ Highlight: Mid-size store with strong takeaway business"
      ],
      image: "/assets/model/3juicebutique.jpg"
    },
    {
      title: "EXPERIENCE BAR",
      description: "Immersive café with visual preparation and dine-in setup. Ideal for college zones, tech parks, and lifestyle streets.",
      details: [
        "+ Area: 800-1200 sq. ft.",
        "+ Menu: Full menu + food (wraps, pasta, sandwiches, burgers)",
        "+ Ambience: Modern, Instagrammable interior",
        "+ Highlight: Sit-down café experience with curated food pairings"
      ],
      image: "/assets/model/4experiance.jpg"
    },
    {
      title: "MOBILE LOUNGE",
      description: "On wheels. On trend. On demand. A fully-equipped Zussioberry outlet on a mobile van.",
      details: [
        "+ Area: Mobile (Van format)",
        "+ Menu: Core beverage range, light snacks, popsicles",
        "+ Use Case: Events, carnivals, corporate parks, townships",
        "+ Highlight: Zero rent, city-wide mobility, high outreach"
      ],
      image: "/assets/model/6mobile.jpg"
    },
    {
      title: "GLOBAL FLAGSHIP STORE",
      description: "The ultimate zussioberry destination. Built for metro cities, tourist hubs & premium locations.",
      details: [
        "+ Area: 1000 - 2000 sq. ft.",
        "+ Menu: Full food + beverage range, desserts, gelato bar",
        "+ Ambience: Premium dining with open kitchen, lounge zones",
        "+ Highlight: Brand ambassador outlet; hosts launches; events"
      ],
      image: "/assets/model/5global.jpg"
    }
  ];

  const features = [
    {
      title: "System-Driven FOCO Model",
      description: "Franchise Owned, Company Operated for consistent quality and brand standards.",
      bg: ""
    },
    {
      title: "Exclusive Supply Chain",
      description: "Frozen pulp, desserts & raw materials directly from our own manufacturing facility.",
      bg: "bg-gray-50"
    },
    {
      title: "Menu Diversity",
      description: "Beverages + Food + Frozen Desserts = 3 powerful revenue streams in one business model and brand.",
      bg: "bg-gray-50"
    },
    {
      title: "Proven Formats",
      description: "6 franchise models tailored to different markets and investment levels for maximum reach.",
      bg: "bg-gray-50"
    }
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Own Your Zussioberry Section */}
      <div
        className="w-full h-[60vh] sm:h-[70vh] flex flex-col justify-center items-center text-center mb-28 md:mb-40 relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/FranchisePage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>

        {/* Content shifted upwards */}
        <div className="relative z-30 flex flex-col justify-center items-center w-full h-full px-4 -mt-16 sm:-mt-20 md:-mt-24">
          <h2 className="font-[heading-1] text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-6 text-white leading-tight">
            Your Franchise. Our Systems. Shared Success.
          </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 md:mb-8 leading-relaxed font-[para] max-w-md sm:max-w-xl md:max-w-2xl">
            With Zussioberry, you're not just opening a café—you're stepping into a franchise powered by in-house manufacturing and world-class systems.
          </p>
          
          {/* Apply Now Button - Scrolls to FranchiseForm section */}
          <button 
            onClick={scrollToForm}
            className="bg-[#23aa5d] hover:bg-green-600 text-white font-semibold text-sm xs:text-base py-2 xs:py-3 px-6 xs:px-8 rounded-full flex items-center transition duration-300 mt-4 relative z-40 shadow-lg cursor-pointer"
          >
            Apply Now
            <IoIosArrowForward className="ml-1 xs:ml-2" />
          </button>
        </div>
      </div>

      {/* Earth Image Overlay - Positioned lower */}
      <div className="absolute left-1/2 top-[70vh] sm:top-[80vh] transform -translate-x-1/2 -translate-y-1/2 z-20 w-32 xs:w-36 sm:w-44 md:w-52 lg:w-64">
        <div className="animate-rotate-earth">
          <Image
            src="/assets/sectionZussioberry/Earth.png"
            alt="Earth"
            width={256}
            height={256}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Why Choose Zussioberry Section - Adjusted spacing */}
      <div className="text-center z-30 relative mt-40 xs:mt-44 sm:mt-48 md:mt-52 lg:mt-60 px-4 xs:px-6">
        <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[heading-1] mb-3 md:mb-4">
          Why Choose <span className="text-[#23aa5d]">Zussioberry</span>?
        </h3>
        <p className="text-gray-600 mt-1 md:mt-2 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl mx-auto font-[para] text-xs xs:text-sm sm:text-base md:text-base">
          Join a franchise system built for success with multiple revenue streams and comprehensive support.
        </p>

        {/* Features */}
        {/* Mobile: vertical stack */}
        <div className="mt-6 xs:mt-8 flex flex-col gap-4 xs:gap-5 sm:gap-6 max-w-xs xs:max-w-sm sm:max-w-md mx-auto md:hidden">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`${feature.bg} p-4 xs:p-5 rounded-lg transition-transform duration-200 text-left`}
            >
              <h4 className="text-[#23aa5d] text-sm xs:text-base font-semibold mb-2">✔ {feature.title}</h4>
              <p className="text-xs xs:text-sm text-gray-600 font-[para] ">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Tablet: 2 columns */}
        <div className="mt-8 hidden md:grid lg:hidden gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`${feature.bg} p-5 rounded-lg transition-transform duration-200 text-left h-full flex flex-col justify-center`}
            >
              <h4 className="text-[#23aa5d] text-base font-semibold mb-2 text-center">✔ {feature.title}</h4>
              <p className="text-sm text-gray-600 font-[para]">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Desktop: 4 columns */}
        <div className="mt-8 hidden lg:grid gap-5 xl:gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 max-w-4xl xl:max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`${feature.bg} p-5 xl:p-6 rounded-lg transition-transform duration-200 text-left h-full flex flex-col justify-center`}
            >
              <h4 className="text-[#23aa5d] text-base xl:text-lg font-semibold mb-2 text-center">✔ {feature.title}</h4>
              <p className="text-xs xl:text-sm text-gray-600 font-[para] text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Franchise Model Button */}
      <div className="mt-10 xs:mt-12 md:mt-14 lg:mt-16 flex justify-center px-4">
        <a 
          href="/assets/Franchise Deck.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm xs:text-base py-2 xs:py-3 px-6 xs:px-8 rounded-full flex items-center transition duration-300"
        >
          Explore Franchise Model
          <IoIosArrowForward className="ml-1 xs:ml-2" />
        </a>
      </div>

      <div className="text-center z-10 relative px-4 sm:px-6 py-12 mt-16">
      
      {/* Main Heading */}
      <div className="mb-16">
        <h3 className="text-3xl xs:text-3xl md:text-5xl font-[heading-1]">
          Our <span className="text-[#23aa5d]">Franchise Model</span>
        </h3>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-[para]">
          A proven system designed for your success. From initial setup to ongoing operations, 
          we provide the framework and support you need to thrive.
        </p>
      </div>

      {/* Main Content Section - Image Left, Content Right */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Left */}
          <div className="lg:w-1/2">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-80 lg:h-96 flex items-center justify-center">
              <img src="./assets/model/1highway.jpg" alt="Franchise Model" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content Right */}
          <div className="lg:w-1/2 text-left">
            <h4 className="text-2xl md:text-3xl font-[heading-2] font-bold text-gray-800 mb-4">
              HIGHWAY EXCLUSIVE
            </h4>
            <p className="text-gray-600 font-[para] mb-4">
              Fuel up with freshness! Tailored for petrol pumps, highway plazas, and rest areas.
            </p>
            <ul className="space-y-2 mt-6">
              <li className="flex items-start">
                <span className="text-[#23aa5d] mr-2 font-bold">+</span>
                <span className="text-gray-600 font-[para]">Area: 3000-5000 sq. ft.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#23aa5d] mr-2 font-bold">+</span>
                <span className="text-gray-600 font-[para]">Menu: Food & beverages for travelers, takeaway friendly</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#23aa5d] mr-2 font-bold">+</span>
                <span className="text-gray-600 font-[para]">Ambience: Quick-serve yet relaxing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#23aa5d] mr-2 font-bold">+</span>
                <span className="text-gray-600 font-[para]">Highlight: High volume, low competition, 24x7 potential</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Franchise Models Section - 3 in first row, 2 in second row centered */}
      <div className="max-w-6xl mx-auto">
        {/* Mobile: vertical stack */}
        <div className="flex flex-col gap-6 max-w-xs mx-auto sm:hidden">
          {franchiseSteps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg transition-transform duration-200 shadow-sm overflow-hidden"
            >
              <img 
                src={step.image}
                alt={step.title} 
                className="w-full h-48 object-cover bg-gray-200"
              />
              <div className="p-5">
                <h5 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h5>
                <p className="text-sm text-gray-600 font-[para] mb-3">{step.description}</p>
                <ul className="space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-gray-600">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 3 models in first row, 2 models in second row centered */}
        <div className="hidden sm:flex flex-col items-center gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* First Row - 3 models */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
            {franchiseSteps.slice(0, 3).map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg transition-transform duration-200 shadow-sm overflow-hidden"
              >
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-48 object-cover bg-gray-200"
                />
                <div className="p-6">
                  <h5 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h5>
                  <p className="text-sm text-gray-600 font-[para] mb-3">{step.description}</p>
                  <ul className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-gray-600">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 models centered */}
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl">
              {franchiseSteps.slice(3, 5).map((step, index) => (
                <div
                  key={index + 3}
                  className="bg-gray-50 rounded-lg transition-transform duration-200 shadow-sm overflow-hidden"
                >
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-48 object-cover bg-gray-200"
                  />
                  <div className="p-6">
                    <h5 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h5>
                    <p className="text-sm text-gray-600 font-[para] mb-3">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-gray-600">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>

      <style jsx>{`
        @keyframes rotateEarth {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-rotate-earth {
          animation: rotateEarth 20s linear infinite;
          display: inline-block;
        }
        
        @media (max-width: 475px) {
          .animate-rotate-earth {
            animation: rotateEarth 25s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default FranchiseIntro;