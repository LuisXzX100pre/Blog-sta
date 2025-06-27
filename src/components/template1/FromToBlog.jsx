"use client"

import ClickableText from "../general/ClickableText"

export default function FromToBlog({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // 🧠 LÓGICA INTELIGENTE: Adaptar datos de cualquier template
  let adaptedData = {
    title: "",
    introductionParagraphs: [],
    routes: [],
    mainImage: null,
  }

  // 1️⃣ Si vienen datos directos de Template 1 (routesFrom)
  if (data?.routes && Array.isArray(data.routes)) {
    adaptedData = data
    console.log("🎯 FromToBlog: Usando datos originales de Template 1")
  }
  // 2️⃣ Si vienen datos de Template 2 (placesToVisit)
  else if (data?.placesList) {
    adaptedData = {
      title: "Rutas entre atracciones",
      introductionParagraphs: [
        "Descubre las mejores rutas para moverte entre las principales atracciones.",
        "Optimiza tu tiempo y disfruta al máximo de cada lugar que visites.",
      ],
      routes: data.placesList.slice(0, 4).map((place, index) => ({
        id: `route_place_${index}`,
        title: `Ruta hacia ${place.title}`,
        description: `La mejor manera de llegar a ${place.title} y disfrutar de esta increíble atracción.`,
        duration: "30-45 minutos",
      })),
      mainImage: data.placesList[0]?.image || {
        src: "/placeholder.svg?height=437&width=600",
        alt: "Rutas de transporte",
      },
    }
    console.log("🔄 FromToBlog: Adaptando datos de Template 2 (placesToVisit)")
  }
  // 3️⃣ Si vienen datos de Template 3 (monthlyInfo)
  else if (data?.seasons) {
    const monthsData = data.seasons[0]?.monthsData || []
    adaptedData = {
      title: "Rutas recomendadas por temporada",
      introductionParagraphs: [
        "Dependiendo de la época del año, algunas rutas son más recomendables que otras.",
        "Conoce las mejores opciones de transporte según la temporada.",
      ],
      routes: monthsData.slice(0, 3).map((month, index) => ({
        id: `route_season_${index}`,
        title: `Rutas en ${month.monthTitle}`,
        description: month.descriptionParagraphs?.[0] || `Mejores rutas durante ${month.monthTitle}.`,
        duration: "Variable según clima",
      })),
      mainImage: {
        src: "/placeholder.svg?height=437&width=600",
        alt: "Rutas por temporada",
      },
    }
    console.log("🔄 FromToBlog: Adaptando datos de Template 3 (monthlyInfo)")
  }
  // 4️⃣ Fallback genérico
  else {
    adaptedData = {
      title: "Rutas disponibles",
      introductionParagraphs: [
        "Existen múltiples rutas para llegar a este destino.",
        "Elige la opción que mejor se adapte a tus necesidades y presupuesto.",
      ],
      routes: [
        {
          id: "route_generic_1",
          title: "Ruta Aérea",
          description: "La opción más rápida para llegar al destino.",
          duration: "2-4 horas",
        },
        {
          id: "route_generic_2",
          title: "Ruta Terrestre",
          description: "Disfruta del paisaje durante el viaje.",
          duration: "6-8 horas",
        },
      ],
      mainImage: {
        src: "/placeholder.svg?height=437&width=600",
        alt: "Rutas de transporte",
      },
    }
    console.log("⚠️ FromToBlog: Usando datos genéricos (fallback)")
  }

  if (!adaptedData.routes || adaptedData.routes.length === 0) {
    console.log("FromToBlog: No hay rutas para mostrar")
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

      <div className="space-y-6 mb-8">
        {adaptedData.routes.map((route) => (
          <div key={route.id} className="border-l-4 border-or-100 pl-4">
            <ClickableText text={getText(route.title)} type={type} className="text-fs-16 m-s-b mb-2" as="h4" />
            <p className="text-gry-100 text-fs-14 m-m mb-2">{getText(route.description)}</p>
            {route.duration && (
              <p className="text-fs-12 text-gry-100 italic">
                {lang === "en" ? "Duration: " : "Duración: "}
                {route.duration}
              </p>
            )}
          </div>
        ))}
      </div>

      {adaptedData.mainImage && (
        <div className="w-full h-[300px] md:h-[437px]">
          <img
            src={adaptedData.mainImage.src || "/placeholder.svg"}
            alt={
              getText(adaptedData.mainImage.alt) || (lang === "en" ? "Transportation routes" : "Rutas de transporte")
            }
            className="w-full h-full object-cover rounded-xl border border-gray-200 shadow-sm"
          />
        </div>
      )}
    </div>
  )
}
