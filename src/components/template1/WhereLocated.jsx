"use client"

import ClickableText from "../general/ClickableText"

export default function WhereLocated({ data, type = "hotel", lang = "es" }) {
  if (!data) {
    console.log("WhereLocated: datos insuficientes", data)
    return null
  }

  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  return (
    <>
      <div className="my-11 flex flex-col gap-[18px]">
        <ClickableText
          text={getText(data.title) || (lang === "en" ? "Destination location" : "Ubicación del destino")}
          type={type}
          className="text-fs-20 m-b"
          as="h3"
        />
        <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14">
          {data.introductionParagraphs &&
            data.introductionParagraphs.map((paragraph, index) => <p key={index}>{getText(paragraph)}</p>)}
        </div>

        {data.mapSection && (
          <>
            <div className="w-full h-[437px] mt-7">
              <img
                src={data.mapSection.image?.src || "/placeholder.svg"}
                alt={getText(data.mapSection.image?.alt) || (lang === "en" ? "Location map" : "Mapa de ubicación")}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <span className="text-fs-12 text-gry-100 m-s-b">{getText(data.mapSection.caption)}</span>
          </>
        )}
      </div>

      {data.galleryImages && data.galleryImages.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {data.galleryImages.map((image, index) => (
            <div key={image.id || index} className="h-[200px]">
              <img
                src={image.src || "/placeholder.svg?height=200&width=300"}
                alt={getText(image.alt) || `${lang === "en" ? "image" : "imagen"} ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      )}

      {data.conclusionParagraph && (
        <div className="text-gry-100 text-fs-14 my-[44px]">{getText(data.conclusionParagraph)}</div>
      )}
    </>
  )
}
