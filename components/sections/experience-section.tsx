"use client"

import { GlassPanel } from "../glass-panel"
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/24/outline"
import { ExternalLink } from "lucide-react"
import {
  FadeIn,
  SlideIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  motion,
} from "../motion-wrapper"

// Fallback data from Aryan's resume
const experienceData = [
  {
    id: 4,
    company: "Arthimpact Digital Loans",
    role: "Software Engineer",
    startDate: "June 2025",
    endDate: "Present",
    description:
      "Working as a Software Engineer at Arthimpact, focusing on Full Stack Development and AI in Fintech.",
    bullets: [
      <>Engineered and deployed a <strong>Digital Leads Generation</strong> platform that improved user onboarding efficiency by <strong>80%</strong> and accelerated loan processing speed by <strong>70%</strong>, contributing to more than <strong>50%</strong> of lead processing through digital channels.</>,
      <>Engineered AI-assisted <strong>risk and credit assessment workflows</strong> integrated into the company’s lending and underwriting systems for borrower categories including <em>Agri, Small Traders, Homepreneurs, Gig Workers, Nano-scale Manufacturing, and Salaried customers</em>.</>,
      <>Designed a <strong>multi-agent credit intelligence system</strong> with category-specific feature engineering and decisioning workflows, improving customer approval rates by <strong>60%</strong>, portfolio quality by <strong>25%</strong>, and overall LOS customer quality by <strong>75%</strong>.</>,
      <>Planned, developed, and deployed <strong>KITE (KYC & Identity Trust Engine)</strong>, an AI-assisted <em>Virtual KYC, PD, and PV platform</em> with capabilities including <em>OCR, Digital KYC, liveliness detection, sentiment analysis, identity validation, and property verification</em> through India Stack integrations, enabling <strong>100% digital borrower verification</strong>, reducing field verification dependency by <strong>70%</strong>, and accelerating verification turnaround time by <strong>80%</strong>.</>,
      <>Planned and engineered the <strong>FinPro SaaS platform</strong> (<em>LOS, LMS, CRM, Field Force Management</em>) architecture end-to-end for enabling the platform to be offered as a <em>Technology Service Provider (TSP)</em> solution.</>,
      <>Designed and deployed <strong>secure banking-grade authentication and login systems</strong> with focus on <em>scalability, operational reliability, and secure access management</em>.</>,
      <>Revived and engineered <strong>“Khushi”</strong>, a <em>RAG-based AI customer support assistant</em> designed to improve contextual customer query resolution and internal support workflows, achieving a <strong>65% positive customer approval and satisfaction rate</strong> through AI-assisted support interactions.</>,
      <>Managed deployment infrastructure across on-premise and cloud environments using <strong>Jenkins, Docker, Portainer, AWS ECS, Amplify, EC2, CloudFormation, and AWS CodePipeline</strong>.</>,
      <>Identified and resolved <em>critical platform bottlenecks, workflow gaps, deployment issues, and engineering shortfalls</em> through retrospective analysis, earning internal recognition as a <em>solution-oriented engineer</em>.</>,
      <>Participated in technical hiring processes and mentored <strong>20+ interns</strong> across <em>onboarding, debugging, engineering workflows, and product development practices</em>.</>
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
        <FadeIn>
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
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Animated draw */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 origin-top"
            style={{ backgroundColor: "var(--theme-panel-border)" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          />

          {/* Experience Items */}
          <div className="space-y-12 md:space-y-16">
            {experienceData.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline Dot - Scale in */}
                <ScaleIn delay={0.5 + index * 0.2}>
                  <div
                    className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full border-4 -translate-x-1/2 z-10"
                    style={{
                      backgroundColor: "var(--theme-accent)",
                      borderColor: "var(--theme-background)",
                    }}
                  />
                </ScaleIn>

                {/* Experience Card - Slide in from alternating sides */}
                <SlideIn
                  direction={index % 2 === 0 ? "right" : "left"}
                  delay={0.4 + index * 0.15}
                >
                  <div
                    className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:ml-auto md:text-left" : "md:pl-8 md:text-left"
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
                                Certificate<ExternalLink size={12} />
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

                      {/* Bullets - staggered */}
                      <StaggerContainer className="space-y-2" delay={0.6 + index * 0.15} stagger={0.06}>
                        {experience.bullets.map((bullet, bulletIndex) => (
                          <StaggerItem key={bulletIndex}>
                            <li className="flex items-start gap-3 list-none">
                              <div
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: "var(--theme-accent)" }}
                              />
                              <span className="text-sm leading-relaxed" style={{ color: "var(--theme-muted)" }}>
                                {bullet}
                              </span>
                            </li>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </GlassPanel>
                  </div>
                </SlideIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
