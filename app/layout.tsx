import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { SplashScreen } from "./SplashScreen"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

// 1. Import your FoxAnimations component
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
        {/* 2. Wrap everything in a container so we can layer the fox animations on top */}
        <div className="min-h-screen flex flex-col">
          <Navbar />

          {/* 3. Render the FoxAnimations here so it overlays the page content */}
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
