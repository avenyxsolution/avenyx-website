"use client";

import { motion } from "framer-motion";
import {
  Store,
  Megaphone,
  Globe,
  ShoppingBag,
  PenTool,
  ArrowRight,
  Search,
  Briefcase,
  TrendingUp,
  CheckCircle,
} from "lucide-react";


const services = [
  {
    icon: Store,
    title: "Marketplace Onboarding",
    description:
      "Complete marketplace setup from scratch including documentation, account creation, brand approvals and category onboarding across leading Indian and global platforms.",
    points: [
      "Amazon, Flipkart & Meesho onboarding",
      "Myntra, AJIO & Snapdeal setup",
      "Etsy, Alibaba & Global marketplace support",
      "Complete documentation assistance",
    ],
  },

  {
    icon: ShoppingBag,
    title: "Account Management",
    description:
      "Complete monthly marketplace management where our experts handle inventory, pricing, listings, customer support, returns and account performance.",
    points: [
      "Amazon, Flipkart, Meesho, AJIO",
      "Inventory & Order Management",
      "Returns & Customer Support",
      "Dedicated Account Manager",
    ],
  },

  {
    icon: Search,
    title: "Product Listing & SEO",
    description:
      "SEO optimized product listings designed to improve ranking, visibility and conversions across every major marketplace.",
    points: [
      "Amazon & Flipkart Listing",
      "Meesho, Myntra & AJIO Catalog",
      "Keyword Research",
      "SEO Content Writing",
    ],
  },

  {
    icon: PenTool,
    title: "Branding & Store Development",
    description:
      "Build a powerful brand identity with premium marketplace branding, A+ content and professional brand stores.",
    points: [
      "Brand Registry Setup",
      "A+ Content Creation",
      "Brand Store Design",
      "Premium Brand Identity",
    ],
  },

  {
    icon: Megaphone,
    title: "Digital Marketing & Ads",
    description:
      "Performance-driven marketing campaigns focused on increasing traffic, sales and return on investment.",
    points: [
      "Amazon PPC Management",
      "Flipkart Ads Management",
      "Google Ads Campaigns",
      "Meta Ads Marketing",
    ],
  },

  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-performance ecommerce websites and custom digital solutions built using modern technologies.",
    points: [
      "Shopify & WooCommerce Stores",
      "React & Next.js Websites",
      "AI Powered Solutions",
      "WordPress Development",
    ],
  },

  {
    icon: Briefcase,
    title: "Business Setup",
    description:
      "Complete business setup support to help brands start and operate professionally with required compliance.",
    points: [
      "Payment Gateway Setup",
      "MSME Registration",
      "Import Export License",
      "Compliance Support",
    ],
  },

  {
    icon: Globe,
    title: "International Marketplace",
    description:
      "Expand your business globally with expert marketplace management and international ecommerce solutions.",
    points: [
      "Amazon Global Selling",
      "Etsy Marketplace",
      "eBay Account Management",
      "Alibaba Management",
    ],
  },

  {
    icon: TrendingUp,
    title: "Growth & Strategy",
    description:
      "Data-driven ecommerce strategies that help brands increase revenue and build long-term growth.",
    points: [
      "Sales Growth Planning",
      "Competitor Analysis",
      "Marketplace Expansion",
      "Performance Reports",
    ],
  },
];


export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24 text-white"
    >

      {/* Background Glow */}

      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />


      <div className="relative mx-auto max-w-7xl px-6">


        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="font-bold uppercase tracking-[0.35em] text-blue-400">
            OUR SERVICES
          </p>


          <h2 className="mt-5 text-5xl font-black">

            Complete Ecommerce

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Growth Solutions
            </span>

          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

            From marketplace onboarding to brand building,
            advertising and website development, AVENYX SOLUTION
            helps businesses launch, manage and scale online.

          </p>

        </div>



        {/* Cards */}


        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">


          {services.map((service,index)=>{

            const Icon = service.icon;


            return(

              <motion.div

                key={service.title}

                initial={{
                  opacity:0,
                  y:40
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  delay:index*0.1
                }}

                whileHover={{
                  y:-10,
                  scale:1.03
                }}

                className="
                group
                rounded-3xl
                border
                border-slate-800
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-500
                hover:bg-white/10
                hover:shadow-2xl
                "

              >


                <div className="
                mb-6
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                transition
                group-hover:rotate-6
                ">

                  <Icon size={32}/>

                </div>



                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>



                <p className="mt-4 leading-7 text-slate-300">
                  {service.description}
                </p>



                <ul className="mt-6 space-y-3">

                  {service.points.map((point)=>(

                    <li
                    key={point}
                    className="flex items-center gap-3 text-sm text-slate-200"
                    >

                      <CheckCircle
                      size={17}
                      className="text-cyan-400"
                      />

                      {point}

                    </li>

                  ))}


                </ul>



                <button
                className="
                mt-8
                flex
                items-center
                gap-2
                font-semibold
                text-blue-400
                transition-all
                group-hover:gap-4
                "
                >

                  Get Started

                  <ArrowRight size={18}/>

                </button>


              </motion.div>


            )


          })}


        </div>


      </div>


    </section>
  );
}