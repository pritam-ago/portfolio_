import { InlineLinks } from "@/components/inline-links"
import { Section } from "@/components/section"
import { contact, socialLinks } from "@/lib/content"

export function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className="text-muted">{contact.blurb}</p>
      <p className="mt-6">
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex min-h-[2.75rem] items-center font-medium transition-colors duration-150 hover:text-accent sm:text-lg [overflow-wrap:anywhere]"
        >
          {contact.email}
        </a>
      </p>
      <InlineLinks links={socialLinks} className="mt-4" />
    </Section>
  )
}
