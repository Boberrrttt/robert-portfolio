/* eslint-disable @next/next/no-img-element */

"use client"

import "@fancyapps/ui/dist/fancybox/fancybox.css"
import { useEffect } from "react"
import { Fancybox } from "@fancyapps/ui"
import type { Project } from "@/data/projects"
import BentoCell from "@/components/ui/BentoCell"
import { ProjectInfoButton } from "@/components/ProjectModal"
import { cn } from "@/lib/utils"

type BentoProjectTileProps = {
  project: Project
  span?: string
  tall?: boolean
  onInfoClick: (project: Project) => void
}

const BentoProjectTile = ({ project, span = "md:col-span-4", tall, onInfoClick }: BentoProjectTileProps) => {
  useEffect(() => {
    Fancybox.bind(`[data-fancybox="bento-${project.title}"]`, {})
    return () => Fancybox.destroy()
  }, [project.title])

  return (
    <BentoCell className={cn("flex flex-col p-0 overflow-hidden group", span, tall && "md:row-span-2")}>
      <button
        type="button"
        className="relative w-full overflow-hidden cursor-pointer border-0 bg-transparent p-0"
        onClick={() =>
          Fancybox.show([{ src: project.image, type: "image" }])
        }
      >
        <img
          src={project.image}
          alt={project.title}
          className={cn(
            "w-full object-cover transition-transform duration-300 group-hover:scale-105",
            tall ? "h-48 md:h-full md:min-h-[220px]" : "h-36 md:h-40"
          )}
        />
        <span className="absolute top-3 left-3 font-mono-tag text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-primary/80 text-brand-accent border border-brand-accent/30">
          {project.category}
        </span>
      </button>
      <div className="p-4 md:p-5 flex flex-col flex-1 gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg text-white font-semibold">{project.title}</h3>
          <ProjectInfoButton onClick={() => onInfoClick(project)} className="shrink-0 -mt-0.5" />
        </div>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit mt-1 px-3 py-1.5 text-xs font-semibold bg-brand-accent text-brand-primary rounded-lg hover:bg-brand-accent/90 transition-colors"
          >
            Open Site
          </a>
        )}
      </div>
    </BentoCell>
  )
}

export default BentoProjectTile
