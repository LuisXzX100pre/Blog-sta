export default function FamilyHotelsBlog({ data }) {
  if (!data) {
    console.log("FamilyHotelsBlog: datos insuficientes", data)
    return null
  }

  return (
    <div className="my-11">
      <h3 className="text-fs-20 m-b mb-4">{data.title?.es || "Hoteles recomendados"}</h3>

      <div className="flex flex-col gap-6 text-gry-100 text-fs-14 m-m mb-6">
        {data.introductionParagraphs &&
          data.introductionParagraphs.map((paragraph, index) => <p key={index}>{paragraph.es}</p>)}
      </div>

      {data.hotelList && data.hotelList.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {data.hotelList.map((hotel, index) => (
            <div key={hotel.id} className="flex gap-2 items-center">
              <span className="m-s-b text-fs-28 text-or-100">{index + 1}.</span>
              <span className="text-fs-16 m-m">{hotel.name?.es}</span>
            </div>
          ))}
        </div>
      )}

      {data.mainImage && (
        <div className="w-full h-[300px] md:h-[437px] mt-6">
          <img
            src={data.mainImage.src || "/placeholder.svg"}
            alt={data.mainImage.alt?.es || "Hotel recomendado"}
            className="w-full h-full object-cover rounded-xl border border-gray-200 shadow-sm"
          />
        </div>
      )}
    </div>
  )
}
