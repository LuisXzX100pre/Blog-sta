"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const pathname = usePathname()
  const router = useRouter()

  // Function to get the initial language
  const getInitialLanguage = () => {
    const pathSegments = pathname.split("/").filter(Boolean)
    const langSegment = pathSegments[0]
    if (langSegment === "es" || langSegment === "en") {
      return langSegment
    }
    // Fallback to browser language or default to 'es'
    if (typeof window !== "undefined") {
      const browserLang = navigator.language || navigator.userLanguage
      return browserLang.startsWith("en") ? "en" : "es"
    }
    return "es"
  }

  const [lang, setLang] = useState(getInitialLanguage)

  // Effect to sync language from URL and redirect if necessary
  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean)
    const langSegment = pathSegments[0]

    if (langSegment === "es" || langSegment === "en") {
      if (langSegment !== lang) {
        setLang(langSegment)
      }
    } else {
      // If no lang in URL, redirect to the current language's path
      const newPath = `/${lang}${pathname === "/" ? "" : pathname}`
      router.replace(newPath)
    }
  }, [pathname, router, lang])

  const changeLanguage = (newLang) => {
    if (newLang === lang) return // No change needed

    const pathSegments = pathname.split("/").filter(Boolean)

    // Replace the language segment or add it if it doesn't exist
    if (pathSegments.length > 0 && (pathSegments[0] === "es" || pathSegments[0] === "en")) {
      pathSegments[0] = newLang
    } else {
      pathSegments.unshift(newLang)
    }

    const newPath = "/" + pathSegments.join("/")
    router.push(newPath)
    setLang(newLang) // Update state immediately for responsiveness
  }

  return <LanguageContext.Provider value={{ lang, changeLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
