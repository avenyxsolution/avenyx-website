"use client";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Globe,
  ShoppingBag,
  Briefcase,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const services = [
  "Marketplace Onboarding",
  "Account Management",
  "Product Listing & SEO",
  "Amazon Advertising",
  "Flipkart Growth",
  "Quick Commerce",
  "Website Development",
  "Digital Marketing",
];

const marketplaces = [
  "Amazon",
  "Flipkart",
  "Meesho",
  "Myntra",
  "AJIO",
  "Shopify",
  "Blinkit",
  "Zepto",
];

const quickLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#trusted",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Process",
    href: "#process",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_40%)]" />

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />



      {/* ================= CTA ================= */}

      <section className="relative border-b border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-20 lg:flex-row">

          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">

              <ShieldCheck size={16} />

              India's Trusted Ecommerce Growth Partner

            </span>

            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight md:text-6xl">

              Let's Build Your

              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

                Next Ecommerce Success

              </span>

            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">

              From Product Listing and Account Management to
              Marketplace Growth, Digital Marketing, Quick Commerce
              and Website Development — AVENYX SOLUTION helps
              businesses grow faster.

            </p>

          </div>

          <div className="flex flex-col gap-4 sm:flex-row">

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white transition hover:scale-105"
            >
              Get Free Consultation

              <ArrowRight size={18} />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Explore Services
            </a>

          </div>

        </div>

      </section>



      {/* ================= MAIN FOOTER ================= */}

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-4">

        {/* COMPANY */}

        <div>

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-xl font-black">

              A

            </div>

            <div>

              <h2 className="text-3xl font-black">

                AVENYX

                <span className="text-blue-500">

                  {" "}SOLUTION

                </span>

              </h2>

              <p className="text-sm text-slate-400">

                Ecommerce Growth Agency

              </p>

            </div>

          </div>

          <p className="mt-8 leading-8 text-slate-400">

            Helping Indian brands launch, manage and scale
            across Amazon, Flipkart, Meesho, Myntra,
            Shopify, Blinkit and Zepto with end-to-end
            ecommerce solutions.

          </p>

          <div className="mt-8 flex gap-4">

            <a
              href="https://instagram.com/avenyxsolution"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white/10 p-4 transition hover:-translate-y-1 hover:bg-blue-600"
            ><FaInstagram size={22} />
              
            </a>

            <a
              href="https://www.linkedin.com/company/avenyxsolution"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white/10 p-4 transition hover:-translate-y-1 hover:bg-blue-600"
            >
              <FaLinkedinIn size={22} />
            </a>

            <a
              href="https://facebook.com/avenyxsolution"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white/10 p-4 transition hover:-translate-y-1 hover:bg-blue-600"
            >
              <FaFacebookF size={22} />
            </a>

          </div>
        </div>
                {/* SERVICES */}

        <div>
          <div className="mb-8 flex items-center gap-3">
            <ShoppingBag className="text-blue-500" size={22} />
            <h3 className="text-2xl font-bold">Services</h3>
          </div>

          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="group flex items-center gap-3 text-slate-400 transition hover:text-white"
                >
                  <ChevronRight
                    size={18}
                    className="text-blue-500 transition group-hover:translate-x-1"
                  />
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* MARKETPLACES */}

        <div>
          <div className="mb-8 flex items-center gap-3">
            <Globe className="text-blue-500" size={22} />
            <h3 className="text-2xl font-bold">Marketplaces</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {marketplaces.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="mb-5 flex items-center gap-3">
              <Briefcase className="text-blue-500" size={22} />
              <h3 className="text-2xl font-bold">Quick Links</h3>
            </div>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-3 text-slate-400 transition hover:text-white"
                  >
                    <ChevronRight
                      size={18}
                      className="text-blue-500 transition group-hover:translate-x-1"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CONTACT */}

        <div>
          <h3 className="mb-8 text-2xl font-bold">
            Contact Information
          </h3>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

            <a
              href="tel:+919426755807"
              className="mb-6 flex items-center gap-4 transition hover:text-white"
            >
              <div className="rounded-xl bg-blue-600 p-3">
                <Phone size={18} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Phone
                </p>

                <p className="font-semibold">
                  +91 9426755807
                </p>
              </div>
            </a>

            <a
              href="mailto:hello.avenyx@gmail.com"
              className="mb-6 flex items-center gap-4 transition hover:text-white"
            >
              <div className="rounded-xl bg-cyan-600 p-3">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Email
                </p>

                <p className="font-semibold break-all">
                  hello.avenyx@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-500 p-3">
                <MapPin size={18} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Office
                </p>

                <p className="font-semibold leading-7">
                  Surat,
                  <br />
                  Gujarat,
                  <br />
                  India
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-bold transition hover:scale-[1.03]"
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>

          </div>
        </div>

      </div>
            {/* ================= NEWSLETTER ================= */}

      <section className="border-t border-white/10 border-b border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-16 lg:flex-row">

          <div>

            <span className="rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-400">
              Stay Updated
            </span>

            <h2 className="mt-5 text-4xl font-black">
              Subscribe For Ecommerce Insights
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-slate-400">
              Get marketplace updates, ecommerce tips,
              growth strategies and industry news directly
              in your inbox.
            </p>

          </div>

          <form className="flex w-full max-w-xl flex-col gap-4 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-6
              py-4
              outline-none
              transition
              focus:border-blue-500
              "
            />

            <button
              type="submit"
              className="
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-8
              py-4
              font-bold
              transition
              hover:scale-105
              "
            >
              Subscribe
            </button>

          </form>

        </div>

      </section>

      {/* ================= BOTTOM ================= */}

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-slate-400 lg:flex-row">

        <div>

          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            AVENYX SOLUTION
          </span>

          . All Rights Reserved.

        </div>

        <div className="flex flex-wrap items-center gap-6">

          <a
            href="#"
            className="transition hover:text-white"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            Terms & Conditions
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            Refund Policy
          </a>

        </div>

        <div className="text-center lg:text-right">

          <span className="text-slate-500">
            Designed & Developed by
          </span>

          <br />

          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-bold text-transparent">
            AVENYX SOLUTION
          </span>

        </div>

      </div>

    </footer>
  );
}