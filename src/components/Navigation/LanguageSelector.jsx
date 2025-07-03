"use client"

import { useLanguage } from "../../context/LanguageContext"

export function LanguageSelector() {
  const { lang, changeLanguage } = useLanguage()

  const handleLangChange = (newLang) => {
    changeLanguage(newLang)
  }

  return (
    <div className="flex items-center gap-2 text-gry-100 m-b">
      <button
        onClick={() => handleLangChange("es")}
        className={`cursor-pointer hover:text-or-100 disabled:cursor-default disabled:opacity-50 ${
          lang === "es" ? "text-or-100 font-bold" : ""
        }`}
        disabled={lang === "es"}
      >
        ES
      </button>
      <span className="text-gry-70">|</span>
      <button
        onClick={() => handleLangChange("en")}
        className={`cursor-pointer hover:text-or-100 disabled:cursor-default disabled:opacity-50 ${
          lang === "en" ? "text-or-100 font-bold" : ""
        }`}
        disabled={lang === "en"}
      >
        EN
      </button>
    </div>
  )
}
