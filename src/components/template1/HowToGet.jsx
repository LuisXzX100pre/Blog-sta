export default function HowToGet({ data }) {
  // Verificar que data existe y tiene la estructura esperada
  if (!data || !data.sections || !data.sections[0]) {
    console.log("HowToGet: datos insuficientes", data)
    return <div>No hay información disponible sobre cómo llegar</div>
  }

  const section = data.sections[0]

  return (
    <>
      <div className="flex justify-between max-md:flex-col max-md:gap-4">
        <div className="w-[417px] max-md:w-full">
          <h3 className="text-fs-20 m-b mb-4">{section.title.es}</h3>

          <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14">
            {section.paragraphs && section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph.es}</p>)}
          </div>
        </div>

        <div className="w-1/2 max-md:w-full flex justify-center h-[475px]">
          <img
            src={section.image?.src || "/placeholder.svg"}
            alt={section.image?.alt?.es || "Imagen de ubicación"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14 my-8">
        {/* Verificar si additionalInfo existe antes de mapearlo */}
        {data.additionalInfo && data.additionalInfo.map((info, index) => <p key={index}>{info.es}</p>)}
      </div>

      {/* Verificar si hotelZoneSection existe antes de renderizarlo */}
      {data.hotelZoneSection && (
        <div className="my-4">
          <h3 className="text-fs-20 m-b">{data.hotelZoneSection.title.es}</h3>

          <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14 mb-8 mt-4">
            {data.hotelZoneSection.paragraphs &&
              data.hotelZoneSection.paragraphs.map((paragraph, index) => <p key={index}>{paragraph.es}</p>)}

            {data.hotelZoneSection.quote && <p className="bg-yw-100 p-4 rounded">{data.hotelZoneSection.quote.es}</p>}

            <a href="https://staywuw.com/" className="cursor-pointer text-bl-100">
              https://staywuw.com/
            </a>
          </div>
        </div>
      )}

      {data.hotelZoneSection && data.hotelZoneSection.quote && (
        <div className="flex gap-1">
          <span className="m-s-b text-gry-100 text-fs-32">❝</span>
          <span className="m-m text-gry-100 text-fs-20 italic">{data.hotelZoneSection.quote.es}</span>
          <span className="m-s-b text-gry-100 text-fs-32"> ❞</span>
        </div>
      )}

      <div className="h-[437px] w-full my-11">
        <img
          src={section.image?.src || "/placeholder.svg"}
          alt="location how to get"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </>
  )
}
