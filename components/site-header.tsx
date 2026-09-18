import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[var(--bg-translucent)] backdrop-blur-[8px]">
      <div className="mx-auto flex h-14 w-full max-w-content items-center justify-between px-5 sm:px-6">
        <span className="text-meta text-muted">vikas pritam s</span>
        <ThemeToggle />
      </div>
    </header>
  )
}
