"use client"

import { createContext, useState } from "react";

interface ThemeContextType {
  isSwitching: boolean;
  setIsSwitching: (boolean: boolean) => void;
  theme: string;
  handleSetTheme: () => void;
  switchTheme: () => void;
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
  const [isSwitching, setIsSwitching] = useState(false)

  function handleSetTheme() {
    setIsSwitching(true)

    console.log('is switching')
  }

  function switchTheme(){

    if (theme === "dark") {
      setTheme("light")
    }
    if (theme === "light") {
      setTheme("dark")
    }

    console.log('switched theme')
  }

  return (
    <ThemeContext.Provider
      value={{isSwitching, setIsSwitching, theme, handleSetTheme, switchTheme}}
    >
      {children}
    </ThemeContext.Provider>
  )
}