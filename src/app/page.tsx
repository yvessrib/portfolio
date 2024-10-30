import { Header } from "@/pages/header";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Yves Ribeiro',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors bg-white dark:bg-zinc-900">
      <div className="flex flex-col items-center">
        <div className="max-w-[1440px] w-full mx-auto">
          <Header />
        </div>
      </div>
    </div>
  );
}
