"use client"

import { useCallback } from "react"

export function useClickableText() {
  // Mapeo de destinos y sus enlaces
  const destinationLinks = {
    cancún: "https://staywuw.site/es/mx/cancun-mexico/hotels",
    cancun: "https://staywuw.site/es/mx/cancun-mexico/hotels",
    acapulco: "https://staywuw.site/es/mx/acapulco-mexico/tours",
    "isla mujeres": "https://staywuw.site/es/mx/isla-mujeres-mexico/tours",
    "riviera maya": "https://staywuw.site/es/mx/riviera-maya-playa-del-carmen-mexico/tours",
    "playa del carmen": "https://staywuw.site/es/mx/riviera-maya-playa-del-carmen-mexico/tours",
    "costa mujeres": "https://staywuw.site/es/mx/costa-mujeres-mexico/tours",
  }

  const hasClickableDestination = useCallback((text, type) => {
    // Validar que text existe y es string
    if (!text || typeof text !== "string") {
      return false
    }

    if (type !== "hotel" && type !== "tour") return false

    return Object.keys(destinationLinks).some((destination) => {
      // Validar que destination existe antes de usar toLowerCase
      if (!destination || typeof destination !== "string") return false
      return text.toLowerCase().includes(destination.toLowerCase())
    })
  }, [])

  return { hasClickableDestination }
}
