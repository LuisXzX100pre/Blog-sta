"use client"

import { useMemo } from "react"

export function useSafeTitle(data, fallback = "Título no disponible") {
  return useMemo(() => {
    if (!data) return fallback

    // Priorizar blogTitle para títulos principales
    if (data.blogTitle) {
      return typeof data.blogTitle === "string" ? data.blogTitle : String(data.blogTitle)
    }

    // Luego mainTitle
    if (data.mainTitle) {
      return typeof data.mainTitle === "string" ? data.mainTitle : String(data.mainTitle)
    }

    // Luego title
    if (data.title) {
      return typeof data.title === "string" ? data.title : String(data.title)
    }

    // Si es un objeto con propiedades de texto
    if (typeof data === "object" && data.text) {
      return String(data.text)
    }

    return fallback
  }, [data, fallback])
}
