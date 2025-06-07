'use client'

import AboutSection from "@/sections/about.section";
import ProjectsSection from "@/sections/projects.section";
import SkillsSection from "@/sections/skills.section";

export default function Home() {
  return (
    <div>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
    </div>
  )
}
