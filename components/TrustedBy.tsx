    "use client";

import { motion } from "framer-motion";

const marketplaces = [
  "Amazon",
  "Flipkart",
  "Meesho",
  "Myntra",
  "AJIO",
  "Blinkit",
  "Zepto",
  "Shopify",
];

export default function TrustedBy() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Trusted Platforms
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            We Grow Brands Across Every Marketplace
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            From marketplace listing to advertising and account management,
            AVENYX helps brands sell everywhere.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {marketplaces.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border bg-white p-8 text-center shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold">{item}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}