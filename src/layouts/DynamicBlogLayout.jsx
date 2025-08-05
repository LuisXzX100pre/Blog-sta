"use client"

import { useParams, useSearchParams } from "next/navigation"
import { useLanguage } from "../context/LanguageContext"
import { useBlogData } from "../hooks/useBlogData"
import TemplateNavigator from "../components/blog-home/TemplateNavigator"

// Importar los layouts
import Template1Layout from "./Template1Layout"
import Template2Layout from "./Template3Layout"
import Template3Layout from "./Template3Layout"

export default function DynamicBlogLayout() {
  const params = useParams()
  const searchParams = useSearchParams()

  const destination = params?.destination
  const lang = params?.lang
  const currentLang = lang || "es"

  const { blogData, loading, error } = useBlogData(currentLang)

  // Obtener template desde query parameter
  const templateFromUrl = searchParams.get("template")
  const forceTemplate = templateFromUrl ? Number.parseInt(templateFromUrl) : null

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-fs-16 text-gray-500">{currentLang === "en" ? "Loading..." : "Cargando..."}</div>
      </div>
    )
  }

  if (error || !blogData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-fs-16 text-red-500">
          {currentLang === "en" ? "Content not found" : "Contenido no encontrado"}
        </div>
      </div>
    )
  }

  // Buscar el destino por slug
  let destinationData = null
  let destinationKey = null

  Object.entries(blogData).forEach(([key, data]) => {
    if (data.slug === destination || key === destination) {
      destinationData = data
      destinationKey = key
    }
  })

  if (!destinationData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-fs-16 text-red-500">
          {currentLang === "en" ? "Destination not found" : "Destino no encontrado"}
        </div>
      </div>
    )
  }

  // Determinar qué template usar: Query Parameter > JSON Default
  const templateToUse = forceTemplate || destinationData.template || 1

  console.log(`🎯 Renderizando ${destinationKey} con template ${templateToUse}`)

  // Renderizar el template correcto
  const renderTemplate = () => {
    const formattedBlogData = { [destinationKey]: destinationData }

    switch (templateToUse) {
      case 1:
        return <Template1Layout blogData={formattedBlogData} lang={currentLang} />
      case 2:
        return <Template2Layout blogData={formattedBlogData} lang={currentLang} />
      case 3:
        return <Template3Layout blogData={formattedBlogData} lang={currentLang} />
      default:
        return <Template1Layout blogData={formattedBlogData} lang={currentLang} />
    }
  }

  return (
    <div>
      {/* Navegador de Templates */}
      <TemplateNavigator currentTemplate={templateToUse} destinationSlug={destination} lang={currentLang} />

      {/* Contenido del Template */}
      {renderTemplate()}
    </div>
  )
}

