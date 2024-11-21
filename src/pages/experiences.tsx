"use client"

import { SectionHeader } from "@/components/sectionHeader";
import StarImage from '../../public/star.svg';
import Image from "next/image";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';


export function Experiences() {

  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: sectionRef,
    offset: ["start center", "center start"],
  });

  const { scrollYProgress: scrollYProgress2} = useScroll({
    target: sectionRef2,
    offset: ["start center", "center start"],
  });


  // Controla a altura da parte roxa da barra
  const scaleY = useTransform(scrollYProgress1, [0, 1], [0, 1]);

  return (
    <div className="dark:bg-zinc-800 bg-violet-200 px-8 md:px-16 py-6 md:py-12">
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
            <span className="font-firacode font-semibold text-2xl text-violet-500 pt-2">Título - Lorem Ipsum</span>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">Cargo | Mês/Ano - Mês/Ano</span>
                <span className="font-firacode font-semibold text-lg text-zinc-800 dark:text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam sem, blandit luctus leo ac, accumsan vulputate eros. Nullam at felis id mi iaculis tincidunt. Sed dignissim tellus in odio maximus, in luctus tellus pulvinar. Cras semper arcu cursus consequat malesuada. Sed a leo non mi tempor ornare. Curabitur luctus consequat laoreet.</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">Cargo | Mês/Ano - Mês/Ano</span>
                <span className="font-firacode font-semibold text-lg text-zinc-800 dark:text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam sem, blandit luctus leo ac, accumsan vulputate eros. Nullam at felis id mi iaculis tincidunt. Sed dignissim tellus in odio maximus, in luctus tellus pulvinar. Cras semper arcu cursus consequat malesuada. Sed a leo non mi tempor ornare. Curabitur luctus consequat laoreet.</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">Cargo | Mês/Ano - Mês/Ano</span>
                <span className="font-firacode font-semibold text-lg text-zinc-800 dark:text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam sem, blandit luctus leo ac, accumsan vulputate eros. Nullam at felis id mi iaculis tincidunt. Sed dignissim tellus in odio maximus, in luctus tellus pulvinar. Cras semper arcu cursus consequat malesuada. Sed a leo non mi tempor ornare. Curabitur luctus consequat laoreet.</span>
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
            <span className="font-firacode font-semibold text-2xl text-violet-500 pt-2">Título - Lorem Ipsum</span>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">Cargo | Mês/Ano - Mês/Ano</span>
                <span className="font-firacode font-semibold text-lg text-zinc-800 dark:text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam sem, blandit luctus leo ac, accumsan vulputate eros. Nullam at felis id mi iaculis tincidunt. Sed dignissim tellus in odio maximus, in luctus tellus pulvinar. Cras semper arcu cursus consequat malesuada. Sed a leo non mi tempor ornare. Curabitur luctus consequat laoreet.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
