import "./globals.css"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Viewport } from "next"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = {
  title: "Backend Developer Portfolio",
  description: "Portfolio website showcasing backend development skills and projects",
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: "#0d1117",
  colorScheme: "dark",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${jetbrainsMono.variable} font-mono`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const animatedElements = document.querySelectorAll('.animate-on-scroll');
                
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                    }
                  });
                }, { threshold: 0.1 });
                
                animatedElements.forEach(el => observer.observe(el));
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
