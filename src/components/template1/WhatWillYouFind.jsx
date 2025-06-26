"use client"

import ClickableText from "../general/ClickableText"

export default function WhatWillYouFind({ data, type = "hotel", lang = "es" }) {
  if (!data || !data.items) {
    console.log("WhatWillYouFind: datos insuficientes", data)
    return null
  }

  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  return (
    <>
      <ClickableText
        text={
          getText(data.title) ||
          (lang === "en" ? "What you'll find at this destination" : "Qué encontrarás en este destino")
        }
        type={type}
        className="text-fs-20 m-b mb-6"
        as="h3"
      />
      <div className="flex flex-col gap-6">
        {data.items.map((item) => (
          <div key={item.id} className="flex gap-6">
            <div className="w-[150px] h-[150px]">
              <img
                src={item.image?.src || "/placeholder.svg"}
                alt={getText(item.image?.alt) || (lang === "en" ? "Tourist attraction" : "Atracción turística")}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="w-[85%] flex flex-col gap-2">
              <span className="m-s-b text-fs-16">{getText(item.name)}</span>
              <p className="m-m text-fs-14 text-gry-100">{getText(item.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
