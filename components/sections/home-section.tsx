"use client"

import { useEffect } from "react"
import { GlassPanel } from "../glass-panel"
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  AcademicCapIcon,
  TrophyIcon,
  ArrowTopRightOnSquareIcon,
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
  SiAmazonaws,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
} from "react-icons/si";
import { FaPython, FaDatabase } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  StaggerScaleItem,
} from "../motion-wrapper"

// Fallback data from Aryan's resume
const homeData = {
  name: "Aryan Khatri",
  headline: "Software Engineer || Problem Solver",
  intro:
    (<>I am a Software Engineer ready to bring your dream products to the reality of mordern virtual world. Experienced in engineering sleek <i>Websites</i>, <i>Mobile Applications</i>, <i>ERP systems</i>, <i>CRM systems</i> and <i>Artificial intelligence systems</i> for MSME's of India. <br /><br />Experienced in maximizing application efficiency, driving performance enhancements and system throughput using advanced <i>DSA patterns</i>, <i>algorithmic optimization</i> and <i>System Design techniques</i>. <br /><br />I hold expertise in <strong>Data Science and Machine Learning</strong>, <strong>Backend Development</strong>, <strong>Frontend Development</strong> and Databases like <strong>SQL &amp; NoSQL</strong>.</>),
  contact: {
    email: "aryankhatri.forwork@gmail.com",
    // phone: "+91 78277-39709",
    location: "Delhi-NCR, India",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/aryankhatriak/",
    github: "https://github.com/aryankhatri",
    resume: "https://drive.google.com/file/d/1JtdCBzVWxY9wY4uNhGuYfFJoYd0ZJPSq/view",
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
    { name: "AWS", icon: SiAmazonaws },
    { name: "CI/CD", icon: null },
    { name: "Agile", icon: null },
    { name: "OLama", icon: null },
    { name: "Langchain", icon: null },
    { name: "Git/Github", icon: FaGithub },
  ],
}

export function HomeSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 my-20">
      <div className="max-w-6xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <FadeIn delay={0}>
              <h1
                className="text-5xl md:text-6xl font-bold mb-4 text-balance"
                style={{ color: "var(--theme-foreground)" }}
              >
                {homeData.name}
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl mb-6" style={{ color: "var(--theme-accent)" }}>
                {homeData.headline}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p
                className="text-lg leading-relaxed max-w-3xl mx-auto text-pretty text-justify"
                style={{ color: "var(--theme-muted)" }}
              >
                {homeData.intro}
              </p>
            </FadeIn>
          </div>

          {/* Contact Info */}
          <ScaleIn delay={0.3}>
            <GlassPanel className="p-6 mb-12 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-center gap-2">
                  <EnvelopeIcon className="w-5 h-5" style={{ color: "var(--theme-accent)" }} />
                  <a
                    href={`mailto:${homeData.contact.email}`}
                    className="text-sm hover:underline"
                    style={{ color: "var(--theme-foreground)" }}
                  >
                    {homeData.contact.email}
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPinIcon className="w-5 h-5" style={{ color: "var(--theme-accent)" }} />
                  <span className="text-sm" style={{ color: "var(--theme-foreground)" }}>
                    {homeData.contact.location}
                  </span>
                </div>
              </div>
            </GlassPanel>
          </ScaleIn>

          {/* CTA Buttons */}
          <StaggerContainer className="flex flex-wrap justify-center gap-4 mb-16" delay={0.4} stagger={0.06}>
            <StaggerItem>
              <a
                href={homeData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: "var(--theme-accent)",
                  color: "white",
                }}
              >
                GitHub
                <FaGithub />
              </a>
            </StaggerItem>
            <StaggerItem>
              <a
                href={homeData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 border"
                style={{
                  backgroundColor: "var(--theme-glass)",
                  borderColor: "var(--theme-panel-border)",
                  color: "var(--theme-foreground)",
                }}
              >
                LinkedIn
                <FaLinkedin style={{ color: "var(--theme-accent)" }} />
              </a>
            </StaggerItem>
            <StaggerItem>
              <a
                href={homeData.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 border"
                style={{
                  backgroundColor: "var(--theme-glass)",
                  borderColor: "var(--theme-panel-border)",
                  color: "var(--theme-foreground)",
                }}
              >
                Resume
                <FileText size={16} style={{ color: "var(--theme-accent)" }} />
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Skills Summary */}
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
                        <span
                          className="px-3 py-1 text-sm rounded-full border flex items-center gap-2 hover:scale-110 transition-transform duration-200"
                          style={{
                            backgroundColor: "var(--theme-glass)",
                            borderColor: "var(--theme-panel-border)",
                            color: "var(--theme-foreground)",
                          }}
                        >
                          {skill.icon && <skill.icon style={{ color: "var(--theme-accent)" }} />}
                          {skill.name}
                        </span>
                      </StaggerScaleItem>
                    ))}
                  </StaggerContainer>
                </div>
              ))}
            </div>
          </GlassPanel>
        </FadeIn>

        {/* Certifications and Awards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          {/* Certifications */}
          <FadeIn delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <AcademicCapIcon className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />
                <h2 className="text-2xl font-bold" style={{ color: "var(--theme-foreground)" }}>
                  Certifications
                </h2>
              </div>
              <StaggerContainer className="space-y-4" stagger={0.08}>
                {certifications.map((cert) => (
                  <StaggerItem key={cert.id}>
                    <GlassPanel className="p-4" hover>
                      <div className="flex items-center gap-4">
                        {cert.badgeId && (
                          <div className="h-full">
                            <img src={cert.badgeId} alt={`${cert.title} Badge`} className="w-16 h-16" />
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
                            {cert.issuer} || <a
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
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Honors & Awards */}
          <FadeIn delay={0.35}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <TrophyIcon className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />
                <h2 className="text-2xl font-bold" style={{ color: "var(--theme-foreground)" }}>
                  Honors & Awards
                </h2>
              </div>
              <StaggerContainer className="space-y-4" stagger={0.08} delay={0.15}>
                {honorsAwards.map((award) => (
                  <StaggerItem key={award.id}>
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
