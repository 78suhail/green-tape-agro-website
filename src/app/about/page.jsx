// app/about/page.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaPhoneAlt, FaChevronDown } from "react-icons/fa";

const AboutUs = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
        {/* Mobile Image */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/Images/AboutUs/farmers-mobile.jpg"
            alt="Hero Mobile"
            fill
            className="object-cover"
          />
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/Images/AboutUs/farmers-desktop.jpg"
            alt="Hero Desktop"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            About Us
          </h1>
          <div className="mt-4 animate-bounce">
            <FaChevronDown className="w-7 h-7 text-white mx-auto" />
          </div>
        </div>
      </div>

      {/* Owner + Company Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 md:items-center">
        {/* Left Side: Owner Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/Images/AboutUs/owner-sahid-ali.jpg"
              alt="Owner Sahid Ali"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right Side: Owner Info */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900">
            Sahid Ali
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Founder & CEO of <span className="font-semibold">Green Tape Agro Industries</span>. 
            Sahid Ali is a professional in sustainable agriculture, dedicated to providing high-quality farming solutions to help farmers grow and prosper.
          </p>
          <p className="text-gray-700">
            Under his leadership, Green Tape Agro Industries has become a trusted name for premium seeds, fertilizers, and modern farming practices across India.
          </p>

          {/* Feature List */}
          <ul className="border-l-4 border-green-900 pl-4 mb-6 space-y-2 text-gray-800">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-green-900 mt-1" /> Expert guidance in modern agriculture
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-green-900 mt-1" /> High-quality seeds & fertilizers
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-green-900 mt-1" /> Sustainable & eco-friendly solutions
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-green-900 mt-1" /> Dedicated support for farmers
            </li>
          </ul>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              onClick={scrollToTop}
              className="bg-green-900 text-white px-8 py-3 rounded font-semibold hover:bg-green-800 transition text-center"
            >
              CONTACT US
            </Link>
            <a
              href="tel:+919123474586"
              className="flex items-center justify-center bg-green-700 text-white px-8 py-3 rounded font-semibold hover:bg-green-600 transition"
            >
              <FaPhoneAlt className="w-5 h-5 mr-2" />
              +91 91234 74586
            </a>
          </div>
        </div>
      </div>

      {/* Optional Farm Gallery Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16 grid md:grid-cols-2 gap-6">
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg relative">
          <Image
            src="/img7.png"
            alt="Agriculture 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg relative">
          <Image
            src="/Images/AboutUs/farm-field-2.jpg"
            alt="Agriculture 2"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
