import ClickableText from "../general/ClickableText"

export default function RoutesRecommendations({ data, type = "tour", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  // Usar datos del prop o fallback a datos por defecto
  const routes = data?.routes || [
    {
      id: "route_1",
      origin: lang === "en" ? "Mexico City" : "Ciudad de México",
      destination: lang === "en" ? "Tourist destination" : "Destino turístico",
      duration: "05 h 00m",
      description:
        lang === "en"
          ? "Most popular and direct route from the country's capital"
          : "Ruta más popular y directa desde la capital del país",
    },
    {
      id: "route_2",
      origin: "Guadalajara",
      destination: lang === "en" ? "Tourist destination" : "Destino turístico",
      duration: "07 h 30m",
      description:
        lang === "en"
          ? "Connection from the pearl of Jalisco to the coast"
          : "Conexión desde la perla tapatía hacia la costa",
    },
    {
      id: "route_3",
      origin: "Puebla",
      destination: lang === "en" ? "Tourist destination" : "Destino turístico",
      duration: "04 h 45m",
      description:
        lang === "en" ? "Alternative route from the city of angels" : "Ruta alternativa desde la ciudad de los ángeles",
    },
  ]

  return (
    <>
      <div className="mb-16">
        <ClickableText
          text={data?.title ? getText(data.title) : lang === "en" ? "Recommended routes" : "Rutas recomendadas"}
          type={type}
          className="m-s-b text-fs-28 text-[#eb741e] mb-[15.5px]"
          as="h2"
        />
        <hr className="mb-11"></hr>
        <ul>
          {routes.map((route) => (
            <li key={route.id} className="mb-9">
              <p className="mb-4 m-s-b text-fs-16 text-bl-100">
                {getText(route.origin) || route.origin} {lang === "en" ? "to" : "a"}{" "}
                {getText(route.destination) || route.destination}
              </p>
              <p className="text-gry-100 mb-[15.5px] m-m text-fs-14">
                {lang === "en" ? "Approximate duration:" : "Duración aproximada:"} {route.duration}
              </p>
              <p className="text-gry-100 mb-[15.5px] m-m text-fs-12 italic">
                {getText(route.description) || route.description}
              </p>
              <hr></hr>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
