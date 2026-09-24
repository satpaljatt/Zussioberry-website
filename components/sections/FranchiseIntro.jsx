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
      badge: "⚡ Quick-Serve Format",
      description: "Compact. Quick-serve. High Returns. Perfect for malls, food courts, cinemas, railway stations & airports.",
      details: [
        "+ Area: 80-150 sq. ft.",
        "+ Menu: Juices, milkshakes, smoothies, fruit pops, bubble tea",
        "+ Target Audience: On-the-go customers, commuters",
        "+ Highlight: Minimal staff, quick ROI"
      ],
      image: "/assets/model/2express.jpg",
      bgColor: "bg-[#0b244d]",
      borderColor: "border-blue-500/40 hover:border-blue-400",
      accentColor: "text-blue-300",
      bulletColor: "text-blue-400",
      badgeBg: "bg-blue-500/30 text-blue-200 border border-blue-400/40",
      shadowGlow: "hover:shadow-[0_16px_40px_rgba(37,99,235,0.35)]",
    },
    {
      title: "JUICE BOUTIQUE",
      badge: "🍃 Fresh Retail Twist",
      description: "A refreshing retail twist to healthy indulgence. Designed for high street corners, shopping centers & wellness zones.",
      details: [
        "+ Area: 300-600 sq. ft.",
        "+ Menu: Full beverage line, fresh cut fruits, gelato & desserts",
        "+ Ambience: Urban and vibrant with branding aesthetics",
        "+ Highlight: Mid-size store with strong takeaway business"
      ],
      image: "/assets/model/3juicebutique.jpg",
      bgColor: "bg-[#08331e]",
      borderColor: "border-emerald-500/40 hover:border-emerald-400",
      accentColor: "text-emerald-300",
      bulletColor: "text-emerald-400",
      badgeBg: "bg-emerald-500/30 text-emerald-200 border border-emerald-400/40",
      shadowGlow: "hover:shadow-[0_16px_40px_rgba(16,185,129,0.35)]",
    },
    {
      title: "EXPERIENCE BAR",
      badge: "🍹 Immersive Café",
      description: "Immersive café with visual preparation and dine-in setup. Ideal for college zones, tech parks, and lifestyle streets.",
      details: [
        "+ Area: 800-1200 sq. ft.",
        "+ Menu: Full menu + food (wraps, pasta, sandwiches, burgers)",
        "+ Ambience: Modern, Instagrammable interior",
        "+ Highlight: Sit-down café experience with curated food pairings"
      ],
      image: "/assets/model/4experiance.jpg",
      bgColor: "bg-[#2d1038]",
      borderColor: "border-fuchsia-500/40 hover:border-fuchsia-400",
      accentColor: "text-fuchsia-300",
      bulletColor: "text-fuchsia-400",
      badgeBg: "bg-fuchsia-500/30 text-fuchsia-200 border border-fuchsia-400/40",
      shadowGlow: "hover:shadow-[0_16px_40px_rgba(217,70,239,0.35)]",
    },
    {
      title: "MOBILE LOUNGE",
      badge: "🚚 On-Demand Mobility",
      description: "On wheels. On trend. On demand. A fully-equipped Zussioberry outlet on a mobile van.",
      details: [
        "+ Area: Mobile (Van format)",
        "+ Menu: Core beverage range, light snacks, popsicles",
        "+ Use Case: Events, carnivals, corporate parks, townships",
        "+ Highlight: Zero rent, city-wide mobility, high outreach"
      ],
      image: "/assets/model/6mobile.jpg",
      bgColor: "bg-[#382205]",
      borderColor: "border-amber-500/40 hover:border-amber-400",
      accentColor: "text-amber-300",
      bulletColor: "text-amber-400",
      badgeBg: "bg-amber-500/30 text-amber-200 border border-amber-400/40",
      shadowGlow: "hover:shadow-[0_16px_40px_rgba(245,158,11,0.35)]",
    },
    {
      title: "GLOBAL FLAGSHIP STORE",
      badge: "👑 Flagship Destination",
      description: "The ultimate zussioberry destination. Built for metro cities, tourist hubs & premium locations.",
      details: [
        "+ Area: 1000 - 2000 sq. ft.",
        "+ Menu: Full food + beverage range, desserts, gelato bar",
        "+ Ambience: Premium dining with open kitchen, lounge zones",
        "+ Highlight: Brand ambassador outlet; hosts launches; events"
      ],
      image: "/assets/model/5global.jpg",
      bgColor: "bg-[#380e1a]",
      borderColor: "border-rose-500/40 hover:border-rose-400",
      accentColor: "text-rose-300",
      bulletColor: "text-rose-400",
      badgeBg: "bg-rose-500/30 text-rose-200 border border-rose-400/40",
      shadowGlow: "hover:shadow-[0_16px_40px_rgba(244,63,94,0.35)]",
    }
  ];

  const features = [
    {
      title: "System-Driven FOCO Model",
      description: "Franchise Owned, Company Operated for consistent quality and brand standards.",
      themeCard: "bg-gradient-to-b from-[#0b332b]/85 via-[#08221f]/90 to-[#041514]/95 border-emerald-500/35 hover:border-emerald-400 hover:shadow-[0_12px_35px_rgba(35,170,93,0.3)]",
      accentText: "text-emerald-400",
    },
    {
      title: "Exclusive Supply Chain",
      description: "Frozen pulp, desserts & raw materials directly from our own manufacturing facility.",
      themeCard: "bg-gradient-to-b from-[#0e3359]/85 via-[#082340]/90 to-[#051529]/95 border-sky-500/35 hover:border-sky-400 hover:shadow-[0_12px_35px_rgba(56,189,248,0.3)]",
      accentText: "text-sky-400",
    },
    {
      title: "Menu Diversity",
      description: "Beverages + Food + Frozen Desserts = 3 powerful revenue streams in one business model and brand.",
      themeCard: "bg-gradient-to-b from-[#3a1542]/85 via-[#260e2d]/90 to-[#16081c]/95 border-fuchsia-500/35 hover:border-fuchsia-400 hover:shadow-[0_12px_35px_rgba(232,121,249,0.3)]",
      accentText: "text-fuchsia-300",
    },
    {
      title: "Proven Formats",
      description: "6 franchise models tailored to different markets and investment levels for maximum reach.",
      themeCard: "bg-gradient-to-b from-[#3b2d10]/85 via-[#261c08]/90 to-[#181105]/95 border-amber-500/35 hover:border-amber-400 hover:shadow-[0_12px_35px_rgba(251,191,36,0.3)]",
      accentText: "text-amber-300",
    }
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-[#071527] text-white">
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
      <div className="absolute left-1/2 top-[70vh] sm:top-[80vh] transform -translate-x-1/2 -translate-y-1/2 z-20 w-32 xs:w-36 sm:w-44 md:w-52 lg:w-64 pointer-events-none will-change-transform">
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
        <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[heading-1] mb-3 md:mb-4 text-white">
          Why Choose <span className="text-[#23aa5d]">Zussioberry</span>?
        </h3>
        <p className="text-gray-300 mt-1 md:mt-2 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl mx-auto font-[para] text-xs xs:text-sm sm:text-base md:text-base">
          Join a franchise system built for success with multiple revenue streams and comprehensive support.
        </p>

        {/* Features */}
        {/* Mobile: vertical stack */}
        <div className="mt-6 xs:mt-8 flex flex-col gap-4 xs:gap-5 sm:gap-6 max-w-xs xs:max-w-sm sm:max-w-md mx-auto md:hidden">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`p-4 xs:p-5 rounded-2xl border shadow-lg transition-all duration-300 text-left ${feature.themeCard}`}
            >
              <h4 className={`${feature.accentText} text-sm xs:text-base font-semibold mb-2`}>✔ {feature.title}</h4>
              <p className="text-xs xs:text-sm text-slate-200 font-[para] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Tablet: 2 columns */}
        <div className="mt-8 hidden md:grid lg:hidden gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`p-5 rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-left h-full flex flex-col justify-center ${feature.themeCard}`}
            >
              <h4 className={`${feature.accentText} text-base font-semibold mb-2 text-center`}>✔ {feature.title}</h4>
              <p className="text-sm text-slate-200 font-[para] text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Desktop: 4 columns */}
        <div className="mt-8 hidden lg:grid gap-5 xl:gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 max-w-4xl xl:max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`p-5 xl:p-6 rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 text-left h-full flex flex-col justify-center ${feature.themeCard}`}
            >
              <h4 className={`${feature.accentText} text-base xl:text-lg font-semibold mb-2 text-center`}>✔ {feature.title}</h4>
              <p className="text-xs xl:text-sm text-slate-200 font-[para] text-center leading-relaxed">{feature.description}</p>
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
          className="bg-[#23aa5d] hover:bg-green-700 text-white font-semibold text-sm xs:text-base py-2 xs:py-3 px-6 xs:px-8 rounded-full flex items-center transition duration-300 shadow-md hover:shadow-lg"
        >
          Explore Franchise Model
          <IoIosArrowForward className="ml-1 xs:ml-2" />
        </a>
      </div>

      <div className="text-center z-10 relative px-4 sm:px-6 py-12 mt-16">
      
      {/* Main Heading */}
      <div className="mb-16">
        <h3 className="text-3xl xs:text-3xl md:text-5xl font-[heading-1] text-white">
          Our <span className="text-[#23aa5d]">Franchise Model</span>
        </h3>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-[para]">
          A proven system designed for your success. From initial setup to ongoing operations, 
          we provide the framework and support you need to thrive.
        </p>
      </div>

      {/* Main Content Section - Image Left, Content Right */}
      <div className="max-w-6xl mx-auto mb-20 bg-gradient-to-br from-[#06422b] via-[#082e30] to-[#041c18] rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#23aa5d]/70 hover:border-[#34d399] shadow-[0_0_50px_rgba(35,170,93,0.35),0_25px_60px_rgba(0,0,0,0.85)] hover:shadow-[0_0_65px_rgba(35,170,93,0.5),0_30px_70px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-300 relative overflow-hidden">
        {/* Subtle Decorative Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
          {/* Image Left */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#02120b] rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/30 h-80 lg:h-96 flex items-center justify-center">
              <img 
                src="/assets/model/1highway.jpg" 
                alt="Highway Exclusive Franchise Model" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Content Right */}
          <div className="lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 bg-[#23aa5d] text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3 shadow-lg ring-1 ring-white/30">
              <span>⭐</span> Flagship Highway Format
            </div>
            
            <h4 className="text-3xl md:text-4xl font-[heading-2] font-black text-white mb-3">
              HIGHWAY <span className="text-[#34d399]">EXCLUSIVE</span>
            </h4>
            <p className="text-emerald-100/90 font-[para] mb-6 text-sm md:text-base leading-relaxed">
              Fuel up with freshness! Tailored for petrol pumps, highway plazas, and rest areas.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <span className="text-[#34d399] mr-2.5 font-bold text-lg leading-none">+</span>
                <span className="text-white font-[para] text-sm md:text-base">Area: 3000-5000 sq. ft.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#34d399] mr-2.5 font-bold text-lg leading-none">+</span>
                <span className="text-white font-[para] text-sm md:text-base">Menu: Food & beverages for travelers, takeaway friendly</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#34d399] mr-2.5 font-bold text-lg leading-none">+</span>
                <span className="text-white font-[para] text-sm md:text-base">Ambience: Quick-serve yet relaxing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#34d399] mr-2.5 font-bold text-lg leading-none">+</span>
                <span className="text-white font-[para] text-sm md:text-base">Highlight: High volume, low competition, 24x7 potential</span>
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group ${step.bgColor} rounded-2xl transition-all duration-300 shadow-xl ${step.shadowGlow} border-2 ${step.borderColor} overflow-hidden flex flex-col`}
            >
              <div className="relative overflow-hidden h-48 w-full bg-[#040d1a]">
                <img 
                  src={step.image}
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md ${step.badgeBg}`}>
                    {step.badge}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h5 className={`text-lg font-black tracking-wide ${step.accentColor} mb-2`}>
                  {step.title}
                </h5>
                <p className="text-sm text-slate-200/90 font-[para] mb-3 leading-relaxed flex-1">
                  {step.description}
                </p>
                <ul className="space-y-1.5 pt-2 border-t border-white/10">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start leading-snug">
                      <span className={`${step.bulletColor} font-bold mr-1.5`}>+</span>
                      <span>{detail.replace(/^\+\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: 3 models in first row, 2 models in second row centered */}
        <div className="hidden sm:flex flex-col items-center gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* First Row - 3 models */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
            {franchiseSteps.slice(0, 3).map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.025 }}
                className={`group ${step.bgColor} rounded-2xl transition-all duration-300 shadow-xl ${step.shadowGlow} border-2 ${step.borderColor} overflow-hidden flex flex-col`}
              >
                <div className="relative overflow-hidden h-48 w-full bg-[#040d1a]">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md ${step.badgeBg}`}>
                      {step.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h5 className={`text-lg font-black tracking-wide ${step.accentColor} mb-2`}>
                    {step.title}
                  </h5>
                  <p className="text-sm text-slate-200/90 font-[para] mb-4 leading-relaxed flex-1">
                    {step.description}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-white/10">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start leading-snug">
                        <span className={`${step.bulletColor} font-bold mr-1.5`}>+</span>
                        <span>{detail.replace(/^\+\s*/, '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 models centered */}
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl w-full">
              {franchiseSteps.slice(3, 5).map((step, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.025 }}
                  className={`group ${step.bgColor} rounded-2xl transition-all duration-300 shadow-xl ${step.shadowGlow} border-2 ${step.borderColor} overflow-hidden flex flex-col`}
                >
                  <div className="relative overflow-hidden h-48 w-full bg-[#040d1a]">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md ${step.badgeBg}`}>
                        {step.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h5 className={`text-lg font-black tracking-wide ${step.accentColor} mb-2`}>
                      {step.title}
                    </h5>
                    <p className="text-sm text-slate-200/90 font-[para] mb-4 leading-relaxed flex-1">
                      {step.description}
                    </p>
                    <ul className="space-y-2 pt-2 border-t border-white/10">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start leading-snug">
                          <span className={`${step.bulletColor} font-bold mr-1.5`}>+</span>
                          <span>{detail.replace(/^\+\s*/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
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