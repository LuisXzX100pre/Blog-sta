export default function GalleryPicsCollage({ data }) {
  if (!data) {
    return null
  }

  return (
    <div className="flex w-full h-[383px] gap-2 mt-6 max-lg:flex-col max-lg:h-auto">
      <div className="w-1/2 h-full max-xl:w-[40%] max-lg:w-full">
        <img
          src={data.largeImage?.src || "/placeholder.svg"}
          alt={data.largeImage?.alt?.es || "Imagen principal"}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-1/2 max-xl:w-[60%] h-full grid grid-cols-2 gap-2 max-lg:w-full">
        {data.smallImages &&
          data.smallImages.map((image) => (
            <div key={image.id} className="w-full h-[187px]">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt?.es || "Imagen de galería"}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          ))}
      </div>
    </div>
  )
}
