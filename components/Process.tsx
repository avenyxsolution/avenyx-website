"use client";

import { ClipboardList, UserCheck, TrendingUp, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    icon: ClipboardList,
    description:
      "We understand your business, products, goals and target marketplaces before planning your growth strategy.",
  },
  {
    number: "02",
    title: "Account Setup",
    icon: UserCheck,
    description:
      "Marketplace onboarding, product listing, catalog optimization and account configuration for a smooth launch.",
  },
  {
    number: "03",
    title: "Growth Strategy",
    icon: TrendingUp,
    description:
      "SEO optimization, advertising, pricing strategy and brand positioning to maximize visibility and sales.",
  },
  {
    number: "04",
    title: "Scale Your Brand",
    icon: Rocket,
    description:
      "Continuous account management, analytics, performance monitoring and expansion to new marketplaces.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            OUR PROCESS
          </p>

          <h2 className="text-5xl font-black text-slate-900">
            How We Grow Your Brand
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From onboarding to long-term growth, our structured process helps
            businesses succeed across ecommerce and quick commerce platforms.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
                    <Icon size={32} />
                  </div>

                  <span className="text-4xl font-black text-slate-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-8 h-1 w-12 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}