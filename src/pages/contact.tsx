import { SectionHeader } from "@/components/sectionHeader";
import { BackgroundBeams } from "@/components/ui/background-beams";
import phone from "../../public/phone_contact.svg";
import linkedin from "../../public/linkedin_contact.svg"
import github from "../../public/github_contact.svg"
import Image from "next/image";
// import { useMediaQuery } from "react-responsive";

export function Contact() {
  
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="relative dark:bg-zinc-800 bg-violet-200 px-8 md:px-16 py-6 md:py-12 bg-background overflow-hidden">

      {/* {!isMobile && ( */}
        <BackgroundBeams />
      {/* )} */}

      <SectionHeader sectionNumber={"101"} sectionName={"Contato"} />

      <div className="relative z-20 flex flex-col justify-center items-center text-center gap-4">
        <div className="max-w-[634px]">
          <span className="font-poppins font-bold text-4xl md:text-6xl dark:text-white text-black">Entre em contato comigo!</span>
        </div>
        
        <div className="max-w-[634px]">
          <form className="p-6 rounded-lg space-y-4">
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2  dark:bg-zinc-900 text-white rounded-[6px] border border-violet-400 dark:border-zinc-700 focus:ring-2 focus:ring-violet-500 focus:outline-none"
              placeholder="Nome"
            />
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 dark:bg-zinc-900 text-white rounded-[6px] border border-violet-400 dark:border-zinc-700 focus:ring-2 focus:ring-violet-500 focus:outline-none"
              placeholder="E-mail"
            />
            <textarea
              id="message"
              rows={4}
              className="resize-none w-full px-4 py-2 dark:bg-zinc-900 text-white rounded-[6px] border border-violet-400 dark:border-zinc-700 focus:ring-2 focus:ring-violet-500 focus:outline-none"
              placeholder="Mensagem"
            />
            <button
              type="submit"
              className="w-8/12 px-4 py-2 bg-violet-500 dark:bg-transparent border border-violet-500 text-white dark:text-violet-500 rounded-[6px] font-semibold hover:bg-violet-700  dark:hover:bg-violet-500 hover:text-white transition focus:ring-white dark:focus:ring-violet-500 focus:outline-none"
            >
              Entrar em contato
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-0 md:flex-row w-full md:justify-around max-w-[700px] pt-2">
          <div className="flex flex-col items-center gap-2 max-w-[222px] w-full">
            <div className="bg-white dark:bg-zinc-900 w-fit h-fit p-4 rounded-full flex items-center justify-center border border-violet-500 dark:border-none">
              <Image src={phone} alt={''} />
            </div>
            <div className="flex flex-col">
              <span className="text-black dark:text-white font-semibold text-lg">Telefone</span>
              <span className="text-zinc-600 font-semibold text-[20px]">(+55) 35 98423-2379</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 max-w-[222px] w-full">
            <div className="bg-white dark:bg-zinc-900 w-fit h-fit p-4 rounded-full flex items-center justify-center border border-violet-500 dark:border-none">
              <Image src={linkedin} alt={''} />
            </div>
            <div className="flex flex-col">
              <span className="text-black dark:text-white font-semibold text-lg">Linkedin</span>
              <span className="text-zinc-600 font-semibold text-[20px]">@yvessrib</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 max-w-[222px] w-full">
            <div className="bg-white dark:bg-zinc-900 w-fit h-fit p-4 rounded-full flex items-center justify-center border border-violet-500 dark:border-none">
              <Image src={github} alt={''} />
            </div>
            <div className="flex flex-col">
              <span className="text-black dark:text-white font-semibold text-lg">Github</span>
              <span className="text-zinc-600 font-semibold text-[20px]">@yvessrib</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
