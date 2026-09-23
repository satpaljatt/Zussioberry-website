'use client';
import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

// Reusable SVG Splash Backdrop Component with satellite droplets (Reference Design)
const SplashBackdrop = ({ color = '#ea580c', variant = 0 }) => {
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
    id: 'savoury-selections',
    name: 'Savoury Selections',
    description: 'A curated variety of crispy bites, warm soups, artisan wraps, sandwiches, and handcrafted delicacies.',
    items: [
      {
        name: 'Crispy Bites',
        targetCategoryId: 'crispy-bites',
        price: 'From ₹99',
        calories: '280 | 390 cal',
        description: 'A selection of golden, bite-sized snacks with a satisfying crunch — perfect for sharing or snacking.',
        imageUrl: '/assets/food-add/Crispy bites.png',
        splashColor: '#f97316',
      },
      {
        name: 'Soups',
        targetCategoryId: 'soups',
        price: 'From ₹139',
        calories: '150 | 250 cal',
        description: 'A variety of warm, flavorful broths and velvety blends made from fresh garden ingredients.',
        imageUrl: '/assets/food-add/soup.png',
        splashColor: '#16a34a',
      },
      {
        name: 'Wraps',
        targetCategoryId: 'wraps',
        price: 'From ₹139',
        calories: '320 | 480 cal',
        description: 'Handheld meals featuring soft flatbread rolled around fresh vegetables, seasoned paneer, and savory sauces.',
        imageUrl: '/assets/food-add/Wraps.png',
        splashColor: '#9333ea',
      },
      {
        name: 'Multigrain Sandwich',
        targetCategoryId: 'multigrain-sandwich',
        price: 'From ₹129',
        calories: '290 | 450 cal',
        description: 'Wholesome sandwiches made with hearty multigrain bread, stacked with fresh vegetables and gourmet spreads.',
        imageUrl: '/assets/menuPage/SavourySelections/Multigrain.png',
        splashColor: '#ea580c',
      },
      {
        name: 'Tasty Toasty (4pcs)',
        targetCategoryId: 'tasty-toasty',
        price: 'From ₹129',
        calories: '240 | 360 cal',
        description: 'Delightful assortment of four perfectly toasted pieces topped with creamy avocado, bruschetta, or cheesy garlic.',
        imageUrl: '/assets/food-add/Tasty toasty.png',
        splashColor: '#eab308',
      },
      {
        name: 'Panini / Subway',
        targetCategoryId: 'pannini-subway',
        price: 'From ₹179',
        calories: '380 | 520 cal',
        description: 'Toasted gourmet sandwiches filled with fresh vegetables, melted cheese, and bold zesty seasonings.',
        imageUrl: '/assets/food-add/sandwich.png',
        splashColor: '#059669',
      },
      {
        name: 'Nachos',
        targetCategoryId: 'nachos',
        price: 'From ₹169',
        calories: '390 | 610 cal',
        description: 'Crispy tortilla chips generously layered with warm melted cheese, jalapeños, and tangy salsa.',
        imageUrl: '/assets/food-add/nachos.png',
        splashColor: '#dc2626',
      },
      {
        name: 'Burger',
        targetCategoryId: 'burger',
        price: 'From ₹139',
        calories: '380 | 540 cal',
        description: 'Hearty burgers with savory patties, crisp garden greens, and creamy signature dressings in soft buns.',
        imageUrl: '/assets/menu/foods/foods/5.jpg',
        splashColor: '#f59e0b',
      },
      {
        name: 'Starter',
        targetCategoryId: 'starter',
        price: 'From ₹169',
        calories: '310 | 480 cal',
        description: 'Appetizing hot small plates served fresh to awaken the palate with bold Indo-fusion seasonings.',
        imageUrl: '/assets/food-add/Crispy bites.png',
        splashColor: '#d97706',
      },
      {
        name: 'Pasta',
        targetCategoryId: 'pasta',
        price: 'From ₹199',
        calories: '360 | 630 cal',
        description: 'Artisan pastas tossed in luscious Alfredo, spicy Arrabbiata, rich Rosa, or aromatic basil Pesto sauces.',
        imageUrl: '/assets/food-add/Pasta.png',
        splashColor: '#e11d48',
      },
      {
        name: 'Main Course',
        targetCategoryId: 'main-course',
        price: 'From ₹219',
        calories: '340 | 570 cal',
        description: 'Hearty and satisfying rice bowls, fragrant curries, and wholesome grain bowls bursting with fresh flavor.',
        imageUrl: '/assets/menu/foods/foods/2.jpg',
        splashColor: '#16a34a',
      },
      {
        name: 'Burrito Bowl / Wraps',
        targetCategoryId: 'burrito-bowl-wraps',
        price: 'From ₹219',
        calories: '380 | 580 cal',
        description: 'Customizable bowls and wraps packed with seasoned beans, fluffy rice, avocado, and tangy dressings.',
        imageUrl: '/assets/menu/foods/foods/3.jpg',
        splashColor: '#ea580c',
      },
      {
        name: 'Salads',
        targetCategoryId: 'salads',
        price: 'From ₹189',
        calories: '210 | 330 cal',
        description: 'Crisp seasonal greens, colorful garden vegetables, crunchy croutons, and refreshing house-made dressings.',
        imageUrl: '/assets/menu/foods/foods/4.jpg',
        splashColor: '#65a30d',
      },
      {
        name: 'Thin Crust Pizza',
        targetCategoryId: 'thin-crust-pizza',
        price: 'From ₹249',
        calories: '520 | 890 cal',
        description: 'Artisanal thin crust pizzas baked to a delicate crisp with rich marinara, melted mozzarella, and fresh toppings.',
        imageUrl: '/assets/food-add/pizza.png',
        splashColor: '#dc2626',
      },
      {
        name: 'Thai Curry',
        targetCategoryId: 'thai-curry',
        price: 'From ₹269',
        calories: '440 | 620 cal',
        description: 'Aromatic coconut curries simmered with lemongrass, kaffir lime, and authentic spices, served with jasmine rice.',
        imageUrl: '/assets/menu/foods/foods/3.jpg',
        splashColor: '#059669',
      },
    ],
  },
  {
    id: 'crispy-bites',
    name: 'Crispy Bites',
    description: 'Golden, bite-sized snacks with a satisfying crunch — perfect for sharing or quick munching.',
    items: [
      { name: 'Herb Chilli Patty', price: '₹129', calories: '290 | 360 cal', description: 'Crisp, golden bites made from a vibrant mix of fresh herbs, green chillies, and seasonal vegetables.', imageUrl: '/assets/food-add/Crispy bites.png', splashColor: '#ea580c' },
      { name: 'French Fries M/L', price: '₹99', calories: '310 | 420 cal', description: 'Crispy, golden fries with a light, crunchy exterior and fluffy potato center, salted to perfection.', imageUrl: '/assets/menu/foods/foods/1.jpg', splashColor: '#eab308' },
      { name: 'Peri Peri French Fries M/L', price: '₹119', calories: '330 | 440 cal', description: 'Crispy golden fries tossed in a fiery zesty peri-peri spice blend for an exhilarating kick.', imageUrl: '/assets/menuPage/SavourySelections/Crispy.png', splashColor: '#dc2626' },
      { name: 'Potato Pops Crispy Bites', price: '₹129', calories: '340 | 460 cal', description: 'Bite-sized golden crispy potato pops with a fluffy potato interior and spiced seasoning.', imageUrl: '/assets/SmallZussioberry/crispybites.png', splashColor: '#f97316' },
      { name: 'Onion Rings Crispy Bites', price: '₹139', calories: '280 | 390 cal', description: 'Golden, crunchy onion rings with a light batter and sweet, tender onions inside.', imageUrl: '/assets/food-add/Crispy bites.png', splashColor: '#e59b2d' },
      { name: 'Cheesy Loaded Fries Crispy Bites', price: '₹159', calories: '420 | 540 cal', description: 'Golden, crispy fries smothered in warm velvety cheese sauce and herb sprinkle.', imageUrl: '/assets/menuPage/SavourySelections/Crispy.png', splashColor: '#d97706' },
    ],
  },
  {
    id: 'soups',
    name: 'Soups',
    description: 'Warm, flavorful broths and velvety blends made from fresh ingredients, served as a comforting starter.',
    items: [
      { name: 'Broccoli Almond Soup', price: '₹149', calories: '180 | 250 cal', description: 'A creamy and nourishing blend of tender broccoli and toasted almonds, pureed to silky perfection.', imageUrl: '/assets/food-add/soup.png', splashColor: '#16a34a' },
      { name: 'Roasted Tomato Basil Soup', price: '₹139', calories: '150 | 220 cal', description: 'Slow-roasted vine tomatoes blended with fresh basil leaves and a hint of roasted garlic.', imageUrl: '/assets/food-add/soup.png', splashColor: '#dc2626' },
      { name: 'Cream of Mushroom Soup', price: '₹159', calories: '210 | 290 cal', description: 'A velvety smooth blend of earthy sautéed mushrooms simmered with herbs and light cream.', imageUrl: '/assets/food-add/soup.png', splashColor: '#78716c' },
      { name: 'Leek Soup', price: '₹149', calories: '160 | 230 cal', description: 'Delicately sautéed leeks simmered into a creamy, comforting soup with subtle savory notes.', imageUrl: '/assets/food-add/soup.png', splashColor: '#65a30d' },
    ],
  },
  {
    id: 'wraps',
    name: 'Wraps',
    description: 'Handheld meals featuring soft flatbread rolled around delicious, flavorful fillings.',
    items: [
      { name: 'Veg Wraps', price: '₹139', calories: '320 | 440 cal', description: 'A vibrant mix of crisp garden vegetables, leafy greens, and zesty sauces wrapped in soft flatbread.', imageUrl: '/assets/food-add/Wraps.png', splashColor: '#16a34a' },
      { name: 'Veg Cheese Wraps', price: '₹159', calories: '380 | 510 cal', description: 'A tasty blend of fresh garden vegetables and melted cheese, wrapped snugly in warm flatbread.', imageUrl: '/assets/menuPage/SavourySelections/Wraps.png', splashColor: '#eab308' },
      { name: 'Veg Mayo Cheese Wraps', price: '₹169', calories: '410 | 540 cal', description: 'Crisp vegetables, melted cheese, and tangy mayo wrapped in soft wholesome flatbread.', imageUrl: '/assets/SmallZussioberry/Wraps.png', splashColor: '#f59e0b' },
      { name: 'Paneer Tikka Mayo Cheese Wraps', price: '₹189', calories: '460 | 590 cal', description: 'Tender cubes of smoky spiced paneer tikka with melted cheese and creamy mayo sauce.', imageUrl: '/assets/food-add/Wraps.png', splashColor: '#ea580c' },
      { name: 'Paneer Tikka Wraps', price: '₹179', calories: '420 | 530 cal', description: 'Marinated paneer grilled with aromatic tandoori spices, crunchy veggies, and tangy mint chutney.', imageUrl: '/assets/menuPage/SavourySelections/Wraps.png', splashColor: '#dc2626' },
      { name: 'Paneer Tikka Cheese Wraps', price: '₹189', calories: '470 | 600 cal', description: 'Smoky grilled paneer tikka paired with melted cheese and crisp salad, wrapped in soft bread.', imageUrl: '/assets/SmallZussioberry/Wraps.png', splashColor: '#f97316' },
      { name: 'Veg Kabab Wraps', price: '₹169', calories: '360 | 480 cal', description: 'Spiced and grilled vegetable kababs rolled with crunchy onions, fresh mint, and zesty dip.', imageUrl: '/assets/SmallZussioberry/Shawarma.png', splashColor: '#84cc16' },
      { name: 'Veg Kabab Mayo Cheese Wraps', price: '₹189', calories: '440 | 570 cal', description: 'Spiced vegetable kababs layered with melted cheese and creamy mayo dressing in warm flatbread.', imageUrl: '/assets/SmallZussioberry/Shawarma.png', splashColor: '#b45309' },
      { name: 'Exotic Veggie Wraps', price: '₹179', calories: '310 | 420 cal', description: 'Colorful zucchini, bell peppers, baby corn, and fresh herbs tossed in chef special vinaigrette.', imageUrl: '/assets/food-add/Wraps.png', splashColor: '#059669' },
      { name: 'Zussioberry Spl Mushrooms Wraps', price: '₹199', calories: '350 | 470 cal', description: 'Tender mushrooms sautéed in secret house herbs, wrapped with greens and signature Zussio sauce.', imageUrl: '/assets/menuPage/SavourySelections/Wraps.png', splashColor: '#9333ea' },
      { name: 'Falafel with Hummus Wraps', price: '₹189', calories: '390 | 510 cal', description: 'Crispy golden falafels paired with creamy homemade hummus, fresh salad, and tahini drizzle.', imageUrl: '/assets/SmallZussioberry/Shawarma.png', splashColor: '#d97706' },
    ],
  },
  {
    id: 'multigrain-sandwich',
    name: 'Multigrain Sandwich',
    description: 'Wholesome sandwiches made with hearty multigrain bread, filled with fresh vegetables, cheeses, and spreads.',
    items: [
      { name: 'Veg Grill Sandwich', price: '₹129', calories: '290 | 410 cal', description: 'Grilled to golden perfection, loaded with fresh, crunchy vegetables and a hint of smoky char.', imageUrl: '/assets/menuPage/SavourySelections/Multigrain.png', splashColor: '#16a34a' },
      { name: 'Veg Cheese Grill Sandwich', price: '₹149', calories: '360 | 480 cal', description: 'A classic grilled veggie sandwich with a generous layer of melted gooey cheese.', imageUrl: '/assets/food-add/sandwich.png', splashColor: '#eab308' },
      { name: 'Mushroom Grill Sandwich', price: '₹169', calories: '320 | 440 cal', description: 'Earthy sautéed mushrooms grilled with herbs, spices, and melted mozzarella on multigrain.', imageUrl: '/assets/SmallZussioberry/GrillSandwich.png', splashColor: '#78716c' },
      { name: 'Manchurian Sandwich', price: '₹159', calories: '340 | 470 cal', description: 'Crispy Indo-Chinese vegetable balls tossed in sweet & spicy sauce, grilled between toasted bread.', imageUrl: '/assets/blogs/Sandwich.JPG', splashColor: '#dc2626' },
      { name: 'Paneer Tikka Mayo Cheese Sandwich', price: '₹189', calories: '450 | 580 cal', description: 'Smoky paneer tikka, melted cheese, and creamy mayo grilled into crunchy multigrain slices.', imageUrl: '/assets/menuPage/SavourySelections/Multigrain.png', splashColor: '#ea580c' },
      { name: 'Kabab Mayo Cheese Sandwich', price: '₹179', calories: '430 | 560 cal', description: 'Spiced vegetable kababs layered with cheese, tangy mayo, and crisp lettuce.', imageUrl: '/assets/SmallZussioberry/GrillSandwich.png', splashColor: '#b45309' },
      { name: 'Exotic Veg Grill Sandwich', price: '₹169', calories: '310 | 430 cal', description: 'Grilled zucchini, bell peppers, olives, and melted cheese on toasted multigrain bread.', imageUrl: '/assets/food-add/sandwich.png', splashColor: '#059669' },
      { name: 'Veg Falafel Grill Sandwich', price: '₹179', calories: '370 | 490 cal', description: 'Crunchy falafels with garlic-herb hummus and fresh tomatoes, lightly toasted to order.', imageUrl: '/assets/blogs/Sandwich.JPG', splashColor: '#d97706' },
      { name: 'Mexican Veg Sandwich', price: '₹169', calories: '340 | 460 cal', description: 'Spicy salsa, jalapeños, sweet corn, and melted cheese seasoned with Mexican spices.', imageUrl: '/assets/menuPage/SavourySelections/Multigrain.png', splashColor: '#dc2626' },
      { name: 'Veg Club Sandwich', price: '₹199', calories: '460 | 610 cal', description: 'Triple-decker stacked sandwich with fresh vegetables, cheese slices, and gourmet house dressings.', imageUrl: '/assets/food-add/sandwich.png', splashColor: '#f97316' },
      { name: 'Coleslaw Sandwich', price: '₹139', calories: '270 | 380 cal', description: 'Crunchy, tangy shredded cabbage and carrots in creamy herb mayo on soft bread.', imageUrl: '/assets/SmallZussioberry/GrillSandwich.png', splashColor: '#10b981' },
    ],
  },
  {
    id: 'tasty-toasty',
    name: 'Tasty Toasty (4pcs)',
    description: 'An assortment of four perfectly toasted bite-sized pieces with artisanal toppings.',
    items: [
      { name: 'Avocado Toast', price: '₹199', calories: '260 | 350 cal', description: 'Creamy ripe avocado smashed over crispy toasted artisan bread, seasoned with lemon and sea salt.', imageUrl: '/assets/food-add/Tasty toasty.png', splashColor: '#65a30d' },
      { name: 'Bruschetta', price: '₹159', calories: '220 | 310 cal', description: 'Crisp toasted bread topped with diced tomatoes, fresh basil, roasted garlic, and extra virgin olive oil.', imageUrl: '/assets/food-add/Tasty toasty.png', splashColor: '#dc2626' },
      { name: 'Mushroom Bruschetta', price: '₹179', calories: '240 | 330 cal', description: 'Sautéed wild mushrooms with herbs piled high on toasted baguette with parmesan sprinkle.', imageUrl: '/assets/food-add/Tasty toasty.png', splashColor: '#78716c' },
      { name: 'Chilly Cheese Toast', price: '₹149', calories: '310 | 420 cal', description: 'Golden toasted bread loaded with melted cheddar, green chillies, and bell peppers.', imageUrl: '/assets/food-add/Tasty toasty.png', splashColor: '#ea580c' },
      { name: 'Garlic Bread', price: '₹129', calories: '280 | 380 cal', description: 'Classic baguette brushed with whipped garlic herb butter, baked until fragrant and golden.', imageUrl: '/assets/food-add/Tasty toasty.png', splashColor: '#eab308' },
      { name: 'Cheese Garlic Bread', price: '₹159', calories: '360 | 470 cal', description: 'Garlic bread topped with gooey mozzarella cheese, baked bubbly and golden.', imageUrl: '/assets/food-add/Tasty toasty.png', splashColor: '#f59e0b' },
    ],
  },
  {
    id: 'pannini-subway',
    name: 'Panini / Subway',
    description: 'Warm, crusty Italian-style pressed panini sandwiches loaded with gourmet fillings and cheeses.',
    items: [
      { name: 'Veg Cheesy Jalapeno', price: '₹179', calories: '380 | 500 cal', description: 'Loaded with melted mozzarella, fiery pickled jalapeños, and crunchy garden bell peppers.', imageUrl: '/assets/food-add/sandwich.png', splashColor: '#16a34a' },
      { name: 'Veg Cheesy Mexican', price: '₹189', calories: '390 | 520 cal', description: 'Sweet corn, spicy jalapeños, chipotle sauce, and molten cheese pressed to crispy perfection.', imageUrl: '/assets/menuPage/SavourySelections/Multigrain.png', splashColor: '#dc2626' },
      { name: 'Cheesy Paneer Tikka', price: '₹199', calories: '440 | 570 cal', description: 'Spiced tandoori paneer tikka cubes paired with melted cheese and crunchy grilled onions.', imageUrl: '/assets/SmallZussioberry/GrillSandwich.png', splashColor: '#ea580c' },
      { name: 'Creamy Cajun Panini', price: '₹189', calories: '410 | 540 cal', description: 'Zesty Cajun-seasoned vegetables tossed in creamy spiced sauce and melted gouda cheese.', imageUrl: '/assets/blogs/Sandwich.JPG', splashColor: '#f97316' },
      { name: 'Jamaican Jerk Panini', price: '₹199', calories: '390 | 510 cal', description: 'Marinated jerk-seasoned filling with vibrant island spices, grilled bell peppers, and tangy dip.', imageUrl: '/assets/food-add/sandwich.png', splashColor: '#9333ea' },
    ],
  },
  {
    id: 'nachos',
    name: 'Nachos',
    description: 'Crispy corn tortilla chips piled high with melted cheese sauce, salsa, and zesty toppings.',
    items: [
      { name: 'Cheesy Nachos', price: '₹169', calories: '390 | 520 cal', description: 'Crisp tortilla chips smothered in warm cheese sauce, served with homemade tangy salsa.', imageUrl: '/assets/food-add/nachos.png', splashColor: '#eab308' },
      { name: 'Loaded Nachos', price: '₹199', calories: '460 | 610 cal', description: 'Crispy tortilla chips layered with molten cheese, jalapeños, spicy beans, olives, and sour cream.', imageUrl: '/assets/food-add/nachos.png', splashColor: '#ea580c' },
      { name: 'Zussioberry Spl Fiesta Nachos', price: '₹229', calories: '510 | 680 cal', description: 'Signature supreme tower with guacamole, refried beans, cheddar drizzle, and diced tomatoes.', imageUrl: '/assets/food-add/nachos.png', splashColor: '#dc2626' },
    ],
  },
  {
    id: 'burger',
    name: 'Burger',
    description: 'Juicy, satisfying patties in toasted buns, layered with crisp greens and gourmet sauces.',
    items: [
      { name: 'Veg Patty Burger', price: '₹139', calories: '380 | 510 cal', description: 'Crispy golden vegetable patty with tomato slices, lettuce, and creamy burger mayo in soft sesame bun.', imageUrl: '/assets/menu/foods/foods/5.jpg', splashColor: '#eab308' },
      { name: 'Paneer Tikka Burger', price: '₹179', calories: '460 | 590 cal', description: 'Char-grilled tandoori paneer steak layered with mint sauce, onions, and melted cheese.', imageUrl: '/assets/menu/foods/foods/5.jpg', splashColor: '#ea580c' },
      { name: 'Hot N Spicy Burger', price: '₹159', calories: '410 | 540 cal', description: 'Spicy crispy vegetable patty topped with pickled jalapeños, peri peri mayo, and crisp lettuce.', imageUrl: '/assets/menu/foods/foods/5.jpg', splashColor: '#dc2626' },
      { name: 'Veg Pesto Burger', price: '₹179', calories: '420 | 550 cal', description: 'Crisp patty layered with fresh aromatic basil pesto, melted mozzarella, and sliced ripe tomatoes.', imageUrl: '/assets/menu/foods/foods/5.jpg', splashColor: '#16a34a' },
    ],
  },
  {
    id: 'starter',
    name: 'Starter',
    description: 'Delicious, appetizing small plates served piping hot to kickstart your feast.',
    items: [
      { name: 'Mexican Paneer', price: '₹199', calories: '340 | 460 cal', description: 'Soft paneer cubes tossed with bell peppers, onions, and smoky Mexican seasonings.', imageUrl: '/assets/menu/foods/foods/6.jpg', splashColor: '#dc2626' },
      { name: 'Veg Crispy', price: '₹169', calories: '310 | 430 cal', description: 'Crunchy battered garden vegetables tossed in tangy sweet garlic chili sauce and scallions.', imageUrl: '/assets/food-add/Crispy bites.png', splashColor: '#ea580c' },
      { name: 'Paneer Crispy', price: '₹199', calories: '390 | 510 cal', description: 'Golden-fried paneer bites tossed in fiery garlic sauce, crushed pepper, and spring onions.', imageUrl: '/assets/menuPage/SavourySelections/Crispy.png', splashColor: '#f97316' },
      { name: 'Teriyaki Paneer', price: '₹219', calories: '360 | 480 cal', description: 'Grilled paneer cubes glazed with savory sweet Japanese teriyaki glaze, sprinkled with sesame.', imageUrl: '/assets/menu/foods/foods/6.jpg', splashColor: '#9333ea' },
      { name: 'Honey Chilli Potato', price: '₹169', calories: '350 | 470 cal', description: 'Crispy fried potato fingers tossed in a sticky sweet honey chili sauce with roasted sesame.', imageUrl: '/assets/SmallZussioberry/crispybites.png', splashColor: '#eab308' },
    ],
  },
  {
    id: 'pasta',
    name: 'Pasta',
    description: 'Authentic Italian pastas simmered in slow-cooked sauces with fragrant herbs and melted cheeses.',
    items: [
      { name: 'Rossa Sauce Pasta', price: '₹219', calories: '410 | 550 cal', description: 'A velvety blend of slow-simmered tomato marinara and creamy Alfredo pink sauce tossed with penne.', imageUrl: '/assets/food-add/Pasta.png', splashColor: '#e11d48' },
      { name: 'Alfredo Pasta', price: '₹229', calories: '480 | 630 cal', description: 'Rich and creamy white sauce made with butter, heavy cream, garlic, and freshly grated parmesan.', imageUrl: '/assets/food-add/Pasta.png', splashColor: '#f59e0b' },
      { name: 'Arrabbiata Pasta', price: '₹199', calories: '360 | 490 cal', description: 'Fiery Italian tomato sauce simmered with crushed red chili flakes, roasted garlic, and basil.', imageUrl: '/assets/food-add/Pasta.png', splashColor: '#dc2626' },
      { name: 'Pesto Pasta', price: '₹239', calories: '430 | 570 cal', description: 'Fresh sweet basil, pine nuts, parmesan, and cold-pressed extra virgin olive oil in aromatic green sauce.', imageUrl: '/assets/food-add/Pasta.png', splashColor: '#16a34a' },
      { name: 'Paprika Pasta', price: '₹219', calories: '400 | 530 cal', description: 'A smoky mildly spiced cream sauce infused with roasted sweet Hungarian paprika and garlic.', imageUrl: '/assets/food-add/Pasta.png', splashColor: '#ea580c' },
      { name: 'Mac n Cheese Pasta', price: '₹209', calories: '490 | 650 cal', description: 'Elbow macaroni baked in rich three-cheese mornay sauce with crunchy golden crust.', imageUrl: '/assets/food-add/Pasta.png', splashColor: '#eab308' },
      { name: 'Lasagna Pasta', price: '₹259', calories: '530 | 710 cal', description: 'Tender pasta sheets layered with savory seasoned vegetable bolognese, béchamel, and mozzarella.', imageUrl: '/assets/food-add/Pasta.png', splashColor: '#d97706' },
    ],
  },
  {
    id: 'main-course',
    name: 'Main Course',
    description: 'Hearty and wholesome meals that serve as the flavorful centerpiece of your dining experience.',
    items: [
      { name: 'Spinach Rice with Paprika Sauce', price: '₹229', calories: '390 | 520 cal', description: 'Fragrant basmati rice tossed with fresh spinach, served with a velvety roasted paprika sauce.', imageUrl: '/assets/menu/foods/foods/2.jpg', splashColor: '#16a34a' },
      { name: 'Silicin Rice with Coconut Curry', price: '₹249', calories: '430 | 570 cal', description: 'Aromatic seasoned rice paired with creamy coconut curry infused with lemongrass and turmeric.', imageUrl: '/assets/menu/foods/foods/2.jpg', splashColor: '#d97706' },
      { name: 'Crispy Paneer Bowl', price: '₹239', calories: '460 | 600 cal', description: 'Golden paneer cubes served over warm seasoned grains, crisp greens, and creamy house dressing.', imageUrl: '/assets/SmallZussioberry/DietFoods.png', splashColor: '#ea580c' },
      { name: 'Veg Bowl', price: '₹219', calories: '340 | 460 cal', description: 'Wholesome medley of roasted seasonal veggies, sautéed greens, and seasoned jasmine rice.', imageUrl: '/assets/SmallZussioberry/DietFoods2.png', splashColor: '#059669' },
    ],
  },
  {
    id: 'burrito-bowl-wraps',
    name: 'Burrito Bowl / Wraps',
    description: 'Customizable bowls and wraps packed with cilantro lime rice, beans, fresh veggies, and sauces.',
    items: [
      { name: 'Mediterranean Falafel Bowl', price: '₹239', calories: '420 | 560 cal', description: 'Crisp golden falafels on fluffy couscous with diced cucumbers, cherry tomatoes, and creamy tahini.', imageUrl: '/assets/menu/foods/foods/3.jpg', splashColor: '#d97706' },
      { name: 'Chipotle Paneer Bowl', price: '₹259', calories: '470 | 620 cal', description: 'Smoky grilled paneer over cilantro-lime rice, black beans, sweet corn salsa, and chipotle mayo.', imageUrl: '/assets/SmallZussioberry/DietFoods.png', splashColor: '#ea580c' },
      { name: 'Golden Avocado Bowl', price: '₹269', calories: '380 | 510 cal', description: 'Creamy sliced avocado, roasted sweet potato cubes, organic quinoa, and zesty lime dressing.', imageUrl: '/assets/SmallZussioberry/DietFoods2.png', splashColor: '#65a30d' },
      { name: 'Mexican Burrito Wraps', price: '₹219', calories: '440 | 580 cal', description: 'Soft tortilla rolled around spicy beans, rice, grilled peppers, salsa, guacamole, and cheese.', imageUrl: '/assets/food-add/Wraps.png', splashColor: '#dc2626' },
    ],
  },
  {
    id: 'salads',
    name: 'Salads',
    description: 'Fresh, vibrant bowls combining crisp greens, seasonal vegetables, and revitalizing dressings.',
    items: [
      { name: 'Caesar Salad', price: '₹189', calories: '230 | 320 cal', description: 'Crisp romaine leaves tossed with parmesan shavings, garlic croutons, and creamy Caesar dressing.', imageUrl: '/assets/menu/foods/foods/4.jpg', splashColor: '#16a34a' },
      { name: 'Greek Salad', price: '₹199', calories: '210 | 290 cal', description: 'Juicy vine tomatoes, cucumbers, kalamata olives, red onions, and creamy feta in oregano dressing.', imageUrl: '/assets/menu/foods/foods/4.jpg', splashColor: '#059669' },
      { name: 'Italian Salad', price: '₹209', calories: '240 | 330 cal', description: 'Crisp mixed greens, sun-dried tomatoes, artichoke hearts, mozzarella pearls, and balsamic glaze.', imageUrl: '/assets/SmallZussioberry/DietFoods.png', splashColor: '#dc2626' },
      { name: 'Mediterranean Salad', price: '₹199', calories: '220 | 310 cal', description: 'Diced cucumbers, sweet bell peppers, mint, parsley, and sumac tossed in lemon-olive oil vinaigrette.', imageUrl: '/assets/SmallZussioberry/DietFoods2.png', splashColor: '#65a30d' },
    ],
  },
  {
    id: 'thin-crust-pizza',
    name: 'Thin Crust Pizza',
    description: 'Crispy artisanal thin crust pizzas baked with gourmet Italian toppings and rich mozzarella.',
    items: [
      { name: 'Classic Margherita', price: '₹249', calories: '520 | 680 cal', description: 'Authentic San Marzano tomato sauce, fresh creamy mozzarella, and fragrant basil leaves on a delicate crust.', imageUrl: '/assets/food-add/pizza.png', splashColor: '#dc2626' },
      { name: 'Farm To Table', price: '₹289', calories: '540 | 710 cal', description: 'Loaded with farm-fresh bell peppers, mushrooms, sweet corn, black olives, and melted mozzarella.', imageUrl: '/assets/food-add/pizza.png', splashColor: '#16a34a' },
      { name: 'Paneer Tikka Fusion', price: '₹319', calories: '610 | 790 cal', description: 'Smoky spiced paneer tikka chunks, sliced onions, capsicum, and tikka sauce on crisp crust.', imageUrl: '/assets/food-add/pizza.png', splashColor: '#ea580c' },
      { name: 'Royal Paneer Makkhani', price: '₹329', calories: '630 | 820 cal', description: 'Crisp crust glazed with rich buttery makhani sauce, marinated paneer cubes, and bell peppers.', imageUrl: '/assets/food-add/pizza.png', splashColor: '#f97316' },
      { name: 'Quattro Formaggi', price: '₹349', calories: '680 | 890 cal', description: 'An indulgent cheese lover dream featuring mozzarella, parmesan, cheddar, and creamy gouda.', imageUrl: '/assets/food-add/pizza.png', splashColor: '#eab308' },
    ],
  },
  {
    id: 'thai-curry',
    name: 'Thai Curry',
    description: 'Fragrant and silky Thai coconut curries infused with lemongrass, galangal, and herbs, with jasmine rice.',
    items: [
      { name: 'Creamy Thai Curry Rice', price: '₹269', calories: '440 | 590 cal', description: 'Comforting jasmine rice served with fragrant green Thai curry simmered in rich coconut milk and herbs.', imageUrl: '/assets/menu/foods/foods/3.jpg', splashColor: '#16a34a' },
      { name: 'Red Thai Curry Rice', price: '₹279', calories: '460 | 620 cal', description: 'Bold and fiery red curry simmered with red chilies, bamboo shoots, and basil over fluffy rice.', imageUrl: '/assets/menu/foods/foods/3.jpg', splashColor: '#dc2626' },
    ],
  },
];

export default function SavourySelectionsPage() {
  const ITEMS_PER_PAGE = 6;
  const [activeCategory, setActiveCategory] = useState('savoury-selections');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [blinkingItem, setBlinkingItem] = useState(null);
  const [blinkingCategory, setBlinkingCategory] = useState(null);

  // Handle card click with distinct, unmistakable blinking animation
  const handleCardClick = (item) => {
    setBlinkingItem(item.name);

    if (item.targetCategoryId) {
      // User clicked an overview card (e.g. Wraps, Crispy Bites, Soups, Multigrain Sandwich)
      // Allow the card to visibly blink for 450ms before switching view
      setTimeout(() => {
        setActiveCategory(item.targetCategoryId);
        setBlinkingCategory(item.targetCategoryId);
        setCurrentPage(1);
        setSearchQuery('');
        setBlinkingItem(null);

        // Smooth scroll to the top of the menu grid
        setTimeout(() => {
          document.getElementById('menu-items-grid')?.scrollIntoView({ behavior: 'smooth' });
        }, 60);

        // Clear category button blinking feedback
        setTimeout(() => {
          setBlinkingCategory(null);
        }, 1200);
      }, 450);
    } else {
      // Individual dish item clicked (e.g. Veg Wraps, Broccoli Soup, Herb Chilli Patty)
      // Play blink animation for 550ms
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
      // Search across all items in all categories
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

  // Paginated 6 items per page (matching 2 columns x 3 rows reference layout)
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return displayedItems.slice(start, start + ITEMS_PER_PAGE);
  }, [displayedItems, currentPage]);

  return (
    <>
      {/* ---------------------------------------------------------------------- */}
      {/* 1. ORIGINAL HERO SECTION (Preserved Exactly as in Original Design)     */}
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
            We don't just serve food—we create experiences.
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
      {/* 2. ORIGINAL SAVOURY SELECTIONS HEADING & CATEGORY PILLS (Preserved)    */}
      {/* ---------------------------------------------------------------------- */}
      <div className="bg-white pt-10 sm:pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[heading-1] text-green-600 mb-4">
            Savoury Selections
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-[para]">
            Explore our diverse menu of delicious and satisfying food options made with fresh ingredients
          </p>

          {/* Original Category Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleSelectCategory(category.id)}
                className={`px-4 py-2 rounded-md cursor-pointer text-sm sm:text-base font-medium transition-all duration-300 ${activeCategory === category.id && !searchQuery
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
      {/* 3. MENU SECTION IN bg-[#abe9b0] (Styled Matching Reference Design)     */}
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

        {/* CORNER DECORATIONS (Kiwi Top-Left, Raspberry Bottom-Left from Reference) */}

        {/* Top-Left Kiwi Slice Peeking Out */}
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

        {/* Bottom-Left Ripe Raspberry Peeking Out */}
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

        {/* Floating Organic Leaves in Background */}
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
              placeholder="Search dish name or description..."
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

          {/* Sub-Category Breadcrumb & Back Button (Shown when viewing a specific category) */}
          {activeCategory !== 'savoury-selections' && !searchQuery && (
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
                onClick={() => handleSelectCategory('savoury-selections')}
                className="shrink-0 px-4 py-1.5 bg-white/20 hover:bg-white text-white hover:text-[#23aa5d] rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-sm backdrop-blur-sm active:scale-95 border border-white/30"
              >
                ← All Categories
              </button>
            </div>
          )}

          {/* 2-COLUMN MENU GRID (148px Images Matching Reference Design) */}
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
                      className={`flex items-center group transition-all duration-300 cursor-pointer p-2.5 sm:p-3.5 -m-2.5 sm:-m-3.5 rounded-2xl ${isBlinking
                          ? 'animate-blue-card-blink ring-4 ring-blue-400 shadow-[0_0_35px_rgba(59,130,246,1),0_0_65px_rgba(37,99,235,0.85)] bg-blue-500/20 z-30'
                          : 'hover:bg-white/15 hover:translate-x-1 active:scale-98'
                        }`}
                      title={item.targetCategoryId ? `Click to view all ${item.name}` : `Click to view ${item.name}`}
                    >
                      {/* Left: Medium Size Splash Backdrop + Food Photo */}
                      <div className="relative shrink-0 w-[130px] h-[130px] sm:w-[145px] sm:h-[145px] md:w-[155px] md:h-[155px] flex items-center justify-center">
                        {/* Organic Colored Splash Background */}
                        <div
                          className={`absolute inset-0 flex items-center justify-center pointer-events-none transform transition-all duration-300 ${isBlinking ? 'scale-125 rotate-12' : 'scale-105 group-hover:scale-115 group-hover:rotate-6'
                            }`}
                        >
                          <SplashBackdrop
                            color={isBlinking ? '#3b82f6' : (item.splashColor || '#ea580c')}
                            variant={index}
                          />
                        </div>

                        {/* Circular Medium Size Food Image */}

                        <div
                          className={`relative z-10 w-[108px] h-[108px] sm:w-[122px] sm:h-[122px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden border-2 border-white/95 shadow-md bg-white transition-all duration-300 ${isBlinking ? 'ring-4 ring-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.95)] scale-105' : ''
                            }`}
                        >
                          <Image
                            src={item.imageUrl || '/assets/food-add/Crispy bites.png'}
                            alt={item.name}
                            width={160}
                            height={160}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      {/* Right: Content (Name ... Price, Description, Calorie/Extra) */}
                      <div className="flex-1 ml-4 sm:ml-6 flex flex-col justify-center min-w-0">
                        {/* Header Row: Title ........... Price */}
                        <div className="flex items-baseline w-full">
                          <h4
                            style={{ fontFamily: "'Patrick Hand', cursive" }}
                            className={`text-white text-2xl sm:text-3xl md:text-[28px] font-bold tracking-wide whitespace-nowrap drop-shadow-sm truncate transition-colors duration-200 cursor-pointer ${isBlinking ? 'animate-blue-word-blink text-blue-400' : 'group-hover:text-blue-50'
                              }`}
                          >
                            {item.name}
                          </h4>
                          {/* Dotted connecting line */}
                          <span
                            className={`flex-1 border-b-2 border-dotted mx-2.5 sm:mx-3 relative -top-[5px] transition-colors ${isBlinking ? 'border-blue-400' : 'border-white/60'
                              }`}
                          ></span>
                          {/* Price */}
                          <span
                            style={{ fontFamily: "'Patrick Hand', cursive" }}
                            className={`text-xl sm:text-2xl md:text-[24px] font-bold whitespace-nowrap drop-shadow-sm transition-colors ${isBlinking ? 'text-blue-300' : 'text-white'
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
                              className={`text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded-full transition-all ${isBlinking
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
                              Freshly Prepared
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
                  No items found matching "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 px-5 py-2 bg-white text-[#23aa5d] rounded-full font-semibold text-sm cursor-pointer shadow-md hover:bg-gray-100"
                >
                  View Full Category
                </button>
              </div>
            )}

            {/* Pagination Controls (Pages 1, 2, 3...) */}
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
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all cursor-pointer ${currentPage === page
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