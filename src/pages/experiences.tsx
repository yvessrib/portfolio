"use client"

import { SectionHeader } from "@/components/sectionHeader";
import StarImage from '../../public/star.svg';
import Image from "next/image";

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';


export default function Experiences() {

  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: sectionRef,
    offset: ["start center", "center start"],
  });

  const { scrollYProgress: scrollYProgress2} = useScroll({
    target: sectionRef2,
    offset: ["start center", "center start"],
  });

  const { scrollYProgress: scrollYProgress3} = useScroll({
    target: sectionRef3,
    offset: ["start center", "center start"],
  });


  // Controla a altura da parte roxa da barra
  // const scaleY = useTransform(scrollYProgress1, [0, 1], [0, 1]);

  return (
    <div id="experiences" className="dark:bg-zinc-900 bg-white px-8 md:px-16 py-6 md:py-12">
      <SectionHeader sectionNumber={"100"} sectionName={"Experiências"} />
    
      <div className="flex gap-6 mt-8">
        <div className="flex flex-col align-middle justify-center items-center w-[50px] relative gap-2">
          <Image src={StarImage} alt="" width={50} height={50}/>
          <motion.div
            style={{ scaleY: scrollYProgress1 }}
            className="h-full w-1 bg-violet-500 origin-top shadow-glow"
          />
        </div>

        <div ref={sectionRef} className="flex flex-col w-full">
          <div  className="flex flex-col gap-4">
            <span className="font-firacode font-semibold text-2xl text-violet-500 pt-2">CP2eJr - Empresa Júnior </span>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">Trainee de Projetos | 03/2022 - 06/2022</span>
                <span className="font-firacode font-semibold text-base text-zinc-800 dark:text-zinc-300">
                  Como Trainee de Projetos, atuei em projetos de desenvolvimento web como parte da equipe técnica, com foco em front-end. Contribuí para a implementação de interfaces e recursos interativos, utilizando tecnologias como HTML, CSS e JavaScript, além de aplicar práticas de versionamento e metodologias ágeis como Git, GitHub, Scrum e Kanban.
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">Assessor de Projetos | 07/2022 - 12/2022</span>
                <span className="font-firacode font-semibold text-base text-zinc-800 dark:text-zinc-300">Atuei como Assessor de Desenvolvimento na CP2eJr, desempenhando funções de desenvolvedor front-end e gerente de projetos, onde criei sites utilizando HTML, CSS e JavaScript, e gerenciei projetos com ferramentas como Jira, GitHub e Pipefy, otimizando fluxos de trabalho e promovendo a colaboração eficaz da equipe de desenvolvimento</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">Diretor de Projetos | 01/2023 - 12/2023</span>
                <span className="font-firacode font-semibold text-base text-zinc-800 dark:text-zinc-300">Atuei como Diretor de Desenvolvimento na CP2eJr, liderando a equipe de desenvolvimento web e supervisionando projetos para garantir eficiência e colaboração, utilizando ferramentas como Jira, Pipefy, Notion e GitHub Organizations. Mentorei membros da equipe para aprimorar habilidades técnicas, desenvolvi aplicações web com HTML, CSS, JavaScript, React.js e Node.js, e contribui para o planejamento estratégico trimestral da empresa, apoiando o alcance das metas organizacionais.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-8">
        <div className="flex flex-col align-middle justify-center items-center w-[50px] relative gap-2">
          <Image src={StarImage} alt="" width={50} height={50} />
          <motion.div
            style={{ scaleY: scrollYProgress2 }}
            className="h-full w-1 bg-violet-500 origin-top shadow-glow"
          />
        </div>

        <div ref={sectionRef2} className="flex flex-col w-full">
          <div  className="flex flex-col gap-4">
            <span className="font-firacode font-semibold text-2xl text-violet-500 pt-2">Amiko Soluções - Startup</span>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">Estagiário Full-Stack | 07/2023 - Atualmente</span>
                <span className="font-firacode font-semibold text-base text-zinc-800 dark:text-zinc-300">Atuei no desenvolvimento de uma assistente virtual beira-leito para hospitais utilizando ReactJs, NextJs, NodeJs e AWS, além de reformular o site da empresa com NextJs e AWS, garantindo uma experiência mais otimizada e um site totalmente responsivo.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-8">
        <div className="flex flex-col align-middle justify-center items-center w-[50px] relative gap-2">
          <Image src={StarImage} alt="" width={50} height={50} />
          <motion.div
            style={{ scaleY: scrollYProgress3 }}
            className="h-full w-1 bg-violet-500 origin-top shadow-glow"
          />
        </div>

        <div ref={sectionRef3} className="flex flex-col w-full">
          <div  className="flex flex-col gap-4">
            <span className="font-firacode font-semibold text-2xl text-violet-500 pt-2">Inatel - Instituto Nacional de Telecomunicações</span>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">Engenharia da Computação | 01/2021 - Atualmente</span>
                <span className="font-firacode font-semibold text-base text-zinc-800 dark:text-zinc-300">Atuei no desenvolvimento de uma assistente virtual beira-leito para hospitais utilizando ReactJs, NextJs, NodeJs e AWS, além de reformular o site da empresa com NextJs e AWS, garantindo uma experiência mais otimizada e um site totalmente responsivo.</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">Monitor de Banco de Dados I | 08/2023 - 12/2024</span>
                <span className="font-firacode font-semibold text-base text-zinc-800 dark:text-zinc-300">Atuei como Monitor de Ensino na disciplina Banco de Dados I, planejando, desenvolvendo e ministrando aulas para alunos de engenharia, ensinando fundamentos de MySQL e conceitos de gerenciamento de banco de dados. Ofereci suporte a alunos e professores, auxiliando na aplicação de provas e avaliação de trabalhos, contribuindo para o aprendizado e desempenho acadêmico da turma.</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">Programação 1.0 - Iniciação Científica | 02/2022 - 06/2023</span>
                <span className="font-firacode font-semibold text-base text-zinc-800 dark:text-zinc-300">Atuei como Assistente de Ensino em Programação em Python, planejando, desenvolvendo e ministrando aulas para alunos do ensino médio, introduzindo-os à programação por meio de competições interescolares e criando conteúdos educacionais envolventes para estimular o pensamento lógico e habilidades de resolução de problemas.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
