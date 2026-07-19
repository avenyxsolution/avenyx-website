"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Search,
  Store,
  Megaphone,
  TrendingUp,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Free Consultation",
    description:
      "We understand your business, products, competitors and goals before creating a customized ecommerce strategy.",
  },
  {
    icon: Search,
    title: "Business Analysis",
    description:
      "Complete analysis of products, pricing, competitors, keywords and marketplace opportunities.",
  },
  {
    icon: Store,
    title: "Marketplace Setup",
    description:
      "Professional onboarding, product listing, catalog management and optimization across all marketplaces.",
  },
  {
    icon: Megaphone,
    title: "Advertising & Marketing",
    description:
      "Run Amazon Ads, Flipkart Ads, Meta Ads and Google Ads to maximize visibility and sales.",
  },
  {
    icon: TrendingUp,
    title: "Sales Optimization",
    description:
      "Improve conversions, inventory management, account health and daily sales performance.",
  },
  {
    icon: Trophy,
    title: "Scale Your Brand",
    description:
      "Expand to Quick Commerce, D2C websites and multiple marketplaces for long-term business growth.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black py-24 text-white"
    >
      {/* Background Blur */}
      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="font-bold uppercase tracking-[0.35em] text-blue-400">
            OUR PROCESS
          </p>

          <h2 className="mt-5 text-5xl font-black">
            How We Grow
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Your Brand
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Our proven ecommerce growth process helps businesses launch,
            optimize and scale across Amazon, Flipkart, Meesho, Myntra,
            AJIO, Shopify, Blinkit, Zepto and many more marketplaces.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-slate-800 bg-white/5 p-8 backdrop-blur-lg transition-all duration-300 hover:border-blue-500 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]"
              >

                {/* Step Number */}

                <div className="mb-5 flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white transition-transform duration-300 group-hover:rotate-6">
                    <Icon size={30} />
                  </div>

                  <span className="text-5xl font-black text-slate-700">
                    0{index + 1}
                  </span>

                </div>

                <h3 className="text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  {step.description}
                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 p-10 text-center shadow-2xl">

          <h3 className="text-4xl font-black">
            Ready to Scale Your Business?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-blue-100">
            Let AVENYX SOLUTION handle your ecommerce growth while you
            focus on building your business.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:scale-105 hover:bg-slate-100"
          >
            Book Free Consultation →
          </a>

        </div>

      </div>
    </section>
  );
}