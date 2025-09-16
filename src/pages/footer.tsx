"use client"

import { useTranslation } from "react-i18next"

export default function Footer (){

  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-2 justify-center items-center p-4 text-black dark:text-white text-base font-firacode text-center">
      <a href="#hero" rel="noopener noreferrer"><span><span className="text-violet-500">&lt;</span> yves<span className="text-violet-500">.dev &gt;</span></span></a>
      <span className="text-wrap">{t("footer.text")}</span>
    </div>
  )
} 