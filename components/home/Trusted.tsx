"use client";

import Marquee from "react-fast-marquee";

const marketplaces = [
  "Amazon",
  "Flipkart",
  "Meesho",
  "Myntra",
  "AJIO",
  "Shopify",
  "Blinkit",
  "Zepto",
];

export default function Trusted() {
  return (
    <section id="marketplaces" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
            MARKETPLACES WE MANAGE
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Grow Across Every Marketplace
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We help brands launch, optimize and scale across India's leading
            ecommerce and quick-commerce platforms.
          </p>
        </div>

        <Marquee speed={45} pauseOnHover gradient={false}>
          {marketplaces.map((name) => (
            <div
              key={name}
              className="mx-4 flex h-40 w-56 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-black text-slate-900">
                {name}
              </h3>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}