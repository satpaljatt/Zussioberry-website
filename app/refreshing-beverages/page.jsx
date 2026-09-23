'use client';
import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

// Reusable SVG Splash Backdrop Component with satellite droplets (Reference Design)
const SplashBackdrop = ({ color = '#16a34a', variant = 0 }) => {
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

// All Category Data with images, prices, descriptions, calories, and splash colors
const menuCategories = [
  {
    id: 'refreshing-beverages',
    name: 'Refreshing Beverages',
    description: 'A wide variety of fresh fruit juices, milkshakes, smoothies, and traditional drinks to quench your thirst and refresh your senses.',
    items: [
      {
        name: 'Fresh Fruit Juices',
        targetCategoryId: 'fresh-fruit-juices',
        price: 'From ₹99',
        calories: '90 | 140 cal',
        description: 'Natural, refreshing juices pressed from raw, ripe fruits with no artificial additives or added sugar.',
        imageUrl: '/assets/beverage-add/Fruit juices.png',
        splashColor: '#f97316',
      },
      {
        name: 'Fruit Milkshake',
        targetCategoryId: 'fruit-milkshake',
        price: 'From ₹119',
        calories: '210 | 320 cal',
        description: 'A rich, creamy beverage made by blending fresh handpicked fruits with chilled farm-fresh milk and ice cream.',
        imageUrl: '/assets/beverage-add/fruit milkshake.png',
        splashColor: '#ea580c',
      },
      {
        name: 'Flavour Icecream Mix',
        targetCategoryId: 'flavour-icecream-milkshake',
        price: 'From ₹129',
        calories: '260 | 380 cal',
        description: 'Thick, creamy shakes crafted by blending gourmet flavored syrups with pure milk and generous scoops of ice cream.',
        imageUrl: '/assets/beverage-add/flavour icecream mix milkshake.png',
        splashColor: '#eab308',
      },
      {
        name: 'Dry Fruit Milkshake',
        targetCategoryId: 'dry-fruit-milkshake',
        price: 'From ₹149',
        calories: '290 | 440 cal',
        description: 'A nutritious, decadent drink blending rich cashews, almonds, pistachios, and figs with creamy chilled milk.',
        imageUrl: '/assets/beverage-add/Dryfruit milkshake.png',
        splashColor: '#b45309',
      },
      {
        name: 'Fruit Smoothie',
        targetCategoryId: 'fruit-smoothie',
        price: 'From ₹139',
        calories: '160 | 250 cal',
        description: 'Wholesome smoothies blending fresh seasonal fruits with Greek yogurt, creamy coconut milk, and natural botanicals.',
        imageUrl: '/assets/beverage-add/fruit smoothie.png',
        splashColor: '#16a34a',
      },
      {
        name: 'Desserts & Bowls',
        targetCategoryId: 'desserts',
        price: 'From ₹159',
        calories: '280 | 420 cal',
        description: 'Fruit-based desserts combined with velvety milk, artisanal ice creams, and crunchy nutty crumbles.',
        imageUrl: '/assets/dessert-add/desserts.png',
        splashColor: '#db2777',
      },
      {
        name: 'Fruit Cream',
        targetCategoryId: 'fruit-cream',
        price: 'From ₹149',
        calories: '220 | 350 cal',
        description: 'A rich, chilled delight prepared by folding seasonal fresh fruits into delicately sweetened whipped cream.',
        imageUrl: '/assets/menu/desserts/frozendesserts/2.jpg',
        splashColor: '#e11d48',
      },
      {
        name: 'Fruit Shots',
        targetCategoryId: 'fruit-shots',
        price: 'From ₹79',
        calories: '40 | 80 cal',
        description: 'Concentrated, spicy-sweet servings of exotic fruit extracts served in shot glasses for instant flavor bursts.',
        imageUrl: '/assets/beverage-add/fruit shots.png',
        splashColor: '#7c3aed',
      },
      {
        name: 'Mojito',
        targetCategoryId: 'mojito',
        price: 'From ₹99',
        calories: '70 | 120 cal',
        description: 'Zesty Cuban-style mocktails bursting with crushed fresh mint, freshly squeezed lime, and fizzy sparkling soda.',
        imageUrl: '/assets/dessert-add/Mojito.png',
        splashColor: '#059669',
      },
      {
        name: 'Falooda',
        targetCategoryId: 'falooda',
        price: 'From ₹159',
        calories: '340 | 520 cal',
        description: 'Royal dessert beverage layered with rich milkshake, silky vermicelli, chia/basil seeds, dry fruits, and kulfi.',
        imageUrl: '/assets/dessert-add/falooda.png',
        splashColor: '#d946ef',
      },
      {
        name: 'Vegetable Juices',
        targetCategoryId: 'vegetable-juices',
        price: 'From ₹89',
        calories: '60 | 110 cal',
        description: 'Pure, detoxifying vegetable juices cold-pressed from fresh carrots, beetroots, cucumbers, and garden greens.',
        imageUrl: '/assets/SmallZussioberry/beverage/beverage-2.jpg',
        splashColor: '#15803d',
      },
      {
        name: 'Immunity Booster',
        targetCategoryId: 'immunity-booster',
        price: 'From ₹99',
        calories: '80 | 130 cal',
        description: 'Nutrient-packed wellness potions infused with amla, ginger, turmeric, and citrus for peak vitality.',
        imageUrl: '/assets/SmallZussioberry/beverage/beverage-5.jpg',
        splashColor: '#ca8a04',
      },
      {
        name: 'Fruit Salad',
        targetCategoryId: 'fruit-salad',
        price: 'From ₹119',
        calories: '110 | 190 cal',
        description: 'Colorful bowls of handpicked, crisp seasonal and exotic fruits served chilled with optional ice cream.',
        imageUrl: '/assets/menu/beverages/beverages/2.JPG',
        splashColor: '#dc2626',
      },
    ],
  },
  {
    id: 'fresh-fruit-juices',
    name: 'Fresh Fruit Juices',
    description: 'Natural, refreshing juices pressed from raw, ripe fruits with no artificial additives or added sugar.',
    items: [
      { name: 'Mosambi', price: '₹99', calories: '90 cal', description: 'A cool, refreshing blend of freshly squeezed sweet lime juice.', imageUrl: '/assets/beverage-add/Fruit juices.png', splashColor: '#ca8a04' },
      { name: 'Orange', price: '₹109', calories: '110 cal', description: 'A zesty and refreshing glass of 100% freshly squeezed orange juice.', imageUrl: '/assets/SmallZussioberry/juice.png', splashColor: '#f97316' },
      { name: 'Pineapple', price: '₹109', calories: '120 cal', description: 'A tropical delight! Freshly squeezed sweet and tangy pineapple juice.', imageUrl: '/assets/SmallZussioberry/beverage/Fruit juice.JPG', splashColor: '#eab308' },
      { name: 'Watermelon', price: '₹89', calories: '75 cal', description: 'A super-refreshing, naturally sweet juice made from ripe, juicy watermelons.', imageUrl: '/assets/SmallZussioberry/juice_img.png', splashColor: '#ef4444' },
      { name: 'Pomegranate', price: '₹139', calories: '135 cal', description: 'A vibrant, antioxidant-packed juice made from freshly pressed pomegranates.', imageUrl: '/assets/menu/beverages/beverages/2.JPG', splashColor: '#b91c1c' },
      { name: 'Kiwi', price: '₹129', calories: '105 cal', description: 'A tangy and refreshing juice made from fresh, juicy green kiwis.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-2.jpg', splashColor: '#65a30d' },
      { name: 'Papaya', price: '₹99', calories: '115 cal', description: 'A smooth, tropical drink made from ripe, juicy papayas.', imageUrl: '/assets/SmallZussioberry/beverage/Juice.jpg', splashColor: '#f97316' },
      { name: 'Black Grapes', price: '₹119', calories: '125 cal', description: 'A rich and refreshing juice made from ripe, sweet black grapes.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-1.jpg', splashColor: '#7c3aed' },
      { name: 'Mix Fruit', price: '₹129', calories: '130 cal', description: 'A vibrant blend of juicy oranges, apples, tangy pineapples, and tropical fruits.', imageUrl: '/assets/beverage-add/Fruit juices.png', splashColor: '#ea580c' },
      { name: 'Fresh Lime Water/Soda', price: '₹69', calories: '35 cal', description: 'Freshly squeezed lime with chilled water or fizzy soda and mint.', imageUrl: '/assets/dessert-add/Mojito.png', splashColor: '#84cc16' },
      { name: 'Summer\'s Kiss', price: '₹139', calories: '110 cal', description: 'A unique fusion of cooling khus, zesty lemon, and sweet mosambi.', imageUrl: '/assets/SmallZussioberry/beverage/smothie.JPG', splashColor: '#10b981' },
      { name: 'Green Haze', price: '₹139', calories: '115 cal', description: 'A refreshing signature blend of tangy kiwi and sweet fragrant lychee.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-6.jpg', splashColor: '#22c55e' },
      { name: 'Autumn Rose', price: '₹149', calories: '140 cal', description: 'A luscious fusion of juicy black grapes and bold ruby-red pomegranate.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-7.jpg', splashColor: '#9333ea' },
      { name: 'Spring Valley', price: '₹149', calories: '150 cal', description: 'Creamy sweetness of ripe mangoes with tangy burst of fresh strawberries.', imageUrl: '/assets/SmallZussioberry/beverage/fruitmilkshake.jpg', splashColor: '#f43f5e' },
      { name: 'Alphonso Mango', price: '₹159', calories: '160 cal', description: 'Made from pure Alphonso mangoes, a velvety royal summer treat.', imageUrl: '/assets/beverage-add/fruit milkshake.png', splashColor: '#eab308' },
    ],
  },
  {
    id: 'fruit-milkshake',
    name: 'Fruit Milkshake',
    description: 'A rich, creamy beverage made by blending fresh handpicked fruits with chilled farm-fresh milk and ice cream.',
    items: [
      { name: 'Alphonso Mango Milkshake', price: '₹149', calories: '280 cal', description: 'A creamy milkshake made with finest Alphonso mangoes blended with chilled milk.', imageUrl: '/assets/beverage-add/fruit milkshake.png', splashColor: '#f59e0b' },
      { name: 'Custard Apple Milkshake', price: '₹169', calories: '310 cal', description: 'Luxuriously creamy shake made from ripe sitaphal pulp and rich milk.', imageUrl: '/assets/SmallZussioberry/milkshake.png', splashColor: '#10b981' },
      { name: 'Lychee Milkshake', price: '₹149', calories: '240 cal', description: 'Tender tropical delight blending floral sweetness of lychees with chilled milk.', imageUrl: '/assets/SmallZussioberry/beverage/Fruit milkshake.JPG', splashColor: '#f43f5e' },
      { name: 'Avocado Milkshake', price: '₹179', calories: '320 cal', description: 'Luxurious velvety milkshake made with Hass avocado, honey, and milk.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-2.jpg', splashColor: '#65a30d' },
      { name: 'Chickoo Milkshake', price: '₹129', calories: '260 cal', description: 'Naturally malty and sweet milkshake made using ripe chikoo and fresh milk.', imageUrl: '/assets/SmallZussioberry/Dryfruit.png', splashColor: '#b45309' },
      { name: 'Dates and Anjeer Milkshake', price: '₹169', calories: '330 cal', description: 'Naturally sweet Medjool dates and tender anjeer soaked and blended to perfection.', imageUrl: '/assets/beverage-add/Dryfruit milkshake.png', splashColor: '#78350f' },
      { name: 'Strawberry Milkshake', price: '₹139', calories: '230 cal', description: 'Classic favorite made with fresh juicy strawberries and velvety milk.', imageUrl: '/assets/SmallZussioberry/beverage/fruitmilkshake.jpg', splashColor: '#ec4899' },
      { name: 'Blueberry Milkshake', price: '₹159', calories: '250 cal', description: 'Delightful blend of ripe blueberries and chilled milk with vanilla touch.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-3.jpg', splashColor: '#6366f1' },
      { name: 'Banana Milkshake', price: '₹119', calories: '270 cal', description: 'Timeless classic blended to velvety smoothness with ripe bananas and cream.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-4.jpg', splashColor: '#facc15' },
      { name: 'Blackcurrant Milkshake', price: '₹149', calories: '260 cal', description: 'Tangy-sweet black currants fruits blended with chilled milk and ice cream.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-7.jpg', splashColor: '#8b5cf6' },
    ],
  },
  {
    id: 'flavour-icecream-milkshake',
    name: 'Flavour Icecream Mix',
    description: 'Thick, creamy shakes crafted by blending gourmet flavored syrups with pure milk and generous scoops of ice cream.',
    items: [
      { name: 'Kesar Pista Milkshake', price: '₹149', calories: '310 cal', description: 'Aromatic saffron and cardamom blended with smooth vanilla ice cream and pistachios.', imageUrl: '/assets/beverage-add/flavour icecream mix milkshake.png', splashColor: '#f59e0b' },
      { name: 'Butterscotch Milkshake', price: '₹139', calories: '320 cal', description: 'Rich butterscotch crunch and creamy vanilla ice cream swirled with milk.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-4.jpg', splashColor: '#d97706' },
      { name: 'Rose Milkshake', price: '₹129', calories: '250 cal', description: 'Fragrant natural rose syrup blended with creamy vanilla ice cream.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-7.jpg', splashColor: '#f43f5e' },
      { name: 'Vanilla Shake', price: '₹119', calories: '240 cal', description: 'Pure Madagascar vanilla notes whipped with whole milk and creamy scoops.', imageUrl: '/assets/SmallZussioberry/milkshake.png', splashColor: '#fbbf24' },
      { name: 'Pista Milkshake', price: '₹139', calories: '290 cal', description: 'Nutty pistachio syrup and vanilla ice cream blended with crushed nuts.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-2.jpg', splashColor: '#10b981' },
      { name: 'Chocolate Shake', price: '₹149', calories: '350 cal', description: 'Decadent Dutch cocoa ice cream swirled with rich chocolate fudge.', imageUrl: '/assets/blogs/CS2.jpg', splashColor: '#451a03' },
    ],
  },
  {
    id: 'dry-fruit-milkshake',
    name: 'Dry Fruit Milkshake',
    description: 'A nutritious, decadent drink blending rich cashews, almonds, pistachios, and figs with creamy chilled milk.',
    items: [
      { name: 'Sitaphal Kaju Pista', price: '₹179', calories: '380 cal', description: 'Creamy sitaphal pulp and royal cashews and pistachios blended with malai.', imageUrl: '/assets/beverage-add/Dryfruit milkshake.png', splashColor: '#d97706' },
      { name: 'Kaju Anjeer Milkshake', price: '₹169', calories: '370 cal', description: 'Creamy cashews and sweet Turkish figs blended with chilled milk.', imageUrl: '/assets/SmallZussioberry/Dryfruit.png', splashColor: '#92400e' },
      { name: 'Blueberry Banana Walnut', price: '₹179', calories: '360 cal', description: 'Wild blueberries, banana, dates, and crunchy California walnuts.', imageUrl: '/assets/SmallZussioberry/beverage/DRYFRUITMILKSHAKE.jpg', splashColor: '#4f46e5' },
      { name: 'Chickoo Roasted Badam', price: '₹159', calories: '340 cal', description: 'Ripe sweet chikoo and slow-roasted almonds whipped into velvety cream.', imageUrl: '/assets/SmallZussioberry/beverage/Fruit milkshake.JPG', splashColor: '#b45309' },
      { name: 'Mango Pista Malai', price: '₹179', calories: '390 cal', description: 'Alphonso mangoes, crushed pistachios, and fresh clotted malai.', imageUrl: '/assets/beverage-add/fruit milkshake.png', splashColor: '#f59e0b' },
      { name: 'Strawberry Rose Badam', price: '₹169', calories: '330 cal', description: 'Ripe strawberries, organic rose essence, and sliced almonds.', imageUrl: '/assets/SmallZussioberry/beverage/fruitmilkshake.jpg', splashColor: '#e11d48' },
    ],
  },
  {
    id: 'fruit-smoothie',
    name: 'Fruit Smoothie',
    description: 'Wholesome smoothies blending fresh seasonal fruits with Greek yogurt, creamy coconut milk, and natural botanicals.',
    items: [
      { name: 'Mango Mist', price: '₹149', calories: '190 cal', description: 'A surreal mix of ripe mango and fresh strawberries blended with yogurt.', imageUrl: '/assets/beverage-add/fruit smoothie.png', splashColor: '#f59e0b' },
      { name: 'Pebbles Ripples', price: '₹169', calories: '210 cal', description: 'Powerhouse of blackcurrant, strawberry, mulberry, and wild blueberries.', imageUrl: '/assets/SmallZussioberry/Smoothie.png', splashColor: '#7c3aed' },
      { name: 'Tropical Green', price: '₹169', calories: '230 cal', description: 'Creamy Hass avocado, banana, and nutty pistachios blended with yogurt.', imageUrl: '/assets/SmallZussioberry/beverage/smothie.JPG', splashColor: '#16a34a' },
      { name: 'Scarlet Dew', price: '₹159', calories: '200 cal', description: 'Irresistible blend of lychee, strawberry, banana, and natural yogurt.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-3.jpg', splashColor: '#f43f5e' },
      { name: 'Tropical Delight', price: '₹159', calories: '220 cal', description: 'Ripe mango, juicy pineapple, banana, and hydrating coconut milk.', imageUrl: '/assets/SmallZussioberry/beverage/Fruit juice.JPG', splashColor: '#f97316' },
      { name: 'Berry Blossom', price: '₹169', calories: '215 cal', description: 'Mulberry, raspberry, blueberry, and banana whipped to perfection.', imageUrl: '/assets/blogs/BerryBS.JPG', splashColor: '#be185d' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts & Bowls',
    description: 'Fruit-based desserts combined with velvety milk, artisanal ice creams, and crunchy nutty crumbles.',
    items: [
      { name: 'Early Dawn', price: '₹169', calories: '320 cal', description: 'A refreshing delight full of rich mango bliss and vanilla swirl.', imageUrl: '/assets/dessert-add/desserts.png', splashColor: '#f59e0b' },
      { name: 'Velvet Pleasure', price: '₹169', calories: '310 cal', description: 'A sinuous blend of fresh cream, farm strawberries, and ice cream.', imageUrl: '/assets/SmallZussioberry/Desserts.png', splashColor: '#ec4899' },
      { name: 'Beach Shack', price: '₹159', calories: '290 cal', description: 'Creamy blend of ripe chickoo, silky milk, and rich vanilla ice cream.', imageUrl: '/assets/menu/desserts/frozendesserts/1.avif', splashColor: '#b45309' },
      { name: 'Glacier Lake', price: '₹169', calories: '280 cal', description: 'Juicy lychees paired with velvety ice cream and sweet fruit compote.', imageUrl: '/assets/menu/desserts/frozendesserts/3.jpeg', splashColor: '#0284c7' },
      { name: 'Snowy Heaven', price: '₹179', calories: '340 cal', description: 'Relish this creamy melange of Custard Apple pulp, chilled to perfection.', imageUrl: '/assets/menu/desserts/frozendesserts/4.jpg', splashColor: '#10b981' },
      { name: 'Enchanting Fantasy', price: '₹189', calories: '370 cal', description: 'Magical wonder featuring strawberries, mangoes, custard apple, and chocolate.', imageUrl: '/assets/menu/desserts/frozendesserts/5.webp', splashColor: '#9333ea' },
    ],
  },
  {
    id: 'fruit-cream',
    name: 'Fruit Cream',
    description: 'A rich, chilled delight prepared by folding seasonal fresh fruits into delicately sweetened whipped cream.',
    items: [
      { name: 'Mulberry Fruit Cream', price: '₹159', calories: '290 cal', description: 'Whipped fresh cream folded with juicy, antioxidant-rich dark mulberries.', imageUrl: '/assets/menu/desserts/frozendesserts/2.jpg', splashColor: '#701a75' },
      { name: 'Kiwi Fruit Cream', price: '₹149', calories: '270 cal', description: 'Tropical zest of Kiwi fruit paired with silky fresh cream and vanilla.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-2.jpg', splashColor: '#65a30d' },
      { name: 'Strawberry Fruit Cream', price: '₹149', calories: '280 cal', description: 'A timeless dessert bursting with sweet strawberry freshness in every spoonful.', imageUrl: '/assets/SmallZussioberry/beverage/fruitmilkshake.jpg', splashColor: '#e11d48' },
      { name: 'Alphonso Mango Cream', price: '₹169', calories: '320 cal', description: 'Experience the king of fruits in its most velvety, royal cream form.', imageUrl: '/assets/beverage-add/fruit milkshake.png', splashColor: '#f59e0b' },
      { name: 'Blueberry Fruit Cream', price: '₹169', calories: '295 cal', description: 'Rich clotted cream with a vibrant burst of wild blueberry compote.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-3.jpg', splashColor: '#4f46e5' },
    ],
  },
  {
    id: 'fruit-shots',
    name: 'Fruit Shots',
    description: 'Concentrated, spicy-sweet servings of exotic fruit extracts served in shot glasses for instant flavor bursts.',
    items: [
      { name: 'Jamun Fruit Shot', price: '₹79', calories: '45 cal', description: 'Bold burst of desi jamun with zesty rock salt for an unforgettable tangy kick.', imageUrl: '/assets/beverage-add/fruit shots.png', splashColor: '#581c87' },
      { name: 'Guava Chilli Shot', price: '₹79', calories: '50 cal', description: 'Sweet pulpy pink guava with a fiery edge of red chilli and tangy lime.', imageUrl: '/assets/SmallZussioberry/juice_img.png', splashColor: '#dc2626' },
      { name: 'Amla Ginger Lemon Shot', price: '₹69', calories: '35 cal', description: 'Vitamin C packed Indian gooseberry, warming ginger, and tart lemon.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-5.jpg', splashColor: '#65a30d' },
      { name: 'Mix Berry Shot', price: '₹89', calories: '55 cal', description: 'Explosive shot of strawberry, blueberry, blackberry, and raspberry pulp.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-7.jpg', splashColor: '#be185d' },
    ],
  },
  {
    id: 'mojito',
    name: 'Mojito',
    description: 'Zesty Cuban-style mocktails bursting with crushed fresh mint, freshly squeezed lime, and fizzy sparkling soda.',
    items: [
      { name: 'Mint Classic Mojito', price: '₹99', calories: '85 cal', description: 'Crushed garden mint, freshly squeezed lime, and effervescent sparkling soda.', imageUrl: '/assets/dessert-add/Mojito.png', splashColor: '#15803d' },
      { name: 'Green Apple Mojito', price: '₹119', calories: '95 cal', description: 'Crisp green apple purée, mint, lime, and crushed ice topped with fizz.', imageUrl: '/assets/SmallZussioberry/beverage/mojito.jpg', splashColor: '#65a30d' },
      { name: 'Cranberry Mojito', price: '₹119', calories: '90 cal', description: 'Bold ruby-red cranberry juice, fresh mint, and sparkling soda.', imageUrl: '/assets/menu/beverages/beverages/5.jpg', splashColor: '#be123c' },
      { name: 'Blue Curacao Mojito', price: '₹129', calories: '100 cal', description: 'Vibrant tropical citrus syrup, zesty lime, fresh mint, and fizzy soda.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-8.jpg', splashColor: '#0284c7' },
    ],
  },
  {
    id: 'falooda',
    name: 'Falooda',
    description: 'Royal dessert beverage layered with rich milkshake, silky vermicelli, chia/basil seeds, dry fruits, and kulfi.',
    items: [
      { name: 'Royal Malai Falooda', price: '₹169', calories: '420 cal', description: 'Rose milkshake layered with sev, sabja seeds, dry fruits, and creamy kulfi.', imageUrl: '/assets/dessert-add/falooda.png', splashColor: '#be185d' },
      { name: 'Mango Falooda', price: '₹179', calories: '440 cal', description: 'Fresh mango shake, silky vermicelli, basil seeds, kulfi, and mango chunks.', imageUrl: '/assets/SmallZussioberry/Falooda.png', splashColor: '#f59e0b' },
      { name: 'Kesar Pista Falooda', price: '₹179', calories: '450 cal', description: 'Royal saffron & pistachio shake layered with nuts, sev, and rich kulfi.', imageUrl: '/assets/SmallZussioberry/beverage/Falooda.JPG', splashColor: '#d97706' },
      { name: 'Blackcurrant Falooda', price: '₹169', calories: '410 cal', description: 'Tangy blackcurrant milkshake, vermicelli, sabja seeds, and creamy kulfi.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-7.jpg', splashColor: '#7e22ce' },
      { name: 'Chocolate Falooda', price: '₹179', calories: '480 cal', description: 'Decadent chocolate shake with silky vermicelli, roasted nuts, and chocolate kulfi.', imageUrl: '/assets/blogs/CS2.jpg', splashColor: '#451a03' },
      { name: 'Flamingo Pink', price: '₹189', calories: '460 cal', description: 'Exotic fusion of mango and strawberry shake layered with nuts and rich kulfi.', imageUrl: '/assets/SmallZussioberry/beverage/fruitmilkshake.jpg', splashColor: '#ec4899' },
    ],
  },
  {
    id: 'vegetable-juices',
    name: 'Vegetable Juices',
    description: 'Pure, detoxifying vegetable juices cold-pressed from fresh carrots, beetroots, cucumbers, and garden greens.',
    items: [
      { name: 'Carrot Juice', price: '₹89', calories: '80 cal', description: 'Sweet, earthy, and beta-carotene rich juice made from fresh farm carrots.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-2.jpg', splashColor: '#ea580c' },
      { name: 'Beetroot Juice', price: '₹89', calories: '75 cal', description: 'Deep red, antioxidant-rich juice pressed for maximum natural energy.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-1.jpg', splashColor: '#881337' },
      { name: 'Carrot Apple Orange', price: '₹119', calories: '120 cal', description: 'Earthy sweetness of carrots balanced by crisp apples and zesty oranges.', imageUrl: '/assets/beverage-add/Fruit juices.png', splashColor: '#f97316' },
      { name: 'Green Detox Juice', price: '₹129', calories: '65 cal', description: 'Cooling cucumber, crisp celery, spinach, fresh mint, and zesty lemon.', imageUrl: '/assets/menu/beverages/beverages/6.JPG', splashColor: '#15803d' },
      { name: 'Beachy Greens', price: '₹139', calories: '95 cal', description: 'Spinach, cucumber, tropical pineapple, mint, and fresh lime juice.', imageUrl: '/assets/SmallZussioberry/beverage/smothie.JPG', splashColor: '#16a34a' },
      { name: 'Dragon Punch', price: '₹149', calories: '110 cal', description: 'Vibrant pink dragon fruit pressed with beetroot, carrot, and lime.', imageUrl: '/assets/SmallZussioberry/juice_img.png', splashColor: '#be185d' },
    ],
  },
  {
    id: 'immunity-booster',
    name: 'Immunity Booster',
    description: 'Nutrient-packed wellness potions infused with amla, ginger, turmeric, and citrus for peak vitality.',
    items: [
      { name: 'Flu Fighter', price: '₹109', calories: '90 cal', description: 'Carrots, beetroot, raw ginger, fresh turmeric, and alkalizing lemon.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-5.jpg', splashColor: '#ea580c' },
      { name: 'Stress Free', price: '₹119', calories: '75 cal', description: 'Soothing blend of spinach, cucumber, mint, celery, and fresh lemon.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-6.jpg', splashColor: '#16a34a' },
      { name: 'Immunity Enhancer', price: '₹119', calories: '85 cal', description: 'Wild amla (Indian gooseberry), spinach, carrot, ginger, and lemon.', imageUrl: '/assets/menu/beverages/beverages/1.JPG', splashColor: '#ca8a04' },
      { name: 'Smile Booster', price: '₹109', calories: '95 cal', description: 'Fresh oranges, carrots, turmeric roots, and a warming dash of ginger.', imageUrl: '/assets/beverage-add/Fruit juices.png', splashColor: '#f97316' },
      { name: 'Hangover Helper', price: '₹129', calories: '70 cal', description: 'Hydrating coconut water, cucumber, mint, ginger, and lime.', imageUrl: '/assets/dessert-add/Mojito.png', splashColor: '#059669' },
      { name: 'Gout Specialist', price: '₹129', calories: '60 cal', description: 'Celery, cooling cucumber, bitter gourd, fresh lemon, and turmeric.', imageUrl: '/assets/SmallZussioberry/beverage/beverage-2.jpg', splashColor: '#65a30d' },
    ],
  },
  {
    id: 'fruit-salad',
    name: 'Fruit Salad',
    description: 'Colorful bowls of handpicked, crisp seasonal and exotic fruits served chilled with optional ice cream.',
    items: [
      { name: 'Classic Fruit Salad', price: '₹119', calories: '120 cal', description: 'Crisp seasonal apples, papaya, pineapple, grapes, and watermelon cubes.', imageUrl: '/assets/sectionZussioberry/Fruits.png', splashColor: '#dc2626' },
      { name: 'Exotic Fruit Salad', price: '₹169', calories: '150 cal', description: 'Dragon fruit, kiwi, blueberries, strawberries, and sweet cape gooseberries.', imageUrl: '/assets/menu/foods/foods/2.jpg', splashColor: '#9333ea' },
      { name: 'Fruit Salad with Ice Cream', price: '₹159', calories: '250 cal', description: 'Chilled fruit bowl served with a generous scoop of vanilla bean ice cream.', imageUrl: '/assets/menu/beverages/beverages/2.JPG', splashColor: '#ea580c' },
    ],
  },
];

const ITEMS_PER_PAGE = 6;

export default function RefreshingBeveragesPage() {
  const [activeCategory, setActiveCategory] = useState('refreshing-beverages');
  const [currentPage, setCurrentPage] = useState(1);
  const [blinkingItem, setBlinkingItem] = useState(null);
  const [blinkingCategory, setBlinkingCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle dish card or word click
  const handleCardClick = (item) => {
    setBlinkingItem(item.name);

    if (item.targetCategoryId) {
      // Category item clicked (e.g. Fresh Fruit Juices, Fruit Milkshake, Falooda)
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
            We don't just serve drinks—we craft refreshing liquid experiences that elevate every moment.
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
      {/* 2. REFRESHING BEVERAGES HEADING & CATEGORY PILLS                      */}
      {/* ---------------------------------------------------------------------- */}
      <div className="bg-white pt-10 sm:pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-green-600 mb-4">
            Refreshing Beverages
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-[para]">
            Quench your thirst with our handpicked fruit juices, thick shakes, smoothies, and authentic royal blends.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleSelectCategory(category.id)}
                className={`px-4 py-2 rounded-md cursor-pointer text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeCategory === category.id && !searchQuery
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105 ring-2 ring-blue-400'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                } ${blinkingCategory === category.id ? 'animate-blue-button-blink ring-4 ring-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.9)]' : ''}`}
              >
                <span className={blinkingCategory === category.id ? 'animate-blue-word-blink font-bold' : ''}>
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
              placeholder="Search drink name or description..."
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
          {activeCategory !== 'refreshing-beverages' && !searchQuery && (
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
                onClick={() => handleSelectCategory('refreshing-beverages')}
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
                          ? 'animate-blue-card-blink ring-4 ring-blue-400 shadow-[0_0_35px_rgba(59,130,246,1),0_0_65px_rgba(37,99,235,0.85)] bg-blue-500/20 z-30'
                          : 'hover:bg-white/15 hover:translate-x-1 active:scale-98'
                      }`}
                      title={item.targetCategoryId ? `Click to view all ${item.name}` : `Click to view ${item.name}`}
                    >
                      {/* Left: Medium Size Splash Backdrop + Beverage Photo */}
                      <div className="relative shrink-0 w-[130px] h-[130px] sm:w-[145px] sm:h-[145px] md:w-[155px] md:h-[155px] flex items-center justify-center">
                        <div
                          className={`absolute inset-0 flex items-center justify-center pointer-events-none transform transition-all duration-300 ${
                            isBlinking ? 'scale-125 rotate-12' : 'scale-105 group-hover:scale-115 group-hover:rotate-6'
                          }`}
                        >
                          <SplashBackdrop
                            color={isBlinking ? '#3b82f6' : (item.splashColor || '#16a34a')}
                            variant={index}
                          />
                        </div>

                        {/* Circular Medium Size Drink Image */}
                        <div
                          className={`relative z-10 w-[108px] h-[108px] sm:w-[122px] sm:h-[122px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden border-2 border-white/95 shadow-md bg-white transition-all duration-300 ${
                            isBlinking ? 'ring-4 ring-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.95)] scale-105' : ''
                          }`}
                        >
                          <Image
                            src={item.imageUrl || '/assets/beverage-add/Fruit juices.png'}
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
                              isBlinking ? 'animate-blue-word-blink text-blue-400' : 'group-hover:text-blue-50'
                            }`}
                          >
                            {item.name}
                          </h4>
                          {/* Dotted connecting line */}
                          <span
                            className={`flex-1 border-b-2 border-dotted mx-2.5 sm:mx-3 relative -top-[5px] transition-colors ${
                              isBlinking ? 'border-blue-400' : 'border-white/60'
                            }`}
                          ></span>
                          {/* Price */}
                          <span
                            style={{ fontFamily: "'Patrick Hand', cursive" }}
                            className={`text-xl sm:text-2xl md:text-[24px] font-bold whitespace-nowrap drop-shadow-sm transition-colors ${
                              isBlinking ? 'text-blue-300' : 'text-white'
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
                                  ? 'bg-blue-600 text-white shadow-md scale-105'
                                  : 'text-white/90 bg-white/20 group-hover:bg-blue-600 group-hover:text-white'
                              }`}
                            >
                              Explore {item.name} →
                            </span>
                          ) : (
                            <span
                              style={{ fontFamily: "'Patrick Hand', cursive" }}
                              className="text-xs font-semibold text-white/70 group-hover:text-white transition-all"
                            >
                              Chilled & Fresh
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
                  No drinks found matching "{searchQuery}"
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