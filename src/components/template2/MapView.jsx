"use client"

import ClickableText from "../general/ClickableText"

export default function MapView({ data, type = "tour", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // 🧠 LÓGICA INTELIGENTE: Adaptar datos de cualquier template
  let adaptedData = {
    title: "",
    introduction: "",
    fallbackImage: null,
  }

  // 1️⃣ Si vienen datos directos de Template 2 (touristMap)
  if (data?.title && data?.fallbackImage) {
    adaptedData = data
    console.log("🎯 MapView: Usando datos originales de Template 2")
  }
  // 2️⃣ Si vienen datos de Template 1 (locationInfo)
  else if (data?.title || data?.introductionParagraphs) {
    adaptedData = {
      title: data.title || "Mapa de ubicación",
      introduction: data.introductionParagraphs?.[0] || "Consulta la ubicación en el siguiente mapa:",
      fallbackImage: data.mapSection?.image || {
        src: "/placeholder.svg?height=437&width=800",
        alt: "Mapa de ubicación",
      },
    }
    console.log("🔄 MapView: Adaptando datos de Template 1 (locationInfo)")
  }
  // 3️⃣ Si vienen datos de Template 3 (monthlyInfo)
  else if (data?.seasons) {
    adaptedData = {
      title: "Mapa climático",
      introduction: "Consulta las ubicaciones con información climática:",
      fallbackImage: {
        src: "/placeholder.svg?height=437&width=800",
        alt: "Mapa climático de la región",
      },
    }
    console.log("🔄 MapView: Adaptando datos de Template 3 (monthlyInfo)")
  }
  // 4️⃣ Si vienen datos generales
  else if (data?.blogTitle) {
    adaptedData = {
      title: "Mapa de ubicaciones",
      introduction: `Consulta la ubicación de ${data.blogTitle} en el siguiente mapa:`,
      fallbackImage: {
        src: "/placeholder.svg?height=437&width=800",
        alt: `Mapa de ${data.blogTitle}`,
      },
    }
    console.log("🔄 MapView: Adaptando datos generales")
  }
  // 5️⃣ Fallback genérico
  else {
    adaptedData = {
      title: lang === "en" ? "Location Map" : "Mapa de ubicaciones",
      introduction:
        lang === "en"
          ? "Check the location of the mentioned places on the following map:"
          : "Consulta la ubicación de los lugares mencionados en el siguiente mapa:",
      fallbackImage: {
        src: "/placeholder.svg?height=437&width=800",
        alt: lang === "en" ? "Location map" : "Mapa de ubicaciones",
      },
    }
    console.log("⚠️ MapView: Usando datos genéricos (fallback)")
  }

  return (
    <>
      <div className="mt-9 mb-9">
        <ClickableText
          text={getText(adaptedData.title)}
          type={type}
          className="text-fs-20 m-b text-[#1a202c] font-bold mb-4"
          as="h3"
        />
        <p className="mt-5 text-justify text-fs-14 text-gry-100 m-m mb-4">{getText(adaptedData.introduction)}</p>
        <img
          src={adaptedData.fallbackImage?.src || "/placeholder.svg"}
          alt={getText(adaptedData.fallbackImage?.alt)}
          className="mt-5 h-[437px] w-full object-cover rounded-[0.5em]"
        />
      </div>
    </>
  )
}
