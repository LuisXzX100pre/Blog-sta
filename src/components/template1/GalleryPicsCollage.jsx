export default function GalleryPicsCollage({ data }) {
  if (!data) {
    return null
  }

  return (
    <div className="flex w-full gap-2 mt-6 mb-10 flex-col lg:flex-row">
      {/* Imagen principal */}
      <div className="w-full lg:w-1/2 aspect-[16/10]">
        <img
          src={data.largeImage?.src || "/placeholder.svg"}
          alt={data.largeImage?.alt?.es || "Imagen principal"}
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
                alt={image.alt?.es || "Imagen de galería"}
                className="w-full h-full object-cover border border-gray-200 shadow-sm rounded-[0.5em]"
                loading="lazy"
              />
            </div>
          ))}
      </div>
    </div>
  )
}
