"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "@/components/motion-wrapper"
import {
    ChatBubbleLeftRightIcon,
    XMarkIcon,
    SparklesIcon,
    ArrowPathIcon,
    WrenchScrewdriverIcon,
    CpuChipIcon,
    BriefcaseIcon,
    RocketLaunchIcon,
    AcademicCapIcon,
    BoltIcon,
    HandRaisedIcon,
    EnvelopeIcon,
    LightBulbIcon,
    CommandLineIcon,
} from "@heroicons/react/24/outline"

/* ─────────── Simple Markdown → JSX renderer ─────────── */

function formatMessage(text: string) {
    const paragraphs = text.split(/\n\n/)

    return paragraphs.map((para, pIdx) => {
        const lines = para.split(/\n/)
        const isList =
            lines.length > 1 &&
            lines.every(
                (l) => /^[•✅→▸‣]/.test(l.trim()) || l.trim() === ""
            )

        if (isList) {
            return (
                <ul key={pIdx} className="space-y-1 my-1.5 ml-1">
                    {lines
                        .filter((l) => l.trim())
                        .map((line, lIdx) => (
                            <li key={lIdx} className="flex gap-2 items-start">
                                <span
                                    className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                                    style={{ backgroundColor: "var(--theme-accent)" }}
                                />
                                <span>{renderInline(line.trim().replace(/^[•✅→▸‣]\s*/, ""))}</span>
                            </li>
                        ))}
                </ul>
            )
        }

        return (
            <p key={pIdx} className={pIdx > 0 ? "mt-2.5" : ""}>
                {lines.map((line, lIdx) => (
                    <span key={lIdx}>
                        {lIdx > 0 && <br />}
                        {renderInline(line)}
                    </span>
                ))}
            </p>
        )
    })
}

function renderInline(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <strong key={i} style={{ color: "var(--theme-accent)", fontWeight: 700 }}>
                    {part.slice(2, -2)}
                </strong>
            )
        }
        return <span key={i}>{part}</span>
    })
}

/* ─────────────── Q&A Knowledge Base ─────────────── */

interface QA {
    question: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    answer: string
    followUp?: string[]
}

const qaBank: Record<string, QA> = {
    greeting: {
        question: "Start Conversation",
        icon: ChatBubbleLeftRightIcon,
        answer:
            "Welcome! I'm ARIA — Aryan's virtual assistant, trained on his portfolio, projects, and experience. I can help you learn about his technical skills, work history, and how to get in touch.\n\nSelect a topic below to get started.",
        followUp: ["skills", "experience", "projects", "services", "education", "hire", "contact"],
    },
    skills: {
        question: "Technical Skills",
        icon: WrenchScrewdriverIcon,
        answer:
            "Here's a breakdown of Aryan's core technical stack:\n\n**Languages** — Python, JavaScript, TypeScript, Java, C++\n**Frontend** — React, Next.js, Tailwind CSS, Framer Motion\n**Backend** — Node.js, Flask, Express.js, REST APIs\n**AI/ML** — TensorFlow, PyTorch, LangChain, OpenAI, Gemini, NLP, Computer Vision\n**Databases** — MongoDB, MySQL, PostgreSQL, Firebase\n**DevOps** — Docker, Git, GCP, CI/CD\n\nHis strongest focus area is building AI-powered full-stack products with measurable real-world impact.",
        followUp: ["ai_detail", "experience", "projects", "services"],
    },
    ai_detail: {
        question: "AI & ML Expertise",
        icon: CpuChipIcon,
        answer:
            "AI engineering is Aryan's primary specialization. Here's what he has built:\n\n• **Custom LLM integrations** — Production systems using Gemini, Llama, and OpenAI APIs\n• **NLP pipelines** — Medical report parsing with 95% accuracy\n• **Conversational AI agents** — Mock interview platform that reduced candidate anxiety by 78%\n• **Computer vision** — Facial recognition and image analysis systems\n• **Enterprise automation** — Customer support agent at Arth, reducing manual workload by 80%\n\nEvery project is built for production, not just prototyping.",
        followUp: ["projects", "experience", "hire"],
    },
    experience: {
        question: "Work Experience",
        icon: BriefcaseIcon,
        answer:
            "Aryan's professional timeline:\n\n**Arth** — Software Engineer (June 2025 – Present)\n• Built India's first 100% Digital Lending Channel for LAP & Home Loans\n• Automated customer support by 80% with a custom AI agent\n• Architected the FinPro SaaS stack (LOS, LMS, Credit Engine, CRM)\n\n**Intel Corporation** — Summer Trainee (2024)\n• AI in Fintech project using ML & NLP techniques\n• Achieved 95% project success rate in a 2-week sprint\n\n**Infosys** — SDE Intern (2024)\n• OCR-driven cheque processing system for banking\n• 90% improvement in operational efficiency",
        followUp: ["skills", "projects", "education", "hire"],
    },
    projects: {
        question: "Key Projects",
        icon: RocketLaunchIcon,
        answer:
            "Some of Aryan's standout builds:\n\n**MedReport AI** — NLP pipeline that parses medical reports with 95% accuracy using the Gemini API. Handles unstructured clinical text at scale.\n\n**MockMate** — AI-powered mock interview platform. Reduced candidate anxiety by 78% with real-time feedback and adaptive questioning.\n\n**FinPro Stack** — Complete lending lifecycle SaaS product (LOS, LMS, Credit Engine, CRM) built at Arth for commercial NBFC deployment.\n\n**This Portfolio** — Designed and built from scratch using Next.js, Framer Motion, and glassmorphism. Yes, including me — ARIA.\n\nVisit the Projects section for the full showcase.",
        followUp: ["skills", "ai_detail", "services", "contact"],
    },
    education: {
        question: "Education",
        icon: AcademicCapIcon,
        answer:
            "**Chandigarh University** — Bachelor's in Computer Applications (2022–2025)\n\n• CGPA: 8.31\n• Class Representative\n• Secretary — Power Coders Society\n• Lead Coordinator — GDSC Chandigarh University\n• Lead Technical Coordinator — CUFEST-2023\n\nAlso holds professional certifications from **Intel** and **Infosys** in AI/ML and Software Development.",
        followUp: ["experience", "skills", "hire"],
    },
    services: {
        question: "Services Offered",
        icon: BoltIcon,
        answer:
            "Aryan offers expertise across these domains:\n\n**AI & Machine Learning** — Custom LLM integrations, NLP pipelines, intelligent chatbots, computer vision systems\n\n**Full-Stack Development** — React/Next.js frontends, Node.js/Flask backends, scalable database architecture\n\n**Cloud & DevOps** — GCP deployment, Docker containerization, CI/CD pipelines\n\n**System Design** — Scalable architectures, API design, microservices\n\n**Technical Consulting** — AI adoption strategy, architecture audits, product-market fit analysis",
        followUp: ["hire", "contact", "projects", "skills"],
    },
    hire: {
        question: "Availability",
        icon: HandRaisedIcon,
        answer:
            "Aryan is currently open to:\n\n• **Full-time positions** — Software Engineer, AI/ML Engineer, Full Stack Developer\n• **Freelance projects** — AI products, web applications, SaaS platforms\n• **Consulting engagements** — Tech strategy, architecture review, team mentoring\n\nHe's especially interested in roles that combine AI/ML with full-stack development. If you have something exciting in mind, reach out.",
        followUp: ["contact", "experience", "services"],
    },
    contact: {
        question: "Get in Touch",
        icon: EnvelopeIcon,
        answer:
            "Best ways to reach Aryan:\n\n• **Contact Form** — Use the Contact section on this site for a direct message\n• **LinkedIn** — linkedin.com/in/aryan-khatri\n• **GitHub** — github.com/aryanDevAK\n\nTypical response time is within 24 hours. For urgent inquiries, LinkedIn is the fastest channel.",
        followUp: ["greeting", "services", "hire"],
    },
    fun: {
        question: "Quick Facts",
        icon: LightBulbIcon,
        answer:
            "A few things that make Aryan stand out:\n\n• Led and coordinated tech events with 1,000+ participants at CUFEST\n• Built an AI customer support agent before \"AI agents\" became an industry buzzword\n• Designed this entire portfolio from scratch — every animation, every component\n• Believes in shipping fast and iterating faster\n• Runs on coffee and curiosity\n\nAnd yes — I'm ARIA, a rule-based assistant built right into this portfolio. No API calls, no cloud dependencies. Just clean engineering.",
        followUp: ["skills", "projects", "contact"],
    },
}

const initialQuestions = ["greeting", "skills", "experience", "projects", "services", "fun"]

/* ─────────────── Chat Message Types ─────────────── */

interface Message {
    id: number
    type: "bot" | "user"
    text: string
    options?: string[]
}

/* ─────────────── Component ─────────────── */

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [isTyping, setIsTyping] = useState(false)
    const [hasNotification, setHasNotification] = useState(true)
    const scrollRef = useRef<HTMLDivElement>(null)
    const msgIdRef = useRef(0)

    const nextId = () => ++msgIdRef.current

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isTyping])

    const openChat = () => {
        setIsOpen(true)
        setHasNotification(false)
        if (messages.length === 0) {
            setIsTyping(true)
            setTimeout(() => {
                setMessages([
                    {
                        id: nextId(),
                        type: "bot",
                        text: "Hi, I'm ARIA — Aryan's portfolio assistant. I'm trained on his skills, projects, and experience. Select a topic to explore.",
                        options: initialQuestions,
                    },
                ])
                setIsTyping(false)
            }, 600)
        }
    }

    const handleOptionClick = (key: string) => {
        const qa = qaBank[key]
        if (!qa) return

        const userMsg: Message = {
            id: nextId(),
            type: "user",
            text: qa.question,
        }

        setMessages((prev) => [...prev, userMsg])
        setIsTyping(true)

        setTimeout(() => {
            const botMsg: Message = {
                id: nextId(),
                type: "bot",
                text: qa.answer,
                options: qa.followUp || initialQuestions,
            }
            setMessages((prev) => [...prev, botMsg])
            setIsTyping(false)
        }, 800 + Math.random() * 600)
    }

    const resetChat = () => {
        setMessages([])
        msgIdRef.current = 0
        setIsTyping(true)
        setTimeout(() => {
            setMessages([
                {
                    id: nextId(),
                    type: "bot",
                    text: "Session reset. What would you like to know about Aryan?",
                    options: initialQuestions,
                },
            ])
            setIsTyping(false)
        }, 400)
    }

    return (
        <>
            {/* ── Floating Chat Button ── */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer border-0"
                        style={{
                            backgroundColor: "var(--theme-accent)",
                            boxShadow:
                                "0 4px 20px color-mix(in srgb, var(--theme-accent) 40%, transparent), 0 0 40px color-mix(in srgb, var(--theme-accent) 15%, transparent)",
                        }}
                        onClick={openChat}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <CommandLineIcon className="w-6 h-6 text-white" />

                        {hasNotification && (
                            <motion.div
                                className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: "#ef4444" }}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <span className="text-white text-xs font-bold">1</span>
                            </motion.div>
                        )}

                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ border: "2px solid var(--theme-accent)" }}
                            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* ── Chat Window ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] rounded-2xl overflow-hidden border flex flex-col"
                        style={{
                            backgroundColor: "var(--theme-glass)",
                            borderColor: "var(--theme-panel-border)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                            height: "min(560px, calc(100vh - 6rem))",
                            boxShadow:
                                "0 8px 40px rgba(0,0,0,0.3), 0 0 60px color-mix(in srgb, var(--theme-accent) 10%, transparent)",
                        }}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {/* ── Header ── */}
                        <div
                            className="px-5 py-4 flex items-center justify-between shrink-0"
                            style={{
                                background:
                                    "linear-gradient(135deg, var(--theme-accent), color-mix(in srgb, var(--theme-accent) 70%, black))",
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                                    style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <CommandLineIcon className="w-5 h-5 text-white" />
                                </motion.div>
                                <div>
                                    <h3 className="text-white font-bold text-sm tracking-wide">ARIA</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div
                                            className="w-2 h-2 rounded-full animate-pulse"
                                            style={{ backgroundColor: "#4ade80" }}
                                        />
                                        <span className="text-white/70 text-xs">Active</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <motion.button
                                    onClick={resetChat}
                                    className="p-2 rounded-lg cursor-pointer text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                                    whileTap={{ rotate: -360 }}
                                    transition={{ duration: 0.4 }}
                                    title="Reset session"
                                >
                                    <ArrowPathIcon className="w-4 h-4" />
                                </motion.button>
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-lg cursor-pointer text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    title="Minimize"
                                >
                                    <XMarkIcon className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </div>

                        {/* ── Messages ── */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 space-y-4"
                            style={{ scrollBehavior: "smooth" }}
                        >
                            <AnimatePresence initial={false}>
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.25 }}
                                        className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div className="max-w-[85%] space-y-2">
                                            {/* Bubble */}
                                            <div
                                                className="px-4 py-3 rounded-2xl text-sm leading-relaxed"
                                                style={
                                                    msg.type === "user"
                                                        ? {
                                                            backgroundColor: "var(--theme-accent)",
                                                            color: "white",
                                                            borderBottomRightRadius: "4px",
                                                        }
                                                        : {
                                                            backgroundColor: "var(--theme-panel)",
                                                            color: "var(--theme-foreground)",
                                                            border: "1px solid var(--theme-panel-border)",
                                                            borderBottomLeftRadius: "4px",
                                                        }
                                                }
                                            >
                                                {msg.type === "bot" ? formatMessage(msg.text) : msg.text}
                                            </div>

                                            {/* Option buttons with icons */}
                                            {msg.type === "bot" && msg.options && (
                                                <div className="flex flex-wrap gap-1.5 mt-2">
                                                    {msg.options.map((key) => {
                                                        const qa = qaBank[key]
                                                        if (!qa) return null
                                                        const Icon = qa.icon
                                                        return (
                                                            <motion.button
                                                                key={key}
                                                                onClick={() => handleOptionClick(key)}
                                                                className="text-xs px-3 py-1.5 rounded-full cursor-pointer font-medium transition-colors flex items-center gap-1.5"
                                                                style={{
                                                                    backgroundColor: "var(--theme-glass)",
                                                                    color: "var(--theme-accent)",
                                                                    border: "1px solid var(--theme-panel-border)",
                                                                }}
                                                                whileHover={{
                                                                    scale: 1.05,
                                                                    backgroundColor: "var(--theme-accent)",
                                                                    color: "white",
                                                                }}
                                                                whileTap={{ scale: 0.95 }}
                                                            >
                                                                <Icon className="w-3.5 h-3.5" />
                                                                {qa.question}
                                                            </motion.button>
                                                        )
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {/* Typing indicator */}
                            {isTyping && (
                                <motion.div
                                    className="flex justify-start"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <div
                                        className="px-4 py-3 rounded-2xl flex items-center gap-1.5"
                                        style={{
                                            backgroundColor: "var(--theme-panel)",
                                            border: "1px solid var(--theme-panel-border)",
                                            borderBottomLeftRadius: "4px",
                                        }}
                                    >
                                        {[0, 1, 2].map((i) => (
                                            <motion.div
                                                key={i}
                                                className="w-2 h-2 rounded-full"
                                                style={{ backgroundColor: "var(--theme-accent)" }}
                                                animate={{ y: [0, -6, 0] }}
                                                transition={{
                                                    duration: 0.6,
                                                    repeat: Infinity,
                                                    delay: i * 0.15,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* ── Footer ── */}
                        <div
                            className="px-4 py-3 flex items-center justify-center gap-2 shrink-0"
                            style={{ borderTop: "1px solid var(--theme-panel-border)" }}
                        >
                            <CommandLineIcon className="w-3.5 h-3.5" style={{ color: "var(--theme-muted)" }} />
                            <p className="text-xs" style={{ color: "var(--theme-muted)" }}>
                                ARIA — Aryan's Responsive Intelligent Assistant
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
