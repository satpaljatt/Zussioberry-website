// 'use client'; // only if using Next.js app router and need client-side interactivity

// import { useState } from 'react';

// const faqs = [
//   {
//     question: "What is Zussioberry's franchise concept?",
//     answer:
//       "Zussioberry offers a unique franchise concept centered around our range of blended fruit beverages, including juices, milkshakes, smoothies, falooda, and natural ice-creams. Our franchise model is designed to provide a comprehensive support system to help you succeed, from initial setup to ongoing operations.",
//   },
//   {
//     question: "What kind of training will I receive?",
//     answer:
//       "We provide full training for you and your staff covering operations, hygiene standards, customer service, and marketing strategies.",
//   },
//   {
//     question: "What does the franchise package include?",
//     answer:
//       "The package includes setup assistance, equipment, branding materials, staff training, and marketing support.",
//   },
//   {
//     question: "What kind of support can I expect after opening?",
//     answer:
//       "Post-launch, we offer continued support through audits, marketing help, menu updates, and business consultations.",
//   },
//   {
//     question: "Can I open Zussioberry at multiple locations?",
//     answer:
//       "Yes, we offer multi-unit franchise opportunities for qualified partners.",
//   },
//   {
//     question: "Whom can I contact for more information?",
//     answer:
//       "You can reach out to our franchise support team via the contact form or call the number provided above.",
//   },
// ];

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="py-10 sm:py-20 px-2 xs:px-4 sm:px-6 bg-white relative overflow-hidden">
//       {/* Decorative lemons, responsive: hide on mobile, show on md+ */}
//       <div className="hidden md:block absolute left-0 top-0 w-40 md:w-72 z-0">
//         <img src="/assets/sectionZussioberry/FAQs.png" alt="Lemon Decor" className="w-full" />
//       </div>
//       <div className="hidden md:block absolute right-0 bottom-0 w-40 md:w-72 z-0">
//         <img src="/assets/sectionZussioberry/RightFAQs.png" alt="Lemon Decor" className="w-full" />
//       </div>

//       <div className="text-center mb-8 sm:mb-12 relative z-10">
//         <h2 className="text-2xl xs:text-3xl sm:text-3xl font-[heading-2] font-bold">
//           YOUR QUERIES <span className="text-[#23aa5d]">ANSWERED</span> HERE !
//         </h2>
//         <p className="text-gray-600 mt-2 font-[para] text-sm xs:text-base">
//           Find quick answers to the questions we get asked the most.
//         </p>
//       </div>

//       <div className="max-w-lg sm:max-w-3xl mx-auto space-y-3 sm:space-y-4 relative z-10 cursor-pointer font-[para]">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="border border-gray-200 sm:border-gray-300 cursor-pointer rounded-md sm:rounded-lg overflow-hidden transition-shadow bg-white"
//           >
//             <button
//               onClick={() => toggle(index)}
//               className="w-full cursor-pointer text-left px-3 xs:px-4 py-2 xs:py-3 flex justify-between items-center bg-white hover:bg-gray-100 focus:outline-none"
//               aria-expanded={activeIndex === index}
//               aria-controls={`faq-answer-${index}`}
//             >
//               <span className="font-medium text-gray-800 text-sm xs:text-base">{faq.question}</span>
//               <span className="text-lg xs:text-xl text-gray-600">
//                 {activeIndex === index ? '-' : '+'}
//               </span>
//             </button>
//             <div
//               id={`faq-answer-${index}`}
//               className={`transition-all duration-300 ease-in-out bg-gray-50 ${
//                 activeIndex === index
//                   ? 'max-h-96 opacity-100 py-2 xs:py-3 px-3 xs:px-4'
//                   : 'max-h-0 opacity-0 py-0 px-3 xs:px-4'
//               } text-xs xs:text-sm sm:text-sm text-gray-700 font-[para] overflow-hidden`}
//               style={{
//                 visibility: activeIndex === index ? 'visible' : 'hidden',
//               }}
//             >
//               {faq.answer}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQSection;


'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What is Zussioberry's franchise concept?",
    answer: (
      <div>
        Zussioberry combines the goodness of natural fruits with an extensive range of global and Indian-inspired food and beverage offerings. From frozen treats to wholesome meals, we deliver health, taste, and freshness under one vibrant brand umbrella.
        <br /><br />
        With a focus on quality, innovation, and variety, our outlets offer a café-style experience that caters to all age groups - kids, youth, families, and wellness-seekers.
        <br /><br />
        Whether it's a quick juice, a filling wrap, a comforting soup, or a creamy kulfi - Zussioberry brings delight in every bite.
      </div>
    ),
  },
  {
    question: "What kind of training will I receive?",
    answer: (
      <div>
        <strong>INITIAL FRANCHISE TRAINING PROGRAM</strong>
        <br /><br />
        <strong>Classroom Training (Online & Offline)</strong>
        <ul className="list-disc pl-5 mt-1">
          <li>Brand philosophy & customer service etiquette</li>
          <li>Menu orientation, product knowledge & portioning</li>
          <li>Sales techniques & upselling strategies</li>
        </ul>
        <br />
        <strong>On-Site Practical Training</strong>
        <ul className="list-disc pl-5 mt-1">
          <li>Live food & beverage preparation</li>
          <li>Equipment handling, hygiene standards, SOPs</li>
          <li>Inventory, billing & POS training</li>
          <li>Mock service scenarios to ensure confidence</li>
        </ul>
        <br />
        <strong>Pre-Launch Readiness Checklist</strong>
        <ul className="list-disc pl-5 mt-1">
          <li>Site setup supervision</li>
          <li>Branding & signage compliance</li>
          <li>Menu configuration and stock verification</li>
          <li>Soft launch planning & trial runs</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What does the franchise package include?",
    answer: "The package includes setup assistance, equipment, branding materials, staff training, and marketing support.",
  },
  {
    question: "What kind of support can I expect after opening?",
    answer: "Post-launch, we offer continued support through audits, marketing help, menu updates, and business consultations.",
  },
  {
    question: "Can I open Zussioberry at multiple locations?",
    answer: "Yes, we offer multi-unit franchise opportunities for qualified partners.",
  },
  {
    question: "Whom can I contact for more information?",
    answer: "You can reach out to our franchise support team via the contact form or call us at: Phone No: +91 9769596096, +91 969996645",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-20 px-2 xs:px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Decorative lemons, responsive: hide on mobile, show on md+ */}
      <div className="hidden md:block absolute left-0 top-0 w-40 md:w-72 z-0">
        <img src="/assets/sectionZussioberry/FAQs.png" alt="Lemon Decor" className="w-full" />
      </div>
      <div className="hidden md:block absolute right-0 bottom-0 w-40 md:w-72 z-0">
        <img src="/assets/sectionZussioberry/RightFAQs.png" alt="Lemon Decor" className="w-full" />
      </div>

      <div className="text-center mb-8 sm:mb-12 relative z-10">
        <h2 className="text-2xl xs:text-3xl sm:text-3xl font-[heading-2] font-bold">
          YOUR QUERIES <span className="text-[#23aa5d]">ANSWERED</span> HERE !
        </h2>
        <p className="text-gray-600 mt-2 font-[para] text-sm xs:text-base">
          Find quick answers to the questions we get asked the most.
        </p>
      </div>

      <div className="max-w-lg sm:max-w-3xl mx-auto space-y-3 sm:space-y-4 relative z-10 cursor-pointer font-[para]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 sm:border-gray-300 cursor-pointer rounded-md sm:rounded-lg overflow-hidden transition-shadow bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full cursor-pointer text-left px-3 xs:px-4 py-2 xs:py-3 flex justify-between items-center bg-white hover:bg-gray-100 focus:outline-none"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-medium text-gray-800 text-sm xs:text-base">{faq.question}</span>
              <span className="text-lg xs:text-xl text-gray-600">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`transition-all duration-300 ease-in-out bg-gray-50 ${
                activeIndex === index
                  ? 'max-h-96 opacity-100 py-2 xs:py-3 px-3 xs:px-4'
                  : 'max-h-0 opacity-0 py-0 px-3 xs:px-4'
              } text-xs xs:text-sm sm:text-sm text-gray-700 font-[para] overflow-hidden`}
              style={{
                visibility: activeIndex === index ? 'visible' : 'hidden',
              }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;