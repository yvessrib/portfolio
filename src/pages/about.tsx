import Image from "next/image";
import me from '../../public/me.svg';

export function AboutMe() {
  return (
    <div className="dark:bg-zinc-800 bg-violet-200 px-8 md:px-16 py-6 md:py-12">
      <div className="flex flex-row gap-10 font-firacode font-semibold text-3xl items-center pb-8">
        <span className="text-black dark:text-white text-nowrap">
          <span className="text-violet-500">001</span>. Sobre mim
        </span>
        <div className="h-[2px] bg-violet-500 w-full"/>
      </div>
      <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
        <div className="flex flex-col items-center justify-center gap-4 font-firacode text-lg font-semibold text-black dark:text-white w-full">
          <span> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam sem, blandit luctus leo ac, accumsan vulputate eros. Nullam at felis id mi iaculis tincidunt. Sed dignissim tellus in odio maximus, in luctus tellus pulvinar. 
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam sem, blandit luctus leo ac, accumsan vulputate eros. Nullam at felis id mi iaculis tincidunt. Sed dignissim tellus in odio maximus, in luctus tellus pulvinar. Cras semper arcu cursus consequat malesuada. Sed a leo non mi tempor ornare. Curabitur luctus consequat laoreet. In volutpat commodo dui, quis aliquam mi tristique vel. 
          </span>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex items-center justify-center bg-about-splash_mobile md:bg-about-splash bg-center bg-no-repeat h-full min-h-[449px]">
            <div className="rounded-full border-[5px] border-violet-700">
              <Image src={me} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}