"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-green-50 py-8 pb-0">
      <div className="container mx-auto px-6">
        {/* FEATURES SECTION */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-8">
          <div className="flex flex-col items-center text-center w-[220px]">
            <LiaShippingFastSolid className="text-[40px] text-green-800" />
            <h3 className="text-[16px] font-medium mt-2">Fast Delivery</h3>
            <p className="text-[13px] text-gray-600">
              Agriculture Products on Time
            </p>
          </div>

          <div className="flex flex-col items-center text-center w-[220px]">
            <PiKeyReturnLight className="text-[40px] text-green-800" />
            <h3 className="text-[16px] font-medium mt-2">Easy Returns</h3>
            <p className="text-[13px] text-gray-600">
              Simple & Hassle Free Policy
            </p>
          </div>

          <div className="flex flex-col items-center text-center w-[220px]">
            <BsWallet2 className="text-[40px] text-green-800" />
            <h3 className="text-[16px] font-medium mt-2">Secure Payment</h3>
            <p className="text-[13px] text-gray-600">100% Safe Transactions</p>
          </div>

          <div className="flex flex-col items-center text-center w-[220px]">
            <BiSupport className="text-[40px] text-green-800" />
            <h3 className="text-[16px] font-medium mt-2">Farmer Support</h3>
            <p className="text-[13px] text-gray-600">Dedicated Customer Help</p>
          </div>
        </div>

        <hr className="border-t border-black/10" />

        {/* MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-8">
          {/* CONTACT INFO */}
          <div>
            <h3 className="text-[20px] font-semibold text-green-900">
              Green Tape Agro Industries
            </h3>

            <p className="text-[14px] mt-3 text-gray-700 leading-6">
              Address: Selaur Guthani, <br />
              District – Siwan, Bihar <br />
              Pin Code – 841435
            </p>

            <p className="text-[14px] mt-2 text-gray-700">
              Email: greentApeagroindustries@gmail.com
            </p>

            <p className="text-[16px] font-bold text-green-800 mt-2">
              Mob: +91 9123474586
            </p>

            <p className="text-[14px] mt-2 text-gray-700">
              Owner: Mr. Shahid Ali
            </p>

            <p className="text-[14px] mt-2 text-gray-700">Reg No: BR-0011956</p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[20px] font-semibold text-green-900">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Products", href: "/products" },
                { name: "Contact Us", href: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-green-800 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-[20px] font-semibold text-green-900">
              Farmer Newsletter
            </h3>

            <p className="text-[14px] mt-3 text-gray-700">
              Get latest agriculture updates, offers and farming tips directly
              to your inbox.
            </p>

            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded outline-none"
              />

              <button className="mt-3 bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-t border-black/10" />

        {/* BOTTOM STRIP */}
        <div className="py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex gap-3">
            <FaFacebookF className="text-green-800 cursor-pointer" />
            <AiOutlineYoutube className="text-green-800 cursor-pointer" />
            <FaPinterestP className="text-green-800 cursor-pointer" />
            <FaInstagram className="text-green-800 cursor-pointer" />
          </div>

          <p className="text-gray-700 mt-3 md:mt-0 text-center">
            © 2025 Green Tape Agro Industries – All Rights Reserved
          </p>

          <div className="mt-3 md:mt-0">
            <Image
              src="/Logo.png"
              alt="Green Tape Agro Logo"
              width={90}
              height={50}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
