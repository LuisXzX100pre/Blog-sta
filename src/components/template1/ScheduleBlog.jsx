import ClickableText from "../general/ClickableText"

export default function ScheduleBlog({ data, type = "hotel" }) {
  if (!data || !data.scheduleTable) {
    console.log("ScheduleBlog: datos insuficientes", data)
    return null
  }

  return (
    <div className="flex flex-col gap-4 my-11">
      <ClickableText text={data.title?.es || "Horarios"} type={type} className="text-fs-20 m-b" as="h3" />
      <span className="text-gry-100 text-fs-14 m-m">{data.introduction?.es}</span>

      <table className="border-collapse w-full mt-4">
        <thead>
          <tr>
            <th className="rounded-tl-lg border-l border-white bg-bl-100 text-white m-s-b text-fs-14 py-4">
              {data.scheduleTable.headers[0].label?.es}
            </th>
            <th className="rounded-tr-lg border-l border-white bg-bl-100 text-white m-s-b text-fs-14 py-4">
              {data.scheduleTable.headers[1].label?.es}
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
      <p className="text-fs-12 text-gry-100 italic mt-2">{data.footerNote?.es}</p>
    </div>
  )
}
