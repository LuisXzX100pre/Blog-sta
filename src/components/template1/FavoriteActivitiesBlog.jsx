export default function FavoriteActivitiesBlog({ data }) {
  if (!data) {
    console.log("FavoriteActivitiesBlog: datos insuficientes", data)
    return null
  }

  return (
    <div>
      <h3 className="text-fs-20 m-b mb-4">{data.sectionTitle?.es || "Actividades recomendadas"}</h3>

      <div className="flex flex-col gap-6 text-gry-100 text-fs-14 m-m mb-6">
        {data.introductionParagraphs &&
          data.introductionParagraphs.map((paragraph, index) => <span key={index}>{paragraph.es}</span>)}
      </div>

      {data.activities && data.activities.length > 0 && (
        <div className="flex gap-9">
          {data.activities.map((activity, index) => (
            <div key={index}>
              <h3 className="text-fs-16 m-s-b mb-4">{activity.title?.es}</h3>
              <span className="flex flex-col gap-6 text-gry-100 text-fs-14 m-m mb-6">{activity.description?.es}</span>
            </div>
          ))}
        </div>
      )}

      {data.mainImage && (
        <div className="w-full h-[437px]">
          <img
            src={data.mainImage.src || "/placeholder.svg"}
            alt={data.mainImage.alt?.es || "Actividades del destino"}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  )
}
