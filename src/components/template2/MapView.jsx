import ClickableText from "../general/ClickableText"

export default function MapView({ data, type = "tour", lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  return (
    <>
      <div className="mt-9 mb-9">
        <ClickableText
          text={data?.title ? getText(data.title) : lang === "en" ? "Location Map" : "Mapa de ubicaciones"}
          type={type}
          className="text-fs-20 m-b text-[#1a202c] font-bold mb-4"
          as="h3"
        />
        <p className="mt-5 text-justify text-fs-14 text-gry-100 m-m mb-4">
          {data?.introduction
            ? getText(data.introduction)
            : lang === "en"
              ? "Check the location of the mentioned places on the following map:"
              : "Consulta la ubicación de los lugares mencionados en el siguiente mapa:"}
        </p>
        <img
          src={data?.fallbackImage?.src || "/src/assets/MAPA DE PUERTO JUAREZ.png"}
          alt={
            data?.fallbackImage?.alt
              ? getText(data.fallbackImage.alt)
              : lang === "en"
                ? "Location map"
                : "Mapa de ubicaciones"
          }
          className="mt-5 h-[437px] w-full object-cover rounded-[0.5em]"
        />
      </div>
    </>
  )
}
