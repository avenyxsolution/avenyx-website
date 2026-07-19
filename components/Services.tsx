"use client";

import {
  ShoppingBag,
  Store,
  BarChart3,
  Megaphone,
  Globe,
  Truck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <ShoppingBag size={40} />,
    title: "Marketplace Listing",
    desc: "Professional product listing with SEO optimized titles, bullets and A+ content.",
  },
  {
    icon: <Store size={40} />,
    title: "Account Management",
    desc: "Complete Amazon, Flipkart, Meesho, Myntra, AJIO & Shopify account handling.",
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Sales Growth",
    desc: "Boost traffic, improve conversions and maximize revenue using data-driven strategies.",
  },
  {
    icon: <Megaphone size={40} />,
    title: "Digital Marketing",
    desc: "Performance marketing through Meta Ads, Google Ads and marketplace advertising.",
  },
  {
    icon: <Truck size={40} />,
    title: "Quick Commerce",
    desc: "Launch and grow your brand on Blinkit, Zepto and Instamart.",
  },
  {
    icon: <Globe size={40} />,
    title: "Website Development",
    desc: "Premium ecommerce websites built using Shopify and Next.js.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-bold uppercase tracking-[0.35em] text-blue-500">
            OUR SERVICES
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Everything You Need To
            <span className="block text-blue-500">
              Grow Your Brand
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            AVENYX SOLUTION offers complete ecommerce solutions from
            listing to scaling your business across India's top marketplaces.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-3 hover:border-blue-600 hover:shadow-[0_20px_60px_rgba(37,99,235,0.35)]"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-blue-600/15 p-4 text-blue-500">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {service.desc}
              </p>

              <button className="mt-8 flex items-center gap-2 font-semibold text-blue-500 transition group-hover:gap-4">
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}