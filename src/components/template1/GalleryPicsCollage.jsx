"use client"

export default function GalleryPicsCollage({ data, lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // 🧠 LÓGICA INTELIGENTE: Adaptar datos de cualquier template
  let adaptedData = {
    largeImage: null,
    smallImages: [],
  }

  // 1️⃣ Si vienen datos directos de Template 1 (photoGallery)
  if (data?.largeImage && data?.smallImages) {
    adaptedData = data
    console.log("🎯 GalleryPicsCollage: Usando datos originales de Template 1")
  }
  // 2️⃣ Si vienen datos de Template 2 (placesToVisit)
  else if (data?.placesList) {
    const places = data.placesList.filter((place) => place.image)
    adaptedData = {
      largeImage: places[0]?.image || {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Imagen principal del destino",
      },
      smallImages: places.slice(1, 5).map((place, index) => ({
        id: `gallery_place_${index}`,
        src: place.image?.src || "/placeholder.svg?height=200&width=300",
        alt: place.image?.alt || place.title,
      })),
    }
    console.log("🔄 GalleryPicsCollage: Adaptando datos de Template 2 (placesToVisit)")
  }
  // 3️⃣ Si vienen datos de Template 3 (monthlyInfo)
  else if (data?.seasons) {
    const monthsData = data.seasons[0]?.monthsData || []
    const monthsWithImages = monthsData.filter((month) => month.image)
    adaptedData = {
      largeImage: monthsWithImages[0]?.image || {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Imagen principal del clima",
      },
      smallImages: monthsWithImages.slice(1, 5).map((month, index) => ({
        id: `gallery_month_${index}`,
        src: month.image?.src || "/placeholder.svg?height=200&width=300",
        alt: month.image?.alt || month.monthTitle,
      })),
    }
    console.log("🔄 GalleryPicsCollage: Adaptando datos de Template 3 (monthlyInfo)")
  }
  // 4️⃣ Fallback genérico
  else {
    adaptedData = {
      largeImage: {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Imagen principal del destino",
      },
      smallImages: [
        { id: "gallery_generic_1", src: "/placeholder.svg?height=200&width=300", alt: "Galería imagen 1" },
        { id: "gallery_generic_2", src: "/placeholder.svg?height=200&width=300", alt: "Galería imagen 2" },
        { id: "gallery_generic_3", src: "/placeholder.svg?height=200&width=300", alt: "Galería imagen 3" },
        { id: "gallery_generic_4", src: "/placeholder.svg?height=200&width=300", alt: "Galería imagen 4" },
      ],
    }
    console.log("⚠️ GalleryPicsCollage: Usando datos genéricos (fallback)")
  }

  if (!adaptedData.largeImage && (!adaptedData.smallImages || adaptedData.smallImages.length === 0)) {
    return null
  }

  return (
    <div className="flex w-full gap-2 mt-6 mb-10 flex-col lg:flex-row">
      {/* Imagen principal */}
      {adaptedData.largeImage && (
        <div className="w-full lg:w-1/2 aspect-[16/10]">
          <img
            src={adaptedData.largeImage.src || "/placeholder.svg"}
            alt={getText(adaptedData.largeImage.alt) || (lang === "en" ? "Main image" : "Imagen principal")}
            className="w-full h-full object-cover border border-gray-200 shadow-sm rounded-[0.5em]"
            loading="lazy"
          />
        </div>
      )}

      {/* Imágenes pequeñas */}
      {adaptedData.smallImages && adaptedData.smallImages.length > 0 && (
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2">
          {adaptedData.smallImages.map((image) => (
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
      )}
    </div>
  )
}
