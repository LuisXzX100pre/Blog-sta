"use client"

import ClickableText from "../general/ClickableText"

export default function VideoPlace({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Solo usar datos directos del Template 1
  if (!data?.video?.embedUrl) {
    return null
  }

  return (
    <div className="my-11">
      <ClickableText text={getText(data.title)} type={type} className="text-fs-20 m-b mb-4" as="h3" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 text-gry-100 text-fs-14 m-m mb-8">
        {data.descriptionParagraphs?.map((paragraph, index) => (
          <p key={index}>{getText(paragraph)}</p>
        ))}
      </div>

      {/* VIDEO */}
      <div
        className="h-[250px] md:h-[437px] w-full overflow-hidden border border-gray-200 shadow-sm"
        style={{ borderRadius: "0.5em" }}
      >
        <iframe
          src={data.video.embedUrl}
          frameBorder="0"
          allowFullScreen
          width="100%"
          height="100%"
          style={{ borderRadius: "0.5em" }}
          aria-label={getText(data.video.ariaTitle)}
        />
      </div>

      {data.videoCaption && (
        <p className="text-fs-12 text-gry-100 italic mt-2 text-center">{getText(data.videoCaption)}</p>
      )}
    </div>
  )
}
