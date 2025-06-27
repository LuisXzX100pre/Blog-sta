"use client"

import ClickableText from "../general/ClickableText"

export default function VideoPlace({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // 🧠 LÓGICA INTELIGENTE: Adaptar datos de cualquier template
  let adaptedData = {
    title: "",
    descriptionParagraphs: [],
    video: null,
    videoCaption: "",
  }

  // 1️⃣ Si vienen datos directos de Template 1 (journeyVideo)
  if (data?.video?.embedUrl) {
    adaptedData = data
    console.log("🎯 VideoPlace: Usando datos originales de Template 1")
  }
  // 2️⃣ Si vienen datos de Template 2 (usar imagen principal como placeholder de video)
  else if (data?.placesList) {
    const firstPlace = data.placesList[0]
    adaptedData = {
      title: "Descubre este destino",
      descriptionParagraphs: [
        "Explora visualmente las mejores atracciones de este increíble destino.",
        `Con ${data.placesList.length} lugares principales para visitar, cada rincón tiene algo especial que ofrecer.`,
        "Sumérgete en la belleza y diversidad de experiencias que te esperan.",
      ],
      video: {
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Video placeholder
        ariaTitle: "Video del destino turístico",
      },
      videoCaption: "Disfruta de un recorrido visual por las principales atracciones.",
    }
    console.log("🔄 VideoPlace: Adaptando datos de Template 2 (placesToVisit)")
  }
  // 3️⃣ Si vienen datos de Template 3 (información climática)
  else if (data?.seasons) {
    adaptedData = {
      title: "Condiciones climáticas del destino",
      descriptionParagraphs: [
        "Conoce las condiciones climáticas que hacen de este destino un lugar especial.",
        "El clima privilegiado permite disfrutar de actividades durante todo el año.",
        "Descubre por qué cada temporada ofrece experiencias únicas.",
      ],
      video: {
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Video placeholder
        ariaTitle: "Video sobre el clima del destino",
      },
      videoCaption: "Explora las diferentes temporadas y condiciones climáticas.",
    }
    console.log("🔄 VideoPlace: Adaptando datos de Template 3 (monthlyInfo)")
  }
  // 4️⃣ Fallback genérico
  else {
    adaptedData = {
      title: "Descubre este destino",
      descriptionParagraphs: [
        "Sumérgete en la belleza de este increíble destino turístico.",
        "Cada rincón tiene algo especial que ofrecer a los visitantes.",
        "Prepárate para vivir experiencias inolvidables.",
      ],
      video: {
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Video placeholder
        ariaTitle: "Video del destino",
      },
      videoCaption: "Un vistazo a las maravillas que te esperan.",
    }
    console.log("⚠️ VideoPlace: Usando datos genéricos (fallback)")
  }

  if (!adaptedData.video?.embedUrl) {
    console.log("VideoPlace: No hay video para mostrar")
    return null
  }

  return (
    <div className="my-11">
      <ClickableText text={getText(adaptedData.title)} type={type} className="text-fs-20 m-b mb-4" as="h3" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 text-gry-100 text-fs-14 m-m mb-8">
        {adaptedData.descriptionParagraphs.map((paragraph, index) => (
          <p key={index}>{getText(paragraph)}</p>
        ))}
      </div>

      {/* VIDEO */}
      <div
        className="h-[250px] md:h-[437px] w-full overflow-hidden border border-gray-200 shadow-sm"
        style={{ borderRadius: "0.5em" }}
      >
        <iframe
          src={adaptedData.video.embedUrl}
          frameBorder="0"
          allowFullScreen
          width="100%"
          height="100%"
          style={{ borderRadius: "0.5em" }}
          aria-label={getText(adaptedData.video.ariaTitle)}
        />
      </div>

      {adaptedData.videoCaption && (
        <p className="text-fs-12 text-gry-100 italic mt-2 text-center">{getText(adaptedData.videoCaption)}</p>
      )}
    </div>
  )
}
