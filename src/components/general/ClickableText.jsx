"use client"

import { useClickableText } from "../../hooks/useClickableText"

export default function ClickableText({ text, type = "tour", className = "", as: Component = "span" }) {
  const { hasClickableDestination } = useClickableText()

  if (!text || typeof text !== "string") {
    return <Component className={className}>{text || ""}</Component>
  }

  const shouldMakeClickable = hasClickableDestination(text, type)

  if (!shouldMakeClickable) {
    return <Component className={className}>{text}</Component>
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

  const processedElements = processTextToReact(text)

  return <Component className={className}>{processedElements}</Component>
}
