"use client"

import { useEffect } from "react"
import { useLanguage } from "../../context/LanguageContext"

export default function TabTitle() {
  const { languageData } = useLanguage()

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = languageData?.navigation?.tabTitle || "Royal Vacations"
        document.querySelector("title")?.classList.add("title-transition")
      } else {
        document.title = languageData?.navigation?.tabTitleRoyal || "Royal Vacations - Home"
        document.querySelector("title")?.classList.remove("title-transition")
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [languageData])

  return null
}
