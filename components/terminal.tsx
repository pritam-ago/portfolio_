"use client"

import { useState, useEffect, useRef } from "react"

export default function TerminalComponent() {
  const [currentCommand, setCurrentCommand] = useState("")
  const [commandHistory, setCommandHistory] = useState([
    { command: "whoami", response: "backend-developer" },
    { command: "ls -la", response: "projects  skills  contact  resume.pdf" },
  ])
  const inputRef = useRef(null)
  const terminalRef = useRef(null)

  const commands = {
    help: "Available commands: help, about, skills, projects, contact, clear",
    about: "I'm a backend developer with expertise in building scalable and efficient server-side applications.",
    skills:
      "Languages: JavaScript, TypeScript, Python, Go\nFrameworks: Node.js, Express, NestJS, Django\nDatabases: PostgreSQL, MongoDB, Redis\nDevOps: Docker, Kubernetes, AWS",
    projects:
      "1. E-commerce Microservices\n2. Financial Data API\n3. Real-time Analytics Engine\n4. Content Management API",
    contact: "Email: email@example.com\nGitHub: github.com/username\nLinkedIn: linkedin.com/in/username",
    clear: "CLEAR_TERMINAL",
    ls: "projects  skills  contact  resume.pdf",
    cd: "Changed directory",
    pwd: "/home/developer/portfolio",
    date: new Date().toString(),
    echo: (args) => args,
    unknown: "Command not found. Type 'help' for available commands.",
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory])

  const handleCommand = (e) => {
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
      className="bg-[#0d1117] border border-[#30363d] rounded-md overflow-hidden terminal-container animate-fade-in"
      onClick={focusInput}
    >
      <div className="bg-[#161b22] px-4 py-2 flex items-center border-b border-[#30363d]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="ml-4 text-xs text-[#8b949e]">developer@portfolio:~</div>
      </div>

      <div ref={terminalRef} className="p-4 font-mono text-sm h-64 overflow-y-auto terminal-output">
        <div className="text-[#7ee787] mb-2">
          Welcome to my portfolio terminal! Type 'help' to see available commands.
        </div>

        {commandHistory.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="flex">
              <span className="text-[#58a6ff]">$</span>
              <span className="text-[#7ee787] ml-2">{item.command}</span>
            </div>
            <div className="text-[#e6edf3] ml-4 whitespace-pre-line">{item.response}</div>
          </div>
        ))}

        <form onSubmit={handleCommand} className="flex items-center">
          <span className="text-[#58a6ff]">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            className="bg-transparent border-none outline-none text-[#7ee787] ml-2 flex-grow"
            autoFocus
          />
          <span className="blink">_</span>
        </form>
      </div>
    </div>
  )
}
