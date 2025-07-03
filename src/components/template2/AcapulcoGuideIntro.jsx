"use client"

import Title from "../general/Titles"
import Paragraph from "../general/Paragraph"

export default function AcapulcoGuideIntro({ data, type = "tour", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    if (typeof textObj === "object" && textObj !== null) {
      if (textObj.type && textObj.text) {
        return textObj.text
      }
      return textObj?.[lang] || textObj?.es || textObj?.en || ""
    }
    return String(textObj || "")
  }

  if (!data?.mainTitle) {
    return null
  }

  return (
    <div className="mb-12">
      {/* Título principal */}
      <div className="mb-6">
        <Title title={getText(data.mainTitle)} type={type} />
      </div>

      {/* Subtítulo */}
      {data.subtitle && (
        <div className="mb-8">
          <h2 className="text-center text-fs-18 m-s-b text-black-100 leading-relaxed px-4">{getText(data.subtitle)}</h2>
        </div>
      )}

      {/* Imagen hero */}
      {data.heroImage && (
        <div className="mb-8">
          <img
            src={data.heroImage || "/placeholder.svg"}
            alt={getText(data.mainTitle)}
            className="rounded-lg w-full h-[300px] object-cover"
          />
        </div>
      )}

      {/* Párrafos de introducción */}
      {data.introductionParagraphs && (
        <div className="flex flex-col gap-5">
          {data.introductionParagraphs.map((paragraph, index) => (
            <Paragraph key={index} text={getText(paragraph)} />
          ))}
        </div>
      )}
    </div>
  )
}
