"use client";

import { motion } from "framer-motion";

const marketplaces = [
  "Amazon",
  "Flipkart",
  "Meesho",
  "Myntra",
  "AJIO",
  "Nykaa",
  "Blinkit",
  "Zepto",
];

export default function Marketplace() {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Trusted Commerce Platforms
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8"
        >
          {marketplaces.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-5 text-center font-semibold transition hover:border-blue-500 hover:bg-slate-800"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}