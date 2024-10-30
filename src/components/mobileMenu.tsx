import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileMenu (){
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="block lg:hidden">
          <div className="w-8  h-6 flex flex-col justify-between">
            <div className="h-[2px] bg-black dark:bg-white w-full" />
            <div className="h-[2px] bg-black dark:bg-white w-full" />
            <div className="h-[2px] bg-black dark:bg-white w-full" />
          </div>
        </button>
      </SheetTrigger>
      <SheetContent className="text-black dark:text-white">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-center items-center gap-10 h-full py-10 text-xl">
          <span className="hover:text-violet-500">Teste</span>
          <span className="hover:text-violet-500">Teste</span>
          <span className="hover:text-violet-500">Teste</span>
          <span className="hover:text-violet-500">Teste</span>
          <span className="hover:text-violet-500">Teste</span>
        </div>
      </SheetContent>
    </Sheet>
  )
}