"use client"

import ClickableText from "../general/ClickableTitle"

export default function WhatWillYouFind({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // 🧠 LÓGICA INTELIGENTE: Adaptar datos de cualquier template
  let adaptedData = {
    title: "",
    items: [],
  }

  // 1️⃣ Si vienen datos directos de Template 1 (whatToFind)
  if (data?.title && data?.items) {
    adaptedData = data
    console.log("🎯 WhatWillYouFind: Usando datos originales de Template 1")
  }
  // 2️⃣ Si vienen datos de Template 2 (placesToVisit)
  else if (data?.placesList) {
    adaptedData = {
      title: "¿Qué encontrarás en este destino?",
      items: data.placesList.slice(0, 6).map((place) => ({
        id: place.id,
        image: place.image,
        name: place.title,
        description: place.descriptionParagraphs?.[0] || place.subtitle || "Descubre este increíble lugar.",
      })),
    }
    console.log("🔄 WhatWillYouFind: Adaptando datos de Template 2 (placesToVisit)")
  }
  // 3️⃣ Si vienen datos de Template 3 (monthlyInfo)
  else if (data?.seasons) {
    const monthsData = data.seasons[0]?.monthsData || []
    adaptedData = {
      title: "¿Qué encontrarás en cada época?",
      items: monthsData.slice(0, 4).map((month, index) => ({
        id: `month_${index}`,
        image: month.image || {
          src: "/placeholder.svg?height=150&width=150",
          alt: `Clima en ${month.monthTitle}`,
        },
        name: month.monthTitle || `Época ${index + 1}`,
        description: month.descriptionParagraphs?.[0] || `Información climática para ${month.monthTitle}.`,
      })),
    }
    console.log("🔄 WhatWillYouFind: Adaptando datos de Template 3 (monthlyInfo)")
  }
  // 4️⃣ Fallback genérico
  else {
    adaptedData = {
      title: "¿Qué encontrarás en este destino?",
      items: [
        {
          id: "generic_1",
          image: { src: "/placeholder.svg?height=150&width=150", alt: "Atracción principal" },
          name: "Atracciones Principales",
          description: "Descubre las mejores atracciones de este destino.",
        },
        {
          id: "generic_2",
          image: { src: "/placeholder.svg?height=150&width=150", alt: "Gastronomía local" },
          name: "Gastronomía Local",
          description: "Prueba los sabores únicos de la región.",
        },
      ],
    }
    console.log("⚠️ WhatWillYouFind: Usando datos genéricos (fallback)")
  }

  if (!adaptedData.items || adaptedData.items.length === 0) {
    console.log("WhatWillYouFind: No hay items para mostrar")
    return null
  }

  return (
    <>
      <ClickableText text={getText(adaptedData.title)} type={type} className="text-fs-20 m-b mb-6" as="h3" />
      <div className="flex flex-col gap-6">
        {adaptedData.items.map((item) => (
          <div key={item.id} className="flex gap-6">
            <div className="w-[150px] h-[150px]">
              <img
                src={item.image?.src || "/placeholder.svg"}
                alt={getText(item.image?.alt) || (lang === "en" ? "Tourist attraction" : "Atracción turística")}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="w-[85%] flex flex-col gap-2">
              <span className="m-s-b text-fs-16">{getText(item.name)}</span>
              <p className="m-m text-fs-14 text-gry-100">{getText(item.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
