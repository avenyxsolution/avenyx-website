"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const faqs = [

  {
    question: "Which ecommerce marketplaces do you manage?",
    answer:
      "We help brands grow across Amazon, Flipkart, Meesho, Myntra, AJIO, Shopify, Blinkit, Zepto, Tata Cliq, Snapdeal and multiple Indian & global marketplaces.",
  },


  {
    question: "Do you provide complete marketplace onboarding?",
    answer:
      "Yes. We handle complete onboarding including documentation, account creation, brand approvals, category setup and marketplace compliance.",
  },


  {
    question: "What services are included in account management?",
    answer:
      "Our team manages product listings, inventory, pricing, orders, returns, customer support, account health and daily marketplace operations.",
  },


  {
    question: "How much does product listing cost?",
    answer:
      "Our product listing services start from ₹10 per SKU depending on marketplace requirements, product category and content requirements.",
  },


  {
    question: "Do you manage ecommerce advertising?",
    answer:
      "Yes. We manage Amazon PPC, Flipkart Ads, Google Ads and Meta Ads with proper strategy, optimization and performance tracking.",
  },


  {
    question: "Can you help build my brand?",
    answer:
      "Yes. We provide Brand Registry, A+ Content, Brand Store creation, premium creatives, SEO and complete brand growth solutions.",
  },


  {
    question: "Do you create ecommerce websites?",
    answer:
      "Yes. We build premium Shopify, WooCommerce, Next.js and custom ecommerce websites focused on speed, design and conversions.",
  },


  {
    question: "Can you help sell internationally?",
    answer:
      "Yes. We support global marketplaces like Amazon Global, Etsy, eBay and Alibaba with onboarding and management solutions.",
  },

];


export default function FAQ() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);


  return (

    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24 text-white"
    >


      {/* Glow */}

      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />



      <div className="relative mx-auto max-w-5xl px-6">



        {/* Heading */}


        <motion.div

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

          className="mb-16 text-center"

        >


          <p className="font-bold uppercase tracking-[0.35em] text-blue-400">

            Frequently Asked Questions

          </p>



          <h2 className="mt-5 text-5xl font-black">

            Everything About

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

              {" "}Ecommerce Growth

            </span>


          </h2>



          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

            Get answers about marketplace management,
            product listing, advertising, branding and
            ecommerce growth solutions by AVENYX SOLUTION.

          </p>


        </motion.div>
                {/* FAQ Accordion */}

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <motion.div

              key={faq.question}

              initial={{
                opacity:0,
                y:30
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                delay:index * 0.08
              }}

              className="overflow-hidden rounded-3xl border border-slate-800 bg-white/5 backdrop-blur-xl"

            >


              <button

                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }

                className="flex w-full items-center justify-between p-6 text-left transition hover:bg-white/5"

              >

                <span className="text-lg font-bold">

                  {faq.question}

                </span>



                <div className={`rounded-full bg-blue-600/20 p-2 transition-transform ${
                  
                  openIndex === index
                    ? "rotate-180"
                    : ""

                }`}>

                  <ChevronDown
                    size={22}
                    className="text-cyan-400"
                  />

                </div>


              </button>




              <AnimatePresence>


                {openIndex === index && (

                  <motion.div

                    initial={{
                      height:0,
                      opacity:0
                    }}

                    animate={{
                      height:"auto",
                      opacity:1
                    }}

                    exit={{
                      height:0,
                      opacity:0
                    }}

                    transition={{
                      duration:0.3
                    }}

                    className="overflow-hidden"

                  >

                    <p className="px-6 pb-6 leading-8 text-slate-300">

                      {faq.answer}

                    </p>


                  </motion.div>

                )}


              </AnimatePresence>


            </motion.div>


          ))}


        </div>




        {/* Bottom CTA */}


        <motion.div

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

          className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 p-10 text-center shadow-2xl"

        >


          <h3 className="text-4xl font-black">

            Still Have Questions?

          </h3>



          <p className="mx-auto mt-5 max-w-2xl text-blue-100">

            Talk with our ecommerce experts and get
            a customized growth strategy for your brand.

          </p>




          <a

            href="#contact"

            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:scale-105"

          >

            Get Free Consultation

          </a>


        </motion.div>



      </div>

    </section>

  );

}