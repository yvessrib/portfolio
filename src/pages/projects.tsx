// import { ProjectCard } from "@/components/projectCard";
import { SectionHeader } from "@/components/sectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Brasil from "/public/brasil_flag.svg"
// import { ProjectCard } from "./projects-test";

export default function Projects (){
  return (
    <div id="projects" className="dark:bg-zinc-800 bg-violet-200 px-8 md:px-16 py-6 md:py-12 min-h-[600px]">
      <SectionHeader sectionNumber={"011"} sectionName={"Projetos"} />
      <Tabs defaultValue="personal" className="w-full ">
        <TabsList className="w-full dark:text-white text-black">
          <TabsTrigger value="personal" className="w-full">Projetos pessoais</TabsTrigger>
          <TabsTrigger value="courses" className="w-full">Cursos e Eventos</TabsTrigger>
        </TabsList>
        <TabsContent value="personal">
          {/* <ProjectCard
            title="Projeto Incrível"
            description="Feito com Next.js, TailwindCSS e animações com Framer Motion."
            imageUrl={Brasil}
          /> */}
          {/* <ProjectCard direction="left" />
          <ProjectCard direction="right" /> */}
        </TabsContent>
        <TabsContent value="courses">
          {/* <ProjectCard direction="left" /> */}
        </TabsContent>
      </Tabs>
    </div>
  )
} 