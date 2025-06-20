export default function ListElement({ place, index }) {
  return (
    <>
      <li>
        <div className="mt-8">
          <h3 className="text-fs-28 m-s-b text-[#eb741e] mb-[14px]">
            <span className="mr-6 text-fs-28 m-s-b text-[#eb741e]">{index + 1}.</span>
            {place.title.es}
          </h3>
          <p className="m-m text-fs-14 mt-4 italic mb-4 text-gry-100">{place.subtitle.es}</p>
          {place.descriptionParagraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className="mt-4 text-justify text-fs-14 m-m text-gry-100 mb-4">
              {paragraph.es}
            </p>
          ))}
          <img
            src={place.image.src || "/placeholder.svg"}
            className="mt-11 h-[437px] w-full object-cover"
            style={{ borderRadius: '0.5em' }}
            alt={place.image.alt.es}
          />
        </div>
      </li>
    </>
  )
}