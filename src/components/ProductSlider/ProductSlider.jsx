"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem/ProductItem";

const ProductSlider = () => {
  const products = [
    {
      id: 1,
      name: "Apple Juice – 64 fl oz Bottle",
      price: 209,
      oldPrice: 399,
      brand: "Bingo",
      rating: 4,
      image: "/products.webp",
    },
    {
      id: 2,
      name: "Organic Orange Juice",
      price: 150,
      oldPrice: 200,
      brand: "Real Fruit",
      rating: 5,
      image: "/product2.webp",
    },
    {
      id: 3,
      name: "Fresh Mango Drink",
      price: 100,
      oldPrice: 150,
      brand: "Tropicana",
      rating: 3,
      image: "/product3.webp",
    },
    {
      id: 4,
      name: "Grape Juice Premium",
      price: 50,
      oldPrice: 70,
      brand: "Minute Maid",
      rating: 4,
      image: "/product4.webp",
    },
  ];

  return (
    <div className="w-full">
      {/* Main Centered Container */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          spaceBetween={20}
          navigation={false}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,  
            },
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id} className="py-3">
              <ProductItem
                name={item.name}
                price={item.price}
                oldPrice={item.oldPrice}
                image={item.image}
                brand={item.brand}
                rating={item.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
