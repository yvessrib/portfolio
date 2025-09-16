"use client"

import Image from "next/image";
import me from '../../public/yves_square.jpg';
import { SectionHeader } from "@/components/sectionHeader";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation()

  return (
    <div id="about" className="dark:bg-zinc-800 bg-violet-200 px-8 md:px-16 py-6 md:py-12">
      <SectionHeader sectionNumber={"001"} sectionName={t("about.title")} />
      <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
        <div className="flex flex-col items-center justify-center gap-4 font-firacode text-base font-semibold text-black dark:text-white w-full">
          <span> 
            {t("about.p1")}
          </span>
          <span>
            {t("about.p2")}
          </span>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex items-center justify-center bg-none lg:bg-about-splash bg-center bg-no-repeat h-full min-h-[449px]">
            <div className="rounded-full border-[5px] border-violet-700 shadow-glow">
              <Image src={me} alt="" className="rounded-full" width={370}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}