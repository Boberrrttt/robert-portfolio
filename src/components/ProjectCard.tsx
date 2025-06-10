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
import { Lens } from "@/components/magicui/lens";
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
    <Card className="relative w-[90%] bg-brand-tertiary shadow-none border-none">
      <CardHeader>
          <Lens defaultPosition={{ x: 260, y: 150 }}>
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
            <img src={image} className="cursor-pointer" />
          </a>
          </Lens>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className=" mt-3 h-28">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="space-x-4">
        <Button className="cursor-pointer" onClick={() => window.open(url, '_blank')} disabled={!url}>Open Site</Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard
