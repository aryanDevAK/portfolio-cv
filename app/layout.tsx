import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AnimatedBackground } from "../components/animated-background"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aryan Khatri - Software Engineer",
  description:
    "Full Stack Software Developer with expertise in building SAAS products, AI integrated platforms and Automation Software",
  generator: "aryanDevAK",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <AnimatedBackground />
        <div className="relative" style={{ zIndex: 1 }}>
          <Suspense fallback={null}>{children}</Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
