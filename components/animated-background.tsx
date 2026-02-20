"use client"

import { motion } from "framer-motion"

/**
 * Animated floating gradient blobs + rotating mandala rings + grid.
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

    // Mandala / Doctor-Strange-style rotating rings
    const rings = [
        { radius: 180, dur: 50, borderWidth: 1, opacity: 0.12, reverse: false, dashes: "8 12" },
        { radius: 260, dur: 70, borderWidth: 1, opacity: 0.08, reverse: true, dashes: "4 16" },
        { radius: 340, dur: 90, borderWidth: 0.5, opacity: 0.06, reverse: false, dashes: "2 20" },
        { radius: 120, dur: 35, borderWidth: 1.5, opacity: 0.10, reverse: true, dashes: "12 8" },
    ]

    // Sparkle dots that orbit around one ring
    const orbitDots = [
        { angle: 0, radius: 180, size: 4, dur: 50, delay: 0 },
        { angle: 90, radius: 180, size: 3, dur: 50, delay: 0 },
        { angle: 180, radius: 260, size: 3, dur: 70, delay: 0 },
        { angle: 270, radius: 260, size: 5, dur: 70, delay: 0 },
        { angle: 45, radius: 340, size: 3, dur: 90, delay: 0 },
        { angle: 200, radius: 340, size: 4, dur: 90, delay: 0 },
    ]

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* ── Floating Gradient Blobs ── */}
            {blobs.map((b, i) => (
                <motion.div
                    key={`blob-${i}`}
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

            {/* ── Rotating Mandala Rings (Doctor Strange style) ── */}
            <div className="absolute" style={{ top: "30%", left: "50%", transform: "translate(-50%, -50%)" }}>
                {/* SVG rings with dashed strokes */}
                {rings.map((ring, i) => (
                    <motion.div
                        key={`ring-${i}`}
                        className="absolute"
                        style={{
                            width: ring.radius * 2,
                            height: ring.radius * 2,
                            left: -ring.radius,
                            top: -ring.radius,
                        }}
                        animate={{ rotate: ring.reverse ? -360 : 360 }}
                        transition={{ duration: ring.dur, repeat: Infinity, ease: "linear" }}
                    >
                        <svg
                            width={ring.radius * 2}
                            height={ring.radius * 2}
                            viewBox={`0 0 ${ring.radius * 2} ${ring.radius * 2}`}
                            fill="none"
                        >
                            <circle
                                cx={ring.radius}
                                cy={ring.radius}
                                r={ring.radius - 2}
                                stroke="var(--theme-accent)"
                                strokeWidth={ring.borderWidth}
                                strokeDasharray={ring.dashes}
                                opacity={ring.opacity}
                            />
                        </svg>
                    </motion.div>
                ))}

                {/* Orbiting dots on rings */}
                {orbitDots.map((dot, i) => (
                    <motion.div
                        key={`dot-${i}`}
                        className="absolute"
                        style={{
                            width: dot.radius * 2,
                            height: dot.radius * 2,
                            left: -dot.radius,
                            top: -dot.radius,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: dot.dur, repeat: Infinity, ease: "linear", delay: dot.delay }}
                    >
                        <div
                            className="absolute rounded-full"
                            style={{
                                width: dot.size,
                                height: dot.size,
                                backgroundColor: "var(--theme-accent)",
                                boxShadow: "0 0 8px var(--theme-accent), 0 0 20px var(--theme-accent)",
                                opacity: 0.5,
                                top: 0,
                                left: "50%",
                                marginLeft: -dot.size / 2,
                                marginTop: -dot.size / 2,
                            }}
                        />
                    </motion.div>
                ))}

                {/* Center glow pulse */}
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: 40,
                        height: 40,
                        left: -20,
                        top: -20,
                        background: `radial-gradient(circle, var(--theme-accent) 0%, transparent 70%)`,
                        opacity: 0.15,
                    }}
                    animate={{
                        scale: [1, 2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* ── Second smaller mandala ring cluster (lower right) ── */}
            <div className="absolute" style={{ top: "75%", left: "80%", transform: "translate(-50%, -50%)" }}>
                {[100, 150].map((r, i) => (
                    <motion.div
                        key={`ring2-${i}`}
                        className="absolute"
                        style={{ width: r * 2, height: r * 2, left: -r, top: -r }}
                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                        transition={{ duration: 40 + i * 15, repeat: Infinity, ease: "linear" }}
                    >
                        <svg width={r * 2} height={r * 2} viewBox={`0 0 ${r * 2} ${r * 2}`} fill="none">
                            <circle
                                cx={r}
                                cy={r}
                                r={r - 2}
                                stroke="var(--theme-accent)"
                                strokeWidth={0.8}
                                strokeDasharray="6 14"
                                opacity={0.07}
                            />
                        </svg>
                    </motion.div>
                ))}
            </div>

            {/* ── Subtle grid overlay ── */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(var(--theme-panel-border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--theme-panel-border) 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                    opacity: 0.3,
                }}
            />

            {/* ── Scan-line effect (subtle horizontal lines) ── */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, var(--theme-panel-border) 2px, var(--theme-panel-border) 3px)",
                    backgroundSize: "100% 6px",
                    opacity: 0.04,
                }}
            />
        </div>
    )
}
