import { Section } from "@/components/section"
import { about } from "@/lib/content"

export function About() {
  return (
    <Section id="about" label="About">
      <div className="space-y-5">
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
