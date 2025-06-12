export default function CurrentQuestions({ data }) {
  if (!data) {
    console.log("CurrentQuestions: datos insuficientes", data)
    return null
  }

  return (
    <>
      <h3 className="m-s-b text-fs-28 my-4">{data.sectionTitle?.es || "Preguntas frecuentes"}</h3>
      <span className="mb-4 text-fs-14 m-m text-gry-100">{data.introduction?.es}</span>

      {data.faqList &&
        data.faqList.map((faq) => (
          <div key={faq.id} className="flex flex-col gap-4 mt-4">
            <h4 className="m-s-b text-fs-20">{faq.question?.es}</h4>
            <span className="text-fs-14 m-m text-gry-100">{faq.answer?.es}</span>
          </div>
        ))}
    </>
  )
}
