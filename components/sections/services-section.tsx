"use client"

import { GlassPanel } from "../glass-panel"
import {
  SparklesIcon,
  CommandLineIcon,
  RocketLaunchIcon,
  CircleStackIcon,
  CloudArrowUpIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline"
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiTailwindcss,
  SiGooglecloud,
  SiDocker,
  SiGit,
  SiFlask,
  SiTypescript,
  SiMysql,
} from "react-icons/si"
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
  AnimatedCounter,
  motion,
} from "../motion-wrapper"

const services = [
  {
    icon: SparklesIcon,
    title: "AI & Machine Learning",
    tagline: "Intelligence, engineered.",
    description:
      "I build AI-powered products that actually solve problems — not just demos. From NLP pipelines that parse medical reports with 95% accuracy to conversational agents that reduce interview anxiety by 78%, I focus on measurable impact over hype.",
    highlights: [
      "Custom LLM integrations (Gemini, Llama, OpenAI)",
      "NLP & text analysis pipelines",
      "Intelligent chatbots & virtual assistants",
      "Computer vision & facial recognition",
    ],
    gradient: "from-violet-500/20 to-purple-600/20",
    accentColor: "#8B5CF6",
  },
  {
    icon: CommandLineIcon,
    title: "Full-Stack Development",
    tagline: "Pixel to production.",
    description:
      "I don't just write frontend or backend — I own the entire stack. Clean React interfaces backed by robust APIs and well-structured databases. Every component is built for real users, not just code reviews.",
    highlights: [
      "Next.js & React applications",
      "RESTful & GraphQL API design",
      "Relational & NoSQL database architecture",
      "Responsive, accessible UI/UX",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "#3B82F6",
  },
  {
    icon: RocketLaunchIcon,
    title: "SaaS Product Engineering",
    tagline: "Built to scale, priced to grow.",
    description:
      "I've built SaaS platforms from scratch — authentication, billing, real-time features, the works. Whether it's a mock interview platform or a course generation tool, I architect for multi-tenancy and growth from day one.",
    highlights: [
      "Multi-tenant architecture design",
      "Subscription & payment integration",
      "Real-time data sync & WebSockets",
      "User auth, roles & permissions",
    ],
    gradient: "from-orange-500/20 to-amber-500/20",
    accentColor: "#F59E0B",
  },
  {
    icon: CircleStackIcon,
    title: "Backend & Database Engineering",
    tagline: "The engine room.",
    description:
      "A beautiful frontend means nothing if the backend falls apart under load. I design schemas that don't need rewriting in six months, write queries that don't choke on real data, and build APIs that other developers actually enjoy using.",
    highlights: [
      "MongoDB & MySQL schema design",
      "Query optimization & indexing",
      "API versioning & documentation",
      "Data validation & error handling",
    ],
    gradient: "from-emerald-500/20 to-green-500/20",
    accentColor: "#10B981",
  },
  {
    icon: CloudArrowUpIcon,
    title: "Cloud & DevOps",
    tagline: "Ship it. Reliably.",
    description:
      "Code that lives only on localhost is just a hobby project. I set up deployment pipelines, containerize applications, and manage cloud infrastructure so your product reaches users — and stays up when they arrive.",
    highlights: [
      "Google Cloud Platform deployment",
      "Docker containerization",
      "CI/CD pipeline automation",
      "Performance monitoring & logging",
    ],
    gradient: "from-sky-500/20 to-indigo-500/20",
    accentColor: "#0EA5E9",
  },
  {
    icon: LightBulbIcon,
    title: "Technical Strategy & Mentoring",
    tagline: "Think before you build.",
    description:
      "Sometimes the most valuable engineering work happens before a single line is written. I help teams pick the right stack, design architectures that don't paint them into a corner, and mentor developers who want to level up fast.",
    highlights: [
      "Tech stack selection & architecture",
      "Code reviews & best practices",
      "1-on-1 developer mentoring",
      "Sprint planning & technical scoping",
    ],
    gradient: "from-rose-500/20 to-pink-500/20",
    accentColor: "#F43F5E",
  },
]

const techStack = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiFlask, name: "Flask", color: "#ffffff" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiGooglecloud, name: "GCP", color: "#4285F4" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiGit, name: "Git", color: "#F05032" },
]

const stats = [
  { value: 50, suffix: "+", label: "Projects Shipped" },
  { value: 95, suffix: "%", label: "AI Accuracy" },
  { value: 90, suffix: "%", label: "Efficiency Gains" },
  { value: 3, suffix: "+ yrs", label: "Experience" },
]

export function ServicesSection() {
  return (
    <section id="services" className="min-h-screen px-6 py-6 my-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <span
              className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
              style={{
                color: "var(--theme-accent)",
                backgroundColor: "var(--theme-glass)",
                border: "1px solid var(--theme-panel-border)",
              }}
            >
              What I Do
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
              style={{ color: "var(--theme-foreground)" }}
            >
              Services & Expertise
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto text-pretty leading-relaxed"
              style={{ color: "var(--theme-muted)" }}
            >
              I turn ideas and dreams of people into production-ready software. From AI-powered platforms to scalable SaaS products,
              here's what I bring to the table.
            </p>
          </div>
        </FadeIn>

        {/* Stats Row */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {stats.map((stat, i) => (
              <GlassPanel key={i} className="text-center py-6">
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: "var(--theme-accent)" }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1.5 + i * 0.3} />
                </div>
                <div className="text-sm font-medium" style={{ color: "var(--theme-muted)" }}>
                  {stat.label}
                </div>
              </GlassPanel>
            ))}
          </div>
        </FadeIn>

        {/* Services — alternating layout */}
        <div className="space-y-16 md:space-y-24 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            return (
              <SlideIn key={index} direction={isEven ? "left" : "right"} delay={0.1}>
                <GlassPanel className="overflow-hidden" hover>
                  <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12`}>
                    {/* Left / Right: Icon + tagline hero block */}
                    <div className="lg:w-2/5 flex flex-col items-center justify-center p-8 lg:p-12 rounded-2xl relative overflow-hidden">
                      {/* Gradient backdrop */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`}
                      />
                      <div className="relative z-10 text-center">
                        <motion.div
                          className="inline-flex p-5 rounded-2xl mb-5"
                          style={{
                            backgroundColor: service.accentColor + "22",
                            border: `1px solid ${service.accentColor}44`,
                          }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <Icon className="w-10 h-10" style={{ color: service.accentColor }} />
                        </motion.div>
                        <h3
                          className="text-2xl lg:text-3xl font-bold mb-2"
                          style={{ color: "var(--theme-foreground)" }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="text-base italic font-medium"
                          style={{ color: service.accentColor }}
                        >
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Right / Left: description + highlights */}
                    <div className="lg:w-3/5 flex flex-col justify-center py-4 lg:py-8 px-2">
                      <p
                        className="text-base md:text-lg leading-relaxed mb-8 text-pretty"
                        style={{ color: "var(--theme-muted)" }}
                      >
                        {service.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.highlights.map((item, hi) => (
                          <motion.div
                            key={hi}
                            className="flex items-start gap-3 p-3 rounded-xl transition-colors duration-200"
                            style={{ backgroundColor: "var(--theme-glass)" }}
                            whileHover={{
                              backgroundColor: service.accentColor + "15",
                              x: 4,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <CheckCircleIcon
                              className="w-5 h-5 flex-shrink-0 mt-0.5"
                              style={{ color: service.accentColor }}
                            />
                            <span
                              className="text-sm font-medium"
                              style={{ color: "var(--theme-foreground)" }}
                            >
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </SlideIn>
            )
          })}
        </div>

        {/* Tech Stack Marquee */}
        <FadeIn delay={0.2}>
          <div className="mb-20">
            <h3
              className="text-center text-xl font-semibold mb-8"
              style={{ color: "var(--theme-foreground)" }}
            >
              Tech I Work With Every Day
            </h3>
            <StaggerContainer className="flex flex-wrap justify-center gap-4" stagger={0.04} delay={0.1}>
              {techStack.map((tech, i) => {
                const TechIcon = tech.icon
                return (
                  <StaggerItem key={i}>
                    <motion.div
                      className="flex items-center gap-2.5 px-5 py-3 rounded-xl cursor-default"
                      style={{
                        backgroundColor: "var(--theme-glass)",
                        border: "1px solid var(--theme-panel-border)",
                      }}
                      whileHover={{
                        scale: 1.08,
                        borderColor: tech.color,
                        boxShadow: `0 0 20px ${tech.color}25`,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <TechIcon style={{ color: tech.color }} className="w-5 h-5" />
                      <span className="text-sm font-medium" style={{ color: "var(--theme-foreground)" }}>
                        {tech.name}
                      </span>
                    </motion.div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* CTA */}
        <ScaleIn delay={0.3}>
          <div
            className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
            style={{
              backgroundColor: "var(--theme-glass)",
              border: "1px solid var(--theme-panel-border)",
            }}
          >
            {/* Decorative gradient blobs */}
            <div
              className="absolute -top-20 -left-20 w-60 h-60 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: "var(--theme-accent)" }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: "var(--theme-accent)" }}
            />

            <div className="relative z-10">
              <h3
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "var(--theme-foreground)" }}
              >
                Got a project in mind?
              </h3>
              <p
                className="text-lg max-w-2xl mx-auto mb-8 text-pretty"
                style={{ color: "var(--theme-muted)" }}
              >
                I'm always open to discussing new opportunities, interesting ideas, or just talking tech over coffee.
                Let's build something remarkable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-shadow duration-200"
                  style={{
                    backgroundColor: "var(--theme-accent)",
                    color: "white",
                    boxShadow: "0 4px 20px var(--theme-accent)",
                  }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Let's Talk
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:aryankhatri.forwork@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border-2 transition-colors duration-200"
                  style={{
                    borderColor: "var(--theme-panel-border)",
                    color: "var(--theme-foreground)",
                    backgroundColor: "transparent",
                  }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Drop an Email
                </motion.a>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  )
}
