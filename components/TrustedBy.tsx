"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const marketplaces = [
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Flipkart", logo: "/logos/flipkart.svg" },
  { name: "Meesho", logo: "/logos/meesho.svg" },
  { name: "Myntra", logo: "/logos/myntra.svg" },
  { name: "AJIO", logo: "/logos/ajio.svg" },
  { name: "Shopify", logo: "/logos/shopify.svg" },
  { name: "Blinkit", logo: "/logos/blinkit.svg" },
  { name: "Zepto", logo: "/logos/zepto.svg" },
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
            We help brands launch, manage and scale across India's leading
            ecommerce and quick-commerce platforms.
          </p>
        </div>

        <Marquee speed={40} pauseOnHover gradient={false}>
          {marketplaces.map((item) => (
            <div
              key={item.name}
              className="mx-4 flex h-40 w-56 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={120}
                height={60}
                className="h-14 w-auto object-contain"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {item.name}
              </h3>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}