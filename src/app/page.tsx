import AboutBentoSection from "@/sections/about-bento.section"
import SkillsBentoSection from "@/sections/skills-bento.section"
import ProjectsBentoSection from "@/sections/projects-bento.section"
import ContactBentoSection from "@/sections/contact-bento.section"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-primary bg-grid-pattern">
      <AboutBentoSection />
      <SkillsBentoSection />
      <ProjectsBentoSection />
      <ContactBentoSection />
      <Footer />
    </main>
  )
}
