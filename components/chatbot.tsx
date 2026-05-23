"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
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
    PaperAirplaneIcon,
} from "@heroicons/react/24/outline"

/* ─────────── Simple Markdown → JSX renderer ─────────── */

function formatMessage(text: string) {
    const paragraphs = text.split(/\n\n/)
    return paragraphs.map((para, pIdx) => {
        const lines = para.split(/\n/)
        const isList = lines.length > 1 && lines.every((l) => /^[•✅→▸‣\-\*]/.test(l.trim()) || l.trim() === "")
        if (isList) {
            return (
                <ul key={pIdx} className="space-y-1 my-1.5 ml-1">
                    {lines.filter((l) => l.trim()).map((line, lIdx) => (
                        <li key={lIdx} className="flex gap-2 items-start">
                            <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--theme-accent)" }} />
                            <span>{renderInline(line.trim().replace(/^[•✅→▸‣\-\*]\s*/, ""))}</span>
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
            return (<strong key={i} style={{ color: "var(--theme-accent)", fontWeight: 700 }}>{part.slice(2, -2)}</strong>)
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
        answer: "Welcome! I'm ARIA — Aryan's virtual assistant, trained on his portfolio, projects, and experience. I can help you learn about his technical skills, work history, and how to get in touch.\n\nYou can **select a topic** below or **type any question** to chat with me directly.",
        followUp: ["skills", "experience", "projects", "services", "education", "hire", "contact"],
    },
    skills: {
        question: "Technical Skills",
        icon: WrenchScrewdriverIcon,
        answer: "Here's a breakdown of Aryan's core technical stack:\n\n**Languages** — Python, JavaScript, TypeScript, Java, C++\n**Frontend** — React, Next.js, Tailwind CSS, Framer Motion\n**Backend** — Node.js, Flask, Express.js, REST APIs\n**AI/ML** — TensorFlow, PyTorch, LangChain, OpenAI, Gemini, NLP, Computer Vision\n**Databases** — MongoDB, MySQL, PostgreSQL, Firebase\n**DevOps** — Docker, Jenkins, AWS (ECS, Amplify, EC2, CloudFormation, CodePipeline), GCP, Git, CI/CD\n\nHis strongest focus area is building AI-powered full-stack products with measurable real-world impact.",
        followUp: ["ai_detail", "experience", "projects", "services"],
    },
    ai_detail: {
        question: "AI & ML Expertise",
        icon: CpuChipIcon,
        answer: "AI engineering is Aryan's primary specialization. Here's what he has built:\n\n• **Custom LLM integrations** — Production systems using Gemini, Llama, and OpenAI APIs\n• **NLP pipelines** — Medical report parsing with 95% accuracy\n• **Conversational AI agents** — Mock interview platform that reduced candidate anxiety by 78%\n• **Computer vision** — Facial recognition and image analysis systems\n• **Enterprise automation** — RAG-based AI customer support assistant \"Khushi\" at Arthimpact, achieving 65% satisfaction rate\n\nEvery project is built for production, not just prototyping.",
        followUp: ["projects", "experience", "hire"],
    },
    experience: {
        question: "Work Experience",
        icon: BriefcaseIcon,
        answer: "Aryan's professional timeline:\n\n**Arthimpact Digital Loans** — Software Engineer (June 2025 – Present)\n• Engineered Digital Leads Generation platform — 80% onboarding improvement, 70% faster loan processing\n• Built multi-agent credit intelligence system — 60% better approval rates, 75% LOS quality improvement\n• Deployed KITE (KYC & Identity Trust Engine) — 100% digital borrower verification\n• Engineered \"Khushi\" RAG-based AI support assistant — 65% satisfaction rate\n• Architected FinPro SaaS platform (LOS, LMS, CRM, Field Force Management)\n• Mentored 20+ interns across engineering workflows\n\n**Intel Corporation** — Summer Trainee (2024)\n• AI in Fintech project using ML & NLP — 95% success rate\n\n**Infosys** — SDE Intern (2024)\n• OCR-driven cheque processing — 90% efficiency improvement",
        followUp: ["skills", "projects", "education", "hire"],
    },
    projects: {
        question: "Key Projects",
        icon: RocketLaunchIcon,
        answer: "Some of Aryan's standout builds:\n\n**MedReport AI** — NLP pipeline that parses medical reports with 95% accuracy using the Gemini API.\n\n**MockMate** — AI-powered mock interview platform. Reduced candidate anxiety by 78%.\n\n**KITE** — AI-assisted Virtual KYC platform with OCR, liveliness detection, sentiment analysis, and India Stack integrations.\n\n**FinPro Stack** — Complete lending lifecycle SaaS (LOS, LMS, Credit Engine, CRM) at Arthimpact.\n\n**Khushi** — RAG-based AI customer support assistant with 65% satisfaction rate.\n\n**This Portfolio** — Built from scratch with Next.js, Framer Motion, and glassmorphism. Including me — ARIA.",
        followUp: ["skills", "ai_detail", "services", "contact"],
    },
    education: {
        question: "Education",
        icon: AcademicCapIcon,
        answer: "**Chandigarh University** — Bachelor's in Computer Applications (2022–2025)\n\n• CGPA: 8.31\n• Class Representative\n• Secretary — Power Coders Society\n• Lead Coordinator — GDSC Chandigarh University\n• Lead Technical Coordinator — CUFEST-2023\n\nAlso holds professional certifications from **Intel** and **Infosys** in AI/ML and Software Development.",
        followUp: ["experience", "skills", "hire"],
    },
    services: {
        question: "Services Offered",
        icon: BoltIcon,
        answer: "Aryan offers expertise across these domains:\n\n**AI & Machine Learning** — Custom LLM integrations, NLP pipelines, intelligent chatbots, computer vision systems\n\n**Full-Stack Development** — React/Next.js frontends, Node.js/Flask backends, scalable database architecture\n\n**Cloud & DevOps** — AWS/GCP deployment, Docker containerization, CI/CD pipelines\n\n**System Design** — Scalable architectures, API design, microservices\n\n**Technical Consulting** — AI adoption strategy, architecture audits, product-market fit analysis",
        followUp: ["hire", "contact", "projects", "skills"],
    },
    hire: {
        question: "Availability",
        icon: HandRaisedIcon,
        answer: "Aryan is currently open to:\n\n• **Full-time positions** — Software Engineer, AI/ML Engineer, Full Stack Developer\n• **Freelance projects** — AI products, web applications, SaaS platforms\n• **Consulting engagements** — Tech strategy, architecture review, team mentoring\n\nHe's especially interested in roles that combine AI/ML with full-stack development.",
        followUp: ["contact", "experience", "services"],
    },
    contact: {
        question: "Get in Touch",
        icon: EnvelopeIcon,
        answer: "Best ways to reach Aryan:\n\n• **Contact Form** — Use the Contact section on this site\n• **LinkedIn** — linkedin.com/in/aryan-khatri\n• **GitHub** — github.com/aryanDevAK\n\nTypical response time is within 24 hours. For urgent inquiries, LinkedIn is fastest.",
        followUp: ["greeting", "services", "hire"],
    },
    fun: {
        question: "Quick Facts",
        icon: LightBulbIcon,
        answer: "A few things that make Aryan stand out:\n\n• Led tech events with 1,000+ participants at CUFEST\n• Built an AI customer support agent before \"AI agents\" became a buzzword\n• Designed this entire portfolio from scratch — every animation, every component\n• Believes in shipping fast and iterating faster\n• Runs on coffee and curiosity",
        followUp: ["skills", "projects", "contact"],
    },
    message_me: {
        question: "Send a message to Aryan",
        icon: PaperAirplaneIcon,
        answer: "I can help you send a direct message to Aryan right here.\n\nTo start, what is your full name?",
    },
}

const initialQuestions = ["greeting", "skills", "experience", "projects", "services", "fun", "message_me"]

/* ─────────────── Chat Message Types ─────────────── */

interface Message {
    id: number
    type: "bot" | "user"
    text: string
    options?: string[]
}

type InputMode = "chat" | "contact_name" | "contact_email" | "contact_message" | "contact_sending"

/* ─────────────── Component ─────────────── */

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [isTyping, setIsTyping] = useState(false)
    const [hasNotification, setHasNotification] = useState(true)
    const [inputMode, setInputMode] = useState<InputMode>("chat")
    const [contactData, setContactData] = useState({ name: "", email: "", message: "" })
    const [inputText, setInputText] = useState("")
    const [chatHistory, setChatHistory] = useState<{ role: "user" | "assistant"; content: string }[]>([])

    const scrollRef = useRef<HTMLDivElement>(null)
    const msgIdRef = useRef(0)
    const nextId = () => ++msgIdRef.current

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }, [messages, isTyping])

    const addBot = (text: string, options?: string[]) => {
        const msg: Message = { id: nextId(), type: "bot", text, options }
        setMessages((prev) => [...prev, msg])
    }

    const addUser = (text: string) => {
        setMessages((prev) => [...prev, { id: nextId(), type: "user", text }])
    }

    const openChat = () => {
        setIsOpen(true)
        setHasNotification(false)
        if (messages.length === 0) {
            setIsTyping(true)
            setTimeout(() => {
                setMessages([{
                    id: nextId(), type: "bot",
                    text: "Hi, I'm ARIA — Aryan's portfolio assistant. I'm trained on his skills, projects, and experience.\n\nSelect a topic or **type any question** to chat with me!",
                    options: initialQuestions,
                }])
                setIsTyping(false)
            }, 600)
        }
    }

    const handleOptionClick = (key: string) => {
        const qa = qaBank[key]
        if (!qa) return
        addUser(qa.question)
        setIsTyping(true)
        setTimeout(() => {
            const botMsg: Message = {
                id: nextId(), type: "bot", text: qa.answer,
                options: key === "message_me" ? undefined : (qa.followUp || initialQuestions),
            }
            setMessages((prev) => [...prev, botMsg])
            setIsTyping(false)
            if (key === "message_me") {
                setInputMode("contact_name")
                setContactData({ name: "", email: "", message: "" })
                setInputText("")
            }
        }, 800 + Math.random() * 600)
    }

    const handleAIChat = async (userText: string) => {
        addUser(userText)
        setIsTyping(true)
        const newHistory = [...chatHistory, { role: "user" as const, content: userText }]
        setChatHistory(newHistory)
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newHistory }),
            })
            const data = await res.json()
            const reply = data.reply || "I can't answer that right now. Try selecting a topic below!"
            setChatHistory((prev) => [...prev, { role: "assistant", content: reply }])
            addBot(reply, initialQuestions)
        } catch {
            addBot("I'm having trouble answering that right now. Please try selecting a topic below.", initialQuestions)
        } finally {
            setIsTyping(false)
        }
    }

    const handleContactFlow = async (text: string) => {
        addUser(text)
        setIsTyping(true)
        if (inputMode === "contact_name") {
            setContactData((p) => ({ ...p, name: text }))
            setTimeout(() => { addBot(`Nice to meet you, ${text}. What's your email address?`); setIsTyping(false); setInputMode("contact_email") }, 600)
        } else if (inputMode === "contact_email") {
            setContactData((p) => ({ ...p, email: text }))
            setTimeout(() => { addBot("Got it. Now, what message would you like to send to Aryan?"); setIsTyping(false); setInputMode("contact_message") }, 600)
        } else if (inputMode === "contact_message") {
            const finalData = { ...contactData, message: text }
            setContactData(finalData)
            setInputMode("contact_sending")
            try {
                const fd = new FormData()
                fd.append("access_key", "29788b3a-868c-4ea4-8954-13c4ca5bebc5")
                fd.append("subject", `Portfolio Contact: Message from ${finalData.name} via Chatbot`)
                fd.append("name", finalData.name)
                fd.append("email", finalData.email)
                fd.append("message", finalData.message)
                const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd })
                const data = await res.json()
                if (data.success) {
                    addBot("Your message has been sent successfully! Aryan will get back to you soon.", initialQuestions)
                } else {
                    addBot("Something went wrong while sending your message. Please try again or use the contact form.", initialQuestions)
                }
            } catch {
                addBot("Network error. Please try again later.", initialQuestions)
            } finally {
                setIsTyping(false)
                setInputMode("chat")
            }
        }
    }

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault()
        if (!inputText.trim() || isTyping) return
        const text = inputText.trim()
        setInputText("")
        if (inputMode === "chat") {
            handleAIChat(text)
        } else {
            handleContactFlow(text)
        }
    }

    const resetChat = () => {
        setMessages([])
        msgIdRef.current = 0
        setInputMode("chat")
        setContactData({ name: "", email: "", message: "" })
        setInputText("")
        setChatHistory([])
        setIsTyping(true)
        setTimeout(() => {
            setMessages([{ id: nextId(), type: "bot", text: "Session reset. What would you like to know about Aryan?\n\nSelect a topic or **type any question**.", options: initialQuestions }])
            setIsTyping(false)
        }, 400)
    }

    const getPlaceholder = () => {
        switch (inputMode) {
            case "contact_name": return "Type your full name..."
            case "contact_email": return "Type your email address..."
            case "contact_message": return "Type your message..."
            case "contact_sending": return "Sending..."
            default: return "Ask me anything about Aryan..."
        }
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
                            boxShadow: "0 4px 20px color-mix(in srgb, var(--theme-accent) 40%, transparent), 0 0 40px color-mix(in srgb, var(--theme-accent) 15%, transparent)",
                        }}
                        onClick={openChat}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <div className="relative w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-full overflow-hidden">
                            <Image src="/ai_avatar.png" alt="AI Assistant" fill className="object-cover" />
                        </div>
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
                            boxShadow: "0 8px 40px rgba(0,0,0,0.3), 0 0 60px color-mix(in srgb, var(--theme-accent) 10%, transparent)",
                        }}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {/* ── Header ── */}
                        <div
                            className="px-5 py-4 flex items-center justify-between shrink-0"
                            style={{ background: "linear-gradient(135deg, var(--theme-accent), color-mix(in srgb, var(--theme-accent) 70%, black))" }}
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden relative shadow-lg bg-black cursor-pointer"
                                    style={{ border: "2px solid rgba(255,255,255,0.2)" }}
                                >
                                    <Image src="/ai_avatar.png" alt="ARIA" fill className="object-cover" />
                                </motion.div>
                                <div>
                                    <h3 className="text-white font-bold text-sm tracking-wide">ARIA</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#4ade80" }} />
                                        <span className="text-white/70 text-xs">Personal Assistant</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <motion.button onClick={resetChat} className="p-2 rounded-lg cursor-pointer text-white/70 hover:text-white hover:bg-white/10 transition-colors" whileTap={{ rotate: -360 }} transition={{ duration: 0.4 }} title="Reset session">
                                    <ArrowPathIcon className="w-4 h-4" />
                                </motion.button>
                                <motion.button onClick={() => setIsOpen(false)} className="p-2 rounded-lg cursor-pointer text-white/70 hover:text-white hover:bg-white/10 transition-colors" whileHover={{ scale: 1.1 }} title="Minimize">
                                    <XMarkIcon className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </div>

                        {/* ── Messages ── */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4" style={{ scrollBehavior: "smooth" }}>
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
                                            <div
                                                className="px-4 py-3 rounded-2xl text-sm leading-relaxed"
                                                style={
                                                    msg.type === "user"
                                                        ? { backgroundColor: "var(--theme-accent)", color: "white", borderBottomRightRadius: "4px" }
                                                        : { backgroundColor: "var(--theme-panel)", color: "var(--theme-foreground)", border: "1px solid var(--theme-panel-border)", borderBottomLeftRadius: "4px" }
                                                }
                                            >
                                                {msg.type === "bot" ? formatMessage(msg.text) : msg.text}
                                            </div>
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
                                                                style={{ backgroundColor: "var(--theme-glass)", color: "var(--theme-accent)", border: "1px solid var(--theme-panel-border)" }}
                                                                whileHover={{ scale: 1.05, backgroundColor: "var(--theme-accent)", color: "white" }}
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
                            {isTyping && (
                                <motion.div className="flex justify-start" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                    <div className="px-4 py-3 rounded-2xl flex items-center gap-1.5" style={{ backgroundColor: "var(--theme-panel)", border: "1px solid var(--theme-panel-border)", borderBottomLeftRadius: "4px" }}>
                                        {[0, 1, 2].map((i) => (
                                            <motion.div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--theme-accent)" }} animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }} />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* ── Input Bar (always visible) ── */}
                        <form
                            onSubmit={handleSubmit}
                            className="px-3 py-3 flex items-center gap-2 shrink-0 transition-all"
                            style={{ borderTop: "1px solid var(--theme-panel-border)", backgroundColor: "color-mix(in srgb, var(--theme-panel) 50%, transparent)" }}
                        >
                            <input
                                type={inputMode === "contact_email" ? "email" : "text"}
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder={getPlaceholder()}
                                disabled={inputMode === "contact_sending" || isTyping}
                                className="flex-1 px-3 py-2 rounded-lg text-sm bg-transparent border focus:outline-none focus:ring-1 transition-colors w-full"
                                style={{ borderColor: "var(--theme-panel-border)", color: "var(--theme-foreground)" }}
                                autoFocus
                            />
                            <button
                                type="submit"
                                disabled={!inputText.trim() || inputMode === "contact_sending" || isTyping}
                                className="p-2 rounded-lg text-white disabled:opacity-50 transition-opacity flex items-center justify-center h-full aspect-square cursor-pointer"
                                style={{ backgroundColor: "var(--theme-accent)" }}
                            >
                                {inputMode === "contact_sending" ? (
                                    <ArrowPathIcon className="w-4 h-4 animate-spin" />
                                ) : (
                                    <PaperAirplaneIcon className="w-4 h-4" />
                                )}
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
