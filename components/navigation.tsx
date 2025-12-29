"use client"

import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
]

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <div className="fixed top-6 right-6 z-50 hidden lg:block">
        <ThemeToggle />
      </div>

      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-64 z-50">
        <div
          className="w-full h-full p-6 backdrop-blur-md border-r flex flex-col"
          style={{
            backgroundColor: "var(--theme-glass)",
            borderColor: "var(--theme-panel-border)",
          }}
        >
          <div className="mb-8">
            <h1 className="text-2xl font-bold" style={{ color: "var(--theme-foreground)" }}>
              Aryan Khatri
            </h1>
            <p className="text-sm" style={{ color: "var(--theme-muted)" }}>
              Portfolio | CV
            </p>
          </div>

          <div className="flex-1 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 hover:scale-105 ${
                  activeSection === item.id ? "shadow-md" : ""
                }`}
                style={{
                  backgroundColor: activeSection === item.id ? "var(--theme-accent)" : "transparent",
                  color: activeSection === item.id ? "white" : "var(--theme-foreground)",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - unchanged functionality */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 z-50 p-4">
          <div
            className="flex items-center justify-between p-4 rounded-2xl backdrop-blur-md border"
            style={{
              backgroundColor: "var(--theme-glass)",
              borderColor: "var(--theme-panel-border)",
            }}
          >
            <h1 className="text-lg font-bold" style={{ color: "var(--theme-foreground)" }}>
              Portfolio | CV
            </h1>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg transition-colors"
                style={{ color: "var(--theme-foreground)" }}
              >
                {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <div
              className="fixed top-24 left-4 right-4 p-4 rounded-2xl backdrop-blur-md border"
              style={{
                backgroundColor: "var(--theme-glass)",
                borderColor: "var(--theme-panel-border)",
              }}
            >
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id ? "shadow-md" : ""
                    }`}
                    style={{
                      backgroundColor: activeSection === item.id ? "var(--theme-accent)" : "transparent",
                      color: activeSection === item.id ? "white" : "var(--theme-foreground)",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
