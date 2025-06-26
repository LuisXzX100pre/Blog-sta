import TipElementList from "./TipElementList"
import ClickableText from "../general/ClickableText"

export default function RecommendationsBeforeVisit({ data, type = "tour", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Usar datos del prop o fallback a datos por defecto
  const tips = data?.recommendations || [
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
  ]

  return (
    <>
      <div className="mt-8 mb-9">
        <ClickableText
          text={
            data?.sectionTitle
              ? getText(data.sectionTitle)
              : lang === "en"
                ? "Recommendations before visiting"
                : "Recomendaciones antes de visitar"
          }
          type={type}
          className="m-s-b text-fs-28 text-[#1a202c] mb-[15.5px]"
          as="h2"
        />
        <hr className="mb-[15.5px]"></hr>
        <p className="m-m text-justify text-fs-14 text-gry-100 mb-11">
          {lang === "en"
            ? "Follow these tips for a better travel experience:"
            : "Sigue los siguientes consejos para tener una mejor experiencia en tu viaje:"}
        </p>
        <ol className="mb-11">
          {tips.map((tip, index) => (
            <TipElementList key={tip.id} tip={tip} index={index} lang={lang} />
          ))}
        </ol>
        <p className="inline text-justify text-gry-100 mb-7 m-m text-fs-14">
          {lang === "en"
            ? "Pack your luggage and plan your itinerary to make the most of these incredible destinations."
            : "Prepara tu equipaje y planifica tu itinerario para disfrutar al máximo de estos increíbles destinos."}
        </p>
      </div>
    </>
  )
}
