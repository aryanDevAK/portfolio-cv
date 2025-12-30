"use client"

import { GlassPanel } from "../glass-panel"
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/24/outline"
import {ExternalLink } from "lucide-react"

// Fallback data from Aryan's resume
const experienceData = [
  {
    id: 4,
    company: "Arth",
    role: "Software Engineer",
    startDate: "June 2025",
    endDate: "Present",
    description:
      "Working as a Software Engineer at Arth, focusing on Full Stack Development and AI in Fintech.",
    bullets: [
      "Engineered and deployed the Digital Leads generation and virtual kyc/pd/pv system, enhancing user onboarding efficiency by 80% and loan processing speed by 70%, impacting more than 50% of leads processing through digital channel.",
    ],
    logoUrl: "https://arthimpact.in/wp-content/uploads/2025/06/512-x-512.png",
    certificate: false,
  },
  {
    id: 1,
    company: "Intel Corporation",
    role: "Summer Trainee",
    startDate: "June 2024",
    endDate: "July 2024",
    description:
      "Trained in foundational concepts of Artificial Intelligence (AI), Machine Learning (ML), and Natural Language Processing (NLP) under the theme 'AI for Future Workforce.'",
    bullets: [
      "Applied training to a real-world project focused on AI in Fintech, utilizing ML and NLP techniques",
      "Completed end-to-end project lifecycle—research, development, and reporting within 2 weeks",
      "Achieved 95% project success rate through effective implementation and analysis",
      "Published a detailed report showcasing project insights, methodology, and outcomes",
    ],
    logoUrl: "https://images.credly.com/images/51b8845c-9404-4d49-be09-8decec250beb/blob.png",
    certificate: true,
  },
  {
    id: 2,
    company: "Infosys",
    role: "SDE Intern",
    startDate: "March 2024",
    endDate: "June 2024",
    description:
      "Trained in detailed concepts of Agile methodology, SCRUM, Software Development, Python, Optical Character Recognition (OCR), and Natural Language Processing (NLP).",
    bullets: [
      "Collaborated in a 25-member Agile team to develop an OCR-driven cheque processing system for banks",
      "Resulted in a 90% improvement in operational efficiency",
      "Presented project outcomes to senior stakeholders, showcasing strong communication and presentation skills",
    ],
    logoUrl: "https://www.infosys.com/content/dam/infosys-web/burger-menu/en/images/logo.svg",
    certificate: true,
  },
  {
    id: 3,
    company: "Chandigarh University",
    role: "Student & Leader",
    startDate: "August 2022",
    endDate: "June 2025",
    description: "Bachelor's in Computer Applications with active participation in technical leadership roles.",
    bullets: [
      "Class Representative (August-December 2022)",
      "Secretary at Power Coders Society (2022-2023)",
      "Lead Coordinator at GDSC – Chandigarh University (2022-2023)",
      "Lead Technical Coordinator at CUFEST-2023",
      "Current CGPA: 8.31",
    ],
    logoUrl: "",
    certificate: false,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen px-6 py-6 my-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BriefcaseIcon className="w-8 h-8" style={{ color: "var(--theme-accent)" }} />
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--theme-foreground)" }}>
              Experience
            </h2>
          </div>
          <p className="text-lg max-w-2xl mx-auto text-pretty" style={{ color: "var(--theme-muted)" }}>
            My professional journey in software development, AI, and technical leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ backgroundColor: "var(--theme-panel-border)" }}
          />

          {/* Experience Items */}
          <div className="space-y-12 md:space-y-16">
            {experienceData.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline Dot - Hidden on mobile */}
                <div
                  className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full border-4 -translate-x-1/2 z-10"
                  style={{
                    backgroundColor: "var(--theme-accent)",
                    borderColor: "var(--theme-background)",
                  }}
                />

                {/* Experience Card */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8 md:ml-auto md:text-left" : "md:pl-8 md:text-left"
                  }`}
                >
                  <GlassPanel className="p-6" hover>
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div
                          className="w-20 h-16 p-1 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: "white" }}
                        >
                          <img
                            src={experience.logoUrl || "/placeholder.svg?height=32&width=32&query=company logo"}
                            alt={`${experience.company} logo`}
                            className="w-16 h-16 rounded"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold" style={{ color: "var(--theme-foreground)" }}>
                            {experience.role}
                          </h3>
                          {experience.certificate && (
                            <span
                              className="flex justify-between w-24 px-2 py-1 text-xs rounded-full"
                              style={{
                                backgroundColor: "var(--theme-accent)",
                                color: "white",
                              }}
                            >
                              Certificate<ExternalLink size={12}/>
                            </span>
                          )}
                        </div>
                        <p className="text-lg font-medium mb-2" style={{ color: "var(--theme-accent)" }}>
                          {experience.company}
                        </p>
                        <div className="flex items-center gap-2 mb-4">
                          <CalendarIcon className="w-4 h-4" style={{ color: "var(--theme-muted)" }} />
                          <span className="text-sm" style={{ color: "var(--theme-muted)" }}>
                            {experience.startDate} - {experience.endDate}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-4 text-pretty"
                      style={{ color: "var(--theme-foreground)" }}
                    >
                      {experience.description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {experience.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: "var(--theme-accent)" }}
                          />
                          <span className="text-sm leading-relaxed" style={{ color: "var(--theme-muted)" }}>
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </GlassPanel>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary
        <div className="mt-20">
          <GlassPanel className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "var(--theme-foreground)" }}>
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3" style={{ color: "var(--theme-accent)" }}>
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "SQL", "Python"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full border"
                      style={{
                        backgroundColor: "var(--theme-glass)",
                        borderColor: "var(--theme-panel-border)",
                        color: "var(--theme-foreground)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3" style={{ color: "var(--theme-accent)" }}>
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React.js", "HTML", "CSS", "Tailwind CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full border"
                      style={{
                        backgroundColor: "var(--theme-glass)",
                        borderColor: "var(--theme-panel-border)",
                        color: "var(--theme-foreground)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3" style={{ color: "var(--theme-accent)" }}>
                  Backend & Database
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "MongoDB", "MySQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full border"
                      style={{
                        backgroundColor: "var(--theme-glass)",
                        borderColor: "var(--theme-panel-border)",
                        color: "var(--theme-foreground)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>
        </div> */}
      </div>
    </section>
  )
}
