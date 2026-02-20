"use client"

import { motion } from "framer-motion"

/**
 * Subtle cosmic animated background — soft nebula blobs,
 * faint mandala rings, gentle energy dots, and light grid.
 * Toned down to create ambiance without competing with content.
 */
export function AnimatedBackground() {
    /* ── Nebula blobs (soft, blurred) ── */
    const blobs = [
        { size: 600, x: "8%", y: "5%", delay: 0, dur: 30, opacity: 0.05 },
        { size: 500, x: "72%", y: "12%", delay: 2, dur: 35, opacity: 0.04 },
        { size: 420, x: "55%", y: "55%", delay: 4, dur: 28, opacity: 0.035 },
        { size: 550, x: "15%", y: "68%", delay: 1, dur: 32, opacity: 0.045 },
    ]

    /* ── Mandala rings ── */
    const rings = [
        { radius: 180, dur: 60, bw: 0.8, opacity: 0.05, rev: false, dash: "6 16" },
        { radius: 260, dur: 80, bw: 0.5, opacity: 0.035, rev: true, dash: "4 20" },
        { radius: 340, dur: 100, bw: 0.4, opacity: 0.025, rev: false, dash: "2 24" },
    ]

    /* ── Orbiting dots ── */
    const orbitDots = [
        { radius: 180, size: 3, dur: 60 },
        { radius: 260, size: 2.5, dur: 80 },
        { radius: 340, size: 2, dur: 100 },
    ]

    /* ── Event horizon ripples (very faint) ── */
    const ripples = [
        { delay: 0, dur: 8 },
        { delay: 2, dur: 8 },
        { delay: 4, dur: 8 },
    ]

    /* ── Infinity stone pulse (subtle) ── */
    const energyPulses = [
        { delay: 0, dur: 5, maxScale: 3, size: 70 },
        { delay: 1.7, dur: 5.5, maxScale: 3.5, size: 55 },
    ]

    /* ── Star particles ── */
    const particles = Array.from({ length: 16 }, (_, i) => ({
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 1.5,
        dur: 4 + Math.random() * 6,
        delay: Math.random() * 5,
    }))

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>

            {/* ━━━ 1. NEBULA BLOBS ━━━ */}
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
                        filter: "blur(100px)",
                        willChange: "transform",
                    }}
                    animate={{
                        x: [0, 40, -30, 20, 0],
                        y: [0, -35, 25, -15, 0],
                        scale: [1, 1.08, 0.95, 1.03, 1],
                    }}
                    transition={{ duration: b.dur, repeat: Infinity, delay: b.delay, ease: "easeInOut" }}
                />
            ))}

            {/* ━━━ 2. BLACK HOLE CENTER ━━━ */}
            <div className="absolute" style={{ top: "30%", left: "50%", transform: "translate(-50%, -50%)" }}>

                {/* Faint accretion disk */}
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: 350,
                        height: 350,
                        left: -175,
                        top: -175,
                        background: `conic-gradient(
              from 0deg,
              transparent 0%,
              var(--theme-accent) 25%,
              transparent 50%,
              var(--theme-accent) 75%,
              transparent 100%
            )`,
                        opacity: 0.025,
                        filter: "blur(25px)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />

                {/* Dark core */}
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: 50,
                        height: 50,
                        left: -25,
                        top: -25,
                        background: `radial-gradient(circle, var(--theme-background) 50%, transparent 70%)`,
                        boxShadow: "0 0 30px 8px var(--theme-background)",
                    }}
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Lensing ring */}
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: 80,
                        height: 80,
                        left: -40,
                        top: -40,
                        border: "1px solid var(--theme-accent)",
                        opacity: 0.07,
                        filter: "blur(2px)",
                    }}
                    animate={{ scale: [1, 1.12, 1], opacity: [0.05, 0.09, 0.05] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* ── Mandala rings ── */}
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
                        animate={{ rotate: ring.rev ? -360 : 360 }}
                        transition={{ duration: ring.dur, repeat: Infinity, ease: "linear" }}
                    >
                        <svg width={ring.radius * 2} height={ring.radius * 2} viewBox={`0 0 ${ring.radius * 2} ${ring.radius * 2}`} fill="none">
                            <circle
                                cx={ring.radius}
                                cy={ring.radius}
                                r={ring.radius - 2}
                                stroke="var(--theme-accent)"
                                strokeWidth={ring.bw}
                                strokeDasharray={ring.dash}
                                opacity={ring.opacity}
                            />
                        </svg>
                    </motion.div>
                ))}

                {/* ── Orbiting dots ── */}
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
                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                        transition={{ duration: dot.dur, repeat: Infinity, ease: "linear" }}
                    >
                        <div
                            className="absolute rounded-full"
                            style={{
                                width: dot.size,
                                height: dot.size,
                                backgroundColor: "var(--theme-accent)",
                                boxShadow: "0 0 6px var(--theme-accent)",
                                opacity: 0.2,
                                top: 0,
                                left: "50%",
                                marginLeft: -dot.size / 2,
                                marginTop: -dot.size / 2,
                            }}
                        />
                    </motion.div>
                ))}

                {/* Center glow */}
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: 30,
                        height: 30,
                        left: -15,
                        top: -15,
                        background: `radial-gradient(circle, var(--theme-accent) 0%, transparent 70%)`,
                    }}
                    animate={{ scale: [1, 1.8, 1], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* ━━━ 3. EVENT HORIZON RIPPLES (very faint) ━━━ */}
            <div className="absolute" style={{ top: "30%", left: "50%", transform: "translate(-50%, -50%)" }}>
                {ripples.map((r, i) => (
                    <motion.div
                        key={`ripple-${i}`}
                        className="absolute rounded-full"
                        style={{
                            width: 80,
                            height: 80,
                            left: -40,
                            top: -40,
                            border: "1px solid var(--theme-accent)",
                        }}
                        animate={{ scale: [1, 5], opacity: [0.08, 0] }}
                        transition={{ duration: r.dur, repeat: Infinity, delay: r.delay, ease: "easeOut" }}
                    />
                ))}
            </div>

            {/* ━━━ 4. INFINITY PULSE (lower-left, subtle) ━━━ */}
            <div className="absolute" style={{ top: "72%", left: "16%", transform: "translate(-50%, -50%)" }}>
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: 12,
                        height: 12,
                        left: -6,
                        top: -6,
                        backgroundColor: "var(--theme-accent)",
                        boxShadow: "0 0 12px var(--theme-accent), 0 0 24px var(--theme-accent)",
                        opacity: 0.12,
                    }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.08, 0.15, 0.08] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                {energyPulses.map((p, i) => (
                    <motion.div
                        key={`pulse-${i}`}
                        className="absolute rounded-full"
                        style={{
                            width: p.size,
                            height: p.size,
                            left: -p.size / 2,
                            top: -p.size / 2,
                            border: "1px solid var(--theme-accent)",
                        }}
                        animate={{ scale: [1, p.maxScale], opacity: [0.1, 0] }}
                        transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeOut" }}
                    />
                ))}

                {/* Energy crackle lines (faint) */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.div
                        key={`crackle-${i}`}
                        className="absolute"
                        style={{
                            width: 1,
                            height: 25,
                            left: -0.5,
                            top: -25,
                            backgroundColor: "var(--theme-accent)",
                            opacity: 0.06,
                            transformOrigin: "bottom center",
                            transform: `rotate(${angle}deg)`,
                        }}
                        animate={{ scaleY: [0, 1, 0], opacity: [0, 0.08, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                    />
                ))}
            </div>

            {/* ━━━ 5. SECONDARY PULSE (upper-right) ━━━ */}
            <div className="absolute" style={{ top: "20%", left: "85%", transform: "translate(-50%, -50%)" }}>
                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: 8,
                        height: 8,
                        left: -4,
                        top: -4,
                        backgroundColor: "var(--theme-accent)",
                        boxShadow: "0 0 10px var(--theme-accent)",
                        opacity: 0.1,
                    }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.06, 0.12, 0.06] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
                {[0, 1].map((j) => (
                    <motion.div
                        key={`p2-${j}`}
                        className="absolute rounded-full"
                        style={{
                            width: 40,
                            height: 40,
                            left: -20,
                            top: -20,
                            border: "1px solid var(--theme-accent)",
                        }}
                        animate={{ scale: [1, 3], opacity: [0.08, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: j * 2, ease: "easeOut" }}
                    />
                ))}
            </div>

            {/* ━━━ 6. STAR PARTICLES ━━━ */}
            {particles.map((p, i) => (
                <motion.div
                    key={`star-${i}`}
                    className="absolute rounded-full"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: p.x,
                        top: p.y,
                        backgroundColor: "var(--theme-accent)",
                    }}
                    animate={{ opacity: [0, 0.2, 0], scale: [0.5, 1, 0.5] }}
                    transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
                />
            ))}

            {/* ━━━ 7. GRID OVERLAY ━━━ */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(var(--theme-panel-border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--theme-panel-border) 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                    opacity: 0.15,
                }}
            />
        </div>
    )
}
