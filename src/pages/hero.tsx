"use client"

import { ThemeContext } from "@/contexts/ThemeContext"
import { motion, useScroll, useTransform } from "framer-motion"
import React, { useContext, useEffect, useRef, useState } from "react"

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function HeroParallax(){

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const {theme, isSwitching, switchTheme, setIsSwitching} = useContext(ThemeContext)
  const [upTransition, setUpTransition] = useState(false)
  const [downTransition, setDownTransition] = useState(false)

  const moon_sun = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const text = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const mountain = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // function delay(ms: number) {
  //   return new Promise(resolve => setTimeout(resolve, ms))
  // }

  useEffect(() => {

    if (isSwitching){
      switchTheme()
    }

    setIsSwitching(false)

    // const handleTransition = async () => {
    //   if (isSwitching){
    //     setDownTransition(true);
    //     await delay(500);

    //     setDownTransition(false);
    //     setUpTransition(true);
    //     await delay(500);

    //     setUpTransition(false);
    //     switchTheme();
    //     setIsSwitching(false);
    //   }
    // };

    // handleTransition()
  }, [switchTheme, setIsSwitching, isSwitching]);
  

  return (
    <div 
      ref={ref}
      className="bg-white dark:bg-zinc-900 w-full h-screen overflow-hidden relative grid place-items-center"
    >

      <motion.div
        className="absolute inset-0 z-[10] md:block hidden" // Condicional para visibilidade
        style={{
          backgroundImage: `url('${theme === "dark" ? "/parallax_effect/1.b.svg" : "/parallax_effect/1.a.svg"}')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: moon_sun,
        }}
        // initial={{ y: isSwitching && downTransition ? "60%" : "0%" }}
        // animate={{ y: isSwitching && upTransition ? "0%" : "60%" }}
        // transition={{ duration: 0.5 }}
      />

      {/* Versão Mobile */}
      <motion.div
        className="absolute inset-0 z-[10] block md:hidden" 
        style={{
          backgroundImage: `url('${theme === "dark" ? "/parallax_effect/1.b_mobile.svg" : "/parallax_effect/1.a_mobile.svg"}')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: moon_sun,
        }}
        // initial={{ y: isSwitching && downTransition ? "60%" : "0%" }}
        // animate={{ y: isSwitching && upTransition ? "0%" : "60%" }}
        // transition={{ duration: 0.5 }}
      />

      <div
        className="absolute inset-0 z-[20]"
        style={{
          backgroundImage: "url('/parallax_effect/2.b.svg')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />

      <motion.div
        className="absolute inset-0 z-[30]"
        style={{
          backgroundImage: "url('/parallax_effect/3.b.svg')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: mountain
        }}
      />

      <motion.div
        className="absolute inset-0 z-[40]"
        style={{
          y: text
        }}
      >
        <div className="relative top-[15%] md:top-16 font-poppins font-semibold flex flex-col text-center md:text-right px-8 text-wrap">
          <h4 className="text-violet-500  text-3xl md:text-4xl">Olá, meu nome é</h4>
          <h1 className="text-black dark:text-white text-6xl md:text-8xl">Yves Antônio</h1>
          <h2 className="text-zinc-600 dark:text-zinc-200 text-4xl md:text-5xl">Sou um desenvolvedor Full Stack</h2>
        </div>
      </motion.div>
      
      <div
        className="absolute inset-0 z-[50]"
        style={{
          backgroundImage: "url('/parallax_effect/5.b.svg')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />

      {theme === "dark" && (
        <div
          className="absolute inset-0 z-[60]"
          style={{
            backgroundImage: "url('/parallax_effect/6.b.svg')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      )}

      {theme === "light" && (    
        <div
          className="absolute inset-0 z-[60]"
          style={{
            backgroundImage: "url('/parallax_effect/6.a.svg')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      )}


    </div>
  )
}