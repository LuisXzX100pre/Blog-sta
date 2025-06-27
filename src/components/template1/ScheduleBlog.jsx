"use client"

import ClickableText from "../general/ClickableText"

export default function ScheduleBlog({ data, type = "hotel", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // 🧠 LÓGICA INTELIGENTE: Adaptar datos de cualquier template
  let adaptedData = {
    title: "",
    introduction: "",
    scheduleTable: null,
    footerNote: "",
  }

  // 1️⃣ Si vienen datos directos de Template 1 (ferrySchedule)
  if (data?.scheduleTable) {
    adaptedData = data
    console.log("🎯 ScheduleBlog: Usando datos originales de Template 1")
  }
  // 2️⃣ Si vienen datos de Template 2 (placesToVisit -> convertir a horarios)
  else if (data?.placesList) {
    adaptedData = {
      title: "Horarios recomendados de visita",
      introduction: "Te sugerimos los mejores horarios para visitar cada atracción y aprovechar al máximo tu tiempo.",
      scheduleTable: {
        headers: [
          { id: "place", label: "Lugar" },
          { id: "time", label: "Horario recomendado" },
        ],
        rows: data.placesList.slice(0, 8).map((place, index) => ({
          cancunToIsla: place.title,
          islaToCancun: `${8 + index}:00 - ${10 + index}:00`,
        })),
      },
      footerNote: "Horarios sugeridos pueden variar según la temporada y disponibilidad.",
    }
    console.log("🔄 ScheduleBlog: Adaptando datos de Template 2 (placesToVisit)")
  }
  // 3️⃣ Si vienen datos de Template 3 (monthlyInfo -> convertir a tabla climática)
  else if (data?.seasons) {
    const monthsData = data.seasons[0]?.monthsData || []
    adaptedData = {
      title: "Información climática por mes",
      introduction: "Consulta las condiciones climáticas mes a mes para planificar mejor tu viaje.",
      scheduleTable: {
        headers: [
          { id: "month", label: "Mes" },
          { id: "conditions", label: "Condiciones" },
        ],
        rows: monthsData.slice(0, 8).map((month) => ({
          cancunToIsla: month.monthTitle || "Mes",
          islaToCancun: month.stats?.[0]?.value || "Condiciones ideales",
        })),
      },
      footerNote: "Información climática sujeta a variaciones naturales.",
    }
    console.log("🔄 ScheduleBlog: Adaptando datos de Template 3 (monthlyInfo)")
  }
  // 4️⃣ Fallback genérico
  else {
    adaptedData = {
      title: "Información de horarios",
      introduction: "Consulta los horarios y tiempos recomendados para tu visita.",
      scheduleTable: {
        headers: [
          { id: "activity", label: "Actividad" },
          { id: "schedule", label: "Horario" },
        ],
        rows: [
          { cancunToIsla: "Actividades matutinas", islaToCancun: "8:00 - 12:00" },
          { cancunToIsla: "Actividades vespertinas", islaToCancun: "14:00 - 18:00" },
          { cancunToIsla: "Actividades nocturnas", islaToCancun: "19:00 - 23:00" },
        ],
      },
      footerNote: "Horarios sujetos a disponibilidad y condiciones del destino.",
    }
    console.log("⚠️ ScheduleBlog: Usando datos genéricos (fallback)")
  }

  if (!adaptedData.scheduleTable || !adaptedData.scheduleTable.rows) {
    console.log("ScheduleBlog: No hay datos de tabla para mostrar")
    return null
  }

  return (
    <div className="flex flex-col gap-4 my-11">
      <ClickableText text={getText(adaptedData.title)} type={type} className="text-fs-20 m-b" as="h3" />
      <span className="text-gry-100 text-fs-14 m-m">{getText(adaptedData.introduction)}</span>

      <table className="border-collapse w-full mt-4">
        <thead>
          <tr>
            <th className="rounded-tl-lg border-l border-white bg-bl-100 text-white m-s-b text-fs-14 py-4">
              {getText(adaptedData.scheduleTable.headers[0].label)}
            </th>
            <th className="rounded-tr-lg border-l border-white bg-bl-100 text-white m-s-b text-fs-14 py-4">
              {getText(adaptedData.scheduleTable.headers[1].label)}
            </th>
          </tr>
        </thead>
        <tbody>
          {adaptedData.scheduleTable.rows.map((row, index) => (
            <tr key={index}>
              <td className="border border-[#ebebeb] p-4 text-fs-14 m-m">{row.cancunToIsla}</td>
              <td className="border border-[#ebebeb] p-4 text-fs-14 m-m">{row.islaToCancun}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-fs-12 text-gry-100 italic mt-2">{getText(adaptedData.footerNote)}</p>
    </div>
  )
}
