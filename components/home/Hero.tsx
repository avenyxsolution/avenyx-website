"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ShoppingCart,
  TrendingUp,
  Globe,
} from "lucide-react";


const marketplaces = [
  "Amazon",
  "Flipkart",
  "Meesho",
  "Myntra",
  "AJIO",
  "Shopify",
  "Blinkit",
  "Zepto",
];


export default function Hero() {

  return (

    <section
      id="home"
      className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-black
      pt-32
      pb-24
      text-white
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        -top-40
        -left-40
        h-96
        w-96
        rounded-full
        bg-blue-600/20
        blur-[150px]
        "
      />


      <div
        className="
        absolute
        bottom-0
        right-0
        h-96
        w-96
        rounded-full
        bg-cyan-500/20
        blur-[150px]
        "
      />



      <div
        className="
        relative
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-16
        px-6
        lg:grid-cols-2
        "
      >


        {/* LEFT CONTENT */}


        <motion.div

          initial={{
            opacity:0,
            x:-60
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

        >


          <span
            className="
            inline-flex
            rounded-full
            border
            border-blue-400/30
            bg-blue-500/10
            px-5
            py-2
            text-sm
            font-bold
            text-blue-400
            "
          >

            🚀 India's Complete Ecommerce Growth Partner

          </span>



          <h1
            className="
            mt-8
            text-5xl
            font-black
            leading-tight
            lg:text-7xl
            "
          >

            Grow Your Brand Across

            <span
              className="
              block
              bg-gradient-to-r
              from-blue-400
              to-cyan-400
              bg-clip-text
              text-transparent
              "
            >

              Every Marketplace

            </span>

          </h1>



          <p
            className="
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-slate-300
            "
          >

            AVENYX SOLUTION helps brands launch, manage and scale
            across Amazon, Flipkart, Meesho, Myntra, Shopify,
            Quick Commerce and global marketplaces with complete
            ecommerce solutions.

          </p>
          
          {/* BUTTONS */}

          <div
            className="
            mt-10
            flex
            flex-wrap
            gap-5
            "
          >

            <a
              href="#contact"
              className="
              flex
              items-center
              gap-3
              rounded-xl
              bg-blue-600
              px-8
              py-4
              font-bold
              transition
              hover:scale-105
              hover:bg-blue-700
              "
            >

              Start Growing

              <ArrowRight size={20}/>

            </a>


            <a
              href="#services"
              className="
              rounded-xl
              border
              border-white/20
              px-8
              py-4
              font-bold
              transition
              hover:border-blue-500
              hover:text-blue-400
              "
            >

              Explore Services

            </a>


          </div>



          {/* FEATURES */}

          <div
            className="
            mt-12
            grid
            gap-5
            sm:grid-cols-3
            "
          >

            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur
              "
            >

              <ShoppingCart
                className="text-blue-400"
                size={28}
              />

              <h3 className="mt-3 font-bold">
                10+ Marketplaces
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Complete selling support
              </p>

            </div>



            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur
              "
            >

              <TrendingUp
                className="text-cyan-400"
                size={28}
              />

              <h3 className="mt-3 font-bold">
                Sales Growth
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Data driven strategy
              </p>

            </div>



            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur
              "
            >

              <Globe
                className="text-blue-400"
                size={28}
              />

              <h3 className="mt-3 font-bold">
                Global Expansion
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                International marketplaces
              </p>

            </div>


          </div>


        </motion.div>




        {/* RIGHT SIDE */}


        <motion.div

          initial={{
            opacity:0,
            x:60
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8,
            delay:0.2
          }}

          className="
          relative
          "

        >


          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            shadow-2xl
            backdrop-blur-xl
            "
          >


            <h3
              className="
              text-2xl
              font-black
              "
            >

              Marketplace Growth

            </h3>


            <p
              className="
              mt-3
              text-slate-400
              "
            >

              Manage your complete ecommerce journey
              from listing to sales growth.

            </p>



            <div
              className="
              mt-8
              grid
              grid-cols-2
              gap-4
              "
            >

              {marketplaces.map((item)=>(

                <div

                  key={item}

                  className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-white/10
                  px-4
                  py-3
                  "

                >

                  <CheckCircle
                    size={18}
                    className="text-cyan-400"
                  />

                  {item}

                </div>

              ))}


            </div>



            <div
              className="
              mt-8
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              p-6
              "
            >

              <h4 className="text-xl font-black">
                Ready To Scale?
              </h4>


              <p className="mt-2 text-blue-100">
                From ₹10/SKU listing to complete account management.
              </p>


            </div>


          </div>


        </motion.div>


      </div>


    </section>

  );

}