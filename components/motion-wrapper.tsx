"use client"

import { type ReactNode, useEffect, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

// ─── Shared defaults ────────────────────────────────────────
const DURATION = 0.5
const EASE = [0.25, 0.46, 0.45, 0.94] as const // ease-out-quad

// ─── useReducedMotion helper: returns either real or instant variants ──
function useMotionSafe() {
    const reduced = useReducedMotion()
    return { skip: !!reduced }
}

// ─── FadeIn (up) ────────────────────────────────────────────
interface FadeInProps {
    children: ReactNode
    delay?: number
    duration?: number
    className?: string
    y?: number
}

export function FadeIn({ children, delay = 0, duration = DURATION, className, y = 24 }: FadeInProps) {
    const { skip } = useMotionSafe()
    return (
        <motion.div
            initial={skip ? false : { opacity: 0, y }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: EASE }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// ─── StaggerContainer ────────────────────────────────────────
interface StaggerContainerProps {
    children: ReactNode
    className?: string
    stagger?: number
    delay?: number
}

export function StaggerContainer({ children, className, stagger = 0.08, delay = 0 }: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: stagger,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// stagger child variant (use as variants on children inside StaggerContainer)
export const staggerChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: DURATION, ease: EASE },
    },
}

export const staggerScaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: EASE },
    },
}

// ─── ScaleIn ─────────────────────────────────────────────────
interface ScaleInProps {
    children: ReactNode
    delay?: number
    className?: string
}

export function ScaleIn({ children, delay = 0, className }: ScaleInProps) {
    const { skip } = useMotionSafe()
    return (
        <motion.div
            initial={skip ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay, ease: EASE }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// ─── SlideIn ─────────────────────────────────────────────────
interface SlideInProps {
    children: ReactNode
    direction?: "left" | "right"
    delay?: number
    className?: string
}

export function SlideIn({ children, direction = "left", delay = 0, className }: SlideInProps) {
    const { skip } = useMotionSafe()
    const x = direction === "left" ? -60 : 60
    return (
        <motion.div
            initial={skip ? false : { opacity: 0, x }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: DURATION, delay, ease: EASE }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// ─── AnimatedCounter ─────────────────────────────────────────
interface AnimatedCounterProps {
    target: number
    suffix?: string
    prefix?: string
    duration?: number
    decimals?: number
    className?: string
    style?: React.CSSProperties
}

export function AnimatedCounter({
    target,
    suffix = "",
    prefix = "",
    duration = 2,
    decimals = 0,
    className,
    style,
}: AnimatedCounterProps) {
    const { skip } = useMotionSafe()
    const [count, setCount] = useState(skip ? target : 0)

    useEffect(() => {
        if (skip) {
            setCount(target)
            return
        }
        let start = 0
        const startTime = performance.now()

        function step(currentTime: number) {
            const elapsed = (currentTime - startTime) / 1000
            const progress = Math.min(elapsed / duration, 1)
            // ease-out
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(eased * target)
            if (progress < 1) requestAnimationFrame(step)
        }

        requestAnimationFrame(step)
    }, [target, duration, skip])

    return (
        <span className={className} style={style}>
            {prefix}
            {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
            {suffix}
        </span>
    )
}

// ─── PageTransition ──────────────────────────────────────────
interface PageTransitionProps {
    children: ReactNode
    transitionKey: string
}

export function PageTransition({ children, transitionKey }: PageTransitionProps) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={transitionKey}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: EASE }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

// ─── Stagger Item (for use inside StaggerContainer) ──────────
interface StaggerItemProps {
    children: ReactNode
    className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
    return (
        <motion.div variants={staggerChildVariants} className={className}>
            {children}
        </motion.div>
    )
}

export function StaggerScaleItem({ children, className }: StaggerItemProps) {
    return (
        <motion.div variants={staggerScaleVariants} className={className}>
            {children}
        </motion.div>
    )
}

// ─── MotionDiv (re-export for convenience) ───────────────────
export { motion, AnimatePresence }
