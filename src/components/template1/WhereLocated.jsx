"use client"

import ClickableText from "../general/ClickableText"

export default function WhereLocated({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Solo usar datos directos del Template 1
  if (!data?.title || !data?.introductionParagraphs) {
    return null
  }

  return (
    <>
      <div className="my-11 flex flex-col gap-[18px]">
        <ClickableText text={getText(data.title)} type={type} className="text-fs-20 m-b" as="h3" />
        <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14">
          {data.introductionParagraphs.map((paragraph, index) => (
            <p key={index}>{getText(paragraph)}</p>
          ))}
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

      {data.conclusionParagraph && (
        <div className="text-gry-100 text-fs-14 my-[44px]">{getText(data.conclusionParagraph)}</div>
      )}
    </>
  )
}
