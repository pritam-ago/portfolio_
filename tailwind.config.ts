import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        hero: ["clamp(2rem, 7vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        label: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.12em" }],
        meta: ["0.75rem", { lineHeight: "1.55" }],
      },
      maxWidth: {
        content: "42rem",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
