export default function RoutesRecommendations() {
  const routes = [
    {
      id: "route_1",
      origin: { es: "Ciudad de México" },
      destination: { es: "Destino turístico" },
      duration: "05 h 00m",
      description: { es: "Ruta más popular y directa desde la capital del país" },
    },
    {
      id: "route_2",
      origin: { es: "Guadalajara" },
      destination: { es: "Destino turístico" },
      duration: "07 h 30m",
      description: { es: "Conexión desde la perla tapatía hacia la costa" },
    },
    {
      id: "route_3",
      origin: { es: "Puebla" },
      destination: { es: "Destino turístico" },
      duration: "04 h 45m",
      description: { es: "Ruta alternativa desde la ciudad de los ángeles" },
    },
  ]

  return (
    <>
      <div className="mb-16">
        <h2 className=" m-s-b text-fs-28 text-[#eb741e] mb-[15.5px]">Rutas recomendadas</h2>
        <hr className="mb-11"></hr>
        <ul>
          {routes.map((route) => (
            <li key={route.id} className="mb-9">
              <p className="mb-4 m-s-b text-fs-16 text-bl-100">
                {route.origin.es} a {route.destination.es}
              </p>
              <p className="text-gry-100 mb-[15.5px] m-m text-fs-14">Duración aproximada: {route.duration}</p>
              <p className="text-gry-100 mb-[15.5px] m-m text-fs-12 italic">{route.description.es}</p>
              <hr></hr>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
