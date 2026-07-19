"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Marketplace Listing",
    price: "₹10",
    unit: "/SKU",
    popular: false,
    button: "Start Listing",
    features: [
      "Amazon Listing",
      "Flipkart Listing",
      "Meesho Listing",
      "Myntra & AJIO Listing",
      "SEO Optimized Content",
      "Image Upload",
      "Category Mapping",
    ],
  },

  {
    title: "Account Management",
    price: "₹4,999",
    unit: "/Month",
    popular: true,
    button: "Get Started",
    features: [
      "Dedicated Account Manager",
      "Daily Order Management",
      "Inventory Management",
      "Returns Handling",
      "Advertising Support",
      "Performance Monitoring",
      "Priority Support",
    ],
  },

  {
    title: "Enterprise Growth",
    price: "Custom",
    unit: "",
    popular: false,
    button: "Contact Sales",
    features: [
      "Amazon Ads",
      "Flipkart Ads",
      "Quick Commerce",
      "Website Development",
      "Brand Strategy",
      "Digital Marketing",
      "Dedicated Team",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-slate-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            PRICING
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Simple & Transparent Pricing
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Affordable pricing for startups, growing brands and enterprise
            businesses. Scale your ecommerce business with confidence.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`rounded-3xl border p-8 shadow-xl transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? "scale-105 border-blue-600 bg-gradient-to-br from-blue-600 to-cyan-500 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >

              {plan.popular && (
                <div className="mb-6 inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-blue-600">
                  ⭐ MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-black">
                {plan.title}
              </h3>

              <div className="mt-6">

                <p className="text-sm uppercase tracking-widest opacity-70">
                  Starting From
                </p>

                <span className="text-5xl font-black">
                  {plan.price}
                </span>

                <span className="ml-2 text-lg">
                  {plan.unit}
                </span>

              </div>

              <ul className="mt-8 space-y-4">

                {plan.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check size={18} />
                    <span>{feature}</span>
                  </li>

                ))}

              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-4 font-bold transition-all duration-300 ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:scale-105"
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                }`}
              >
                {plan.button}
              </button>

            </motion.div>

          ))}

        </div>

        <div className="mt-20 rounded-3xl bg-slate-900 p-10 text-center text-white">

          <h3 className="text-3xl font-black">
            Need a Custom Ecommerce Solution?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            We create custom pricing based on your business size,
            marketplaces, advertising requirements and growth goals.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-700"
          >
            Request Custom Quote
          </a>

          <div className="mt-8 text-sm text-slate-400">
            ✔ No Hidden Charges &nbsp; • &nbsp;
            ✔ Flexible Plans &nbsp; • &nbsp;
            ✔ Dedicated Account Manager &nbsp; • &nbsp;
            ✔ Priority Support
          </div>

        </div>

      </div>
    </section>
  );
}