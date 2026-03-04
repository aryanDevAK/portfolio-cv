import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AnimatedBackground } from "../components/animated-background"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aryan Khatri - AI & Software Engineer",
  description:
    "AI & Software Engineer helping Indian startups and MSMEs build products that actually work — not just prototypes that die in a boardroom presentation.",
  generator: "aryanDevAK",
  icons: {
    icon: "/tab2.png",
  },
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
