'use client'; // only if you're using app router and need client features (optional)

import { useState } from 'react';

const FranchiseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission logic
    console.log(formData);
  };

  return (
    <section className="w-full bg-[url('/assets/contactBanner.png')] bg-cover bg-center py-10 sm:py-20 px-0 relative z-10">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center gap-6 md:gap-10">

        {/* Mobile: Heading and Call section on top */}
        <div className="block md:hidden w-full px-4 mb-6">
          <h2 className="text-3xl xs:text-3xl md:text-5xl text-[#23aa5d] mb-3 font-[heading-1] text-center">
            Franchise Enquiry Form
          </h2>
          <p className="text-base xs:text-lg leading-relaxed text-gray-200 font-[para] mb-5 max-w-lg mx-auto text-center">
            Intrested in owning a Zussioberry franchise? Submit your details
            and let's connect.
          </p>
          <div className="border border-white px-4 py-3 rounded-md w-full max-w-xs mx-auto flex flex-col items-center justify-center text-center gap-2">
            <p className="mb-2 text-lg xs:text-xl whitespace-nowrap font-[para]">Any Queries ? Call At</p>
            <p className="text-[#23aa5d] text-xl xs:text-2xl flex items-center whitespace-nowrap">
              <i className="fas fa-phone-alt mr-2"></i>+91 9769596096
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-[35rem] relative flex flex-col items-center px-4 sm:px-0 bg-white opacity-95">
          <div className="relative z-10 w-full p-0 rounded-md font-[para] md:mt-0">

            <div className="w-full relative">
              <img
                src="/assets/AnyFormTopImg.png"
                alt="Order Form Illustration"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black text-xl xs:text-2xl sm:text-3xl font-[para] -mt-3 mb-6 font-bold px-4 xs:px-6 py-2 rounded text-center">
                  Start Your Business Journey
                </span>
              </div>
            </div>

            <div className="p-4 xs:p-5 sm:p-8">
              <form className="space-y-3 xs:space-y-4 sm:space-y-5">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full px-3 xs:px-4 py-2 xs:py-2.5 sm:px-5 sm:py-3 border border-gray-600 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full px-3 xs:px-4 py-2 xs:py-2.5 sm:px-5 sm:py-3 border border-gray-600 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
                />
                <input
                  type="text"
                  placeholder="Your Phone Number *"
                  className="w-full px-3 xs:px-4 py-2 xs:py-2.5 sm:px-5 sm:py-3 border border-gray-600 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
                />
                <input
                  type="text"
                  placeholder="Current Opening *"
                  className="w-full px-3 xs:px-4 py-2 xs:py-2.5 sm:px-5 sm:py-3 border border-gray-600 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
                />
                <textarea
                  placeholder="Your Address *"
                  rows={3}
                  className="w-full px-3 xs:px-4 py-2 xs:py-2.5 sm:px-5 sm:py-3 border border-gray-600 rounded-md bg-white text-gray-800 placeholder:text-gray-500 text-base resize-none focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-[#23aa5d] text-white font-[para] py-2 xs:py-2.5 sm:py-3 rounded-md hover:bg-green-600 text-lg transition focus:outline-none focus:ring-2 focus:ring-[#23aa5d] focus:ring-offset-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Desktop: Heading and Call section on right */}
        <div className="hidden md:flex relative md:w-1/2 text-white mb-10 md:mb-0 md:pr-12 flex-col justify-start h-full gap-2">
          <h2 className="text-6xl text-[#23aa5d] mb-4 font-[heading-1]">
          Franchise Enquiry Form
          </h2>
          <p className="text-xl leading-relaxed text-gray-200 mb-8 max-w-lg">
            Interested in owning a Zussioberry franchise? Submit your details
            and let's connect.
          </p>
          <div className="border border-white px-6 py-4 rounded-md w-fit max-w-xs flex flex-col items-center justify-center text-center gap-2">
            <p className="mb-3 text-2xl whitespace-nowrap text-white font-[para]">Any Queries ? Call At</p>
            <p className="text-[#23aa5d] text-2xl flex items-center whitespace-nowrap">
              <i className="fas fa-phone-alt mr-2"></i>+91 9769596096
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseForm;