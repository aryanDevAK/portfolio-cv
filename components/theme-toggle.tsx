"use client"

import { useState, useEffect } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { themes, type ThemeName, applyTheme, getStoredTheme, setStoredTheme } from "@/lib/themes"

export function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("paper")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const stored = getStoredTheme()
    setCurrentTheme(stored)
    applyTheme(stored)
  }, [])

  const handleThemeChange = (theme: ThemeName) => {
    setCurrentTheme(theme)
    applyTheme(theme)
    setStoredTheme(theme)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-md border transition-all duration-200 hover:scale-105"
        style={{
          backgroundColor: "var(--theme-glass)",
          borderColor: "var(--theme-panel-border)",
          color: "var(--theme-foreground)",
        }}
      >
        <div
          className="w-4 h-4 rounded-full border"
          style={{
            backgroundColor: themes[currentTheme].accent,
            borderColor: "var(--theme-panel-border)",
          }}
        />
        <span className="text-sm font-medium">{themes[currentTheme].name}</span>
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          style={{ color: "var(--theme-foreground)" }}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 p-3 rounded-xl backdrop-blur-md border shadow-lg z-50 min-w-[200px]"
          style={{
            backgroundColor: "var(--theme-glass)",
            borderColor: "var(--theme-panel-border)",
          }}
        >
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => handleThemeChange(key as ThemeName)}
                className={`flex items-center gap-2 p-3 rounded-lg transition-all duration-200 hover:scale-105 ${
                  currentTheme === key ? "ring-2" : ""
                }`}
                style={{
                  backgroundColor: currentTheme === key ? "var(--theme-accent)" : "transparent",
                  color: currentTheme === key ? "white" : "var(--theme-foreground)",
                  ringColor: "var(--theme-accent)",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full border"
                  style={{
                    backgroundColor: theme.accent,
                    borderColor: "var(--theme-panel-border)",
                  }}
                />
                <span className="text-sm">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
