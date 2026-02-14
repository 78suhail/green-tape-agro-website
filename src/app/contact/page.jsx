"use client";

import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPaperPlane,
  FaChevronDown,
} from "react-icons/fa";

export default function AgricultureContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting Green Tape Agro Industries. We will respond soon!");
  };

  const socialIcons = [
    { icon: FaFacebook, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaLinkedin, href: "#" },
    { icon: FaYoutube, href: "#" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
        <img
          src="/images/agriculture-contact.jpg"
          alt="Agriculture Contact"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-black bg-opacity-60" />

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Contact Green Tape Agro Industries
          </h1>
          <div className="mt-4 animate-bounce">
            <FaChevronDown className="w-7 h-7 text-white mx-auto" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-700 font-semibold uppercase tracking-wider">
              Farming Support
            </p>
            <h2 className="text-4xl font-bold text-gray-800">
              Get in Touch With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                  />

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                />

                <textarea
                  name="message"
                  placeholder="Ask anything about farming, crops, fertilizers..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                />

                <button
                  type="submit"
                  className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-green-800"
                >
                  <FaPaperPlane />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg order-2 lg:order-1">
              <div className="bg-green-700 text-white py-6 px-8">
                <h2 className="text-2xl font-bold">Green Tape Agro Industries</h2>
              </div>

              <div className="p-8 space-y-8">
                <div className="flex items-start space-x-4">
                  <FaPhone className="w-6 h-6 text-green-700" />
                  <div>
                    <p className="font-semibold">CALL US</p>
                    <p>+91 9123474586</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaEnvelope className="w-6 h-6 text-green-700" />
                  <div>
                    <p className="font-semibold">EMAIL</p>
                    <p>greentApeagroindustries@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-green-700" />
                  <div>
                    <p className="font-semibold">ADDRESS</p>
                    <p>
                      Selaur Guthani, District – Siwan Bihar India, Pin Code – 841435
                    </p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p><strong>Owner:</strong> Mr. Shahid Ali</p>
                  <p className="mt-2"><strong>Proprietorship Reg No:</strong> BR-0011956</p>
                </div>

                <div className="flex space-x-3 pt-4">
                  {socialIcons.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-green-700 p-3 rounded-lg hover:bg-green-800"
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
