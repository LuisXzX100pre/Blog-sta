"use client"

import ClickableText from "../general/ClickableText"

export default function HowToBook({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // 🧠 LÓGICA INTELIGENTE: Adaptar datos de cualquier template
  let adaptedData = {
    title: "",
    introduction: "",
    steps: [],
  }

  // 1️⃣ Si vienen datos directos de Template 1 (howToBookTransport)
  if (data?.steps && Array.isArray(data.steps)) {
    adaptedData = data
    console.log("🎯 HowToBook: Usando datos originales de Template 1")
  }
  // 2️⃣ Si vienen datos de Template 2 (placesToVisit)
  else if (data?.placesList) {
    adaptedData = {
      title: "¿Cómo planificar tu visita?",
      introduction: "Sigue estos pasos para organizar tu visita a las mejores atracciones del destino.",
      steps: [
        {
          id: "step_places_1",
          icon: { src: "/placeholder.svg", alt: "Icono planificación" },
          text: `Elige entre ${data.placesList.length} atracciones principales`,
          highlightStyle: "normal",
        },
        {
          id: "step_places_2",
          icon: { src: "/placeholder.svg", alt: "Icono calendario" },
          text: "Selecciona las fechas ideales para tu visita",
          highlightStyle: "accent",
        },
        {
          id: "step_places_3",
          icon: { src: "/placeholder.svg", alt: "Icono reserva" },
          text: "Reserva con anticipación para mejores precios",
          highlightStyle: "normal",
        },
      ],
    }
    console.log("🔄 HowToBook: Adaptando datos de Template 2 (placesToVisit)")
  }
  // 3️⃣ Si vienen datos de Template 3 (monthlyInfo)
  else if (data?.seasons) {
    adaptedData = {
      title: "¿Cómo planificar según el clima?",
      introduction: "Planifica tu viaje considerando las condiciones climáticas de cada temporada.",
      steps: [
        {
          id: "step_climate_1",
          icon: { src: "/placeholder.svg", alt: "Icono clima" },
          text: "Consulta las condiciones climáticas",
          highlightStyle: "normal",
        },
        {
          id: "step_climate_2",
          icon: { src: "/placeholder.svg", alt: "Icono temporada" },
          text: "Elige la temporada ideal para ti",
          highlightStyle: "accent",
        },
        {
          id: "step_climate_3",
          icon: { src: "/placeholder.svg", alt: "Icono equipaje" },
          text: "Prepara el equipaje según el clima",
          highlightStyle: "normal",
        },
      ],
    }
    console.log("🔄 HowToBook: Adaptando datos de Template 3 (monthlyInfo)")
  }
  // 4️⃣ Fallback genérico
  else {
    adaptedData = {
      title: "¿Cómo planificar tu viaje?",
      introduction: "Sigue estos sencillos pasos para organizar tu viaje perfecto.",
      steps: [
        {
          id: "step_generic_1",
          icon: { src: "/placeholder.svg", alt: "Icono ubicación" },
          text: "Elige tu destino ideal",
          highlightStyle: "normal",
        },
        {
          id: "step_generic_2",
          icon: { src: "/placeholder.svg", alt: "Icono calendario" },
          text: "Selecciona las fechas perfectas",
          highlightStyle: "accent",
        },
        {
          id: "step_generic_3",
          icon: { src: "/placeholder.svg", alt: "Icono reserva" },
          text: "Reserva tu experiencia",
          highlightStyle: "normal",
        },
      ],
    }
    console.log("⚠️ HowToBook: Usando datos genéricos (fallback)")
  }

  if (!adaptedData.steps || adaptedData.steps.length === 0) {
    console.log("HowToBook: No hay pasos para mostrar")
    return null
  }

  return (
    <>
      <ClickableText text={getText(adaptedData.title)} type={type} className="text-fs-20 m-b mb-4" as="h3" />

      <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14 mb-8">
        <p>{getText(adaptedData.introduction)}</p>
      </div>

      <div className="flex justify-around mb-[44px]">
        {adaptedData.steps.map((step) => (
          <div key={step.id} className="flex flex-col justify-center items-center text-center w-[216px] gap-6">
            <div
              className={`w-[80px] h-[80px] ${
                step.highlightStyle === "accent" ? "bg-or-100" : "bg-gry-50"
              } rounded-lg flex items-center justify-center`}
            >
              <img
                src={step.icon?.src || "/placeholder.svg"}
                alt={getText(step.icon?.alt) || (lang === "en" ? "Icon" : "Icono")}
                className="w-8 h-8"
              />
            </div>
            <span>{getText(step.text)}</span>
          </div>
        ))}
      </div>
    </>
  )
}
