"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  ShoppingBag,
  Store,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 pt-36 pb-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-600/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[150px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
            🚀 India's Complete Ecommerce Growth Partner
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            Grow Your Brand
            <br />

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Across Every Marketplace
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            We help brands launch, manage and scale across Amazon,
            Flipkart, Meesho, Myntra, AJIO, Shopify, Blinkit & Zepto
            with complete ecommerce solutions.
          </p>

          {/* Marketplace Tags */}

          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "Amazon",
              "Flipkart",
              "Meesho",
              "Myntra",
              "AJIO",
              "Shopify",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm transition hover:border-blue-500 hover:bg-blue-600"
              >
                {item}
              </span>
            ))}

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            <a
              href="#contact"
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold transition hover:bg-blue-700"
            >
              Get Free Consultation
              <ArrowRight size={20} />
            </a>

            <a
              href="#services"
              className="rounded-xl border border-slate-700 px-8 py-4 text-lg font-semibold transition hover:border-blue-500 hover:bg-slate-900"
            >
              Explore Services
            </a>

          </div>

          {/* Features */}

          <div className="mt-12 grid gap-4 md:grid-cols-2">

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-400" />
              <span>500+ Brands Served</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-400" />
              <span>10+ Marketplaces</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-400" />
              <span>Dedicated Account Manager</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-400" />
              <span>Complete Ecommerce Solutions</span>
            </div>

          </div>

        </motion.div>        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="rounded-[32px] border border-slate-800 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                Ecommerce Dashboard
              </h3>

              <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold animate-pulse">
                LIVE
              </span>
            </div>

            <div className="grid gap-5">

              <div className="rounded-2xl bg-slate-900/70 p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800 hover:shadow-2xl">
                <div className="flex items-center gap-4">
                  <TrendingUp className="text-green-400" size={36} />

                  <div>
                    <p className="text-sm text-slate-400">
                      Monthly Growth
                    </p>

                    <h2 className="text-3xl font-black text-green-400">
                      +247%
                    </h2>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900/70 p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800 hover:shadow-2xl">
                <div className="flex items-center gap-4">
                  <ShoppingBag className="text-blue-400" size={36} />

                  <div>
                    <p className="text-sm text-slate-400">
                      Products Managed
                    </p>

                    <h2 className="text-3xl font-black">
                      10,000+
                    </h2>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900/70 p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800 hover:shadow-2xl">
                <div className="flex items-center gap-4">
                  <Store className="text-cyan-400" size={36} />

                  <div>
                    <p className="text-sm text-slate-400">
                      Active Marketplaces
                    </p>

                    <h2 className="text-3xl font-black">
                      10+
                    </h2>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 p-8 shadow-2xl">

              <p className="text-sm uppercase tracking-widest text-blue-100">
                AVENYX SOLUTION
              </p>

              <h3 className="mt-2 text-3xl font-black">
                Your Complete Ecommerce Growth Partner
              </h3>

              <p className="mt-4 text-blue-100">
                Listing • Management • Advertising • Branding • Website Development • Quick Commerce
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {[
                  "Amazon",
                  "Flipkart",
                  "Meesho",
                  "Myntra",
                  "AJIO",
                  "Shopify",
                  "Blinkit",
                  "Zepto",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur transition hover:bg-white hover:text-slate-900"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}