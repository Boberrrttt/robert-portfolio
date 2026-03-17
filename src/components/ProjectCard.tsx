/* eslint-disable @next/next/no-img-element */

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import { ExternalLink } from "lucide-react";

interface ProjectCardTypes {
  image: string;
  title: string;
  description: string;
  url?: string;
}

const ProjectCard = ({ image, title, description, url }: ProjectCardTypes) => {
  useEffect(() => {
    Fancybox.bind(`[data-fancybox="gallery-${title}"]`, {});
    return () => Fancybox.destroy();
  }, [title]);

  const openLightbox = (e: React.MouseEvent) => {
    e.preventDefault();
    Fancybox.show([{ src: image, type: "image" }]);
  };

  return (
    <Card
      className="relative flex flex-col h-full bg-white/5 border border-white/10 rounded-xl transition-all duration-200 hover:border-white/25 hover:bg-white/[0.08] focus-within:border-white/30"
      role="article"
      aria-labelledby={`project-title-${title.replace(/\s+/g, "-")}`}
    >
      <CardHeader className="flex justify-center p-4 pb-2">
        <button
          type="button"
          onClick={openLightbox}
          className="block w-full rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-800"
          aria-label={`View screenshot of ${title}`}
        >
          <img
            src={image}
            alt={`Screenshot of ${title} project`}
            className="w-full cursor-pointer rounded-lg h-36 md:h-48 object-cover"
          />
        </button>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4 pt-2">
        <CardTitle id={`project-title-${title.replace(/\s+/g, "-")}`} className="text-lg font-semibold text-white">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-300 text-sm mt-2 line-clamp-4 min-h-[4.5rem]">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-2">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-md text-sm font-medium bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-800"
          >
            Open live site <ExternalLink className="size-3.5" aria-hidden />
          </a>
        ) : (
          <span className="text-sm text-gray-400">Demo / case study</span>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard
