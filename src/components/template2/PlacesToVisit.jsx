import ListElement from "./ListElement"

export default function PlacesToVisit({ data }) {
  if (!data) {
    console.log("PlacesToVisit: datos insuficientes", data)
    return null
  }

  return (
    <>
      <div>
        <h2 className="text-fs-28 mb-[15.5px] m-s-b text-[#1a202c]">
          {data.sectionTitle?.es || "Lugares para visitar"}
        </h2>
        <hr></hr>
        <p className="mt-[15.5px] text-justify text-fs-14 text-gry-100 m-m mb-[44px]">{data.introduction?.es}</p>
      </div>
      {data.placesList && data.placesList.length > 0 && (
        <ol>
          {data.placesList.map((place, index) => (
            <ListElement key={place.id} place={place} index={index} />
          ))}
        </ol>
      )}
    </>
  )
}
