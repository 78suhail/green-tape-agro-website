'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Leaf, Truck, Shield, MessageCircle, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const product = {
  name: 'Green Tape Organic Compost',
  description:
    'Premium quality organic compost specially made for plants, vegetables, farming and gardening. Improves soil fertility, plant growth and crop yield naturally.',
  specs: {
    weight: '10 Kg',
    type: '100% Organic Compost',
    usage: 'Plants, Vegetables, Farming, Gardening',
    shelf_life: '24 Months',
  },
  usage: [
    'Mix compost with soil before planting',
    'Use as top dressing for vegetables & plants',
    'Ideal for pot plants and terrace gardening',
    'Boost soil fertility naturally',
    'Increases crop yield & plant health',
  ],
  faqs: [
    {
      question: 'Is it safe for vegetable plants?',
      answer:
        'Yes, our compost is 100% organic and completely safe for vegetables and fruits.',
    },
    {
      question: 'How to apply compost?',
      answer: 'Mix compost with soil in 1:3 ratio or apply as top dressing.',
    },
    {
      question: 'Do you deliver all over India?',
      answer: 'Yes, we deliver PAN India. Bulk orders available.',
    },
    {
      question: 'How to order?',
      answer: 'Call or WhatsApp us directly to place your order.',
    },
  ],
};

export default function ProductPage() {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    '/product-img/products.webp',
    '/product-img/products_back.webp',
    '/product-img/products-in.webp',
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* IMAGE GALLERY */}
            <div className="space-y-4">
              <div className="bg-secondary rounded-xl overflow-hidden aspect-square shadow">
                <img
                  src={images[imageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setImageIndex(index)}
                    className={`rounded-lg overflow-hidden border-2 transition ${
                      imageIndex === index
                        ? 'border-green-700'
                        : 'border-border'
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* PRODUCT DETAILS */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary">
                {product.name}
              </h1>

              <p className="text-muted-foreground text-lg">
                {product.description}
              </p>

              {/* OFFER PRICE */}
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-green-700">
                    ₹499
                  </span>
                  <span className="text-lg line-through text-muted-foreground">
                    ₹999
                  </span>
                  <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    50% OFF
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Inclusive of all taxes • 10kg pack
                </p>
                <p className="text-xs text-green-700 font-medium">
                  ⚡ Limited Time Offer – Order Now
                </p>
              </div>

              {/* CTA BUTTONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="tel:+919123474586">
                  <Button
                    size="lg"
                    className="w-full bg-green-700 hover:bg-green-800"
                  >
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>

                <a
                  href="https://wa.me/919123474586?text=Hi%20Green%20Tape%20Agro,%20I%20want%20details%20and%20price%20for%20your%20Organic%20Compost"
                  target="_blank"
                >
                  <Button size="lg" variant="outline" className="w-full">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Enquiry
                  </Button>
                </a>
              </div>

              {/* TRUST */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                <div className="flex items-center gap-3">
                  <Truck className="text-green-700" />
                  <p className="text-sm">Fast Delivery</p>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-green-700" />
                  <p className="text-sm">100% Organic</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PRODUCT DETAILS */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Product Details
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(product.specs).map(([key, value]) => (
                <Card key={key} className="p-6 text-center">
                  <Leaf className="mx-auto mb-3 text-green-700" />
                  <p className="font-semibold capitalize">
                    {key.replace('_', ' ')}
                  </p>
                  <p className="text-muted-foreground text-sm">{value}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* HOW TO USE */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-primary mb-8">
              How To Use
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {product.usage.map((step, i) => (
                <Card key={i} className="p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center mx-auto mb-3">
                    {i + 1}
                  </div>
                  <p className="text-sm">{step}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-primary mb-8">
              FAQs
            </h2>

            <Accordion type="single" collapsible className="max-w-3xl">
              {product.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
