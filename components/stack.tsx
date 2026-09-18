import { Section } from "@/components/section"
import { stackGroups } from "@/lib/content"

export function Stack() {
  return (
    <Section id="stack" label="Stack">
      <dl className="space-y-4">
        {stackGroups.map((group) => (
          <div key={group.label} className="sm:flex sm:gap-4">
            <dt className="text-label uppercase text-muted sm:w-28 sm:shrink-0 sm:pt-[0.1875rem]">
              {group.label}
            </dt>
            <dd className="mt-1 text-meta sm:mt-0 sm:flex-1">
              {group.items.map((item, index) => (
                <span key={item}>
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-muted">
                      {" · "}
                    </span>
                  ) : null}
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
