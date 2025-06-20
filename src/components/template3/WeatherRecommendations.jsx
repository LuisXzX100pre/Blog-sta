import Title2 from "../general/Title2"
import Paragraph from "../general/Paragraph"

export default function WeatherRecommendations({ data }) {
  if (!data || !data.contentBlocks) {
    console.log("WeatherRecommendations: datos insuficientes", data)
    return null
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
        {mainTitle && <Title2 title={mainTitle.text.es} />}
        <hr className="my-[15.5px]" />
        <div className="mb-11">{introductionParagraph && <Paragraph text={introductionParagraph.text.es} />}</div>

        <Title2 title="Información climática general" />
        <hr className="my-[15.5px]" />
        <Paragraph text="El clima es uno de los factores más importantes a considerar al planificar tu viaje. Conocer las condiciones meteorológicas te ayudará a prepararte mejor y disfrutar al máximo de tu experiencia." />

        <div className="flex flex-col gap-4 my-8">
          <h4 className="text-fs-20 m-s-b">Temporadas del año</h4>

          {drySeasonInfo && (
            <>
              <h4 className="text-fs-16 m-s-b">{drySeasonInfo.seasonTitle.es}</h4>
              <div className="flex flex-col gap-5">
                {drySeasonInfo.paragraphs.map((paragraph, index) => (
                  <Paragraph key={index} text={paragraph.es} />
                ))}
              </div>
            </>
          )}

          {rainySeasonInfo && (
            <>
              <h4 className="text-fs-16 m-s-b">{rainySeasonInfo.seasonTitle.es}</h4>
              <div className="flex flex-col gap-5">
                {rainySeasonInfo.paragraphs.map((paragraph, index) => (
                  <Paragraph key={index} text={paragraph.es} />
                ))}
              </div>
            </>
          )}
        </div>

        <h4 className="text-fs-20 m-s-b my-4">Patrones climáticos</h4>
        <div className="flex flex-col gap-5">
          <Paragraph text="Es importante conocer los patrones climáticos del destino para planificar mejor las actividades y el equipaje necesario para el viaje." />
        </div>

        <h4 className="text-fs-20 m-s-b my-4">Consideraciones especiales</h4>
        <div className="flex flex-col gap-5 mb-4">
          <Paragraph text="Algunos destinos pueden tener condiciones climáticas especiales durante ciertas épocas del año. Es recomendable estar informado sobre estas situaciones para tomar las precauciones necesarias." />
        </div>

       <img
          src="https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Paisaje del destino"
          style={{ borderRadius: "0.5em" }}
        className="h-[437px] object-cover w-full"
        />

        <div className="italic m-s-b text-fs-12 text-gry-100 mt-4">Vista panorámica del destino</div>
      </div>
    </>
  )
}
