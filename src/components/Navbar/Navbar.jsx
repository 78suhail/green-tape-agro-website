"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    // { name: "Services", path: "/services" },
    // { name: "Crops", path: "/crops" },
    // { name: "Farming Tips", path: "/tips" },
    { name: "Contact", path: "/contact" },
  ];

  // Scroll lock when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className="w-full sticky top-0 z-50 shadow-md bg-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        
        {/* LOGO SECTION */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/green.png"
              alt="Green Tape Agro Industries"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-green-900">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-green-700 cursor-pointer transition duration-200"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-green-800 text-white px-5 py-2 rounded shadow hover:bg-green-900 transition flex items-center gap-2">
              <IoCallOutline className="text-[22px]" />
              Call Us
            </button>
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars className="text-2xl text-green-900" />
          </button>
        </div>
      </div>

      {/* ===== MOBILE OVERLAY ===== */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          menuOpen ? "opacity-30 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* ===== MOBILE DRAWER MENU ===== */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-green-900 shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b border-green-700">
          
          <div className="flex items-center">
            <Image
              src="/green.png"
              alt="Green Tape Agro Industries"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          <button
            aria-label="Close Menu"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes className="text-xl text-white hover:text-yellow-300 transition" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col p-6 space-y-5">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block text-white font-medium hover:text-yellow-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-yellow-400 text-green-900 font-semibold px-5 py-2 rounded shadow hover:bg-yellow-500 transition flex items-center justify-center gap-2">
              <IoCallOutline className="text-green-900 text-[22px]" />
              Call Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
