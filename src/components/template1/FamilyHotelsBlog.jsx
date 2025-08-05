"use client"

import ClickableText from "../general/ClickableText"

export default function FamilyHotelsBlog({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Solo usar datos directos del Template 1
  if (!data?.hotelList || !Array.isArray(data.hotelList) || data.hotelList.length === 0) {
    return null
  }

  return (
    <div className="my-11">
      <ClickableText text={getText(data.title)} type={type} className="text-fs-20 m-b mb-4" as="h3" />

      <div className="flex flex-col gap-6 text-gry-100 text-fs-14 m-m mb-6">
        {data.introductionParagraphs?.map((paragraph, index) => (
          <p key={index}>{getText(paragraph)}</p>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {data.hotelList.map((hotel, index) => (
          <div key={hotel.id} className="flex gap-2 items-center">
            <span className="m-s-b text-fs-28 text-or-100">{index + 1}.</span>
            <span className="text-fs-16 m-m">{getText(hotel.name)}</span>
          </div>
        ))}
      </div>

      {data.mainImage && (
        <div className="w-full h-[300px] md:h-[437px] mt-6">
          <img
            src={data.mainImage.src || "/placeholder.svg"}
            alt={getText(data.mainImage.alt) || (lang === "en" ? "Recommended hotel" : "Hotel recomendado")}
            className="w-full h-full object-cover rounded-xl border border-gray-200 shadow-sm"
          />
        </div>
      )}
    </div>
  )
}
