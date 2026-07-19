"use client";

import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-black">
              AVENYX
              <span className="text-blue-500"> SOLUTION</span>
            </h2>

            <p className="mt-5 text-slate-400 leading-7">
              India's Complete eCommerce Growth Partner helping brands
              grow across Amazon, Flipkart, Meesho, Myntra, AJIO,
              Shopify, Blinkit and Zepto.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xl font-bold">Services</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Marketplace Listing</li>
              <li>Account Management</li>
              <li>Brand Building</li>
              <li>Quick Commerce</li>
              <li>Digital Marketing</li>
              <li>Website Development</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-bold">Quick Links</h3>

            <div className="flex flex-col gap-3 text-slate-400">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-bold">Contact</h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 9426755807</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>hello.avenyx@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Globe size={18} />
                <span>www.avenyxsolution.com</span>
              </div>

              <div className="flex gap-4 pt-4 text-2xl">
                <a href="#">
                  <FaInstagram />
                </a>

                <a href="#">
                  <FaLinkedin />
                </a>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} AVENYX SOLUTION. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}