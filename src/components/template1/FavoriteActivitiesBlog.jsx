"use client"

import ClickableText from "../general/ClickableText"

export default function FavoriteActivitiesBlog({ data, type = "hotel", lang = "es" }) {
  if (!data) {
    console.log("FavoriteActivitiesBlog: datos insuficientes", data)
    return null
  }

  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  return (
    <div className="my-11">
      <ClickableText
        text={getText(data.sectionTitle) || (lang === "en" ? "Recommended activities" : "Actividades recomendadas")}
        type={type}
        className="text-fs-20 m-b mb-4"
        as="h3"
      />

      <div className="flex flex-col gap-6 text-gry-100 text-fs-14 m-m mb-6">
        {data.introductionParagraphs &&
          data.introductionParagraphs.map((paragraph, index) => <p key={index}>{getText(paragraph)}</p>)}
      </div>

      {data.activities && data.activities.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {data.activities.map((activity, index) => (
            <div key={index} className="space-y-4">
              <ClickableText text={getText(activity.title)} type={type} className="text-fs-16 m-s-b" as="h4" />
              <p className="text-gry-100 text-fs-14 m-m">{getText(activity.description)}</p>
            </div>
          ))}
        </div>
      )}

      {data.mainImage && (
        <div className="w-full h-[300px] md:h-[437px]">
          <img
            src={data.mainImage.src || "/placeholder.svg"}
            alt={getText(data.mainImage.alt) || (lang === "en" ? "Destination activities" : "Actividades del destino")}
            className="w-full h-full object-cover rounded-xl border border-gray-200 shadow-sm"
          />
        </div>
      )}
    </div>
  )
}
