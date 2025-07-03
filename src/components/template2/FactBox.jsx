"use client"

export default function FactBox({ data, lang = "es" }) {
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

  // Solo usar datos directos del Template 2
  if (!data?.title || !data?.fact) {
    return null
  }

  return (
    <div className="bg-gry-50 my-6 rounded-lg">
      <div className="p-4">
        <p className="m-s-b mb-4 text-fs-14 text-[#1a202c]">{getText(data.title)}</p>
        <p className="text-gray-600 text-justify m-m text-fs-14">{getText(data.fact)}</p>
      </div>
    </div>
  )
}
