"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShoppingBag, BarChart3 } from "lucide-react";

const cases = [
  {
    icon: ShoppingBag,
    title: "Amazon Growth",
    result: "3X Sales Increase",
    desc: "Optimized listings, PPC campaigns and catalog management for rapid growth.",
  },
  {
    icon: TrendingUp,
    title: "Flipkart Success",
    result: "250% Revenue Growth",
    desc: "Improved visibility, pricing strategy and account performance.",
  },
  {
    icon: BarChart3,
    title: "Quick Commerce",
    result: "5 Cities Expansion",
    desc: "Successfully launched brands on Blinkit & Zepto with inventory planning.",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            Success Stories
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Real Business Growth
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Every business is different. Our strategy focuses on measurable
            growth across marketplaces and quick commerce platforms.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {cases.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
            >
              <item.icon className="text-blue-500" size={50} />

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <h4 className="mt-4 text-4xl font-bold text-green-400">
                {item.result}
              </h4>

              <p className="mt-5 text-gray-400 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}