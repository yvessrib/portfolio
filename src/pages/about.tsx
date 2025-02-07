import Image from "next/image";
import me from '../../public/me.svg';
import { SectionHeader } from "@/components/sectionHeader";

export default function AboutMe() {
  return (
    <div id="about" className="dark:bg-zinc-800 bg-violet-200 px-8 md:px-16 py-6 md:py-12">
      <SectionHeader sectionNumber={"001"} sectionName={"Sobre mim"} />
      <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
        <div className="flex flex-col items-center justify-center gap-4 font-firacode text-base font-semibold text-black dark:text-white w-full">
          <span> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam sem, blandit luctus leo ac, accumsan vulputate eros. Nullam at felis id mi iaculis tincidunt. Sed dignissim tellus in odio maximus, in luctus tellus pulvinar. 
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam sem, blandit luctus leo ac, accumsan vulputate eros. Nullam at felis id mi iaculis tincidunt. Sed dignissim tellus in odio maximus, in luctus tellus pulvinar. Cras semper arcu cursus consequat malesuada. Sed a leo non mi tempor ornare. Curabitur luctus consequat laoreet. In volutpat commodo dui, quis aliquam mi tristique vel. 
          </span>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex items-center justify-center bg-about-splash_mobile md:bg-about-splash bg-center bg-no-repeat h-full min-h-[449px]">
            <div className="rounded-full border-[5px] border-violet-700 shadow-glow">
              <Image src={me} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}