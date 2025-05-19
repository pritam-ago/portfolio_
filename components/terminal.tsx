"use client"

import { useState, useEffect, useRef } from "react"

export default function TerminalComponent() {
  const [currentCommand, setCurrentCommand] = useState("")
  const [commandHistory, setCommandHistory] = useState([
    { command: "whoami", response: "vikas-pritam" },
    { command: "ls -la", response: "projects  skills  education  contact  resume.pdf" },
  ])
  const inputRef = useRef(null)
  const terminalRef = useRef(null)

  const commands = {
    help: "Available commands: help, about, skills, education, projects, contact, clear, social, location",
    about:
      "Aspiring backend developer with a strong foundation in building scalable APIs and cloud-integrated systems using Node.js, Express.js, MongoDB, AWS S3, and Firebase.",
    skills:
      "Languages: JavaScript, TypeScript, Go\nFrameworks: Node.js, Express.js, React\nDatabases: MongoDB, PostgreSQL, Firebase\nTools: Docker, Git, AWS, Vercel",
    education:
      "B.Tech CSE, SRM Institute of Science and Technology, Chennai\nAugust 2024 — June 2028\nGPA: 9.5 (Last Semester)",
    experience:
      "Member at Codekrafters, Chennai\nNovember 2024 — Present\nFoster teamwork and collaboration among club members",
    projects:
      "1. Online File Management System (Full stack)\n2. E-Commerce Platform (Full stack)\n3. Media Converter API (Backend)",
    contact: "Email: pritamsocrates@gmail.com\nPhone: +91 8220811320",
    social: "GitHub: github.com/username\nLinkedIn: linkedin.com/in/username",
    location: "Chennai, 600089, India",
    clear: "CLEAR_TERMINAL",
    ls: "projects  skills  education  contact  resume.pdf",
    cd: "Changed directory",
    pwd: "/home/vikas/portfolio",
    date: new Date().toString(),
    echo: (args) => args,
    unknown: "Command not found. Type 'help' for available commands.",
  }

  useEffect(() => {
    if (terminalRef.current) {
      (terminalRef.current as HTMLDivElement).scrollTop = (terminalRef.current as HTMLDivElement).scrollHeight
    }
  }, [commandHistory])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()

    if (!currentCommand.trim()) return

    const args = currentCommand.trim().split(" ")
    const cmd = args[0].toLowerCase()
    const cmdArgs = args.slice(1).join(" ")

    let response
    if (cmd in commands) {
      response = typeof commands[cmd] === "function" ? commands[cmd](cmdArgs) : commands[cmd]
    } else {
      response = commands.unknown
    }

    if (response === "CLEAR_TERMINAL") {
      setCommandHistory([])
    } else {
      setCommandHistory([...commandHistory, { command: currentCommand, response }])
    }

    setCurrentCommand("")
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div
      className="bg-[#0d1117] border border-[#30363d] rounded-md overflow-hidden terminal-container animate-fade-in shadow-lg"
      onClick={focusInput}
    >
      <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-[#30363d]">
        <div className="flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="ml-4 text-xs text-[#8b949e]">vikas@portfolio:~</div>
        </div>
        <div className="text-xs text-[#8b949e]">bash</div>
      </div>

      <div ref={terminalRef} className="p-4 font-mono text-sm h-64 overflow-y-auto terminal-output">
        <div className="text-[#7ee787] mb-4">
          <pre className="text-[#58a6ff] mb-2">
            {`
 __     _____ _  __    _    ____    ____  ____  ___ _____  _    __  __
 \\ \\   / /_ _| |/ /   / \\  / ___|  |  _ \\|  _ \\|_ _|_   _|/ \\  |  \\/  |
  \\ \\ / / | || ' /   / _ \\ \\___ \\  | |_) | |_) || |  | | / _ \\ | |\\/| |
   \\ V /  | || . \\  / ___ \\ ___) | |  __/|  _ < | |  | |/ ___ \\| |  | |
    \\_/  |___|_|\\_\\/_/   \\_\\____/  |_|   |_| \\_\\___| |_/_/   \\_\\_|  |_|
`}
          </pre>
          <div className="mb-2">
            Welcome to my portfolio terminal! Type <span className="text-[#58a6ff]">help</span> to see available
            commands.
          </div>
        </div>

        {commandHistory.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="flex">
              <span className="text-[#58a6ff]">vikas@portfolio:~$</span>
              <span className="text-[#7ee787] ml-2">{item.command}</span>
            </div>
            <div className="text-[#e6edf3] ml-4 whitespace-pre-line">{item.response}</div>
          </div>
        ))}

        <form onSubmit={handleCommand} className="flex items-center relative">
          <span className="text-[#58a6ff]">vikas@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            className="bg-transparent border-none outline-none text-[#7ee787] ml-2 flex-grow"
            autoFocus
          />
          <span className="blink absolute" style={{ left: `${currentCommand.length * 8 + 150}px` }}>
            _
          </span>
        </form>
      </div>
    </div>
  )
}
