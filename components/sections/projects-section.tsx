"use client"

import { useState } from "react"
import { GlassPanel } from "../glass-panel"
import { ExternalLink, Github, Play } from "lucide-react"
import { Button } from "../ui/button"

const projects = [
  {
    id: 1,
    title: "AI Course Pilot",
    description:
      "Full-stack AI-powered course creation platform that generates personalized coding courses based on user interests and skill level using Gemini AI.",
    technologies: ["Next.js", "PostgreSQL", "Gemini AI", "YouTube API"],
    features: [
      "AI-powered course generation",
      "Personalized learning paths",
      "YouTube API integration",
      "Real-time course creation",
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/ai-course-creation-platform-interface.jpg",
    category: "AI/ML",
  },
  {
    id: 2,
    title: "AI Mock Mate",
    description:
      "SaaS platform that simulates mock interviews using Llama AI, providing personalized interview practice with real-time AI evaluation and feedback.",
    technologies: ["Next.js", "PostgreSQL", "Llama AI", "Real-time Processing"],
    features: [
      "AI-powered mock interviews",
      "Real-time feedback system",
      "Communication analysis",
      "78% anxiety reduction rate",
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/ai-interview-practice-platform-dashboard.jpg",
    category: "AI/ML",
  },
  {
    id: 3,
    title: "Veil - Chat Dating App",
    description:
      "Real-time chat-based dating application with AI-powered gender verification and 2-factor authentication using government IDs for enhanced security.",
    technologies: ["MERN Stack", "Machine Learning", "Facial Recognition", "2FA"],
    features: [
      "AI gender verification (95% accuracy)",
      "Real-time chat system",
      "Government ID verification",
      "80% reduction in fake profiles",
    ],
    githubLink: "#",
    image: "/modern-dating-app-chat-interface.jpg",
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Medixify - AI Healthcare",
    description:
      "Full-stack healthcare support platform integrating AI and NLP for emergency response and medical report analysis with 95% accuracy in report summaries.",
    technologies: ["Flask", "Machine Learning", "NLP", "MySQL", "React.js", "Tailwind CSS"],
    features: [
      "AI emergency response agent",
      "Medical report OCR analysis",
      "95% accuracy in translations",
      "40% reduction in review time",
    ],
    githubLink: "#",
    videoLink: "#",
    image: "/healthcare-ai-platform-medical-dashboard.jpg",
    category: "AI/ML",
  },
]

const categories = ["All", "AI/ML", "Full Stack", "SaaS"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="min-h-screen px-6 py-6 my-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: "var(--theme-foreground)" }}>
            Featured Projects
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: "var(--theme-muted)" }}>
            Innovative solutions built with cutting-edge technologies, from AI-powered platforms to full-stack
            applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full px-6 py-2"
              style={
                selectedCategory === category
                  ? {
                      backgroundColor: "var(--theme-accent)",
                      color: "white",
                      borderColor: "var(--theme-accent)",
                    }
                  : {
                      backgroundColor: "transparent",
                      color: "var(--theme-foreground)",
                      borderColor: "var(--theme-panel-border)",
                    }
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <GlassPanel
              key={project.id}
              className="group cursor-pointer hover:scale-[1.02] transition-all duration-300"
              hover
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/30 text-white"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.videoLink && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/30 text-white"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold" style={{ color: "var(--theme-foreground)" }}>
                    {project.title}
                  </h3>
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--theme-accent)",
                      color: "white",
                      opacity: 0.8,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--theme-muted)" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md"
                      style={{
                        backgroundColor: "var(--theme-glass)",
                        color: "var(--theme-foreground)",
                        border: `1px solid var(--theme-panel-border)`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-start p-0 h-auto text-sm hover:opacity-80"
                  onClick={() => setSelectedProject(project)}
                  style={{ color: "var(--theme-accent)" }}
                >
                  View Details →
                </Button>
              </div>
            </GlassPanel>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <GlassPanel className="max-w-4xl w-full max-h-[90vh] overflow-y-auto" size="lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--theme-foreground)" }}>
                    {selectedProject.title}
                  </h3>
                  <span
                    className="text-sm px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--theme-accent)",
                      color: "white",
                      opacity: 0.8,
                    }}
                  >
                    {selectedProject.category}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                  style={{ color: "var(--theme-muted)" }}
                >
                  ✕
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.liveLink && (
                      <Button className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {selectedProject.githubLink && (
                      <Button variant="outline" className="flex-1 bg-transparent">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    )}
                    {selectedProject.videoLink && (
                      <Button variant="outline" className="flex-1 bg-transparent">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Demo
                      </Button>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Description</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm px-3 py-1 rounded-md bg-secondary/50 text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>
        )}
      </div>
    </section>
  )
}
