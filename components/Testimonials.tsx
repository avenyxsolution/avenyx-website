"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Amazon Seller",
    review:
      "AVENYX SOLUTION completely transformed our Amazon business. Sales increased by over 300% within a few months.",
  },
  {
    name: "Priya Patel",
    company: "Fashion Brand",
    review:
      "From product listing to advertising and account management, the team handled everything professionally.",
  },
  {
    name: "Amit Verma",
    company: "D2C Brand",
    review:
      "Highly recommended! They helped us launch on Flipkart, Meesho and Blinkit with excellent results.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
            TESTIMONIALS
          </p>

          <h2 className="mt-4 text-5xl font-black">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Trusted by growing brands across India's leading ecommerce
            marketplaces.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]"
            >
              <div className="mb-5 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-300">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-slate-800 pt-6">
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-slate-400">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}