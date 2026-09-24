// "use client";
// import { useState } from "react";

// export default function page() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     contactNumber: "",
//     email: "",
//     helpSubject: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Message Sent!");
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center text-white min-h-[60vh] flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/assets/ContactBaner.png')",
//         }}>
//         <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
//           <h2 className="text-2xl md:text-5xl font-[heading-1] mb-4">
//             Contact Us
//           </h2>
//           <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed font-[para] max-w-xl mx-auto">
//             We'd love to hear from you !!
//           </p>
//         </div>
//       </section>

//       {/* Contact Info Section */}
//       <section className="py-12 px-4 bg-white">
//         <div className="w-full max-w-5xl mx-auto text-center mb-10">
//           <h3 className="text-green-600 text-lg font-[heading-2] font-bold">Get in touch with us</h3>
//           <h2 className="text-2xl md:text-4xl lg:text-5xl font-[heading-1] mt-2 mb-5">
//             Do you need help?<br /> Contact with us now!
//           </h2>
//         </div>

//         <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-6 ">
//           {/* Left Column - Contact Info */}
//           <div className="space-y-6">
//             {/* Email */}
//             <div className="flex items-start gap-3">
//               <span className="text-green-600 text-lg mt-0.5">•</span>
//               <div className="text-left">
//                 <h4 className="font-[para] font-bold text-lg">Email</h4>
//                 <a 
//                   href="mailto:franchise@zussioberry.com" 
//                   className="text-base font-[para] text-gray-700 hover:text-green-600 transition-colors"
//                 >
//                   franchise@zussioberry.com
//                 </a>
//               </div>
//             </div>

//             {/* Call */}
//             <div className="flex items-start gap-3">
//               <span className="text-green-600 text-lg mt-0.5">•</span>
//               <div className="text-left">
//                 <h4 className="font-[para] font-bold text-lg">Call</h4>
//                 <div className="text-base font-[para] text-gray-700">
//                   <a href="tel:+919270206096" className="block hover:text-green-600 transition-colors">
//                     Sunil: +91-9270206096
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Follow Us */}
//             <div className="flex items-start gap-3">
//               <span className="text-green-600 text-lg mt-0.5">•</span>
//               <div className="text-left">
//                 <h4 className="font-[para] font-bold text-lg">Follow Us & Stay Inspired</h4>
//                 <p className="text-base font-[para] text-gray-700">@ZussioberryOfficial</p>
//                 <div className="text-sm font-[para] text-gray-600">
//                   <a href="https://instagram.com/ZussioberryOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
//                     Instagram
//                   </a>  |   
//                   <a href="https://facebook.com/ZussioberryOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors pl-1">
//                     Facebook
//                   </a> | 
//                   <a href="https://youtube.com/ZussioberryOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors pl-1">
//                     YouTube
//                   </a> | 
//                   <a href="https://linkedin.com/company/ZussioberryOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors pl-1">
//                     LinkedIn
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Location Info */}
//           <div className="space-y-6">
//             {/* Reach Us */}
//             <div className="flex items-start gap-3">
//               <span className="text-green-600 text-lg mt-0.5">•</span>
//               <div className="text-left">
//                 <h4 className="font-[para] font-bold text-lg">Reach Us</h4>
//                 <p className="text-base font-[para] text-gray-700">Zussioberry Foods & Beverages llp</p>
//               </div>
//             </div>

//             {/* Register Office Address */}
//             <div className="flex items-start gap-3">
//               <span className="text-green-600 text-lg mt-0.5">•</span>
//               <div className="text-left">
//                 <h4 className="font-[para] font-bold text-lg">Register office address</h4>
//                 <p className="text-sm font-[para] text-gray-700">
//                   Zussioberry Foods and Beverages LLP, Elitra Awing 1106, casa bella gold, Lodha palava, near Elitra Mall, kalyan shil Road, Dombivali East 421204, Maharashtra, India.
//                 </p>
//               </div>
//             </div>

//             {/* Works */}
//             <div className="flex items-start gap-3">
//               <span className="text-green-600 text-lg mt-0.5">•</span>
//               <div className="text-left">
//                 <h4 className="font-[para] font-bold text-lg">Works</h4>
//                 <p className="text-sm font-[para] text-gray-700">
//                   Zussioberry Foods and Beverages llp, Bldg no 7c,4b, Garden Café, 
//                   Tc 23 break out Area, Reliance corporate park, Thane Belapur road, 
//                   Ghansoli, Navi Mumbai 400701, Maharastra, India
//                 </p>
//               </div>
//             </div>

//             {/* Factory */}
//             <div className="flex items-start gap-3">
//               <span className="text-green-600 text-lg mt-0.5">•</span>
//               <div className="text-left">
//                 <h4 className="font-[para] font-bold text-lg">Factory</h4>
//                 <p className="text-sm font-[para] text-gray-700">
//                   Paradise juice private limited, Plot no A76/4/3, Sinnar Malegoan Midc, 
//                   Taluka Sinnar, District Nashik 422113 Maharashtra, India
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Form and Map Section */}
//       <section className="py-12 px-4 bg-gray-50">
//         <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
//           {/* Left Section - Contact Form */}
//           <div className="w-full">
//             <div className="w-full bg-white p-0 rounded-lg shadow-lg font-[para]">
//               {/* Green Banner Inside Form */}
//               <div className="w-full relative">
//                 <img
//                   src="/assets/AnyFormTopImg.png"
//                   alt="Order Form Illustration"
//                   className="w-full object-cover"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <span className="text-black text-xl sm:text-2xl font-[para] font-bold px-6 py-2 rounded">
//                     Get in Touch !
//                   </span>
//                 </div>
//               </div>

//               {/* Form Section */}
//               <div className="p-4 sm:p-6">
//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                   <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Full Name *"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black placeholder:text-gray-500 text-sm focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
//                     required
//                   />
//                   <input
//                     type="tel"
//                     name="contactNumber"
//                     placeholder="Contact Number *"
//                     value={formData.contactNumber}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black placeholder:text-gray-500 text-sm focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
//                     required
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email ID *"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black placeholder:text-gray-500 text-sm focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
//                     required
//                   />
//                   <textarea
//                     name="helpSubject"
//                     placeholder="Tell us what you need help with *"
//                     rows={5}
//                     value={formData.helpSubject}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black placeholder:text-gray-500 text-sm resize-none focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
//                     required
//                   ></textarea>
//                   <button
//                     type="submit"
//                     className="w-full cursor-pointer bg-[#23aa5d] text-white font-[para] py-2 rounded-md hover:bg-green-600 text-base transition focus:outline-none focus:ring-2 focus:ring-[#23aa5d] focus:ring-offset-2"
//                   >
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Map */}
//           <div className="w-full h-full min-h-[400px]">
//             <div className="w-full h-full rounded-lg shadow-lg overflow-hidden">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.258097381586!2d73.08531431490407!3d19.22860835206794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7943b6f2e3b9f%3A0x6a9f7b6c7e9b5c1e!2sPalava%20City!5e0!3m2!1sen!2sin!4v1647858284087!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0, minHeight: "400px" }}
//                 allowFullScreen=""
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Zussioberry Location"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



"use client";
import { useState } from "react";

export default function page() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    helpSubject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent!");
  };

  // Function to open Google Maps
  const openGoogleMaps = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/ContactBaner.png')",
        }}>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-[heading-1] mb-4">
            Contact Us
          </h2>
          <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed font-[para] max-w-xl mx-auto">
            We'd love to hear from you !!
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 px-4 bg-white">
        <div className="w-full max-w-5xl mx-auto text-center mb-10">
          <h3 className="text-green-600 text-lg font-[heading-2] font-bold">Get in touch with us</h3>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-[heading-1] mt-2 mb-5">
            Do you need help?<br /> Contact with us now!
          </h2>
        </div>

        <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-6 ">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-lg mt-0.5">•</span>
              <div className="text-left">
                <h4 className="font-[para] font-bold text-lg">Email</h4>
                <a 
                  href="mailto:franchise@zussioberry.com" 
                  className="text-base font-[para] text-gray-700 hover:text-green-600 transition-colors"
                >
                  franchise@zussioberry.com
                </a>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-lg mt-0.5">•</span>
              <div className="text-left">
                <h4 className="font-[para] font-bold text-lg">Call</h4>
                <div className="text-base font-[para] text-gray-700">
                  <a href="tel:+919270206096" className="block hover:text-green-600 transition-colors">
                    Sunil: +91-9270206096
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-lg mt-0.5">•</span>
              <div className="text-left">
                <h4 className="font-[para] font-bold text-lg">Follow Us & Stay Inspired</h4>
                <p className="text-base font-[para] text-gray-700">@ZussioberryOfficial</p>
                <div className="text-sm font-[para] text-gray-600">
                  <a href="https://instagram.com/ZussioberryOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                    Instagram
                  </a>  |   
                  <a href="https://facebook.com/ZussioberryOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors pl-1">
                    Facebook
                  </a> | 
                  <a href="https://youtube.com/ZussioberryOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors pl-1">
                    YouTube
                  </a> | 
                  <a href="https://linkedin.com/company/ZussioberryOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors pl-1">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Location Info */}
          <div className="space-y-6">
            {/* Reach Us */}
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-lg mt-0.5">•</span>
              <div className="text-left">
                <h4 className="font-[para] font-bold text-lg">Reach Us</h4>
                <p className="text-base font-[para] text-gray-700">Zussioberry Foods & Beverages llp</p>
              </div>
            </div>

            {/* Register Office Address */}
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-lg mt-0.5">•</span>
              <div className="text-left">
                <h4 className="font-[para] font-bold text-lg">Register office address</h4>
                <p className="text-sm font-[para] text-gray-700">
                  Zussioberry Foods and Beverages LLP, Elitra Awing 1106, casa bella gold, Lodha palava, near Elitra Mall, kalyan shil Road, Dombivali East 421204, Maharashtra, India.
                </p>
              </div>
            </div>

            {/* Works - Clickable Address */}
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-lg mt-0.5">•</span>
              <div className="text-left">
                <h4 className="font-[para] font-bold text-lg">Works</h4>
                <button
                  onClick={() => openGoogleMaps('https://www.google.com/maps/place/Reliance+Corporate+Park/@19.1244332,73.0055228,712m/data=!3m1!1e3!4m6!3m5!1s0x3be7c0b75f886043:0xbfa2237b02810384!8m2!3d19.1242755!4d73.0053353!16s%2Fg%2F11b6gf3v9d?entry=ttu&g_ep=EgoyMDI1MTExMS4wIKXMDSoASAFQAw%3D%3D')}
                  className="text-sm font-[para] text-gray-700 hover:text-green-600 transition-colors text-left cursor-pointer"
                >
                  Zussioberry Foods and Beverages llp, Bldg no 7c,4b, Garden Café, 
                  Tc 23 break out Area, Reliance corporate park, Thane Belapur road, 
                  Ghansoli, Navi Mumbai 400701, Maharastra, India
                </button>
              </div>
            </div>

            {/* Factory */}
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-lg mt-0.5">•</span>
              <div className="text-left">
                <h4 className="font-[para] font-bold text-lg">Factory</h4>
                <p className="text-sm font-[para] text-gray-700">
                  Paradise juice private limited, Plot no A76/4/3, Sinnar Malegoan Midc, 
                  Taluka Sinnar, District Nashik 422113 Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Left Section - Contact Form */}
          <div className="w-full">
            <div className="w-full bg-white p-0 rounded-lg shadow-lg font-[para]">
              {/* Green Banner Inside Form */}
              <div className="w-full relative">
                <img
                  src="/assets/AnyFormTopImg.png"
                  alt="Order Form Illustration"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-black text-xl sm:text-2xl font-[para] font-bold px-6 py-2 rounded">
                    Get in Touch !
                  </span>
                </div>
              </div>

              {/* Form Section */}
              <div className="p-4 sm:p-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black placeholder:text-gray-500 text-sm focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
                    required
                  />
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number *"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black placeholder:text-gray-500 text-sm focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black placeholder:text-gray-500 text-sm focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
                    required
                  />
                  <textarea
                    name="helpSubject"
                    placeholder="Tell us what you need help with *"
                    rows={5}
                    value={formData.helpSubject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black placeholder:text-gray-500 text-sm resize-none focus:border-[#23aa5d] focus:outline-none focus:ring-1 focus:ring-[#23aa5d]"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-[#23aa5d] text-white font-[para] py-2 rounded-md hover:bg-green-600 text-base transition focus:outline-none focus:ring-2 focus:ring-[#23aa5d] focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Section - Map */}
          <div className="w-full h-full min-h-[400px]">
            <div className="w-full h-full rounded-lg shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.800761807785!2d73.00552280529212!3d19.124433163434816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0b75f886043%3A0xbfa2237b02810384!2sReliance%20Corporate%20Park!5e1!3m2!1sen!2sin!4v1763135271831!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "400px" }} 
                allowFullScreen="" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Zussioberry Works Location - Reliance Corporate Park"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}