import { CardSkills } from "@/components/cardSkills";
import { SectionHeader } from "@/components/sectionHeader";

export function Skills (){
  const cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8}, { id: 9 }, { id: 10}];

  return (
    <div className="dark:bg-zinc-900 bg-white px-8 md:px-16 py-6 md:py-12">
      <SectionHeader sectionNumber={"010"} sectionName={"Habilidades"} />
      <div className="grid grid-cols-1 2xl:grid-cols-5 gap-3">
        {cards.map((card) => (
          <div key={card.id}>
            <CardSkills />
          </div>
        ))}
      </div>
    </div>
  )
}