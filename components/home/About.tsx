"use client";

import {
  Globe,
  ShoppingCart,
  BarChart3,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: <Globe size={32} />,
    title: "Multi Marketplace",
    description:
      "Sell across Amazon, Flipkart, Meesho, Myntra, AJIO, Shopify, Blinkit & Zepto.",
  },
  {
    icon: <ShoppingCart size={32} />,
    title: "Complete eCommerce",
    description:
      "From product listing to account management, we handle everything.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Sales Growth",
    description:
      "Increase traffic, conversions and long-term revenue with proven strategies.",
  },
  {
    icon: <BadgeCheck size={32} />,
    title: "Trusted Experts",
    description:
      "Professional ecommerce specialists helping brands grow every day.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-blue-600">
              ABOUT AVENYX
            </p>

            <h2 className="mt-4 text-5xl font-black text-slate-900">
              Your Complete eCommerce Growth Partner
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              AVENYX SOLUTION helps businesses launch, manage and grow
              across India's leading ecommerce marketplaces.
              We provide complete solutions including product listing,
              account onboarding, account management, advertising,
              brand building, quick commerce, digital marketing and
              website development.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8">

              <div>
                <h3 className="text-5xl font-black text-blue-600">
                  500+
                </h3>
                <p className="mt-2 text-slate-600">
                  Brands Managed
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-blue-600">
                  10+
                </h3>
                <p className="mt-2 text-slate-600">
                  Marketplaces
                </p>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="grid gap-6 sm:grid-cols-2">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-5 text-blue-600">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}