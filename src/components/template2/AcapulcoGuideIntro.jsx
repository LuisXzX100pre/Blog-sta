import Title from "../general/Titles"
import Paragraph from "../general/Paragraph"

export default function AcapulcoGuideIntro({ data }) {
  if (!data) return null

  return (
    <div className="mb-12">
      <div className="mb-6">
        <Title title={data.mainTitle.es} />
      </div>

      {data.heroImage && (
        <div className="mb-8">
          <img
            src={data.heroImage || "/placeholder.svg"}
            alt={data.mainTitle.es}
            className="rounded-lg w-full h-auto object-contain"
          />
        </div>
      )}

      <div className="flex flex-col gap-5">
        {data.introductionParagraphs.map((paragraph, index) => (
          <Paragraph key={index} text={paragraph.es} />
        ))}
      </div>
    </div>
  )
}
