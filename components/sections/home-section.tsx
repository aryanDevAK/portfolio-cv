"use client"

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
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

// Fallback data from Aryan's resume
const homeData = {
  name: "Aryan Khatri",
  headline: "Software Engineer || Problem Solver",
  intro:
    (<>I am a Software Engineer ready to bring your dream products to the reality of mordern virtual world. Experienced in engineering sleek Websites, Mobile Applications, ERP systems, CRM systems and Artificial intelligence systems for MSME's of India. <br/><br/>Experienced in maximizing application efficiency,driving performance enhancements and system throughput using advanced DSA patterns, algorithmic optimization and System Design techniques. <br/><br/>I hold expertise in <strong>Data Science and Machine Learning</strong>, <strong>Backend Development</strong>, <strong>Frontend Development</strong> tools like SQL and NoSQL databases,</>),
  contact: {
    email: "aryankhatri.forwork@gmail.com",
    // phone: "+91 78277-39709",
    location: "Delhi, India",
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
    title: "IBM Full Stack Software Developer",
    issuer: "IBM",
    date: "2024",
    credentialUrl: "#",
    description: "Comprehensive full-stack development certification",
  },
  {
    id: 2,
    title: "Meta Frontend Developer",
    issuer: "Meta",
    date: "2024",
    credentialUrl: "#",
    description: "Advanced frontend development with React",
  },
  {
    id: 3,
    title: "Microsoft Python Programming",
    issuer: "Microsoft",
    date: "2024",
    credentialUrl: "#",
    description: "Python programming fundamentals and advanced concepts",
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
    date: "2022-2023",
    description: "Led Google Developer Student Club at Chandigarh University",
  },
]

export function HomeSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 my-20">
      <div className="max-w-6xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1
              className="text-5xl md:text-6xl font-bold mb-4 text-balance"
              style={{ color: "var(--theme-foreground)" }}
            >
              {homeData.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6" style={{ color: "var(--theme-accent)" }}>
              {homeData.headline}
            </p>
            <p
              className="text-lg leading-relaxed max-w-3xl mx-auto text-pretty text-justify"
              style={{ color: "var(--theme-muted)" }}
            >
              {homeData.intro}
            </p>
          </div>

          {/* Contact Info */}
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
              {/* <div className="flex items-center justify-center gap-2">
                <PhoneIcon className="w-5 h-5" style={{ color: "var(--theme-accent)" }} />
                <a
                  href={`tel:${homeData.contact.phone}`}
                  className="text-sm hover:underline"
                  style={{ color: "var(--theme-foreground)" }}
                >
                  {homeData.contact.phone}
                </a>
              </div> */}
              <div className="flex items-center justify-center gap-2">
                <MapPinIcon className="w-5 h-5" style={{ color: "var(--theme-accent)" }} />
                <span className="text-sm" style={{ color: "var(--theme-foreground)" }}>
                  {homeData.contact.location}
                </span>
              </div>
            </div>
          </GlassPanel>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
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
              {/* <ArrowTopRightOnSquareIcon className="w-4 h-4" /> */}
              <FaGithub/>
            </a>
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
              {/* <ArrowTopRightOnSquareIcon className="w-4 h-4" /> */}
              <FaLinkedin/>
            </a>
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
              {/* <ArrowTopRightOnSquareIcon className="w-4 h-4" /> */}
              <FileText size={16}/>
            </a>
            <a
              href={homeData.links.skillBadges}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 border"
              style={{
                backgroundColor: "var(--theme-glass)",
                borderColor: "var(--theme-panel-border)",
                color: "var(--theme-foreground)",
              }}
            >
              Skill Badges
              {/* <ArrowTopRightOnSquareIcon className="w-4 h-4" /> */}
              <ExternalLink size={16}/>
            </a>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20">
          <GlassPanel className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "var(--theme-foreground)" }}>
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3" style={{ color: "var(--theme-accent)" }}>
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "TypeScript", "JavaScript", "SQL", "SQL"].map((skill) => (
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
                  {["Next.js", "React.js", "React Native", "Streamlit", "HTML", "CSS", "JS", "Tailwind CSS"].map((skill) => (
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
                  {["Django", "Flask", "FastAPI", "Node.js", "PostgreSQL","MongoDB", "MySQL"].map((skill) => (
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
                  Tools & Platforms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Containers", "Linux", "AWS", "CI/CD", "Agile", "OLama", "Langchain", "Git/Github"].map((skill) => (
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
        </div>
        
        {/* Certifications and Awards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <AcademicCapIcon className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />
              <h2 className="text-2xl font-bold" style={{ color: "var(--theme-foreground)" }}>
                Certifications
              </h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <GlassPanel key={cert.id} className="p-4" hover>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-sm" style={{ color: "var(--theme-foreground)" }}>
                      {cert.title}
                    </h3>
                    <span className="text-xs" style={{ color: "var(--theme-muted)" }}>
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-sm mb-2" style={{ color: "var(--theme-accent)" }}>
                    {cert.issuer}
                  </p>
                  <p className="text-xs" style={{ color: "var(--theme-muted)" }}>
                    {cert.description}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </div>

          {/* Honors & Awards */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <TrophyIcon className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />
              <h2 className="text-2xl font-bold" style={{ color: "var(--theme-foreground)" }}>
                Honors & Awards
              </h2>
            </div>
            <div className="space-y-4">
              {honorsAwards.map((award) => (
                <GlassPanel key={award.id} className="p-4" hover>
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
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
