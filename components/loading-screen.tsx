"use client"

import { useEffect, useState } from "react"
import { Terminal } from "lucide-react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")

  useEffect(() => {
    const texts = [
      "Initializing...",
      "Loading modules...",
      "Connecting to database...",
      "Fetching projects...",
      "Compiling portfolio...",
    ]

    let currentTextIndex = 0
    const textInterval = setInterval(() => {
      currentTextIndex = (currentTextIndex + 1) % texts.length
      setLoadingText(texts[currentTextIndex])
    }, 500)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          clearInterval(textInterval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    return () => {
      clearInterval(interval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-[#0d1117] flex flex-col items-center justify-center z-50">
      <div className="flex items-center mb-8 animate-pulse">
        <Terminal className="h-12 w-12 text-[#58a6ff] mr-3" />
        <h1 className="text-3xl font-bold text-[#e6edf3]">
          <span className="text-[#58a6ff]">Vikas</span>
          <span className="text-[#7ee787]">@Pritam</span>
        </h1>
      </div>

      <div className="w-64 h-2 bg-[#161b22] rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-[#58a6ff] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="text-[#8b949e] text-sm font-mono">
        <span className="text-[#7ee787]">$</span> {loadingText}
        <span className="blink">_</span>
      </div>

      <div className="text-[#8b949e] text-xs mt-8">{progress}% complete</div>
    </div>
  )
}
