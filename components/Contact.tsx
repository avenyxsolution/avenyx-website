"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
            CONTACT US
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Let's Grow Your Business
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Ready to scale your ecommerce business? Get in touch with
            AVENYX SOLUTION today.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}
          <div>

            <div className="mb-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <div className="mb-5 flex items-center gap-4">
                <Phone className="text-blue-500" size={28} />
                <div>
                  <h3 className="font-bold text-xl">Phone</h3>
                  <p className="text-slate-400">
                    +91 9426755807
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <div className="mb-5 flex items-center gap-4">
                <Mail className="text-blue-500" size={28} />
                <div>
                  <h3 className="font-bold text-xl">Email</h3>
                  <p className="text-slate-400">
                    hello.avenyx@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <div className="mb-5 flex items-center gap-4">
                <MapPin className="text-blue-500" size={28} />
                <div>
                  <h3 className="font-bold text-xl">Location</h3>
                  <p className="text-slate-400">
                    India
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <form className="space-y-6">

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your business..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-lg font-bold transition hover:bg-blue-700"
              >
                <Send size={20} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}