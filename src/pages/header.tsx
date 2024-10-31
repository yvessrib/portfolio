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
import { MaterialUISwitch } from "@/components/styledSwtich"

export function Header(){

  const {handleSetTheme} = useContext(ThemeContext)

  return (
    <header className="font-firacode bg-white dark:bg-zinc-900 dark:text-white text-black flex flex-row text-base justify-between sticky px-4 lg:px-12 py-3 items-center  ">
      <span><span className="text-violet-500">&lt;</span> yves<span className="text-violet-500">.dev &gt;</span></span>

      <div className="font-poppins flex flex-row gap-6 lg:gap-8">
        
        <ul className="flex-row gap-8 items-center transition-all lg:flex hidden">
          <li className="hover:text-violet-500">Sobre</li>
          <li className="hover:text-violet-500">Habilidades</li>
          <li className="hover:text-violet-500">Projetos</li>
          <li className="hover:text-violet-500">Experiências</li>
          <li className="hover:text-violet-500">Contato</li>
        </ul>

        <button type="button" className="hidden lg:block py-0.5 px-6 bg-violet-500 rounded-[8px] shadow-glow">Currículo</button>

        <div className="mt-[2px] hidden lg:block">
          <MaterialUISwitch onClick={() => handleSetTheme()}/>
        </div>

        <Select defaultValue="Portuguese">
          <SelectTrigger>
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Portuguese" >
              <Image src={BrasilFlag} alt="Portuguese" width={24} height={24} />
            </SelectItem>
            <SelectItem value="English">
              <Image src={UsaFlag} alt="Portuguese" width={24} height={24} />
            </SelectItem>
          </SelectContent>
        </Select>

        <MobileMenu />

      </div>
    </header>
  )
}