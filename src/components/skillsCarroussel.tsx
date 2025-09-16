"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { CardSkills } from "./cardSkills"
import Autoplay from 'embla-carousel-autoplay'
import React from "react"
import { twMerge } from "tailwind-merge"

interface SkillsCarrousselProps {
  className?: string;
  skills?: Array<{ icon: string; skillName: string }>;
  theme: string;
}

export function SkillsCarroussel({className, skills, theme}: SkillsCarrousselProps){
  const plugin = React.useRef(
    Autoplay({delay: 2000, stopOnInteraction: true})
  )

  return (
    <Carousel 
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className={twMerge("w-full justify-center", className)}
    >
      <CarouselContent>
        {skills?.map((skill, index) => (
          <CarouselItem key={index} className="sm:basis-1/2">
            <CardSkills icon={skill.icon} skillName={skill.skillName} theme={theme} />
          </CarouselItem>
        ))}
      </CarouselContent>
      
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}