"use client"

// Componente helper para renderizar texto de forma segura
export default function SafeText({ children, fallback = "" }) {
  const renderSafeText = (text) => {
    if (!text) return fallback

    if (typeof text === "string") return text

    if (typeof text === "object" && text !== null) {
      // Si es un objeto con type y text
      if (text.type && text.text) {
        return text.text
      }
      // Si es un objeto con idiomas
      if (text.es || text.en) {
        return text.es || text.en
      }
      // Si es cualquier otro objeto, convertir a string
      return JSON.stringify(text)
    }

    return String(text)
  }

  return <>{renderSafeText(children)}</>
}
