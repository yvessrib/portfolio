"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MaterialUISwitch } from "./styledSwtich"
import { useContext } from "react"
import { ThemeContext } from "@/contexts/ThemeContext"
import { Button } from "./ui/button"
import SunIcon from "../../public/sun_icon.svg"
import MoonIcon from "../../public/moon_icon.svg"
import Image from "next/image"

export function MobileMenu (){
  const {handleSetTheme, theme} = useContext(ThemeContext)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="block lg:hidden">
          <div className="w-8  h-6 flex flex-col justify-between">
            <div className="h-[2px] bg-black dark:bg-white w-full" />
            <div className="h-[2px] bg-black dark:bg-white w-full" />
            <div className="h-[2px] bg-black dark:bg-white w-full" />
          </div>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="text-black dark:text-white font-poppins flex flex-col justify-center items-center gap-10 h-full py-10 text-xl">
          <span className="hover:text-violet-500">Sobre</span>
          <span className="hover:text-violet-500">Habilidades</span>
          <span className="hover:text-violet-500">Projetos</span>
          <span className="hover:text-violet-500">Experiências</span>
          <span className="hover:text-violet-500">Contato</span>
          <button type="button" className="py-2 px-8 bg-violet-500 rounded-[8px] text-white shadow-glow">Currículo</button>
          <button className="mt-[2px] block" onClick={() => handleSetTheme()}>
            {theme === "dark" ? 
              <Image src={SunIcon} alt="Light Mode" width={30} height={30} />
              :
              <Image src={MoonIcon} alt="Dark Mode" width={30} height={30} />
            }
          </button>

        </div>
      </SheetContent>
      
    </Sheet>
  )
}