export default function WhatWillYouFind({ data }) {
  if (!data || !data.items) {
    console.log("WhatWillYouFind: datos insuficientes", data)
    return null
  }

  return (
    <>
      <h3 className="text-fs-20 m-b mb-6">{data.title?.es || "Qué encontrarás en este destino"}</h3>
      <div className="flex flex-col gap-6">
        {data.items.map((item) => (
          <div key={item.id} className="flex gap-6">
            <div className="w-[150px] h-[150px]">
              <img
                src={item.image?.src || "/placeholder.svg"}
                alt={item.image?.alt?.es || "Atracción turística"}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="w-[85%] flex flex-col gap-2">
              <span className="m-s-b text-fs-16">{item.name?.es}</span>
              <p className="m-m text-fs-14 text-gry-100">{item.description?.es}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
