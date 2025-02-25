import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Legatia Tech - Leading Digital Marketing Solutions",
  description:
    "Legatia Tech offers top-notch digital marketing services including Social Media Management, SEO, Full-Stack Website Development, Content Writing, Graphic Designing, and UI/UX Designing.",
  keywords: ["digital marketing", "SEO", "web development", "content writing", "graphic design", "UI/UX design"],
  authors: [{ name: "Legatia Tech" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.legatiatech.com",
    siteName: "Legatia Tech",
    title: "Legatia Tech - Leading Digital Marketing Solutions",
    description:
      "Legatia Tech offers top-notch digital marketing services including Social Media Management, SEO, Full-Stack Website Development, Content Writing, Graphic Designing, and UI/UX Designing.",
    images: [
      {
        url: "https://www.legatiatech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Legatia Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legatia Tech - Leading Digital Marketing Solutions",
    description:
      "Legatia Tech offers top-notch digital marketing services including Social Media Management, SEO, Full-Stack Website Development, Content Writing, Graphic Designing, and UI/UX Designing.",
    images: ["https://www.legatiatech.com/twitter-image.jpg"],
    creator: "@legatiatech",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'