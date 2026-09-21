// 'use client';

// import React, { useState } from "react";

// const TeamPage = () => {
//   const coreTeamMembers = [
//     {
//       name: 'Ekta Jaiswal',
//       role: 'Co-founder & Marketing Head',
//       description: `Mrs. Ekta, an MBA in Marketing, plays a key role in Zussioberry's branding and customer engagement. With deep knowledge of market trends and consumer needs, she has shaped the brand identity to strongly connect with its audience. Her customer-first approach and marketing expertise have been vital in building Zussioberry's loyal customer base and keeping the brand top of mind in a dynamic market.`,
//       image: '/assets/womenplaceholder.webp',
//     },
//     {
//       name: 'K Subair',
//       role: 'Chief Operating Officer (COO)',
//       description: `With over a decade in the beverage industry, Mr. K. Subair, COO of Zussioberry, has been key to the company's growth and operational efficiency. His expertise in manufacturing and supply chain management has streamlined processes, ensured quality, and supported large-scale production. By skillfully adapting to market changes, he has played a vital role in driving Zussioberry's expansion.`,
//       image: '/assets/menplaceholder.webp',
//     },
//     {
//       name: 'Chandrashekhar Dhavde',
//       role: 'Product Development Head',
//       description: `Mr. Chandrashekhar Dhavde brings over a decade of expertise in New Product Development and the frozen fruit industry. His focus on innovation helps Zussioberry launch fresh, nutritious, and consumer-driven products. From concept to final launch, his technical skills in product development and frozen fruit processing strengthen the brand's commitment to quality and modern consumer preferences.`,
//       image: '/assets/menplaceholder.webp',
//     },
//   ];

//   const additionalTeamMembers = [
//   { 
//     name: "CHANDRASHEKHAR KISAN DHADVE", 
//     category: "management", 
//     gender: "male",
//     image: "/assets/team/SHEKHAR SIR.png"
//   },
//   { 
//     name: "CHETAN AMBRE", 
//     category: "management", 
//     gender: "male",
//     image: "/assets/team/CHETAN AMBRE.png"
//   },
//   { 
//     name: "DIGAMBAR SAUDAGAR", 
//     category: "quality", 
//     gender: "male",
//     image: "/assets/team/DIGAMBAR.png"
//   },
//   { 
//     name: "SACHIN SAWANT", 
//     category: "management", 
//     gender: "male",
//     image: "/assets/team/SACHIN SAWANT.png"
//   },
//   { 
//     name: "SANTOSH BABURAO BODKE", 
//     category: "management", 
//     gender: "male",
//     image: "/assets/team/SANTOSH BODAKE.png"
//   },
//   { 
//     name: "ALKA DARADE", 
//     category: "production", 
//     gender: "female",
//     image: "/assets/team/ALKA DARADE.png"
//   },
//   { 
//     name: "YOGESHWAR KISAN KOKATE", 
//     category: "production", 
//     gender: "male",
//     image: "/assets/team/YOGESH KOKATE.png"
//   },
//   { 
//     name: "MAYURI OHAL", 
//     category: "management", 
//     gender: "female",
//     image: "/assets/team/MAYURI OHAL.png"
//   },
//   { 
//     name: "DARSHAN PATIL", 
//     category: "quality", 
//     gender: "male",
//     image: "/assets/team/DARSHAN PATIL.png"
//   },
//   { 
//     name: "RANJAN BADATYA", 
//     category: "management", 
//     gender: "male",
//     image: "/assets/team/RANJAN.png"
//   },
//   { 
//     name: "VISHAL KUMAR", 
//     category: "production", 
//     gender: "male",
//     image: "/assets/team/VISHAL KUMAR.png"
//   },
//   { 
//     name: "GANESH WAJE", 
//     category: "support", 
//     gender: "male",
//     image: "/assets/team/GANESH WAJE.png"
//   },
//   { 
//     name: "BHAJAN VERMA", 
//     category: "management", 
//     gender: "male",
//     image: "/assets/team/BHAJAN VERMA.png"
//   },
//   // { 
//   //   name: "RAMESH PATIL", 
//   //   category: "", 
//   //   gender: "male",
//   //   image: "/assets/menplaceholder.webp"
//   // },
//   { 
//     name: "PRAFFUL VARKHADE", 
//     category: "production", 
//     gender: "male",
//     image: "/assets/team/PRAFULL WARKHADE.png"
//   },
//   { 
//     name: "MOHAMMAD SABIR", 
//     category: "production", 
//     gender: "male",
//     image: "/assets/team/SABBIR.png"
//   },
//   { 
//     name: "NAINA BAWISKAR", 
//     category: "production", 
//     gender: "female",
//     image: "/assets/team/NAINA.png"
//   },
//   { 
//     name: "DILIP SASANE", 
//     category: "support", 
//     gender: "male",
//     image: "/assets/team/DILIP SASANE.png"
//   },
//   { 
//     name: "RAJKUMAR", 
//     category: "quality", 
//     gender: "male",
//     image: "/assets/team/RAJKUMAR.png"
//   },
//   { 
//     name: "ANIL MANDALE", 
//     category: "quality", 
//     gender: "male",
//     image: "/assets/team/ANIL MANDALE.png"
//   },
//   { 
//     name: "RAJESH PATEL", 
//     category: "machine operator", 
//     gender: "male",
//     image: "/assets/team/RAJESH PATEL.png"
//   },
//   { 
//     name: "ATUL KUMAR", 
//     category: "quality", 
//     gender: "male",
//     image: "/assets/team/ATUL KUMAR.png"
//   },
//   { 
//     name: "DHURBAJIT GOYARY", 
//     category: "machine operator", 
//     gender: "male",
//     image: "/assets/team/DHURBAJIT GOYARY.png"
//   },
//   { 
//     name: "VISHAL BAGUL", 
//     category: "cafe manager", 
//     gender: "male",
//     image: "/assets/team/VISHAL BAGUL.png"
//   },
//   { 
//     name: "CHARKU BAITHA", 
//     category: "production", 
//     gender: "male",
//     image: "/assets/team/CHARKU BAITHA.png"
//   },
//   { 
//     name: "NIRANJAN HATI", 
//     category: "management", 
//     gender: "male",
//     image: "/assets/team/NIRANJAN HATI.png"
//   },
//   { 
//     name: "SHUBHAM JADHAV", 
//     category: "management", 
//     gender: "male",
//     image: "/assets/team/SHUBHAM JADHAV.png"
//   },
//   { 
//     name: "SANTOSH HATI", 
//     category: "food production team", 
//     gender: "male",
//     image: "/assets/team/SANTOSH HATI.png"
//   },
//   { 
//     name: "PADMOLOCHAN HATI", 
//     category: "production", 
//     gender: "male",
//     image: "/assets/team/PADMOLOCHAN HATI.png"
//   },
//   { 
//     name: "BHARAT HATI", 
//     category: "production", 
//     gender: "male",
//     image: "/assets/team/BHARAT HATI.png"
//   },
//   { 
//     name: "SANGITA THORAT", 
//     category: "production", 
//     gender: "male",
//     image: "/assets/team/SANGITA THORAT.png"
//   },
//   { 
//     name: "PAPAU DAS", 
//     category: "production", 
//     gender: "male",
//     image: "/assets/team/PAPAU DAS.png"
//   },
//   { 
//     name: "MAHI GAIKWAD", 
//     category: "production", 
//     gender: "male",
//     image: "/assets/team/MAHI GAIKWAD.png"
//   },
//   { 
//     name: "CHANDAN GIRI", 
//     category: "food production team", 
//     gender: "male",
//     image: "/assets/team/CHANDAN GIRI.png"
//   },
//   { 
//     name: "MANOJ GAOUDA", 
//     category: "food production team", 
//     gender: "male",
//     image: "/assets/team/MANOJ GAOUDA.png"
//   },
//   { 
//     name: "SHIVLING MADDE", 
//     category: "food production team", 
//     gender: "male",
//     image: "/assets/team/SHIVLING MADDE.png"
//   },
//   { 
//     name: "JOY BISWAS", 
//     category: "food production team", 
//     gender: "male",
//     image: "/assets/team/JOY BISWAS.png"
//   },
// ];


//   const [activeFilter, setActiveFilter] = useState("all");

//   const filteredMembers = activeFilter === "all" 
//     ? additionalTeamMembers 
//     : additionalTeamMembers.filter(member => member.category === activeFilter);

//   // Function to handle LinkedIn button click
//   const handleLinkedInClick = () => {
//     // Replace with actual LinkedIn URL when available
//     const linkedinUrl = "https://www.linkedin.com/in/sunil-jaiswal-66b2491a6/"; // Empty as requested - add LinkedIn URL here when available
//     if (linkedinUrl) {
//       window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
//     } else {
//       // Optional: Add a console log or alert for empty URL
//       console.log("LinkedIn URL not available");
//       // You can also add: alert("LinkedIn profile link will be added soon!");
//     }
//   };

//   return (
//     <>
//       <section
//         className="relative bg-center bg-cover min-h-[80vh] flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/assets/founderBanner.png')",
//         }}>
//         <div className="relative z-10 mx-auto px-4 sm:px-6 py-10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10"
//           style={{ width: "100%", maxWidth: "900px" }}>
//           {/* Left Text Content */}
//           <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left text-white md:pr-8 mt-8 md:mt-0 min-w-[280px] max-w-xl">
//             <h3 className="text-xl sm:text-2xl font-bold font-[heading-2] mb-2 sm:mb-4">
//               - Our Founder & CEO
//             </h3>
//             <h2 className="text-3xl sm:text-4xl md:text-6xl font-[heading-1] mb-3 sm:mb-4">
//               Sunil Jaiswal
//             </h2>
//             <p className="text-gray-200 mb-6 text-base sm:text-lg leading-relaxed font-[para] max-w-lg">
//             As the founder of Zussioberry, Mr. Sunil Jaiswal has been the driving force behind the brand's growth. 
//             With 15+ years of experience, he rose from managing a small kiosk to establishing a modern processing plant. 
//             His industry expertise, strategic vision, and commitment to quality and innovation have positioned Zussioberry 
//             as a trusted name in the market.
//             </p>
            
//             {/* LinkedIn Button with Theme Color */}
//             <button
//               onClick={handleLinkedInClick}
//               className="bg-[#23aa5d] hover:bg-green-600 text-white font-medium py-2.5 px-6 rounded-full flex items-center gap-2 transition duration-300 mt-4 cursor-pointer shadow-lg hover:shadow-xl"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//               </svg>
//               Connect on LinkedIn
//             </button>
//           </div>

//           {/* Right Image */}
//           <div className="flex-shrink-0 flex justify-center items-center min-w-[220px] max-w-xs">
//             <img
//               src="/assets/sectionZussioberry/founder.png"
//               alt="Sunil Jaiswal"
//               className="w-full max-w-[250px] sm:max-w-sm rounded-lg shadow-lg object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Rest of the component remains the same */}
//       <section className="bg-white py-14 sm:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           {/* Section Title */}
//           <div className="text-center mb-12 sm:mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#23aa5d] font-[heading-1]">
//               Our Core Team
//             </h2>
//             <p className="text-gray-600 mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg font-[para]">
//               Meet the passionate minds driving Zussioberry's flavors, innovation, and growth.
//             </p>
//           </div>

//           {/* Team Members */}
//           {coreTeamMembers.map((member, index) => {
//             const isEven = index % 2 === 0;
//             return (
//               <div
//                 key={index}
//                 className={`flex flex-col-reverse ${
//                   isEven ? 'md:flex-row' : 'md:flex-row-reverse'
//                 } items-center justify-center gap-6 sm:gap-10 mb-12 sm:mb-16`}
//               >
//                 {/* Description */}
//                 <div className="w-full md:w-[45%] max-w-xl px-2 sm:px-4 mt-6 md:mt-0 text-center md:text-left">
//                   <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-[para]">
//                     {member.description}
//                   </p>
//                 </div>

//                 {/* Image */}
//                 <div className="relative w-48 h-56 sm:w-64 sm:h-72 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2 sm:py-3">
//                     <h3 className="text-base sm:text-lg font-bold font-[para]">{member.name}</h3>
//                     <p className="text-xs sm:text-sm font-[para]">{member.role}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Additional Team Members Section */}
//       <section className="mb-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           {/* Section Title */}
//           <div className="text-center mb-12 sm:mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#23aa5d] font-[heading-1]">
//               Our Team Members
//             </h2>
//             <p className="text-gray-600 mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg font-[para]">
//               Dedicated professionals working together to deliver excellence.
//             </p>
//           </div>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-3 mb-10">
//             <button 
//               className={`px-4 py-2 cursor-pointer rounded-full font-medium transition-all ${activeFilter === "all" ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => setActiveFilter("all")}
//             >
//               All Members
//             </button>
//             <button 
//               className={`px-4 py-2 cursor-pointer rounded-full font-medium transition-all ${activeFilter === "management" ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => setActiveFilter("management")}
//             >
//               Management
//             </button>
//             <button 
//               className={`px-4 py-2 cursor-pointer rounded-full font-medium transition-all ${activeFilter === "production" ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => setActiveFilter("production")}
//             >
//               Production
//             </button>
//             <button 
//               className={`px-4 cursor-pointer py-2 rounded-full font-medium transition-all ${activeFilter === "quality" ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => setActiveFilter("quality")}
//             >
//               Quality Control
//             </button>
//             <button 
//               className={`px-4 py-2 cursor-pointer rounded-full font-medium transition-all ${activeFilter === "support" ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => setActiveFilter("support")}
//             >
//               Support Staff
//             </button>
//           </div>

//           {/* Team Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//             {filteredMembers.map((member, index) => (
//               <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={member.image || (member.gender === "female" ? "/assets/womenplaceholder.webp" : "/assets/menplaceholder.webp")} 
//                     alt={member.name}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <div className="p-4 text-center">
//                   <h3 className="font-semibold text-sm text-gray-800 mb-1">{member.name}</h3>
//                   {/* <p className="text-green-600 text-xs">{member.designation}</p> */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TeamPage;



'use client';

import React, { useState } from "react";

const TeamPage = () => {
  const coreTeamMembers = [
    {
      name: 'Ekta Jaiswal',
      role: 'Co-founder & Marketing Head',
      description: `Mrs. Ekta, an MBA in Marketing, plays a key role in Zussioberry's branding and customer engagement. With deep knowledge of market trends and consumer needs, she has shaped the brand identity to strongly connect with its audience. Her customer-first approach and marketing expertise have been vital in building Zussioberry's loyal customer base and keeping the brand top of mind in a dynamic market.`,
      image: '/assets/womenplaceholder.webp',
    },
    {
      name: 'K Subair',
      role: 'Chief Operating Officer (COO)',
      description: `With over a decade in the beverage industry, Mr. K. Subair, COO of Zussioberry, has been key to the company's growth and operational efficiency. His expertise in manufacturing and supply chain management has streamlined processes, ensured quality, and supported large-scale production. By skillfully adapting to market changes, he has played a vital role in driving Zussioberry's expansion.`,
      image: '/assets/menplaceholder.webp',
    },
    {
      name: 'Chandrashekhar Dhavde',
      role: 'Product Development Head',
      description: `Mr. Chandrashekhar Dhavde brings over a decade of expertise in New Product Development and the frozen fruit industry. His focus on innovation helps Zussioberry launch fresh, nutritious, and consumer-driven products. From concept to final launch, his technical skills in product development and frozen fruit processing strengthen the brand's commitment to quality and modern consumer preferences.`,
      image: '/assets/menplaceholder.webp',
    },
  ];

  const additionalTeamMembers = [
  { 
    name: "CHETAN AMBRE", 
    designation: "Quality Control Manager",
    image: "/assets/team/CHETAN AMBRE.png"
  },
  { 
    name: "DIGAMBAR SAUDAGAR", 
    designation: "Cold Storage And Freezing Manager",
    image: "/assets/team/DIGAMBAR.png"
  },
  { 
    name: "SACHIN SAWANT", 
    designation: "Maintenance Engineer",
    image: "/assets/team/SACHIN SAWANT.png"
  },
  { 
    name: "SANTOSH BABURAO BODKE", 
    designation: "Procurement Co-ordinator",
    image: "/assets/team/SANTOSH BODAKE.png"
  },
  { 
    name: "ALKA DARADE", 
    designation: "Production Executive",
    image: "/assets/team/ALKA DARADE.png"
  },
  { 
    name: "YOGESHWAR KISAN KOKATE", 
    designation: "Production Executive",
    image: "/assets/team/YOGESH KOKATE.png"
  },
  { 
    name: "MAYURI OHAL", 
    designation: "Food Technologist",
    image: "/assets/team/MAYURI OHAL.png"
  },
  { 
    name: "DARSHAN PATIL", 
    designation: "Food Technologist",
    image: "/assets/team/DARSHAN PATIL.png"
  },
  { 
    name: "RANJAN BADATYA", 
    designation: "Packaging & Labeling Incharge",
    image: "/assets/team/RANJAN.png"
  },
  { 
    name: "VISHAL KUMAR", 
    designation: "Production Executive",
    image: "/assets/team/VISHAL KUMAR.png"
  },
  { 
    name: "GANESH WAJE", 
    designation: "Maintenance Executive",
    image: "/assets/team/GANESH WAJE.png"
  },
  { 
    name: "BHAJAN VERMA", 
    designation: "Accounts Manager",
    image: "/assets/team/BHAJAN VERMA.png"
  },
  { 
    name: "PRAFFUL VARKHADE", 
    designation: "Production Line Workers",
    image: "/assets/team/PRAFULL WARKHADE.png"
  },
  { 
    name: "MOHAMMAD SABIR", 
    designation: "Production Line Workers",
    image: "/assets/team/SABBIR.png"
  },
  { 
    name: "NAINA BAWISKAR", 
    designation: "Production Line Workers",
    image: "/assets/team/NAINA.png"
  },
  { 
    name: "DILIP SASANE", 
    designation: "Housekeeping",
    image: "/assets/team/DILIP SASANE.png"
  },
  { 
    name: "RAJKUMAR", 
    designation: "Warehouse & Store In-charge",
    image: "/assets/team/RAJKUMAR.png"
  },
  { 
    name: "ANIL MANDALE", 
    designation: "Security Guards",
    image: "/assets/team/ANIL MANDALE.png"
  },
  { 
    name: "RAJESH PATEL", 
    designation: "Machine Operators",
    image: "/assets/team/RAJESH PATEL.png"
  },
  { 
    name: "ATUL KUMAR", 
    designation: "Staff Support",
    image: "/assets/team/ATUL KUMAR.png"
  },
  { 
    name: "DHRUBJIT GOYARY", 
    designation: "Staff Support",
    image: "/assets/team/DHURBAJIT GOYARY.png"
  },
  { 
    name: "VISHAL BAGUL", 
    designation: "Café Manager",
    image: "/assets/team/VISHAL BAGUL.png"
  },
  { 
    name: "CHARKU BAITHA", 
    designation: "Café Manager",
    image: "/assets/team/CHARKU BAITHA.png"
  },
  { 
    name: "NIRANJAN HATI", 
    designation: "Café Manager",
    image: "/assets/team/NIRANJAN HATI.png"
  },
  { 
    name: "SHUBHAM JADHAV", 
    designation: "Food Technologist",
    image: "/assets/team/SHUBHAM JADHAV.png"
  },
  { 
    name: "SANTOSH HATI", 
    designation: "Food Production Team",
    image: "/assets/team/SANTOSH HATI.png"
  },
  { 
    name: "PADMOLOCHAN HATI", 
    designation: "Food Production Team",
    image: "/assets/team/PADMOLOCHAN HATI.png"
  },
  { 
    name: "BHARAT HATI", 
    designation: "Food Production Team",
    image: "/assets/team/BHARAT HATI.png"
  },
  { 
    name: "SANGITA THORAT", 
    designation: "Food Production Team",
    image: "/assets/team/SANGITA THORAT.png"
  },
  { 
    name: "PAPPU DAS", 
    designation: "Food Production Team",
    image: "/assets/team/PAPAU DAS.png"
  },
  { 
    name: "MAHI GAIKWAD", 
    designation: "Food Production Team",
    image: "/assets/team/MAHI GAIKWAD.png"
  },
  { 
    name: "CHANDAN GIRI", 
    designation: "Food Production Team",
    image: "/assets/team/CHANDAN GIRI.png"
  },
  { 
    name: "MANOJ GAUODA", 
    designation: "Food Production Team",
    image: "/assets/team/MANOJ GAOUDA.png"
  },
  { 
    name: "SHIVLING MADDE", 
    designation: "Food Production Team",
    image: "/assets/team/SHIVLING MADDE.png"
  },
  { 
    name: "JOY BISWAS", 
    designation: "Food Production Team",
    image: "/assets/team/JOY BISWAS.png"
  },
];


  // Function to handle LinkedIn button click
  const handleLinkedInClick = () => {
    // Replace with actual LinkedIn URL when available
    const linkedinUrl = "https://www.linkedin.com/in/sunil-jaiswal-66b2491a6/"; // Empty as requested - add LinkedIn URL here when available
    if (linkedinUrl) {
      window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Optional: Add a console log or alert for empty URL
      console.log("LinkedIn URL not available");
      // You can also add: alert("LinkedIn profile link will be added soon!");
    }
  };

  return (
    <>
      <section
        className="relative bg-center bg-cover min-h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/founderBanner.png')",
        }}>
        <div className="relative z-10 mx-auto px-4 sm:px-6 py-10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10"
          style={{ width: "100%", maxWidth: "900px" }}>
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left text-white md:pr-8 mt-8 md:mt-0 min-w-[280px] max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold font-[heading-2] mb-2 sm:mb-4">
              - Our Founder & CEO
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-[heading-1] mb-3 sm:mb-4">
              Sunil Jaiswal
            </h2>
            <p className="text-gray-200 mb-6 text-base sm:text-lg leading-relaxed font-[para] max-w-lg">
            As the founder of Zussioberry, Mr. Sunil Jaiswal has been the driving force behind the brand's growth. 
            With 15+ years of experience, he rose from managing a small kiosk to establishing a modern processing plant. 
            His industry expertise, strategic vision, and commitment to quality and innovation have positioned Zussioberry 
            as a trusted name in the market.
            </p>
            
            {/* LinkedIn Button with Theme Color */}
            <button
              onClick={handleLinkedInClick}
              className="bg-[#23aa5d] hover:bg-green-600 text-white font-medium py-2.5 px-6 rounded-full flex items-center gap-2 transition duration-300 mt-4 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0 flex justify-center items-center min-w-[220px] max-w-xs">
            <img
              src="/assets/sectionZussioberry/founder.png"
              alt="Sunil Jaiswal"
              className="w-full max-w-[250px] sm:max-w-sm rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#23aa5d] font-[heading-1]">
              Our Core Team
            </h2>
            <p className="text-gray-600 mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg font-[para]">
              Meet the passionate minds driving Zussioberry's flavors, innovation, and growth.
            </p>
          </div>

          {/* Team Members */}
          {coreTeamMembers.map((member, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col-reverse ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center justify-center gap-6 sm:gap-10 mb-12 sm:mb-16`}
              >
                {/* Description */}
                <div className="w-full md:w-[45%] max-w-xl px-2 sm:px-4 mt-6 md:mt-0 text-center md:text-left">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-[para]">
                    {member.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative w-48 h-56 sm:w-64 sm:h-72 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2 sm:py-3">
                    <h3 className="text-base sm:text-lg font-bold font-[para]">{member.name}</h3>
                    <p className="text-xs sm:text-sm font-[para]">{member.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Team Members Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#23aa5d] font-[heading-1]">
              Our Team Members
            </h2>
            <p className="text-gray-600 mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg font-[para]">
              Dedicated professionals working together to deliver excellence.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {additionalTeamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-sm text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-green-600 text-xs">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;