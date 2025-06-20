import ClickableTitle from "../general/ClickableTitle"

export default function CurrentQuestions({ data, type = "hotel" }) {
  if (!data) {
    console.log("CurrentQuestions: datos insuficientes", data)
    return null
  }

  return (
    <>
      <ClickableTitle
        text={data.sectionTitle?.es || "Preguntas frecuentes"}
        type={type}
        className="m-s-b text-fs-28 my-4"
        as="h3"
      />
      <span className="mb-4 text-fs-14 m-m text-gry-100">{data.introduction?.es}</span>

      {data.faqList &&
        data.faqList.map((faq) => (
          <div key={faq.id} className="flex flex-col gap-4 mt-4">
            <ClickableTitle text={faq.question?.es} type={type} className="m-s-b text-fs-20" as="h4" />
            <span className="text-fs-14 m-m text-gry-100">{faq.answer?.es}</span>
          </div>
        ))}
    </>
  )
}
