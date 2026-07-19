"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Fashion Brand",
    review:
      "AVENYX SOLUTION helped us increase our Amazon sales by 3X within a few months. Highly recommended!",
  },
  {
    name: "Priya Patel",
    company: "Beauty Brand",
    review:
      "Professional team with excellent marketplace management and advertising support.",
  },
  {
    name: "Amit Verma",
    company: "Electronics Seller",
    review:
      "From listing to brand growth, everything was handled perfectly. Great experience!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
            TESTIMONIALS
          </p>

          <h2 className="mt-4 text-5xl font-black">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Trusted by brands across Amazon, Flipkart, Meesho, Shopify and
            Quick Commerce platforms.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <div className="mb-5 flex text-yellow-400">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>

              <p className="leading-8 text-slate-300">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-blue-400">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}