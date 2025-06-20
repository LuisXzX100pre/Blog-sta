import Title2 from "../general/Title2"
import Paragraph from "../general/Paragraph"

export default function InfoByMonth({ data }) {
  return (
    <div className="mt-11">
      {data.seasons.map((season) => (
        <div key={season.id}>
          <Title2 title={season.seasonTitle.es} />
          <hr className="my-[15.5px]" />
          <div className="flex flex-col gap-5">
            {season.seasonIntroductionParagraphs.map((paragraph, index) => (
              <Paragraph key={index} text={paragraph.es} />
            ))}
          </div>

          {season.monthsData.map((month) => (
            <div key={month.id} className="mb-4">
              <h4 className="text-fs-20 m-s-b my-4">{month.monthTitle.es}</h4>
              {month.stats.map((stat) => (
                <Paragraph key={stat.id} text={`${stat.icon} ${stat.label.es} ${stat.value}`} />
              ))}

              <div className="flex flex-col gap-5 my-4">
                {month.descriptionParagraphs.map((paragraph, index) => (
                  <Paragraph key={index} text={paragraph.es} />
                ))}
              </div>

              <img
                src={month.image.src || "/placeholder.svg"}
                alt={month.image.alt.es}
                style={{ borderRadius: "0.5em" }}
                className="h-[437px] object-cover w-full"
                  />

              <div className="italic m-s-b text-fs-12 text-gry-100 mt-4">{month.image.alt.es}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
