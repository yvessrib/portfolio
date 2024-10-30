import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

export function CardSkills () {
  return (
    <CardContainer className="dark:bg-zinc-800 bg-violet-200 border-[1px] border-violet-500 rounded-[8px] shadow-glow">
      <CardBody className="flex flex-col gap-2 justify-center items-center">
        <CardItem translateZ="40" >
          <Image src={"/skills_icons/html-5.svg"} alt="" width={130} height={130}/>
        </CardItem>
        <CardItem translateZ="40" className="font-firacode font-semibold uppercase text-2xl text-black dark:text-zinc-200">
          <span>HTML 5</span>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}