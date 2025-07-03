"use client"

import TipElementList from "./TipElementList"
import ClickableText from "../general/ClickableText"

export default function RecommendationsBeforeVisit({ data, type = "tour", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj

    if (typeof textObj === "object" && textObj !== null) {
      // Si es un objeto con type y text
      if (textObj.type && textObj.text) {
        return textObj.text
      }
      // Si es un objeto con idiomas
      if (textObj.es || textObj.en) {
        return textObj[lang] || textObj.es || textObj.en
      }
      // Si es cualquier otro objeto, convertir a string
      return JSON.stringify(textObj)
    }

    return String(textObj || "")
  }

  // 🧠 LÓGICA INTELIGENTE: Adaptar datos de cualquier template
  let adaptedData = {
    sectionTitle: "",
    recommendations: [],
  }

  // 1️⃣ Si vienen datos directos de Template 2 (beforeYouVisitRecommendations)
  if (data?.recommendations && Array.isArray(data.recommendations)) {
    adaptedData = {
      sectionTitle: data.sectionTitle || "Recomendaciones antes de visitar",
      recommendations: data.recommendations.map((rec, index) => ({
        id: rec.id || index + 1,
        text: getText(rec.text) || getText(rec) || "Recomendación disponible",
      })),
    }
    console.log("🎯 RecommendationsBeforeVisit: Usando datos originales de Template 2")
  }
  // 2️⃣ Si vienen datos de Template 1 (howToGetThere)
  else if (data?.sections && Array.isArray(data.sections)) {
    adaptedData = {
      sectionTitle: "Recomendaciones de acceso",
      recommendations: data.sections.map((section, index) => ({
        id: index + 1,
        text: getText(section.paragraphs?.[0]) || "Información importante para tu viaje.",
      })),
    }
    console.log("🔄 RecommendationsBeforeVisit: Adaptando datos de Template 1 (howToGetThere)")
  }
  // 2️⃣ Si vienen datos de Template 1 (howToGetThere) - Formato objeto
  else if (data?.sections && typeof data.sections === "object" && !Array.isArray(data.sections)) {
    const sectionsArray = Object.values(data.sections).filter((section) => section?.data)
    adaptedData = {
      sectionTitle: "Recomendaciones de acceso",
      recommendations: sectionsArray.slice(0, 5).map((section, index) => ({
        id: index + 1,
        text: "Información importante para tu viaje.",
      })),
    }
    console.log("🔄 RecommendationsBeforeVisit: Adaptando datos de Template 1 (sections como objeto)")
  }
  // 3️⃣ Si vienen datos de Template 3 (frequentlyAskedQuestions)
  else if (data?.faqList) {
    adaptedData = {
      sectionTitle: "Recomendaciones basadas en preguntas frecuentes",
      recommendations: data.faqList.slice(0, 5).map((faq, index) => ({
        id: index + 1,
        text: getText(faq.answer),
      })),
    }
    console.log("🔄 RecommendationsBeforeVisit: Adaptando datos de Template 3 (FAQ)")
  }
  // 4️⃣ Fallback genérico
  else {
    adaptedData = {
      sectionTitle: lang === "en" ? "Recommendations before visiting" : "Recomendaciones antes de visitar",
      recommendations: [
        {
          id: 1,
          text:
            lang === "en"
              ? "Bring high SPF sunscreen, the sun can be very intense all year round."
              : "Lleva protector solar de factor alto, el sol puede ser muy intenso durante todo el año.",
        },
        {
          id: 2,
          text:
            lang === "en"
              ? "Book your hotels in advance, especially during high season."
              : "Reserva tus hoteles con anticipación, especialmente durante temporada alta.",
        },
        {
          id: 3,
          text:
            lang === "en"
              ? "Try local cuisine at markets and family restaurants for an authentic experience."
              : "Prueba la gastronomía local en los mercados y restaurantes familiares para una experiencia auténtica.",
        },
        {
          id: 4,
          text:
            lang === "en"
              ? "Stay hydrated and drink bottled water to avoid stomach problems."
              : "Mantente hidratado y bebe agua embotellada para evitar problemas estomacales.",
        },
      ],
    }
    console.log("⚠️ RecommendationsBeforeVisit: Usando datos genéricos (fallback)")
  }

  if (!adaptedData.recommendations || adaptedData.recommendations.length === 0) {
    return null
  }

  return (
    <div className="mt-8 mb-9">
      <ClickableText
        text={getText(adaptedData.sectionTitle)}
        type={type}
        className="m-s-b text-fs-28 text-[#1a202c] mb-[15.5px]"
        as="h2"
      />
      <hr className="mb-[15.5px]" />
      <p className="m-m text-justify text-fs-14 text-gry-100 mb-11">
        {lang === "en"
          ? "Follow these tips for a better travel experience:"
          : "Sigue los siguientes consejos para tener una mejor experiencia en tu viaje:"}
      </p>
      <ol className="mb-11">
        {adaptedData.recommendations.map((tip, index) => (
          <TipElementList key={tip.id} tip={tip} index={index} lang={lang} />
        ))}
      </ol>
      <p className="inline text-justify text-gry-100 mb-7 m-m text-fs-14">
        {lang === "en"
          ? "Pack your luggage and plan your itinerary to make the most of these incredible destinations."
          : "Prepara tu equipaje y planifica tu itinerario para disfrutar al máximo de estos increíbles destinos."}
      </p>
    </div>
  )
}
