import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassPanelProps {
  children: ReactNode
  className?: string
  hover?: boolean
  size?: "sm" | "md" | "lg"
}

export function GlassPanel({ children, className, hover = false, size = "md" }: GlassPanelProps) {
  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  }

  return (
    <div
      className={cn(
        "backdrop-blur-md border rounded-xl transition-all duration-300",
        sizeClasses[size],
        hover && "hover:scale-[1.02] hover:shadow-lg",
        className,
      )}
      style={{
        backgroundColor: "var(--theme-glass)",
        borderColor: "var(--theme-panel-border)",
      }}
    >
      {children}
    </div>
  )
}
