"use client";

import { Mail, Phone } from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              AVENYX SOLUTION
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              India's Complete eCommerce Growth Partner for Amazon, Flipkart,
              Meesho, Myntra, AJIO, Shopify, Blinkit, Zepto and Digital
              Marketing.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Marketplace Management</li>
              <li>Product Listing</li>
              <li>Quick Commerce</li>
              <li>Digital Marketing</li>
              <li>Website Development</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 94267 55807</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>hello.avenyx@gmail.com</span>
              </div>

              <div className="flex gap-4 pt-4">

                <a
                  href="https://wa.me/919426755807"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-800 p-3 transition hover:bg-green-600"
                >
                  <FaWhatsapp size={18} />
                </a>

                <a
                  href="#"
                  className="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="#"
                  className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="#"
                  className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-600"
                >
                  <FaGlobe size={18} />
                </a>

              </div>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-gray-500">
          © 2026 AVENYX SOLUTION. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}