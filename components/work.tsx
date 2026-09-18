import { InlineLinks } from "@/components/inline-links"
import { Section } from "@/components/section"
import { projects } from "@/lib/content"

export function Work() {
  return (
    <Section id="work" label="Work">
      <ol>
        {projects.map((project) => (
          <li
            key={project.name}
            className="border-t border-line py-7 first:border-t-0 first:pt-0 last:pb-0"
          >
            <h3 className="font-medium [overflow-wrap:anywhere]">{project.name}</h3>
            <p className="mt-2">{project.description}</p>
            <p className="mt-3 text-meta text-muted">{project.stack.join(" · ")}</p>
            <InlineLinks links={project.links} className="mt-2" />
          </li>
        ))}
      </ol>
    </Section>
  )
}
