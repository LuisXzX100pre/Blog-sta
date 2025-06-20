import Title from "../general/Titles"
import Paragraph from "../general/Paragraph"

export default function AcapulcoGuideIntro({ data }) {
  if (!data) return null

  return (
    <div className="mb-12">
      {/* Título principal usando el mismo componente que Template1 */}
      <div className="mb-6">
        <Title title={data.mainTitle.es} />
      </div>

      {/* Subtítulo como texto real, no imagen */}
      <div className="mb-8">
        <h2 className="text-center text-fs-18 m-s-b text-black-100 leading-relaxed px-4">{data.subtitle.es}</h2>
      </div>

      {/* Imagen hero con border radius */}
      {data.heroImage && (
        <div className="mb-8">
          <img
            src={data.heroImage || "/placeholder.svg"}
            alt={data.mainTitle.es}
            className="rounded-lg w-full h-[300px] object-cover"
          />
        </div>
      )}

      {/* Párrafos usando el mismo componente Paragraph que Template1 */}
      <div className="flex flex-col gap-5">
        {data.introductionParagraphs.map((paragraph, index) => (
          <Paragraph key={index} text={paragraph.es} />
        ))}
      </div>
    </div>
  )
}
