"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Search,
  Store,
  Megaphone,
  TrendingUp,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Free Consultation",
    description:
      "Understand your business, goals and marketplaces to create the right growth strategy.",
  },
  {
    icon: Search,
    title: "Product & Account Analysis",
    description:
      "We analyze your products, competitors, pricing and account before starting.",
  },
  {
    icon: Store,
    title: "Marketplace Setup",
    description:
      "Professional listing, catalog creation and onboarding on Amazon, Flipkart, Meesho and more.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Advertising",
    description:
      "Launch Amazon Ads, Flipkart Ads, Meta Ads and Google Ads to boost visibility.",
  },
  {
    icon: TrendingUp,
    title: "Sales Growth",
    description:
      "Optimize listings, improve conversion rates and increase daily sales.",
  },
  {
    icon: Trophy,
    title: "Scale Your Brand",
    description:
      "Expand to new marketplaces, Quick Commerce and build a long-term ecommerce brand.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            OUR PROCESS
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            How We Grow Your Brand
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            From consultation to scaling, we manage every step of your
            ecommerce journey with a proven process.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon size={30} />
                </div>

                <div className="mb-3 text-sm font-bold text-blue-600">
                  STEP {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}