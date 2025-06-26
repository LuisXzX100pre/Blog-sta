"use client"

export default function GalleryPicsCollage({ data, lang = "es" }) {
  if (!data) {
    return null
  }

  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  return (
    <div className="flex w-full gap-2 mt-6 mb-10 flex-col lg:flex-row">
      {/* Imagen principal */}
      <div className="w-full lg:w-1/2 aspect-[16/10]">
        <img
          src={data.largeImage?.src || "/placeholder.svg"}
          alt={getText(data.largeImage?.alt) || (lang === "en" ? "Main image" : "Imagen principal")}
          className="w-full h-full object-cover border border-gray-200 shadow-sm rounded-[0.5em]"
          loading="lazy"
        />
      </div>

      {/* Imágenes pequeñas */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2">
        {data.smallImages &&
          data.smallImages.map((image) => (
            <div key={image.id} className="aspect-[16/10]">
              <img
                src={image.src || "/placeholder.svg"}
                alt={getText(image.alt) || (lang === "en" ? "Gallery image" : "Imagen de galería")}
                className="w-full h-full object-cover border border-gray-200 shadow-sm rounded-[0.5em]"
                loading="lazy"
              />
            </div>
          ))}
      </div>
    </div>
  )
}
