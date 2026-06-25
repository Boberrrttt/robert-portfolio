import { coreSkills, workModes } from "@/data/skills"
import BentoCell from "@/components/ui/BentoCell"
import SectionLabel from "@/components/ui/SectionLabel"
import Tag from "@/components/ui/Tag"

const SkillsBentoSection = () => {
  return (
    <section id="skills" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionLabel
        index="02 — Skills"
        title="How I Work"
        subtitle="Three ways I build — each backed by projects you can explore below."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">
        {workModes.map((mode) => (
          <BentoCell key={mode.title} className="md:col-span-4 flex flex-col gap-4">
            <h3 className="font-display text-xl text-white font-semibold">
              {mode.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">
              {mode.story}
            </p>
            <div className="flex flex-wrap gap-2">
              {mode.stack.map((tech) => (
                <Tag key={tech} className="text-[11px] px-2 py-0.5">
                  {tech}
                </Tag>
              ))}
            </div>
          </BentoCell>
        ))}

        <BentoCell className="md:col-span-12">
          <p className="font-mono-tag text-brand-accent text-sm mb-4">Core stack</p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </BentoCell>
      </div>
    </section>
  )
}

export default SkillsBentoSection
