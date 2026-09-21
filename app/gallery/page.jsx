"use client";
import React, { useState, useEffect } from "react";
import { CMS_URL, getCmsImageUrl } from "@/lib/cms";

const initialFallbackImages = [
  { src: "./assets/model/Kisok 1.png", category: "outlets" },
  { src: "./assets/model/JUICE BOUTIQUE 3.png", category: "outlets" },
  { src: "./assets/model/HE2.png", category: "outlets" },
  { src: "./assets/model/JUICE BOUTIQUE 4.png", category: "outlets" },
  { src: "./assets/model/HE4.png", category: "outlets" },
  { src: "./assets/model/Flagship store 1.png", category: "outlets" },

  // Outlets images first
  { src: "/assets/Gallery/Image1.jpg", category: "products" },
  { src: "/assets/Gallery/Image13.jpg", category: "products" },
  { src: "/assets/Gallery/Image24.jpg", category: "products" },
  { src: "/assets/Gallery/Image5.jpg", category: "products" },
  { src: "/assets/Gallery/Image7.jpg", category: "products" },
  { src: "/assets/Gallery/Image9.jpg", category: "products" },
  { src: "/assets/Gallery/Image25.jpg", category: "products" },
  { src: "/assets/Gallery/Image11.jpg", category: "products" },
  { src: "/assets/Gallery/Image12.jpg", category: "products" },
  { src: "/assets/Gallery/Image17.jpg", category: "products" },
  { src: "/assets/Gallery/Image19.jpg", category: "products" },
  { src: "/assets/Gallery/Image14.jpg", category: "products" },
  { src: "/assets/Gallery/Image21.jpg", category: "products" },
  { src: "/assets/Gallery/Image23.jpg", category: "products" },
  { src: "/assets/Gallery/Image4.jpg", category: "products" },
  { src: "/assets/Gallery/Image27.jpg", category: "products" },
  { src: "/assets/Gallery/Image2.jpg", category: "products" },
  { src: "/assets/Gallery/Image29.jpg", category: "products" },
  { src: "/assets/Gallery/Image31.jpg", category: "products" },
  { src: "/assets/Gallery/Image15.jpg", category: "products" },
  { src: "/assets/Gallery/Image3.jpg", category: "products" },
  { src: "/assets/Gallery/Image6.jpg", category: "products" },
  { src: "/assets/Gallery/Image8.jpg", category: "products" },
  { src: "/assets/Gallery/Image10.jpg", category: "products" },
  { src: "/assets/Gallery/Image16.jpg", category: "products" },
  { src: "/assets/Gallery/Image18.jpg", category: "products" },
  { src: "/assets/Gallery/Image20.jpg", category: "products" },
  { src: "/assets/Gallery/Image22.jpg", category: "products" },
  { src: "/assets/Gallery/Image26.jpg", category: "products" },
  { src: "/assets/Gallery/Image28.jpg", category: "products" },
  { src: "/assets/Gallery/Image30.jpg", category: "products" },
  { src: "/assets/Gallery/Image32.jpg", category: "products" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("outlets");
  const [galleryImages, setGalleryImages] = useState(initialFallbackImages);

  useEffect(() => {
    async function loadCmsGallery() {
      try {
        const res = await fetch(`${CMS_URL}/gallery`);
        if (!res.ok) return;
        const json = await res.json();
        if (json && Array.isArray(json.data) && json.data.length > 0) {
          const cmsImages = [];
          json.data.forEach((item) => {
            const cat = (item.category || "outlets").toLowerCase();
            const imgs = Array.isArray(item.images)
              ? item.images
              : item.imageUrl
              ? [item.imageUrl]
              : [];
            imgs.forEach((imgSrc) => {
              if (imgSrc) {
                cmsImages.push({
                  src: getCmsImageUrl(imgSrc),
                  category: cat,
                });
              }
            });
          });
          if (cmsImages.length > 0) {
            setGalleryImages(cmsImages);
          }
        }
      } catch (err) {
        console.warn("Could not fetch CMS gallery on client, using fallback:", err);
      }
    }
    loadCmsGallery();
  }, []);

  const filteredImages = galleryImages.filter(
    (img) => img.category.toLowerCase() === activeFilter.toLowerCase()
  );

  return (
    <div>
      <section
        className="relative bg-cover bg-center text-white min-h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/careerBanner.png')" }}
      >
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h2 className="font-[heading-1] text-3xl sm:text-4xl md:text-6xl mb-4 leading-tight sm:leading-tight md:leading-[1.1]">
            Gallery
          </h2>
          <p className="text-sm md:text-lg text-gray-200 mb-6 font-[para] leading-relaxed">
            Discover the beauty of Zussioberry - a visual taste of our products,
            moments and inspiration.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveFilter("outlets")}
              className={`cursor-pointer px-8 py-3 rounded-lg font-[para] font-semibold transition-all duration-300 ${
                activeFilter === "outlets"
                  ? "bg-[#23aa5d] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Outlets
            </button>
            <button
              onClick={() => setActiveFilter("products")}
              className={`cursor-pointer px-8 py-3 rounded-lg font-[para] font-semibold transition-all duration-300 ${
                activeFilter === "products"
                  ? "bg-[#23aa5d] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Products
            </button>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* CSS Grid Layout with consistent styling for all images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 bg-white"
              >
                <img
                  src={image.src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover aspect-square"
                  style={{ display: "block" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}