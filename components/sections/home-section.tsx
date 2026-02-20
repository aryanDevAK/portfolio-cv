"use client"

import { useEffect, useState } from "react"
import { GlassPanel } from "../glass-panel"
import {
  EnvelopeIcon,
  MapPinIcon,
  AcademicCapIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FileText, ExternalLink } from "lucide-react"
import {
  SiJavascript,
  SiTypescript,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiStreamlit,
  SiTailwindcss,
  SiDocker,
  SiLinux,
  SiAmazon,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
} from "react-icons/si"
import { FaPython, FaDatabase } from "react-icons/fa6"
import { RiNextjsFill } from "react-icons/ri"
import {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  StaggerScaleItem,
  motion,
  AnimatePresence,
} from "../motion-wrapper"

/* ───────────────── Typewriter Effect ───────────────── */
function Typewriter({ words, className, style }: { words: string[]; className?: string; style?: React.CSSProperties }) {
  const [wordIdx, setWordIdx] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const speed = isDeleting ? 40 : 80

    if (!isDeleting && text === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(pause)
    }

    if (isDeleting && text === "") {
      setIsDeleting(false)
      setWordIdx((prev) => (prev + 1) % words.length)
      return
    }

    const timer = setTimeout(() => {
      setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
    }, speed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIdx, words])

  return (
    <span className={className} style={style}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ color: "var(--theme-accent)" }}
      >
        |
      </motion.span>
    </span>
  )
}

/* ───────────────── Floating Particles ───────────────── */
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 5,
    dur: 8 + Math.random() * 12,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: "var(--theme-accent)",
            opacity: 0.2,
          }}
          animate={{
            y: [0, -30, 10, -15, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [0.15, 0.35, 0.1, 0.3, 0.15],
            scale: [1, 1.5, 0.8, 1.2, 1],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

/* ───────────────── Orbit Ring ───────────────── */
function OrbitRing({ radius, duration, delay, dotSize = 6 }: { radius: number; duration: number; delay: number; dotSize?: number }) {
  return (
    <div className="absolute" style={{ width: radius * 2, height: radius * 2, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
      {/* the ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: "1px solid var(--theme-panel-border)", opacity: 0.4 }}
      />
      {/* orbiting dot */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: dotSize,
          height: dotSize,
          backgroundColor: "var(--theme-accent)",
          top: -dotSize / 2,
          left: "50%",
          marginLeft: -dotSize / 2,
          boxShadow: "0 0 10px var(--theme-accent)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
      // rotate around center
      // We position the dot at the top of the ring and rotate the parent
      />
    </div>
  )
}

/* ───────────────── Data ───────────────── */
const homeData = {
  name: "Aryan Khatri",
  headline: "Software Engineer || Problem Solver",
  roles: [
    "Full-Stack Developer",
    "AI/ML Engineer",
    "System Designer",
    "Problem Solver",
    "SaaS Builder",
  ],
  intro: (
    <>
      I am a Software Engineer ready to bring your dream products to the reality of the modern virtual world. Experienced in engineering sleek <i>Websites</i>, <i>Mobile Applications</i>, <i>ERP systems</i>, <i>CRM systems</i> and <i>Artificial Intelligence systems</i> for MSMEs of India.
      <br /><br />
      Experienced in maximizing application efficiency, driving performance enhancements and system throughput using advanced <i>DSA patterns</i>, <i>algorithmic optimization</i> and <i>System Design techniques</i>.
      <br /><br />
      I hold expertise in <strong>Data Science and Machine Learning</strong>, <strong>Backend Development</strong>, <strong>Frontend Development</strong> and Databases like <strong>SQL &amp; NoSQL</strong>.
    </>
  ),
  contact: {
    email: "aryankhatri.forwork@gmail.com",
    location: "Delhi-NCR, India",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/aryankhatriak/",
    github: "https://github.com/aryankhatri",
    resume: "https://drive.google.com/file/d/1u35yVm5ZQ_5Hanshrywi3y5JP2HqnugT/view?usp=sharing",
    skillBadges: "https://www.credly.com/users/aryan-khatri.3912b0f6",
  },
}

const certifications = [
  {
    id: 1,
    title: "Microsoft Python Programming",
    issuer: "Microsoft",
    date: "Apr, 2025",
    credentialUrl: "#",
    description: "Python Programming Fundamentals, Data Analysis and Visualization with Python, Automation and Scripting with Python, Web Development with Python, Advanced Python Development Techniques, Project Development in Python",
    badgeId: "https://images.credly.com/images/35e44501-6af1-49f9-ac16-2e5a99334905/blob.png",
    certificatelUrl: "https://coursera.org/share/87b983b7897391e499965a1e17162791"
  },
  {
    id: 6,
    title: "Meta Full Stack Software Engineer",
    issuer: "Meta",
    date: "Feb, 2024",
    credentialUrl: "#",
    description: "React Native, Kotlin",
    badgeId: "https://images.credly.com/size/680x680/images/997d4586-e7b2-4174-9c76-5c7304953e2c/image.png",
    certificatelUrl: "https://coursera.org/share/bd408fd4095bb932e3009e82706dce5c"
  },
  {
    id: 2,
    title: "IBM Full Stack Software Developer",
    issuer: "IBM",
    date: "Aug, 2024",
    credentialUrl: "#",
    description: " Software Engineering, Cloud Computing, HTML, CSS, & JavaScript, Git and GitHub, React, Node.js and Express, Python for Data Science, AI & Development, Flask, Django Application Development with SQL and Databases, Containers w/ Docker, Kubernetes & OpenShift, Microservices and Serverless",
    badgeId: "https://images.credly.com/images/854d76bf-4f74-4d51-98a0-d969214bfba7/IBM%2BLogo%2Bfor%2BAcclaim%2BProfile.png",
    certificatelUrl: "https://coursera.org/share/d681d7def943d41608f51cc89f95150c"
  },
  {
    id: 3,
    title: "Meta Frontend Developer",
    issuer: "Meta",
    date: "Jan, 2024",
    credentialUrl: "#",
    description: " Front-End Development, Principles of UX/UI Design",
    badgeId: "https://images.credly.com/images/e91ed0b0-842b-417f-8d2f-b07535febdda/image.png",
    certificatelUrl: "https://coursera.org/share/bd408fd4095bb932e3009e82706dce5c"
  },
  {
    id: 4,
    title: "IBM AI Developer",
    issuer: "IBM",
    date: "Aug, 2024",
    credentialUrl: "#",
    description: "Artificial Intelligence (AI), Python for Data Science, AI & Development, Machine Learning, Strealit",
    badgeId: "https://images.credly.com/images/854d76bf-4f74-4d51-98a0-d969214bfba7/IBM%2BLogo%2Bfor%2BAcclaim%2BProfile.png",
    certificatelUrl: " https://coursera.org/share/89371d4e798e37df0cdd1a460724bee2"
  },
  {
    id: 5,
    title: "Meta Android Developer",
    issuer: "Meta",
    date: "Feb, 2024",
    credentialUrl: "#",
    description: "React Native, Kotlin",
    badgeId: "https://images.credly.com/images/c1cf3f71-31a4-4a10-a88f-f2ab02593d6c/image.png",
    certificatelUrl: " https://coursera.org/share/5e64866f7ffec50be9cfed04dadf0eb9"
  },
]

const honorsAwards = [
  {
    id: 1,
    title: "Finalist at Smart India Hackathon (SIH) 2023",
    issuer: "Government of India",
    date: "2023",
    description: "National level hackathon finalist",
  },
  {
    id: 2,
    title: "Won Tekathon 2.0",
    issuer: "Chandigarh University",
    date: "2023",
    description: "First place in university-level technical competition",
  },
  {
    id: 3,
    title: "Lead Technical Coordinator at CUFEST-2023",
    issuer: "Chandigarh University",
    date: "2023",
    description: "Led technical coordination for university fest",
  },
  {
    id: 4,
    title: "Lead Coordinator at GDSC",
    issuer: "Google Developer Student Clubs",
    date: "2022",
    description: "Led Google Developer Student Club at Chandigarh University",
  },
  {
    id: 5,
    title: "Lead at Power Coders Society",
    issuer: "Power Coders Society, Chandigarh University",
    date: "2022",
    description: "Founded and Led Coding Society at Chandigarh University",
  },
  {
    id: 6,
    title: "Won 3rd Prize at Engineer's Day",
    issuer: "Chandigarh University",
    date: "2022",
    description: "Hackathon at Engineer's Day event",
  },
]

const skills = {
  languages: [
    { name: "Python", icon: FaPython },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "SQL", icon: FaDatabase },
  ],
  frontend: [
    { name: "Next.js", icon: RiNextjsFill },
    { name: "React.js", icon: SiReact },
    { name: "React Native", icon: SiReact },
    { name: "Streamlit", icon: SiStreamlit },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],
  backend: [
    { name: "Django", icon: SiDjango },
    { name: "Flask", icon: SiFlask },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
  ],
  tools: [
    { name: "Docker", icon: SiDocker },
    { name: "Containers", icon: null },
    { name: "Linux", icon: SiLinux },
    { name: "AWS", icon: SiAmazon },
    { name: "CI/CD", icon: null },
    { name: "Agile", icon: null },
    { name: "OLama", icon: null },
    { name: "Langchain", icon: null },
    { name: "Git/Github", icon: FaGithub },
  ],
}

/* ───────────────── Component ───────────────── */
export function HomeSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 my-20 relative">
      <FloatingParticles />

      <div className="max-w-6xl w-full relative z-10">
        {/* ── Hero Section ── */}
        <div className="text-center mb-16 relative">
          {/* Orbiting rings decoration behind name */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: "-40px" }}>
            <div className="relative" style={{ width: 300, height: 300 }}>
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: "1px dashed var(--theme-panel-border)", opacity: 0.3 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute rounded-full"
                style={{
                  inset: 40,
                  border: "1px dashed var(--theme-panel-border)",
                  opacity: 0.2,
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          <div className="mb-8 relative">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-6 px-5 py-2 rounded-full"
                style={{
                  color: "var(--theme-accent)",
                  backgroundColor: "var(--theme-glass)",
                  border: "1px solid var(--theme-panel-border)",
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  👋
                </motion.span>
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Name with letter-by-letter reveal */}
            <div className="overflow-hidden mt-6">
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-balance tracking-tight"
                style={{ color: "var(--theme-foreground)" }}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {homeData.name.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.04 }}
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Typewriter headline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <p className="text-xl md:text-2xl lg:text-3xl mb-6 font-medium">
                <span style={{ color: "var(--theme-muted)" }}>I'm a </span>
                <Typewriter
                  words={homeData.roles}
                  style={{ color: "var(--theme-accent)", fontWeight: 700 }}
                />
              </p>
            </motion.div>

            {/* Intro text with staggered paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p
                className="text-lg leading-relaxed max-w-3xl mx-auto text-pretty text-justify"
                style={{ color: "var(--theme-muted)" }}
              >
                {homeData.intro}
              </p>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <GlassPanel className="p-6 mb-12 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  className="flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <EnvelopeIcon className="w-5 h-5" style={{ color: "var(--theme-accent)" }} />
                  <a
                    href={`mailto:${homeData.contact.email}`}
                    className="text-sm hover:underline"
                    style={{ color: "var(--theme-foreground)" }}
                  >
                    {homeData.contact.email}
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPinIcon className="w-5 h-5" style={{ color: "var(--theme-accent)" }} />
                  <span className="text-sm" style={{ color: "var(--theme-foreground)" }}>
                    {homeData.contact.location}
                  </span>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* CTA Buttons with glow effects */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <motion.a
              href={homeData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base"
              style={{ backgroundColor: "var(--theme-accent)", color: "white" }}
              whileHover={{
                scale: 1.08,
                y: -3,
                boxShadow: "0 8px 30px color-mix(in srgb, var(--theme-accent) 40%, transparent)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </motion.a>
            <motion.a
              href={homeData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base border"
              style={{
                backgroundColor: "var(--theme-glass)",
                borderColor: "var(--theme-panel-border)",
                color: "var(--theme-foreground)",
              }}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FaLinkedin className="w-5 h-5" style={{ color: "#0A66C2" }} />
              LinkedIn
            </motion.a>
            <motion.a
              href={homeData.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base border"
              style={{
                backgroundColor: "var(--theme-glass)",
                borderColor: "var(--theme-panel-border)",
                color: "var(--theme-foreground)",
              }}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FileText size={18} style={{ color: "var(--theme-accent)" }} />
              Resume
            </motion.a>
          </motion.div>
        </div>

        {/* ── Skills Summary ── */}
        <FadeIn delay={0.5} className="mt-20">
          <GlassPanel className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "var(--theme-foreground)" }}>
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {(
                [
                  { title: "Programming Languages", items: skills.languages },
                  { title: "Frontend", items: skills.frontend },
                  { title: "Backend & Database", items: skills.backend },
                  { title: "Tools & Platforms", items: skills.tools },
                ] as const
              ).map((group, groupIdx) => (
                <div key={group.title}>
                  <h4 className="font-semibold mb-3" style={{ color: "var(--theme-accent)" }}>
                    {group.title}
                  </h4>
                  <StaggerContainer className="flex flex-wrap gap-2" delay={0.6 + groupIdx * 0.1} stagger={0.04}>
                    {group.items.map((skill) => (
                      <StaggerScaleItem key={skill.name}>
                        <motion.span
                          className="px-3 py-1 text-sm rounded-full border flex items-center gap-2"
                          style={{
                            backgroundColor: "var(--theme-glass)",
                            borderColor: "var(--theme-panel-border)",
                            color: "var(--theme-foreground)",
                          }}
                          whileHover={{
                            scale: 1.15,
                            y: -3,
                            boxShadow: "0 4px 15px color-mix(in srgb, var(--theme-accent) 20%, transparent)",
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill.icon && <skill.icon style={{ color: "var(--theme-accent)" }} />}
                          {skill.name}
                        </motion.span>
                      </StaggerScaleItem>
                    ))}
                  </StaggerContainer>
                </div>
              ))}
            </div>
          </GlassPanel>
        </FadeIn>

        {/* ── Certifications and Awards Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          {/* Certifications */}
          <FadeIn delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <AcademicCapIcon className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />
                </motion.div>
                <h2 className="text-2xl font-bold" style={{ color: "var(--theme-foreground)" }}>
                  Certifications
                </h2>
              </div>
              <StaggerContainer className="space-y-4" stagger={0.08}>
                {certifications.map((cert) => (
                  <StaggerItem key={cert.id}>
                    <motion.div whileHover={{ x: 6, scale: 1.01 }} transition={{ duration: 0.2 }}>
                      <GlassPanel className="p-4" hover>
                        <div className="flex items-center gap-4">
                          {cert.badgeId && (
                            <div className="h-full">
                              <motion.img
                                src={cert.badgeId}
                                alt={`${cert.title} Badge`}
                                className="w-16 h-16"
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-semibold text-sm" style={{ color: "var(--theme-foreground)" }}>
                                {cert.title}
                              </h3>
                              <span className="text-xs" style={{ color: "var(--theme-muted)" }}>
                                {cert.date}
                              </span>
                            </div>
                            <p className="text-sm mb-2" style={{ color: "var(--theme-accent)" }}>
                              {cert.issuer} ||{" "}
                              <a
                                href={cert.certificatelUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline text-xs"
                              >
                                View Certificate <ExternalLink size={12} style={{ display: "inline-block", marginBottom: "2px" }} />
                              </a>
                            </p>
                            <p className="text-xs text-justify" style={{ color: "var(--theme-muted)" }}>
                              {cert.description}
                            </p>
                          </div>
                        </div>
                      </GlassPanel>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Honors & Awards */}
          <FadeIn delay={0.35}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 15, -10, 5, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <TrophyIcon className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />
                </motion.div>
                <h2 className="text-2xl font-bold" style={{ color: "var(--theme-foreground)" }}>
                  Honors & Awards
                </h2>
              </div>
              <StaggerContainer className="space-y-4" stagger={0.08} delay={0.15}>
                {honorsAwards.map((award) => (
                  <StaggerItem key={award.id}>
                    <motion.div whileHover={{ x: 6, scale: 1.01 }} transition={{ duration: 0.2 }}>
                      <GlassPanel className="p-4" hover>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-sm" style={{ color: "var(--theme-foreground)" }}>
                            {award.title}
                          </h3>
                          <span className="text-xs" style={{ color: "var(--theme-muted)" }}>
                            {award.date}
                          </span>
                        </div>
                        <p className="text-sm mb-2" style={{ color: "var(--theme-accent)" }}>
                          {award.issuer}
                        </p>
                        <p className="text-xs" style={{ color: "var(--theme-muted)" }}>
                          {award.description}
                        </p>
                      </GlassPanel>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
