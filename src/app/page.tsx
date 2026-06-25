import AboutBentoSection from "@/sections/about-bento.section"
import SkillsBentoSection from "@/sections/skills-bento.section"
import ProjectsBentoSection from "@/sections/projects-bento.section"
import ContactBentoSection from "@/sections/contact-bento.section"
import Footer from "@/components/layout/Footer"
import BackToTop from "@/components/BackToTop"

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-brand-primary bg-grid-pattern">
      <AboutBentoSection />
      <SkillsBentoSection />
      <ProjectsBentoSection />
      <ContactBentoSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
