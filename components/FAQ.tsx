"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which marketplaces do you support?",
    answer:
      "We work with Amazon, Flipkart, Meesho, Myntra, AJIO, Shopify, Blinkit, Zepto and other leading ecommerce platforms.",
  },
  {
    question: "What is your starting pricing?",
    answer:
      "Marketplace listing starts from ₹499 per SKU and account management plans start from ₹4,999 per month.",
  },
  {
    question: "Do you provide complete account management?",
    answer:
      "Yes. We manage listings, catalog optimization, inventory, advertising, performance reports and sales growth.",
  },
  {
    question: "Can you build ecommerce websites?",
    answer:
      "Yes. We develop premium ecommerce websites using Shopify and Next.js with modern UI and high performance.",
  },
  {
    question: "Do you offer Quick Commerce services?",
    answer:
      "Yes. We help brands launch and grow on Blinkit, Zepto and other quick commerce platforms.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything you need to know about AVENYX SOLUTION.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-bold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="border-t border-slate-200 px-6 py-5">
                  <p className="leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}