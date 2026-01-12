"use client"

import { useEffect, useState } from "react"

// Dark mode toggle with persistence
export default function DarkModeToggle() {
  const [dark, setDark] = useState(false)

  // Load theme on first render
  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "dark") {
      document.documentElement.classList.add("dark")
      setDark(true)
    }
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    setDark(!dark)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="btn"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}
