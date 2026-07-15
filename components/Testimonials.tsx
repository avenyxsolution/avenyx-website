"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Fashion Brand",
    text: "AVENYX helped us increase our Amazon sales by 3X within months.",
  },
  {
    name: "Beauty Seller",
    text: "Their marketplace management and ads team is outstanding.",
  },
  {
    name: "D2C Founder",
    text: "From listing to branding, everything was handled professionally.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -8 }}
              className="rounded-2xl bg-slate-900 p-8 border border-slate-700"
            >
              <p className="text-gray-300 leading-7">
                "{item.text}"
              </p>

              <h3 className="mt-8 text-xl font-bold">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}