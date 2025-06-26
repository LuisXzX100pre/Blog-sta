"use client"

import React, { createContext, useContext, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  const getBrowserLanguage = () => {
    const lang = navigator.language || navigator.userLanguage
    return lang.startsWith("es") ? "es" : "en"
  }

  const getLanguageFromURL = () => {
    const pathSegments = location.pathname.split("/").filter(Boolean)
    const firstSegment = pathSegments[0]


    if (firstSegment === "es" || firstSegment === "en") {
      return firstSegment
    }

    if (pathSegments.includes("blog") && pathSegments.length >= 2) {
      const blogIndex = pathSegments.indexOf("blog")
      if (blogIndex > 0) {
        const langSegment = pathSegments[blogIndex - 1]
        if (langSegment === "es" || langSegment === "en") {
          return langSegment
        }
      }
    }

    return null
  }

  const [lang, setLang] = React.useState(() => {
    return getLanguageFromURL() || getBrowserLanguage()
  })

  useEffect(() => {
    const urlLang = getLanguageFromURL()
    if (urlLang && urlLang !== lang) {
      setLang(urlLang)
    }
  }, [location.pathname, lang])

  const changeLanguage = (newLang) => {
    setLang(newLang)

    const pathSegments = location.pathname.split("/").filter(Boolean)

    if (pathSegments.includes("blog")) {
      const blogIndex = pathSegments.indexOf("blog")
      if (blogIndex > 0) {
        pathSegments[blogIndex - 1] = newLang
      } else {
        pathSegments.unshift(newLang)
      }
      navigate("/" + pathSegments.join("/"))
    }
  }

  return <LanguageContext.Provider value={{ lang, setLang, changeLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
