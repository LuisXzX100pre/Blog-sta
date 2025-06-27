"use client"

import ClickableText from "../general/ClickableText"

export default function FavoriteActivitiesBlog({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // 🧠 LÓGICA INTELIGENTE: Adaptar datos de cualquier template
  let adaptedData = {
    sectionTitle: "",
    introductionParagraphs: [],
    activities: [],
    mainImage: null,
  }

  // 1️⃣ Si vienen datos directos de Template 1 (favoriteActivities)
  if (data?.sectionTitle && data?.activities) {
    adaptedData = data
    console.log("🎯 FavoriteActivitiesBlog: Usando datos originales de Template 1")
  }
  // 2️⃣ Si vienen datos de Template 2 (placesToVisit)
  else if (data?.placesList) {
    adaptedData = {
      sectionTitle: "Nuestras actividades favoritas para ti",
      introductionParagraphs: [
        "Basado en los mejores lugares de este destino, estas son las actividades que más recomendamos:",
        "Cada una de estas experiencias te permitirá conocer lo mejor de la región.",
      ],
      activities: data.placesList.slice(0, 4).map((place) => ({
        title: place.title,
        description: place.descriptionParagraphs?.[0] || place.subtitle || `Disfruta de ${place.title}.`,
      })),
      mainImage: data.placesList[0]?.image || {
        src: "/placeholder.svg?height=437&width=600",
        alt: "Actividades del destino",
      },
    }
    console.log("🔄 FavoriteActivitiesBlog: Adaptando datos de Template 2 (placesToVisit)")
  }
  // 3️⃣ Si vienen datos de Template 3 (monthlyInfo)
  else if (data?.seasons) {
    const monthsData = data.seasons[0]?.monthsData || []
    adaptedData = {
      sectionTitle: "Actividades recomendadas por temporada",
      introductionParagraphs: [
        "Dependiendo de la época del año, hay diferentes actividades que puedes disfrutar:",
        "Aquí te recomendamos las mejores actividades según el clima y la temporada.",
      ],
      activities: monthsData.slice(0, 3).map((month) => ({
        title: `Actividades en ${month.monthTitle}`,
        description: month.descriptionParagraphs?.[0] || `Actividades ideales para ${month.monthTitle}.`,
      })),
      mainImage: monthsData[0]?.image || {
        src: "/placeholder.svg?height=437&width=600",
        alt: "Actividades por temporada",
      },
    }
    console.log("🔄 FavoriteActivitiesBlog: Adaptando datos de Template 3 (monthlyInfo)")
  }
  // 4️⃣ Fallback genérico
  else {
    adaptedData = {
      sectionTitle: "Actividades recomendadas",
      introductionParagraphs: [
        "Este destino ofrece una gran variedad de actividades para todos los gustos.",
        "Descubre las experiencias más populares que puedes disfrutar durante tu visita.",
      ],
      activities: [
        {
          title: "Actividades Acuáticas",
          description: "Disfruta de deportes acuáticos y actividades en el mar.",
        },
        {
          title: "Turismo Cultural",
          description: "Explora la rica historia y cultura del destino.",
        },
      ],
      mainImage: {
        src: "/placeholder.svg?height=437&width=600",
        alt: "Actividades del destino",
      },
    }
    console.log("⚠️ FavoriteActivitiesBlog: Usando datos genéricos (fallback)")
  }

  if (!adaptedData.activities || adaptedData.activities.length === 0) {
    console.log("FavoriteActivitiesBlog: No hay actividades para mostrar")
    return null
  }

  return (
    <div className="my-11">
      <ClickableText text={getText(adaptedData.sectionTitle)} type={type} className="text-fs-20 m-b mb-4" as="h3" />

      <div className="flex flex-col gap-6 text-gry-100 text-fs-14 m-m mb-6">
        {adaptedData.introductionParagraphs.map((paragraph, index) => (
          <p key={index}>{getText(paragraph)}</p>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {adaptedData.activities.map((activity, index) => (
          <div key={index} className="space-y-4">
            <ClickableText text={getText(activity.title)} type={type} className="text-fs-16 m-s-b" as="h4" />
            <p className="text-gry-100 text-fs-14 m-m">{getText(activity.description)}</p>
          </div>
        ))}
      </div>

      {adaptedData.mainImage && (
        <div className="w-full h-[300px] md:h-[437px]">
          <img
            src={adaptedData.mainImage.src || "/placeholder.svg"}
            alt={
              getText(adaptedData.mainImage.alt) ||
              (lang === "en" ? "Destination activities" : "Actividades del destino")
            }
            className="w-full h-full object-cover rounded-xl border border-gray-200 shadow-sm"
          />
        </div>
      )}
    </div>
  )
}
