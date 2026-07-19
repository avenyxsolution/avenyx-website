"use client";

import { Check } from "lucide-react";

const plans = [
  {
    title: "Starter",
    price: "₹499",
    subtitle: "Per SKU",
    description: "Perfect for new sellers starting their ecommerce journey.",
    features: [
      "Marketplace Listing",
      "SEO Title & Bullets",
      "Image Upload",
      "Basic Support",
    ],
    button: "Get Started",
    featured: false,
  },
  {
    title: "Business",
    price: "₹4,999",
    subtitle: "Per Month",
    description: "Complete account management for growing brands.",
    features: [
      "Account Management",
      "Catalog Optimization",
      "Performance Monitoring",
      "Advertising Support",
      "Priority Support",
    ],
    button: "Most Popular",
    featured: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    subtitle: "Let's Talk",
    description: "Tailored solutions for large brands and enterprises.",
    features: [
      "Dedicated Manager",
      "Quick Commerce",
      "Brand Building",
      "Website Development",
      "Digital Marketing",
      "Unlimited Support",
    ],
    button: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-bold uppercase tracking-[0.35em] text-blue-600">
            PRICING
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Flexible Pricing Plans
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Choose the plan that best fits your business. From single SKU
            listing to complete ecommerce management.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-3xl border p-10 transition duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "border-blue-600 bg-blue-600 text-white shadow-2xl"
                  : "border-slate-200 bg-white shadow-lg"
              }`}
            >
              {plan.featured && (
                <div className="mb-6 inline-block rounded-full bg-white px-4 py-1 text-sm font-bold text-blue-600">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-black">{plan.title}</h3>

              <div className="mt-6">
                <span className="text-5xl font-black">{plan.price}</span>

                <p
                  className={`mt-2 ${
                    plan.featured ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {plan.subtitle}
                </p>
              </div>

              <p
                className={`mt-6 leading-7 ${
                  plan.featured ? "text-blue-100" : "text-slate-600"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 w-full rounded-xl py-4 font-bold transition ${
                  plan.featured
                    ? "bg-white text-blue-600 hover:bg-slate-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}