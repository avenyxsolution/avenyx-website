import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Trusted from "@/components/home/Trusted";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Stats from "@/components/home/Stats";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";

import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        id="main-content"
        className="min-h-screen overflow-x-hidden bg-white"
      >
        <Hero />

        <About />

        <Trusted />

        <Services />

        <Process />

        <Stats />

        <Pricing />

        <Testimonials />

        <FAQ />

        <Contact />
      </main>

      <Footer />

      <WhatsApp />
    </>
  );
}