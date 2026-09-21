


'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

const MenuPage = () => {
  // Food data with descriptions and images
  const foodData = [
  {
    title: "Savoury Selections",
    description: "A variety of crispy bites, soups, wraps, sandwiches, and delicious starters to awaken your taste buds.",
    imageUrl: "/assets/menu/foods/foods/1.jpg",
  },
  {
    title: "Pasta & Main Course",
    description: "Hearty pastas with rich sauces and satisfying main course dishes featuring fresh ingredients and bold flavors.",
    imageUrl: "/assets/menu/foods/foods/2.jpg",
  },
  {
    title: "Thai Curry & Burrito Bowls",
    description: "Aromatic Thai curries and customizable burrito bowls packed with fresh veggies, proteins, and flavorful sauces.",
    imageUrl: "/assets/menu/foods/foods/3.jpg",
  },
  {
    title: "Pizza & Salads",
    description: "Thin crust pizzas with premium toppings and fresh, crisp salads with seasonal greens and flavorful dressings.",
    imageUrl: "/assets/menu/foods/foods/4.jpg",
  },
  {
    title: "Burgers & Nachos",
    description: "Juicy burgers with savory patties and crunchy nachos loaded with melted cheese and zesty toppings.",
    imageUrl: "/assets/menu/foods/foods/5.jpg",
  },
  {
    title: "Tasty Toasty & Quick Bites",
    description: "Perfectly toasted bites and quick snacks including garlic bread, bruschetta, and crispy appetizers.",
    imageUrl: "/assets/menu/foods/foods/6.jpg",
  }
];

// Menu categories data with images and descriptions
const menuCategories = [
  {
    id: 'savoury-selections',
    name: 'Savoury Selections',
    description: 'A variety of crispy bites, soups, wraps, sandwiches, and delicious starters to awaken your taste buds.',
    imageUrl: "/assets/menu/foods/foods/1.jpg",
    items: [
      { 
        name: 'Crispy Bites', 
        description: 'A selection of golden, bite-sized snacks with a satisfying crunch — perfect for sharing or snacking.',
        imageUrl: "/assets/menuPage/SavourySelections/Crispy.png" 
      },
      { 
        name: 'Soups', 
        description: 'A variety of warm, flavorful broths or creamy blends made from fresh ingredients, served as a comforting starter or light meal.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Wraps', 
        description: 'A handheld meal featuring a soft flatbread rolled around a variety of fillings — perfect for a quick bite or a full meal.',
        imageUrl: "/assets/menuPage/SavourySelections/Wraps.png" 
      },
      { 
        name: 'Multigrain Sandwich', 
        description: 'A wholesome sandwich made with hearty multigrain bread, filled with fresh vegetables, cheeses, and flavorful spreads.',
        imageUrl: "/assets/menuPage/SavourySelections/Multigrain.png" 
      },
      { 
        name: 'Tasty Toasty (4pcs)', 
        description: 'A delightful assortment of four perfectly toasted bite-sized pieces, each topped with flavorful ingredients.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Pannini/Subway', 
        description: 'Toasted sandwiches made with soft or crusty bread, filled with fresh vegetables, cheeses, and flavorful spreads.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Nachos', 
        description: 'A crunchy and flavorful snack made with crispy tortilla chips, generously topped with melted cheese and zesty sauces.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Burger', 
        description: 'A hearty and flavorful sandwich made with a savory patty placed inside a soft bun and layered with fresh vegetables and sauces.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Starter', 
        description: 'Appetizing small plates served at the beginning of a meal to awaken the taste buds.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Pasta', 
        description: 'A staple food dish made from unleavened dough, formed into various shapes and served with rich sauces and toppings.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Main Course', 
        description: 'Hearty and satisfying dishes that serve as the highlight of your meal, featuring fresh ingredients and bold flavors.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Burrito Bowl/Wraps', 
        description: 'Delicious, customizable meals packed with fresh veggies, proteins, and flavorful sauces—perfectly wrapped or served in a bowl.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Salads', 
        description: 'Fresh, crisp, and vibrant—our salads combine seasonal greens, colorful veggies, and flavorful dressings.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Thin Crust Pizza', 
        description: 'Pizza characterized by a crispy, flat, and thin base, allowing the flavors of toppings and sauce to shine.',
        imageUrl: "/https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Thai Curry', 
        description: 'Flavorful and aromatic dishes from Thailand, made with spices, herbs, and curry paste simmered with coconut milk.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      }
    ]
  },
  {
    id: 'crispy-bites',
    name: 'Crispy Bites',
    description: 'A selection of golden, bite-sized snacks with a satisfying crunch — perfect for sharing or snacking.',
    items: [
      { name: 'Herb Chilli Patty', description: 'Crisp, golden bites made from a vibrant mix of fresh herbs, green chillies, and seasonal vegetables.' },
      { name: 'French Fries M/L', description: 'Crispy, golden fries with a light, crunchy exterior and fluffy potato center.' },
      { name: 'Peri Peri French Fries M/L', description: 'Crispy golden fries tossed in a zesty peri peri spice mix for a fiery kick.' },
      { name: 'Potato Pops Crispy Bites', description: 'Golden, crispy potato pops with a soft, fluffy inside.' },
      { name: 'Onion Rings Crispy Bites', description: 'Golden, crunchy onion rings with a light, crispy batter and sweet, tender onions inside.' },
      { name: 'Cheesy Loaded Fries Crispy Bites', description: 'Golden, crispy fries piled high with melted cheese.' }
    ]
  },
  {
    id: 'soups',
    name: 'Soups',
    description: 'A variety of warm, flavorful broths or creamy blends made from fresh ingredients, served as a comforting starter or light meal.',
    items: [
      { name: 'Broccoli Almond Soup', description: 'A creamy and nourishing blend of tender broccoli and toasted almonds, pureed to silky perfection.' },
      { name: 'Roasted Tomato Basil Soup', description: 'Slow-roasted tomatoes blended with fragrant fresh basil and a touch of garlic, creating a rich, smoky, and comforting soup.' },
      { name: 'Cream of Mushroom Soup', description: 'A velvety smooth blend of earthy mushrooms simmered with fresh herbs and cream.' },
      { name: 'Leak Soup', description: 'Delicately sautéed leeks blended into a creamy, velvety soup with subtle savory notes and a hint of fresh herbs.' }
    ]
  },
  {
    id: 'wraps',
    name: 'Wraps',
    description: 'A handheld meal featuring a soft flatbread rolled around a variety of fillings — perfect for a quick bite or a full meal.',
    items: [
      { name: 'Veg Wraps', description: 'A vibrant mix of crisp, fresh vegetables, leafy greens, and flavorful sauces, all wrapped in a soft, warm flatbread.' },
      { name: 'Veg Cheese Wraps', description: 'A tasty blend of fresh garden vegetables and melted cheese, wrapped snugly in a soft flatbread.' },
      { name: 'Veg Mayo Cheese Wraps', description: 'A fresh medley of crisp vegetables and melted cheese, dressed with a smooth, tangy mayo sauce, all wrapped in a soft flatbread.' },
      { name: 'Paneer Tikka Mayo Cheese Wraps', description: 'Tender cubes of smoky, spiced paneer tikka paired with melted cheese and a creamy, tangy mayo sauce, wrapped in a soft flatbread with fresh veggies.' },
      { name: 'Paneer Tikka Wraps', description: 'Marinated paneer cubes grilled to perfection with aromatic spices, wrapped in a soft flatbread along with fresh veggies and tangy chutneys.' },
      { name: 'Paneer Tikka Cheese Wraps', description: 'Tender, smoky paneer tikka cubes paired with melted cheese and fresh veggies, wrapped in a soft flatbread.' },
      { name: 'Veg Kabab Wraps', description: 'A delicious mix of spiced, grilled vegetable kababs wrapped in soft flatbread with crisp greens and tangy sauces.' },
      { name: 'Veg Kabab Mayo Cheese Wraps', description: 'Spiced and grilled vegetable kababs combined with melted cheese and creamy mayo sauce, wrapped in a soft flatbread with fresh veggies.' },
      { name: 'Exotic Veggie Wraps', description: 'A colorful mix of rare and flavorful vegetables, fresh greens, and unique herbs, all wrapped in a soft flatbread.' },
      { name: 'Zussioberry Spl Mushrooms Wraps', description: 'Savor tender mushrooms sautéed with a unique blend of spices and herbs, wrapped in a soft flatbread with fresh greens and a signature Zussioberry sauce.' },
      { name: 'Falafel with Hummus Wraps', description: 'Crispy, golden falafel balls paired with creamy, house-made hummus, wrapped in soft flatbread with fresh veggies and tangy tahini sauce.' }
    ]
  },
  {
    id: 'multigrain-sandwich',
    name: 'Multigrain Sandwich',
    description: 'A wholesome sandwich made with hearty multigrain bread, filled with fresh vegetables, cheeses, and flavorful spreads.',
    items: [
      { name: 'Veg Grill Sandwich', description: 'Grilled to golden perfection, loaded with fresh, crunchy vegetables and a hint of smoky char.' },
      { name: 'Veg Cheese Grill Sandwich', description: 'A classic grilled veggie sandwich with a generous layer of melted cheese.' },
      { name: 'Mushroom Grill Sandwich', description: 'Tender mushrooms grilled with herbs and spices, paired with crisp veggies and toasted bread.' },
      { name: 'Manchurian Sandwich', description: 'Crispy, saucy Manchurian bites nestled in soft bread with fresh veggies.' },
      { name: 'Paneer Tikka Mayo Cheese Sandwich', description: 'Smoky paneer tikka, melted cheese, and tangy mayo combined with fresh vegetables, grilled to perfection.' },
      { name: 'Kabab Mayo Cheese Sandwich', description: 'Spiced kababs layered with melted cheese and creamy mayo, wrapped in soft bread with fresh salad.' },
      { name: 'Exotic Veg Grill Sandwich', description: 'A vibrant mix of grilled exotic vegetables with herbs and spices, stacked between toasted bread.' },
      { name: 'Veg Falafel Grill Sandwich', description: 'Crunchy falafel patties paired with fresh salad and creamy sauces, grilled lightly.' },
      { name: 'Mexican Veg Sandwich', description: 'A spicy, tangy mix of grilled veggies with Mexican-style seasonings and sauces.' },
      { name: 'Veg Club Sandwich', description: 'Layers of fresh veggies, cheese, and sauces stacked between toasted bread.' },
      { name: 'Coleslaw Sandwich', description: 'Crunchy, tangy coleslaw piled high on soft bread for a refreshing, crisp, and light sandwich option.' }
    ]
  },
  {
    id: 'tasty-toasty',
    name: 'Tasty Toasty (4pcs)',
    description: 'A delightful assortment of four perfectly toasted bite-sized pieces, each topped with flavorful ingredients.',
    items: [
      { name: 'Avocado Toast', description: 'Creamy ripe avocado smashed over perfectly toasted bread, seasoned with a hint of lemon and sea salt.' },
      { name: 'Bruchetta', description: 'Crisp toasted bread topped with a vibrant mix of diced tomatoes, garlic, fresh basil, and a drizzle of olive oil.' },
      { name: 'Mushroom Bruchetta', description: 'Sautéed mushrooms seasoned with herbs, piled high on toasted bread, creating a warm, earthy, and savory delight.' },
      { name: 'Chilly Cheese Toast', description: 'Golden toasted bread loaded with melted cheese and a spicy chili kick.' },
      { name: 'Garlic Bread', description: 'Classic toasted bread brushed with garlic butter and herbs, baked to golden perfection.' },
      { name: 'Cheese Garlic Bread', description: 'Garlic bread topped with a generous layer of melted cheese, baked until bubbly and golden.' }
    ]
  },
  {
    id: 'pannini-subway',
    name: 'Pannini/Subway',
    description: 'Toasted sandwiches made with soft or crusty bread, filled with fresh vegetables, cheeses, and flavorful spreads.',
    items: [
      { name: 'Veg Cheesy Jalapeno', description: 'A toasty delight loaded with melted cheese, spicy jalapenos, and fresh veggies. Crispy on the outside, creamy and fiery on the inside.' },
      { name: 'Veg Cheesy Mexican', description: 'Bursting with fresh veggies, melted cheese, and bold Mexican spices, this panini delivers a fiesta of flavors.' },
      { name: 'Cheesy Paneer Tikka', description: 'Smoky, spiced paneer tikka cubes paired with melted cheese and crisp vegetables, grilled to a perfect crisp.' },
      { name: 'Creamy Cajun Panini', description: 'A rich, spicy Cajun-inspired filling combined with creamy sauces and fresh veggies, grilled to perfection.' },
      { name: 'Jamaican Jerk Panini', description: 'Tender, marinated jerk-seasoned filling with vibrant spices, fresh veggies, and a touch of tangy sauce, grilled to a perfect crunch.' }
    ]
  },
  {
    id: 'nachos',
    name: 'Nachos',
    description: 'A crunchy and flavorful snack made with crispy tortilla chips, generously topped with melted cheese and zesty sauces.',
    items: [
      { name: 'Cheesy Nachos', description: 'A mountain of crisp tortilla chips smothered in gooey melted cheese, served with tangy salsa and creamy dip.' },
      { name: 'Loaded Nachos', description: 'A bold and satisfying tower of crispy tortilla chips layered with gooey melted cheese, spicy jalapeños, tangy salsa, seasoned beans, and fresh veggies.' },
      { name: 'Zussioberry Spl Fiesta Nachos', description: 'Our signature nachos topped with a fiesta of flavors — exotic veggies, secret house sauces, jalapeños, spiced beans, and a cheesy drizzle.' }
    ]
  },
  {
    id: 'burger',
    name: 'Burger',
    description: 'A hearty and flavorful sandwich made with a savory patty placed inside a soft bun and layered with fresh vegetables and sauces.',
    items: [
      { name: 'Veg Patty Burger', description: 'A crisp, golden-fried vegetable patty layered with fresh lettuce, onions, tomatoes, and creamy mayo, all stacked between toasted buns.' },
      { name: 'Paneer Tikka Burger', description: 'Juicy paneer tikka chunks marinated in bold Indian spices, grilled to perfection, and topped with crunchy veggies and creamy sauce.' },
      { name: 'Hot N Spicy Burger', description: 'Turn up the heat with this fiery combo of a spicy veg patty, jalapeños, zesty sauces, and crisp veggies.' },
      { name: 'Veg Pesto Burger', description: 'A fresh twist featuring a hearty veg patty topped with aromatic basil pesto, melted cheese, and garden-fresh veggies.' }
    ]
  },
  {
    id: 'starter',
    name: 'Starter',
    description: 'Appetizing small plates served at the beginning of a meal to awaken the taste buds.',
    items: [
      { name: 'Mexican Paneer', description: 'Soft, juicy paneer cubes tossed in bold Mexican spices, sautéed with bell peppers, onions, and herbs.' },
      { name: 'Veg Crispy', description: 'A crunchy mix of batter-fried vegetables tossed in a spicy Indo-Chinese sauce.' },
      { name: 'Paneer Crispy', description: 'Crisp-fried paneer bites tossed in a flavorful blend of chili sauce, garlic, and spring onions.' },
      { name: 'Teriyaki Paneer', description: 'Grilled paneer cubes glazed in a rich and glossy teriyaki sauce, served with sautéed vegetables.' },
      { name: 'Honey Chilli Potato', description: 'Crispy golden potato fingers coated in a sweet and spicy honey-chilli glaze.' }
    ]
  },
  {
    id: 'pasta',
    name: 'Pasta',
    description: 'A staple food dish made from unleavened dough, formed into various shapes and served with rich sauces and toppings.',
    items: [
      { name: 'Rossa Sauce Pasta', description: 'A perfect fusion of creamy Alfredo and tangy tomato sauces, creating a rich, velvety pink sauce tossed with your favorite pasta.' },
      { name: 'Alfredo Pasta', description: 'Classic and creamy! Made with butter, garlic, parmesan, and heavy cream for a luscious white sauce that melts in your mouth.' },
      { name: 'Arrabbiata Pasta', description: 'For the spice lovers! A bold and fiery tomato-based sauce with chili flakes and garlic, delivering a delicious kick.' },
      { name: 'Pesto Pasta', description: 'Fresh basil, parmesan, pine nuts, and olive oil blended into a vibrant green sauce—light, earthy, and full of flavor.' },
      { name: 'Paprika Pasta', description: 'A smoky, mildly spicy twist featuring sweet paprika-infused cream sauce, giving your pasta a unique depth of flavor.' },
      { name: 'Mac n Cheese Pasta', description: 'Creamy, cheesy, and utterly comforting. A classic American favorite with a gourmet twist.' },
      { name: 'Lasagna Pasta', description: 'Layers of pasta sheets, hearty meat sauce, creamy béchamel, and melted cheese baked to golden perfection.' }
    ]
  },
  {
    id: 'main-course',
    name: 'Main Course',
    description: 'Hearty and satisfying dishes that serve as the highlight of your meal, featuring fresh ingredients and bold flavors.',
    items: [
      { name: 'Spinach Rice with Paprika Sauce', description: 'Fragrant basmati rice cooked to fluffy perfection and blended with fresh, vibrant spinach. Served with a smoky, mildly spicy paprika sauce.' },
      { name: 'Silicin Rice with Coconut Curry', description: 'Aromatic Silicin rice paired with a creamy, fragrant coconut curry infused with exotic spices and hints of ginger and turmeric.' },
      { name: 'Crispy Paneer Bowl', description: 'Golden-fried paneer cubes, crispy on the outside and soft inside, served on a bed of fresh greens, tossed with crunchy veggies and a tangy dressing.' },
      { name: 'Veg Bowl', description: 'A wholesome medley of seasonal vegetables, roasted or sautéed to perfection, served over a base of aromatic rice or grains.' }
    ]
  },
  {
    id: 'burrito-bowl-wraps',
    name: 'Burrito Bowl/Wraps',
    description: 'Delicious, customizable meals packed with fresh veggies, proteins, and flavorful sauces—perfectly wrapped or served in a bowl.',
    items: [
      { name: 'Mediterranean Falafel Bowl', description: 'Crispy, golden falafel nestled on a bed of fluffy couscous or rice, paired with fresh cucumbers, cherry tomatoes, kalamata olives, and creamy tahini sauce.' },
      { name: 'Chipotle Paneer Bowl', description: 'Smoky chipotle-marinated paneer cubes grilled to perfection, served with cilantro-lime rice, black beans, corn salsa, and zesty chipotle dressing.' },
      { name: 'Golden Avocado Bowl', description: 'Creamy avocado slices, roasted sweet potatoes, quinoa, and crunchy greens come together in this nutrient-packed bowl.' },
      { name: 'Mexican Burrito Wraps', description: 'Soft tortillas wrapped around seasoned beans, rice, grilled veggies, and your choice of protein, topped with fresh salsa, guacamole, and sour cream.' }
    ]
  },
  {
    id: 'salads',
    name: 'Salads',
    description: 'Fresh, crisp, and vibrant—our salads combine seasonal greens, colorful veggies, and flavorful dressings.',
    items: [
      { name: 'Caesar Salad', description: 'Crisp romaine lettuce tossed with creamy Caesar dressing, crunchy croutons, and freshly shaved Parmesan cheese.' },
      { name: 'Greek Salad', description: 'A refreshing mix of ripe tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese, drizzled with extra virgin olive oil.' },
      { name: 'Italian Salad', description: 'A vibrant blend of mixed greens, cherry tomatoes, roasted peppers, artichoke hearts, and mozzarella, tossed in tangy balsamic vinaick.' },
      { name: 'Mediterranean Salad', description: 'Fresh cucumbers, tomatoes, red onions, olives, and crumbled feta served over mixed greens, accented with lemon juice and aromatic herbs.' }
    ]
  },
  {
    id: 'thin-crust-pizza',
    name: 'Thin Crust Pizza',
    description: 'Pizza characterized by a crispy, flat, and thin base, allowing the flavors of toppings and sauce to shine.',
    items: [
      { name: 'Classic Margherita', description: 'A timeless Italian favorite with tangy San Marzano tomato sauce, fresh mozzarella, and fragrant basil leaves.' },
      { name: 'Farm To Table', description: 'A wholesome celebration of fresh, locally sourced ingredients with seasonal farm-fresh vegetables and creamy mozzarella.' },
      { name: 'Paneer Tikka Fusion', description: 'Crisp thin crust layered with spicy tikka sauce, smoky paneer tikka chunks, capsicum, onions, and mozzarella cheese.' },
      { name: 'Royal Paneer Makkhani', description: 'Crisp thin crust topped with rich, buttery makhani sauce, marinated paneer cubes, and bell peppers.' },
      { name: 'Quattro Formaggi', description: 'This Italian classic features a delicate thin crust layered with a rich blend of four premium cheeses.' }
    ]
  },
  {
    id: 'thai-curry',
    name: 'Thai Curry',
    description: 'Flavorful and aromatic dishes from Thailand, made with spices, herbs, and curry paste simmered with coconut milk.',
    items: [
      { name: 'Creamy Thai Curry Rice', description: 'A comforting bowl of fragrant jasmine rice served with rich and velvety Thai curry, infused with coconut milk, lemongrass, and Thai herbs.' },
      { name: 'Red Thai Curry Rice', description: 'A bold and fiery Thai classic! Fragrant jasmine rice topped with rich red Thai curry simmered in coconut milk and infused with red chilies and lemongrass.' }
    ]
  }
];

  const [activeCategory, setActiveCategory] = useState('savoury-selections');

  // Component for a single food item
  const FoodItem = ({ title, description, imageUrl }) => (
    <div className="flex items-start gap-4 sm:gap-6 p-4 md:p-6 border-b border-gray-100 last:border-b-0 lg:border-none">
      {/* Image Container */}
      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl overflow-hidden border border-gray-100">
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

  // Component for menu items with same design as food
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

  // Special component for Savoury Selections with images
  const SavouryItemCard = ({ name, description, imageUrl }) => (
    <div className="flex items-start gap-4 sm:gap-6 p-4 md:p-6 border-b border-gray-100 last:border-b-0 lg:border-none">
      {/* Small Square Image Container */}
      {/* <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={96}
          height={96}
          className="object-cover w-full h-full transform transition duration-300"
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
            Taste the Full Spectrum of Zussioberry
          </h2>
          <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed font-[para] max-w-xl mx-auto text-center">
            We don't just serve food—we create experiences.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <div className="bg-white min-h-screen overflow-hidden">

        {/* Food Section with New Design */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Food Heading */}
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-green-600 mb-4">
                Savoury Selections
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8">
                Explore our diverse menu of delicious and satisfying food options made with fresh ingredients
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
              {activeCategory === 'savoury-selections' ? (
                /* Savoury Selections Grid - Show all menu headings with images */
                <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6">
                    {menuCategories
                      .find(cat => cat.id === 'savoury-selections')
                      ?.items.map((item, index) => (
                        <SavouryItemCard
                          key={index}
                          name={item.name}
                          description={item.description}
                          imageUrl={item.imageUrl}
                        />
                      ))}
                  </div>
                </div>
              ) : (
                /* Menu Items Grid with same design as food */
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

export default MenuPage