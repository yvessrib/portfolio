import { CardSkills } from "@/components/cardSkills";
import { SectionHeader } from "@/components/sectionHeader";
import { SkillsCarroussel } from "@/components/skillsCarroussel";

export default function Skills (){
  const cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8}, { id: 9 }, { id: 10}];

  return (
    <div id="skills" className="dark:bg-zinc-900 bg-white px-8 md:px-16 py-6 md:py-12">
      <SectionHeader sectionNumber={"010"} sectionName={"Habilidades"} />
      <div className="flex flex-col items-center justify-center">
        <div className=" gap-3 hidden md:flex flex-wrap justify-center">
          {cards.map((card) => (
            <div key={card.id}>
              <CardSkills />
            </div>
          ))}
        </div>
        <SkillsCarroussel className="block md:hidden"/>
      </div>
    </div>
  )
}