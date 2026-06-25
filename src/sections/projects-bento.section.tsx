/* eslint-disable @next/next/no-img-element */

"use client"

import { useState } from "react"
import { featuredProject, webProjects, mobileProjects, type Project } from "@/data/projects"
import BentoCell from "@/components/ui/BentoCell"
import BentoProjectTile from "@/components/BentoProjectTile"
import ProjectModal, { ProjectInfoButton } from "@/components/ProjectModal"
import SectionLabel from "@/components/ui/SectionLabel"
import Tag from "@/components/ui/Tag"

type Filter = "all" | "web" | "mobile"

const spanPattern = ["md:col-span-6", "md:col-span-6", "md:col-span-4", "md:col-span-4", "md:col-span-4", "md:col-span-8", "md:col-span-4"]

const ProjectsBentoSection = () => {
  const [filter, setFilter] = useState<Filter>("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const showFeatured = filter === "all" || filter === "mobile"

  const gridProjects: Project[] =
    filter === "web"
      ? webProjects
      : filter === "mobile"
        ? mobileProjects.filter((p) => p.title !== featuredProject.title)
        : [...webProjects, ...mobileProjects.filter((p) => p.title !== featuredProject.title)]

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "web", label: "Web" },
    { key: "mobile", label: "Mobile" },
  ]

  const sideProjects = showFeatured ? gridProjects.slice(0, 2) : []
  const restProjects = showFeatured ? gridProjects.slice(2) : gridProjects

  return (
    <section id="projects" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6 md:mb-8">
        <SectionLabel
          index="03 — Work"
          title="Selected Work"
          subtitle="Projects across web, mobile, and embedded systems."
        />
        <div className="flex gap-2 shrink-0">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`font-mono-tag px-4 py-2 rounded-full text-xs border transition-colors cursor-pointer ${
                filter === key
                  ? "bg-brand-accent text-brand-primary border-brand-accent"
                  : "border-white/20 text-gray-400 hover:border-brand-accent/40 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">
        {showFeatured && (
          <BentoCell className="md:col-span-12 lg:col-span-7 lg:row-span-2 p-0 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[320px]">
              <div className="p-6 md:p-8 flex flex-col gap-4 justify-center">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono-tag text-brand-accent text-xs tracking-wide">
                    Featured
                  </span>
                  <ProjectInfoButton onClick={() => setSelectedProject(featuredProject)} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  {featuredProject.title}
                </h3>
                <p className="font-mono-tag text-brand-accent text-sm">
                  {featuredProject.outcome}
                </p>
                <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
                  <p>
                    <span className="text-white font-semibold">Problem — </span>
                    {featuredProject.problem}
                  </p>
                  <p>
                    <span className="text-white font-semibold">Approach — </span>
                    {featuredProject.approach}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {featuredProject.stack?.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
              <div className="relative bg-brand-secondary/40 p-6 flex items-center justify-center min-h-[200px]">
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="relative z-10 w-full max-w-xs rounded-xl border border-brand-accent/20 object-cover shadow-xl"
                />
              </div>
            </div>
          </BentoCell>
        )}

        {sideProjects.map((project) => (
          <BentoProjectTile
            key={project.title}
            project={project}
            span="md:col-span-6 lg:col-span-5"
            onInfoClick={setSelectedProject}
          />
        ))}

        {restProjects.map((project, index) => (
          <BentoProjectTile
            key={project.title}
            project={project}
            span={spanPattern[index % spanPattern.length]}
            onInfoClick={setSelectedProject}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsBentoSection
