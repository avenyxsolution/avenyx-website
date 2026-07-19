"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 via-slate-950 to-slate-900" />

      {/* Background Blur */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

        {/* Left */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400"
          >
            India's Complete eCommerce Growth Partner
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-5xl font-black leading-tight md:text-7xl"
          >
            Grow Your Brand Across
            <span className="block text-blue-500">
              Every Marketplace
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
          >
            From product listing and account onboarding to account
            management, advertising, brand building, quick commerce,
            digital marketing and website development — AVENYX SOLUTION
            helps businesses scale across Amazon, Flipkart, Meesho,
            Myntra, AJIO, Shopify, Blinkit and Zepto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="#contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Get Free Consultation
            </Link>

            <Link
              href="#services"
              className="rounded-xl border border-slate-700 px-8 py-4 font-bold transition hover:bg-slate-800"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-2xl backdrop-blur"
        >
          <h3 className="mb-8 text-3xl font-bold">
            Why Choose AVENYX?
          </h3>

          <div className="space-y-5">
            {[
              "Marketplace Listing",
              "Account Management",
              "Brand Building",
              "Quick Commerce",
              "Digital Marketing",
              "Website Development",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4"
              >
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-blue-600 p-6 text-center">
            <h4 className="text-3xl font-black">500+</h4>
            <p className="mt-2">Brands Growing With Us</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}