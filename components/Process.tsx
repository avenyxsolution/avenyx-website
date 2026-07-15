"use client";

import { motion } from "framer-motion";

const process = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "Understand your business and marketplaces.",
  },
  {
    step: "02",
    title: "Strategy Planning",
    desc: "Create a growth roadmap for your brand.",
  },
  {
    step: "03",
    title: "Execution",
    desc: "Listings, Ads, Branding & Account Management.",
  },
  {
    step: "04",
    title: "Scale Your Sales",
    desc: "Continuous optimization and growth.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase">
            Our Process
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            How We Grow Your Brand
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <motion.div
              key={item.step}
              whileHover={{ y: -8 }}
              className="rounded-3xl border p-8 shadow-sm"
            >
              <div className="text-5xl font-bold text-blue-600">
                {item.step}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}