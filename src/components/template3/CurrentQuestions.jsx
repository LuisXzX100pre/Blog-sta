import ClickableTitle from "../general/ClickableTitle"

export default function CurrentQuestions({ data, type = "hotel", lang = "es" }) {
  if (!data) {
    console.log("CurrentQuestions: datos insuficientes", data)
    return null
  }

  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  return (
    <>
      <ClickableTitle
        text={getText(data.sectionTitle) || (lang === "en" ? "Frequently Asked Questions" : "Preguntas frecuentes")}
        type={type}
        className="m-s-b text-fs-28 my-4"
        as="h3"
      />
      <span className="mb-4 text-fs-14 m-m text-gry-100">{getText(data.introduction)}</span>

      {data.faqList &&
        data.faqList.map((faq) => (
          <div key={faq.id} className="flex flex-col gap-4 mt-4">
            <ClickableTitle text={getText(faq.question)} type={type} className="m-s-b text-fs-20" as="h4" />
            <span className="text-fs-14 m-m text-gry-100">{getText(faq.answer)}</span>
          </div>
        ))}
    </>
  )
}
