"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Droplet, Zap, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper core styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Swiper modules (v10+)
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Data
const features = [
  { icon: Leaf, title: "Fully Organic", description: "Made from 100% organic materials with no chemical additives." },
  { icon: Droplet, title: "Enriched Nutrients", description: "Rich in essential micronutrients and organic matter." },
  { icon: Zap, title: "Quick Action", description: "Pasteurized for immediate use without waiting periods." },
  { icon: Shield, title: "Certified Quality", description: "Laboratory tested and certified for purity and potency." },
];

const benefits = [
  { title: "Improved Soil Health", description: "Enhances soil structure and water retention capacity." },
  { title: "Increased Yields", description: "Promotes healthier plant growth and better crop production." },
  { title: "Sustainable Farming", description: "Reduces dependency on chemical fertilizers." },
  { title: "Cost Effective", description: "10kg bag covers up to 40-50 square meters." },
];

const images = ["/home-Slider-img/slider1.webp", "/home-Slider-img/slider2.webp", "/home-Slider-img/slider3.webp"];

const reviews = [
  { name: "Suhail Rana", role: "Farmer, Karnataka", text: "Best compost I have used in 2 years of farming. My yield increased by 35% this season!", rating: 5 },
  { name: "Priya Singh", role: "Gardening Enthusiast", text: "My plants have never looked healthier. Highly recommend for all gardeners.", rating: 5 },
  { name: "Amit Patel", role: "Agricultural Professional", text: "The quality and consistency is outstanding. Worth every penny.", rating: 5 },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-balance">
                Transform Your Soil with Premium Organic Compost
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Pasteurized, nutrient-rich compost by Green Tape Agro Industries. Perfect for agriculture, gardening, and sustainable farming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/product">
                  <Button size="lg" className="w-full sm:w-auto">
                    Product
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
            {/* Image Slider */}
            <motion.div variants={itemVariants}>
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  pagination={{ clickable: true }}
                  navigation={false}
                  className="w-full h-full"
                >
                  {images.map((src, idx) => (
                    <SwiperSlide key={idx} className="relative w-full h-full">
                      <img
                        src={src}
                        alt={`slide-${idx}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Our Compost?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Discover the benefits of premium organic compost for your plants and soil.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Real Results for Your Plants</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Experience the transformative benefits of our premium compost.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Join thousands of satisfied farmers and gardeners.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {reviews.map((review, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 flex-1">{review.text}</p>
                  <div>
                    <p className="font-bold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <motion.div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Soil?</h2>
          <p className="text-lg opacity-90 mb-8">Order your 10kg bag of premium organic compost today and start seeing results within weeks.</p>
          <Link href="/product">
            <Button size="lg" variant="secondary">
              Order Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
