"use client"

import { createContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  handleSetTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

interface ThemeProviderProps {
  children: React.ReactNode;
}

const initialState = {
  theme: "dark"
}

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(initialState.theme)

  function handleSetTheme() {
    setTheme("light")
    if (theme === "dark") {
      setTheme("light")
    }
    if (theme === "light") {
      setTheme("dark")
    }
  }

  return (
    <ThemeContext.Provider
      value={{theme, handleSetTheme}}
    >
      {children}
    </ThemeContext.Provider>
  )
}