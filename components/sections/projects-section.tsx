"use client"

import { useState } from "react"
import { GlassPanel } from "../glass-panel"
import {
  ArrowTopRightOnSquareIcon,
  PlayCircleIcon,
  XMarkIcon,
  SparklesIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline"
import { FaGithub } from "react-icons/fa"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  motion,
  AnimatePresence,
} from "../motion-wrapper"

/* ───── Data ───── */
const projects = [
  {
    id: 1,
    title: "AI Course Pilot",
    tagline: "Learn anything. AI builds the course.",
    description:
      "A full-stack platform that generates entire coding courses from a single prompt. Users describe what they want to learn, and Gemini AI creates structured lessons, pulls relevant YouTube tutorials, and builds a personalised curriculum — all in seconds.",
    technologies: ["Next.js", "PostgreSQL", "Gemini AI", "YouTube API"],
    highlights: [
      "AI-generated course structures from natural language",
      "Automatic YouTube tutorial curation",
      "Personalised learning paths by skill level",
      "Real-time course creation with progress tracking",
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/ai-course-creation-platform-interface.jpg",
    category: "AI/ML",
    featured: true,
  },
  {
    id: 2,
    title: "AI Mock Mate",
    tagline: "Practice interviews without the pressure.",
    description:
      "A SaaS platform that puts you through realistic mock interviews powered by Llama AI. It listens, evaluates your answers in real-time, and gives you honest feedback on content, clarity, and confidence. Users report a 78% reduction in interview anxiety.",
    technologies: ["Next.js", "PostgreSQL", "Llama AI", "Real-time Processing"],
    highlights: [
      "Realistic AI-powered mock interviews",
      "Real-time answer evaluation & feedback",
      "Communication style analysis",
      "78% reduction in interview anxiety",
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/ai-interview-practice-platform-dashboard.jpg",
    category: "AI/ML",
  },
  {
    id: 3,
    title: "Veil - Chat Dating App",
    tagline: "Real people only. AI keeps it that way.",
    description:
      "A dating app that takes safety seriously. Machine learning verifies gender through facial recognition, government IDs add a second layer of trust, and real-time chat keeps connections alive. Fake profiles dropped by 80% after launch.",
    technologies: ["MERN Stack", "Machine Learning", "Facial Recognition", "2FA"],
    highlights: [
      "AI gender verification at 95% accuracy",
      "Government ID-based 2-factor auth",
      "End-to-end encrypted real-time chat",
      "80% reduction in fake profiles",
    ],
    githubLink: "#",
    image: "/modern-dating-app-chat-interface.jpg",
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Medixify - AI Healthcare",
    tagline: "Medical reports, understood instantly.",
    description:
      "A healthcare support platform where AI reads your medical reports so you don't have to Google symptoms at 2 AM. NLP extracts key findings with 95% accuracy, an emergency agent triages urgency, and doctors get a clean summary instead of pages of jargon.",
    technologies: ["Flask", "Machine Learning", "NLP", "MySQL", "React.js", "Tailwind CSS"],
    highlights: [
      "AI-powered emergency response triage",
      "OCR + NLP medical report analysis",
      "95% accuracy in report summarisation",
      "40% reduction in doctor review time",
    ],
    githubLink: "#",
    videoLink: "#",
    image: "/healthcare-ai-platform-medical-dashboard.jpg",
    category: "AI/ML",
  },
]

const categories = ["All", "AI/ML", "Full Stack", "SaaS"]

/* ───── Component ───── */
export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  const featured = filteredProjects.find((p) => p.featured)
  const rest = filteredProjects.filter((p) => !p.featured)

  return (
    <section id="projects" className="min-h-screen px-6 py-6 my-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
              style={{
                color: "var(--theme-accent)",
                backgroundColor: "var(--theme-glass)",
                border: "1px solid var(--theme-panel-border)",
              }}
            >
              <SparklesIcon className="w-4 h-4" />
              Portfolio
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-balance"
              style={{ color: "var(--theme-foreground)" }}
            >
              Featured Projects
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto text-pretty leading-relaxed"
              style={{ color: "var(--theme-muted)" }}
            >
              Real products I've built — from AI platforms that generate entire courses
              to healthcare tools that save doctors hours. Every line of code ships.
            </p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer border"
                style={
                  selectedCategory === cat
                    ? {
                      backgroundColor: "var(--theme-accent)",
                      color: "white",
                      borderColor: "var(--theme-accent)",
                    }
                    : {
                      backgroundColor: "var(--theme-glass)",
                      color: "var(--theme-foreground)",
                      borderColor: "var(--theme-panel-border)",
                    }
                }
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Featured Project — Hero Card */}
        <AnimatePresence mode="wait">
          {featured && (
            <motion.div
              key={`featured-${featured.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <GlassPanel className="overflow-hidden group" hover>
                <div className="flex flex-col lg:flex-row gap-0">
                  {/* Image side */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <div className="aspect-[16/10] lg:aspect-auto lg:h-full min-h-[280px]">
                      <img
                        src={featured.image || "/placeholder.svg"}
                        alt={featured.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Featured badge */}
                    <motion.div
                      className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md"
                      style={{ backgroundColor: "var(--theme-accent)", color: "white" }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <CheckBadgeIcon className="w-4 h-4" />
                      FEATURED
                    </motion.div>
                  </div>

                  {/* Content side */}
                  <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                    <div
                      className="text-xs font-bold uppercase tracking-wider mb-3 px-3 py-1 rounded-full inline-block w-fit"
                      style={{
                        color: "var(--theme-accent)",
                        backgroundColor: "var(--theme-glass)",
                        border: "1px solid var(--theme-panel-border)",
                      }}
                    >
                      {featured.category}
                    </div>
                    <h3
                      className="text-2xl lg:text-3xl font-bold mb-2"
                      style={{ color: "var(--theme-foreground)" }}
                    >
                      {featured.title}
                    </h3>
                    <p
                      className="text-sm font-medium italic mb-4"
                      style={{ color: "var(--theme-accent)" }}
                    >
                      {featured.tagline}
                    </p>
                    <p
                      className="text-sm leading-relaxed mb-6 text-pretty"
                      style={{ color: "var(--theme-muted)" }}
                    >
                      {featured.description}
                    </p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featured.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1.5 rounded-lg font-medium"
                          style={{
                            backgroundColor: "var(--theme-glass)",
                            color: "var(--theme-foreground)",
                            border: "1px solid var(--theme-panel-border)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      {featured.liveLink && (
                        <motion.a
                          href={featured.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
                          style={{ backgroundColor: "var(--theme-accent)", color: "white" }}
                          whileHover={{ scale: 1.04, y: -2 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                          Live Demo
                        </motion.a>
                      )}
                      {featured.githubLink && (
                        <motion.a
                          href={featured.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border"
                          style={{
                            borderColor: "var(--theme-panel-border)",
                            color: "var(--theme-foreground)",
                            backgroundColor: "var(--theme-glass)",
                          }}
                          whileHover={{ scale: 1.04, y: -2 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <FaGithub className="w-4 h-4" />
                          Source Code
                        </motion.a>
                      )}
                      <motion.button
                        onClick={() => setSelectedProject(featured)}
                        className="inline-flex items-center gap-1 px-4 py-2.5 text-sm font-semibold cursor-pointer"
                        style={{ color: "var(--theme-accent)" }}
                        whileHover={{ x: 4 }}
                      >
                        View Details →
                      </motion.button>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Remaining Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {rest.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <GlassPanel className="group cursor-pointer h-full flex flex-col overflow-hidden" hover>
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl mb-5 -mx-1 -mt-1">
                      <div className="aspect-[16/10]">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      {/* Hover overlay with links */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                        <div className="flex gap-2">
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md bg-white/20 text-white hover:bg-white/30 transition-colors"
                            >
                              <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                              Demo
                            </a>
                          )}
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md bg-white/20 text-white hover:bg-white/30 transition-colors"
                            >
                              <FaGithub className="w-3.5 h-3.5" />
                              Code
                            </a>
                          )}
                          {project.videoLink && (
                            <a
                              href={project.videoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md bg-white/20 text-white hover:bg-white/30 transition-colors"
                            >
                              <PlayCircleIcon className="w-3.5 h-3.5" />
                              Video
                            </a>
                          )}
                        </div>
                      </div>
                      {/* Category badge */}
                      <div
                        className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-md"
                        style={{ backgroundColor: "var(--theme-accent)", color: "white" }}
                      >
                        {project.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3
                        className="text-lg font-bold mb-1"
                        style={{ color: "var(--theme-foreground)" }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-xs font-medium italic mb-3"
                        style={{ color: "var(--theme-accent)" }}
                      >
                        {project.tagline}
                      </p>
                      <p
                        className="text-sm leading-relaxed mb-1 line-clamp-2"
                        style={{ color: "var(--theme-muted)" }}
                      >
                        {project.description}
                      </p>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-medium mb-4 cursor-pointer w-fit"
                        style={{ color: "var(--theme-accent)" }}
                      >
                        ...Read more
                      </button>

                      {/* Tech pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-md font-medium"
                            style={{
                              backgroundColor: "var(--theme-glass)",
                              color: "var(--theme-foreground)",
                              border: "1px solid var(--theme-panel-border)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span
                            className="text-xs px-2 py-1 rounded-md font-medium"
                            style={{ color: "var(--theme-muted)" }}
                          >
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* View details */}
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="text-sm font-semibold flex items-center gap-1 cursor-pointer w-fit"
                        style={{ color: "var(--theme-accent)" }}
                        whileHover={{ x: 6 }}
                        transition={{ duration: 0.2 }}
                      >
                        View Details
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </motion.button>
                    </div>
                  </GlassPanel>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Project Detail Modal ── */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl"
              >
                <GlassPanel className="max-h-[85vh] overflow-y-auto blog-scroll" size="lg">
                  {/* Close button */}
                  <div className="flex justify-end mb-2">
                    <motion.button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-xl cursor-pointer transition-colors"
                      style={{ color: "var(--theme-muted)" }}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <XMarkIcon className="w-6 h-6" />
                    </motion.button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Image + Actions */}
                    <div>
                      <div className="relative rounded-2xl overflow-hidden mb-6">
                        <img
                          src={selectedProject.image || "/placeholder.svg"}
                          alt={selectedProject.title}
                          className="w-full aspect-[16/10] object-cover"
                        />
                        <div
                          className="absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-md"
                          style={{ backgroundColor: "var(--theme-accent)", color: "white" }}
                        >
                          {selectedProject.category}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.liveLink && (
                          <motion.a
                            href={selectedProject.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
                            style={{ backgroundColor: "var(--theme-accent)", color: "white" }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                        )}
                        {selectedProject.githubLink && (
                          <motion.a
                            href={selectedProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border"
                            style={{
                              borderColor: "var(--theme-panel-border)",
                              color: "var(--theme-foreground)",
                              backgroundColor: "var(--theme-glass)",
                            }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <FaGithub className="w-4 h-4" />
                            Source Code
                          </motion.a>
                        )}
                        {selectedProject.videoLink && (
                          <motion.a
                            href={selectedProject.videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border"
                            style={{
                              borderColor: "var(--theme-panel-border)",
                              color: "var(--theme-foreground)",
                              backgroundColor: "var(--theme-glass)",
                            }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <PlayCircleIcon className="w-4 h-4" />
                            Watch Demo
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div className="space-y-6">
                      <div>
                        <h3
                          className="text-2xl font-bold mb-1"
                          style={{ color: "var(--theme-foreground)" }}
                        >
                          {selectedProject.title}
                        </h3>
                        <p className="text-sm font-medium italic" style={{ color: "var(--theme-accent)" }}>
                          {selectedProject.tagline}
                        </p>
                      </div>

                      <div>
                        <h4
                          className="text-sm font-bold uppercase tracking-wider mb-3"
                          style={{ color: "var(--theme-foreground)" }}
                        >
                          About
                        </h4>
                        <p
                          className="text-sm leading-relaxed text-pretty"
                          style={{ color: "var(--theme-muted)" }}
                        >
                          {selectedProject.description}
                        </p>
                      </div>

                      <div>
                        <h4
                          className="text-sm font-bold uppercase tracking-wider mb-3"
                          style={{ color: "var(--theme-foreground)" }}
                        >
                          Key Highlights
                        </h4>
                        <div className="space-y-2.5">
                          {selectedProject.highlights.map((item, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <CheckBadgeIcon
                                className="w-5 h-5 flex-shrink-0 mt-0.5"
                                style={{ color: "var(--theme-accent)" }}
                              />
                              <span className="text-sm" style={{ color: "var(--theme-muted)" }}>
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4
                          className="text-sm font-bold uppercase tracking-wider mb-3"
                          style={{ color: "var(--theme-foreground)" }}
                        >
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-sm px-3 py-1.5 rounded-lg font-medium"
                              style={{
                                backgroundColor: "var(--theme-glass)",
                                color: "var(--theme-foreground)",
                                border: "1px solid var(--theme-panel-border)",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
