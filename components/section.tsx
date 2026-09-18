import type { ReactNode } from "react"

interface SectionProps {
  /** Doubles as the element id and the id stem for the labelling heading. */
  id: string
  label: string
  children: ReactNode
}

export function Section({ id, label, children }: SectionProps) {
  const labelId = `${id}-label`

  return (
    <section id={id} aria-labelledby={labelId}>
      <h2 id={labelId} className="text-label font-normal uppercase text-muted">
        {label}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  )
}
