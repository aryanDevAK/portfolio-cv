"use client"

import type React from "react"
import { useState } from "react"
import { GlassPanel } from "../glass-panel"
import {
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  motion,
  AnimatePresence,
} from "../motion-wrapper"

/* ───── Floating animated icons in the background ───── */
function FloatingIcons() {
  const icons = [
    { Icon: EnvelopeIcon, x: "8%", y: "12%", size: 28, delay: 0, dur: 6 },
    { Icon: ChatBubbleLeftRightIcon, x: "85%", y: "18%", size: 24, delay: 1.2, dur: 7 },
    { Icon: PaperAirplaneIcon, x: "75%", y: "72%", size: 22, delay: 0.6, dur: 5.5 },
    { Icon: SparklesIcon, x: "12%", y: "78%", size: 20, delay: 1.8, dur: 8 },
    { Icon: EnvelopeIcon, x: "50%", y: "6%", size: 18, delay: 2.4, dur: 6.5 },
    { Icon: ChatBubbleLeftRightIcon, x: "92%", y: "55%", size: 20, delay: 0.3, dur: 7.5 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: item.x, top: item.y, opacity: 0.12 }}
          animate={{
            y: [0, -18, 0, 12, 0],
            rotate: [0, 8, -5, 3, 0],
          }}
          transition={{
            duration: item.dur,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.Icon
            className="text-current"
            style={{ width: item.size, height: item.size, color: "var(--theme-accent)" }}
          />
        </motion.div>
      ))}
    </div>
  )
}

/* ───── Animated send button with morphing states ───── */
function SendButton({ status }: { status: "idle" | "sending" | "sent" | "error" }) {
  return (
    <motion.button
      type="submit"
      disabled={status === "sending" || status === "sent"}
      className="relative w-full py-4 px-8 rounded-xl font-semibold text-base overflow-hidden cursor-pointer disabled:cursor-not-allowed"
      style={{
        backgroundColor: status === "sent" ? "#10B981" : status === "error" ? "#EF4444" : "var(--theme-accent)",
        color: "white",
      }}
      whileHover={status === "idle" ? { scale: 1.02, y: -2 } : {}}
      whileTap={status === "idle" ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
    >
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.div
            key="idle"
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <PaperAirplaneIcon className="w-5 h-5" />
            Send Message
          </motion.div>
        )}
        {status === "sending" && (
          <motion.div
            key="sending"
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </motion.div>
            Sending...
          </motion.div>
        )}
        {status === "sent" && (
          <motion.div
            key="sent"
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <CheckCircleIcon className="w-5 h-5" />
            Message Sent!
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            key="error"
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ExclamationCircleIcon className="w-5 h-5" />
            Try Again
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shimmer effect on hover */}
      {status === "idle" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  )
}

/* ───── Main Section ───── */
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [responseMsg, setResponseMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    setResponseMsg("")

    try {
      const fd = new FormData(e.currentTarget)
      fd.append("access_key", "29788b3a-868c-4ea4-8954-13c4ca5bebc5")
      fd.append("subject", `Portfolio Contact: ${formData.subject}`)

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      })

      const data = await res.json()

      if (data.success) {
        setStatus("sent")
        setResponseMsg("Thank you for your message! I'll get back to you within 24 hours.")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => {
          setStatus("idle")
          setResponseMsg("")
        }, 5000)
      } else {
        setStatus("error")
        setResponseMsg(data.message || "Something went wrong. Please try again.")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch {
      setStatus("error")
      setResponseMsg("Network error. Please check your connection.")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const contactCards = [
    {
      icon: EnvelopeIcon,
      label: "Email Me",
      value: "aryankhatri.forwork@gmail.com",
      href: "mailto:aryankhatri.forwork@gmail.com",
      color: "#8B5CF6",
    },
    {
      icon: MapPinIcon,
      label: "Based In",
      value: "New Delhi, India",
      href: "https://maps.google.com/?q=New+Delhi+India",
      color: "#10B981",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "aryankhatriak",
      href: "https://www.linkedin.com/in/aryankhatriak/",
      color: "#0A66C2",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "aryanDevAK",
      href: "https://github.com/aryanDevAK/",
      color: "#6E40C9",
    },
  ]

  return (
    <section id="contact" className="min-h-screen px-6 py-6 my-12 relative">
      <FloatingIcons />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-5 px-5 py-2 rounded-full"
              style={{
                color: "var(--theme-accent)",
                backgroundColor: "var(--theme-glass)",
                border: "1px solid var(--theme-panel-border)",
              }}
              animate={{
                boxShadow: [
                  "0 0 0px var(--theme-accent)",
                  "0 0 20px color-mix(in srgb, var(--theme-accent) 25%, transparent)",
                  "0 0 0px var(--theme-accent)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              Let's Connect
            </motion.div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-balance"
              style={{ color: "var(--theme-foreground)" }}
            >
              Get In Touch
            </h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto text-pretty leading-relaxed"
              style={{ color: "var(--theme-muted)" }}
            >
              Have a project idea, a question, or just want to say hello?
              Drop me a message right here — no email app needed.
            </p>
          </div>
        </FadeIn>

        {/* Contact Cards Row */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16" stagger={0.08} delay={0.1}>
          {contactCards.map((card, i) => {
            const Icon = card.icon
            return (
              <StaggerItem key={i}>
                <a href={card.href} target="_blank" rel="noopener noreferrer" className="block">
                  <motion.div
                    whileHover={{ scale: 1.04, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GlassPanel className="text-center py-6 px-4 h-full" hover>
                      <motion.div
                        className="inline-flex p-3 rounded-xl mb-3"
                        style={{
                          backgroundColor: card.color + "18",
                          border: `1px solid ${card.color}33`,
                        }}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 12 }}
                      >
                        <Icon className="w-6 h-6" style={{ color: card.color }} />
                      </motion.div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-1"
                        style={{ color: "var(--theme-muted)" }}
                      >
                        {card.label}
                      </p>
                      <p className="text-sm font-medium truncate" style={{ color: "var(--theme-foreground)" }}>
                        {card.value}
                      </p>
                    </GlassPanel>
                  </motion.div>
                </a>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Main Content: Form + Sidebar */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* ── Form: 3 of 5 columns ── */}
          <SlideIn direction="left" delay={0.15} className="lg:col-span-3">
            <GlassPanel className="relative overflow-hidden">
              {/* Decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                style={{ backgroundColor: "var(--theme-accent)" }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    animate={{ rotate: [0, 15, -10, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <PaperAirplaneIcon className="w-7 h-7" style={{ color: "var(--theme-accent)" }} />
                  </motion.div>
                  <h3 className="text-2xl font-bold" style={{ color: "var(--theme-foreground)" }}>
                    Send a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--theme-foreground)" }}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: "var(--theme-glass)",
                          borderColor: "var(--theme-panel-border)",
                          color: "var(--theme-foreground)",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--theme-foreground)" }}
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: "var(--theme-glass)",
                          borderColor: "var(--theme-panel-border)",
                          color: "var(--theme-foreground)",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--theme-foreground)" }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, collaboration, freelance work..."
                      className="w-full px-4 py-3.5 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: "var(--theme-glass)",
                        borderColor: "var(--theme-panel-border)",
                        color: "var(--theme-foreground)",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--theme-foreground)" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      className="w-full px-4 py-3.5 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 resize-none"
                      style={{
                        backgroundColor: "var(--theme-glass)",
                        borderColor: "var(--theme-panel-border)",
                        color: "var(--theme-foreground)",
                      }}
                    />
                  </div>

                  <SendButton status={status} />
                </form>

                {/* Response message toast */}
                <AnimatePresence>
                  {responseMsg && (
                    <motion.div
                      className="mt-5 p-4 rounded-xl flex items-center gap-3 text-sm font-medium"
                      style={{
                        backgroundColor: status === "sent" ? "#10B98118" : "#EF444418",
                        border: `1px solid ${status === "sent" ? "#10B98133" : "#EF444433"}`,
                        color: status === "sent" ? "#10B981" : "#EF4444",
                      }}
                      initial={{ opacity: 0, y: 10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {status === "sent" ? (
                        <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <ExclamationCircleIcon className="w-5 h-5 flex-shrink-0" />
                      )}
                      {responseMsg}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </GlassPanel>
          </SlideIn>

          {/* ── Sidebar: 2 of 5 columns ── */}
          <SlideIn direction="right" delay={0.25} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Stats */}
              <GlassPanel>
                <h4 className="text-lg font-bold mb-5" style={{ color: "var(--theme-foreground)" }}>
                  Quick Stats
                </h4>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { value: 50, suffix: "+", label: "Projects", color: "#8B5CF6" },
                    { value: 95, suffix: "%", label: "AI Accuracy", color: "#3B82F6" },
                    { value: 3, suffix: "+ yrs", label: "Experience", color: "#10B981" },
                    { value: 24, suffix: "hr", label: "Response", color: "#F59E0B" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold mb-0.5" style={{ color: stat.color }}>
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1.5 + i * 0.3} />
                      </div>
                      <div className="text-xs font-medium" style={{ color: "var(--theme-muted)" }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>

              {/* Availability */}
              <GlassPanel>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#10B981" }}
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        "0 0 0px #10B981",
                        "0 0 12px #10B981",
                        "0 0 0px #10B981",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="text-sm font-semibold" style={{ color: "#10B981" }}>
                    Available for Work
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--theme-muted)" }}>
                  Currently open to freelance projects, full-time opportunities, and interesting collaborations.
                  I typically respond within 24 hours.
                </p>
              </GlassPanel>

              {/* What to expect */}
              <GlassPanel>
                <h4 className="text-lg font-bold mb-4" style={{ color: "var(--theme-foreground)" }}>
                  What Happens Next?
                </h4>
                <div className="space-y-4">
                  {[
                    { step: "01", text: "I'll read your message within 24 hours" },
                    { step: "02", text: "We'll schedule a quick call if needed" },
                    { step: "03", text: "I'll send a proposal with timeline & scope" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className="text-xs font-bold px-2 py-1 rounded-md flex-shrink-0"
                        style={{
                          backgroundColor: "var(--theme-accent)",
                          color: "white",
                          opacity: 0.9,
                        }}
                      >
                        {item.step}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--theme-muted)" }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
