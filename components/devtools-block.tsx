"use client"

import { useEffect } from "react"

export function DevToolsBlock() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return

    // Block keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      // Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      // Ctrl+Shift+C (Element picker)
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      // Ctrl+U (View source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      // Cmd+Option+I (Mac DevTools)
      if (e.metaKey && e.altKey && e.key === "i") {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      // Cmd+Option+J (Mac Console)
      if (e.metaKey && e.altKey && e.key === "j") {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    // Block right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    document.addEventListener("keydown", handleKeyDown, true)
    document.addEventListener("contextmenu", handleContextMenu, true)

    // Debugger trap — pauses execution when devtools are open
    let debuggerInterval: ReturnType<typeof setInterval> | null = null
    debuggerInterval = setInterval(() => {
      const start = performance.now()
      // eslint-disable-next-line no-debugger
      debugger
      const end = performance.now()
      // If debugger paused for >100ms, devtools are likely open
      if (end - start > 100) {
        document.body.innerHTML = ""
      }
    }, 3000)

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true)
      document.removeEventListener("contextmenu", handleContextMenu, true)
      if (debuggerInterval) clearInterval(debuggerInterval)
    }
  }, [])

  return null
}
