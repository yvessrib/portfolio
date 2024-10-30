"use client";

import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext, useEffect } from "react";

export default function ThemeHandler() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return null
}
