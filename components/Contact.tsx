"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Contact Us
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Let's Grow Your Brand
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-600">
            Ready to scale your business across Amazon, Flipkart, Meesho,
            Blinkit, Shopify and more? Let's connect today.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Contact Info */}

          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-600">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-600">
                  hello.avenyx@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600" />
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-gray-600">
                  India
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}

          <form className="space-y-5 rounded-2xl border p-8 shadow-lg">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border p-4"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full rounded-lg border p-4"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your business..."
              className="w-full rounded-lg border p-4"
            />

            <button
              className="w-full rounded-xl bg-blue-600 py-4 text-lg font-bold text-white transition hover:bg-blue-700"
            >
              Get Free Consultation
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}