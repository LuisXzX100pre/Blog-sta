export default function HowToBook({ data }) {
  if (!data) {
    console.log("HowToBook: datos insuficientes", data)
    return null
  }

  return (
    <>
      <h3 className="text-fs-20 m-b mb-4">{data.title?.es || "Cómo planificar tu viaje"}</h3>

      <div className="flex flex-col gap-[24px] text-gry-100 text-fs-14 mb-8">
        <p>{data.introduction?.es}</p>
      </div>

      {data.steps && data.steps.length > 0 && (
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
                  alt={step.icon?.alt?.es || "Icono"} 
                  className="w-8 h-8" 
                />
              </div>
              <span>{step.text?.es}</span>
            </div>
          ))}
        </div>
      )}
    </>
  )
}