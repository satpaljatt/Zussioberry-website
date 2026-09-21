
// Frozen Desserts Page
"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";

const FrozenDessertsPage = () => {
  // Desserts data with descriptions and images
  const frozenTreatsData = [
  {
    title: "Frozen Treats",
    description: "A delightful collection of gelato, popsicles, kulfi, and natural ice creams crafted with premium ingredients and authentic flavors.",
    imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png",
  },
  {
    title: "Gelato",
    description: "Italian frozen dessert with dense, rich texture and intense flavors, made with lower fat and air content than traditional ice cream.",
    imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png",
  },
  {
    title: "Popsicles",
    description: "Refreshing frozen treats made from real fruit juice and creamy blends, served on sticks for perfect handheld enjoyment.",
    imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png",
  },
  {
    title: "Kulfiyo",
    description: "Traditional Indian kulfi reimagined with bold flavors and natural ingredients, slow-cooked for creamy richness.",
    imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png",
  },
  {
    title: "Natural Ice Creams",
    description: "Handcrafted ice creams using fresh seasonal fruits, pure milk, and no artificial colors or preservatives.",
    imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png",
  },
  {
    title: "Frozen Dessert Bowls",
    description: "Layered frozen creations combining ice cream, fruits, nuts, and traditional Indian dessert elements.",
    imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png",
  }
];

// Menu categories data with proper descriptions
const menuCategories = [
  {
    id: 'frozen-treats',
    name: 'Frozen Treats',
    description: 'A delightful collection of gelato, popsicles, kulfi, and natural ice creams crafted with premium ingredients and authentic flavors.',
    imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png",
    items: [
      { 
        name: 'Gelato', 
        description: 'Italian frozen dessert with dense, rich texture and intense flavors, made with lower fat and air content than traditional ice cream.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Popsicles', 
        description: 'Refreshing frozen treats made from real fruit juice and creamy blends, served on sticks for perfect handheld enjoyment.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Kulfiyo', 
        description: 'Traditional Indian kulfi reimagined with bold flavors and natural ingredients, slow-cooked for creamy richness.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Natural Ice Cream Fruit Based', 
        description: 'Handcrafted ice creams using fresh seasonal fruits, pure milk, and no artificial colors or preservatives.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      }
    ]
  },
  {
    id: 'gelato',
    name: 'Gelato',
    description: 'Gelato is a dense, Italian frozen dessert, similar to ice cream but with a richer, smoother texture due to lower fat and air content.',
    items: [
      { name: 'Madagascar Vanilla Gelato', description: 'Made with premium vanilla beans from Madagascar, this smooth and creamy gelato delivers a pure vanilla experience.' },
      { name: 'Salted Butter Caramel Gelato', description: 'A rich blend of slow-cooked caramel, creamy butter, and a touch of sea salt for perfect sweet-salty balance.' },
      { name: 'Strawberry Frutteto Gelato', description: 'Bursting with ripe, juicy strawberries, this fresh gelato captures the sweet essence of summer in every spoon.' },
      { name: 'Exotic Pineapple Gelato', description: 'Tropical and tangy, this pineapple gelato is refreshing and vibrant with authentic fruit flavor.' },
      { name: 'Strawberry Greek Yogurt Gelato', description: 'Creamy Greek yogurt blended with ripe strawberry compote for a tangy and refreshing treat.' },
      { name: 'Blueberry Greek Yogurt Gelato', description: 'Juicy blueberries swirl into rich Greek yogurt base for a creamy, fruity delight.' },
      { name: 'Belgian Chocolate Gelato', description: 'Made with authentic Belgian chocolate for a rich, decadent chocolate experience.' },
      { name: 'American Fruit & Nuts Gelato', description: 'A hearty blend of roasted nuts and sweet dried fruits in a creamy base for texture and flavor.' },
      { name: 'Strawberry New York Cheesecake Gelato', description: 'Classic cheesecake richness meets strawberry swirls and real cake crumbles for a dessert lover\'s dream.' },
      { name: 'Blueberry New York Cheesecake Gelato', description: 'A tangy cheesecake gelato layered with sweet blueberry compote and soft cheesecake bites.' },
      { name: 'Coffee Cappuccino Gelato', description: 'This creamy gelato captures the bold, smooth essence of a freshly made Italian cappuccino.' },
      { name: 'Pistachio Gelato', description: 'Crafted with real Mediterranean pistachios, this nutty, earthy gelato is rich, creamy, and authentically flavored.' },
      { name: 'Cookie Spicy Gelato', description: 'Spiced cookie pieces blended into a creamy base with warm notes of cinnamon and ginger.' },
      { name: 'Ferrero Rocher Gelato', description: 'The luxurious gelato blends hazelnut cream, chocolate swirls, roasted nuts, and crisp wafer bites.' }
    ]
  },
  {
    id: 'popsicles',
    name: 'Popsicles',
    description: 'Popsicles are refreshing frozen treats made from real fruit juice, creamy blends, or sweet infusions — served on a stick for perfect handheld chill.',
    items: [
      { name: 'Mango Popsicle', description: 'Made with ripe, sun-kissed mangoes, this tropical treat is smooth, juicy, and bursting with natural sweetness.' },
      { name: 'Sugarcane Popsicle', description: 'Pressed from fresh sugarcane juice, this icy delight is naturally sweet and wonderfully refreshing.' },
      { name: 'Jamun Popsicle', description: 'Made with real, handpicked jamun (Indian black plum) pulp for a tangy, refreshing burst of flavor.' },
      { name: 'Lychee Coconut Popsicle', description: 'Exotic lychee meets creamy coconut for a delicate, floral fusion that\'s light, smooth, and irresistibly tropical.' },
      { name: 'Pomegranate Popsicle', description: 'Packed with antioxidant-rich pomegranate juice, this bold ruby-red popsicle is tangy, tart, and full of vibrant flavor.' },
      { name: 'Guava Chilli Popsicle', description: 'Sweet pink guava with a cheeky kick of chili for a perfect sweet-spicy balance.' },
      { name: 'Pineapple Popsicle', description: 'Juicy pineapple purée frozen to perfection for a tropical, tangy refreshment.' }
    ]
  },
  {
    id: 'kulfiyo',
    name: 'Kulfiyo',
    description: 'Kulfiyo is a celebration of traditional Indian kulfi (slow-cooked, creamy, and rich) reimagined with bold flavors, natural ingredients, and handcrafted touch.',
    items: [
      { name: 'Mawa Malai Kulfi', description: 'Slow-cooked full cream milk and mawa come together in this ultra-creamy, rich traditional kulfi.' },
      { name: 'Kesar Kulfi', description: 'Infused with pure saffron strands, this royal kulfi offers a golden hue and delicate floral aroma that lingers beautifully.' },
      { name: 'Pista Kulfi', description: 'Loaded with crunchy pistachios and a hint of cardamom, this kulfi is nutty, creamy, and a classic crowd-pleaser.' },
      { name: 'Gulkand Kulfi', description: 'Made with sweet rose petal preserve (gulkand), this kulfi is floral, cooling, and naturally aromatic.' },
      { name: 'Mango Kulfi', description: 'Made with real Alphonso mango pulp and rich cream, this summer favorite is fruity, silky, and bursting with tropical flavor.' },
      { name: 'Sitaphal Kulfi', description: 'Blended with creamy custard apple pulp, this kulfi is smooth, mildly sweet, and packed with nostalgic flavor of sitaphal season.' },
      { name: 'Chickoo Kulfi', description: 'Made with ripe chikoo (sapota) and thickened milk, this kulfi is naturally sweet, malty, and deeply comforting.' },
      { name: 'Jamun Kulfi', description: 'Tangy-sweet jamun fruit churned into creamy kulfi creates a bold, vibrant flavor with a refreshing twist.' }
    ]
  },
  {
    id: 'natural-icecream',
    name: 'Natural Ice Cream Fruit Based',
    description: 'Our Natural Ice Creams are handcrafted using fresh, seasonal fruits, pure milk, and absolutely no artificial colors or preservatives.',
    items: [
      { name: 'Alphonso Mango', description: 'Made with real Alphonso mango pulp, this golden scoop captures the essence of India\'s favorite summer fruit.' },
      { name: 'Strawberry', description: 'Crafted from fresh, juicy strawberries, this ice cream bursts with vibrant color and authentic fruit flavor.' },
      { name: 'Lychee', description: 'Delicate and floral, this ice cream is made with real lychee for a light and exotic tropical experience.' },
      { name: 'Jamun', description: 'Tangy, bold, and uniquely refreshing, this deep-purple delight is made from juicy jamun fruit with authentic flavor.' },
      { name: 'Coconut', description: 'Fresh tender coconut gives this ice cream a creamy, smooth texture with natural tropical charm.' },
      { name: 'Jackfruit', description: 'Sweet, honey-like jackfruit pulp turns this scoop into an exotic adventure with authentic fruit texture.' },
      { name: 'Guava Chilli', description: 'Sweet pink guava meets a playful kick of red chilli in this bold, fruity fusion with perfect balance.' },
      { name: 'Watermelon Muskmelon', description: 'A cool, juicy blend of watermelon and muskmelon makes this a summer dream come true.' },
      { name: 'Papaya Pineapple', description: 'Tropical papaya and zesty pineapple come together for a bright, creamy treat with dual fruit goodness.' },
      { name: 'Tadgola (Ice Apple)', description: 'Made from the juicy, tender flesh of ice apples, this scoop is subtly sweet and incredibly refreshing.' },
      { name: 'Sitaphal (Custard Apple)', description: 'Rich and grainy, this ice cream is loaded with real sitaphal pulp for an authentic taste and texture.' },
      { name: 'Sapota (Chickoo)', description: 'This earthy, malty ice cream is made with ripe chikoo for a deep, comforting flavor experience.' }
    ]
  }
];

  const [activeCategory, setActiveCategory] = useState('frozen-treats');

  // Component for a single dessert item
  const DessertItem = ({ title, description, imageUrl }) => (
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

  // Component for menu items with same design as desserts
  const MenuItemCard = ({ name, price, description, imageUrl }) => (
    <div className="flex items-start gap-4 sm:gap-6 p-4 md:p-6 border-b border-gray-100 last:border-b-0 lg:border-none">
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

  // Special component for Frozen Treats with images
  const FrozenTreatsCard = ({ name, description, imageUrl }) => (
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
            Crafted In-House. Loved Everywhere.
          </h2>
          <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed font-[para] max-w-xl mx-auto text-center">
            Unlike other cafés, Zussioberry produces its own frozen desserts. Our centralized kitchens ensure quality, innovation, and cost efficiency across all outlets.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-white min-h-screen overflow-hidden">

        {/* Frozen Desserts Section with New Design */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Frozen Desserts Heading */}
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-green-600 mb-4">
                Frozen Treats
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8">
                By manufacturing in-house, we give franchisees an exclusive advantage: higher margins, unique products, and strong customer loyalty.
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
              {activeCategory === 'frozen-treats' ? (
                /* Frozen Treats Grid - Show all dessert headings with images */
                <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6">
                    {menuCategories
                      .find(cat => cat.id === 'frozen-treats')
                      ?.items.map((item, index) => (
                        <FrozenTreatsCard
                          key={index}
                          name={item.name}
                          description={item.description}
                          imageUrl={item.imageUrl}
                        />
                      ))}
                  </div>
                </div>
              ) : (
                /* Menu Items Grid with same design as desserts */
                <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
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

export default FrozenDessertsPage