import ThemeHandler from "@/components/themeHandler";
import "./globals.css";
import ParentProvider from "./parentWrapper";
import { Poppins, Fira_Code } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-fira-code'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`vsc-initialized ${firaCode.variable} ${poppins.variable} transition-colors data-[scroll-locked]:!overflow-visible`} >
        <ParentProvider> 
          <ThemeHandler />
          {children}
        </ParentProvider>
      </body>
    </html>
  );
}
