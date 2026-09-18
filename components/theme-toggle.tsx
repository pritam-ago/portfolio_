"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="-mr-2.5 inline-flex h-11 w-11 items-center justify-center text-muted transition-colors duration-150 hover:text-fg"
    >
      {/* Both icons render on the server; CSS picks one, so there is nothing to hydrate. */}
      <Sun aria-hidden="true" className="h-[1.0625rem] w-[1.0625rem] dark:hidden" />
      <Moon aria-hidden="true" className="hidden h-[1.0625rem] w-[1.0625rem] dark:block" />
    </button>
  )
}
