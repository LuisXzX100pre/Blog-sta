"use client"

import ClickableText from "../general/ClickableText"

export default function FromToBlog({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Solo usar datos directos del Template 1
  if (!data?.routes || !Array.isArray(data.routes) || data.routes.length === 0) {
    return null
  }

  return (
    <div className="my-11">
      <ClickableText text={getText(data.title)} type={type} className="text-fs-20 m-b mb-4" as="h3" />

      <div className="flex flex-col gap-6 text-gry-100 text-fs-14 m-m mb-6">
        {data.introductionParagraphs?.map((paragraph, index) => (
          <p key={index}>{getText(paragraph)}</p>
        ))}
      </div>

      <div className="space-y-6 mb-8">
        {data.routes.map((route) => (
          <div key={route.id} className="border-l-4 border-or-100 pl-4">
            <ClickableText text={getText(route.title)} type={type} className="text-fs-16 m-s-b mb-2" as="h4" />
            <p className="text-gry-100 text-fs-14 m-m mb-2">{getText(route.description)}</p>
            {route.duration && (
              <p className="text-fs-12 text-gry-100 italic">
                {lang === "en" ? "Duration: " : "Duración: "}
                {route.duration}
              </p>
            )}
          </div>
        ))}
      </div>

      {data.mainImage && (
        <div className="w-full h-[300px] md:h-[437px]">
          <img
            src={data.mainImage.src || "/placeholder.svg"}
            alt={getText(data.mainImage.alt) || (lang === "en" ? "Transportation routes" : "Rutas de transporte")}
            className="w-full h-full object-cover rounded-xl border border-gray-200 shadow-sm"
          />
        </div>
      )}
    </div>
  )
}
