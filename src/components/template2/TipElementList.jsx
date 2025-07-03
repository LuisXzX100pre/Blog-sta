export default function TipElementList({ tip, index, lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    if (typeof textObj === "object" && textObj !== null) {
      if (textObj.type && textObj.text) {
        return textObj.text
      }
      if (textObj.es || textObj.en) {
        return textObj[lang] || textObj.es || textObj.en
      }
      return JSON.stringify(textObj)
    }
    return String(textObj || "")
  }

  const tipText = getText(tip?.text) || getText(tip) || "Información no disponible"

  return (
    <li className="mb-4">
      <span className="m-s-b text-fs-16 text-[#eb741e]">{index + 1}. </span>
      <span className="m-m text-fs-14 text-gry-100">{tipText}</span>
    </li>
  )
}
