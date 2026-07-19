"use client";

import { motion } from "framer-motion";
import {
  Store,
  Megaphone,
  Globe,
  BarChart3,
  ShoppingBag,
  PenTool,
} from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Marketplace Listing",
    description:
      "Amazon, Flipkart, Meesho, Myntra, AJIO, Shopify, Blinkit aur Zepto par professional product listing.",
  },
  {
    icon: BarChart3,
    title: "Account Management",
    description:
      "Daily order monitoring, inventory management, catalog updates aur complete account handling.",
  },
  {
    icon: Megaphone,
    title: "Performance Marketing",
    description:
      "Amazon Ads, Flipkart Ads, Meta Ads aur Google Ads se sales growth.",
  },
  {
    icon: ShoppingBag,
    title: "Quick Commerce",
    description:
      "Blinkit, Zepto, Instamart aur BigBasket onboarding & growth.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Premium Shopify aur Next.js websites with fast loading and modern UI.",
  },
  {
    icon: PenTool,
    title: "Brand Building",
    description:
      "A+ Content, Brand Store, SEO, Product Images aur Complete Brand Identity.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Everything Your Brand Needs
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            AVENYX SOLUTION helps brands launch, manage and scale across every
            marketplace from listing to sales growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all hover:border-blue-500"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}