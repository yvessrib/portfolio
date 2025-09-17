import  AboutMe  from "@/pages/about";
import  Contact  from "@/pages/contact";
import  Experiences  from "@/pages/experiences";
import  Footer  from "@/pages/footer";
import  Header  from "@/pages/header";
import  HeroParallax  from "@/pages/hero";
import  Projects  from "@/pages/projects";
import  Skills  from "@/pages/skills";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Yves Ribeiro',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors bg-white dark:bg-zinc-900">
      <div className="flex flex-col items-center">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="fixed w-full z-[100]">
            <Header />
          </div>
          <div className="pt-20" id="hero">
            <HeroParallax />
            <AboutMe />
            <Skills />
            {/* <Projects /> */}
            <Experiences />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
