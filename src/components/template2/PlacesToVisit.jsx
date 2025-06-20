import ListElement from "./ListElement"
import blogData from "../../data/blog-data.json"

const PlacesToVisit = ({ showFirstHalf = false, showSecondHalf = false }) => {
  const placesData = blogData?.sections?.placesToVisit?.data

  if (!placesData) return null

  const { sectionTitle, introduction, placesList } = placesData

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
          <h2 className="m-s-b text-fs-24 mb-4 text-[#1a202c]">{sectionTitle.es}</h2>
          <p className="m-m text-fs-14 text-gry-100 mb-8">{introduction.es}</p>
        </>
      )}

      <ul className="space-y-8">
        {placesToShow.map((place, index) => (
          <ListElement key={place.id} place={place} index={showSecondHalf ? index + 4 : index} />
        ))}
      </ul>
    </div>
  )
}

export default PlacesToVisit
