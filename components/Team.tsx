"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Marketplace Experts",
    role: "Amazon • Flipkart • Meesho",
  },
  {
    name: "Performance Marketing",
    role: "Meta Ads • Google Ads",
  },
  {
    name: "Web Development",
    role: "Shopify • WordPress • Next.js",
  },
  {
    name: "Account Management",
    role: "Catalog • Orders • Support",
  },
];

export default function Team() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Our Team
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Experts Behind Your Growth
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            A dedicated team helping brands grow across marketplaces,
            quick commerce and digital platforms.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {team.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white">
                {member.name.charAt(0)}
              </div>

              <h3 className="mt-6 text-center text-2xl font-bold">
                {member.name}
              </h3>

              <p className="mt-3 text-center text-gray-600">
                {member.role}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}