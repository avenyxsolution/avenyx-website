"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Brands Managed" },
  { number: "10L+", label: "Products Listed" },
  { number: "25+", label: "Marketplaces Supported" },
  { number: "99%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-white/10 p-8 backdrop-blur"
          >
            <h2 className="text-5xl font-bold">{stat.number}</h2>
            <p className="mt-3">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}