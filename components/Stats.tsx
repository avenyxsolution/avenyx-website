"use client";

import CountUp from "react-countup";
import { Users, ShoppingBag, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 500,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    icon: ShoppingBag,
    number: 10000,
    suffix: "+",
    title: "Products Listed",
  },
  {
    icon: TrendingUp,
    number: 50,
    suffix: "Cr+",
    title: "Revenue Generated",
  },
  {
    icon: Award,
    number: 98,
    suffix: "%",
    title: "Success Rate",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-100">
            OUR ACHIEVEMENTS
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Numbers That Speak
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            We help brands grow faster with proven ecommerce strategies
            across all major marketplaces.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/20"
              >
                <div className="mb-5 flex justify-center">
                  <div className="rounded-2xl bg-white/20 p-4">
                    <Icon size={36} />
                  </div>
                </div>

                <h3 className="text-5xl font-black">
                  <CountUp
                    end={item.number}
                    duration={3}
                    enableScrollSpy
                  />
                  {item.suffix}
                </h3>

                <p className="mt-4 text-lg text-blue-100">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}