import { InlineLinks } from "@/components/inline-links"
import { hero, heroLinks } from "@/lib/content"

export function Hero() {
  return (
    <section id="intro" aria-labelledby="intro-name" className="animate-rise">
      <h1 id="intro-name" className="text-hero font-medium [overflow-wrap:anywhere]">
        {hero.name}
      </h1>
      <p className="mt-6">{hero.role}</p>
      <p className="mt-1 text-muted">{hero.summary}</p>
      <InlineLinks links={heroLinks} className="mt-8" />
    </section>
  )
}
