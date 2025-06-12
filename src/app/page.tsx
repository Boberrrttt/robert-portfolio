'use client'

import AboutSection from "@/sections/about.section";
import ProjectsSection from "@/sections/projects.section";
import SkillsSection from "@/sections/skills.section";
import ContactsSection from "@/sections/contacts.section";

export default function Home() {
  return (
    <div>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactsSection/>
    </div>
  )
}
