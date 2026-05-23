"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars, Float } from "@react-three/drei"
import * as THREE from "three"
import { useTheme } from "next-themes"

function MovingStars() {
    const starsRef = useRef<any>(null)

    useFrame((state, delta) => {
        if (starsRef.current) {
            starsRef.current.rotation.x -= delta * 0.02
            starsRef.current.rotation.y -= delta * 0.03
        }
    })

    return (
        <Stars
            ref={starsRef}
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
        />
    )
}

function FloatingShapes() {
    const { theme } = useTheme()
    const isDark = theme === "dark" || theme === "system" // fallback for simplicity
    const color = isDark ? "#ffffff" : "#000000"

    return (
        <>
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
                <mesh position={[4, 2, -5]}>
                    <octahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color={color} wireframe opacity={0.3} transparent />
                </mesh>
            </Float>

            <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
                <mesh position={[-5, -2, -8]}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial color={"#8b5cf6"} wireframe opacity={0.4} transparent />
                </mesh>
            </Float>

            <Float speed={1.2} rotationIntensity={1} floatIntensity={2.5}>
                <mesh position={[0, -4, -6]}>
                    <torusGeometry args={[1, 0.4, 16, 32]} />
                    <meshStandardMaterial color={"#ec4899"} wireframe opacity={0.3} transparent />
                </mesh>
            </Float>
        </>
    )
}

export function ThreeBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <MovingStars />
                <FloatingShapes />
            </Canvas>
        </div>
    )
}
