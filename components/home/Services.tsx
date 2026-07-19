"use client";

import { motion } from "framer-motion";
import {
  Store,
  Megaphone,
  Globe,
  BarChart3,
  ShoppingBag,
  PenTool,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Marketplace Listing",
    description:
      "Professional product listing for Amazon, Flipkart, Meesho, Myntra, AJIO, Shopify, Tata Cliq, Snapdeal and other marketplaces.",
  },
  {
    icon: BarChart3,
    title: "Account Management",
    description:
      "Complete marketplace account handling including orders, inventory, catalog, returns and performance monitoring.",
  },
  {
    icon: Megaphone,
    title: "Performance Marketing",
    description:
      "Increase sales through Amazon Ads, Flipkart Ads, Meta Ads and Google Ads with ROI-focused campaigns.",
  },
  {
    icon: ShoppingBag,
    title: "Quick Commerce",
    description:
      "Launch and grow your business on Blinkit, Zepto, Instamart, BigBasket and other quick commerce platforms.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern Shopify and Next.js websites designed for high conversions, speed and premium user experience.",
  },
  {
    icon: PenTool,
    title: "Brand Building",
    description:
      "Brand Registry, A+ Content, Brand Store, SEO, Premium Images and complete ecommerce branding solutions.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24 text-white"
    >
      {/* Background Glow */}

      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="font-bold uppercase tracking-[0.35em] text-blue-400">
            OUR SERVICES
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Everything Your Brand
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Needs
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            AVENYX SOLUTION provides complete ecommerce services to help
            businesses launch, manage and scale across India's leading
            marketplaces.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
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

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 transition-transform duration-300 group-hover:rotate-6">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  {service.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-400 transition group-hover:gap-4">

                  Learn More

                  <ArrowRight size={18} />

                </button>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 p-10 text-center shadow-2xl">

          <h3 className="text-4xl font-black">
            Ready to Grow Your Business?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-blue-100">
            Whether you're a startup, growing brand or enterprise,
            AVENYX SOLUTION helps you achieve faster growth across
            Amazon, Flipkart, Meesho, Shopify and Quick Commerce.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:scale-105 hover:bg-slate-100"
          >
            Get Free Consultation
            <ArrowRight size={20} />
          </a>

        </div>

      </div>
    </section>
  );
}