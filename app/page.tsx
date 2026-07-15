import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TrustedBy from "@/components/TrustedBy";
import Marketplace from "@/components/Marketplace";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import WhyChoose from "@/components/WhyChoose";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TrustedBy />
      <Marketplace />
      <Services />
      <Process />
      <CaseStudies />
      <Team />
      <WhyChoose />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsApp />
    </>
  );
}