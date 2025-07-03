import ClickableText from "./ClickableText"

export default function Title({ title, type = "tour" }) {
  // Función para normalizar el título de forma segura
  const normalizeTitle = (titleData) => {
    if (!titleData) return "Título no disponible"
    
    if (typeof titleData === "string") return titleData
    
    if (typeof titleData === "object" && titleData !== null) {
      // Si es un objeto con type y text
      if (titleData.type && titleData.text) {
        return titleData.text
      }
      // Si es un objeto con idiomas
      if (titleData.es || titleData.en) {
        return titleData.es || titleData.en
      }
      // Si es cualquier otro objeto, convertir a string
      return JSON.stringify(titleData)
    }
    
    return String(titleData)
  }

  return (
    <div>
      <ClickableText 
        text={normalizeTitle(title)} 
        type={type} 
        className="m-b font-bold text-center text-fs-32" 
        as="h1" 
      />
    </div>
  )
}
