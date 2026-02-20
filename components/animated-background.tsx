"use client"

import { motion } from "framer-motion"

/**
 * Animated floating gradient blobs that sit behind all content.
 * Uses the theme accent colour so they adapt to any palette.
 * Rendered once in the layout — not per-section.
 */
export function AnimatedBackground() {
    const blobs = [
        { size: 500, x: "10%", y: "8%", delay: 0, dur: 22, opacity: 0.12 },
        { size: 420, x: "75%", y: "15%", delay: 2, dur: 26, opacity: 0.10 },
        { size: 350, x: "60%", y: "55%", delay: 4, dur: 20, opacity: 0.08 },
        { size: 480, x: "20%", y: "70%", delay: 1, dur: 24, opacity: 0.11 },
        { size: 300, x: "85%", y: "80%", delay: 3, dur: 18, opacity: 0.07 },
        { size: 260, x: "45%", y: "35%", delay: 5, dur: 28, opacity: 0.06 },
    ]

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {blobs.map((b, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: b.size,
                        height: b.size,
                        left: b.x,
                        top: b.y,
                        background: `radial-gradient(circle, var(--theme-accent) 0%, transparent 70%)`,
                        opacity: b.opacity,
                        filter: "blur(80px)",
                        willChange: "transform",
                    }}
                    animate={{
                        x: [0, 60, -40, 30, 0],
                        y: [0, -50, 30, -20, 0],
                        scale: [1, 1.15, 0.9, 1.05, 1],
                    }}
                    transition={{
                        duration: b.dur,
                        repeat: Infinity,
                        delay: b.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Subtle grid overlay for depth */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(var(--theme-panel-border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--theme-panel-border) 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                    opacity: 0.3,
                }}
            />
        </div>
    )
}
