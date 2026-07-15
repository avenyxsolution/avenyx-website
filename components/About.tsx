"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold uppercase tracking-widest text-blue-500">
              About AVENYX
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-tight">
              We Don't Just Manage Stores.
              <br />
              We Build Brands.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              AVENYX SOLUTION is India's complete eCommerce growth partner.
              From Product Listing, Cataloging, Account Management, Advertising,
              Brand Building, Quick Commerce, Shopify Development and Digital
              Marketing — we help businesses scale faster.
            </p>

            <button className="mt-10 flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
              Learn More
              <ArrowRight size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-12"
          >
            <h3 className="text-3xl font-bold">
              Why Choose Us?
            </h3>

            <ul className="mt-8 space-y-5 text-lg">
              <li>✅ Amazon Experts</li>
              <li>✅ Flipkart Growth</li>
              <li>✅ Meesho Specialists</li>
              <li>✅ Quick Commerce</li>
              <li>✅ Shopify Development</li>
              <li>✅ Digital Marketing</li>
              <li>✅ Dedicated Account Managers</li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}