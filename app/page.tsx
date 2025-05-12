"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Terminal, Code, Database, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TerminalComponent from "@/components/terminal"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  // Refs for sections
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] font-mono relative">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#58a6ff] z-50"></div>

      {/* Scanline effect */}
      <div className="scanlines pointer-events-none"></div>

      {/* Header */}
      <header className="border-b border-[#30363d] bg-[#161b22] sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight flex items-center">
            <Terminal className="mr-2 text-[#58a6ff]" />
            <span className="text-[#58a6ff]">Dev</span>
            <span className="text-[#7ee787]">@rtisan</span>
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
          <Button variant="outline" className="border-[#58a6ff] text-[#58a6ff] hover:bg-[#1f2937] hover:text-[#7ee787]">
            Resume
          </Button>
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
              <span className="text-[#e6edf3]">Crafting </span>
              <span className="text-[#7ee787]">Robust</span>
              <span className="text-[#e6edf3]"> Backend </span>
              <span className="text-[#58a6ff]">Solutions</span>
            </h1>
            <div className="text-lg md:text-xl mb-8 leading-relaxed text-[#8b949e] animate-fade-in-delay-2">
              <span className="typing-text">
                I build scalable, efficient, and maintainable backend systems that power modern applications.
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
      <section className="py-10 border-b border-[#30363d] bg-[#161b22]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
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
                I'm a passionate backend developer with a deep appreciation for well-architected systems. With a
                background in computer science and years of experience building server-side applications, I focus on
                creating efficient, scalable, and maintainable solutions.
              </p>
              <p className="text-lg leading-relaxed text-[#c9d1d9]">
                My approach combines technical expertise with a problem-solving mindset. I believe in writing clean
                code, implementing robust testing strategies, and designing systems that can evolve with changing
                requirements.
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

          <div className="animate-on-scroll">
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 bg-[#0d1117] border border-[#30363d]">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-[#1f6feb] data-[state=active]:text-[#e6edf3]"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="api"
                  className="data-[state=active]:bg-[#1f6feb] data-[state=active]:text-[#e6edf3]"
                >
                  APIs
                </TabsTrigger>
                <TabsTrigger
                  value="database"
                  className="data-[state=active]:bg-[#1f6feb] data-[state=active]:text-[#e6edf3]"
                >
                  Databases
                </TabsTrigger>
                <TabsTrigger
                  value="architecture"
                  className="data-[state=active]:bg-[#1f6feb] data-[state=active]:text-[#e6edf3]"
                >
                  Architecture
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="api" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects
                    .filter((p) => p.category === "api")
                    .map((project, index) => (
                      <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                        <ProjectCard project={project} />
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="database" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects
                    .filter((p) => p.category === "database")
                    .map((project, index) => (
                      <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                        <ProjectCard project={project} />
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="architecture" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects
                    .filter((p) => p.category === "architecture")
                    .map((project, index) => (
                      <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                        <ProjectCard project={project} />
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
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
                href="https://github.com"
                className="p-3 bg-[#0d1117] border border-[#30363d] rounded-full hover:bg-[#1f2937] hover:border-[#58a6ff] transition-all transform hover:scale-110"
              >
                <Github className="h-6 w-6 text-[#58a6ff]" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                className="p-3 bg-[#0d1117] border border-[#30363d] rounded-full hover:bg-[#1f2937] hover:border-[#58a6ff] transition-all transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-[#58a6ff]" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="p-3 bg-[#0d1117] border border-[#30363d] rounded-full hover:bg-[#1f2937] hover:border-[#58a6ff] transition-all transform hover:scale-110"
              >
                <Twitter className="h-6 w-6 text-[#58a6ff]" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:email@example.com"
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
              <p className="font-mono text-[#e6edf3] mt-2">email@example.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-[#30363d] bg-[#0d1117]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-[#8b949e]">
            © {new Date().getFullYear()} • Designed and built with <span className="text-[#ff7b72]">♥</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

// Project data
const projects = [
  {
    title: "E-commerce Microservices",
    description: "A scalable microservices architecture for an e-commerce platform handling 10k+ transactions daily.",
    technologies: ["Node.js", "Express", "MongoDB", "RabbitMQ", "Docker"],
    category: "architecture",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Financial Data API",
    description: "RESTful API for financial data processing with robust security and rate limiting.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "JWT"],
    category: "api",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Real-time Analytics Engine",
    description: "High-performance analytics system processing millions of events per minute.",
    technologies: ["Go", "Kafka", "ClickHouse", "Elasticsearch", "Grafana"],
    category: "database",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Content Management API",
    description: "GraphQL API for a headless CMS with complex permission systems.",
    technologies: ["TypeScript", "NestJS", "GraphQL", "PostgreSQL", "Redis"],
    category: "api",
    image: "/placeholder.svg?height=200&width=300",
  },
]

// Skill categories
const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6 text-[#58a6ff]" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "Go", "SQL"],
  },
  {
    title: "Frameworks",
    icon: <Server className="h-6 w-6 text-[#58a6ff]" />,
    skills: ["Node.js", "Express", "NestJS", "Django", "Spring Boot", "Flask"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-[#58a6ff]" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
  },
  {
    title: "DevOps",
    icon: <Terminal className="h-6 w-6 text-[#58a6ff]" />,
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
  },
  {
    title: "API Design",
    icon: <Code className="h-6 w-6 text-[#58a6ff]" />,
    skills: ["REST", "GraphQL", "gRPC", "Swagger/OpenAPI"],
  },
  {
    title: "Architecture",
    icon: <Server className="h-6 w-6 text-[#58a6ff]" />,
    skills: ["Microservices", "Event-Driven", "Serverless", "Domain-Driven Design"],
  },
]

// Project Card Component
function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="transform transition-transform hover:-translate-y-1">
      <Card className="overflow-hidden border-[#30363d] bg-[#0d1117] h-full">
        <div className="aspect-video w-full overflow-hidden bg-[#161b22] relative group">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="h-full w-full object-cover transition-all group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent opacity-70"></div>
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
            <Button variant="outline" size="sm" className="border-[#238636] text-[#7ee787] hover:bg-[#1f2937]">
              Live Demo
            </Button>
          </div>

          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-[#30363d] animate-expand">
              <h4 className="text-md font-bold mb-2 text-[#e6edf3]">Project Details</h4>
              <p className="text-sm mb-3 text-[#8b949e]">
                This project was built to solve complex {project.category} challenges. It features robust error
                handling, comprehensive testing, and was designed with scalability in mind.
              </p>
              <h4 className="text-md font-bold mb-2 text-[#e6edf3]">Key Features</h4>
              <ul className="list-disc pl-5 text-sm text-[#8b949e] mb-3">
                <li>High-performance architecture</li>
                <li>Comprehensive security measures</li>
                <li>Extensive documentation</li>
                <li>Scalable infrastructure</li>
              </ul>
              <div className="flex justify-end">
                <Button size="sm" className="bg-[#238636] hover:bg-[#2ea043] text-[#e6edf3]">
                  View Repository
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

// Skill Card Component
function SkillCard({ category }) {
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
