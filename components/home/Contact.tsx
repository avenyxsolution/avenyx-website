"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            CONTACT US
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Let's Grow Your Business
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Ready to grow on Amazon, Flipkart, Meesho, Shopify and Quick
            Commerce? Get in touch with AVENYX SOLUTION today.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-blue-600" size={26} />
              <div>
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-slate-600">+91 9426755807</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-blue-600" size={26} />
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-slate-600">
                  hello.avenyx@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-blue-600" size={26} />
              <div>
                <h3 className="text-xl font-bold">Location</h3>
                <p className="text-slate-600">
                  India
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-xl">

            <div className="grid gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your business..."
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                <Send size={20} />
                Send Message
              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}