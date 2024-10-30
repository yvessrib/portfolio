import { ThemeContextProvider } from "@/contexts/ThemeContext"

export default function ParentProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeContextProvider>
        {children}
    </ThemeContextProvider>
  )
}