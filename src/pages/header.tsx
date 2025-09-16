"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import BrasilFlag from '../../public/brasil_flag.svg'
import UsaFlag from '../../public/usa_flag.svg'
import { useContext } from "react"
import { ThemeContext } from "@/contexts/ThemeContext"
import { MobileMenu } from "@/components/mobileMenu"
import { Button } from "@/components/ui/button"
import SunIcon from "../../public/sun_icon.svg"
import MoonIcon from "../../public/moon_icon.svg"
import { useTranslation } from "react-i18next"
import "../i18n.js"

export default function Header(){

  const {handleSetTheme, theme} = useContext(ThemeContext)
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng)
  }

  return (
    <header className="font-firacode bg-white dark:bg-zinc-900 dark:text-white text-black flex flex-row text-base justify-between sticky px-4 lg:px-12 py-3 items-center  ">
      <a href="#hero"><span><span className="text-violet-500">&lt;</span> yves<span className="text-violet-500">.dev &gt;</span></span></a>

      <div className="font-poppins flex flex-row gap-6 lg:gap-8">
        
        <ul className="flex-row gap-8 items-center transition-all lg:flex hidden">
          <li className="hover:text-violet-500 hover:cursor-pointer">
            <a href="#about">{t("header.about")}</a>
          </li>
          <li className="hover:text-violet-500 hover:cursor-pointer">
            <a href="#skills">{t("header.skills")}</a>
          </li>
          <li className="hover:text-violet-500 hover:cursor-pointer">
            <a href="#projects">{t("header.projects")}</a>
          </li>
          <li className="hover:text-violet-500 hover:cursor-pointer">
            <a href="#experiences">{t("header.experiences")}</a>
          </li>
          <li className="hover:text-violet-500 hover:cursor-pointer">
            <a href="#contact">{t("header.contact")}</a>
          </li>
        </ul>

        <a
          href={i18n.language === "pt" ? "/yves_resume_pt.pdf" : "/yves_resume_en.pdf"}
          download
          className="hidden lg:inline-flex items-center justify-center py-0.5 px-6 bg-violet-500 rounded-[8px] shadow-glow"
        >
          {t("header.resume")}
        </a>

        <button className="mt-[2px] hidden lg:block" onClick={() => handleSetTheme()}>
          {theme === "dark" ? 
            <Image src={SunIcon} className="" alt="Light Mode" width={30} height={30} />
            :
            <Image src={MoonIcon} className="" alt="Dark Mode" width={30} height={30} />
          }
        </button>

        <Select defaultValue="pt" onValueChange={(value) => changeLanguage(value)}>
          <SelectTrigger className="w-[70px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent className="w-[70px]">
            <SelectItem value="pt">
              <Image src={BrasilFlag} alt="Portuguese" width={24} height={24} />
            </SelectItem>
            <SelectItem value="en">
              <Image src={UsaFlag} alt="Portuguese" width={24} height={24} />
            </SelectItem>
          </SelectContent>
        </Select>

        <MobileMenu />

      </div>
    </header>
  )
}