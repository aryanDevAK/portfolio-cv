"use client"

import type React from "react"

import { useState } from "react"
import { GlassPanel } from "../glass-panel"
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send } from "lucide-react"
import { Button } from "../ui/button"
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
} from "../motion-wrapper"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:aryankhatri.forwork@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aryankhatri.forwork@gmail.com",
      href: "mailto:aryankhatri.forwork@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, India",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aryankhatriak/",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/aryanDevAK/",
    },
  ]

  return (
    <section id="contact" className="min-h-screen px-6 py-6 my-[50px]">
      <div className="max-w-6xl mx-auto my-[50px]">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "var(--theme-foreground)" }}>
              Let's Work Together
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: "var(--theme-muted)" }}>
              Ready to bring your ideas to life? Get in touch and let's discuss your next project
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <SlideIn direction="left" delay={0.15}>
            <div className="space-y-8">
              <GlassPanel>
                <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--theme-foreground)" }}>
                  Get In Touch
                </h3>
                <p className="mb-8 leading-relaxed" style={{ color: "var(--theme-muted)" }}>
                  I'm always interested in new opportunities and exciting projects. Whether you have a question, want to
                  discuss a potential collaboration, or just want to say hello, feel free to reach out!
                </p>

                <StaggerContainer className="space-y-6" stagger={0.1} delay={0.3}>
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <StaggerItem key={index}>
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg" style={{ backgroundColor: "var(--theme-accent)", opacity: 0.2 }}>
                            <IconComponent className="w-5 h-5" style={{ color: "var(--theme-accent)" }} />
                          </div>
                          <div>
                            <p className="font-medium" style={{ color: "var(--theme-foreground)" }}>
                              {info.label}
                            </p>
                            {info.href !== "#" ? (
                              <a
                                href={info.href}
                                className="transition-colors duration-200 hover:opacity-80"
                                style={{ color: "var(--theme-muted)" }}
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p style={{ color: "var(--theme-muted)" }}>{info.value}</p>
                            )}
                          </div>
                        </div>
                      </StaggerItem>
                    )
                  })}
                </StaggerContainer>

                <div className="pt-8 mt-8 border-t" style={{ borderColor: "var(--theme-panel-border)" }}>
                  <h4 className="font-semibold mb-4" style={{ color: "var(--theme-foreground)" }}>
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className="p-3 rounded-lg transition-all duration-200 hover:scale-105"
                          style={{
                            backgroundColor: "var(--theme-glass)",
                            borderColor: "var(--theme-panel-border)",
                          }}
                          title={social.label}
                        >
                          <IconComponent className="w-5 h-5" style={{ color: "var(--theme-foreground)" }} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </GlassPanel>

              {/* Quick Stats */}
              <FadeIn delay={0.4}>
                <GlassPanel>
                  <h4 className="font-semibold mb-4" style={{ color: "var(--theme-foreground)" }}>
                    Quick Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: "var(--theme-accent)" }}>
                        <AnimatedCounter target={4} suffix="+" duration={1.5} />
                      </div>
                      <div className="text-sm" style={{ color: "var(--theme-muted)" }}>
                        Projects Completed
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: "var(--theme-accent)" }}>
                        <AnimatedCounter target={95} suffix="%" duration={1.8} />
                      </div>
                      <div className="text-sm" style={{ color: "var(--theme-muted)" }}>
                        AI Accuracy Rate
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: "var(--theme-accent)" }}>
                        <AnimatedCounter target={2} suffix="+" duration={1.2} />
                      </div>
                      <div className="text-sm" style={{ color: "var(--theme-muted)" }}>
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: "var(--theme-accent)" }}>
                        <AnimatedCounter target={8.31} decimals={2} duration={2} />
                      </div>
                      <div className="text-sm" style={{ color: "var(--theme-muted)" }}>
                        CGPA
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </FadeIn>
            </div>
          </SlideIn>

          {/* Contact Form */}
          <SlideIn direction="right" delay={0.25}>
            <GlassPanel>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--theme-foreground)" }}>
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <StaggerContainer className="grid sm:grid-cols-2 gap-4" stagger={0.08} delay={0.4}>
                  <StaggerItem>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--theme-foreground)" }}
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: "var(--theme-glass)",
                          borderColor: "var(--theme-panel-border)",
                          color: "var(--theme-foreground)",
                        }}
                        placeholder="Your full name"
                      />
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--theme-foreground)" }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: "var(--theme-glass)",
                          borderColor: "var(--theme-panel-border)",
                          color: "var(--theme-foreground)",
                        }}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </StaggerItem>
                </StaggerContainer>

                <FadeIn delay={0.55}>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--theme-foreground)" }}
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: "var(--theme-glass)",
                        borderColor: "var(--theme-panel-border)",
                        color: "var(--theme-foreground)",
                      }}
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={0.65}>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--theme-foreground)" }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 resize-none"
                      style={{
                        backgroundColor: "var(--theme-glass)",
                        borderColor: "var(--theme-panel-border)",
                        color: "var(--theme-foreground)",
                      }}
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={0.75}>
                  <Button
                    type="submit"
                    className="w-full"
                    style={{
                      backgroundColor: "var(--theme-accent)",
                      color: "white",
                    }}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </FadeIn>
              </form>

              <FadeIn delay={0.85}>
                <div
                  className="mt-6 p-4 rounded-lg border"
                  style={{
                    backgroundColor: "var(--theme-glass)",
                    borderColor: "var(--theme-panel-border)",
                  }}
                >
                  <p className="text-sm" style={{ color: "var(--theme-muted)" }}>
                    <strong>Response Time:</strong> I typically respond within 24 hours. For urgent inquiries, feel free to
                    call directly.
                  </p>
                </div>
              </FadeIn>
            </GlassPanel>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
