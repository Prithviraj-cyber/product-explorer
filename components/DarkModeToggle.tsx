"use client"

import { useEffect, useState } from "react"

export default function DarkModeToggle() {
  const [dark, setDark] = useState<boolean>(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "dark") {
      document.documentElement.classList.add("dark")
      setDark(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    <button onClick={toggleTheme} className="btn">
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}
