"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";


const plans = [

  {
    title: "Marketplace Starter",
    subtitle: "For new sellers & small businesses",

    price: "₹10",
    unit: "/SKU",

    popular: false,

    button: "Start Listing",

    features: [
      "Product Listing Creation",
      "SEO Optimized Product Content",
      "Marketplace Catalog Setup",
      "Product Image Upload",
      "Keyword Optimization",
      "Amazon, Flipkart & Meesho Support",
    ],
  },


  {
    title: "Ecommerce Growth",
    subtitle: "For growing marketplace brands",

    price: "₹4,999",
    unit: "/Month",

    popular: true,

    button: "Get Started",

    features: [
      "Complete Account Management",
      "Daily Order & Inventory Management",
      "Listing Optimization",
      "Pricing & Competition Monitoring",
      "Returns & Customer Support",
      "Marketplace Performance Tracking",
      "Dedicated Account Manager",
    ],
  },


  {
    title: "Brand Growth Pro",
    subtitle: "For scaling businesses",

    price: "Custom",
    unit: "",

    popular: false,

    button: "Contact Sales",

    features: [
      "Brand Registry Support",
      "A+ Content Creation",
      "Brand Store Development",
      "Amazon PPC & Marketplace Ads",
      "Digital Marketing Strategy",
      "Website Development",
      "Marketplace Expansion",
    ],
  },


];


export default function Pricing() {


return (

<section
id="pricing"
className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24 text-white"
>


<div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

<div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />



<div className="relative mx-auto max-w-7xl px-6">


{/* Heading */}

<div className="mb-20 text-center">


<p className="font-bold uppercase tracking-[0.35em] text-blue-400">
PRICING PLANS
</p>


<h2 className="mt-5 text-5xl font-black">

Flexible Ecommerce

<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
{" "}Growth Plans
</span>

</h2>


<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

Choose the right solution for your business.
From marketplace listing to complete ecommerce growth,
AVENYX SOLUTION provides scalable services for every stage.

</p>


</div>





{/* Pricing Cards */}


<div className="grid gap-8 lg:grid-cols-3">


{plans.map((plan,index)=>(


<motion.div

key={plan.title}

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
delay:index*0.15
}}

whileHover={{
y:-10
}}


className={`relative rounded-3xl border p-8 transition-all duration-300 ${
plan.popular

?

"border-blue-500 bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl shadow-blue-500/30"

:

"border-slate-800 bg-white/5 backdrop-blur-xl hover:border-blue-500 hover:shadow-2xl"

}`}


>


{plan.popular && (

<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-2 text-sm font-bold text-blue-600">

⭐ MOST POPULAR

</div>

)}




<h3 className="text-3xl font-black">

{plan.title}

</h3>


<p className="mt-3 text-sm text-slate-300">

{plan.subtitle}

</p>




<div className="mt-8">


<span className="text-5xl font-black">

{plan.price}

</span>


<span className="ml-2 text-lg">

{plan.unit}

</span>


</div>





<ul className="mt-8 space-y-4">


{plan.features.map((feature)=>(


<li
key={feature}
className="flex items-start gap-3"
>


<Check
size={20}
className="mt-1 text-cyan-400"
/>


<span>
{feature}
</span>


</li>


))}


</ul>





<button

className={`mt-10 flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold transition-all ${
plan.popular

?

"bg-white text-blue-600 hover:scale-105"

:

"bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"

}`}

>


{plan.button}

<ArrowRight size={18}/>


</button>



</motion.div>


))}


</div>







{/* Bottom CTA */}


<div className="mt-20 rounded-3xl border border-slate-800 bg-white/5 p-10 text-center backdrop-blur-xl">


<h3 className="text-4xl font-black">

Ready To Scale Your Ecommerce Business?

</h3>


<p className="mx-auto mt-5 max-w-3xl text-slate-300">

Whether you are launching a new brand or expanding across
multiple marketplaces, AVENYX SOLUTION provides the right
strategy, technology and expertise to grow.

</p>



<a

href="#contact"

className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold transition hover:scale-105"

>

Get Free Consultation

<ArrowRight size={20}/>

</a>



</div>



</div>


</section>


);


}