"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export default function MobileNav({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="border-[#30363d]">
            <Menu className="h-5 w-5 text-[#58a6ff]" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-[#161b22] border-l border-[#30363d] text-[#e6edf3] w-[250px]">
          <SheetHeader>
            <SheetTitle className="text-[#58a6ff]">Vikas Pritam S</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-8">
            <Link
              href="#about"
              onClick={handleLinkClick}
              className={`px-2 py-2 rounded-md transition-colors ${activeSection === "about" ? "bg-[#1f2937] text-[#58a6ff]" : "hover:bg-[#1f2937]"}`}
            >
              About
            </Link>
            <Link
              href="#skills"
              onClick={handleLinkClick}
              className={`px-2 py-2 rounded-md transition-colors ${activeSection === "skills" ? "bg-[#1f2937] text-[#58a6ff]" : "hover:bg-[#1f2937]"}`}
            >
              Skills
            </Link>
            <Link
              href="#education"
              onClick={handleLinkClick}
              className={`px-2 py-2 rounded-md transition-colors ${activeSection === "education" ? "bg-[#1f2937] text-[#58a6ff]" : "hover:bg-[#1f2937]"}`}
            >
              Education
            </Link>
            <Link
              href="#projects"
              onClick={handleLinkClick}
              className={`px-2 py-2 rounded-md transition-colors ${activeSection === "projects" ? "bg-[#1f2937] text-[#58a6ff]" : "hover:bg-[#1f2937]"}`}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className={`px-2 py-2 rounded-md transition-colors ${activeSection === "contact" ? "bg-[#1f2937] text-[#58a6ff]" : "hover:bg-[#1f2937]"}`}
            >
              Contact
            </Link>
            <Button
              variant="outline"
              className="mt-4 border-[#58a6ff] text-[#58a6ff] hover:bg-[#1f2937]"
              onClick={() => {
                window.open("/resume.pdf", "_blank")
                handleLinkClick()
              }}
            >
              Download Resume
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
