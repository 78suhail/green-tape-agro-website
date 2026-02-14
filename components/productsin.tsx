'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useCart } from '@/lib/store';
import { Leaf, Truck, Shield, Minus, Plus, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProductStructuredData } from '@/components/structured-data';

const product = {
  id: 'compost-10kg',
  name: 'Pasteurized Organic Compost',
  price: 499,
  rating: 4.8,
  reviews: 245,
  description:
    'Premium quality pasteurized organic compost perfect for gardens, farms, and agricultural use. Our compost is made from 100% organic materials and laboratory tested.',
  specs: {
    weight: '10 kg',
    type: 'Pasteurized Organic',
    coverage: '40-50 sq. meters',
    shelf_life: '24 months',
    nutrient_content: 'Nitrogen 2.5%, Phosphorus 1.8%, Potassium 1.2%',
  },
  usage: [
    'Mix with soil before planting vegetables and flowers',
    'Top dressing for existing plants and trees',
    'Potting mix preparation for container gardening',
    'Lawn and grass seeding preparation',
    'Mulching around plants and trees',
  ],
  faqs: [
    {
      question: 'How long does delivery take?',
      answer: 'Standard delivery takes 3-5 business days. Express delivery available for 1-2 days.',
    },
    {
      question: 'Is this compost suitable for indoor plants?',
      answer: 'Yes, absolutely! Mix it with regular potting soil for better results with indoor plants.',
    },
    {
      question: 'Can I use it immediately after purchase?',
      answer: 'Yes, our compost is pasteurized and ready to use immediately. No curing period required.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer 30 days money-back guarantee if you are not satisfied with the product.',
    },
    {
      question: 'How should I store the compost?',
      answer: 'Keep in a cool, dry place. Once opened, use within 3-6 months for best results.',
    },
    {
      question: 'Is shipping available for my location?',
      answer: 'We deliver across India. Select your location at checkout to see shipping charges.',
    },
  ],
};

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
  const addItem = useCart((state) => state.addItem);

  const images = [
    '/product-img/products.webp',
    '/product-img/products_back.webp',
    '/product-img/products-in.webp',
  ];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: images[0],
    });
    for (let i = 1; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: images[0],
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ProductStructuredData />
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Image Gallery */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="bg-secondary rounded-lg overflow-hidden aspect-square flex items-center justify-center">
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
                    className={aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      imageIndex === index ? 'border-primary' : 'border-border'
                    }}
                  >
                    <img src={img} alt={${product.name} ${index + 1}} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">₹{product.price}</span>
                  <span className="text-lg text-muted-foreground">per bag</span>
                </div>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              {/* Specifications */}
              <Card className="p-6 space-y-3">
                <h3 className="font-bold text-lg">Specifications</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weight</span>
                    <span className="font-medium">{product.specs.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-medium">{product.specs.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Coverage</span>
                    <span className="font-medium">{product.specs.coverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shelf Life</span>
                    <span className="font-medium">{product.specs.shelf_life}</span>
                  </div>
                </div>
              </Card>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center gap-2 border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button size="lg" className="w-full" onClick={handleAddToCart}>
                Add to Cart
              </Button>

              {/* WhatsApp Order */}
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                asChild
              >
                <a
                  href="https://wa.me/919876543210?text=Hi%20Green%20Tape%20Agro,%20I%20am%20interested%20in%20ordering%20your%20Organic%20Compost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </a>
              </Button>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  <div className="text-sm">
                    <p className="font-medium">Free Shipping</p>
                    <p className="text-muted-foreground text-xs">Orders above ₹500</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <div className="text-sm">
                    <p className="font-medium">30-Day Returns</p>
                    <p className="text-muted-foreground text-xs">Money-back guarantee</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Usage Instructions */}
          <motion.section
            className="mt-20 py-12 border-y border-border"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-8">How to Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {product.usage.map((step, index) => (
                <Card key={index} className="p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm">{step}</p>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            className="mt-20"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-3xl">
              {product.faqs.map((faq, index) => (
                <AccordionItem key={index} value={item-${index}}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>
        </div>
      </main>

              
    </div>
  );
}