type sectionHeaderProps = {
  sectionNumber: string;
  sectionName: string;
}

export function SectionHeader (props: sectionHeaderProps) {
  return (
    <div className="flex flex-row gap-4 md:gap-10 font-firacode font-semibold text-xl md:text-3xl items-center pb-16">
        <span className="text-black dark:text-white text-nowrap">
          <span className="text-violet-500">{props.sectionNumber}</span>. {props.sectionName}
        </span>
        <div className="h-[2px] bg-violet-500 w-full"/>
    </div>
  )
}