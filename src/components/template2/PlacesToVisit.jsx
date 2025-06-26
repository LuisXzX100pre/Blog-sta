import ListElement from "./ListElement"
import ClickableText from "../general/ClickableText"

const PlacesToVisit = ({ data, showFirstHalf = false, showSecondHalf = false, type = "tour", lang = "es" }) => {
  if (!data) return null

  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  const { sectionTitle, introduction, placesList } = data

  // Si no se especifica ninguna mitad, mostrar todo (comportamiento por defecto)
  let placesToShow = placesList

  if (showFirstHalf) {
    // Mostrar solo los primeros 4 lugares (1-4)
    placesToShow = placesList.slice(0, 4)
  } else if (showSecondHalf) {
    // Mostrar solo los últimos 4 lugares (5-8)
    placesToShow = placesList.slice(4, 8)
  }

  return (
    <div className="container mx-auto py-8">
      {/* Solo mostrar el título y la introducción en la primera mitad */}
      {showFirstHalf && (
        <>
          <ClickableText
            text={getText(sectionTitle)}
            type={type}
            className="m-s-b text-fs-24 mb-4 text-[#1a202c]"
            as="h2"
          />
          <p className="m-m text-fs-14 text-gry-100 mb-8">{getText(introduction)}</p>
        </>
      )}

      <ul className="space-y-8">
        {placesToShow.map((place, index) => (
          <ListElement
            key={place.id}
            place={place}
            index={showSecondHalf ? index + 4 : index}
            type={type}
            lang={lang}
          />
        ))}
      </ul>
    </div>
  )
}

export default PlacesToVisit
