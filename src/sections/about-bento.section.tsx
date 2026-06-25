import { profile } from "@/data/profile"
import { contact } from "@/data/contact"
import BentoCell from "@/components/ui/BentoCell"
import Tag from "@/components/ui/Tag"

const AboutBentoSection = () => {
  return (
    <section id="about" className="pt-12 md:pt-16 pb-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">
        <BentoCell className="md:col-span-4 md:row-span-2 p-0 overflow-hidden min-h-[260px] md:min-h-0">
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            className="w-full h-full min-h-[260px] md:min-h-[340px] object-cover"
          />
        </BentoCell>

        <BentoCell className="md:col-span-8 flex flex-col justify-center gap-3">
          <span className="font-mono-tag text-brand-accent text-sm tracking-widest">
            01 — About
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {profile.headline}
          </h1>
          <p className="font-mono-tag text-brand-accent text-sm">{profile.subtitle}</p>
        </BentoCell>

        <BentoCell className="md:col-span-5 flex items-center">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {profile.bio}
          </p>
        </BentoCell>

        <BentoCell className="md:col-span-3 flex flex-wrap content-center gap-2">
          {profile.domains.map((domain) => (
            <Tag key={domain}>{domain}</Tag>
          ))}
        </BentoCell>

        <BentoCell className="md:col-span-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-brand-accent/10 border-brand-accent/20">
          <p className="font-mono-tag text-brand-accent text-sm">
            {contact.availability}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-brand-accent transition-colors shrink-0"
          >
            Get in touch
            <span aria-hidden="true">→</span>
          </a>
        </BentoCell>
      </div>
    </section>
  )
}

export default AboutBentoSection
