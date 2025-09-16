import { useContext } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { ThemeContext } from "@/contexts/ThemeContext";

interface CardSkillsProps {
  icon: string;
  skillName: string;
  theme: string;
}

export function CardSkills ({ icon, skillName, theme }: CardSkillsProps) {

  const getIcon = () => {
    if (skillName === "Next.js"){
      return theme === "dark" ? "/skills_icons/next-js_white.svg" : "/skills_icons/next-js_black.svg"
    }

    return icon
  }

  return (
    <CardContainer className="dark:bg-zinc-800 bg-violet-200 border-[1px] border-violet-500 rounded-[8px] shadow-glow max-w-[220px] max-h-[220px]">
      <CardBody className="flex flex-col gap-2 justify-center items-center">
        <CardItem translateZ="40" >
          <Image src={getIcon()} alt="" width={130} height={130} className="w-[130px] h-[130px] md:w-[130px] md:h-[130px]"/>
        </CardItem>
        <CardItem translateZ="40" className="font-firacode font-semibold text-center text-2xl text-black dark:text-zinc-200">
          <span>{skillName}</span>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}