"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Listing",
    price: "₹10",
    unit: "/ SKU",
    popular: false,
    features: [
      "Amazon Listing",
      "Flipkart Listing",
      "Meesho Listing",
      "SEO Optimized Title",
      "Image Upload",
    ],
  },
  {
    title: "Account Management",
    price: "₹4,999",
    unit: "/ Month",
    popular: true,
    features: [
      "Daily Order Management",
      "Inventory Management",
      "Returns Handling",
      "Performance Monitoring",
      "Dedicated Manager",
    ],
  },
  {
    title: "Brand Growth",
    price: "Custom",
    unit: "",
    popular: false,
    features: [
      "Amazon Ads",
      "Flipkart Ads",
      "Quick Commerce",
      "Website Development",
      "Digital Marketing",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            PRICING
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Simple & Transparent Pricing
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Flexible pricing for startups, growing brands and enterprises.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`rounded-3xl border p-8 shadow-xl ${
                plan.popular
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="mb-6 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-blue-600">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold">{plan.title}</h3>

              <div className="mt-6">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className="ml-2">{plan.unit}</span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-3 font-bold transition ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-slate-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}