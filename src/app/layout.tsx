import ThemeHandler from "@/components/themeHandler";
import "./globals.css";
import ParentProvider from "./parentWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="vsc-initialized">
        <ParentProvider> 
          <ThemeHandler />
          {children}
        </ParentProvider>
      </body>
    </html>
  );
}
