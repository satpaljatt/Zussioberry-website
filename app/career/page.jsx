"use client"
import React, { useRef, useState } from 'react'
import { Utensils, IceCream, FlaskConical, Building } from 'lucide-react'
import { motion } from 'framer-motion' // Add this import

const Page = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentOpening: '',
    message: '',
    resume: null
  });

  // Animation variants for Apply Now button (same as franchise button)
  const applyButtonVariants = {
    initial: { 
      scale: 1,
      boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.7)"
    },
    pulse: {
      scale: [1, 1.02, 1],
      boxShadow: [
        "0 0 0 0 rgba(34, 197, 94, 0.7)",
        "0 0 0 10px rgba(34, 197, 94, 0)",
        "0 0 0 0 rgba(34, 197, 94, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#16a34a",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  // Glow effect variant
  const glowEffectVariants = {
    initial: { 
      opacity: 0,
      scale: 1
    },
    animate: {
      opacity: [0, 0.8, 0],
      scale: [1, 1.1, 1.2],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeOut"
      }
    }
  };

  // Shimmer effect variant
  const shimmerEffectVariants = {
    initial: { x: "-100%" },
    animate: {
      x: "200%",
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut"
      }
    }
  };

  // Rest of your existing code remains the same...
  const currentOpeningOptions = [
    'Store Manager',
    'Barista',
    'Kitchen Staff',
    'Cashier',
    'Shift Supervisor',
    'Quality Control Manager',
    'R&D Specialist',
    'Marketing Executive',
    'Other'
  ];

  const scrollToForm = () => {
    if (formRef.current) {
      const navbar = document.querySelector('header, nav, .navbar, [class*="header"], [class*="nav"]');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      
      const element = formRef.current;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 20;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Application Submitted!");
  };

  

  return (
    <> 
    <section
      className="relative bg-cover bg-center text-white min-h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/CareerPage.png')",
      }}>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h2 className="text-3xl md:text-6xl font-[heading-1] mb-4">
          Come, Join Our Team !
        </h2>
        <p className="text-sm md:text-lg text-gray-200 font-[para] mb-6 leading-relaxed">
          Join our passionate team and turn your ideas into action.
          Together, we make every sip special!
        </p>
        {/* Enhanced Apply Now Button with Blinking Effects */}
        <motion.div 
          className="inline-block relative"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div
            className="absolute inset-0 bg-green-500 rounded-lg blur-md opacity-0"
            variants={glowEffectVariants}
            initial="initial"
            animate="animate"
          />
          
          <motion.div
            className="relative overflow-hidden rounded-lg"
            variants={applyButtonVariants}
            initial="initial"
            animate="pulse"
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              variants={shimmerEffectVariants}
              initial="initial"
              animate="animate"
            />
            
            <button 
              onClick={scrollToForm}
              className="relative bg-[#23aa5d] cursor-pointer px-5 py-2 sm:px-6 sm:py-2.5 text-white rounded-lg hover:bg-green-600 text-base sm:text-lg font-[para] transition z-10"
            >
              Apply Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* New Section with Icons */}
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-[heading-1] mb-12">
          Join Our Team In
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Food & Beverage Service */}
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Utensils className="w-7 h-7 md:w-8 md:h-8 text-[#23aa5d]" />
            </div>
            <h3 className="font-[para] font-semibold text-gray-700 text-sm md:text-base">Food & Beverage Service</h3>
          </div>

          {/* Frozen Dessert Production */}
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <IceCream className="w-7 h-7 md:w-8 md:h-8 text-[#23aa5d]" />
            </div>
            <h3 className="font-[para] font-semibold text-gray-700 text-sm md:text-base">Frozen Dessert Production</h3>
          </div>

          {/* R&D & Innovation */}
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <FlaskConical className="w-7 h-7 md:w-8 md:h-8 text-[#23aa5d]" />
            </div>
            <h3 className="font-[para] font-semibold text-gray-700 text-sm md:text-base">R&D & Innovation</h3>
          </div>

          {/* Franchise Development */}
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Building className="w-7 h-7 md:w-8 md:h-8 text-[#23aa5d]" />
            </div>
            <h3 className="font-[para] font-semibold text-gray-700 text-sm md:text-base">Franchise Development</h3>
          </div>
        </div>
      </div>
    </section>
 
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Title & Intro */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-[heading-1] mb-4">
          Why Join Our <span className="text-[#23aa5d]">Team</span> ?
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-[para]">
          Join a passionate, friendly team where your ideas matter, your growth is valued, 
          and every day is filled with great flavors and positive vibes. Be part of something 
          meaningful at Zussioberry!
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 border-gray-200 gap-0 max-w-3xl mx-auto">
        {/* Growth Opportunity */}
        <div className="md:border-b border-gray-400 md:border-r p-8 text-center">
          <h3 className="font-semibold font-[heading-2] text-lg md:text-2xl mb-2">Growth Opportunity</h3>
          <p className="text-gray-600 font-[para] text-sm md:text-base leading-relaxed">
            Whether you are looking to advance your career or simply develop new
            skills, we provide ample opportunities for professional and personal growth. 
            Take on new challenges, learn from experienced mentors, and unlock your full potential with us.
          </p>
        </div>

        {/* Dynamic Work Environment */}
        <div className="md:border-b border-gray-400 p-8 text-center">
          <h3 className="font-semibold font-[heading-2] text-lg md:text-2xl mb-2">Dynamic Work Environment</h3>
          <p className="text-gray-600 font-[para] text-sm md:text-base leading-relaxed">
            Be part of a collaborative and supportive team that values each member's contributions.
            Our fast-paced, ever-evolving workplace ensures you stay engaged, inspired, and motivated every day.
          </p>
        </div>

        {/* Team Spirit */}
        <div className="md:border-r border-gray-400 p-8 text-center">
          <h3 className="font-semibold font-[heading-2] text-lg md:text-2xl mb-2">Team Spirit</h3>
          <p className="text-gray-600 font-[para] text-sm md:text-base leading-relaxed">
            Experience a strong sense of camaraderie and belonging. 
            We celebrate achievements together and support each other through challenges, 
            making every contribution count towards our shared success.
          </p>  
        </div>

        {/* Creative Culture */}
        <div className="p-8 text-center">
          <h3 className="font-semibold font-[heading-2] text-lg md:text-2xl mb-2">Creative Culture</h3>
          <p className="text-gray-600 font-[para] text-sm md:text-base leading-relaxed">
            Thrive in an environment that encourages innovation and creative problem-solving.
            Your ideas are valued here—bring your unique perspective and help us shape the future of Zussioberry!
          </p>
        </div>
      </div>
    </section>
 
<section ref={formRef} className="bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28">
  <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
    
    {/* Left Section - Heading and Content */}
    <div className="w-full md:w-1/2 text-center md:text-left md:pl-12">
      <h2 className="text-3xl md:text-5xl font-[heading-1] mb-4">
        Dream <span className="text-[#23aa5d]">. Apply .</span> Achieve
      </h2>

      <p className="text-gray-700 font-[para] text-sm md:text-lg leading-relaxed mb-8">
        We'd love to know you! Complete the form and join our vibrant team.
      </p>

      {/* Image */}
      <img
        src="/assets/Cp.png"
        alt="Career Opportunity"
        className="max-w-[250px] sm:max-w-[430px] mx-auto md:mx-0"
      />
    </div>

    {/* Right Section - Form */}
    <div className="w-full md:w-1/2 relative flex flex-col items-center px-4 sm:px-0">
      {/* Overall Form Container with Shadow */}
      <div className="relative z-10 w-full rounded-md shadow-xl font-[para] md:mt-0">
        
        {/* Top Banner Image with Text */}
        <div className="w-full relative">
          <img
            src="/assets/AnyFormTopImg.png"
            alt="Career Form Illustration"
            className="w-full object-cover rounded-t-md"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-black text-xl xs:text-2xl sm:text-3xl font-[para] -mt-3 mb-6 font-bold px-4 xs:px-6 py-2 rounded text-center">
              Start Your Career Journey
            </span>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-4 xs:p-5 sm:p-8 bg-white rounded-b-md">
          <form className="space-y-3 xs:space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 xs:px-4 py-2 xs:py-2.5 sm:px-5 sm:py-3 border border-gray-600 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
              required
            />
             <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 xs:px-4 py-2 xs:py-2.5 sm:px-5 sm:py-3 border border-gray-600 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 xs:px-4 py-2 xs:py-2.5 sm:px-5 sm:py-3 border border-gray-600 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 xs:px-4 py-2 xs:py-2.5 sm:px-5 sm:py-3 border border-gray-600 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
              required
            />
            
            {/* Current Opening Dropdown */}
            <select
              name="currentOpening"
              value={formData.currentOpening}
              onChange={handleChange}
              className="w-full px-3 xs:px-4 py-2 xs:py-2.5 sm:px-5 sm:py-3 border border-gray-600 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
              required
            >
              <option value="">Current Opening *</option>
              {currentOpeningOptions.map((position, index) => (
                <option key={index} value={position}>
                  {position}
                </option>
              ))}
            </select>
            
            <textarea
              name="message"
              placeholder="Your Message *"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 xs:px-4 py-2 xs:py-2.5 sm:px-5 sm:py-3 border border-gray-600 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base resize-none focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
              required
            ></textarea>
            
            {/* Resume Upload Field */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Your Resume *
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleChange}
                className="w-full px-3 xs:px-4 py-2 xs:py-2.5 sm:px-5 sm:py-3 border border-gray-600 rounded-md bg-white text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#23aa5d] file:text-white hover:file:bg-green-600 focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
                required
              />
           
            </div>
            
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#23aa5d] text-white font-[para] py-2 xs:py-2.5 sm:py-3 rounded-md hover:bg-green-600 text-lg transition focus:outline-none focus:ring-2 focus:ring-[#23aa5d] focus:ring-offset-2"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Page