"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "Complete Marketplace Management",
  "Quick Commerce Expertise",
  "Dedicated Account Managers",
  "Performance Marketing",
  "Website & Shopify Development",
  "Brand Growth Strategy",
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Why AVENYX
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Your Complete Commerce Growth Partner
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-600">
            We don't just manage marketplaces. We build brands that scale
            across Amazon, Flipkart, Meesho, Blinkit, Shopify and beyond.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -6 }}
              className="flex items-center gap-4 rounded-2xl border p-6 shadow-sm"
            >
              <CheckCircle2 className="text-blue-600" size={28} />
              <span className="font-semibold">{item}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}