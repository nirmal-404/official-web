import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { SplashScreen } from "./SplashScreen"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

import { FoxAnimations } from "@/components/FoxAnimations"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mozilla Campus Club SLIIT",
  description: "Official website of Mozilla Campus Club at SLIIT",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <FoxAnimations />

          <main className="flex-1">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  )
}
