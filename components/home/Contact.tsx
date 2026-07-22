"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";


export default function Contact() {

  return (

    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24 text-white"
    >


      {/* Background Glow */}

      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />



      <div className="relative mx-auto max-w-7xl px-6">



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

            CONTACT AVENYX

          </p>



          <h2 className="mt-5 text-5xl font-black">

            Let's Grow Your

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

              {" "}Ecommerce Business

            </span>


          </h2>



          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

            Ready to scale your brand across Amazon,
            Flipkart, Meesho, Shopify and Quick Commerce?
            Connect with AVENYX SOLUTION today.

          </p>


        </motion.div>




        <div className="grid gap-12 lg:grid-cols-2">



          {/* LEFT CONTACT INFO */}


          <motion.div

            initial={{
              opacity:0,
              x:-60
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            className="space-y-6"

          >



            <a

              href="tel:+919426755807"

              className="flex items-center gap-5 rounded-3xl border border-slate-800 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"

            >

              <div className="rounded-2xl bg-blue-600/20 p-4">

                <Phone
                  className="text-blue-400"
                  size={30}
                />

              </div>



              <div>

                <h3 className="text-xl font-bold">

                  Call Us

                </h3>


                <p className="mt-1 text-slate-300">

                  +91 9426755807

                </p>


              </div>


            </a>




            <a

              href="mailto:hello.avenyx@gmail.com"

              className="flex items-center gap-5 rounded-3xl border border-slate-800 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"

            >

              <div className="rounded-2xl bg-blue-600/20 p-4">

                <Mail
                  className="text-blue-400"
                  size={30}
                />

              </div>



              <div>

                <h3 className="text-xl font-bold">

                  Email Us

                </h3>


                <p className="mt-1 text-slate-300">

                  hello.avenyx@gmail.com

                </p>


              </div>


            </a>
                        <div

              className="flex items-center gap-5 rounded-3xl border border-slate-800 bg-white/5 p-6 backdrop-blur-xl"

            >

              <div className="rounded-2xl bg-cyan-500/20 p-4">

                <MapPin
                  className="text-cyan-400"
                  size={30}
                />

              </div>


              <div>

                <h3 className="text-xl font-bold">

                  Office Location

                </h3>


                <p className="mt-1 text-slate-300">

                  Gujarat, India

                </p>


              </div>


            </div>




            {/* WhatsApp Button */}


            <a

              href="https://wa.me/919426755807"

              target="_blank"

              rel="noopener noreferrer"

              className="flex items-center justify-center gap-3 rounded-3xl bg-green-500 px-8 py-5 text-lg font-black text-white transition hover:scale-105 hover:bg-green-600"

            >

              <MessageCircle size={24}/>

              Chat On WhatsApp

            </a>


          </motion.div>





          {/* CONTACT FORM */}



          <motion.form

            initial={{
              opacity:0,
              x:60
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            className="rounded-3xl border border-slate-800 bg-white/5 p-8 backdrop-blur-xl"

          >


            <div className="grid gap-5">



              <input

                type="text"

                placeholder="Your Name"

                className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"

              />



              <input

                type="email"

                placeholder="Email Address"

                className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"

              />



              <input

                type="tel"

                placeholder="Phone Number"

                className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"

              />




              <select

                className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-300 outline-none focus:border-blue-500"

              >

                <option>

                  Select Service

                </option>


                <option>
                  Marketplace Listing
                </option>


                <option>
                  Account Management
                </option>


                <option>
                  Digital Marketing
                </option>


                <option>
                  Website Development
                </option>


              </select>




              <textarea

                rows={5}

                placeholder="Tell us about your business..."

                className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"

              />





              <button

                type="submit"

                className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-black transition hover:scale-105"

              >

                <Send size={20}/>

                Send Message

              </button>




              <p className="text-center text-sm text-slate-400">

                Our team usually responds within 24 hours.

              </p>



            </div>


          </motion.form>



        </div>



      </div>


    </section>


  );

}