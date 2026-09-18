import { cn } from "@/lib/utils"
import type { InlineLink } from "@/lib/content"

interface InlineLinksProps {
  links: InlineLink[]
  className?: string
}

/**
 * A row of small text links separated by middots. Each link carries a 44px hit
 * area, and `hint` is rendered visually hidden so names like "live" or "source"
 * still identify themselves to a screen reader.
 */
export function InlineLinks({ links, className }: InlineLinksProps) {
  return (
    <ul className={cn("link-row text-meta text-muted", className)}>
      {links.map((link, index) => (
        <li key={link.href} className="flex items-center">
          {index > 0 ? (
            <span aria-hidden="true" className="select-none px-0.5">
              ·
            </span>
          ) : null}
          <a
            href={link.href}
            className="link-inline"
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {link.label}
            {link.hint ? <span className="sr-only">{link.hint}</span> : null}
          </a>
        </li>
      ))}
    </ul>
  )
}
