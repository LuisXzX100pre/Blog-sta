import ClickableText from "../general/ClickableText"

export default function ListElement({ place, index, type = "tour", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    if (typeof textObj === "object" && textObj !== null) {
      if (textObj.type && textObj.text) {
        return textObj.text
      }
      if (textObj.es || textObj.en) {
        return textObj[lang] || textObj.es || textObj.en
      }
      return JSON.stringify(textObj)
    }
    return String(textObj || "")
  }

  // Función para obtener imagen real
  const getRealImage = () => {
    const realImages = [
      "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    ]
    return realImages[Math.floor(Math.random() * realImages.length)]
  }

  const getImageSrc = () => {
    if (place?.image?.src) {
      const isValidUrl =
        place.image.src.startsWith("http") ||
        (place.image.src.startsWith("/") && !place.image.src.includes("placeholder"))
      return isValidUrl ? place.image.src : getRealImage()
    }
    return getRealImage()
  }

  return (
    <>
      <li>
        <div className="mt-8">
          <ClickableText
            text={`${place.number || index + 1}. ${getText(place.title)}`}
            type={type}
            className="text-fs-28 m-s-b text-[#eb741e] mb-[14px]"
            as="h3"
          />
          {place.subtitle && <p className="m-m text-fs-14 mt-4 italic mb-4 text-gry-100">{getText(place.subtitle)}</p>}
          {place.descriptionParagraphs?.map((paragraph, pIndex) => (
            <p key={pIndex} className="mt-4 text-justify text-fs-14 m-m text-gry-100 mb-4">
              {getText(paragraph)}
            </p>
          ))}
          <img
            src={getImageSrc() || "/placeholder.svg"}
            className="mt-11 h-[437px] w-full object-cover"
            style={{ borderRadius: "0.5em" }}
            alt={getText(place.image?.alt) || getText(place.title) || "Imagen del lugar"}
          />
        </div>
      </li>
    </>
  )
}
