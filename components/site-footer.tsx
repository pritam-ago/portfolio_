import { footer } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-content px-5 py-8 text-meta text-muted sm:px-6">
        {footer.copyright}
      </div>
    </footer>
  )
}
