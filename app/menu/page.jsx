import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

const MenuPage = () => {
  const juices = [
    'Mosambi', 'Orange', 'Pineapple', 'Watermelon', 'Pomegranate', 'Kiwi', 'Black Grapes', 'Papaya', 'Muskmelon', 'Guava', 'Mix Berry', 'Mix Fruit', 'Fresh Lime',
    'Carrot', 'Beetroot', 'Green Juice', 'Coconut', 'Litchi',
  ]

  const milkshakes = [
    'Alphonso Mango', 'Chickoo', 'Anjeer', 'Strawberry', 'Sitaphal', 'Blueberry', 'Banana', 'Avocado', 'Dates',
    'Black Currant', 'Kesar', 'Pista', 'Butterscotch', 'Rose', 'Nutella', 'Any blend of 2',
  ]

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
          <h2 className="text-3xl md:text-6xl font-[heading-1] mb-4">
            Come take a peek into our menu
          </h2>
          <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed font-[para] max-w-xl mx-auto">
            Step into the magical world of Zussioberry and let your taste buds dance to the rhythm of joy!
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <div className="bg-white min-h-screen overflow-hidden">

      <section className="py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Juices List */}
            <div className="space-y-6 w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-green-600 text-center lg:text-left">
                Juices
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {juices.map((juice, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3 justify-center sm:justify-start"
                  >
                    <span className="text-green-500">➤</span>
                    <span className="text-gray-700 font-[para] text-base sm:text-lg font-semibold">{juice}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Juices Image with Green Circle Overlay */}
            <div className="relative w-full flex justify-center items-center mt-10 lg:mt-20 min-h-[250px] sm:min-h-[350px]">
              {/* Green Circle in the top left */}
              <div className="absolute -top-16 -left-10 sm:-top-24 sm:left-auto sm:-right-16 lg:top-[-30%] lg:left-[70%] z-10 pointer-events-none">
                <div className="w-40 h-40 sm:w-60 sm:h-60 lg:w-[70vh] lg:h-[70vh] bg-green-500 rounded-full opacity-80"></div>
              </div>
              <div className="relative h-56 sm:h-80 md:h-96 w-full max-w-md overflow-hidden shadow-2xl z-20">
                <img
                  src="/assets/SmallZussioberry/juice.png"
                  alt="Fresh Juices"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-10 px-4 sm:px-6 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Juices List */}
            <div className="space-y-6 w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-green-600 text-center lg:text-left">
                MilkShake
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {milkshakes.map((juice, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3 justify-center md:justify-start">
                    <span className="text-green-500">➤</span>
                    <span className="text-gray-700 text-base sm:text-lg font-[para] font-semibold">{juice}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Juices Image */}
            <div className="relative w-full flex justify-center items-center mt-10 lg:mt-20 min-h-[250px] sm:min-h-[350px]">
              <div className="relative h-56 sm:h-80 md:h-96 w-full max-w-md overflow-hidden shadow-2xl z-20">
                <img
                  src="/assets/SmallZussioberry/milkshake.png"
                  alt="Fresh Juices"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-10 px-4 sm:px-6 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Juices List */}
            <div className="space-y-4 w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-green-600 text-center lg:text-left">
                Smoothie
              </h2>
              <div className="space-y-3">
                {[
                  'Mango Mist (mango, banana, strawberry)',
                  'Pebbles Ripples (blackcurrant, strawberry, pineapple)',
                  'Tropical Green (avocado, banana, honey)',
                  'Scarlet Dew (strawberry, banana, vanilla)',
                  'Berry Blossom (blackberry, blueberry, strawberry)',
                  'Tropical Delight (peanut, banana, vanilla)'
                ].map((item, index) => {
                  // Split at the first '(' to separate name and description
                  const match = item.match(/^([^(]+)\s*(\((.*)\))?$/);
                  const name = match ? match[1].trim() : item;
                  const desc = match && match[3] ? match[3].trim() : null;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-green-500">➤</span>
                      <span className="text-gray-700 font-[para] text-base sm:text-lg leading-relaxed">
                        <span className="font-semibold">{name}</span>
                        {desc && (
                          <span className="font-normal"> ({desc})</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Juices Image */}
            <div className="relative w-full flex justify-center items-center mb-8 lg:mb-0">
              <div className="relative h-56 sm:h-80 w-full max-w-md overflow-hidden shadow-2xl">
                <img
                  src="/assets/SmallZussioberry/Smoothie.png"
                  alt="Fresh Juices"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Juices Image */}
              <div className="relative">
                {/* Green Circle Overlay */}
                <div className="absolute -top-20 left-[-120%] z-8">
                  <div className="w-[60vh] h-[60vh] bg-[#ffd15c] rounded-full shadow-lg flex items-center justify-center"></div>
                </div>
                <div className="relative h-80 w-full overflow-hidden shadow-2xl z-10">
                  <img
                    src="/assets/sectionZussioberry/Fruits.png"
                    alt="Fresh Juices"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Juices List */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-[heading-1] text-green-600 text-center lg:text-left">
                  Dry-fruit MilkShake
                </h2>
                <div className="space-y-3">
                    {[
                      'Sitaphal Kaju Pista',
                      'Kaju Anjeer',
                      'Blueberry Banana Dates walnut',
                      'Chickoo Roasted Badam',
                      'Mango Pista Malai',
                      'Strawberry Rose Badam'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-green-500">➤</span>
                        <span className="text-gray-700 font-[para] font-semibold text-lg leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </div>
      </section>

      <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-[heading-1] text-green-600 text-center lg:text-left">
                  Desserts
                </h2>
                <div className="space-y-3">
                  {[
                    'Orange Tulip (orange & vanilla)',
                    'Butterscotch Temptress (butterscotch & vanilla)',
                    'Early Dawn (mango, cream & ice-cream)',
                    'Velvet Pleasure (strawberries, milk & ice-cream)',
                    'Snowy Heaven (custard apple & cream)',
                    'Fantasy (strawberry, mango, custard apple)',
                    'Hidden Forest (custard apple, strawberry, mango, chocolate & vanilla)',
                    'Kiwi Caress (kiwi & cream)',
                    'Violet Passion (black currant & ice-cream)'
                  ].map((item, index) => {
                    
                    const match = item.match(/^([^(]+)(\(([^)]+)\))?$/);
                    const main = match ? match[1].trim() : item;
                    const bracket = match && match[2] ? match[2] : '';
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-green-500">➤</span>
                        <span className="text-gray-700 font-[para] text-lg leading-relaxed">
                          <span className="font-semibold">{main}</span>
                          {bracket && (
                            <span className="font-normal"> {bracket}</span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              
              <div className="relative">
                <div className="relative h-[100vh] w-[100vh] right-[-20%] overflow-hidden rounded-full">
                  <img
                    src="/assets/SmallZussioberry/Desserts.png"
                    alt="Delicious Desserts"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
      </section>


      <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Falooda Image */}
              <div className="relative">
                <div className="relative h-[100vh] w-[100vh] left-[-100%] overflow-hidden rounded-full">
                  <img
                    src="/assets/SmallZussioberry/Falooda.png"
                    alt="Refreshing Falooda"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Falooda List */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-[heading-1] text-green-600 text-center lg:text-left">
                  Falooda
                </h2>
                <div className="space-y-3">
                  {[
                    'Mix Ice-cream (kaju kishmish and strawberry ice cream, milk, falooda, sabjaseed)',
                    'Butterscotch (butter scotch ice cream, milk, falooda, sabjaseed, sliced almond)',
                    'Black Currant (blackcurrant falooda ice cream, milk, falooda, sabjaseed, sliced almond, blackcurrant crush)',
                    'Strawberry (strawberry ice cream, milk, falooda, sabjaseed, strawberry pulp)',
                    'Chocolate (chocolate syrup, choco chip ice cream, milk, falooda, sabjaseed, topping with chocolate syrup)',
                    'Mango (mango ice cream, milk, falooda, sabjaseed, mango pulp)',
                    'Royal Malai (rose syrup, kaju & vanilla ice cream, malai kulfi, milk, malai kulfi, falooda, sabjaseed, topping with malai kulfi, sliced almond)',
                    'Kesar Pista (kesar pista ice-cream, malai kulfi, milk, falooda, sabjaseed, sliced pista)'
                  ].map((item, index) => {
                    // Split at the first '(' to separate heading and bracket side
                    const match = item.match(/^([^(]+)\s*(\(.*\))?$/);
                    const heading = match && match[1] ? match[1].trim() : item;
                    const bracket = match && match[2] ? match[2] : '';
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-green-500">➤</span>
                        <span className="text-gray-700 font-[para] text-lg leading-relaxed">
                          <span className="font-semibold">{heading}</span>
                          {bracket && (
                            <span className="font-normal"> {bracket}</span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
      </section>


      <section className="max-w-7xl mx-auto py-16 px-6 font-[para] grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text */}
        <div className="space-y-6">
          <h2 className="text-green-700 text-7xl text-start font-[heading-1] mb-20">
            Wrap it <br/> roll it <br/> relish it..
          </h2>
          <h2 className="text-green-600 text-4xl font-[heading-1]">Diet Foods</h2>

          {/* Non-Veg Items */}

          <div className='flex justify-between items-center'>
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 border-2 border-green-600 rounded-sm flex justify-center items-center">
                <div className="w-2.5 h-2.5 bg-green-700 rounded-full"></div>
              </div>
              </div>

              {(() => {
                const vegRolls = [
                  { name: "Veg Wrap" },
                  { name: "Paneer Tikka" },
                  { name: "Veg Manchurian" },
                  { name: "Veg Kabab" },
                  { name: "Veg Falafal" }
                ];
                return (
                  <ul className="space-y-2">
                    {vegRolls.map((item) => (
                      <div key={item.name} className='flex gap-4'>
                        <span className="text-green-500">➤</span>
                        <li className="text-gray-900 font-semibold">{item.name}</li>
                      </div>
                    ))}
                  </ul>
                );
              })()}
            </div>

            {/* Add-ons */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 border-2 border-red-600 flex justify-center items-center">
                  <div className="w-0 h-0 border-l-[7px] border-r-[7px] border-b-[12px] border-l-transparent border-r-transparent border-b-red-600"></div>
                </div>
              </div>

              {(() => {
                const nonVegRolls = [
                  { name: "Chiken Roll" },
                  { name: "Chiken Tikka Roll" },
                  { name: "Chiken Seekh Roll" },
                  { name: "Mutton Seekh Roll" }
                ];
                return (
                  <ul className="space-y-1 mt-2">
                    {nonVegRolls.map((item) => (
                      <div key={item.name} className='flex gap-4'>
                        <span className="text-green-500">➤</span>
                        <li className="text-gray-900 font-semibold">{item.name}</li>
                      </div>
                    ))}
                    <p className='text-gray-700'> * all roles are made with single egg</p>
                  </ul>
                );
              })()}              
            </div>
          </div>
        </div>


        {/* Desserts Image */}
        <div className="relative">
          <div className="absolute left-[100%] top-[60%] -translate-x-1/2 -translate-y-1/2 z-0">
            <div
              className="rounded-full bg-green-600"
              style={{
                width: "70vh",
                height: "70vh",
                filter: "blur(0px)",
              }}
            ></div>
          </div>
          <div className="relative h-[65vh] w-[110vh] right-[-10%] overflow-hidden z-10">
            <img
              src="/assets/SmallZussioberry/Wraps.png"
              alt="Delicious Desserts"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>


      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Sandwich Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src="/assets/SmallZussioberry/crispybites.png"
              alt="Grill Sandwich"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Menu Text */}
          <div className="w-full md:w-1/2">
            {/* Grill Sandwich */}
            <h2 className="text-3xl text-green-600 font-[heading-1] mb-4 text-center md:text-left">
              Crispy Bites
            </h2>

            {/* Responsive layout for menu and add-ons */}
            <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
              {/* Menu Items */}
              <div>
                {(() => {
                  const grillSandwichItems = [
                    { name: "Herb Chilli Patty" },
                    { name: "French Fries" },
                    { name: "Peri Peri Fries" },
                    { name: "Potato Pops" },
                    { name: "Cheese Coin" },
                    { name: "Veg Falafel" }
                  ];
                  return (
                    <ul className="space-y-2 text-lg font-[para]">
                      {grillSandwichItems.map((item) => (
                        <li key={item.name} className="flex items-center gap-2">
                          <span className="text-green-500">➤</span>
                          <span className="font-semibold">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  );
                })()}
              </div>

              {/* Add-ons */}
              <div className="mt-8 md:mt-0">
                {(() => {
                  const addOns = [
                    { name: "Cheese / Paneer" },
                    { name: "Mayonnaise" },
                    { name: "Dips" },
                    { name: "Double Egg for non-veg" }
                  ];
                  return (
                    <ul className="space-y-2 text-lg font-[para]">
                      <h3 className="text-green-600 font-semibold text-xl mb-2">ADD-ONS</h3>
                      {addOns.map((item) => (
                        <li key={item.name} className="flex items-center gap-2">
                          <span className="text-green-500">➤</span>
                          <span className="font-semibold">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-16 px-6 font-[para] grid md:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-6">
            <p className="text-green-700 text-5xl text-center font-[heading-1]">Shawarma</p>
            {/* Veg Items */}

            <div className='flex justify-between '>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 border-2 border-green-600 rounded-sm flex justify-center items-center">
                    <div className="w-2.5 h-2.5 bg-green-700 rounded-full"></div>
                  </div>
                </div>
                <ul className="space-y-2 text-lg">
                  {[
                    { name: "Falafel Shawarma" },
                    { name: "Falafel Cheese Shawarma" },
                    { name: "Paneer Tikka Shawarma" },
                    { name: "Paneer Tikka Cheese Shawarma" }
                  ].map((item, idx) => (
                    <li key={item.name} className="flex items-center gap-2">
                      <span className="text-green-500">➤</span>
                      <span className="font-semibold">{item.name}</span>
                    </li>
                  ))}
                </ul>

                <div className='flex justify-between items-center'>
                  <div className="mt-20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 border-2 border-red-600 flex justify-center items-center">
                        <div className="w-0 h-0 border-l-[7px] border-r-[7px] border-b-[12px] border-l-transparent border-r-transparent border-b-red-600"></div>
                      </div>
                    </div>
                    {(() => {
                      const nonVegItems = [
                        { name: "Chiken Shawarma" },
                        { name: "Chiken Cheese Shawarma" },
                        { name: "Chiken Tikka Shawarma" },
                        { name: "Chiken Seekh Shawarma" },
                        { name: "Mutton Seekh Shawarma" },
                        { name: "Mutton Seekh Cheese Shawarma" }
                      ];
                      return (
                        <ul className="space-y-2 text-lg">
                          {nonVegItems.map((item) => (
                            <li key={item.name} className="flex items-center gap-2">
                              <span className="text-green-500">➤</span>
                              <span className="font-semibold">{item.name}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    })()}
                  </div>
                </div>

              </div>

              {/* Add-ons */}
              {(() => {
                const addOns = [
                  { name: "Cheese / Paneer" },
                  { name: "Mayonniase" },
                  { name: "Dips" },
                  { name: "Liquid Cheese" },
                  { name: "BBQ Cheese" },
                  { name: "Jalapeno Sauce" },
                  { name: "Harisa Chill sauce" },
                  { name: "Maxican salsa sauce" },
                  { name: "Tandoori Maya" },
                  { name: "Peri Peri sauce" },
                  { name: "Honey Mustard sauce" },
                  { name: "Thousand Island sauce" },
                  { name: "Chipotic sauce" }
                ];
                return (
                  <div className="mt-6">
                    <h3 className="text-green-600 font-semibold text-xl">ADD-ONS</h3>
                    <ul className="space-y-1 mt-2">
                      {addOns.map((item) => (
                        <li key={item.name} className="flex items-center gap-2 text-lg">
                          <span className="text-green-500">➤</span>
                          <span className="font-semibold">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Desserts Image */}
          <div className="relative">
          <div className="absolute left-[100%] top-[55%] -translate-x-1/2 -translate-y-1/2 z-0">
            <div
              className="rounded-full bg-green-600"
              style={{
                width: "70vh",
                height: "70vh",
                filter: "blur(0px)",
              }}
            ></div>
          </div>
          <div className="relative h-[65vh] w-[110vh] right-[-10%] overflow-hidden z-10">
            <img
              src="/assets/SmallZussioberry/Shawarma.png"
              alt="Delicious Desserts"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>


      <section className="bg-white py-8 px-3 sm:py-12 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* Sandwich Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <Image
              src="/assets/SmallZussioberry/GrillSandwich.png"
              alt="Grill Sandwich"
              width={400}
              height={300}
              className="rounded-lg w-full max-w-xs sm:max-w-md md:max-w-none h-auto object-cover"
              // Responsive: full width on mobile, fixed on desktop
            />
          </div>

          {/* Menu Text */}
          <div className="w-full md:w-1/2">
            {/* Grill Sandwich */}
            <h2 className="text-2xl sm:text-3xl text-green-600 font-[heading-1] mb-3 sm:mb-4 text-center md:text-left">
              Grill Sandwich
            </h2>
            {(() => {
              const grillSandwichItems = [
                { name: "Veg Grill" },
                { name: "Veg Cheese" },
                { name: "Grill Paneer Grill" },
                { name: "Mushroom Sandwich" },
                { name: "Kebab Mayo Cheese" },
                { name: "Chilli Cheese Corn" }
              ];
              return (
                <ul className="space-y-2 text-base sm:text-lg font-[para]">
                  {grillSandwichItems.map((item) => (
                    <li key={item.name} className="flex items-center gap-2">
                      <span className="text-green-500">➤</span>
                      <span className="font-semibold">{item.name}</span>
                    </li>
                  ))}
                </ul>
              );
            })()}
            {/* Jumbo Grill Sandwich */}
            <h2 className="text-2xl sm:text-3xl text-green-600 font-[heading-1] mt-6 sm:mt-8 mb-3 sm:mb-4 text-center md:text-left">
              Jumbo Grill Sandwich
            </h2>
            <ul className="space-y-2 text-base sm:text-lg font-[para]">
              <li className="flex items-center gap-2">
                <span className="text-green-500">➤</span>
                <span className="font-semibold">Veg Cheese</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">➤</span>
                <span className="font-semibold">Paneer Tikka</span>
              </li>
            </ul>
          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 font-[para] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <div className="space-y-6 order-2 md:order-1">
          <p className="text-green-700 text-3xl sm:text-5xl text-center font-[heading-1]">Healthy is Tasty!</p>
          <h2 className="text-green-600 text-2xl sm:text-4xl font-[heading-1]">Diet Foods</h2>

          {/* Veg Items */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 border-2 border-green-600 rounded-sm flex justify-center items-center">
                <div className="w-2.5 h-2.5 bg-green-700 rounded-full"></div>
              </div>
            </div>
            <ul className="space-y-2 text-base sm:text-lg">
              {[
                { name: "Classic Veg Salad" },
                { name: "Exotic Veg Salad" },
                { name: "Tofu Salad Paneer Tikka Salad" },
                { name: "Sprouts Salad" }
              ].map((item) => (
                <li key={item.name} className="flex items-center gap-2">
                  <span className="text-green-500">➤</span>
                  <span className="font-semibold">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Non-Veg Items and Add-ons */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 border-2 border-red-600 flex justify-center items-center">
                  <div className="w-0 h-0 border-l-[7px] border-r-[7px] border-b-[12px] border-l-transparent border-r-transparent border-b-red-600"></div>
                </div>
              </div>
              <ul className="space-y-2 text-base sm:text-lg">
                {[
                  { name: "Roast Chicken Salad" },
                  { name: "Boiled Chicken Salad" },
                  { name: "Chicken Tikka Salad" },
                  { name: "Boiled Egg Plate" },
                  { name: "Boiled Egg Salad" }
                ].map((item) => (
                  <li key={item.name} className="flex items-center gap-2">
                    <span className="text-green-500">➤</span>
                    <span className="font-semibold">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add-ons */}
            <div className="mt-6">
              <h3 className="text-green-600 font-semibold text-lg sm:text-xl">ADD-ONS</h3>
              <ul className="space-y-1 mt-2 text-base sm:text-lg">
                {[
                  { name: "Sprouts (100 gm)" },
                  { name: "Cooked Brown Rice (100 gm)" },
                  { name: "Cheese Cube" },
                  { name: "Butter Cube" }
                ].map((addon) => (
                  <li key={addon.name} className="flex items-center gap-2">
                    <span className="text-green-500">➤</span>
                    <span className="font-semibold">{addon.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desserts Image */}
        <div className="relative order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative w-full h-72 sm:h-[60vh] md:h-[100vh] md:w-[100vh] md:right-[18%] overflow-hidden">
            <img
              src="/assets/SmallZussioberry/DietFoods2.png"
              alt="Delicious Desserts"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>


      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 font-sans space-y-20">
        
        {/* Combo Meal Section */}
        <div className="flex justify-center items-center relative">
          {/* Green Circle */}
          <div className="w-72 h-72 sm:w-96 sm:h-96 bg-green-700 rounded-full flex flex-col justify-center items-center text-center text-white leading-snug">
            <p className="mt-16 px-2 sm:px-4 font-[para] text-2xl sm:text-3xl">Add French Fries and Lemon Water</p>
            <p className="mt-2 font-[heading-1] text-2xl sm:text-2xl text-[#ffd25d]">Rs. 70/- Extra</p>
          </div>
          {/* Yellow Circle */}
          <div className="absolute -top-12 sm:-top-20 left-1/2 sm:left-[28%] -translate-x-1/2 sm:translate-x-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#ffd25d] rounded-full flex justify-center items-center">
            <p className="text-green-900 font-[heading-1] text-2xl sm:text-4xl text-center">Combo Meal</p>
          </div>
        </div>

        {/* Kulfi Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">
          {/* Kulfi Image */}
          <div className="flex justify-center">
            <Image
              src="/assets/SmallZussioberry/CreamyKulfi.png"
              alt="Kulfi"
              width={250}
              height={250}
              className="rounded-lg shadow-lg object-cover sm:w-[350px] sm:h-[350px] w-[200px] h-[200px]"
            />
          </div>
          {/* Kulfi Text */}
          <div>
            <h2 className="text-green-600 text-3xl sm:text-5xl font-[heading-1] mb-4 sm:mb-6">Creamy Dreamy Kulfi</h2>
            <ul className="space-y-2 text-base sm:text-lg font-[para]">
              {[
                { name: "Mawa Malai Kulfi" },
                { name: "Pista Kulfi" },
                { name: "Kesar Kulfi" },
                { name: "Alphonso Kulfi" }
              ].map((flavor, idx) => (
                <li key={flavor.name} className="flex items-center gap-2">
                  <span className="text-green-500">➤</span>
                  <span className="font-semibold">{flavor.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kulfi Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Kulfi Image */}
          <div className="flex justify-center">
            <Image
              src="/assets/SmallZussioberry/Popsicle.png"
              alt="Kulfi"
              width={250}
              height={250}
              className="rounded-lg shadow-lg object-cover sm:w-[350px] sm:h-[350px] w-[200px] h-[200px]"
            />
          </div>
          {/* Kulfi Text */}
          <div>
            <h2 className="text-green-600 text-3xl sm:text-5xl font-[heading-1] mb-4 sm:mb-6">Popsicle Pleasure</h2>
            <ul className="space-y-2 text-base sm:text-lg font-[para]">
              {[
                { name: "Alphonso Mango" },
                { name: "Watermelon" },
                { name: "Pomegranate" },
                { name: "Guava Chilli" },
                { name: "Jamun" },
                { name: "Sugarcane" }
              ].map((flavor, idx) => (
                <li key={flavor.name} className="flex items-center gap-2">
                  <span className="text-green-500">➤</span>
                  <span className="text-gray-900 font-semibold">{flavor.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>
        
      </div>
    </>
  )
}

export default MenuPage