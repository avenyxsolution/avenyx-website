"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Award,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const features = [
  "Amazon & Flipkart Experts",
  "Dedicated Account Management",
  "Brand Growth Strategy",
  "Performance Marketing",
];

export default function Trusted() {
  return (
    <section
      id="trusted"
      className="bg-white py-24 text-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              ABOUT AVENYX
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight">
              We Build{" "}
              <span className="text-blue-600">
                Powerful Ecommerce Brands
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              AVENYX SOLUTION helps businesses launch, scale and dominate every
              major ecommerce marketplace with end-to-end services including
              listing, branding, advertising, account management and website
              development.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-green-500" />
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
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

            {/* Card 1 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Award
                className="mb-4 text-blue-600"
                size={42}
              />

              <h3 className="text-2xl font-bold">
                500+ Brands
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                Successfully launched and managed across Amazon, Flipkart,
                Meesho, Myntra and other leading marketplaces.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <TrendingUp className="mb-4 text-green-600" size={42} />

              <h3 className="text-2xl font-bold">
                10X Sales Growth
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                Data-driven strategies that improve traffic,
                conversion rate and long-term revenue.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <ShieldCheck className="mb-4 text-cyan-600" size={42} />

              <h3 className="text-2xl font-bold">
                Trusted Ecommerce Partner
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                From account onboarding to complete marketplace
                management, we handle everything.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-black">
                Why Choose AVENYX?
              </h3>

              <ul className="mt-5 space-y-3">
                <li>✔ Marketplace Listing</li>
                <li>✔ Account Management</li>
                <li>✔ Brand Building</li>
                <li>✔ Digital Marketing</li>
                <li>✔ Website Development</li>
                <li>✔ Quick Commerce</li>
              </ul>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}