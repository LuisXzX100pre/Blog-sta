"use client"

import ListElement from "./ListElement"
import ClickableText from "../general/ClickableText"

const PlacesToVisit = ({ data, showFirstHalf = false, showSecondHalf = false, type = "tour", lang = "es" }) => {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Solo usar datos directos del Template 2
  if (!data?.placesList || !Array.isArray(data.placesList) || data.placesList.length === 0) {
    return (
      <div className="container mx-auto py-8">
        <p className="text-center text-gray-500">
          {lang === "en" ? "No places available to display." : "No hay lugares disponibles para mostrar."}
        </p>
      </div>
    )
  }

  // Determinar qué lugares mostrar
  let placesToShow = data.placesList

  if (showFirstHalf) {
    placesToShow = data.placesList.slice(0, Math.ceil(data.placesList.length / 2))
  } else if (showSecondHalf) {
    const halfPoint = Math.ceil(data.placesList.length / 2)
    placesToShow = data.placesList.slice(halfPoint)
  }

  return (
    <div className="container mx-auto py-8">
      {/* Solo mostrar el título y la introducción en la primera mitad */}
      {showFirstHalf && (
        <>
          <ClickableText
            text={getText(data.sectionTitle)}
            type={type}
            className="m-s-b text-fs-24 mb-4 text-[#1a202c]"
            as="h2"
          />
          <p className="m-m text-fs-14 text-gry-100 mb-8">{getText(data.introduction)}</p>
        </>
      )}

      <ul className="space-y-8">
        {placesToShow.map((place, index) => (
          <ListElement
            key={place.id}
            place={place}
            index={showSecondHalf ? index + Math.ceil(data.placesList.length / 2) : index}
            type={type}
            lang={lang}
          />
        ))}
      </ul>
    </div>
  )
}

export default PlacesToVisit
