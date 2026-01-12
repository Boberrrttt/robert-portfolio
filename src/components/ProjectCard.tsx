/* eslint-disable @next/next/no-img-element */

import "@fancyapps/ui/dist/fancybox/fancybox.css"; 
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";
import { Fancybox } from '@fancyapps/ui';

interface ProjectCardTypes {
  image: string
  title: string
  description: string
  url?: string
}

const ProjectCard = ({ image, title, description, url }: ProjectCardTypes) => {
  useEffect(() => {
    Fancybox.bind(`[data-fancybox="gallery-${title}"]`, {});

    return () => {
      Fancybox.destroy();
    };
  }, [title]);
  
  return (
    <Card  className="
          relative h-full
          bg-zinc-800/90      /* dark but slightly lighter than section */
          border border-zinc-700
          rounded-xl
          transition-all
          hover:border-zinc-500 hover:shadow-lg" 
    >
      <CardHeader className="flex justify-center">
          <a
            href={image}
            onClick={(e) => {
              e.preventDefault(); 
              Fancybox.show([
                {
                  src: image,
                  type: "image",
                },
              ]);
            }}
          >
            <img src={image} className="cursor-pointer rounded-xl h-40 md:h-56 object-cover" />
          </a>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className=" my-5 h-28">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="space-x-4">
        { url ? (
          <Button className="cursor-pointer" onClick={() => window.open(url, '_blank')} disabled={!url}>Open Site</Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard
