export const themes = {
  paper: {
    name: "Paper",
    background: "oklch(0.98 0.01 85)",
    foreground: "oklch(0.2 0.02 85)",
    panel: "rgba(255, 252, 248, 0.7)",
    panelBorder: "rgba(139, 69, 19, 0.1)",
    accent: "oklch(0.6 0.15 25)",
    muted: "oklch(0.7 0.02 85)",
    glass: "rgba(255, 252, 248, 0.6)",
  },
  light: {
    name: "Light",
    background: "oklch(1 0 0)",
    foreground: "oklch(0.15 0 0)",
    panel: "rgba(255, 255, 255, 0.7)",
    panelBorder: "rgba(0, 0, 0, 0.08)",
    accent: "oklch(0.5 0.2 250)",
    muted: "oklch(0.6 0 0)",
    glass: "rgba(255, 255, 255, 0.6)",
  },
  "night-blue": {
    name: "Night Blue",
    background: "oklch(0.15 0.05 250)",
    foreground: "oklch(0.9 0.02 250)",
    panel: "rgba(30, 58, 138, 0.7)",
    panelBorder: "rgba(59, 130, 246, 0.2)",
    accent: "oklch(0.6 0.2 250)",
    muted: "oklch(0.7 0.05 250)",
    glass: "rgba(30, 58, 138, 0.5)",
  },
  "dark-forest": {
    name: "Dark Forest",
    background: "oklch(0.12 0.05 150)",
    foreground: "oklch(0.9 0.02 150)",
    panel: "rgba(20, 83, 45, 0.7)",
    panelBorder: "rgba(34, 197, 94, 0.2)",
    accent: "oklch(0.6 0.2 150)",
    muted: "oklch(0.7 0.05 150)",
    glass: "rgba(20, 83, 45, 0.5)",
  },
  romantic: {
    name: "Romantic",
    background: "oklch(0.97 0.02 350)",
    foreground: "oklch(0.2 0.03 350)",
    panel: "rgba(255, 228, 235, 0.55)",
    panelBorder: "rgba(190, 100, 130, 0.15)",
    accent: "oklch(0.55 0.15 350)",
    muted: "oklch(0.55 0.03 350)",
    glass: "rgba(255, 235, 240, 0.4)",
  },
  matrix: {
    name: "Matrix",
    background: "oklch(0.05 0 0)",
    foreground: "oklch(0.8 0.2 150)",
    panel: "rgba(0, 0, 0, 0.8)",
    panelBorder: "rgba(0, 255, 65, 0.3)",
    accent: "oklch(0.7 0.3 150)",
    muted: "oklch(0.5 0.2 150)",
    glass: "rgba(0, 0, 0, 0.7)",
  },
  "rose-pine": {
    name: "Rose Pine",
    background: "oklch(0.11 0.02 330)",
    foreground: "oklch(0.9 0.02 30)",
    panel: "rgba(38, 35, 58, 0.7)",
    panelBorder: "rgba(156, 207, 216, 0.2)",
    accent: "oklch(0.7 0.1 30)",
    muted: "oklch(0.6 0.02 330)",
    glass: "rgba(38, 35, 58, 0.6)",
  },
  "github-dark": {
    name: "GitHub Dark",
    background: "oklch(0.08 0 0)",
    foreground: "oklch(0.9 0 0)",
    panel: "rgba(33, 38, 45, 0.7)",
    panelBorder: "rgba(48, 54, 61, 0.5)",
    accent: "oklch(0.6 0.15 220)",
    muted: "oklch(0.6 0 0)",
    glass: "rgba(33, 38, 45, 0.6)",
  },
  neon: {
    name: "Neon",
    background: "oklch(0.06 0.02 270)",
    foreground: "oklch(0.95 0.02 200)",
    panel: "rgba(10, 10, 35, 0.85)",
    panelBorder: "rgba(0, 255, 255, 0.25)",
    accent: "oklch(0.75 0.2 195)",
    muted: "oklch(0.6 0.05 270)",
    glass: "rgba(10, 10, 40, 0.7)",
  },
  mystic: {
    name: "Mystic",
    background: "oklch(0.08 0.04 290)",
    foreground: "oklch(0.92 0.03 70)",
    panel: "rgba(20, 10, 45, 0.8)",
    panelBorder: "rgba(255, 170, 50, 0.2)",
    accent: "oklch(0.72 0.18 65)",
    muted: "oklch(0.6 0.04 290)",
    glass: "rgba(25, 12, 50, 0.65)",
  },
} as const

export type ThemeName = keyof typeof themes

export const applyTheme = (themeName: ThemeName) => {
  const theme = themes[themeName]
  const root = document.documentElement

  root.style.setProperty("--theme-background", theme.background)
  root.style.setProperty("--theme-foreground", theme.foreground)
  root.style.setProperty("--theme-panel", theme.panel)
  root.style.setProperty("--theme-panel-border", theme.panelBorder)
  root.style.setProperty("--theme-accent", theme.accent)
  root.style.setProperty("--theme-muted", theme.muted)
  root.style.setProperty("--theme-glass", theme.glass)
}

export const getStoredTheme = (): ThemeName => {
  if (typeof window === "undefined") return "paper"
  return (localStorage.getItem("portfolio-theme") as ThemeName) || "paper"
}

export const setStoredTheme = (theme: ThemeName) => {
  if (typeof window === "undefined") return
  localStorage.setItem("portfolio-theme", theme)
}
