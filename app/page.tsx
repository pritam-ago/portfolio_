"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Terminal, Code, Database, Server, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TerminalComponent from "@/components/terminal"
import type { JSX } from "react"

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string;
  githubLink: string;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: string[];
}

interface ProjectCardProps {
  project: Project;
}

interface SkillCardProps {
  category: SkillCategory;
}

// Project Card Component
function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="transform transition-transform hover:-translate-y-1">
      <Card className="overflow-hidden border-[#30363d] bg-[#0d1117] h-full">
        <div className="aspect-video w-full overflow-hidden bg-[#161b22] relative group">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-[#0d1117] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        <CardContent className="p-6 relative">
          <h3 className="text-xl font-bold mb-2 text-[#58a6ff]">{project.title}</h3>
          <p className="text-sm mb-4 text-[#8b949e]">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <Badge key={index} className="bg-[#1f2937] text-[#7ee787] hover:bg-[#2d3748]">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex justify-between">
            <Button
              variant="outline"
              size="sm"
              className="border-[#58a6ff] text-[#58a6ff] hover:bg-[#1f2937]"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Less Details" : "More Details"}
            </Button>
            {project.liveLink && (
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-[#238636] text-[#7ee787] hover:bg-[#1f2937]">
                  Live Demo
                </Button>
              </Link>
            )}
          </div>

          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-[#30363d] animate-expand">
              <h4 className="text-md font-bold mb-2 text-[#e6edf3]">Project Details</h4>
              <p className="text-sm mb-3 text-[#8b949e]">
                This project was built with a focus on scalability and performance. It features robust error
                handling, comprehensive testing, and was designed with modern best practices in mind.
              </p>
              <h4 className="text-md font-bold mb-2 text-[#e6edf3]">Key Features</h4>
              <ul className="list-disc pl-5 text-sm text-[#8b949e] mb-3">
                <li>High-performance architecture</li>
                <li>Comprehensive security measures</li>
                <li>Extensive documentation</li>
                <li>Scalable infrastructure</li>
              </ul>
              <div className="flex justify-end">
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="bg-[#238636] hover:bg-[#2ea043] text-[#e6edf3]">
                    View Repository
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

// Skill Card Component
function SkillCard({ category }: SkillCardProps) {
  return (
    <Card className="bg-[#0d1117] border-[#30363d] h-full overflow-hidden hover:border-[#58a6ff] transition-colors">
      <CardContent className="p-6 relative">
        <div className="flex items-center mb-4">
          {category.icon}
          <h3 className="text-xl font-bold ml-2 text-[#58a6ff] border-b border-[#30363d] pb-2 flex-grow">
            {category.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, index) => (
            <Badge
              key={index}
              className="bg-[#1f2937] text-[#7ee787] hover:bg-[#2d3748] cursor-pointer transform transition-transform hover:scale-105"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Project data
const projects: Project[] = [
  {
    title: "Online File Management System",
    description: "A full stack web app for file uploads and folder management with secure, user-based access and S3 storage. Features include file upload, download, sharing, and real-time updates.",
    technologies: ["Node.js", "Express.js", "MongoDB", "AWS S3", "Nextjs"],
    image: "/filesystem.png",
    liveLink: "https://filesystem.up.railway.app",
    githubLink: "https://github.com/pritam-ago/filesystem"
  },
  {
    title: "Mystery Store (E-Commerce)",
    description: "A modern e-commerce platform with Firebase authentication, dynamic cart management, and responsive design. Features include user authentication, product filtering, and real-time cart updates.",
    technologies: ["React.js", "Firebase", "Vercel"],
    image: "/onlinestore.png",
    liveLink: "https://mystery-store.vercel.app/",
    githubLink: "https://github.com/pritam-ago/mystery-store"
  },
  {
    title: "Media Converter API",
    description: "Backend service for media file conversion with S3 integration and scalable API routes. Supports multiple file formats and includes progress tracking.",
    technologies: ["Node.js", "Express.js", "MongoDB", "AWS S3"],
    image: "/mediaconverter.png",
    githubLink: "https://github.com/pritam-ago/media-converter"
  },
]

// Skill categories
const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6 text-[#58a6ff]" />,
    skills: ["JavaScript", "TypeScript", "Go lang"],
  },
  {
    title: "Frontend",
    icon: <Code className="h-6 w-6 text-[#58a6ff]" />,
    skills: ["React.js", "Next.js", "Expo Native"],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-[#58a6ff]" />,
    skills: ["Node.js", "Express.js", "Mongoose"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-[#58a6ff]" />,
    skills: ["MongoDB", "PostgreSQL", "NeonDB", "Prisma"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Terminal className="h-6 w-6 text-[#58a6ff]" />,
    skills: ["Docker", "AWS S3", "Railway", "Vercel"],
  },
  {
    title: "Tools & CMS",
    icon: <Server className="h-6 w-6 text-[#58a6ff]" />,
    skills: ["Git", "Sanity", "Firebase"],
  },
]

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Refs for sections
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)

      // Handle scroll animations
      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom
        const isVisible = elementTop < window.innerHeight && elementBottom > 0
        if (isVisible) {
          element.classList.add('visible')
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check for elements in view
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] font-mono relative">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-1/2 h-1 bg-[#58a6ff] z-50 transition-all duration-200"
        style={{ 
          width: `${scrollProgress}%`, 
          transform: `translateX(-50%) scaleX(${scrollProgress / 100})`,
          transformOrigin: 'center'
        }}
      ></div>

      {/* Scanline effect */}
      <div className="scanlines pointer-events-none"></div>

      {/* Header */}
      <header className="border-b border-[#30363d] bg-[#161b22] sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight flex items-center">
            <Terminal className="mr-2 text-[#58a6ff]" />
            <span className="text-[#58a6ff]">Vikas</span>
            <span className="ml-1 text-[#7ee787]">Pritam S</span>
          </Link>
          <nav className="hidden md:flex space-x-6 text-sm">
            <Link href="#about" className="hover:text-[#58a6ff] transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#58a6ff] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#skills" className="hover:text-[#58a6ff] transition-colors relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#58a6ff] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#projects" className="hover:text-[#58a6ff] transition-colors relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#58a6ff] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#contact" className="hover:text-[#58a6ff] transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#58a6ff] transition-all group-hover:w-full"></span>
            </Link>
          </nav>
          <Link href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-[#58a6ff] text-[#58a6ff] hover:bg-[#1f2937] hover:text-[#7ee787]">
              Resume
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 border-b border-[#30363d] bg-[#0d1117] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="matrix-bg"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 border border-[#58a6ff] text-[#58a6ff] text-sm tracking-widest animate-fade-in">
              BACKEND DEVELOPER
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in-delay">
              <span className="text-[#e6edf3]">Hi, I'm </span>
              <span className="text-[#7ee787]">Vikas Pritam S</span>
            </h1>
            <div className="w-full max-w-2xl mx-auto text-lg md:text-xl mb-8 leading-relaxed text-[#8b949e] animate-fade-in-delay-2 break-words whitespace-normal text-center">
              <span className="typing-text block">
                Aspiring backend developer passionate about scalable APIs, cloud systems, and modern backend tools.
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
              <Button className="bg-[#238636] hover:bg-[#2ea043] text-[#e6edf3] border border-[#238636]">
                View Projects
              </Button>
              <Button variant="outline" className="border-[#58a6ff] text-[#58a6ff] hover:bg-[#1f2937]">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-16 border-b border-[#30363d] bg-[#161b22]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <TerminalComponent />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 border-b border-[#30363d]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center tracking-tight animate-on-scroll">
              <span className="border-b-2 border-[#58a6ff] pb-1">About Me</span>
            </h2>
            <div className="bg-[#0d1117] p-8 border border-[#30363d] relative code-block animate-on-scroll">
              <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#58a6ff] -mt-1 -mr-1"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[#58a6ff] -mb-1 -ml-1"></div>
              <p className="text-lg leading-relaxed mb-6 text-[#c9d1d9]">
                Aspiring backend developer with a strong foundation in building scalable APIs and cloud-integrated systems using Node.js, Express.js, MongoDB, AWS S3, and Firebase. Passionate about system design, performance optimization, and learning modern backend tools.
              </p>
              <p className="text-lg leading-relaxed text-[#c9d1d9]">
                Strong interest in backend engineering, scalable systems, and cloud infrastructure. Currently deepening expertise in Go and exploring concurrent programming models. Seeking internship opportunities in backend development, DevOps, or distributed systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="py-20 border-b border-[#30363d] bg-[#161b22]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center tracking-tight animate-on-scroll">
            <span className="border-b-2 border-[#58a6ff] pb-1">Technical Expertise</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, index) => (
              <div key={category.title} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <SkillCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20 border-b border-[#30363d]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center tracking-tight animate-on-scroll">
            <span className="border-b-2 border-[#58a6ff] pb-1">Featured Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 bg-[#161b22]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 tracking-tight animate-on-scroll">
              <span className="border-b-2 border-[#58a6ff] pb-1">Get In Touch</span>
            </h2>
            <p className="text-lg mb-8 text-[#8b949e] animate-on-scroll">
              Interested in working together? Feel free to reach out through any of the channels below.
            </p>

            <div className="flex justify-center space-x-6 mb-10 animate-on-scroll">
              <Link
                href="https://github.com/pritam-ago"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0d1117] border border-[#30363d] rounded-full hover:bg-[#1f2937] hover:border-[#58a6ff] transition-all transform hover:scale-110"
              >
                <Github className="h-6 w-6 text-[#58a6ff]" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/vikas-pritam/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0d1117] border border-[#30363d] rounded-full hover:bg-[#1f2937] hover:border-[#58a6ff] transition-all transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-[#58a6ff]" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://x.com/MonsterTonGames"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0d1117] border border-[#30363d] rounded-full hover:bg-[#1f2937] hover:border-[#58a6ff] transition-all transform hover:scale-110"
              >
                <Twitter className="h-6 w-6 text-[#58a6ff]" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.instagram.com/fruity_gumbo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0d1117] border border-[#30363d] rounded-full hover:bg-[#1f2937] hover:border-[#58a6ff] transition-all transform hover:scale-110"
              >
                <Instagram className="h-6 w-6 text-[#58a6ff]" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="mailto:pritamsocrates@gmail.com"
                className="p-3 bg-[#0d1117] border border-[#30363d] rounded-full hover:bg-[#1f2937] hover:border-[#58a6ff] transition-all transform hover:scale-110"
              >
                <Mail className="h-6 w-6 text-[#58a6ff]" />
                <span className="sr-only">Email</span>
              </Link>
            </div>

            <div className="bg-[#0d1117] p-4 border border-[#30363d] inline-block terminal-prompt animate-on-scroll">
              <p className="font-mono text-[#7ee787]">
                <span className="text-[#58a6ff]">$</span> contact
                <span className="blink">_</span>
              </p>
              <p className="font-mono text-[#e6edf3] mt-2">pritamsocrates@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-[#30363d] bg-[#0d1117]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-[#8b949e]">
            © {new Date().getFullYear()} • Vikas Pritam S
          </p>
        </div>
      </footer>
    </div>
  )
}
