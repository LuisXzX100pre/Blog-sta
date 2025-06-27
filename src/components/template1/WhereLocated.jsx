"use client"

import ClickableText from "../general/ClickableText"

export default function WhereLocated({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // 🧠 LÓGICA INTELIGENTE: Adaptar datos de cualquier template
  let adaptedData = {
    title: "",
    introductionParagraphs: [],
    mapSection: null,
    conclusionParagraph: "",
  }

  // 1️⃣ Si vienen datos directos de Template 1 (locationInfo)
  if (data?.title && data?.introductionParagraphs) {
    adaptedData = data
    console.log("🎯 WhereLocated: Usando datos originales de Template 1")
  }
  // 2️⃣ Si vienen datos de Template 2 (placesToVisit)
  else if (data?.placesList) {
    adaptedData = {
      title: "¿Dónde se encuentran estos lugares?",
      introductionParagraphs: [
        `Este destino cuenta con ${data.placesList.length} atracciones principales distribuidas estratégicamente.`,
        "Su ubicación privilegiada permite acceder fácilmente a todos los puntos de interés.",
        "La distribución geográfica de las atracciones hace que sea un destino ideal para explorar.",
      ],
      mapSection: {
        image: {
          src: data.placesList[0]?.image?.src || "/placeholder.svg?height=437&width=800",
          alt: "Mapa de ubicaciones principales",
        },
        caption: `Ubicación de las ${data.placesList.length} atracciones principales del destino.`,
      },
      conclusionParagraph:
        "La ubicación estratégica de este destino lo convierte en el punto perfecto para explorar toda la región.",
    }
    console.log("🔄 WhereLocated: Adaptando datos de Template 2 (placesToVisit)")
  }
  // 3️⃣ Si vienen datos de Template 3 (monthlyInfo)
  else if (data?.seasons) {
    adaptedData = {
      title: "¿Dónde se encuentra este destino climático?",
      introductionParagraphs: [
        "Este destino se caracteriza por tener un clima privilegiado durante todo el año.",
        "Su ubicación geográfica le permite mantener condiciones climáticas ideales para el turismo.",
        "La posición estratégica hace que sea accesible en cualquier época del año.",
      ],
      mapSection: {
        image: {
          src: "/placeholder.svg?height=437&width=800",
          alt: "Mapa climático de la región",
        },
        caption: "Ubicación geográfica con información climática por temporadas.",
      },
      conclusionParagraph:
        "Su ubicación privilegiada y condiciones climáticas lo convierten en un destino ideal durante todo el año.",
    }
    console.log("🔄 WhereLocated: Adaptando datos de Template 3 (monthlyInfo)")
  }
  // 4️⃣ Fallback genérico
  else {
    adaptedData = {
      title: "¿Dónde se encuentra este destino?",
      introductionParagraphs: [
        "Este es un destino turístico de gran importancia y belleza natural.",
        "Su ubicación estratégica lo convierte en un punto de acceso ideal para los visitantes.",
        "La posición geográfica privilegiada ofrece múltiples opciones de transporte y acceso.",
      ],
      mapSection: {
        image: {
          src: "/placeholder.svg?height=437&width=800",
          alt: "Mapa de ubicación del destino",
        },
        caption: "Ubicación estratégica del destino turístico.",
      },
      conclusionParagraph: "Un destino que vale la pena visitar por su ubicación privilegiada y fácil acceso.",
    }
    console.log("⚠️ WhereLocated: Usando datos genéricos (fallback)")
  }

  if (!adaptedData.title) {
    console.log("WhereLocated: No hay datos suficientes para mostrar")
    return null
  }

  return (
    <>
      <div className="my-11 flex flex-col gap-[18px]">
        <ClickableText text={getText(adaptedData.title)} type={type} className="text-fs-20 m-b" as="h3" />
        <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14">
          {adaptedData.introductionParagraphs.map((paragraph, index) => (
            <p key={index}>{getText(paragraph)}</p>
          ))}
        </div>

        {adaptedData.mapSection && (
          <>
            <div className="w-full h-[437px] mt-7">
              <img
                src={adaptedData.mapSection.image?.src || "/placeholder.svg"}
                alt={
                  getText(adaptedData.mapSection.image?.alt) || (lang === "en" ? "Location map" : "Mapa de ubicación")
                }
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <span className="text-fs-12 text-gry-100 m-s-b">{getText(adaptedData.mapSection.caption)}</span>
          </>
        )}
      </div>

      {adaptedData.conclusionParagraph && (
        <div className="text-gry-100 text-fs-14 my-[44px]">{getText(adaptedData.conclusionParagraph)}</div>
      )}
    </>
  )
}
