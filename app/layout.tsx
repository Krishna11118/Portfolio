import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], display: 'swap' })

export const metadata = {
  title: "Portfolio | Developer",
  description: "Personal portfolio website",
  icons: {
    icon: "/tabIcon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical API endpoints */}
        <link rel="dns-prefetch" href="https://api.ip2location.io" />
        <link rel="preconnect" href="https://api.ipify.org" />
      </head>
      <body className={inter.className} >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}