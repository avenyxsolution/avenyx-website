"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    desc: "Perfect for new sellers",
    features: [
      "Account Management",
      "Basic Listing",
      "Email Support",
      "Monthly Report",
    ],
  },
  {
    name: "Growth",
    price: "₹14,999",
    desc: "For growing brands",
    features: [
      "Everything in Starter",
      "Ads Management",
      "SEO Optimization",
      "Catalog Management",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Complete Brand Growth",
    features: [
      "Marketplace Management",
      "Quick Commerce",
      "Digital Marketing",
      "Website Development",
      "Dedicated Manager",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            Pricing
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Choose Your Growth Plan
          </h2>

          <p className="mt-6 text-gray-400">
            Flexible plans for every business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
            >
              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-2 text-gray-400">
                {plan.desc}
              </p>

              <h2 className="mt-6 text-5xl font-bold text-blue-500">
                {plan.price}
              </h2>

              <ul className="mt-8 space-y-4">
                {plan.features.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Check className="text-green-500" size={18} />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="mt-10 w-full rounded-xl bg-blue-600 py-4 font-bold hover:bg-blue-700">
                Get Started
              </button>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}