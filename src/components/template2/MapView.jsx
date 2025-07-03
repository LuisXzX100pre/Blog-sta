"use client"

import ClickableText from "../general/ClickableText"

export default function MapView({ data, type = "tour", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Función para obtener imagen real
  const getRealMapImage = () => {
    const mapImages = [
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800",
    ]
    return mapImages[Math.floor(Math.random() * mapImages.length)]
  }

  // Solo usar datos directos del Template 2
  if (!data?.title) {
    return null
  }

  return (
    <>
      <div className="mt-9 mb-9">
        <ClickableText
          text={getText(data.title)}
          type={type}
          className="text-fs-20 m-b text-[#1a202c] font-bold mb-4"
          as="h3"
        />
        <p className="mt-5 text-justify text-fs-14 text-gry-100 m-m mb-4">{getText(data.introduction)}</p>
        <img
          src={data.fallbackImage?.src || getRealMapImage()}
          alt={getText(data.fallbackImage?.alt)}
          className="mt-5 h-[437px] w-full object-cover rounded-[0.5em]"
        />
      </div>
    </>
  )
}
