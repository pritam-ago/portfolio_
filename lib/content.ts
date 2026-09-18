export interface InlineLink {
  /** Visible link text. Lowercase, terse. */
  label: string
  href: string
  /** Opens in a new tab with noopener/noreferrer. Omit for mailto and same-origin links. */
  external?: boolean
  /** Visually hidden suffix so the accessible name stands on its own out of context. */
  hint?: string
}

export interface Project {
  name: string
  description: string
  stack: string[]
  links: InlineLink[]
}

export interface StackGroup {
  label: string
  items: string[]
}

export interface SocialLink extends InlineLink {
  external: true
  hint: string
}

export const site = {
  url: "https://vikaspritam.vercel.app",
  name: "Vikas Pritam S",
  title: "Vikas Pritam S — Backend & Infrastructure",
  description:
    "Backend and infrastructure. I build services, developer tools, and the systems that run them.",
  email: "pritamsocrates@gmail.com",
} as const

export const hero = {
  name: "Vikas Pritam S",
  role: "Backend and infrastructure.",
  summary: "I build services, developer tools, and the systems that run them.",
} as const

export const heroLinks: InlineLink[] = [
  { label: "resume", href: "/resume/resume.pdf", external: true, hint: " (PDF)" },
  { label: "github", href: "https://github.com/pritam-ago", external: true, hint: " profile" },
  { label: "email", href: "mailto:pritamsocrates@gmail.com", hint: ` ${site.email}` },
]

export const projects: Project[] = [
  {
    name: "drift",
    description:
      "Snapshot your dev Postgres, see which rows changed, put them back. No replication slot, no superuser.",
    stack: ["TypeScript", "PostgreSQL", "CLI"],
    links: [
      {
        label: "npm",
        href: "https://www.npmjs.com/package/@driftcli/drift",
        external: true,
        hint: " package for drift",
      },
      {
        label: "source",
        href: "https://github.com/pritam-ago/driftjs",
        external: true,
        hint: " for drift",
      },
    ],
  },
  {
    name: "TEXUS ’26",
    description:
      "Official site for SRM Ramapuram’s two-day campus fest — event listings, registration flow, and sponsor tiers.",
    stack: ["Next.js", "Supabase", "Tailwind"],
    links: [
      {
        label: "live",
        href: "https://texus26-one.vercel.app",
        external: true,
        hint: " site for TEXUS ’26",
      },
      {
        label: "source",
        href: "https://github.com/pritam-ago/texus26",
        external: true,
        hint: " for TEXUS ’26",
      },
    ],
  },
  {
    name: "meow-cli",
    description:
      "A terminal-native assistant that reads a folder and answers questions about what’s in it.",
    stack: ["Rust"],
    links: [
      {
        label: "source",
        href: "https://github.com/pritam-ago/meow-cli",
        external: true,
        hint: " for meow-cli",
      },
    ],
  },
  {
    name: "File Management System",
    description:
      "Multi-tenant file and folder storage with per-user access control and S3-backed uploads.",
    stack: ["Node.js", "Express", "MongoDB", "AWS S3", "Next.js"],
    links: [
      {
        label: "live",
        href: "https://filesystem.up.railway.app",
        external: true,
        hint: " site for File Management System",
      },
      {
        label: "source",
        href: "https://github.com/pritam-ago/filesystem",
        external: true,
        hint: " for File Management System",
      },
    ],
  },
]

export const about: string[] = [
  "CS undergrad. I’ve been writing code for about seven years, and most of what I enjoy sits behind the interface — request paths, data models, the parts that decide whether a thing holds up under load.",
  "Lately that’s meant Go, Rust, and a lot of time in Postgres and Linux. I’d rather self-host a thing and understand it end to end than wire together someone else’s managed service. Currently working toward cloud and distributed systems work.",
]

export const stackGroups: StackGroup[] = [
  { label: "Languages", items: ["Go", "TypeScript", "Rust", "Python", "JavaScript"] },
  { label: "Backend", items: ["Node.js", "Express", "Fiber", "REST", "WebSockets"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"] },
  { label: "Infra", items: ["Docker", "Linux", "AWS", "Vercel", "Railway", "Git"] },
]

export const contact = {
  blurb: "Open to backend and infrastructure roles, and to talking about anything self-hosted.",
  email: site.email,
} as const

export const socialLinks: SocialLink[] = [
  { label: "github", href: "https://github.com/pritam-ago", external: true, hint: " profile" },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/vikas-pritam/",
    external: true,
    hint: " profile",
  },
  { label: "x", href: "https://x.com/MonsterTonGames", external: true, hint: " profile" },
]

export const footer = {
  copyright: "© 2026 Vikas Pritam S",
} as const
