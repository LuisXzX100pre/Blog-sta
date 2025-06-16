export default function FavoriteActivitiesBlog({ data }) {
  if (!data) {
    console.log("FavoriteActivitiesBlog: datos insuficientes", data)
    return null
  }

  return (
    <div className="my-11">
      <h3 className="text-fs-20 m-b mb-4">{data.sectionTitle?.es || "Actividades recomendadas"}</h3>

      <div className="flex flex-col gap-6 text-gry-100 text-fs-14 m-m mb-6">
        {data.introductionParagraphs &&
          data.introductionParagraphs.map((paragraph, index) => <p key={index}>{paragraph.es}</p>)}
      </div>

      {data.activities && data.activities.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {data.activities.map((activity, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-fs-16 m-s-b">{activity.title?.es}</h4>
              <p className="text-gry-100 text-fs-14 m-m">{activity.description?.es}</p>
            </div>
          ))}
        </div>
      )}

      {data.mainImage && (
        <div className="w-full h-[300px] md:h-[437px]">
          <img
            src={data.mainImage.src || "/placeholder.svg"}
            alt={data.mainImage.alt?.es || "Actividades del destino"}
            className="w-full h-full object-cover rounded-xl border border-gray-200 shadow-sm"
          />
        </div>
      )}
    </div>
  )
}
