'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo1.png" alt="Logo" width={75} height={75} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Call Now + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a href="tel:+919999999999">
              <Button className="bg-green-700 hover:bg-green-800 hidden sm:flex gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>

            {/* Mobile Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </nav>
      </header>

      {/* ===== OVERLAY ===== */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* ===== MOBILE DRAWER MENU ===== */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-green-900 shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b border-green-700">
          <Image src="/logo1.png" alt="Logo" width={60} height={60} />

          <button onClick={() => setIsMenuOpen(false)}>
            <X className="text-white w-6 h-6 hover:text-yellow-300 transition" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col p-6 space-y-5">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-medium hover:text-yellow-300 transition"
            >
              {item.name}
            </Link>
          ))}

          {/* Call Button */}
          <a href="tel:+919123474586" onClick={() => setIsMenuOpen(false)}>
            <button className="w-full bg-yellow-400 text-green-900 font-semibold px-5 py-3 rounded shadow hover:bg-yellow-500 transition flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
