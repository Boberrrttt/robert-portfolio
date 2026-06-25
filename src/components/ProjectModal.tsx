"use client"

import { useEffect } from "react"
import { Info, X } from "lucide-react"
import type { Project } from "@/data/projects"
import Tag from "@/components/ui/Tag"

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (!project) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-brand-primary/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-brand-accent/30 bg-brand-secondary shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-8 flex flex-col gap-5">
          <div className="flex items-start gap-3 pr-8">
            <span className="font-mono-tag text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-accent/15 text-brand-accent border border-brand-accent/30 shrink-0 mt-1">
              {project.category}
            </span>
            <h2 id="project-modal-title" className="font-display text-2xl font-bold text-white">
              {project.title}
            </h2>
          </div>

          {project.outcome && (
            <p className="font-mono-tag text-brand-accent text-sm">{project.outcome}</p>
          )}

          <p className="text-gray-300 text-sm leading-relaxed">{project.summary}</p>

          {project.problem && (
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="text-white font-semibold">Problem — </span>
              {project.problem}
            </p>
          )}

          {project.approach && (
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="text-white font-semibold">Approach — </span>
              {project.approach}
            </p>
          )}

          {project.stack && project.stack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          )}

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit px-4 py-2 text-sm font-semibold bg-brand-accent text-brand-primary rounded-lg hover:bg-brand-accent/90 transition-colors"
            >
              Open Site
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

type ProjectInfoButtonProps = {
  onClick: () => void
  className?: string
}

export const ProjectInfoButton = ({ onClick, className = "" }: ProjectInfoButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`p-1.5 rounded-lg text-gray-400 hover:text-brand-accent hover:bg-brand-accent/10 transition-colors cursor-pointer ${className}`}
    aria-label="View project summary"
  >
    <Info size={18} />
  </button>
)

export default ProjectModal
