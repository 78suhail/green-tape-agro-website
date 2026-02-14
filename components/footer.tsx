import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo1.png"
                alt="Green Tape Agro Industries"
                width={55}
                height={55}
                className="object-contain"
              />
              <span className="font-bold text-xl">Green Tape Agro</span>
            </div>
            <p className="text-sm opacity-90">
              Premium organic compost for sustainable agriculture and gardening.
            </p>
            <p className="text-sm opacity-90">Owner: Mr. Shahid Ali</p><p className="text-sm opacity-90">Reg No: BR-0011956</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
              </li>
              <li>
                <Link href="/product" className="hover:opacity-80 transition-opacity">Product</Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition-opacity">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80 transition-opacity">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+919876543210" className="hover:opacity-80 transition-opacity">
                  +91 9123474586
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:greentapeagroindustries@gmail.com" className="hover:opacity-80 transition-opacity">
                  greentapeagroindustries@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Address: Selaur Guthani,
                  District – Siwan, Bihar
                  Pin Code – 841435</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-sm opacity-90 mb-4">
              Subscribe for farming tips and updates.
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded bg-primary-foreground text-primary text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-primary-foreground"
            />
          </div>

        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm opacity-90">
          <p>&copy; 2026 Green Tape Agro Industries. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
