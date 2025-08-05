"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import { useBlogData } from "../../../hooks/useBlogData"
import LoadingSpinner from "../../../components/general/LoadingSpinner"
import Template1Layout from "../../../layouts/Template1Layout"
import Template2Layout from "../../../layouts/Template2Layout"
import Template3Layout from "../../../layouts/Template3Layout"
import { useSearchParams } from "next/navigation"

export default function DynamicDestinationPage({ params }) {
  // Unwrap params usando React.use()
  const { lang, destination } = use(params)
  const searchParams = useSearchParams()

  // Obtener template desde searchParams
  const templateOverride = searchParams.get("template") ? Number.parseInt(searchParams.get("template")) : null

  // Validar idioma
  if (lang !== "es" && lang !== "en") {
    notFound()
  }

  const { blogData, loading, error } = useBlogData(lang)

  if (loading) {
    return <LoadingSpinner />
  }

  if (error || !blogData) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-red-600">Error al cargar el contenido. Intenta nuevamente.</p>
      </div>
    )
  }

  // Buscar el destino por slug o key
  let destinationData = null
  let destinationKey = null

  // Primero buscar por slug
  Object.entries(blogData).forEach(([key, data]) => {
    if (data.slug === destination) {
      destinationData = data
      destinationKey = key
    }
  })

  // Si no se encuentra por slug, buscar por key
  if (!destinationData && blogData[destination]) {
    destinationData = blogData[destination]
    destinationKey = destination
  }

  if (!destinationData) {
    console.log(`❌ No se encontró destino: ${destination}`)
    console.log("Destinos disponibles:", Object.keys(blogData))
    notFound()
  }

  const templateToUse = templateOverride || destinationData.template || 1

  console.log(`🎯 Renderizando ${destinationKey} con template ${templateToUse}`)

  const formattedBlogData = { [destinationKey]: destinationData }

  const TemplateComponent =
    templateToUse === 1
      ? Template1Layout
      : templateToUse === 2
        ? Template2Layout
        : templateToUse === 3
          ? Template3Layout
          : Template1Layout

  return <TemplateComponent blogData={formattedBlogData} lang={lang} />
}
