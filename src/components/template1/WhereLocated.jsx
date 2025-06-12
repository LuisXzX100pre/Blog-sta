export default function WhereLocated({ data }) {
  if (!data) {
    console.log("WhereLocated: datos insuficientes", data)
    return null
  }

  return (
    <>
      <div className="my-11 flex flex-col gap-[18px]">
        <h3 className="text-fs-20 m-b ">{data.title?.es || "Ubicación del destino"}</h3>
        <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14">
          {data.introductionParagraphs &&
            data.introductionParagraphs.map((paragraph, index) => <p key={index}>{paragraph.es}</p>)}
        </div>

        {data.mapSection && (
          <>
            <div className="w-full h-[437px] mt-7">
              <img
                src={data.mapSection.image?.src || "/placeholder.svg"}
                alt={data.mapSection.image?.alt?.es || "Mapa de ubicación"}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <span className="text-fs-12 text-gry-100 m-s-b">{data.mapSection.caption?.es}</span>
          </>
        )}
      </div>

      {/* Si no hay galleryImages, no renderizamos esta sección */}
      {data.galleryImages && data.galleryImages.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {data.galleryImages.map((image, index) => (
            <div key={image.id || index} className="h-[200px]">
              <img
                src={image.src || "/placeholder.svg?height=200&width=300"}
                alt={image.alt?.es || `imagen ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      )}

      {data.conclusionParagraph && (
        <div className="text-gry-100 text-fs-14 my-[44px]">{data.conclusionParagraph.es}</div>
      )}
    </>
  )
}
