"use client";

const faqs = [
  {
    question: "Which marketplaces do you support?",
    answer:
      "We work with Amazon, Flipkart, Meesho, Myntra, AJIO, Shopify, Blinkit, Zepto and more.",
  },
  {
    question: "Do you provide complete account management?",
    answer:
      "Yes. We handle listing, catalog, advertising, account health, inventory and growth.",
  },
  {
    question: "What is your starting price?",
    answer:
      "Product Listing starts from ₹10 per SKU and Account Management starts from ₹4,999/month.",
  },
  {
    question: "Do you build websites?",
    answer:
      "Yes. We design and develop Shopify, WordPress and custom business websites.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}