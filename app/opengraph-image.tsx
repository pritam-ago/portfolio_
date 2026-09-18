import { readFile } from "node:fs/promises"
import { join } from "node:path"

import { ImageResponse } from "next/og"

import { hero, site } from "@/lib/content"

export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  const [regular, medium] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/JetBrainsMono-400.ttf")),
    readFile(join(process.cwd(), "app/fonts/JetBrainsMono-500.ttf")),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfbfa",
          color: "#18181a",
          padding: "80px",
          fontFamily: "JetBrains Mono",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 500, letterSpacing: "-0.03em" }}>{hero.name}</div>
          <div style={{ fontSize: 32, marginTop: 28 }}>{hero.role}</div>
          <div style={{ fontSize: 32, marginTop: 6, color: "#6b6b70" }}>{hero.summary}</div>
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "1px solid #e4e4e2",
            paddingTop: 32,
            fontSize: 24,
            color: "#6b6b70",
          }}
        >
          vikaspritam.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "JetBrains Mono", data: regular, weight: 400, style: "normal" },
        { name: "JetBrains Mono", data: medium, weight: 500, style: "normal" },
      ],
    }
  )
}
