import Title2 from "../general/Title2"
import Paragraph from "../general/Paragraph"

export default function WeatherRecommendations({ data, type = "hotel", lang = "es" }) {
  if (!data || !data.contentBlocks) {
    console.log("WeatherRecommendations: datos insuficientes", data)
    return null
  }

  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Extraer los bloques por tipo
  const mainTitle = data.contentBlocks.find((block) => block.type === "mainTitle")
  const introductionParagraph = data.contentBlocks.find((block) => block.type === "paragraph")
  const drySeasonInfo = data.contentBlocks.find((block) => block.type === "seasonInfo" && block.id === "gci_season_dry")
  const rainySeasonInfo = data.contentBlocks.find(
    (block) => block.type === "seasonInfo" && block.id === "gci_season_rainy",
  )

  return (
    <>
      <div className="mt-9">
        {mainTitle && <Title2 title={getText(mainTitle.text)} type={type} />}
        <hr className="my-[15.5px]" />
        <div className="mb-11">{introductionParagraph && <Paragraph text={getText(introductionParagraph.text)} />}</div>

        <Title2 title={lang === "en" ? "General climate information" : "Información climática general"} type={type} />
        <hr className="my-[15.5px]" />
        <Paragraph
          text={
            lang === "en"
              ? "Climate is one of the most important factors to consider when planning your trip. Knowing the weather conditions will help you prepare better and make the most of your experience."
              : "El clima es uno de los factores más importantes a considerar al planificar tu viaje. Conocer las condiciones meteorológicas te ayudará a prepararte mejor y disfrutar al máximo de tu experiencia."
          }
        />

        <div className="flex flex-col gap-4 my-8">
          <h4 className="text-fs-20 m-s-b">{lang === "en" ? "Seasons of the year" : "Temporadas del año"}</h4>

          {drySeasonInfo && (
            <>
              <h4 className="text-fs-16 m-s-b">{getText(drySeasonInfo.seasonTitle)}</h4>
              <div className="flex flex-col gap-5">
                {drySeasonInfo.paragraphs.map((paragraph, index) => (
                  <Paragraph key={index} text={getText(paragraph)} />
                ))}
              </div>
            </>
          )}

          {rainySeasonInfo && (
            <>
              <h4 className="text-fs-16 m-s-b">{getText(rainySeasonInfo.seasonTitle)}</h4>
              <div className="flex flex-col gap-5">
                {rainySeasonInfo.paragraphs.map((paragraph, index) => (
                  <Paragraph key={index} text={getText(paragraph)} />
                ))}
              </div>
            </>
          )}
        </div>

        <h4 className="text-fs-20 m-s-b my-4">{lang === "en" ? "Climate patterns" : "Patrones climáticos"}</h4>
        <div className="flex flex-col gap-5">
          <Paragraph
            text={
              lang === "en"
                ? "It is important to know the climate patterns of the destination to better plan activities and the necessary luggage for the trip."
                : "Es importante conocer los patrones climáticos del destino para planificar mejor las actividades y el equipaje necesario para el viaje."
            }
          />
        </div>

        <h4 className="text-fs-20 m-s-b my-4">
          {lang === "en" ? "Special considerations" : "Consideraciones especiales"}
        </h4>
        <div className="flex flex-col gap-5 mb-4">
          <Paragraph
            text={
              lang === "en"
                ? "Some destinations may have special weather conditions during certain times of the year. It is recommended to be informed about these situations to take the necessary precautions."
                : "Algunos destinos pueden tener condiciones climáticas especiales durante ciertas épocas del año. Es recomendable estar informado sobre estas situaciones para tomar las precauciones necesarias."
            }
          />
        </div>

        <img
          src="https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt={lang === "en" ? "Destination landscape" : "Paisaje del destino"}
          style={{ borderRadius: "0.5em" }}
          className="h-[437px] object-cover w-full"
        />

        <div className="italic m-s-b text-fs-12 text-gry-100 mt-4">
          {lang === "en" ? "Panoramic view of the destination" : "Vista panorámica del destino"}
        </div>
      </div>
    </>
  )
}
