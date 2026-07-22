"use client";

import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* TOP SECTION */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">


        {/* COMPANY */}
        <div>

          <h2 className="text-3xl font-black">
            AVENYX
            <span className="text-blue-500">
              SOLUTION
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Complete ecommerce growth partner helping brands
            launch, manage and scale across marketplaces,
            quick commerce and digital platforms.
          </p>


          <div className="mt-6 flex gap-4">

            <a
              href="#"
              className="rounded-xl bg-white/10 p-3 transition hover:bg-blue-600"
            >
              <Instagram size={20}/>
            </a>


            <a
              href="#"
              className="rounded-xl bg-white/10 p-3 transition hover:bg-blue-600"
            >
              <Linkedin size={20}/>
            </a>


            <a
              href="#"
              className="rounded-xl bg-white/10 p-3 transition hover:bg-blue-600"
            >
              <Facebook size={20}/>
            </a>

          </div>

        </div>



        {/* SERVICES */}
        <div>

          <h3 className="text-xl font-bold">
            Services
          </h3>


          <ul className="mt-6 space-y-4 text-slate-400">

            <li>
              Marketplace Onboarding
            </li>

            <li>
              Account Management
            </li>

            <li>
              Product Listing & SEO
            </li>

            <li>
              Digital Marketing
            </li>

            <li>
              Website Development
            </li>

          </ul>

        </div>



        {/* MARKETPLACES */}
        <div>

          <h3 className="text-xl font-bold">
            Marketplaces
          </h3>


          <ul className="mt-6 space-y-4 text-slate-400">

            <li>Amazon</li>
            <li>Flipkart</li>
            <li>Meesho</li>
            <li>Myntra</li>
            <li>AJIO</li>
            <li>Shopify</li>

          </ul>

        </div>
                {/* CONTACT */}
        <div>

          <h3 className="text-xl font-bold">
            Contact Us
          </h3>


          <div className="mt-6 space-y-5 text-slate-400">


            <a
              href="tel:+919426755807"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Phone size={18} className="text-blue-500" />
              +91 9426755807
            </a>


            <a
              href="mailto:hello.avenyx@gmail.com"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Mail size={18} className="text-blue-500" />
              hello.avenyx@gmail.com
            </a>


            <div className="flex items-start gap-3">
              <MapPin 
                size={18}
                className="mt-1 text-blue-500"
              />

              <span>
                Surat, Gujarat, India
              </span>

            </div>


          </div>


          <a
            href="#contact"
            className="
            mt-8
            inline-flex
            items-center
            gap-3
            rounded-xl
            bg-blue-600
            px-6
            py-3
            font-bold
            transition
            hover:bg-blue-700
            "
          >

            Get Started

            <ArrowRight size={18}/>

          </a>


        </div>


      </div>


      {/* BOTTOM */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">


          <p>
            © {new Date().getFullYear()} AVENYX SOLUTION.
            All rights reserved.
          </p>


          <div className="flex gap-6">

            <span>
              Privacy Policy
            </span>

            <span>
              Terms & Conditions
            </span>

          </div>


        </div>

      </div>


    </footer>
  );
}