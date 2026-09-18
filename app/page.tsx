import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
import { Stack } from "@/components/stack"
import { Work } from "@/components/work"

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Stack />
      <Contact />
    </>
  )
}
