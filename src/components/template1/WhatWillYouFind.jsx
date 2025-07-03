"use client"

import Title from "../general/Titles"

export default function WhatWillYouFind({ data, type = "hotel", lang = "es" }) {
  const getText = (text) => {
    if (typeof text === "string") return text
    if (Array.isArray(text)) return text.map(getText).join(" ")
    if (typeof text === "object" && text !== null && text.hasOwnProperty("content")) return getText(text.content)
    return ""
  }

  // Solo usar datos directos del Template 1
  if (!data?.items || !Array.isArray(data.items) || data.items.length === 0) {
    return (
      <div className="mt-11">
        <p className="text-center text-gray-600">
          {lang === "en" ? "No information available at the moment." : "No hay información disponible en este momento."}
        </p>
      </div>
    )
  }

  return (
    <div className="mt-11">
      <Title title={getText(data.title)} type={type} />
      <hr className="my-[15.5px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.items.map((item, index) => (
          <div key={item.id || index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={item.image?.src || "/placeholder.svg"}
                alt={item.image?.alt || item.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
