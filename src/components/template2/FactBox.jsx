export default function FactBox({ data, lang = "es" }) {
  if (!data) return null

  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  return (
    <>
      <div className="bg-gry-50 my-6 rounded-lg">
        <div className="p-4">
          <p className="m-s-b mb-4 text-fs-14 text-[#1a202c]">{getText(data.title)}</p>
          <p className="text-gray-600 text-justify m-m text-fs-14">{getText(data.fact)}</p>
        </div>
      </div>
    </>
  )
}
