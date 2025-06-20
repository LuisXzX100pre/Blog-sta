import TipElementList from "./TipElementList"
import ClickableText from "../general/ClickableText"

export default function RecommendationsBeforeVisit({ type = "tour" }) {
  const tips = [
    { id: 1, text: { es: "Lleva protector solar de factor alto, el sol puede ser muy intenso durante todo el año." } },
    { id: 2, text: { es: "Reserva tus hoteles con anticipación, especialmente durante temporada alta." } },
    {
      id: 3,
      text: {
        es: "Prueba la gastronomía local en los mercados y restaurantes familiares para una experiencia auténtica.",
      },
    },
    { id: 4, text: { es: "Mantente hidratado y bebe agua embotellada para evitar problemas estomacales." } },
  ]

  return (
    <>
      <div className="mt-8 mb-9">
        <ClickableText
          text="Recomendaciones antes de visitar"
          type={type}
          className="m-s-b text-fs-28 text-[#1a202c] mb-[15.5px]"
          as="h2"
        />
        <hr className="mb-[15.5px]"></hr>
        <p className="m-m text-justify text-fs-14 text-gry-100 mb-11">
          Sigue los siguientes consejos para tener una mejor experiencia en tu viaje:
        </p>
        <ol className="mb-11">
          {tips.map((tip, index) => (
            <TipElementList key={tip.id} tip={tip} index={index} />
          ))}
        </ol>
        <p className="inline text-justify text-gry-100 mb-7 m-m text-fs-14">
          Prepara tu equipaje y planifica tu itinerario para disfrutar al máximo de estos increíbles destinos.
        </p>
      </div>
    </>
  )
}
