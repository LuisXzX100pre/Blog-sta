export default function GalleryPicsCollage({ data }) {
  if (!data) {
    return null
  }

  return (
    <div className="flex w-full h-[300px] md:h-[383px] gap-2 mt-6 max-lg:flex-col max-lg:h-auto">
      <div className="w-full lg:w-1/2 h-full max-lg:h-[200px]">
        <img
          src={data.largeImage?.src || "/placeholder.svg"}
          alt={data.largeImage?.alt?.es || "Imagen principal"}
          className="w-full h-full object-cover rounded-xl border border-gray-200 shadow-sm"
        />
      </div>
      <div className="w-full lg:w-1/2 h-full grid grid-cols-2 gap-2 max-lg:h-[200px]">
        {data.smallImages &&
          data.smallImages.map((image) => (
            <div key={image.id} className="w-full h-full">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt?.es || "Imagen de galería"}
                className="object-cover rounded-xl border border-gray-200 shadow-sm w-full h-full"
              />
            </div>
          ))}
      </div>
    </div>
  )
}
