"use client"

import { useState } from "react"
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  BookOpenIcon,
  EnvelopeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline"
import { ThemeToggle } from "./theme-toggle"
import { motion, AnimatePresence } from "./motion-wrapper"

const navItems = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "experience", label: "Experience", icon: BriefcaseIcon },
  { id: "projects", label: "Projects", icon: RocketLaunchIcon },
  { id: "services", label: "Services", icon: WrenchScrewdriverIcon },
  { id: "blog", label: "Blog", icon: BookOpenIcon },
  { id: "contact", label: "Contact", icon: EnvelopeIcon },
]

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

/* ── Orbiting sparkle around the active icon ── */
function ActiveGlow() {
  return (
    <>
      {/* Glow backdrop */}
      <motion.div
        layoutId="nav-glow"
        className="absolute inset-0 rounded-xl"
        style={{
          boxShadow: "0 0 25px color-mix(in srgb, var(--theme-accent) 35%, transparent), inset 0 0 15px color-mix(in srgb, var(--theme-accent) 10%, transparent)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      />
      {/* Accent background pill */}
      <motion.div
        layoutId="nav-active-pill"
        className="absolute inset-0 rounded-xl"
        style={{ backgroundColor: "var(--theme-accent)" }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      />
      {/* Shimmer sweep */}
      <motion.div
        className="absolute inset-0 rounded-xl overflow-hidden"
        initial={false}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
          }}
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </>
  )
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* ── Desktop Theme Toggle ── */}
      <div className="fixed top-6 right-6 z-50 hidden lg:block">
        <ThemeToggle />
      </div>

      {/* ── Desktop Sidebar ── */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-64 z-50">
        <div
          className="w-full h-full p-6 backdrop-blur-xl border-r flex flex-col"
          style={{
            backgroundColor: "var(--theme-glass)",
            borderColor: "var(--theme-panel-border)",
          }}
        >
          {/* ── Logo / Branding ── */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <motion.div
                className="relative w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: "var(--theme-accent)",
                  boxShadow: "0 0 20px color-mix(in srgb, var(--theme-accent) 30%, transparent)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 15px color-mix(in srgb, var(--theme-accent) 20%, transparent)",
                    "0 0 25px color-mix(in srgb, var(--theme-accent) 40%, transparent)",
                    "0 0 15px color-mix(in srgb, var(--theme-accent) 20%, transparent)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-white font-bold text-lg">A</span>
              </motion.div>
              <div>
                <h1 className="text-lg font-bold leading-tight" style={{ color: "var(--theme-foreground)" }}>
                  Aryan Khatri
                </h1>
                <p className="text-xs" style={{ color: "var(--theme-muted)" }}>
                  AI & Software Engineer
                </p>
              </div>
            </div>

            {/* Animated separator line */}
            <div className="relative h-px mt-4 overflow-hidden rounded-full" style={{ backgroundColor: "var(--theme-panel-border)" }}>
              <motion.div
                className="absolute inset-y-0 w-1/3 rounded-full"
                style={{ backgroundColor: "var(--theme-accent)" }}
                animate={{ x: ["-100%", "400%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              />
            </div>
          </motion.div>

          {/* ── Nav Items ── */}
          <div className="flex-1 space-y-1.5">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              const isHovered = hoveredItem === item.id

              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative w-full px-4 py-3 rounded-xl text-left font-medium cursor-pointer flex items-center gap-3"
                  style={{
                    color: isActive ? "white" : "var(--theme-foreground)",
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  whileHover={!isActive ? { x: 6 } : {}}
                >
                  {/* Active glow + pill + shimmer */}
                  {isActive && <ActiveGlow />}

                  {/* Hover background */}
                  {isHovered && !isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{ backgroundColor: "var(--theme-glass)", border: "1px solid var(--theme-panel-border)" }}
                      layoutId="nav-hover-bg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  {/* Icon */}
                  <motion.div
                    className="relative z-10"
                    animate={isActive ? { rotate: [0, -8, 8, 0] } : {}}
                    transition={isActive ? { duration: 0.5, delay: 0.2 } : {}}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  {/* Label */}
                  <span className="relative z-10 text-sm">{item.label}</span>

                  {/* Active dot indicator */}
                  {isActive && (
                    <motion.div
                      className="relative z-10 ml-auto"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.1 }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: "white",
                          boxShadow: "0 0 8px rgba(255,255,255,0.6)",
                        }}
                      />
                    </motion.div>
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* ── Bottom Status ── */}
          <motion.div
            className="mt-6 pt-4"
            style={{ borderTop: "1px solid var(--theme-panel-border)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "#22c55e" }}
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.4)",
                    "0 0 0 6px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs font-medium" style={{ color: "var(--theme-muted)" }}>
                Available for work
              </span>
            </div>

            {/* Mini sparkle decoration */}
            <div className="flex items-center gap-1.5">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <SparklesIcon className="w-3.5 h-3.5" style={{ color: "var(--theme-accent)" }} />
              </motion.div>
              <span className="text-xs" style={{ color: "var(--theme-muted)" }}>
                Built with Next.js & ❤️
              </span>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* ── Mobile Navigation ── */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 z-50 p-4">
          <motion.div
            className="flex items-center justify-between p-4 rounded-2xl backdrop-blur-xl border"
            style={{
              backgroundColor: "var(--theme-glass)",
              borderColor: "var(--theme-panel-border)",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--theme-accent)" }}
              >
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <h1 className="text-sm font-bold" style={{ color: "var(--theme-foreground)" }}>
                Aryan Khatri
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg cursor-pointer"
                style={{ color: "var(--theme-foreground)" }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <XMarkIcon className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Bars3Icon className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </header>

        {/* Mobile Menu - Animated */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <motion.div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="fixed top-24 left-4 right-4 p-5 rounded-2xl backdrop-blur-xl border"
                style={{
                  backgroundColor: "var(--theme-glass)",
                  borderColor: "var(--theme-panel-border)",
                }}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="grid grid-cols-2 gap-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeSection === item.id
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium cursor-pointer"
                        style={{
                          backgroundColor: isActive ? "var(--theme-accent)" : "transparent",
                          color: isActive ? "white" : "var(--theme-foreground)",
                          boxShadow: isActive
                            ? "0 0 20px color-mix(in srgb, var(--theme-accent) 30%, transparent)"
                            : "none",
                        }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
