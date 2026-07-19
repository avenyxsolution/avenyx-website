"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Briefcase,
  Store,
  IndianRupee,
  Smile,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    number: 500,
    suffix: "+",
    title: "Brands Managed",
    description: "Successfully launched and managed.",
  },
  {
    icon: Store,
    number: 10,
    suffix: "+",
    title: "Marketplaces",
    description: "Amazon, Flipkart, Meesho & more.",
  },
  {
    icon: IndianRupee,
    number: 100,
    suffix: "Cr+",
    title: "Revenue Generated",
    description: "Helping brands scale faster.",
  },
  {
    icon: Smile,
    number: 98,
    suffix: "%",
    title: "Client Satisfaction",
    description: "Long-term trusted partnerships.",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-blue-600 to-cyan-600 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-white/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">

          <p className="font-bold uppercase tracking-[0.35em] text-blue-100">
            OUR ACHIEVEMENTS
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Trusted By Growing Brands
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Numbers that reflect our commitment to helping businesses
            succeed across every ecommerce marketplace.
          </p>

        </div>

        {/* Stats */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                }}
                className="group rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >

                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 transition-transform duration-300 group-hover:rotate-6">
                  <Icon size={30} />
                </div>

                <div className="text-5xl font-black">

                  <CountUp
                    end={item.number}
                    duration={3}
                  />

                  {item.suffix}

                </div>

                <h3 className="mt-4 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-blue-100">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 text-center">

          <h3 className="text-3xl font-black">
            Ready to Become Our Next Success Story?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-blue-100">
            Let AVENYX SOLUTION help you grow your business with
            marketplace management, advertising, branding and website
            development.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:scale-105 hover:bg-slate-100"
          >
            Start Your Growth Journey →
          </a>

        </div>

      </div>
    </section>
  );
}