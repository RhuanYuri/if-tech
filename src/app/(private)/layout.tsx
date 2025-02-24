import { NavBar } from "@/componets/navbar/navbar";
import "../global.css"

import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google"
import { SideBar } from "@/componets/sidebar/sidebar";

export const metadata: Metadata = {
  title: "IF Tech"
};

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased bg-gray-800 bg-no-repeat bg-top md:bg-right-top">
      <main className="flex flex-col h-screen bg-gray-900 text-gray-100 font-default">
        <NavBar />
        <div className="flex flex-1 overflow-hidden">
        <SideBar />
        {children}
        </div>
        
      </main>
      </body>
    </html>
  );
}
