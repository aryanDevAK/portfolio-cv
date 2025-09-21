"use client"

import { GlassPanel } from "../glass-panel"
import { Code, Database, Smartphone, Brain, Cloud, Users } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    description:
      "Custom AI-powered applications using cutting-edge technologies like Gemini AI, Llama AI, and NLP for intelligent automation and decision-making.",
    features: [
      "AI-powered chatbots and assistants",
      "Machine learning model development",
      "Natural Language Processing solutions",
      "Computer vision applications",
    ],
  },
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web application development using modern frameworks like Next.js, React, and Node.js with responsive design and optimal performance.",
    features: [
      "React & Next.js applications",
      "RESTful API development",
      "Database design and optimization",
      "Responsive UI/UX implementation",
    ],
  },
  {
    icon: Smartphone,
    title: "SaaS Platform Development",
    description:
      "Scalable Software-as-a-Service platforms with user management, subscription handling, and real-time features for business growth.",
    features: [
      "Multi-tenant architecture",
      "Payment gateway integration",
      "Real-time data synchronization",
      "User authentication & authorization",
    ],
  },
  {
    icon: Database,
    title: "Database & Backend Solutions",
    description:
      "Robust backend systems with efficient database design, API integrations, and cloud deployment for reliable and scalable applications.",
    features: [
      "MongoDB & MySQL optimization",
      "Cloud deployment (Google Cloud)",
      "API design and integration",
      "Performance monitoring",
    ],
  },
  {
    icon: Cloud,
    title: "DevOps & Deployment",
    description:
      "Streamlined development workflows with version control, automated testing, and cloud deployment for continuous integration and delivery.",
    features: [
      "Git workflow optimization",
      "Automated testing setup",
      "Cloud infrastructure management",
      "Performance optimization",
    ],
  },
  {
    icon: Users,
    title: "Technical Consulting",
    description:
      "Strategic technical guidance for startups and businesses, including architecture planning, technology stack selection, and team mentoring.",
    features: [
      "Technology stack consultation",
      "Code review and optimization",
      "Team training and mentoring",
      "Project architecture planning",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="min-h-screen px-6 py-6 my-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "var(--theme-foreground)" }}>
            Services & Expertise
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: "var(--theme-muted)" }}>
            Comprehensive software development services from AI integration to full-stack solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <GlassPanel
                key={index}
                className="group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                hover
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="p-3 rounded-lg group-hover:opacity-40 transition-all duration-300"
                    style={{ backgroundColor: "var(--theme-accent)", opacity: 0.2 }}
                  >
                    <IconComponent className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />
                  </div>
                  <h3 className="text-xl font-semibold text-balance" style={{ color: "var(--theme-foreground)" }}>
                    {service.title}
                  </h3>
                </div>

                <p className="mb-6 leading-relaxed text-pretty" style={{ color: "var(--theme-muted)" }}>
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-medium text-sm" style={{ color: "var(--theme-accent)" }}>
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: "var(--theme-accent)" }}
                        />
                        <span style={{ color: "var(--theme-muted)" }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassPanel>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <GlassPanel className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--theme-foreground)" }}>
              Ready to Start Your Project?
            </h3>
            <p className="mb-6 text-pretty" style={{ color: "var(--theme-muted)" }}>
              Let's discuss how I can help bring your ideas to life with cutting-edge technology and proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                style={{
                  backgroundColor: "var(--theme-accent)",
                  color: "white",
                }}
              >
                Get In Touch
              </a>
              <a
                href="mailto:aryankhatri.forwork@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border transition-colors duration-200 font-medium"
                style={{
                  borderColor: "var(--theme-panel-border)",
                  color: "var(--theme-accent)",
                  backgroundColor: "transparent",
                }}
              >
                Send Email
              </a>
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  )
}
