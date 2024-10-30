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

export function MobileMenu (){
  const {handleSetTheme} = useContext(ThemeContext)

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
          <button type="button" className="py-2 px-8 bg-violet-500 rounded-[8px] text-white">Currículo</button>
          <MaterialUISwitch onClick={() => handleSetTheme()}/>
        </div>
      </SheetContent>
      
    </Sheet>
  )
}