"use client"

import ClickableText from "../general/ClickableText"

export default function CurrentQuestions({ data, type = "tour", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Solo usar datos directos del Template 3
  if (!data?.faqList || !Array.isArray(data.faqList) || data.faqList.length === 0) {
    return null
  }

  return (
    <div className="my-11">
      <ClickableText text={getText(data.sectionTitle)} type={type} className="text-fs-24 m-b mb-6" as="h2" />

      {data.introduction && <p className="text-gry-100 text-fs-14 m-m mb-8">{getText(data.introduction)}</p>}

      <div className="space-y-6">
        {data.faqList.map((faq, index) => (
          <div key={faq.id} className="border-b border-gray-200 pb-6">
            <ClickableText text={getText(faq.question)} type={type} className="text-fs-16 m-s-b mb-3" as="h3" />
            <p className="text-gry-100 text-fs-14 m-m">{getText(faq.answer)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
