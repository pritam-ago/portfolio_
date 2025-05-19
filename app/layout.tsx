import "./globals.css"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Viewport } from "next"
import { Toaster } from "@/components/ui/toaster"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = {
  title: "Vikas Pritam S | Backend Developer",
  description:
    "Portfolio of Vikas Pritam S, a backend developer specializing in Node.js, Express, MongoDB, and cloud services.",
  keywords: "backend developer, Node.js, Express.js, MongoDB, AWS, Firebase, portfolio",
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
          <Toaster />
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                // Intersection Observer for animations
                const animatedElements = document.querySelectorAll('.animate-on-scroll');

                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('animate-in');
                    } else {
                      entry.target.classList.remove('animate-in');
                    }
                  });
                }, { threshold: 0.1 });

                animatedElements.forEach((element) => {
                  observer.observe(element);
                });
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
