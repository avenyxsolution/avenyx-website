"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Which marketplaces do you support?",
    answer:
      "We work with Amazon, Flipkart, Meesho, Myntra, AJIO, Shopify, Blinkit, Zepto and other ecommerce platforms.",
  },
  {
    question: "What is your listing price?",
    answer:
      "Listing starts from just ₹10 per SKU depending on the marketplace and requirements.",
  },
  {
    question: "Do you provide complete account management?",
    answer:
      "Yes. We manage listings, inventory, orders, returns, advertising, catalog updates and complete account operations.",
  },
  {
    question: "Can you build my ecommerce website?",
    answer:
      "Yes. We develop premium Shopify and Next.js ecommerce websites along with branding and SEO.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us through the website or WhatsApp. We'll schedule a free consultation and guide you through the onboarding process.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-slate-400">
            Everything you need to know before growing your brand with AVENYX SOLUTION.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-slate-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}