"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Headphones,
  TrendingUp,
  CheckCircle2,
  Award,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    description:
      "Professional ecommerce specialists with experience across leading marketplaces.",
  },
  {
    icon: Clock3,
    title: "Fast Support",
    description:
      "Quick response and dedicated account management for smooth operations.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description:
      "Strategies designed to increase visibility, sales and long-term business growth.",
  },
  {
    icon: Headphones,
    title: "Dedicated Manager",
    description:
      "One point of contact for listings, inventory, advertising and daily operations.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Service",
    description:
      "From onboarding to scaling, we manage every aspect of your ecommerce business.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "Premium listing quality, optimized catalogs and performance-driven execution.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            WHY CHOOSE AVENYX
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Built For Brand Growth
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400 text-lg">
            We combine marketplace expertise, technology and data-driven
            strategies to help businesses grow faster across every ecommerce
            platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}