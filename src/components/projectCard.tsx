import Image from "next/image"
import { twMerge } from "tailwind-merge"
import Github_black from "../../public/github_black.svg"
import Github_white from "../../public/github_white.svg"
import Figma_black from "../../public/figma_black.svg"
import Figma_white from "../../public/figma_white.svg"
import { tv } from "tailwind-variants"

const card = tv({
  base: "flex border-[1px] border-violet-500 my-6 rounded-[8px] gap-8",
  variants: {
    direction: {
      left: "flex-row",
      right: "flex-row-reverse"
    }
  }
})

export function ProjectCard (variant: { direction: "left" | "right" }) {
  return (
    <div className={card({ direction: variant.direction })}>
       <div className={`${variant.direction === "right" ? "items-end" : ""} flex flex-col gap-6 p-4 w-full`}>
        <span className="font-poppins font-semibold text-2xl text-black dark:text-white">Título Lorem Ipsum</span>
        <span className={`${variant.direction === "right" ? "text-right" : ""} font-firacode font-semibold text-base text-black dark:text-zinc-200`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam sem, blandit luctus leo ac, accumsan vulputate eros.</span>
        <div className={`${variant.direction === "right" ? "flex-row-reverse" : "flex-row"} flex gap-3 font-firacode font-semibold text-sm text-black dark:text-white`}>
          <span className="bg-violet-400 px-2 py-1 rounded-3xl">ReactJs</span>
          <span className="bg-violet-400 px-2 py-1 rounded-3xl">ReactJs</span>
          <span className="bg-violet-400 px-2 py-1 rounded-3xl">ReactJs</span>
        </div>
        <div className={`${variant.direction === "right" ? "flex-row-reverse" : "flex-row"} flex gap-4`}>
          <Image src={Github_black} alt="" width={40} height={40} className="block dark:hidden border-[2px] border-violet-500 rounded-full"/>
          <Image src={Github_white} alt="" width={40} height={40} className="hidden dark:block border-[2px] border-violet-500 rounded-full"/>
        </div>
      </div>
      <div className="w-full">
      </div>
    </div>
  )
}