"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-3xl font-black tracking-tight">
          <span className="text-white">AVENYX</span>
          <span className="text-blue-500"> SOLUTION</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-white transition hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 lg:inline-flex"
        >
          Get Free Consultation
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-950 lg:hidden">
          <div className="flex flex-col px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-white transition hover:text-blue-500"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}