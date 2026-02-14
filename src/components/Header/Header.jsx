"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  const socials = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaPinterestP />, url: "#" },
    { icon: <FaYoutube />, url: "#" },
  ];

  return (
   <header className="bg-green-900 text-white py-4">


      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm">
        
        {/* Phone Number */}
        <div className="flex items-center gap-2">
          <FiPhone className="text-lg" />
          <span className="font-medium">+91 9123474586</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 text-lg">
          {socials.map((s, i) => (
            <Link key={i} href={s.url} className="hover:text-gray-400">
              {s.icon}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
