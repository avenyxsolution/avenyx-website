"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-slate-100 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            CONTACT US
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Let's Grow Your Business
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Ready to grow on Amazon, Flipkart, Meesho, Shopify,
            Blinkit, Zepto and other leading marketplaces?
            Connect with AVENYX SOLUTION today.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            <a
              href="tel:+919426755807"
              className="flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Phone
                className="text-blue-600"
                size={30}
              />

              <div>
                <h3 className="text-xl font-bold">
                  Call Us
                </h3>

                <p className="mt-1 text-slate-600">
                  +91 9426755807
                </p>
              </div>
            </a>

            <a
              href="mailto:hello.avenyx@gmail.com"
              className="flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Mail
                className="text-blue-600"
                size={30}
              />

              <div>
                <h3 className="text-xl font-bold">
                  Email Us
                </h3>

                <p className="mt-1 text-slate-600">
                  hello.avenyx@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <MapPin
                className="text-blue-600"
                size={30}
              />

              <div>
                <h3 className="text-xl font-bold">
                  Office Location
                </h3>

                <p className="mt-1 text-slate-600">
                  Surat, Gujarat, India
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/919426755807"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl bg-green-500 px-8 py-5 text-center text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-green-600"
            >
              💬 Chat on WhatsApp
            </a>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl"
          >

            <div className="grid gap-6">              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your business..."
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
              >
                <Send size={20} />
                Send Message
              </button>

              <p className="text-center text-sm text-slate-500">
                We usually respond within 24 hours.
              </p>

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}