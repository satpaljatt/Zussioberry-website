


'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

const MenuPage = () => {
  // Beverages data with descriptions and images
  const beveragesData = [
  {
    title: "Refreshing Beverages",
    description: "A wide variety of fresh fruit juices, milkshakes, smoothies, and traditional drinks to quench your thirst and refresh your senses.",
    imageUrl: "/assets/menu/beverages/beverages/1.JPG",
  },
  {
    title: "Fresh Fruit Juices",
    description: "Natural, refreshing beverages made by extracting liquid from raw, ripe fruits without artificial additives or preservatives.",
    imageUrl: "/assets/menu/beverages/beverages/2.JPG",
  },
  {
    title: "Milkshakes & Creamy Delights",
    description: "Rich, creamy beverages blending fresh fruits with milk, ice cream, and premium ingredients for indulgent treats.",
    imageUrl: "/assets/menu/beverages/beverages/3.JPG",
  },
  {
    title: "Smoothies & Wellness Shots",
    description: "Nutrient-packed smoothies and concentrated wellness shots for health boosts and refreshing experiences.",
    imageUrl: "/assets/menu/beverages/beverages/4.jpg",
  },
  {
    title: "Traditional & Fusion Drinks",
    description: "Authentic faloodas, mojitos, and innovative fusion beverages combining traditional flavors with modern twists.",
    imageUrl: "/assets/menu/beverages/beverages/5.jpg",
  },
  {
    title: "Healthy & Specialty Juices",
    description: "Vegetable juices, immunity boosters, and specialty blends designed for health benefits and unique flavor experiences.",
    imageUrl: "/assets/menu/beverages/beverages/6.JPG",
  }
];

// Menu categories data with proper descriptions
const menuCategories = [
  {
    id: 'refreshing-beverages',
    name: 'Refreshing Beverages',
    description: 'A wide variety of fresh fruit juices, milkshakes, smoothies, and traditional drinks to quench your thirst and refresh your senses.',
    imageUrl: "/assets/menu/beverages/beverages/1.JPG",
    items: [
      { 
        name: 'Fresh Fruit Juices', 
        description: 'Natural, refreshing beverages made by extracting liquid from raw, ripe fruits without artificial additives or preservatives.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Fruit Milkshake', 
        description: 'A rich, creamy beverage made by blending fresh fruits with chilled milk and often a touch of sweetener or ice cream.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Flavour Icecream Mix Milkshake', 
        description: 'A thick, creamy, and indulgent beverage made by blending flavored syrups or ingredients with milk and scoops of ice cream.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Dry Fruit Milkshake', 
        description: 'A nutritious, creamy beverage made by blending assorted dry fruits with chilled milk and often ice cream or natural sweeteners.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Fruit Smoothie', 
        description: 'A thick, creamy, and nutritious beverage made by blending fresh or frozen fruits with a liquid base such as milk, yogurt, or juice.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Desserts', 
        description: 'Fruit-Based Desserts with Milk & Ice Cream are delightful treats that combine natural sweetness with richness of milk and creaminess of ice cream.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Fruit Cream', 
        description: 'A rich, chilled dessert made by folding together fresh seasonal fruits with lightly sweetened whipped cream or fresh cream.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Fruit Shots', 
        description: 'Small, concentrated servings of fresh fruit juices or blends, typically served in shot glasses for quick bursts of flavor and nutrients.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Mojito', 
        description: 'Classic Cuban mocktail known for its refreshing, minty, and citrusy flavor profile, perfect for thirst-quenching.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Falooda', 
        description: 'A rich and indulgent Indian-Persian dessert drink, traditionally made with layered combinations of milkshake, vermicelli, nuts, and kulfi.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Vegetable Juices', 
        description: 'Nutritious beverages made by extracting liquid from fresh vegetables, often consumed for health benefits and natural detoxifying properties.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Immunity Booster', 
        description: 'Nutrient-rich beverages made from fruits, vegetables, and natural herbs specifically chosen to strengthen the immune system and promote wellness.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      },
      { 
        name: 'Fruit Salad', 
        description: 'Refreshing and colorful dish made by combining a variety of fresh, ripe fruits cut into bite-sized pieces, served chilled.',
        imageUrl: "https://theme-assets.getbento.com/sensei/865a44e.sensei/assets/images/catering-item-placeholder-704x520.png" 
      }
    ]
  },
  {
    id: 'fresh-fruit-juices',
    name: 'Fresh Fruit Juices',
    description: 'Fresh Fruit Juice is a natural, refreshing beverage made by extracting the liquid from raw, ripe fruits without artificial additives or preservatives.',
    items: [
      { name: 'Mosambi', description: 'A cool, refreshing blend of freshly squeezed sweet lime (mosambi) juice.' },
      { name: 'Orange', description: 'A zesty and refreshing glass of 100% freshly squeezed orange juice.' },
      { name: 'Pineapple', description: 'A tropical delight! Freshly squeezed pineapple juice.' },
      { name: 'Watermelon', description: 'A super-refreshing, naturally sweet juice made from ripe, juicy watermelons.' },
      { name: 'Pomegranate', description: 'A vibrant, antioxidant-packed juice made from freshly pressed pomegranates.' },
      { name: 'Kiwi', description: 'A tangy and refreshing juice made from fresh, juicy kiwis.' },
      { name: 'Papaya', description: 'A smooth, tropical drink made from ripe, juicy papayas.' },
      { name: 'Black Grapes', description: 'A rich and refreshing juice made from ripe, sweet black grapes.' },
      { name: 'Mix Fruit', description: 'A vibrant blend of nature\'s finest fruits—juicy oranges, ripe apples, tangy pineapples, and refreshing tropical fruits.' },
      { name: 'Fresh Lime Water/Soda', description: 'A simple, yet refreshing drink made with freshly squeezed lime and chilled water or soda.' },
      { name: 'Summer\'s Kiss', description: 'A unique and refreshing fusion of earthy khus, zesty lemon, and sweet mosambi.' },
      { name: 'Green Haze', description: 'A refreshing blend of tangy kiwi and sweet, fragrant lychee.' },
      { name: 'Autumn Rose', description: 'A luscious fusion of rich, juicy black grapes and bold, ruby-red pomegranate.' },
      { name: 'Spring Valley', description: 'A tropical delight that combines the creamy sweetness of ripe mangoes with the juicy, tangy burst of fresh strawberries.' },
      { name: 'Fragrant Breeze', description: 'A crisp, refreshing blend of sweet, juicy apples and fragrant, tropical lychee.' },
      { name: 'Drizzle Drops', description: 'The exotic sweetness of lychee, the tangy brightness of fresh pineapple, and the zesty kick of orange come together.' },
      { name: 'Dark Temptation', description: 'A naturally sweet and tangy juice made from the exotic, dark purple Jamun fruit, also known as Indian blackberry.' },
      { name: 'Coconut and Lychee', description: 'A tropical fusion of creamy coconut and fragrant lychee.' },
      { name: 'Alphonso Mango', description: 'Made from the world-renowned Alphonso mangoes, this juice is a rich, velvety treat that captures the essence of summer in every sip.' }
    ]
  },
  {
    id: 'fruit-milkshake',
    name: 'Fruit Milkshake',
    description: 'A rich, creamy beverage made by blending fresh fruits with chilled milk and often a touch of sweetener or ice cream.',
    items: [
      { name: 'Alphonso Mango', description: 'A creamy, indulgent milkshake made with the finest Alphonso mangoes, blended to perfection with smooth, chilled milk.' },
      { name: 'Custard Apple', description: 'A luxuriously creamy milkshake made from ripe custard apple pulp blended with chilled milk.' },
      { name: 'Lychee', description: 'A tender, tropical delight blending the floral sweetness of fresh lychees with creamy, chilled milk.' },
      { name: 'Avocado', description: 'A luxuriously creamy milkshake made using ripe Avocado, blended with chilled milk.' },
      { name: 'Chickoo', description: 'A luxuriously creamy milkshake made using ripe chikoo (sapodilla), blended with chilled milk.' },
      { name: 'Dates and Anjeer', description: 'A luxuriously creamy blend of naturally sweet Medjool dates and tender anjeer (fig), soaked in milk and perfectly blended to velvety smoothness.' },
      { name: 'Strawberry', description: 'A classic favorite made with ripe, juicy strawberries blended with chilled milk and a touch of sweetness.' },
      { name: 'Blueberry', description: 'A delightful, creamy blend of ripe blueberries and chilled milk, lightly sweetened for a naturally fruity indulgence.' },
      { name: 'Banana', description: 'A timeless classic blended to perfection—rich, creamy, and naturally sweet. Ripe bananas and chilled milk.' },
      { name: 'Blackcurrant', description: 'A vibrant and creamy milkshake featuring tangy-sweet black currants fruits blended with chilled milk and optionally a scoop of vanilla ice cream.' }
    ]
  },
  {
    id: 'flavour-icecream-milkshake',
    name: 'Flavour Icecream Mix Milkshake',
    description: 'A thick, creamy, and indulgent beverage made by blending flavored syrups or ingredients with milk and scoops of ice cream.',
    items: [
      { name: 'Kesar Pista', description: 'This milkshake combines the aromatic essence of saffron (kesar) and green cardamom (elaichi) with the smoothness of vanilla ice cream.' },
      { name: 'Blackcurrant', description: 'A luxurious fusion of tangy black currants and creamy vanilla ice cream, blended to perfection with chilled milk.' },
      { name: 'Butterscotch', description: 'A luxurious fusion of rich butterscotch flavor and creamy vanilla ice cream, blended to perfection with chilled milk.' },
      { name: 'Rose', description: 'A luxurious fusion of fragrant rose syrup and creamy vanilla ice cream, blended to perfection with chilled milk.' },
      { name: 'Vanilla', description: 'A luxurious fusion of vanilla syrup and creamy vanilla ice cream, blended with chilled milk.' },
      { name: 'Strawberry', description: 'A delightful fusion of strawberries crush and rich vanilla ice cream, blended with chilled milk.' },
      { name: 'Pista', description: 'A luxurious fusion of pistachios syrup and creamy vanilla ice cream, blended with chilled milk.' },
      { name: 'Orange', description: 'A delightful fusion of fresh orange crush and creamy vanilla ice cream, blended with chilled milk.' },
      { name: 'Pineapple', description: 'A tangy sweetness of ripe pineapple with the creamy richness of vanilla ice cream, blended seamlessly with chilled milk.' },
      { name: 'Chocolate', description: 'A decadent blend of velvety chocolate ice cream and chilled milk, swirled together with ice cream.' }
    ]
  },
  {
    id: 'dry-fruit-milkshake',
    name: 'Dry Fruit Milkshake',
    description: 'A nutritious, creamy beverage made by blending assorted dry fruits with chilled milk and often ice cream or natural sweeteners.',
    items: [
      { name: 'Sitaphal Kaju Pista', description: 'A luxurious fusion of creamy sitaphal pulp and a medley of nutrient-rich dry fruits, blended with chilled milk to create a velvety, indulgent treat.' },
      { name: 'Kaju Anjeer', description: 'A luxurious fusion of creamy cashews and sweet figs, blended with a medley of nutrient-rich dry fruits and chilled milk to create a velvety treat.' },
      { name: 'Blueberry Banana Dates Walnut', description: 'A wholesome blend of blueberries, creamy banana, naturally sweet dates, and crunchy walnuts, all mixed with chilled milk to create a velvety, indulgent treat.' },
      { name: 'Chickoo Roasted Badam', description: 'A delightful blend of creamy chikoo and roasted almonds, mixed with chilled milk to create a velvety, indulgent treat.' },
      { name: 'Mango Pista Malai', description: 'A luxurious blend of ripe Alphonso mangoes, creamy pistachios, and rich malai, mixed with chilled milk to create a velvety, indulgent treat.' },
      { name: 'Strawberry Rose Badam', description: 'A luxurious blend of ripe strawberries, aromatic rose essence, and creamy almonds, mixed with chilled milk to create a velvety, indulgent treat.' },
      { name: 'Lychee Coconut Vanilla', description: 'A tropical fusion of sweet lychees, creamy coconut, and aromatic vanilla, blended with chilled milk to create a velvety, indulgent treat.' },
      { name: 'Mulberry Blueberry Strawberry', description: 'A vibrant blend of sweet mulberries, juicy blueberries, and ripe strawberries, mixed with chilled milk to create a velvety, indulgent treat.' }
    ]
  },
  {
    id: 'fruit-smoothie',
    name: 'Fruit Smoothie',
    description: 'A thick, creamy, and nutritious beverage made by blending fresh or frozen fruits with a liquid base such as milk, yogurt, or juice.',
    items: [
      { name: 'Mango Mist', description: 'A surreal mix of mango and strawberry blended with fresh yogurt.' },
      { name: 'Pebbles Ripples', description: 'A powerhouse of bold berry flavors! This vibrant smoothie blends juicy blackcurrant, sweet strawberry, rich mulberry, and tangy blueberry.' },
      { name: 'Tropical Green', description: 'A rich and wholesome smoothie crafted for true indulgence! Creamy avocado, sweet banana, and nutty pistachios come together.' },
      { name: 'Scarlet Dew', description: 'An irresistible blend of fresh such as lychee, strawberry, banana and vanilla ice cream.' },
      { name: 'Cool Embrace', description: 'A refreshing symphony of tropical fruits blended with yogurt.' },
      { name: 'Tropical Delight', description: 'A vibrant fusion of tropical favorites—ripe mango, juicy pineapple, creamy banana, and hydrating coconut milk.' },
      { name: 'Berry Blossom', description: 'This smoothie combines the rich tartness of mulberry, raspberry, and blueberry with the creamy sweetness of banana.' }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Fruit-Based Desserts with Milk & Ice Cream are delightful treats that combine natural sweetness with richness of milk and creaminess of ice cream.',
    items: [
      { name: 'Orange Tulip', description: 'Zesty Orange crush meets cream vanilla ice cream and chilled milk in this nostalgic, citrusy milkshake.' },
      { name: 'Butterscotch Temptress', description: 'A luscious blend of rich butterscotch syrup and chilled milk, creating a smooth, velvety crush. Topped with a scoop of creamy vanilla ice cream.' },
      { name: 'Early Dawn', description: 'A refreshing delight full of mango bliss.' },
      { name: 'Velvet Pleasure', description: 'A sinuous blend of ice cream milk and fresh strawberries.' },
      { name: 'Nature\'s Symphony', description: 'The goodness of fig and dates along with vanilla ice cream come together in a mesmerizing blend.' },
      { name: 'Beach Shack', description: 'A creamy, indulgent blend of ripe chickoo fruit and silky milk, topped with a scoop of velvety vanilla ice cream.' },
      { name: 'Tropical Delight', description: 'A rich and creamy blend of ripe avocado and sweet banana, whipped together with smooth vanilla ice cream and chilled milk.' },
      { name: 'Glacier Lake', description: 'Enjoy the goodness of juicy lychees along with ice cream.' },
      { name: 'Snowy Heaven', description: 'Relish this creamy melange of Custard Apple, chilled to perfection.' },
      { name: 'Enchanting Fantasy', description: 'This mesmerizing wonder full of strawberries, mangoes and custard apple is sure to take your senses on one magical journey.' },
      { name: 'Hidden Forest', description: 'Discover the wonders of its rich layers one at a time to reveal joys of custard apple, strawberries, mangoes, chocolate and vanilla!' },
      { name: 'Kiwi Caress', description: 'Indulge in this exotic mix of kiwi and ice-cream for an experience which is almost sinful!' },
      { name: 'Blue Magic', description: 'An irresistible blend of blueberries and ice cream sure to leave you in a trance.' },
      { name: 'Violet Passion', description: 'An amazing drink made with frozen blackcurrant and ice cream and topped with some more, now, if only indulgence was a virtue!' }
    ]
  },
  {
    id: 'fruit-cream',
    name: 'Fruit Cream',
    description: 'A rich, chilled dessert made by folding together fresh seasonal fruits with lightly sweetened whipped cream or fresh cream.',
    items: [
      { name: 'Mulberry Fruit Cream – Lush & Velvety Delight', description: 'This creamy indulgence features rich, whipped fresh cream blended with juicy, antioxidant-rich mulberries.' },
      { name: 'Kiwi Fruit Cream – Tangy & Creamy Indulgence', description: 'A refreshing blend of tropical zest of Kiwi fruit and silky smoothness of fresh cream and vanilla ice cream.' },
      { name: 'Strawberry Fruit Cream – Sweet & Creamy Bliss', description: 'A timeless dessert bursting with strawberry fruity freshness and creamy indulgence in every spoonful.' },
      { name: 'Alphonso Mango Fruit Cream – Royal & Creamy Delight', description: 'Experience the king of fruits in its creamiest form!' },
      { name: 'Blueberry Fruit Cream – Lush & Berrylicious Treat', description: 'A creamy delight with a burst of blueberry bliss!' }
    ]
  },
  {
    id: 'fruit-shots',
    name: 'Fruit Shots',
    description: 'Small, concentrated servings of fresh fruit juices or blends, typically served in shot glasses for quick bursts of flavor and nutrients.',
    items: [
      { name: 'Jamun Fruit Shot – Tangy & Tempting Boost', description: 'A bold burst of desi flavor fruit shot made from fresh jamuns — it\'s a zesty, refreshing shot that leaves a lingering twist on your tongue!' },
      { name: 'Guava Chilli Fruit Shot – Spicy & Sweet Kick', description: 'Sweet, pulpy goodness of ripe guava with a zesty kick of chilli and tangy lime.' },
      { name: 'Amla Ginger Lemon Shot – Zesty Immunity Boost', description: 'The tang of fresh amla (Indian gooseberry), the warm spice of ginger, and the citrusy zing of lemon.' },
      { name: 'Mix Berry Shot – Berrylicious Burst of Goodness', description: 'A blend strawberries, blueberries, blackberries, and raspberries into a tangy-sweet explosion of flavor.' }
    ]
  },
  {
    id: 'mojito',
    name: 'Mojito',
    description: 'Classic Cuban mocktail known for its refreshing, minty, and citrusy flavor profile, perfect for thirst-quenching.',
    items: [
      { name: 'Mint Classic Mojito – Cool & Refreshing Sip', description: 'This classic mojito blends fresh mint leaves, zesty lime juice, and a touch of sweetness, topped with sparkling soda and plenty of ice.' },
      { name: 'Green Apple Mojito – Crisp & Tangy Refresher', description: 'The tartness of green apple with fresh mint, lime juice, and a hint of sweetness, all topped with sparkling soda and crushed ice.' },
      { name: 'Cranberry Mojito – Bold & Bubbly Twist', description: 'This refreshing mojito combines tangy cranberry juice with fresh mint leaves, zesty lime, all topped with sparkling soda and ice.' },
      { name: 'Blue Curacoa Mojito – Tropical & Electric Refreshment', description: 'This striking mojito blends zesty lime, fresh mint, and a splash of fizzy soda with blue Curacao syrup and crushed ice.' }
    ]
  },
  {
    id: 'falooda',
    name: 'Falooda',
    description: 'A rich and indulgent Indian-Persian dessert drink, traditionally made with layered combinations of milkshake, vermicelli, nuts, and kulfi.',
    items: [
      { name: 'Butterscotch Falooda – Rich & Regal Delight', description: 'Butterscotch Milkshake layered with silky vermicelli, crunchy nuts, sweet basil seeds, and butterscotch flavored syrup with kulfi.' },
      { name: 'Mango Falooda - Tropical Royal Treat', description: 'Mango milkshake layered with silky vermicelli, sweet basil seeds, and crunchy nuts — all topped with rich, creamy kulfi and a swirl of luscious mango.' },
      { name: 'Blackcurrant Falooda - Bold & Berrylicious Indulgence', description: 'Blackcurrant Milkshake with creamy kulfi, falooda sev, sweet basil seeds, and crunchy nuts, topped with rich kulfi.' },
      { name: 'Strawberry Falooda - Sweet & Creamy Bliss', description: 'Strawberry Milkshake layered with silky vermicelli, basil seeds, and crunchy nuts, all crowned with a creamy scoop of kulfi.' },
      { name: 'Chocolate Falooda - Decadent Delight in a Glass', description: 'Chocolate Milkshake with soft vermicelli, basil seeds, and crunchy nuts. Topped with a scoop of kulfi.' },
      { name: 'Royal Malai Falooda - Timeless Elegance in a Glass', description: 'Rose Milkshake layered with vermicelli, sweet basil seeds, crunchy nuts, and rich kulfi. Topped with rose syrup and a scoop of creamy kulfi.' },
      { name: 'Kesar Pista Falooda - Rich & Aromatic Fusion', description: 'Saffron (kesar) and pistachio Milkshake, layered with pista syrup, soft vermicelli, basil seeds, and crunchy nuts. Topped with rich kulfi.' },
      { name: 'Flamingo Pink – Fruity Fusion Fiesta', description: 'Mango and strawberry milkshake layered with strawberry syrup, soft vermicelli, sweet basil seeds, and crunchy nuts, topped with rich kulfi.' },
      { name: 'Riverside Rain - Creamy & Exotic Indulgence', description: 'Custard Apple Milkshake Layered with pista syrup, soft vermicelli, sweet basil seeds, and crunchy nuts, topped with rich kulfi.' }
    ]
  },
  {
    id: 'vegetable-juices',
    name: 'Vegetable Juices',
    description: 'Nutritious beverages made by extracting liquid from fresh vegetables, often consumed for health benefits and natural detoxifying properties.',
    items: [
      { name: 'Carrot', description: 'Simple, sweet, and packed with goodness! Made from freshly juiced carrots.' },
      { name: 'Beetroot', description: 'Freshly pressed beetroots for natural energy and vitality.' },
      { name: 'Carrot Apple Orange', description: 'The blend of natural sweetness of carrots, crisp apples, and zesty oranges.' },
      { name: 'Green Juice', description: 'Green juice blends spinach, cucumber, celery, mint, and lemon.' },
      { name: 'Lean Juice', description: 'A refreshing mix of cucumber, celery, lemon, ginger, and green apple.' },
      { name: 'Happy Juice', description: 'The vibrant mix of carrots, oranges, beetroot, and a hint of ginger.' },
      { name: 'Beachy Greens', description: 'The coastal-inspired green juice blends spinach, cucumber, pineapple, mint, and lemon.' },
      { name: 'Detox', description: 'A revitalizing juice combines cucumber, celery, green apple, lemon, and ginger.' },
      { name: 'Minty Fresh', description: 'Cooling juice combines mint, cucumber, lemon, and a touch of apple.' },
      { name: 'Dragon Punch', description: 'Dragon fruit blend with beetroot, carrot, and a splash of lemon for a bold punch of flavor.' }
    ]
  },
  {
    id: 'immunity-booster',
    name: 'Immunity Booster',
    description: 'Nutrient-rich beverages made from fruits, vegetables, and natural herbs specifically chosen to strengthen the immune system and promote wellness.',
    items: [
      { name: 'Flu Fighter', description: 'Packed with the power of fresh carrots, beetroot, ginger, turmeric, and lemon.' },
      { name: 'Stress Free', description: 'Soothing blend of fresh spinach, cucumber, mint, celery, and a touch of lemon.' },
      { name: 'Immunity Enhancer', description: 'A powerful blend of fresh amla, spinach, carrot, ginger, and lemon.' },
      { name: 'Smile Booster', description: 'Crafted with fresh oranges, carrots, turmeric, and a dash of ginger.' },
      { name: 'Hangover Helper', description: 'A refreshing blend of cucumber, mint, lemon, ginger, and coconut water.' },
      { name: 'Gout Specialist', description: 'This soothing juice combines celery, cucumber, bitter gourd, lemon, and a touch of turmeric.' }
    ]
  },
  {
    id: 'fruit-salad',
    name: 'Fruit Salad',
    description: 'Refreshing and colorful dish made by combining a variety of fresh, ripe fruits cut into bite-sized pieces, served chilled.',
    items: [
      { name: 'Fruit Salad', description: 'A refreshing combination of seasonal fresh fruits cut into perfect bite-sized pieces.' },
      { name: 'Exotic Fruit Salad', description: 'Premium exotic fruits combined for a luxurious and refreshing fruit experience.' },
      { name: 'Fruit Plate with Vanilla Ice Cream', description: 'Fresh fruit assortment served with a scoop of creamy vanilla ice cream for the perfect dessert.' }
    ]
  }
];

  const [activeCategory, setActiveCategory] = useState('refreshing-beverages');

  // Component for a single beverage item
  const BeverageItem = ({ title, description, imageUrl }) => (
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

  // Updated MenuItemCard without images
  const MenuItemCard = ({ name, price, description }) => (
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

  // Special component for Refreshing Beverages with images
  const RefreshingBeverageCard = ({ name, description, imageUrl }) => (
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
            Taste the Full Spectrum of Zussioberry
          </h2>
          <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed font-[para] max-w-xl mx-auto text-center">
            We don't just serve food—we create experiences.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <div className="bg-white min-h-screen overflow-hidden">

        {/* Beverages Section with New Design */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Beverages Heading */}
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-green-600 mb-4">
               Refreshing Beverages
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8">
                Discover our wide range of refreshing and delicious beverages crafted to perfection
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
              {activeCategory === 'refreshing-beverages' ? (
                /* Refreshing Beverages Grid - Show all beverage headings with images */
                <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6">
                    {menuCategories
                      .find(cat => cat.id === 'refreshing-beverages')
                      ?.items.map((item, index) => (
                        <RefreshingBeverageCard
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