"use client"

import { useClickableText } from "../../hooks/useClickableText"

export default function ClickableText({ text, type = "tour", className = "", as: Component = "span" }) {
  const { hasClickableDestination } = useClickableText()

  // 🔧 FUNCIÓN PARA NORMALIZAR TEXTO DE FORMA SEGURA
  const normalizeText = (textData) => {
    if (!textData) return ""

    if (typeof textData === "string") return textData

    if (typeof textData === "object" && textData !== null) {
      // Si es un objeto con type y text
      if (textData.type && textData.text) {
        return textData.text
      }
      // Si es un objeto con idiomas
      if (textData.es || textData.en) {
        return textData.es || textData.en
      }
      // Si es cualquier otro objeto, convertir a string
      return JSON.stringify(textData)
    }

    return String(textData)
  }

  // Normalizar el texto antes de procesarlo
  const normalizedText = normalizeText(text)

  if (!normalizedText || typeof normalizedText !== "string") {
    return <Component className={className}>{normalizedText || ""}</Component>
  }

  const shouldMakeClickable = hasClickableDestination(normalizedText, type)

  if (!shouldMakeClickable) {
    return <Component className={className}>{normalizedText}</Component>
  }

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

  // Función para procesar el texto y crear elementos React
  const processTextToReact = (inputText) => {
    const processedText = inputText
    const elements = []
    let lastIndex = 0

    // Procesar cada destino
    Object.entries(destinationLinks).forEach(([destination, link]) => {
      const regex = new RegExp(`\\b(${destination.replace(/\s+/g, "\\s+")})\\b`, "gi")
      let match

      while ((match = regex.exec(processedText)) !== null) {
        // Agregar texto antes del match
        if (match.index > lastIndex) {
          elements.push(processedText.slice(lastIndex, match.index))
        }

        // Agregar el elemento clickeable
        elements.push(
          <span
            key={`${destination}-${match.index}`}
            className="destination-clickable"
            onClick={() => window.open(link, "_blank")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                window.open(link, "_blank")
              }
            }}
          >
            {match[0]}
          </span>,
        )

        lastIndex = match.index + match[0].length
      }
    })

    // Agregar texto restante
    if (lastIndex < processedText.length) {
      elements.push(processedText.slice(lastIndex))
    }

    return elements.length > 0 ? elements : [processedText]
  }

  const processedElements = processTextToReact(normalizedText)

  return <Component className={className}>{processedElements}</Component>
}
