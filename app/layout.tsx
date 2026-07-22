import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

  title:
    "AVENYX SOLUTION | Complete Ecommerce Growth Partner",


  description:
    "AVENYX SOLUTION helps brands grow across Amazon, Flipkart, Meesho, Myntra, AJIO, Shopify and Quick Commerce with marketplace management, product listing, advertising, branding and website development.",


  keywords: [

    "AVENYX SOLUTION",
    "Ecommerce Agency India",
    "Amazon Account Management",
    "Flipkart Account Management",
    "Marketplace Onboarding",
    "Product Listing Services",
    "Amazon PPC",
    "Digital Marketing",
    "Shopify Development",
    "Quick Commerce",
    "Ecommerce Growth Partner",

  ],


  authors: [
    {
      name: "AVENYX SOLUTION",
    },
  ],


  creator:
    "AVENYX SOLUTION",


  icons: {

    icon: "/Company/logo.png",

    shortcut: "/Company/logo.png",

    apple: "/Company/logo.png",

  },


  openGraph: {

    title:
      "AVENYX SOLUTION | Grow Your Brand Across Every Marketplace",


    description:
      "Complete ecommerce solutions from marketplace onboarding, product listing, account management, advertising, branding and website development.",


    siteName:
      "AVENYX SOLUTION",


    type:
      "website",


    images: [

      {
        url: "/Company/logo.png",

        width: 800,

        height: 800,

        alt: "AVENYX SOLUTION Logo",

      },

    ],

  },


  twitter: {

    card:
      "summary_large_image",


    title:
      "AVENYX SOLUTION | Ecommerce Growth Partner",


    description:
      "Launch, manage and scale your ecommerce business with AVENYX SOLUTION.",


    images: [
      "/Company/logo.png"
    ],

  },


  robots: {

    index:
      true,

    follow:
      true,

  },

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="en">

      <body className="antialiased">

        {children}

      </body>

    </html>

  );

}