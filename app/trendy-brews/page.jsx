'use client';
import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

// Reusable SVG Splash Backdrop Component with satellite droplets (Reference Design)
const SplashBackdrop = ({ color = '#0284c7', variant = 0 }) => {
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
    id: 'trendy-brews',
    name: 'Trendy Brews',
    description: 'A curated collection of modern beverages including frappes, iced teas, artisan coffees, and bubble teas crafted for today\'s taste.',
    items: [
      {
        name: 'Frappe',
        targetCategoryId: 'frappe',
        price: 'From ₹139',
        calories: '310 | 450 cal',
        description: 'Cold, blended beverages made with premium coffee, ice cream, rich cocoa, and crunchy toppings.',
        imageUrl: '/assets/beverage-add/frappe.png',
        splashColor: '#b45309',
      },
      {
        name: 'Iced Tea',
        targetCategoryId: 'iced-tea',
        price: 'From ₹99',
        calories: '60 | 95 cal',
        description: 'Refreshing chilled artisan teas infused with fresh fruit notes, hibiscus flowers, and aromatic herbs.',
        imageUrl: '/assets/SmallZussioberry/beverage/beverage-1.jpg',
        splashColor: '#f97316',
      },
      {
        name: 'Iced Coffee',
        targetCategoryId: 'iced-coffee',
        price: 'From ₹129',
        calories: '140 | 260 cal',
        description: 'Bold artisanal espresso brewed fresh and poured over crystal clear ice with silky milk and caramel.',
        imageUrl: '/assets/blogs/CS2.jpg',
        splashColor: '#78350f',
      },
      {
        name: 'Bubble Tea with Fruit Popper',
        targetCategoryId: 'bubble-tea-fruit-popper',
        price: 'From ₹149',
        calories: '180 | 280 cal',
        description: 'Fun, refreshing milk and tea brews loaded with juicy popping boba pearls that burst with tropical flavor.',
        imageUrl: '/assets/SmallZussioberry/beverage/Boba drink.jpg',
        splashColor: '#db2777',
      },
      {
        name: 'Milk Bubble Brew',
        targetCategoryId: 'milk-bubble-brew',
        price: 'From ₹159',
        calories: '220 | 340 cal',
        description: 'Creamy, velvety milk tea shaken with slow-cooked brown sugar chewy tapioca pearls.',
        imageUrl: '/assets/SmallZussioberry/beverage/Frappe.JPG',
        splashColor: '#7c3aed',
      },
      {
        name: 'Matcha Bubble Brew',
        targetCategoryId: 'matcha-bubble-brew',
        price: 'From ₹169',
        calories: '190 | 290 cal',
        description: 'Ceremonial grade Japanese Uji matcha whisked with fresh milk and served over chewy pearls.',
        imageUrl: '/assets/SmallZussioberry/beverage/beverage-2.jpg',
        splashColor: '#15803d',
      },
    ],
  },
  {
    id: 'frappe',
    name: 'Frappe',
    description: 'Cold, blended beverages made with premium coffee, ice cream, rich cocoa, and crunchy toppings.',
    items: [
      { name: 'Chocolate Crunch', price: '₹149', calories: '380 cal', description: 'Rich chocolate ice cream with crunchy chocolate chips, whipped cream, and choco-bits.', imageUrl: '/assets/blogs/CS2.jpg', splashColor: '#451a03' },
      { name: 'Cocaocruise', price: '₹159', calories: '360 cal', description: 'Bold fusion of rich Dutch cocoa and smooth aromatic espresso, drizzled with fudge.', imageUrl: '/assets/blogs/ClassicF.JPG', splashColor: '#581c87' },
      { name: 'Dark Desire', price: '₹169', calories: '420 cal', description: 'Chocoholic fantasy! Chocolate shake crowned with a rich chocolate ice cream scoop and stick.', imageUrl: '/assets/beverage-add/frappe.png', splashColor: '#3b0764' },
      { name: 'Nutella Frappe', price: '₹179', calories: '410 cal', description: 'Loaded with rich hazelnut Nutella, velvety milk, and decadent chocolate drizzle.', imageUrl: '/assets/SmallZussioberry/beverage/Frappe.JPG', splashColor: '#713f12' },
      { name: 'KitKat Frappe', price: '₹169', calories: '390 cal', description: 'Blended with crisp KitKat bars, sweet ice cream, and crunchy wafer pieces.', imageUrl: '/assets/SmallZussioberry/beverage/newFrappe.jpg', splashColor: '#dc2626' },
      { name: 'Lotus Biscoff Frappe', price: '₹189', calories: '440 cal', description: 'Caramelized speculoos cookie butter blended with rich cream and topped with Biscoff crumbs.', imageUrl: '/assets/SmallZussioberry/Dryfruit.png', splashColor: '#ea580c' },
      { name: 'Oreo Cookie Frappe', price: '₹159', calories: '380 cal', description: 'Creamy vanilla ice cream blended with chunky Oreo cookies, whipped cream, and chocolate sauce.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-4.jpg', splashColor: '#1e293b' },
    ],
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    description: 'Refreshing chilled artisan teas infused with fresh fruit notes, hibiscus flowers, and aromatic herbs.',
    items: [
      { name: 'Peach Iced Tea', price: '₹99', calories: '85 cal', description: 'Juicy sun-ripened peaches infused into slowly brewed black tea served over crystal ice.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-1.jpg', splashColor: '#f97316' },
      { name: 'Passion Fruit Iced Tea', price: '₹109', calories: '90 cal', description: 'Tropical passion fruit pulp shaken with chilled green tea and mint leaves.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-7.jpg', splashColor: '#eab308' },
      { name: 'Hibiscus Apple Iced Tea', price: '₹119', calories: '80 cal', description: 'Ruby-red organic hibiscus tea blended with crisp sweet red apple nectar.', imageUrl: '/assets/menu/beverages/beverages/5.jpg', splashColor: '#be123c' },
      { name: 'Lemon Mint Iced Tea', price: '₹89', calories: '65 cal', description: 'Classic refreshing black tea with freshly squeezed lemon juice and aromatic garden mint.', imageUrl: '/assets/dessert-add/Mojito.png', splashColor: '#65a30d' },
    ],
  },
  {
    id: 'iced-coffee',
    name: 'Iced Coffee',
    description: 'Bold artisanal espresso brewed fresh and poured over crystal clear ice with silky milk and caramel.',
    items: [
      { name: 'Biscoff Latte', price: '₹159', calories: '290 cal', description: 'Bold espresso shot combined with Lotus Biscoff cookie spread and chilled milk.', imageUrl: '/assets/blogs/ClassicF.JPG', splashColor: '#c2410c' },
      { name: 'Melted Ice Cream Latte', price: '₹149', calories: '280 cal', description: 'Hot espresso poured over rich artisanal vanilla bean ice cream and chilled milk.', imageUrl: '/assets/blogs/CS2.jpg', splashColor: '#d97706' },
      { name: 'Tiramisu Shakerato', price: '₹169', calories: '310 cal', description: 'Espresso shaken with mascarpone cream, dark cocoa dust, and golden caramel syrup.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-8.jpg', splashColor: '#78350f' },
      { name: 'Banana Caramel Latte', price: '₹149', calories: '260 cal', description: 'Double espresso with natural banana purée and slow-cooked golden caramel drizzle.', imageUrl: '/assets/SmallZussioberry/beverage/Fruit milkshake.JPG', splashColor: '#ca8a04' },
      { name: 'Coffee on the Rock', price: '₹129', calories: '40 cal', description: 'Robust espresso poured over house-made frozen coffee cubes for zero dilution.', imageUrl: '/assets/SmallZussioberry/beverage/DRYFRUITMILKSHAKE.jpg', splashColor: '#451a03' },
      { name: 'Iced Classic Latte', price: '₹129', calories: '130 cal', description: 'Double shot of Arabica espresso paired with velvety chilled whole milk over ice.', imageUrl: '/assets/blogs/CS2.jpg', splashColor: '#854d0e' },
    ],
  },
  {
    id: 'bubble-tea-fruit-popper',
    name: 'Bubble Tea with Fruit Popper',
    description: 'Fun, refreshing milk and tea brews loaded with juicy popping boba pearls that burst with tropical flavor.',
    items: [
      { name: 'Mango Splash', price: '₹149', calories: '190 cal', description: 'Sunny tropical mango milk tea loaded with mango popping boba that burst in every sip.', imageUrl: '/assets/SmallZussioberry/beverage/Boba drink.jpg', splashColor: '#f59e0b' },
      { name: 'Peach Licious', price: '₹149', calories: '180 cal', description: 'Luscious peach infused green tea with popping fruit pearls and a hint of jasmine.', imageUrl: '/assets/SmallZussioberry/Explore1.png', splashColor: '#fb923c' },
      { name: 'Berry Blast', price: '₹159', calories: '210 cal', description: 'Juicy berries blended into smooth chilled milk tea with blueberry popping pearls.', imageUrl: '/assets/SmallZussioberry/Explore2.png', splashColor: '#be185d' },
      { name: 'Pink Lagoon', price: '₹159', calories: '195 cal', description: 'Exotic dragonfruit and lychee milk tea with signature pink tint and strawberry popping boba.', imageUrl: '/assets/SmallZussioberry/beverage/fruitmilkshake.jpg', splashColor: '#ec4899' },
    ],
  },
  {
    id: 'milk-bubble-brew',
    name: 'Milk Bubble Brew',
    description: 'Creamy, velvety milk tea shaken with slow-cooked brown sugar chewy tapioca pearls.',
    items: [
      { name: 'Taro Milk Tea', price: '₹159', calories: '240 cal', description: 'Fragrant purple taro root, smooth whole milk, and warm chewy brown sugar tapioca pearls.', imageUrl: '/assets/SmallZussioberry/beverage/Boba drink.jpg', splashColor: '#9333ea' },
      { name: 'Classic Boba Milk Tea', price: '₹149', calories: '230 cal', description: 'Assam black tea brewed strong, condensed milk, and honey-infused brown sugar boba.', imageUrl: '/assets/SmallZussioberry/beverage/Frappe.JPG', splashColor: '#b45309' },
      { name: 'Mocha Latte Blast', price: '₹169', calories: '280 cal', description: 'Rich chocolate mocha, smooth espresso, whole milk, and slow-cooked tapioca pearls.', imageUrl: '/assets/blogs/CS2.jpg', splashColor: '#3e1a06' },
      { name: 'Exotic Blueberry Boba', price: '₹159', calories: '220 cal', description: 'Wild blueberry milk tea paired with chewy tapioca for a vibrant, fruity indulgence.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-3.jpg', splashColor: '#6366f1' },
      { name: 'Midnight Dream', price: '₹169', calories: '250 cal', description: 'Enchanting black tea, Madagascar vanilla, dark blackberry notes, and chewy boba pearls.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-7.jpg', splashColor: '#431407' },
    ],
  },
  {
    id: 'matcha-bubble-brew',
    name: 'Matcha Bubble Brew',
    description: 'Ceremonial grade Japanese Uji matcha whisked with fresh milk and served over chewy pearls.',
    items: [
      { name: 'Strawberry Matcha', price: '₹179', calories: '240 cal', description: 'Layered iced drink with real strawberry compote, chilled milk, and whisked Japanese matcha.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-2.jpg', splashColor: '#16a34a' },
      { name: 'Iced Matcha Latte', price: '₹169', calories: '210 cal', description: 'Ceremonial grade stone-ground green tea whisked with creamy milk and chewy tapioca pearls.', imageUrl: '/assets/SmallZussioberry/Smoothie.png', splashColor: '#15803d' },
    ],
  },
];

const ITEMS_PER_PAGE = 6;

export default function TrendyBrewsPage() {
  const [activeCategory, setActiveCategory] = useState('trendy-brews');
  const [currentPage, setCurrentPage] = useState(1);
  const [blinkingItem, setBlinkingItem] = useState(null);
  const [blinkingCategory, setBlinkingCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle dish card or word click
  const handleCardClick = (item) => {
    setBlinkingItem(item.name);

    if (item.targetCategoryId) {
      // Category item clicked (e.g. Frappe, Iced Tea, Bubble Tea)
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
      // Individual beverage item clicked
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
            We don't just brew drinks—we innovate flavors to create modern beverage sensations.
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
      {/* 2. TRENDY BREWS HEADING & CATEGORY PILLS                               */}
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
            Trendy Brews
          </h2>

          {/* Harmonious Dual-Tone Decorative Divider (Amber-to-Green) */}
          <div className="w-24 sm:w-28 h-1 bg-gradient-to-r from-amber-400 via-[#23aa5d] to-emerald-600 mx-auto rounded-full mb-3 shadow-xs"></div>

          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto mb-7 sm:mb-8 font-[para] leading-relaxed">
            Experience decadent ice frappes, cold brewed lattes, refreshing iced teas, and authentic boba brews.
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
              placeholder="Search brew name or description..."
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
          {activeCategory !== 'trendy-brews' && !searchQuery && (
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
                onClick={() => handleSelectCategory('trendy-brews')}
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
                      {/* Left: Medium Size Splash Backdrop + Brew Photo */}
                      <div className="relative shrink-0 w-[130px] h-[130px] sm:w-[145px] sm:h-[145px] md:w-[155px] md:h-[155px] flex items-center justify-center">
                        <div
                          className={`absolute inset-0 flex items-center justify-center pointer-events-none transform transition-all duration-300 ${
                            isBlinking ? 'scale-125 rotate-12' : 'scale-105 group-hover:scale-115 group-hover:rotate-6'
                          }`}
                        >
                          <SplashBackdrop
                            color={isBlinking ? '#00e676' : (item.splashColor || '#0284c7')}
                            variant={index}
                          />
                        </div>

                        {/* Circular Medium Size Brew Image */}
                        <div
                          className={`relative z-10 w-[108px] h-[108px] sm:w-[122px] sm:h-[122px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden border-2 border-white/95 shadow-md bg-white transition-all duration-300 ${
                            isBlinking ? 'ring-4 ring-[#00e676] shadow-[0_0_35px_rgba(0,230,118,1),0_0_60px_rgba(16,185,129,0.9)] scale-105' : ''
                          }`}
                        >
                          <Image
                            src={item.imageUrl || '/assets/beverage-add/frappe.png'}
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
                              Artisan Brewed
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
                  No brews found matching "{searchQuery}"
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