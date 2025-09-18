import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nesrine Hamrouni - Full-Stack Developer",
  description: "Portfolio of Nesrine Hamrouni - Junior Software Engineer specializing in Java Spring Boot & Next.js. Freshly graduated from National School of Engineers of Carthage.",
  keywords: ["Nesrine Hamrouni", "Software Engineer", "Full-Stack Developer", "Java", "Spring Boot", "Next.js", "React", "Portfolio", "Tunisia"],
  authors: [{ name: "Nesrine Hamrouni" }],
  creator: "Nesrine Hamrouni",
  publisher: "Nesrine Hamrouni",
  generator: "Next.js",
  applicationName: "Nesrine Hamrouni Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  themeColor: "#8b5cf6",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamrouni.me",
    siteName: "Nesrine Hamrouni Portfolio",
    title: "Nesrine Hamrouni - Full-Stack Developer",
    description: "Portfolio of Nesrine Hamrouni - Junior Software Engineer specializing in Java Spring Boot & Next.js. Freshly graduated from National School of Engineers of Carthage.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nesrine Hamrouni - Full-Stack Developer Portfolio",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nesrinehamrouni",
    creator: "@nesrinehamrouni",
    title: "Nesrine Hamrouni - Full-Stack Developer",
    description: "Portfolio of Nesrine Hamrouni - Junior Software Engineer specializing in Java Spring Boot & Next.js.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#8b5cf6",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
