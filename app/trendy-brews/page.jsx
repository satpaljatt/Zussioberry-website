
"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";

const TrendyBrews = () => {
  // Trendy Brews data with descriptions and images
  const trendyBrewsData = [
    {
      title: "Trendy Brews",
      description: "A curated collection of modern beverages including frappes, iced teas, coffees, and bubble teas crafted for today's taste.",
      imageUrl: "/assets/menu/trendy-brews/1.jpg",
    },
    {
      title: "Frappe",
      description: "Cold, blended beverages made with premium ingredients, ice, and creamy textures for frothy, refreshing experiences.",
      imageUrl: "/assets/menu/trendy-brews/2.jpg",
    },
    {
      title: "Iced Tea",
      description: "Refreshing chilled teas brewed to perfection and infused with fruits and herbs for light, thirst-quenching drinks.",
      imageUrl: "/assets/menu/trendy-brews/3.jpg",
    },
    {
      title: "Iced Coffee",
      description: "Cold coffee-based beverages brewed hot then cooled over ice, sweetened and enhanced with milk, cream, or flavored syrups.",
      imageUrl: "/assets/menu/trendy-brews/4.jpg",
    },
    {
      title: "Bubble Tea",
      description: "Fun and refreshing beverages combining tea or milk bases with chewy tapioca pearls and fruity popping boba.",
      imageUrl: "/assets/menu/trendy-brews/5.jpg",
    },
    {
      title: "Matcha & Special Brews",
      description: "Premium Japanese matcha blends and specialty milk teas with unique flavors and textured additions.",
      imageUrl: "/assets/menu/trendy-brews/6.jpg",
    }
  ];

  // Menu categories data with proper descriptions
  const menuCategories = [
    {
      id: 'trendy-brews',
      name: 'Trendy Brews',
      description: 'A curated collection of modern beverages including frappes, iced teas, coffees, and bubble teas crafted for today\'s taste.',
      imageUrl: "/assets/menu/trendy-brews/1.jpg",
      items: [
        { 
          name: 'Frappe', 
          description: 'Cold, blended beverages made with premium ingredients, ice, and creamy textures for frothy, refreshing experiences.',
          imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
        },
        { 
          name: 'Iced Tea', 
          description: 'Refreshing chilled teas brewed to perfection and infused with fruits and herbs for light, thirst-quenching drinks.',
          imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
        },
        { 
          name: 'Iced Coffee', 
          description: 'Cold coffee-based beverages brewed hot then cooled over ice, sweetened and enhanced with milk, cream, or flavored syrups.',
          imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
        },
        { 
          name: 'Bubble Tea with Fruit Popper', 
          description: 'Fun and refreshing beverages combining tea or milk bases with chewy tapioca pearls and fruity popping boba.',
          imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
        },
        { 
          name: 'Milk Bubble Brew with Tapioca Pearls', 
          description: 'Creamy, chilled beverages blending milk with flavors and adding chewy tapioca pearls for delightful texture.',
          imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
        },
        { 
          name: 'Matcha Bubble Brew with Tapioca Pearls', 
          description: 'Premium Japanese matcha blends and specialty milk teas with unique flavors and textured additions.',
          imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
        }
      ]
    },
    {
      id: 'frappe',
      name: 'Frappe',
      // description: 'Frappe (pronounced frap-pay) is a cold, blended beverage typically made with coffee, milk, ice, and sometimes flavored syrups or ice cream, resulting in a frothy, creamy, and refreshing drink.',
      items: [
        { name: 'Chocolate Crunch', description: 'Indulge in the ultimate chocolate lover\'s dream! This rich and creamy shake blends velvety chocolate ice cream with crunchy chocolate chips and a swirl of chocolate sauce. Topped with whipped cream and crispy choco-bits for perfect crunch in every sip.' },
        { name: 'Cocaocruise', description: 'A bold fusion of rich chocolate and smooth coffee! This thick shake blends premium chocolate ice cream with a shot of aromatic coffee for a deep, indulgent mocha flavor. Velvety, energizing, and topped with chocolate drizzle.' },
        { name: 'Dark Desire', description: 'A chocoholic\'s fantasy come true! This creamy chocolate milkshake is blended with luscious chocolate ice cream and crowned with a decadent scoop of more chocolate ice cream — topped off with a full chocolate ice cream stick for extra wow.' },
        { name: 'Nutella', description: 'Smooth, creamy, and irresistibly nutty! This indulgent milkshake is loaded with rich Nutella, blended to perfection with chilled milk and ice cream. Topped with whipped cream and a drizzle of hazelnut-chocolate goodness.' },
        { name: 'KitKat', description: 'Take a break with this crunchy, creamy delight! Blended with real KitKat bars and rich ice cream, this milkshake offers perfect balance of chocolatey goodness and crispy wafer crunch. Topped with whipped cream and KitKat chunks.' },
        { name: 'Lotus Biscoff', description: 'A caramelized dream in a glass! This luxuriously smooth milkshake blends creamy ice cream with irresistible flavor of Lotus Biscoff cookies. Topped with whipped cream, Biscoff crumbs, and cookie butter drizzle.' },
        { name: 'Oreo Cookie', description: 'The classic cookie turned into a creamy, dreamy delight! This milkshake blends rich vanilla ice cream with crunchy Oreo cookies for perfect mix of smooth and chunky. Topped with whipped cream, Oreo crumbles, and chocolate drizzle.' }
      ]
    },
    {
      id: 'iced-tea',
      name: 'Iced Tea',
      // description: 'Iced Tea is a cold, refreshing beverage made by brewing tea leaves or tea bags and then chilling the tea over ice. Often flavored with fruits, herbs, or sweeteners.',
      items: [
        { name: 'Peach Iced Tea', description: 'A juicy twist on a classic iced tea with the sweet, sun-ripened flavor of peaches, brewed to perfection and served over ice for refreshing taste.' },
        { name: 'Passion Fruit Iced Tea', description: 'Bursting with exotic flavor! This vibrant iced tea is infused with the tangy-sweet taste of ripe passion fruit, served chilled over ice for tropical refreshment.' },
        { name: 'Hibiscus Apple Iced Tea', description: 'A beautifully balanced brew with a twist! This refreshing iced tea blends tangy hibiscus petals with the crisp sweetness of red apples for perfect harmony.' }
      ]
    },
    {
      id: 'iced-coffee',
      name: 'Iced Coffee',
      // description: 'Iced Coffee is a cold, refreshing coffee-based beverage made by brewing hot coffee and then cooling it down by serving it over ice. Often sweetened and enhanced with milk, cream, or flavored syrups.',
      items: [
        { name: 'Biscoff Latte', description: 'The irresistible flavor of Lotus Biscoff combined with rich espresso and creamy milk. Topped with crushed Biscoff cookies and a swirl of cookie butter for decadent treat.' },
        { name: 'Melted Ice Cream Latte', description: 'A rich espresso with creamy vanilla ice cream for a smooth, velvety texture and nostalgic dessert-like flavor that melts perfectly together.' },
        { name: 'Tiramisu Shakerato', description: 'A luscious iced latte blends bold espresso with creamy milk, a swirl of caramel, and hints of cocoa and mascarpone flavor. Topped with whipped cream and cocoa dusting.' },
        { name: 'Banana Caramel Latte', description: 'Rich espresso with creamy banana and a swirl of golden caramel for a sweet, tropical twist. Velvety, bold, and lightly fruity with perfect balance.' },
        { name: 'Coffee on the Rock', description: 'Chilled coffee classic features robust espresso poured over crystal-clear coffee ice cubes to maintain flavor integrity as it melts.' },
        { name: 'Iced Latte', description: 'Smooth iced latte combines bold espresso with chilled, creamy milk, served over ice for a perfectly balanced and refreshing coffee experience.' }
      ]
    },
    {
      id: 'bubble-tea-fruit-popper',
      name: 'Bubble Tea with Fruit Popper',
      // description: 'Bubble Tea with Fruit Popper is a fun and refreshing beverage made from tea or flavored milk base combined with chewy tapioca pearls or fruity popping boba.',
      items: [
        { name: 'Mango Splash', description: 'This sunny and refreshing bubble tea blends ripe, juicy mango with creamy tea and is loaded with fruity popping boba that explode with tropical flavor.' },
        { name: 'Peach Licious', description: 'This refreshing bubble tea combines the luscious flavor of ripe peaches with smooth milk tea, topped with playful fruit poppers for delightful texture.' },
        { name: 'Berry Blast', description: 'This refreshing bubble tea blends a medley of juicy berries with smooth milk tea, enhanced by the fun pop of fruity boba. Refreshing and tangy.' },
        { name: 'Pink Lagoon', description: 'This beautifully blended bubble tea features a sweet mix of tropical fruits and creamy goodness with a signature pink hue and popping boba.' }
      ]
    },
    {
      id: 'milk-bubble-brew',
      name: 'Milk Bubble Brew with Tapioca Pearls',
      // description: 'Milk Bubble Brew with Tapioca Pearls is a creamy, chilled beverage made by blending milk with flavors and adding chewy tapioca pearls for delightful texture.',
      items: [
        { name: 'Taro Milk Tea', description: 'Made from fragrant taro root, this purple-hued milk tea offers a subtly sweet, nutty flavor that\'s both comforting and uniquely delicious.' },
        { name: 'Classic Boba Tea', description: 'This refreshing milk tea is brewed to perfection and blended with creamy milk, then poured over chewy, golden tapioca pearls for classic boba experience.' },
        { name: 'Mocha Latte Blast', description: 'Rich mocha latte combined with creamy milk and chewy tapioca pearls for a chocolate-coffee treat with delightful texture contrast.' },
        { name: 'Exotic Blueberry', description: 'This vibrant drink blends juicy blueberry flavors with creamy milk tea, finished off with chewy tapioca pearls for a fun, fruity experience.' },
        { name: 'Midnight Dream', description: 'An enchanting blend of velvety black tea, rich vanilla, and a hint of floral or dark berry essence paired with chewy tapioca pearls.' }
      ]
    },
    {
      id: 'matcha-bubble-brew',
      name: 'Matcha Bubble Brew with Tapioca Pearls',
      // description: 'Matcha Bubble Brew with Tapioca Pearls is a refreshing, creamy beverage made by blending Japanese matcha green tea powder with milk and chewy tapioca pearls.',
      items: [
        { name: 'Strawberry Matcha', description: 'A vibrant drink combines sweet strawberry and smooth matcha for a beautifully balanced flavor profile with chewy tapioca pearls.' },
        { name: 'Iced Matcha Latte', description: 'This refreshing latte blends premium Japanese matcha with chilled milk over ice for a smooth, earthy flavor and vibrant green glow, enhanced with tapioca pearls.' }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('trendy-brews');

  // Component for a single brew item
  const BrewItem = ({ title, description, imageUrl }) => (
    <div className="flex items-start gap-4 sm:gap-6 p-4 md:p-6 border-b border-gray-100 last:border-b-0 lg:border-none">
      {/* Image Container */}
      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shadow-lg border border-gray-100">
        <Image
          src={imageUrl}
          alt={title}
          width={112}
          height={112}
          className="object-cover w-full h-full transform transition duration-300 hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="flex-grow pt-1">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 leading-snug">
          {title}
        </h3>
        {/* Horizontal divider */}
        <div className="w-full h-0.5 border-1 border-black border-dashed border-green-500 mb-3 sm:mb-4 rounded-full"></div> 
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  // Component for menu items without images
  const MenuItemCard = ({ name, description }) => (
    <div className="flex items-start gap-4 sm:gap-6 p-4 md:p-6 border-b border-gray-100 last:border-b-0 lg:border-none">
      {/* Content Container - Full width without image */}
      <div className="flex-grow pt-1 w-full">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-snug pr-2">
            {name}
          </h3>
        </div>
        {/* Horizontal divider */}
        <div className="w-full h-0.5 border-1 border-black border-dashed border-green-500 mb-3 sm:mb-4 rounded-full"></div> 
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  // Special component for Trendy Brews with images
  const TrendyBrewsCard = ({ name, description, imageUrl }) => (
    <div className="flex items-start gap-4 sm:gap-6 p-4 md:p-6 border-b border-gray-100 last:border-b-0 lg:border-none">
      {/* Small Square Image Container */}
      {/* <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shadow-md border border-gray-200">
        <Image
          src={imageUrl}
          alt={name}
          width={96}
          height={96}
          className="object-cover w-full h-full transform transition duration-300 hover:scale-110"
        />
      </div> */}

      {/* Content Container */}
      <div className="flex-grow pt-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-snug pr-2">
            {name}
          </h3>
        </div>
        {/* Horizontal divider */}
        <div className="w-full h-0.5 border-1 border-black border-dashed border-green-500 mb-3 sm:mb-4 rounded-full"></div> 
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/careerBanner.png')",
        }}>
        
        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-[heading-1] mb-4 text-center">
            Trendy Brews & Modern Sips
          </h2>
          <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed font-[para] max-w-xl mx-auto text-center">
            Discover our collection of contemporary beverages crafted with premium ingredients and innovative flavors.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-white min-h-screen overflow-hidden">

        {/* Trendy Brews Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Trendy Brews Heading */}
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-green-600 mb-4">
                Trendy Brews
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8">
                Explore our modern beverage collection featuring frappes, iced teas, coffees, and bubble teas with unique flavors and textures.
              </p>

              {/* Category Buttons */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
                {menuCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-md cursor-pointer text-sm sm:text-base font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-green-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area with Transition */}
            <div className="transition-all duration-500 ease-in-out">
              {activeCategory === 'trendy-brews' ? (
                /* Trendy Brews Grid - Show all brew headings with images */
                <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6">
                    {menuCategories
                      .find(cat => cat.id === 'trendy-brews')
                      ?.items.map((item, index) => (
                        <TrendyBrewsCard
                          key={index}
                          name={item.name}
                          description={item.description}
                          imageUrl={item.imageUrl}
                        />
                      ))}
                  </div>
                </div>
              ) : (
                /* Menu Items Grid without images */
                <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
                  {/* Category Description */}
                  {menuCategories.find(cat => cat.id === activeCategory)?.description && (
                    <div className="text-center mb-8">
                      <p className="text-gray-600 text-sm sm:text-base italic max-w-3xl mx-auto">
                        {menuCategories.find(cat => cat.id === activeCategory)?.description}
                      </p>
                    </div>
                  )}
                  
                  {/* Menu Items Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6">
                    {menuCategories
                      .find(cat => cat.id === activeCategory)
                      ?.items.map((item, index) => (
                        <MenuItemCard
                          key={index}
                          name={item.name}
                          description={item.description}
                        />
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default TrendyBrews;