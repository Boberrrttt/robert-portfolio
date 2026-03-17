'use client'

import AboutSection from "@/sections/about.section"
import ProjectsSection from "@/sections/projects.section"
import SkillsSection from "@/sections/skills.section"
import ContactsSection from "@/sections/contacts.section"
import BackToTop from "@/components/BackToTop"

export default function Home() {
  return (
    <main id="main-content">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactsSection />
      <BackToTop />
    </main>
  )
}
