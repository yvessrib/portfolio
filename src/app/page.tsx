import { Header } from "@/pages/header";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Yves Ribeiro',
}

export default function Home() {
  return (
    <div>
      <Header />      
    </div>
  );
}
