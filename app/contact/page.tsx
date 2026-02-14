'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Green Tape Agro,%0AName: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <motion.div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg opacity-90">
              Have questions? We'd love to hear from you. Our team is here to help.
            </p>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more..."
                      rows={6}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Phone</h3>
                      <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 9123474586
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Email</h3>
                      <a href="mailto:greentapeagroindustries@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        greentapeagroindustries@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Address</h3>
                       <p className="text-muted-foreground text-sm">
                      Green Tape Agro Industries<br />
                      Selaur Guthani, Siwan<br />
                      Bihar 841435, India
                    </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6 bg-secondary">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    Quick Contact
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Connect with us on WhatsApp for instant support
                  </p>
                  <a
                    href="https://wa.me/9123474586"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button size="sm" className="w-full">
                      Chat on WhatsApp
                    </Button>
                  </a>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          {/* Map Section */}
<motion.section
  className="mt-20"
  variants={itemVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <h2 className="text-2xl font-bold text-primary mb-8">Visit Us</h2>

  <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg border">
    <iframe
      src="https://www.google.com/maps?q=Selaur+Guthani,+Siwan,+Bihar+841435&output=embed"
      width="100%"
      height="100%"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="border-0"
    />
  </div>

  <div className="mt-6 text-center text-muted-foreground">
    <p className="font-medium text-primary">Green Tape Agro Industries</p>
    <p>Selaur Guthani, District – Siwan, Bihar 841435, India</p>
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
            <h2 className="text-2xl font-bold text-primary mb-8">Common Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">How can I place an order?</h3>
                <p className="text-muted-foreground text-sm">
                  Visit our product page and add items to your cart, then proceed to checkout. You can also order via WhatsApp.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">What's your return policy?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer a 30-day money-back guarantee on all products if you're not satisfied.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">Do you deliver outside India?</h3>
                <p className="text-muted-foreground text-sm">
                  Currently, we deliver within India. Contact us for bulk international orders.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">Can I get bulk discounts?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! Contact our sales team for wholesale pricing on bulk orders.
                </p>
              </Card>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
