import ClickableText from "../general/ClickableText"

export default function ListElement({ place, index, type = "tour", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  return (
    <>
      <li>
        <div className="mt-8">
          <ClickableText
            text={`${index + 1}. ${getText(place.title)}`}
            type={type}
            className="text-fs-28 m-s-b text-[#eb741e] mb-[14px]"
            as="h3"
          />
          <p className="m-m text-fs-14 mt-4 italic mb-4 text-gry-100">{getText(place.subtitle)}</p>
          {place.descriptionParagraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className="mt-4 text-justify text-fs-14 m-m text-gry-100 mb-4">
              {getText(paragraph)}
            </p>
          ))}
          <img
            src={place.image.src || "/placeholder.svg"}
            className="mt-11 h-[437px] w-full object-cover"
            style={{ borderRadius: "0.5em" }}
            alt={getText(place.image.alt)}
          />
        </div>
      </li>
    </>
  )
}
