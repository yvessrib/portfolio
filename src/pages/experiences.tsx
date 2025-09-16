"use client"

import { SectionHeader } from "@/components/sectionHeader";
import StarImage from '../../public/star.svg';
import Image from "next/image";

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from "react-i18next";


export default function Experiences() {

  const { t } = useTranslation()

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
      <SectionHeader sectionNumber={"100"} sectionName={t("experiences.title")} />
    
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
            <span className="font-firacode font-semibold text-2xl text-violet-500 pt-2">{t("experiences.job1")}</span>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">{t("experiences.job1.t1")}</span>
                <span className="font-firacode font-semibold text-base text-zinc-800 dark:text-zinc-300">
                  {t("experiences.job1.t1.p")}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">{t("experiences.job1.t2")}</span>
                <span className="font-firacode font-semibold text-base text-zinc-800 dark:text-zinc-300">{t("experiences.job1.t2.p")}</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">{t("experiences.job1.t3")}</span>
                <span className="font-firacode font-semibold text-base text-zinc-800 dark:text-zinc-300">{t("experiences.job1.t3.p")} </span>
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
            <span className="font-firacode font-semibold text-2xl text-violet-500 pt-2">{t("experiences.job2")}</span>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">{t("experiences.job2.t1")}</span>
                <span className="font-firacode font-semibold text-base text-zinc-800 dark:text-zinc-300">{t("experiences.job2.t1.p")}</span>
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
            <span className="font-firacode font-semibold text-2xl text-violet-500 pt-2">{t("experiences.job3")}</span>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">{t("experiences.job3.t1")}</span>
                <span className="font-firacode font-semibold text-base text-zinc-800 dark:text-zinc-300">{t("experiences.job3.t1.p")}</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">{t("experiences.job3.t2")}</span>
                <span className="font-firacode font-semibold text-base text-zinc-800 dark:text-zinc-300">{t("experiences.job3.t2.p")}</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-poppins font-semibold text-xl text-black dark:text-white">{t("experiences.job3.t3")}</span>
                <span className="font-firacode font-semibold text-base text-zinc-800 dark:text-zinc-300">{t("experiences.job3.t3.p")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
