"use client"

import ClickableText from "../general/ClickableText"

export default function FavoriteActivitiesBlog({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Solo usar datos directos del Template 1
  if (!data?.activities || !Array.isArray(data.activities) || data.activities.length === 0) {
    return null
  }

  return (
    <div className="my-11">
      <ClickableText text={getText(data.sectionTitle)} type={type} className="text-fs-20 m-b mb-4" as="h3" />

      <div className="flex flex-col gap-6 text-gry-100 text-fs-14 m-m mb-6">
        {data.introductionParagraphs?.map((paragraph, index) => (
          <p key={index}>{getText(paragraph)}</p>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {data.activities.map((activity, index) => (
          <div key={index} className="space-y-4">
            <ClickableText text={getText(activity.title)} type={type} className="text-fs-16 m-s-b" as="h4" />
            <p className="text-gry-100 text-fs-14 m-m">{getText(activity.description)}</p>
          </div>
        ))}
      </div>

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
