"use client"

import ClickableText from "../general/ClickableText"

export default function ScheduleBlog({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Solo usar datos directos del Template 1
  if (!data?.scheduleTable || !data.scheduleTable.rows) {
    return null
  }

  return (
    <div className="flex flex-col gap-4 my-11">
      <ClickableText text={getText(data.title)} type={type} className="text-fs-20 m-b" as="h3" />
      <span className="text-gry-100 text-fs-14 m-m">{getText(data.introduction)}</span>

      <table className="border-collapse w-full mt-4">
        <thead>
          <tr>
            <th className="rounded-tl-lg border-l border-white bg-bl-100 text-white m-s-b text-fs-14 py-4">
              {getText(data.scheduleTable.headers[0].label)}
            </th>
            <th className="rounded-tr-lg border-l border-white bg-bl-100 text-white m-s-b text-fs-14 py-4">
              {getText(data.scheduleTable.headers[1].label)}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.scheduleTable.rows.map((row, index) => (
            <tr key={index}>
              <td className="border border-[#ebebeb] p-4 text-fs-14 m-m">{row.cancunToIsla}</td>
              <td className="border border-[#ebebeb] p-4 text-fs-14 m-m">{row.islaToCancun}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-fs-12 text-gry-100 italic mt-2">{getText(data.footerNote)}</p>
    </div>
  )
}
