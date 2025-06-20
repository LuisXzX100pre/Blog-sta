"use client"

import { useCallback } from "react"

export function useClickableText() {
  const handleCancunClick = useCallback(() => {
    window.open("https://staywuw.site/es/mx/cancun-mexico/hotels", "_blank")
  }, [])

  const processText = useCallback((text, type) => {
    // Solo procesar si es tipo hotel y contiene "Cancún"
    if (type !== "hotel" || !text.toLowerCase().includes("cancún")) {
      return text
    }

    // Buscar todas las variaciones de "Cancún" (con y sin tilde, mayúsculas y minúsculas)
    const cancunRegex = /(cancún|cancun|Cancún|Cancun|CANCÚN|CANCUN)/gi

    return text.replace(cancunRegex, (match) => {
      return `<span 
        class="cancun-clickable" 
        onclick="window.open('https://staywuw.site/es/mx/cancun-mexico/hotels', '_blank')"
        role="button"
        tabindex="0"
        onkeydown="if(event.key==='Enter'||event.key===' '){window.open('https://staywuw.site/es/mx/cancun-mexico/hotels', '_blank')}"
      >${match}</span>`
    })
  }, [])

  return { processText, handleCancunClick }
}
