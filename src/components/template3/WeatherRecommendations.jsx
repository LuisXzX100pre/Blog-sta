"use client"

import ClickableText from "../general/ClickableText"

export default function WeatherRecommendations({ data, type = "tour", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Solo usar datos directos del Template 3
  if (!data?.title) {
    return null
  }

  return (
    <div className="my-11">
      <ClickableText text={getText(data.title)} type={type} className="text-fs-24 m-b mb-6" as="h2" />

      {data.introduction && <p className="text-gry-100 text-fs-14 m-m mb-8">{getText(data.introduction)}</p>}

      {data.climateCharacteristics && (
        <div className="mb-8">
          <ClickableText
            text={getText(data.climateCharacteristics.title)}
            type={type}
            className="text-fs-20 m-s-b mb-4"
            as="h3"
          />
          <p className="text-gry-100 text-fs-14 m-m mb-6">{getText(data.climateCharacteristics.description)}</p>

          {data.climateCharacteristics.seasons && (
            <div className="space-y-6">
              <h4 className="text-fs-18 m-s-b">{getText(data.climateCharacteristics.seasons.title)}</h4>

              {data.climateCharacteristics.seasons.drySeasonInfo && (
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="text-fs-16 m-s-b mb-2">
                    {getText(data.climateCharacteristics.seasons.drySeasonInfo.title)}
                  </h5>
                  <p className="text-gry-100 text-fs-14 m-m mb-2">
                    {getText(data.climateCharacteristics.seasons.drySeasonInfo.description)}
                  </p>
                  {data.climateCharacteristics.seasons.drySeasonInfo.additionalInfo && (
                    <p className="text-gry-100 text-fs-14 m-m">
                      {getText(data.climateCharacteristics.seasons.drySeasonInfo.additionalInfo)}
                    </p>
                  )}
                </div>
              )}

              {data.climateCharacteristics.seasons.rainySeasonInfo && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="text-fs-16 m-s-b mb-2">
                    {getText(data.climateCharacteristics.seasons.rainySeasonInfo.title)}
                  </h5>
                  <p className="text-gry-100 text-fs-14 m-m mb-2">
                    {getText(data.climateCharacteristics.seasons.rainySeasonInfo.description)}
                  </p>
                  {data.climateCharacteristics.seasons.rainySeasonInfo.warnings && (
                    <p className="text-gry-100 text-fs-14 m-m mb-2">
                      {getText(data.climateCharacteristics.seasons.rainySeasonInfo.warnings)}
                    </p>
                  )}
                  {data.climateCharacteristics.seasons.rainySeasonInfo.benefits && (
                    <p className="text-gry-100 text-fs-14 m-m">
                      {getText(data.climateCharacteristics.seasons.rainySeasonInfo.benefits)}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {data.climateCharacteristics.hurricaneInfo && (
            <div className="bg-red-50 p-4 rounded-lg mt-6">
              <h4 className="text-fs-18 m-s-b mb-2">{getText(data.climateCharacteristics.hurricaneInfo.title)}</h4>
              <p className="text-gry-100 text-fs-14 m-m mb-2">
                {getText(data.climateCharacteristics.hurricaneInfo.description)}
              </p>
              <p className="text-gry-100 text-fs-14 m-m mb-2">
                {getText(data.climateCharacteristics.hurricaneInfo.recommendations)}
              </p>
              <p className="text-gry-100 text-fs-14 m-m mb-2">
                {getText(data.climateCharacteristics.hurricaneInfo.temperatures)}
              </p>
              <p className="text-gry-100 text-fs-14 m-m">{getText(data.climateCharacteristics.hurricaneInfo.safety)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
