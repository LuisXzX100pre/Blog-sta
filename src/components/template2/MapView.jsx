export default function MapView() {
  return (
    <>
      <div className="mt-9 mb-9">
        <h3 className="text-fs-20 m-b text-[#1a202c] font-bold mb-4">Mapa de ubicaciones</h3>
        <p className="mt-5 text-justify text-fs-14 text-gry-100 m-m mb-4">
          Consulta la ubicación de los lugares mencionados en el siguiente mapa:
        </p>
        <img
          src="/placeholder.svg?height=437&width=800"
          alt="Mapa de ubicaciones"
          className="mt-5 rounded-md h-[437px] w-full object-cover"
        />
      </div>
    </>
  )
}
