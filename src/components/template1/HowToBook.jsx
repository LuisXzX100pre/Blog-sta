"use client"

import ClickableText from "../general/ClickableText"

export default function HowToBook({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Solo usar datos directos del Template 1
  if (!data?.steps || !Array.isArray(data.steps) || data.steps.length === 0) {
    return null
  }

  return (
    <>
      <ClickableText text={getText(data.title)} type={type} className="text-fs-20 m-b mb-4" as="h3" />

      <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14 mb-8">
        <p>{getText(data.introduction)}</p>
      </div>

      <div className="flex justify-around mb-[44px]">
        {data.steps.map((step) => (
          <div key={step.id} className="flex flex-col justify-center items-center text-center w-[216px] gap-6">
            <div
              className={`w-[80px] h-[80px] ${
                step.highlightStyle === "accent" ? "bg-or-100" : "bg-gry-50"
              } rounded-lg flex items-center justify-center`}
            >
              <img
                src={step.icon?.src || "/placeholder.svg"}
                alt={getText(step.icon?.alt) || (lang === "en" ? "Icon" : "Icono")}
                className="w-8 h-8"
              />
            </div>
            <span>{getText(step.text)}</span>
          </div>
        ))}
      </div>
    </>
  )
}
