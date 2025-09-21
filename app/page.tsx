"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HomeSection } from "@/components/sections/home-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ContactSection } from "@/components/sections/contact-section"
import { BlogSection } from "@/components/sections/blog-section"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />
      case "experience":
        return <ExperienceSection />
      case "projects":
        return <ProjectsSection />
      case "services":
        return <ServicesSection />
      case "blog":
        return <BlogSection />
      case "contact":
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  return (
    <main className="relative">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <div className="lg:ml-64 min-h-screen">{renderActiveSection()}</div>
    </main>
  )
}
