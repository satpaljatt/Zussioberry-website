'use client';
import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

// Reusable SVG Splash Backdrop Component with satellite droplets (Reference Design)
const SplashBackdrop = ({ color = '#ec4899', variant = 0 }) => {
  const splashes = [
    // Splash 1: Round organic fluid blob with droplets
    <svg key="s1" viewBox="0 0 120 120" className="w-full h-full drop-shadow-sm" fill={color}>
      <path
        d="M60,14 C76,11 91,22 98,37 C105,52 108,68 101,82 C94,96 79,104 64,106 C48,108 32,102 22,90 C12,78 11,61 16,46 C21,31 34,22 47,15 C52,13 56,15 60,14 Z"
        opacity="0.95"
      />
      <circle cx="107" cy="28" r="4.5" opacity="0.9" />
      <circle cx="114" cy="42" r="2.5" opacity="0.8" />
      <circle cx="102" cy="16" r="3" opacity="0.85" />
      <circle cx="14" cy="26" r="4" opacity="0.85" />
      <circle cx="7" cy="39" r="2.5" opacity="0.75" />
      <circle cx="18" cy="102" r="3.5" opacity="0.85" />
      <circle cx="30" cy="111" r="2.5" opacity="0.8" />
      <circle cx="92" cy="104" r="4" opacity="0.9" />
      <circle cx="104" cy="94" r="2.5" opacity="0.75" />
    </svg>,
    // Splash 2: Angular paint splatter
    <svg key="s2" viewBox="0 0 120 120" className="w-full h-full drop-shadow-sm" fill={color}>
      <path
        d="M58,12 C74,10 90,19 99,33 C108,47 106,66 100,81 C94,96 78,107 62,107 C46,107 31,99 21,87 C11,75 12,56 18,41 C24,26 41,13 58,12 Z"
        opacity="0.95"
      />
      <circle cx="110" cy="54" r="4" opacity="0.9" />
      <circle cx="115" cy="67" r="2.5" opacity="0.8" />
      <circle cx="96" cy="99" r="3.5" opacity="0.85" />
      <circle cx="26" cy="14" r="4" opacity="0.85" />
      <circle cx="14" cy="21" r="2.5" opacity="0.75" />
      <circle cx="9" cy="84" r="3.5" opacity="0.85" />
      <circle cx="76" cy="113" r="3" opacity="0.8" />
      <circle cx="8" cy="68" r="2.5" opacity="0.75" />
    </svg>,
    // Splash 3: Dynamic fluid burst
    <svg key="s3" viewBox="0 0 120 120" className="w-full h-full drop-shadow-sm" fill={color}>
      <path
        d="M62,15 C79,13 95,24 101,39 C107,54 107,71 99,84 C91,97 75,105 60,106 C44,107 27,101 18,89 C9,77 10,58 17,43 C24,28 45,17 62,15 Z"
        opacity="0.95"
      />
      <circle cx="104" cy="21" r="3.5" opacity="0.9" />
      <circle cx="113" cy="33" r="2.5" opacity="0.8" />
      <circle cx="7" cy="51" r="4" opacity="0.85" />
      <circle cx="13" cy="97" r="3" opacity="0.8" />
      <circle cx="105" cy="79" r="3.5" opacity="0.85" />
      <circle cx="44" cy="113" r="3" opacity="0.8" />
      <circle cx="114" cy="91" r="2.5" opacity="0.75" />
    </svg>,
  ];
  return splashes[variant % splashes.length];
};

// All Category Data with real images, prices, descriptions, calories, and splash colors
const menuCategories = [
  {
    id: 'frozen-treats',
    name: 'Frozen Treats',
    description: 'A delightful collection of authentic Italian gelato, refreshing popsicles, artisanal kulfi, and fruit-based natural ice creams.',
    items: [
      {
        name: 'Gelato',
        targetCategoryId: 'gelato',
        price: 'From ₹139',
        calories: '160 | 250 cal',
        description: 'Italian frozen dessert with dense, rich texture and intense flavors, made with lower fat and air content.',
        imageUrl: '/assets/menu/desserts/frozendesserts/1.avif',
        splashColor: '#0284c7',
      },
      {
        name: 'Popsicles',
        targetCategoryId: 'popsicles',
        price: 'From ₹79',
        calories: '60 | 110 cal',
        description: 'Refreshing frozen treats crafted from 100% natural fruit purées and sweet infusions on wooden sticks.',
        imageUrl: '/assets/SmallZussioberry/Popsicle.png',
        splashColor: '#f97316',
      },
      {
        name: 'Kulfiyo',
        targetCategoryId: 'kulfiyo',
        price: 'From ₹99',
        calories: '180 | 280 cal',
        description: 'Traditional Indian kulfi reimagined with natural ingredients, slow-simmered milk, saffron, and pistachios.',
        imageUrl: '/assets/SmallZussioberry/CreamyKulfi.png',
        splashColor: '#d97706',
      },
      {
        name: 'Natural Fruit Ice Cream',
        targetCategoryId: 'natural-icecream',
        price: 'From ₹119',
        calories: '150 | 240 cal',
        description: 'Pure, handcrafted ice creams made with fresh seasonal fruits, rich dairy, and zero artificial colors or preservatives.',
        imageUrl: '/assets/SmallZussioberry/Desserts.png',
        splashColor: '#ec4899',
      },
    ],
  },
  {
    id: 'gelato',
    name: 'Gelato',
    description: 'Italian frozen dessert with dense, rich texture and intense flavors, made with lower fat and air content than traditional ice cream.',
    items: [
      { name: 'Madagascar Vanilla Gelato', price: '₹139', calories: '180 cal', description: 'Made with fragrant vanilla beans from Madagascar for an exquisitely pure, floral vanilla finish.', imageUrl: '/assets/menu/desserts/frozendesserts/1.avif', splashColor: '#fbbf24' },
      { name: 'Salted Butter Caramel Gelato', price: '₹159', calories: '230 cal', description: 'Slow-cooked golden butter caramel with a kiss of French sea salt in velvety Italian cream.', imageUrl: '/assets/menu/desserts/frozendesserts/2.jpg', splashColor: '#d97706' },
      { name: 'Strawberry Frutteto Gelato', price: '₹149', calories: '170 cal', description: 'Sun-ripened farm strawberries churned into a vibrant, silky-smooth Mediterranean gelato.', imageUrl: '/assets/menu/desserts/frozendesserts/3.jpeg', splashColor: '#f43f5e' },
      { name: 'Exotic Pineapple Gelato', price: '₹139', calories: '160 cal', description: 'Tropical, tangy, and refreshing gelato bursting with juicy crushed pineapple sweetness.', imageUrl: '/assets/menu/desserts/frozendesserts/4.jpg', splashColor: '#eab308' },
      { name: 'Strawberry Greek Yogurt Gelato', price: '₹159', calories: '190 cal', description: 'Creamy probiotic Greek yogurt churned with chunky strawberry compote for a tangy treat.', imageUrl: '/assets/menu/desserts/frozendesserts/5.webp', splashColor: '#ec4899' },
      { name: 'Blueberry Greek Yogurt Gelato', price: '₹159', calories: '190 cal', description: 'Wild blueberry swirls folded into rich, creamy Greek yogurt gelato base.', imageUrl: '/assets/menu/desserts/frozendesserts/6.jpg', splashColor: '#6366f1' },
      { name: 'Belgian Chocolate Gelato', price: '₹169', calories: '240 cal', description: 'Pure dark Belgian chocolate churned into an intensely decadent, velvety Italian gelato.', imageUrl: '/assets/blogs/CS2.jpg', splashColor: '#451a03' },
      { name: 'American Fruit & Nuts Gelato', price: '₹169', calories: '250 cal', description: 'Roasted almonds, pistachios, cashews, and candied fruits folded into clotted cream.', imageUrl: '/assets/SmallZussioberry/Dryfruit.png', splashColor: '#b45309' },
      { name: 'Strawberry NY Cheesecake', price: '₹179', calories: '260 cal', description: 'Cream cheese gelato swirled with strawberry ribbon and buttery graham cracker crust.', imageUrl: '/assets/dessert-add/desserts.png', splashColor: '#e11d48' },
      { name: 'Blueberry NY Cheesecake', price: '₹179', calories: '260 cal', description: 'Tangy New York cheesecake base layered with sweet blueberry compote and cake bites.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-3.jpg', splashColor: '#4f46e5' },
      { name: 'Coffee Cappuccino Gelato', price: '₹149', calories: '180 cal', description: 'Captures the bold, aromatic essence of authentic Italian espresso with frothy cream.', imageUrl: '/assets/blogs/ClassicF.JPG', splashColor: '#78350f' },
      { name: 'Pistachio Gelato', price: '₹179', calories: '220 cal', description: 'Crafted with roasted Mediterranean emerald pistachios for a rich, earthy, nutty experience.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-2.jpg', splashColor: '#15803d' },
      { name: 'Ferrero Rocher Gelato', price: '₹189', calories: '280 cal', description: 'Hazelnut chocolate cream, toasted hazelnut crunch, and wafer crisps in rich gelato.', imageUrl: '/assets/beverage-add/frappe.png', splashColor: '#713f12' },
    ],
  },
  {
    id: 'popsicles',
    name: 'Popsicles',
    description: 'Refreshing frozen treats crafted from 100% natural fruit purées and sweet infusions on wooden sticks.',
    items: [
      { name: 'Mango Popsicle', price: '₹79', calories: '75 cal', description: 'Made with 100% ripe Alphonso mango purée for an all-natural sweet summer delight.', imageUrl: '/assets/SmallZussioberry/Popsicle.png', splashColor: '#f59e0b' },
      { name: 'Sugarcane Popsicle', price: '₹69', calories: '60 cal', description: 'Cold-pressed natural sugarcane juice with ginger and lemon, frozen on a stick.', imageUrl: '/assets/menu/beverages/beverages/1.JPG', splashColor: '#84cc16' },
      { name: 'Jamun Popsicle', price: '₹79', calories: '55 cal', description: 'Handpicked Indian black plum pulp with a sprinkle of rock salt for a tangy zing.', imageUrl: '/assets/SmallZussioberry/juice_img.png', splashColor: '#581c87' },
      { name: 'Lychee Coconut Popsicle', price: '₹89', calories: '85 cal', description: 'Floral sweet lychee purée layered with creamy coconut milk for a tropical breeze.', imageUrl: '/assets/menu/desserts/frozendesserts/3.jpeg', splashColor: '#0284c7' },
      { name: 'Pomegranate Popsicle', price: '₹89', calories: '70 cal', description: 'Antioxidant-rich ruby-red pomegranate juice, tart, crisp, and wonderfully refreshing.', imageUrl: '/assets/menu/beverages/beverages/2.JPG', splashColor: '#be123c' },
      { name: 'Guava Chilli Popsicle', price: '₹79', calories: '65 cal', description: 'Sweet pink guava with a bold dusting of chilli and lime for an iconic sweet-spicy kick.', imageUrl: '/assets/menu/desserts/frozendesserts/6.jpg', splashColor: '#dc2626' },
      { name: 'Pineapple Popsicle', price: '₹79', calories: '65 cal', description: 'Fresh pineapple juice frozen to icy perfection with natural tropical tang.', imageUrl: '/assets/SmallZussioberry/beverage/Fruit juice.JPG', splashColor: '#eab308' },
    ],
  },
  {
    id: 'kulfiyo',
    name: 'Kulfiyo',
    description: 'Traditional Indian kulfi reimagined with natural ingredients, slow-simmered milk, saffron, and pistachios.',
    items: [
      { name: 'Mawa Malai Kulfi', price: '₹99', calories: '240 cal', description: 'Slow-simmered whole milk, clotted mawa, and cardamom frozen in traditional earthen molds.', imageUrl: '/assets/SmallZussioberry/CreamyKulfi.png', splashColor: '#d97706' },
      { name: 'Kesar Kulfi', price: '₹119', calories: '250 cal', description: 'Pure Kashmiri saffron strands steeped in thickened milk with green cardamom.', imageUrl: '/assets/dessert-add/falooda.png', splashColor: '#f59e0b' },
      { name: 'Pista Kulfi', price: '₹119', calories: '250 cal', description: 'Loaded with toasted chopped pistachios and cardamom in rich caramelised milk.', imageUrl: '/assets/SmallZussioberry/beverage/Falooda.JPG', splashColor: '#16a34a' },
      { name: 'Gulkand Kulfi', price: '₹109', calories: '230 cal', description: 'Artisanal sun-cooked Damask rose petal preserve folded into rich, creamy kulfi.', imageUrl: '/assets/SmallZussioberry/beverage/fruitmilkshake.jpg', splashColor: '#e11d48' },
      { name: 'Mango Kulfi', price: '₹119', calories: '240 cal', description: 'Alphonso mango pulp slow-cooked with thickened milk for an irresistible royal flavor.', imageUrl: '/assets/beverage-add/fruit milkshake.png', splashColor: '#f97316' },
      { name: 'Sitaphal Kulfi', price: '₹129', calories: '260 cal', description: 'Real custard apple pulp churned into creamy kulfi with authentic grainy texture.', imageUrl: '/assets/SmallZussioberry/milkshake.png', splashColor: '#10b981' },
      { name: 'Chickoo Kulfi', price: '₹99', calories: '230 cal', description: 'Naturally caramel-sweet sapota blended into slow-cooked condensed cream.', imageUrl: '/assets/SmallZussioberry/Dryfruit.png', splashColor: '#92400e' },
      { name: 'Jamun Kulfi', price: '₹109', calories: '220 cal', description: 'Tangy-sweet jamun fruit blended into creamy rabdi for a refreshing purple twist.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-7.jpg', splashColor: '#6b21a8' },
    ],
  },
  {
    id: 'natural-icecream',
    name: 'Natural Fruit Ice Cream',
    description: 'Pure, handcrafted ice creams made with fresh seasonal fruits, rich dairy, and zero artificial colors or preservatives.',
    items: [
      { name: 'Alphonso Mango Scoop', price: '₹129', calories: '210 cal', description: 'Crafted with 100% fresh Alphonso mango pulp and pure dairy cream with no artificial essence.', imageUrl: '/assets/SmallZussioberry/Desserts.png', splashColor: '#f59e0b' },
      { name: 'Strawberry Natural', price: '₹119', calories: '190 cal', description: 'Freshly mashed Mahabaleshwar strawberries blended into rich wholesome dairy ice cream.', imageUrl: '/assets/icecream.jpg', splashColor: '#e11d48' },
      { name: 'Lychee Natural', price: '₹129', calories: '195 cal', description: 'Juicy, fragrant lychee pieces folded into silky churned dairy cream.', imageUrl: '/assets/menu/desserts/frozendesserts/1.avif', splashColor: '#0284c7' },
      { name: 'Jamun Natural', price: '₹129', calories: '185 cal', description: 'Deep purple natural ice cream made from fresh seasonal jamuns with authentic taste.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-7.jpg', splashColor: '#701a75' },
      { name: 'Tender Coconut Ice Cream', price: '₹139', calories: '220 cal', description: 'Fresh malai of tender green coconuts blended into a smooth, heavenly tropical scoop.', imageUrl: '/assets/menu/desserts/frozendesserts/4.jpg', splashColor: '#059669' },
      { name: 'Jackfruit Natural', price: '₹129', calories: '200 cal', description: 'Sweet, honey-fragrant ripe jackfruit pulp transformed into a unique exotic scoop.', imageUrl: '/assets/menu/desserts/frozendesserts/2.jpg', splashColor: '#d97706' },
      { name: 'Guava Chilli Ice Cream', price: '₹119', calories: '190 cal', description: 'Creamy pink guava ice cream finished with a dash of red chilli and sea salt.', imageUrl: '/assets/menu/desserts/frozendesserts/6.jpg', splashColor: '#dc2626' },
      { name: 'Sitaphal Custard Apple', price: '₹139', calories: '230 cal', description: 'Luscious custard apple chunks in pure cream capturing the true taste of sitaphal season.', imageUrl: '/assets/menu/desserts/frozendesserts/5.webp', splashColor: '#10b981' },
      { name: 'Chickoo Natural', price: '₹119', calories: '205 cal', description: 'Naturally malty and sweet ripe chikoo churned into a soothing, creamy indulgence.', imageUrl: '/assets/SmallZussioberry/Dryfruit.png', splashColor: '#78350f' },
    ],
  },
];

const ITEMS_PER_PAGE = 6;

export default function FrozenTreatsPage() {
  const [activeCategory, setActiveCategory] = useState('frozen-treats');
  const [currentPage, setCurrentPage] = useState(1);
  const [blinkingItem, setBlinkingItem] = useState(null);
  const [blinkingCategory, setBlinkingCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle dish card or word click
  const handleCardClick = (item) => {
    setBlinkingItem(item.name);

    if (item.targetCategoryId) {
      // Category item clicked (e.g. Gelato, Popsicles, Kulfiyo)
      // Play blink animation for 450ms then switch category
      setTimeout(() => {
        setActiveCategory(item.targetCategoryId);
        setCurrentPage(1);
        setBlinkingItem(null);
        setBlinkingCategory(item.targetCategoryId);

        // Smooth scroll to grid
        setTimeout(() => {
          document.getElementById('menu-items-grid')?.scrollIntoView({ behavior: 'smooth' });
        }, 60);

        // Remove category pill blink after 1.2s
        setTimeout(() => {
          setBlinkingCategory(null);
        }, 1200);
      }, 450);
    } else {
      // Individual dessert item clicked
      setTimeout(() => {
        setBlinkingItem(null);
      }, 550);
    }
  };

  // Category pill button click
  const handleSelectCategory = (categoryId) => {
    setBlinkingCategory(categoryId);
    setActiveCategory(categoryId);
    setCurrentPage(1);
    setSearchQuery('');
    setTimeout(() => {
      document.getElementById('menu-items-grid')?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
    setTimeout(() => {
      setBlinkingCategory(null);
    }, 1000);
  };

  // Reset to page 1 whenever active category or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // Active Category Details
  const currentCategory = useMemo(() => {
    return menuCategories.find(c => c.id === activeCategory) || menuCategories[0];
  }, [activeCategory]);

  // Filter items based on search query
  const displayedItems = useMemo(() => {
    let items = currentCategory.items;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const allItems = menuCategories.flatMap(c => c.items);
      const uniqueItems = Array.from(new Map(allItems.map(it => [it.name, it])).values());
      return uniqueItems.filter(
        it => it.name.toLowerCase().includes(q) || it.description.toLowerCase().includes(q)
      );
    }
    return items;
  }, [currentCategory, searchQuery]);

  // Total pages
  const totalPages = Math.ceil(displayedItems.length / ITEMS_PER_PAGE);

  // Paginated 6 items per page (2 columns x 3 rows layout)
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return displayedItems.slice(start, start + ITEMS_PER_PAGE);
  }, [displayedItems, currentPage]);

  return (
    <>
      {/* ---------------------------------------------------------------------- */}
      {/* 1. HERO SECTION                                                        */}
      {/* ---------------------------------------------------------------------- */}
      <section
        className="relative bg-cover bg-center text-white min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/careerBanner.png')",
        }}
      >
        {/* Top torn edge */}
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

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-[heading-1] mb-4 text-center">
            Taste the Full Spectrum of Zussioberry
          </h2>
          <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed font-[para] max-w-xl mx-auto text-center">
            We don't just craft desserts—we create pure frozen joy with artisanal passion and fresh ingredients.
          </p>
        </div>

        {/* Bottom torn edge */}
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
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* 2. FROZEN TREATS HEADING & CATEGORY PILLS                              */}
      {/* ---------------------------------------------------------------------- */}
      <div
        className="relative pt-10 sm:pt-14 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF5EA 18%, #F5EEDA 42%, #EEF6EB 76%, #FFFFFF 100%)',
        }}
      >
        {/* Ambient atmospheric glows bridging wood (warm amber) & garden (soft mint) */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Top-left warm amber glow evoking the rustic wood hero banner & savory warmth */}
          <div className="absolute -top-12 -left-12 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#f6dfb2]/45 blur-3xl pointer-events-none" />
          {/* Bottom-right soft pistachio glow echoing the fresh mint green menu section below */}
          <div className="absolute -bottom-12 -right-12 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#bcebbd]/55 blur-3xl pointer-events-none" />
          {/* Subtle floating organic leaf accents on borders */}
          <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 sm:w-8 opacity-40 rotate-[22deg] pointer-events-none select-none hidden lg:block">
            <Image
              src="/assets/home/raw-menu/floating-leaf.png"
              alt="decorative leaf"
              width={31}
              height={49}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 sm:w-8 opacity-40 rotate-[-35deg] pointer-events-none select-none hidden lg:block">
            <Image
              src="/assets/home/raw-menu/floating-leaf.png"
              alt="decorative leaf"
              width={31}
              height={49}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Attractive Culinary Sub-Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-amber-600/20 text-amber-900 text-xs sm:text-sm font-semibold mb-3 shadow-xs backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-[#23aa5d] animate-pulse"></span>
            <span style={{ fontFamily: "'Patrick Hand', cursive" }} className="tracking-wide text-sm sm:text-base">
              Artisan Crafted • 100% Fresh Ingredients
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-[#1b8344] mb-2 tracking-tight drop-shadow-xs">
            Frozen Treats
          </h2>

          {/* Harmonious Dual-Tone Decorative Divider (Amber-to-Green) */}
          <div className="w-24 sm:w-28 h-1 bg-gradient-to-r from-amber-400 via-[#23aa5d] to-emerald-600 mx-auto rounded-full mb-3 shadow-xs"></div>

          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto mb-7 sm:mb-8 font-[para] leading-relaxed">
            Indulge in our decadent Italian gelatos, fruity real-juice popsicles, royal creamy kulfis, and natural fruit ice creams.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-2">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleSelectCategory(category.id)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer text-xs sm:text-sm md:text-[15px] font-semibold transition-all duration-200 ${
                  activeCategory === category.id && !searchQuery
                    ? 'bg-gradient-to-r from-[#00e676] via-[#10b981] to-[#059669] text-white shadow-lg shadow-emerald-500/35 transform scale-105 ring-2 ring-[#00e676]'
                    : 'bg-white/90 text-stone-700 hover:text-[#059669] hover:bg-white border border-stone-200/90 hover:border-[#00e676]/60 shadow-xs hover:shadow-sm'
                } ${
                  blinkingCategory === category.id
                    ? 'animate-lime-button-blink ring-4 ring-[#00e676] shadow-[0_0_30px_rgba(0,230,118,1),0_0_55px_rgba(16,185,129,0.9)]'
                    : ''
                }`}
              >
                <span className={blinkingCategory === category.id ? 'animate-lime-word-blink font-bold' : ''}>
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* 3. MENU SECTION IN bg-[#abe9b0]                                        */}
      {/* ---------------------------------------------------------------------- */}
      <section className="relative w-full bg-[#abe9b0] pt-12 pb-24 md:pt-16 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Top Torn Cutout Edge */}
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

        {/* Corner Decorations */}
        <div className="absolute top-2 -left-6 sm:top-4 sm:-left-8 md:top-6 md:-left-10 w-[110px] sm:w-[150px] md:w-[190px] z-10 pointer-events-none select-none mix-blend-multiply opacity-95">
          <Image
            src="/assets/decorations/kiwi-corner.png"
            alt="Kiwi Slice"
            width={220}
            height={220}
            className="w-full h-auto object-contain drop-shadow-sm rotate-[-15deg]"
            priority
          />
        </div>

        <div className="absolute bottom-4 -left-4 sm:bottom-6 sm:-left-6 md:bottom-8 md:-left-8 w-[95px] sm:w-[125px] md:w-[155px] z-10 pointer-events-none select-none mix-blend-multiply opacity-95">
          <Image
            src="/assets/decorations/raspberry-corner.png"
            alt="Fresh Raspberry"
            width={180}
            height={180}
            className="w-full h-auto object-contain drop-shadow-sm rotate-[12deg]"
            priority
          />
        </div>

        {/* Floating Organic Leaves */}
        <div className="absolute top-24 right-6 md:right-16 w-8 md:w-10 opacity-70 rotate-[45deg] pointer-events-none select-none">
          <Image
            src="/assets/home/raw-menu/floating-leaf.png"
            alt="Floating leaf"
            width={31}
            height={49}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="absolute bottom-32 right-8 md:right-24 w-7 md:w-9 opacity-60 rotate-[-50deg] pointer-events-none select-none">
          <Image
            src="/assets/home/raw-menu/floating-leaf.png"
            alt="Floating leaf"
            width={31}
            height={49}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="absolute top-1/2 left-4 md:left-12 w-6 md:w-8 opacity-50 rotate-[30deg] pointer-events-none select-none">
          <Image
            src="/assets/home/raw-menu/floating-leaf.png"
            alt="Floating leaf"
            width={31}
            height={49}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Main Content Container */}
        <div className="max-w-[1180px] mx-auto relative z-20">
          {/* Quick Search Bar */}
          <div className="mb-6 sm:mb-8 max-w-md mx-auto relative px-2">
            <input
              type="text"
              placeholder="Search treat name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/90 hover:bg-white focus:bg-white text-gray-800 placeholder-gray-500 rounded-full py-2.5 pl-11 pr-4 text-sm font-medium shadow-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-white"
            />
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-700 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sub-Category Breadcrumb & Back Button */}
          {activeCategory !== 'frozen-treats' && !searchQuery && (
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/25 px-2">
              <div>
                <h3
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                  className="text-white text-2xl sm:text-3xl font-bold tracking-wide flex items-center gap-2 drop-shadow-sm"
                >
                  <span>{currentCategory.name}</span>
                  <span className="text-sm font-normal text-white/80">({displayedItems.length} items)</span>
                </h3>
                <p
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                  className="text-white/85 text-xs sm:text-sm mt-0.5"
                >
                  {currentCategory.description}
                </p>
              </div>
              <button
                onClick={() => handleSelectCategory('frozen-treats')}
                className="shrink-0 px-4 py-1.5 bg-white/20 hover:bg-white text-white hover:text-[#23aa5d] rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-sm backdrop-blur-sm active:scale-95 border border-white/30"
              >
                ← All Categories
              </button>
            </div>
          )}

          {/* 2-COLUMN MENU GRID */}
          <div id="menu-items-grid" className="scroll-mt-24">
            {paginatedItems.length > 0 ? (
              <div
                key={`${activeCategory}-${currentPage}`}
                className="animate-grid-blink grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-10 lg:gap-y-12 max-w-[1140px] mx-auto"
              >
                {paginatedItems.map((item, index) => {
                  const isBlinking = blinkingItem === item.name;
                  return (
                    <div
                      key={`${item.name}-${index}`}
                      onClick={() => handleCardClick(item)}
                      className={`flex items-center group transition-all duration-300 cursor-pointer p-2.5 sm:p-3.5 -m-2.5 sm:-m-3.5 rounded-2xl ${
                        isBlinking
                          ? 'animate-lime-card-blink ring-4 ring-[#00e676] shadow-[0_0_35px_rgba(0,230,118,1),0_0_70px_rgba(16,185,129,0.9)] bg-emerald-500/20 z-30'
                          : 'hover:bg-white/15 hover:translate-x-1 active:scale-98'
                      }`}
                      title={item.targetCategoryId ? `Click to view all ${item.name}` : `Click to view ${item.name}`}
                    >
                      {/* Left: Medium Size Splash Backdrop + Dessert Photo */}
                      <div className="relative shrink-0 w-[130px] h-[130px] sm:w-[145px] sm:h-[145px] md:w-[155px] md:h-[155px] flex items-center justify-center">
                        <div
                          className={`absolute inset-0 flex items-center justify-center pointer-events-none transform transition-all duration-300 ${
                            isBlinking ? 'scale-125 rotate-12' : 'scale-105 group-hover:scale-115 group-hover:rotate-6'
                          }`}
                        >
                          <SplashBackdrop
                            color={isBlinking ? '#00e676' : (item.splashColor || '#ec4899')}
                            variant={index}
                          />
                        </div>

                        {/* Circular Medium Size Dessert Image */}
                        <div
                          className={`relative z-10 w-[108px] h-[108px] sm:w-[122px] sm:h-[122px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden border-2 border-white/95 shadow-md bg-white transition-all duration-300 ${
                            isBlinking ? 'ring-4 ring-[#00e676] shadow-[0_0_35px_rgba(0,230,118,1),0_0_60px_rgba(16,185,129,0.9)] scale-105' : ''
                          }`}
                        >
                          <Image
                            src={item.imageUrl || '/assets/SmallZussioberry/Desserts.png'}
                            alt={item.name}
                            width={160}
                            height={160}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      {/* Right: Content */}
                      <div className="flex-1 ml-4 sm:ml-6 flex flex-col justify-center min-w-0">
                        {/* Header Row: Title ........... Price */}
                        <div className="flex items-baseline w-full">
                          <h4
                            style={{ fontFamily: "'Patrick Hand', cursive" }}
                            className={`text-white text-2xl sm:text-3xl md:text-[28px] font-bold tracking-wide whitespace-nowrap drop-shadow-sm truncate transition-colors duration-200 cursor-pointer ${
                              isBlinking ? 'animate-lime-word-blink text-[#00e676]' : 'group-hover:text-emerald-100'
                            }`}
                          >
                            {item.name}
                          </h4>
                          {/* Dotted connecting line */}
                          <span
                            className={`flex-1 border-b-2 border-dotted mx-2.5 sm:mx-3 relative -top-[5px] transition-colors ${
                              isBlinking ? 'border-[#00e676]' : 'border-white/60'
                            }`}
                          ></span>
                          {/* Price */}
                          <span
                            style={{ fontFamily: "'Patrick Hand', cursive" }}
                            className={`text-xl sm:text-2xl md:text-[24px] font-bold whitespace-nowrap drop-shadow-sm transition-colors ${
                              isBlinking ? 'text-[#a7f3d0]' : 'text-white'
                            }`}
                          >
                            {item.price}
                          </span>
                        </div>

                        {/* Description */}
                        <p
                          style={{ fontFamily: "'Open Sans', sans-serif" }}
                          className="text-white/90 text-sm sm:text-[14.5px] font-light leading-relaxed mt-1 line-clamp-2"
                        >
                          {item.description}
                        </p>

                        {/* Calorie Info / Extra Details */}
                        <div className="flex items-center justify-between mt-2">
                          <span
                            style={{ fontFamily: "'Patrick Hand', cursive" }}
                            className="text-white text-sm sm:text-base font-semibold tracking-wider drop-shadow-sm"
                          >
                            {item.calories}
                          </span>
                          {item.targetCategoryId ? (
                            <span
                              style={{ fontFamily: "'Patrick Hand', cursive" }}
                              className={`text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded-full transition-all ${
                                isBlinking
                                  ? 'bg-[#00e676] text-emerald-950 font-extrabold shadow-[0_0_20px_rgba(0,230,118,0.95)] scale-105'
                                  : 'text-white/90 bg-white/20 group-hover:bg-[#00e676] group-hover:text-emerald-950'
                              }`}
                            >
                              Explore {item.name} →
                            </span>
                          ) : (
                            <span
                              style={{ fontFamily: "'Patrick Hand', cursive" }}
                              className="text-xs font-semibold text-white/70 group-hover:text-white transition-all"
                            >
                              Handcrafted Frozen
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <p
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                  className="text-2xl text-white font-bold"
                >
                  No treats found matching "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 px-5 py-2 bg-white text-[#23aa5d] rounded-full font-semibold text-sm cursor-pointer shadow-md hover:bg-gray-100"
                >
                  View Full Category
                </button>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 sm:gap-3 mt-12 sm:mt-16">
                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.max(1, prev - 1));
                    document.getElementById('menu-items-grid')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  disabled={currentPage === 1}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-sm bg-white/25 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white hover:text-[#23aa5d] transition-all cursor-pointer shadow-sm border border-white/30"
                  aria-label="Previous Page"
                >
                  ‹
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      document.getElementById('menu-items-grid')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all cursor-pointer ${
                      currentPage === page
                        ? 'bg-white text-[#23aa5d] shadow-lg scale-110'
                        : 'bg-white/25 text-white hover:bg-white/40 border border-white/30 backdrop-blur-sm'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                    document.getElementById('menu-items-grid')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-sm bg-white/25 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white hover:text-[#23aa5d] transition-all cursor-pointer shadow-sm border border-white/30"
                  aria-label="Next Page"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Torn Paper Cutout Edge */}
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
      </section>
    </>
  );
}