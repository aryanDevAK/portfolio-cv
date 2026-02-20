"use client"

import { useEffect, useState } from "react"
import { motion } from "@/components/motion-wrapper"

/**
 * Doctor Strange – Eye of Agamotto loading screen.
 * Smooth, cinematic sequence driven by a single timer
 * so every layer cross-fades organically.
 */
export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        // Total sequence: ~3.8s → fade out starts → 0.9s fade → done
        const timer = setTimeout(() => {
            setVisible(false)
            setTimeout(onComplete, 1000) // let the fade-out finish
        }, 3800)
        return () => clearTimeout(timer)
    }, [onComplete])

    /* ring configs */
    const mandalaRings = [
        { r: 55, dur: 10, bw: 1.8, dash: "6 6", d: 0.6, dir: 1 },
        { r: 95, dur: 14, bw: 1.2, dash: "4 10", d: 0.75, dir: -1 },
        { r: 140, dur: 18, bw: 0.8, dash: "3 14", d: 0.9, dir: 1 },
        { r: 190, dur: 22, bw: 0.6, dash: "8 18", d: 1.05, dir: -1 },
        { r: 245, dur: 28, bw: 0.4, dash: "2 22", d: 1.2, dir: 1 },
    ]

    /* portal expand rings */
    const portalWaves = [
        { delay: 2.4, dur: 1.6, bw: 2 },
        { delay: 2.7, dur: 1.6, bw: 1.5 },
        { delay: 3.0, dur: 1.6, bw: 1 },
    ]

    /* energy rays */
    const rays = Array.from({ length: 8 }, (_, i) => ({
        angle: i * 45,
        delay: 0.35 + i * 0.04,
    }))

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: "var(--theme-background)" }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
            {/* ── Ambient radial glow ── */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: 900,
                    height: 900,
                    background: "radial-gradient(circle, var(--theme-accent) 0%, transparent 65%)",
                    filter: "blur(80px)",
                }}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: [0, 0.06, 0.12, 0.08], scale: [0.3, 0.8, 1.1, 1] }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
            />

            {/* ━━━ STONE CORE ━━━ */}
            {/* Outer halo (appears first, soft) */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: 70,
                    height: 70,
                    background: "radial-gradient(circle, var(--theme-accent) 0%, transparent 70%)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 2.5, 2], opacity: [0, 0.5, 0.25] }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Core gem with breathing glow */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: 14,
                    height: 14,
                    backgroundColor: "var(--theme-accent)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: [0, 2, 1.4, 1.6, 1.4],
                    opacity: [0, 1, 0.9, 1, 0.9],
                    boxShadow: [
                        "0 0 0px var(--theme-accent), 0 0 0px var(--theme-accent)",
                        "0 0 80px var(--theme-accent), 0 0 160px var(--theme-accent)",
                        "0 0 40px var(--theme-accent), 0 0 100px var(--theme-accent)",
                        "0 0 60px var(--theme-accent), 0 0 120px var(--theme-accent)",
                        "0 0 40px var(--theme-accent), 0 0 100px var(--theme-accent)",
                    ],
                }}
                transition={{
                    duration: 3.5,
                    times: [0, 0.15, 0.4, 0.7, 1],
                    ease: [0.16, 1, 0.3, 1],
                }}
            />

            {/* ━━━ ENERGY RAYS ━━━ */}
            {rays.map((ray, i) => (
                <motion.div
                    key={`ray-${i}`}
                    className="absolute"
                    style={{
                        width: 1.5,
                        backgroundColor: "var(--theme-accent)",
                        transformOrigin: "bottom center",
                        transform: `rotate(${ray.angle}deg)`,
                        filter: "blur(0.5px)",
                    }}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: [0, 100, 60, 0],
                        opacity: [0, 0.45, 0.2, 0],
                    }}
                    transition={{
                        duration: 1.2,
                        delay: ray.delay,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                />
            ))}

            {/* ━━━ MANDALA RINGS ━━━ */}
            {mandalaRings.map((ring, i) => (
                <motion.div
                    key={`mring-${i}`}
                    className="absolute"
                    style={{ width: ring.r * 2, height: ring.r * 2 }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [0, 1.08, 1],
                        opacity: [0, 0.4, 0.2],
                        rotate: ring.dir * 360,
                    }}
                    transition={{
                        scale: { duration: 0.8, delay: ring.d, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.8, delay: ring.d, ease: "easeOut" },
                        rotate: { duration: ring.dur, repeat: Infinity, ease: "linear", delay: ring.d },
                    }}
                >
                    <svg
                        width={ring.r * 2}
                        height={ring.r * 2}
                        viewBox={`0 0 ${ring.r * 2} ${ring.r * 2}`}
                        fill="none"
                    >
                        <circle
                            cx={ring.r}
                            cy={ring.r}
                            r={ring.r - 2}
                            stroke="var(--theme-accent)"
                            strokeWidth={ring.bw}
                            strokeDasharray={ring.dash}
                        />
                    </svg>
                </motion.div>
            ))}

            {/* ── Orbiting sparks on rings ── */}
            {[55, 140, 245].map((radius, i) => (
                <motion.div
                    key={`spark-${i}`}
                    className="absolute"
                    style={{ width: radius * 2, height: radius * 2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6, rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{
                        opacity: { duration: 0.4, delay: 0.8 + i * 0.15, ease: "easeOut" },
                        rotate: { duration: 5 + i * 3, repeat: Infinity, ease: "linear" },
                    }}
                >
                    <div
                        className="absolute rounded-full"
                        style={{
                            width: 4,
                            height: 4,
                            backgroundColor: "var(--theme-accent)",
                            boxShadow: "0 0 8px var(--theme-accent), 0 0 16px var(--theme-accent)",
                            top: 0,
                            left: "50%",
                            marginLeft: -2,
                            marginTop: -2,
                        }}
                    />
                </motion.div>
            ))}

            {/* ── Rune marks at cardinal points on middle ring ── */}
            {[0, 72, 144, 216, 288].map((angle, i) => (
                <motion.div
                    key={`rune-${i}`}
                    className="absolute"
                    style={{
                        width: 3,
                        height: 10,
                        backgroundColor: "var(--theme-accent)",
                        borderRadius: 1.5,
                        transformOrigin: `1.5px ${140 + 5}px`,
                        transform: `rotate(${angle}deg)`,
                    }}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: [0, 0.5, 0.25], scaleY: [0, 1, 1] }}
                    transition={{ duration: 0.5, delay: 1.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                />
            ))}

            {/* ━━━ PORTAL EXPAND — THE REVEAL ━━━ */}
            {portalWaves.map((pw, i) => (
                <motion.div
                    key={`pw-${i}`}
                    className="absolute rounded-full"
                    style={{
                        width: 60,
                        height: 60,
                        border: `${pw.bw}px solid var(--theme-accent)`,
                        filter: "blur(1px)",
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 10, 18], opacity: [0, 0.35, 0] }}
                    transition={{ duration: pw.dur, delay: pw.delay, ease: [0.16, 1, 0.3, 1] }}
                />
            ))}

            {/* ━━━ NAME + TITLE ━━━ */}
            <motion.div
                className="absolute text-center pointer-events-none"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                    opacity: [0, 0, 1, 1, 0],
                    scale: [0.9, 0.9, 1, 1, 1.05],
                    y: [15, 15, 0, 0, -8],
                }}
                transition={{
                    duration: 3.8,
                    times: [0, 0.2, 0.35, 0.75, 1],
                    ease: "easeInOut",
                }}
            >
                <h1
                    className="text-3xl md:text-4xl font-bold tracking-[0.15em]"
                    style={{ color: "var(--theme-accent)" }}
                >
                    ARYAN KHATRI
                </h1>
                <motion.p
                    className="text-xs tracking-[0.35em] mt-3 uppercase font-medium"
                    style={{ color: "var(--theme-muted)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 0.7, 0.7, 0] }}
                    transition={{ duration: 3.8, times: [0, 0.3, 0.4, 0.75, 1] }}
                >
                    Software Engineer
                </motion.p>
            </motion.div>
        </motion.div>
    )
}
