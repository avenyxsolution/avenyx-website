"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    number: 500,
    suffix: "+",
    title: "Brands Managed",
  },
  {
    number: 10,
    suffix: "+",
    title: "Marketplaces",
  },
  {
    number: 100,
    suffix: "Cr+",
    title: "Revenue Generated",
  },
  {
    number: 98,
    suffix: "%",
    title: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="bg-blue-600 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Trusted By Growing Brands
          </h2>

          <p className="mt-4 text-blue-100">
            Results that speak louder than words.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl bg-white/10 p-10 text-center backdrop-blur-md"
            >
              <div className="text-5xl font-black">
                <CountUp end={item.number} duration={3} />
                {item.suffix}
              </div>

              <p className="mt-4 text-lg text-blue-100">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}