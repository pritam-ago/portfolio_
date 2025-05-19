import "./globals.css"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Viewport } from "next"
import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Vikas Pritam S | Backend Developer",
  description:
    "Portfolio of Vikas Pritam S, a backend developer specializing in Node.js, Express, MongoDB, and cloud services.",
  keywords: "backend developer, Node.js, Express.js, MongoDB, AWS, Firebase, portfolio",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Vikas Pritam S - Backend Developer',
    description: 'Portfolio website of Vikas Pritam S, a backend developer specializing in Node.js, Express.js, MongoDB, and cloud technologies.',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikas Pritam S - Backend Developer',
    description: 'Portfolio website of Vikas Pritam S, a backend developer specializing in Node.js, Express.js, MongoDB, and cloud technologies.',
    images: ['/logo.png'],
  },
}

export const viewport: Viewport = {
  themeColor: "#0d1117",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" className="rounded-full" />
      </head>
      <body className={`${jetbrainsMono.variable} font-mono ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
