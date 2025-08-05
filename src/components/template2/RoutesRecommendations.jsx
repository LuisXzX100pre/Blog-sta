"use client"

import ClickableText from "../general/ClickableText"

export default function RoutesRecommendations({ data, type = "tour", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    if (typeof textObj === "object" && textObj !== null) {
      if (textObj.type && textObj.text) {
        return textObj.text
      }
      if (textObj.es || textObj.en) {
        return textObj[lang] || textObj.es || textObj.en
      }
      return JSON.stringify(textObj)
    }
    return String(textObj || "")
  }

  // Solo usar datos directos del Template 2
  if (!data?.routes || !Array.isArray(data.routes) || data.routes.length === 0) {
    return null
  }

  return (
    <div className="mb-16">
      <ClickableText
        text={getText(data.title) || (lang === "en" ? "Recommended routes" : "Rutas recomendadas")}
        type={type}
        className="m-s-b text-fs-28 text-[#eb741e] mb-[15.5px]"
        as="h2"
      />
      <hr className="mb-11" />
      <ul>
        {data.routes.map((route) => (
          <li key={route.id} className="mb-9">
            <p className="mb-4 m-s-b text-fs-16 text-bl-100">
              {getText(route.origin)} {lang === "en" ? "to" : "a"} {getText(route.destination)}
            </p>
            <p className="text-gry-100 mb-[15.5px] m-m text-fs-14">
              {lang === "en" ? "Approximate duration:" : "Duración aproximada:"} {route.duration}
            </p>
            <p className="text-gry-100 mb-[15.5px] m-m text-fs-12 italic">{getText(route.description)}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  )
}
