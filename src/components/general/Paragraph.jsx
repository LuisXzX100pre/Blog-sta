export default function Paragraph({ text }) {
  // Función para normalizar el texto de forma segura
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

  return (
    <>
      <div>
        <p className="text-justify text-gry-100 m-m text-fs-14">
          {normalizeText(text)}
        </p>
      </div>
    </>
  );
}
