import Paragraph from "../general/Paragraph"
import ClickableTitle from "../general/ClickableTitle"

export default function InfoByMonth({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  return (
    <div className="mt-11">
      {data.seasons.map((season) => (
        <div key={season.id}>
          <ClickableTitle
            text={getText(season.seasonTitle)}
            type={type}
            className="text-fs-24 m-s-b text-[#1a202c] mb-4"
            as="h2"
          />
          <hr className="my-[15.5px]" />
          <div className="flex flex-col gap-5">
            {season.seasonIntroductionParagraphs.map((paragraph, index) => (
              <Paragraph key={index} text={getText(paragraph)} />
            ))}
          </div>

          {season.monthsData.map((month) => (
            <div key={month.id} className="mb-4">
              <ClickableTitle text={getText(month.monthTitle)} type={type} className="text-fs-20 m-s-b my-4" as="h4" />
              {month.stats.map((stat) => (
                <Paragraph key={stat.id} text={`${stat.icon} ${getText(stat.label)} ${stat.value}`} />
              ))}

              <div className="flex flex-col gap-5 my-4">
                {month.descriptionParagraphs.map((paragraph, index) => (
                  <Paragraph key={index} text={getText(paragraph)} />
                ))}
              </div>

              <img
                src={month.image.src || "/placeholder.svg"}
                alt={getText(month.image.alt)}
                style={{ borderRadius: "0.5em" }}
                className="h-[437px] object-cover w-full"
              />

              <div className="italic m-s-b text-fs-12 text-gry-100 mt-4">{getText(month.image.alt)}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
