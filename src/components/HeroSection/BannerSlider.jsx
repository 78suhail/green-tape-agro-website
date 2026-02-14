// components/BannerSlider.jsx
"use client"; // Next.js app directory ke liye client-side component

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const BannerSlider = () => {
  const slides = [
    {
      image: "/banner.webp",
      alt: "Healthy Crops",
      textLines: [
        "Grow Your Farm, Grow Your Future",
        "High-Quality Seeds & Fertilizers",
        "Boost Your Crop Yield Today!"
      ],
      buttonText: "Product View",
      buttonLink: "/products"
    },
    {
      image: "/banner2.webp",
      alt: "Modern Farming",
      textLines: [
        "Modern Farming Solutions",
        "Advanced Equipment & Tools",
        "Make Farming Easier & Efficient"
      ],
       buttonText: "Product View",
      buttonLink: "/products"
    },
    {
      image: "/banner3.webp",
      alt: "Farm Advisory",
      textLines: [
        "Expert Crop Advisory",
        "Learn Best Practices from Experts",
        "Protect Your Crops & Maximize Profit"
      ],
       buttonText: "Product View",
      buttonLink: "/products"
    },
  ];

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative overflow-hidden">
            {/* Background Image using Next.js Image */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[850px]">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover animate-zoom"
                priority 
              />
            </div>

            {/* Overlay Text & Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              {slide.textLines.map((line, i) => (
                <h2
                  key={i}
                  className={`text-white font-sans drop-shadow-lg mb-1 sm:mb-2
                    ${i === 0 ? "text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-wide" : ""}
                    ${i === 1 ? "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide" : ""}
                    ${i === 2 ? "text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wide" : ""}
                  `}
                >
                  {line}
                </h2>
              ))}
              <Link href={slide.buttonLink}>
                <button className="mt-4 bg-gradient-to-r from-green-700 to-green-500 hover:from-green-500 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                  {slide.buttonText}
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
