"use client"

import { CardSkills } from "@/components/cardSkills";
import { SectionHeader } from "@/components/sectionHeader";
import { SkillsCarroussel } from "@/components/skillsCarroussel";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";
import skills from "@/app/skills.json"

export default function Skills (){

  const {theme} = useContext(ThemeContext)

  return (
    <div id="skills" className="dark:bg-zinc-900 bg-white px-8 md:px-16 py-6 md:py-12">
      <SectionHeader sectionNumber={"010"} sectionName={"Habilidades"} />
      <div className="flex flex-col items-center justify-center">
        <div className=" gap-3 hidden md:flex flex-wrap justify-center">
          {skills.map((card) => (
            <div key={card.id}>
              <CardSkills icon={card.icon} skillName={card.skillName} theme={theme} />
            </div>
          ))}
        </div>
        <SkillsCarroussel className="block md:hidden" skills={skills} theme={theme} />
      </div>
    </div>
  )
}