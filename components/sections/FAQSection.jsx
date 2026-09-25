'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is Zussioberry's franchise concept?",
    answer: (
      <div className="space-y-3 leading-relaxed text-gray-700">
        <p>
          Zussioberry combines the goodness of natural fruits with an extensive range of global and Indian-inspired food and beverage offerings. From frozen treats to wholesome meals, we deliver health, taste, and freshness under one vibrant brand umbrella.
        </p>
        <p>
          With a focus on quality, innovation, and variety, our outlets offer a café-style experience that caters to all age groups - kids, youth, families, and wellness-seekers.
        </p>
        <p>
          Whether it&apos;s a quick juice, a filling wrap, a comforting soup, or a creamy kulfi - Zussioberry brings delight in every bite.
        </p>
      </div>
    ),
  },
  {
    question: "What kind of training will I receive?",
    answer: (
      <div className="space-y-4 leading-relaxed text-gray-700">
        <div className="font-bold text-[#23aa5d] uppercase tracking-wide text-xs sm:text-sm">
          Initial Franchise Training Program
        </div>
        
        <div>
          <span className="font-semibold text-gray-900 block mb-1">Classroom Training (Online & Offline)</span>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            <li>Brand philosophy & customer service etiquette</li>
            <li>Menu orientation, product knowledge & portioning</li>
            <li>Sales techniques & upselling strategies</li>
          </ul>
        </div>

        <div>
          <span className="font-semibold text-gray-900 block mb-1">On-Site Practical Training</span>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            <li>Live food & beverage preparation</li>
            <li>Equipment handling, hygiene standards, SOPs</li>
            <li>Inventory, billing & POS training</li>
            <li>Mock service scenarios to ensure confidence</li>
          </ul>
        </div>

        <div>
          <span className="font-semibold text-gray-900 block mb-1">Pre-Launch Readiness Checklist</span>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            <li>Site setup supervision</li>
            <li>Branding & signage compliance</li>
            <li>Menu configuration and stock verification</li>
            <li>Soft launch planning & trial runs</li>
          </ul>
        </div>
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
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#f7faf8] to-[#ffffff]">
      {/* Decorative Lemons & Fruits - Full Visibility & Crisp Drop Shadow */}
      <div className="hidden md:block absolute left-0 top-0 w-48 md:w-80 lg:w-96 z-0 pointer-events-none transition-transform duration-700 hover:scale-105">
        <img 
          src="/assets/sectionZussioberry/FAQs.png" 
          alt="Fresh Lemon Decor" 
          className="w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] opacity-100" 
        />
      </div>
      
      <div className="hidden md:block absolute right-0 bottom-0 w-48 md:w-80 lg:w-96 z-0 pointer-events-none transition-transform duration-700 hover:scale-105">
        <img 
          src="/assets/sectionZussioberry/RightFAQs.png" 
          alt="Fresh Fruits Decor" 
          className="w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] opacity-100" 
        />
      </div>

      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#23aa5d]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 relative z-10">
        <div className="inline-block px-3.5 py-1 rounded-full bg-[#23aa5d]/10 text-[#23aa5d] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
          Frequently Asked Questions
        </div>
        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-[heading-2] font-bold text-gray-900 tracking-tight">
          YOUR QUERIES <span className="text-[#23aa5d]">ANSWERED</span> HERE !
        </h2>
        <p className="text-gray-600 mt-3 font-[para] text-base sm:text-lg max-w-xl mx-auto">
          Find quick answers to the questions we get asked the most about owning a Zussioberry franchise.
        </p>
      </div>

      {/* Accordion FAQ List */}
      <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4 relative z-10 font-[para]">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`border transition-all duration-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md ${
                isOpen 
                  ? 'border-[#23aa5d] bg-white ring-2 ring-[#23aa5d]/15 shadow-lg shadow-[#23aa5d]/5' 
                  : 'border-gray-200/90 bg-white/95 hover:border-[#23aa5d]/50'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full cursor-pointer text-left px-5 sm:px-6 py-4 sm:py-5 flex justify-between items-center gap-4 focus:outline-none transition-colors group"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`font-semibold text-sm sm:text-base transition-colors ${
                  isOpen ? 'text-[#23aa5d]' : 'text-gray-800 group-hover:text-[#23aa5d]'
                }`}>
                  {faq.question}
                </span>
                
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-base sm:text-lg font-bold shrink-0 transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#23aa5d] text-white rotate-180 shadow-md shadow-[#23aa5d]/30' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-[#23aa5d]/10 group-hover:text-[#23aa5d]'
                }`}>
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-gray-600 border-t border-gray-100 bg-gray-50/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;