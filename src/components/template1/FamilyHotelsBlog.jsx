"use client"

import ClickableText from "../general/ClickableText"

export default function FamilyHotelsBlog({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // 🧠 LÓGICA INTELIGENTE: Adaptar datos de cualquier template
  let adaptedData = {
    title: "",
    introductionParagraphs: [],
    hotelList: [],
    mainImage: null,
  }

  // 1️⃣ Si vienen datos directos de Template 1 (familyHotels)
  if (data?.hotelList && Array.isArray(data.hotelList)) {
    adaptedData = data
    console.log("🎯 FamilyHotelsBlog: Usando datos originales de Template 1")
  }
  // 2️⃣ Si vienen datos de Template 2 (placesToVisit)
  else if (data?.placesList) {
    adaptedData = {
      title: "Hoteles cerca de las principales atracciones",
      introductionParagraphs: [
        "Encuentra los mejores hoteles ubicados estratégicamente cerca de las principales atracciones.",
        `Con ${data.placesList.length} lugares principales para visitar, estos hoteles te ofrecen la ubicación perfecta.`,
      ],
      hotelList: data.placesList.slice(0, 6).map((place, index) => ({
        id: `hotel_near_${place.id}`,
        name: `Hotel cerca de ${place.title}`,
      })),
      mainImage: data.placesList[0]?.image || {
        src: "/placeholder.svg?height=437&width=600",
        alt: "Hoteles recomendados",
      },
    }
    console.log("🔄 FamilyHotelsBlog: Adaptando datos de Template 2 (placesToVisit)")
  }
  // 3️⃣ Si vienen datos de Template 3 (monthlyInfo)
  else if (data?.seasons) {
    const monthsData = data.seasons[0]?.monthsData || []
    adaptedData = {
      title: "Hoteles recomendados por temporada",
      introductionParagraphs: [
        "Dependiendo de la época del año, algunos hoteles ofrecen mejores experiencias.",
        "Conoce nuestras recomendaciones hoteleras según la temporada de tu viaje.",
      ],
      hotelList: monthsData.slice(0, 4).map((month, index) => ({
        id: `hotel_season_${index}`,
        name: `Hotel ideal para ${month.monthTitle}`,
      })),
      mainImage: {
        src: "/placeholder.svg?height=437&width=600",
        alt: "Hoteles por temporada",
      },
    }
    console.log("🔄 FamilyHotelsBlog: Adaptando datos de Template 3 (monthlyInfo)")
  }
  // 4️⃣ Fallback genérico
  else {
    adaptedData = {
      title: "Hoteles recomendados",
      introductionParagraphs: [
        "Descubre los mejores hoteles para tu estancia en este increíble destino.",
        "Cada opción ha sido seleccionada por su calidad, ubicación y servicios.",
      ],
      hotelList: [
        { id: "hotel_generic_1", name: "Hotel Boutique Central" },
        { id: "hotel_generic_2", name: "Resort Familiar Premium" },
        { id: "hotel_generic_3", name: "Hotel Económico Confortable" },
        { id: "hotel_generic_4", name: "Suite Ejecutiva Moderna" },
      ],
      mainImage: {
        src: "/placeholder.svg?height=437&width=600",
        alt: "Hoteles recomendados",
      },
    }
    console.log("⚠️ FamilyHotelsBlog: Usando datos genéricos (fallback)")
  }

  if (!adaptedData.hotelList || adaptedData.hotelList.length === 0) {
    console.log("FamilyHotelsBlog: No hay hoteles para mostrar")
    return null
  }

  return (
    <div className="my-11">
      <ClickableText text={getText(adaptedData.title)} type={type} className="text-fs-20 m-b mb-4" as="h3" />

      <div className="flex flex-col gap-6 text-gry-100 text-fs-14 m-m mb-6">
        {adaptedData.introductionParagraphs.map((paragraph, index) => (
          <p key={index}>{getText(paragraph)}</p>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {adaptedData.hotelList.map((hotel, index) => (
          <div key={hotel.id} className="flex gap-2 items-center">
            <span className="m-s-b text-fs-28 text-or-100">{index + 1}.</span>
            <span className="text-fs-16 m-m">{getText(hotel.name)}</span>
          </div>
        ))}
      </div>

      {adaptedData.mainImage && (
        <div className="w-full h-[300px] md:h-[437px] mt-6">
          <img
            src={adaptedData.mainImage.src || "/placeholder.svg"}
            alt={getText(adaptedData.mainImage.alt) || (lang === "en" ? "Recommended hotel" : "Hotel recomendado")}
            className="w-full h-full object-cover rounded-xl border border-gray-200 shadow-sm"
          />
        </div>
      )}
    </div>
  )
}
