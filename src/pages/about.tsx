import Image from "next/image";
import me from '../../public/yves_square.jpg';
import { SectionHeader } from "@/components/sectionHeader";

export default function AboutMe() {
  return (
    <div id="about" className="dark:bg-zinc-800 bg-violet-200 px-8 md:px-16 py-6 md:py-12">
      <SectionHeader sectionNumber={"001"} sectionName={"Sobre mim"} />
      <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
        <div className="flex flex-col items-center justify-center gap-4 font-firacode text-base font-semibold text-black dark:text-white w-full">
          <span> 
            Sou um jovem apaixonado por tecnologia, jogos e música! Tive meu primeiro contato com Desenvolvimento Web em 2022, ao ingressar em uma Empresa Júnior, onde descobri uma grande afinidade com a área. Durante o ano de 2023, atuei como diretor, aprendendo na prática sobre liderança e trabalho em equipe.
          </span>
          <span>
            Desde então, venho me aperfeiçoando por meio de uma combinação de cursos online, projetos pessoais e a grade curricular da minha faculdade de Engenharia da Computação. Hoje, me considero um Desenvolvedor Full Stack, com ênfase em Front-end e experiência formal também em Back-end. Pretendo continuar estudando e explorando áreas como UX Design e Análise de Dados no futuro.
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