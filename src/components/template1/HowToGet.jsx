import ClickableText from "../general/ClickableText"

export default function HowToGet({ data, type = "hotel" }) {
  // Verificar que data existe y tiene la estructura esperada
  if (!data || !data.sections || !data.sections[0]) {
    console.log("HowToGet: datos insuficientes", data)
    return <div>No hay información disponible sobre cómo llegar</div>
  }

  const mainSection = data.sections[0] // Sección principal
  const hotelZoneSection = data.sections[2] // Sección de zona hotelera

  return (
    <>
      {/* SECCIÓN PRINCIPAL: Cómo llegar desde Cancún */}
      <div className="flex justify-between max-md:flex-col max-md:gap-4">
        <div className="w-[417px] max-md:w-full">
          <ClickableText text={mainSection.title.es} type={type} className="text-fs-20 m-b mb-4" as="h3" />

          <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14">
            {mainSection.paragraphs &&
              mainSection.paragraphs.map((paragraph, index) => <p key={index}>{paragraph.es}</p>)}
          </div>
        </div>

        <div className="flex-1 max-md:w-full flex justify-center h-[475px] ml-8 max-md:ml-0">
          <img
            src={mainSection.image?.src || "/placeholder.svg"}
            alt={mainSection.image?.alt?.es || "Imagen de ubicación"}
            className="w-full h-full object-cover rounded-[0.5em]"
          />
        </div>
      </div>

      {/* INFORMACIÓN ADICIONAL */}
      <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14 my-8">
        {data.sections[1] &&
          data.sections[1].paragraphs &&
          data.sections[1].paragraphs.map((paragraph, index) => <p key={index}>{paragraph.es}</p>)}
      </div>

      {/* NUEVA SECCIÓN: Cómo llegar desde la Zona Hotelera */}
      {hotelZoneSection && (
        <div className="my-8">
          <ClickableText text={hotelZoneSection.title.es} type={type} className="text-fs-20 m-b mb-4" as="h3" />

          <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14">
            {hotelZoneSection.paragraphs &&
              hotelZoneSection.paragraphs.map((paragraph, index) => {
                if (paragraph.type === "highlighted") {
                  return (
                    <p key={index} className="bg-yw-100 p-4 rounded-[0.5em] font-medium">
                      {paragraph.text.es}
                    </p>
                  )
                }
                return <p key={index}>{paragraph.text?.es || paragraph.es}</p>
              })}
          </div>

          {hotelZoneSection.link && (
            <div className="mt-4">
              <a href={hotelZoneSection.link.url} className="text-bl-100 hover:underline">
                {hotelZoneSection.link.text.es}
              </a>
            </div>
          )}
        </div>
      )}

      {/* CITA DESTACADA si existe */}
      {data.sections.find((section) => section.id === "htg_main_quote_loc") && (
        <div className="flex gap-1 my-6">
          <span className="m-s-b text-gry-100 text-fs-32">❝</span>
          <span className="m-m text-gry-100 text-fs-20 italic">
            {data.sections.find((section) => section.id === "htg_main_quote_loc").text.es}
          </span>
          <span className="m-s-b text-gry-100 text-fs-32"> ❞</span>
        </div>
      )}

      {/* IMAGEN DEL MAPA al final */}
      {data.sections.find((section) => section.id === "htg_main_map_image_loc") && (
        <div className="h-[437px] w-full my-11">
          <img
            src={
              data.sections.find((section) => section.id === "htg_main_map_image_loc").image?.src || "/placeholder.svg"
            }
            alt={
              data.sections.find((section) => section.id === "htg_main_map_image_loc").image?.alt?.es ||
              "Mapa de ubicación"
            }
            className="w-full h-full object-cover rounded-[0.5em]"
          />
        </div>
      )}
    </>
  )
}
