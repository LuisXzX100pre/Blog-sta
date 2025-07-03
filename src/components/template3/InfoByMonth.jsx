"use client"

import ClickableText from "../general/ClickableText"

export default function InfoByMonth({ data, type = "tour", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Solo usar datos directos del Template 3
  if (!data?.seasons || !Array.isArray(data.seasons) || data.seasons.length === 0) {
    return null
  }

  return (
    <div className="my-11">
      {data.seasons.map((season, seasonIndex) => (
        <div key={season.id} className="mb-12">
          <ClickableText text={getText(season.seasonTitle)} type={type} className="text-fs-22 m-b mb-6" as="h2" />

          {season.seasonIntroductionParagraphs && (
            <div className="mb-8 space-y-4">
              {season.seasonIntroductionParagraphs.map((paragraph, index) => (
                <p key={index} className="text-gry-100 text-fs-14 m-m">
                  {getText(paragraph)}
                </p>
              ))}
            </div>
          )}

          {season.monthsData && season.monthsData.length > 0 && (
            <div className="space-y-8">
              {season.monthsData.map((month, monthIndex) => (
                // --- ✅ CORRECCIÓN CLAVE ---
                // Se eliminó el borde naranja (`border-l-4 border-or-100`)
                <div key={month.id} className="pl-6">
                  <ClickableText
                    text={getText(month.monthTitle)}
                    type={type}
                    className="text-fs-18 m-s-b mb-4"
                    as="h3"
                  />

                  {month.stats && month.stats.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {month.stats.map((stat, statIndex) => (
                        <div key={stat.id} className="flex items-center gap-2">
                          <span className="text-fs-16">{stat.icon}</span>
                          <span className="text-fs-14 m-m text-gry-100">{getText(stat.label)}</span>
                          <span className="text-fs-14 m-s-b">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {month.descriptionParagraphs && (
                    <div className="space-y-4 mb-4">
                      {month.descriptionParagraphs.map((paragraph, index) => (
                        <p key={index} className="text-gry-100 text-fs-14 m-m">
                          {getText(paragraph)}
                        </p>
                      ))}
                    </div>
                  )}

                  {month.image && (
                    <div className="mt-4">
                      <img
                        src={month.image.src || "/placeholder.svg"}
                        alt={getText(month.image.alt) || getText(month.monthTitle)}
                        className="w-full h-[300px] object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
