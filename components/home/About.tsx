"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  BarChart3,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: <Globe size={34} />,
    title: "Multi Marketplace",
    description:
      "Sell across Amazon, Flipkart, Meesho, Myntra, AJIO, Shopify, Blinkit, Zepto, Jiomart, Tata Cliq and many more.",
  },
  {
    icon: <ShoppingCart size={34} />,
    title: "Complete eCommerce",
    description:
      "From product listing and catalog creation to account management, we handle everything for your business.",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Sales Growth",
    description:
      "Boost traffic, improve conversion rates and scale your revenue using proven ecommerce strategies.",
  },
  {
    icon: <BadgeCheck size={34} />,
    title: "Trusted Experts",
    description:
      "Dedicated ecommerce professionals helping brands grow across every major marketplace.",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();
  return (
    <section
      id="about"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold tracking-wider text-blue-700">
              ABOUT AVENYX
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
              Scale Your Brand Across
              <span className="block text-blue-600">
                Every Marketplace
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              AVENYX SOLUTION empowers brands to launch, manage and grow
              across Amazon, Flipkart, Myntra, Meesho, AJIO, Shopify,
              Blinkit, Zepto, Jiomart and other leading marketplaces.
              We provide complete ecommerce management, branding,
              advertising, website development and growth solutions.
            </p>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-8">

              <div>
                <h3 className="text-5xl font-black text-blue-600">
                  500+
                </h3>

                <p className="mt-2 text-slate-600">
                  Brands
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-blue-600">
                  10+
                </h3>

                <p className="mt-2 text-slate-600">
                  Marketplaces
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-blue-600">
                  24/7
                </h3>

                <p className="mt-2 text-slate-600">
                  Support
                </p>
              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-700"
              >
                Get Free Consultation
              </a>

              <a
                href="#services"
                className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
              >
                Explore Services
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-6 sm:grid-cols-2"
          >

            {features.map((feature) => (

              <motion.div
                key={feature.title}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer rounded-3xl border border-transparent bg-white p-8 shadow-lg transition-all duration-500 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-200/50"
              >

                <div className="mb-5 text-blue-600 transition duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}