"use client"

import { Link, useLocation } from "react-router-dom"
import { useLanguage } from "../../context/LanguageContext"

export default function LanguageSwitcher() {
  const { lang } = useLanguage()
  const location = useLocation()

  const getAlternateUrl = (targetLang) => {
    const pathSegments = location.pathname.split("/").filter(Boolean)

    // Si ya hay un idioma en la URL, reemplazarlo
    if (pathSegments[0] === "es" || pathSegments[0] === "en") {
      pathSegments[0] = targetLang
    } else {
      // Si no hay idioma, agregarlo al inicio
      pathSegments.unshift(targetLang)
    }

    return "/" + pathSegments.join("/")
  }

  return (
    <div className="flex gap-2 items-center">
      <Link
        to={getAlternateUrl("es")}
        className={`px-3 py-1 rounded text-sm transition-colors ${
          lang === "es" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        ES
      </Link>
      <Link
        to={getAlternateUrl("en")}
        className={`px-3 py-1 rounded text-sm transition-colors ${
          lang === "en" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        EN
      </Link>
    </div>
  )
}
