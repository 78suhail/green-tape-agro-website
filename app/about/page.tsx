'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Target, Heart, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">


        {/* HERO SECTION */}
        <section className="relative bg-primary py-20 md:py-28 flex items-center justify-center text-white">
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Green Tape Agro Industries
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Building India’s future with organic compost and sustainable agriculture.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-20">

          {/* STORY SECTION */}
          <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Green Tape Agro Industries was founded with a clear mission –
                to improve soil health and empower Indian farmers with
                100% organic compost and sustainable farming solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we proudly serve thousands of farmers, nurseries,
                landscapers and gardeners across India, delivering premium
                quality compost made with scientific and eco-friendly methods.
              </p>
            </div>

            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/about/f1.webp"
                alt="Compost Manufacturing Unit"
                fill
                className="object-cover"
                priority
              />
            </div>

          </section>

          {/* VALUES SECTION */}
          <section className="mb-20">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-3">
                Our Core Values
              </h2>
              <p className="text-muted-foreground">
                Values that guide our work everyday
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Quality</h3>
                <p className="text-muted-foreground text-sm">
                  Premium lab-tested compost.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Sustainability</h3>
                <p className="text-muted-foreground text-sm">
                  100% eco-friendly production.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Community</h3>
                <p className="text-muted-foreground text-sm">
                  Empowering Indian farmers.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Trusted & certified quality.
                </p>
              </Card>
            </div>
          </section>

          {/* IMAGE GALLERY */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-primary text-center mb-10">
              Our Work in Action
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((img) => (
                <div key={img} className="relative h-64 rounded-xl overflow-hidden shadow">
                  <Image
                    src={`/about/gallery-${img}.webp`}
                    alt="Our Work"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* MISSION */}
          <section className="mb-20">
            <Card className="p-12 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide high-quality organic compost and sustainable
                    agriculture solutions that improve soil fertility,
                    boost crop yield, and protect the environment.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become India’s most trusted organic agriculture brand,
                    empowering farmers towards a greener and healthier future.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Grow Naturally With Us
            </h2>
            <p className="text-muted-foreground mb-6">
              Experience premium quality organic compost today.
            </p>
            <Link href="/product">
              <Button size="lg">Order Now</Button>
            </Link>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
