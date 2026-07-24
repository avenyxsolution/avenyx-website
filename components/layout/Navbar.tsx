"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";


const navLinks = [
  {
    name:"Home",
    href:"#home",
  },
  {
    name:"About",
    href:"#trusted",
  },
  {
    name:"Services",
    href:"#services",
  },
  {
    name:"Process",
    href:"#process",
  },
  {
    name:"Pricing",
    href:"#pricing",
  },
  {
    name:"Contact",
    href:"#contact",
  },
];


export default function Navbar(){

const [open,setOpen]=useState(false);


return(

<header
className="
fixed
top-0
z-50
w-full
border-b
border-white/10
bg-slate-950/80
backdrop-blur-xl
"
>


<div
  className="
  mx-auto
  flex
  h-16
  max-w-7xl
  items-center
  justify-between
  px-6
  "
>


{/* LOGO */}

<a
href="#home"
className="flex items-center"
>

<Image

src="/Company/logo.png"

alt="AVENYX SOLUTION"

width={100}

height={34}

priority

className="
h-auto
w-[80px]
object-contain
"

/>

</a>



{/* DESKTOP */}

<nav
className="
hidden
items-center
gap-8
lg:flex
"
>


{
navLinks.map((link)=>(

<a

key={link.name}

href={link.href}

className="
text-sm
font-semibold
text-slate-300
hover:text-white
transition
"

>

{link.name}

</a>

))

}



<a

href="#contact"

className="
flex
items-center
gap-2
rounded-xl
bg-gradient-to-r
from-blue-600
to-cyan-500
px-6
py-3
font-bold
text-white
hover:scale-105
transition
"

>

Get Started

<ArrowRight size={18}/>

</a>


</nav>




{/* MOBILE */}

<button

onClick={()=>setOpen(!open)}

className="
lg:hidden
rounded-lg
border
border-white/20
p-2
text-white
"

>

{
open
?
<X size={25}/>
:
<Menu size={25}/>
}

</button>



</div>




{/* MOBILE MENU */}

{
open &&

<motion.div

initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
}}

className="
lg:hidden
border-t
border-white/10
bg-slate-950
"

>


<div
className="
flex
flex-col
gap-5
px-6
py-8
"
>


{
navLinks.map((link)=>(

<a

key={link.name}

href={link.href}

onClick={()=>setOpen(false)}

className="
text-slate-300
font-semibold
"

>

{link.name}

</a>

))

}



<a

href="#contact"

className="
rounded-xl
bg-blue-600
py-4
text-center
font-bold
text-white
"

>

Get Free Consultation

</a>


</div>


</motion.div>

}


</header>

)


}