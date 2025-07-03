"use client"

import { Routes, Route, useParams, Navigate, useSearchParams } from "react-router-dom"
import Navigation from "./components/navigation/Navigation.jsx"
import FooterT from "./components/footer/FooterT.jsx"
import ScrollToTop from "./components/general/ScrollToTop"
import LoadingSpinner from "./components/general/LoadingSpinner"
import Template1Layout from "./layouts/Template1Layout"
import Template2Layout from "./layouts/Template2Layout"
import Template3Layout from "./layouts/Template3Layout"
import BlogHomeLayout from "./layouts/BlogHomeLayout"
import ComponentRenderer from "./components/dynamics/ComponentRenderer"
import { useBlogData } from "./hooks/useBlogData"
import { useLanguage } from "./context/LanguageContext"
import { intelligentAdapter } from "./utils/intelligentDataAdapter.js"

// Componente para el home principal
function HomePage() {
  const { lang } = useParams()

  if (lang && lang !== "es" && lang !== "en") {
    return <Navigate to="/es" replace />
  }

  return <BlogHomeLayout lang={lang || "es"} />
}

function TemplateComponentPage() {
  const { lang, template, component } = useParams()

  if (lang && lang !== "es" && lang !== "en") {
    return <Navigate to="/es" replace />
  }

  // Extraer el número del template
  const templateNumber = template.replace("template", "")

  return <ComponentRenderer templateNumber={templateNumber} componentName={component} lang={lang || "es"} />
}

// Componente para manejar las rutas dinámicas de destinos específicos
function DynamicDestinationPage() {
  const { lang, destination } = useParams()
  const { blogData, loading, error } = useBlogData(lang)

  // Obtener parámetro de template de la URL si existe
  const [searchParams] = useSearchParams()
  const templateOverride = searchParams.get("template") ? Number.parseInt(searchParams.get("template")) : null

  if (lang && lang !== "es" && lang !== "en") {
    return <Navigate to="/es" replace />
  }

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

  const destinationData = blogData[destination]
  if (!destinationData) {
    const destinationEntry = Object.entries(blogData).find(([key, data]) => data.slug === destination)
    if (destinationEntry) {
      const [destinationKey] = destinationEntry
      return <Navigate to={`/${lang}/${destinationKey}`} replace />
    }
    return <Navigate to={`/${lang || "es"}`} replace />
  }

  const templateToUse = templateOverride || destinationData.template || 1
  const originalTemplate = destinationData.template || 1

  console.log(`🎯 Template original: ${originalTemplate}, Template a usar: ${templateToUse}`)

  let adaptedData = destinationData

  if (templateToUse !== originalTemplate) {
    console.log(`🔄 Adaptando datos de ${destination} de template ${originalTemplate} a template ${templateToUse}`)

    const adaptedSections = {}

    Object.entries(destinationData.sections || {}).forEach(([key, section]) => {
      if (section?.data) {
        const componentType = getComponentTypeFromSectionKey(key, templateToUse)

        adaptedSections[key] = {
          ...section,
          data: intelligentAdapter.adaptDataForComponent(section.data, componentType, {}),
        }
      } else {
        adaptedSections[key] = section
      }
    })

    adaptedData = {
      ...destinationData,
      template: templateToUse,
      sections: adaptedSections,
    }

    console.log(`✅ Datos adaptados de ${destination} para template ${templateToUse}`)
  }

  function getComponentTypeFromSectionKey(sectionKey, targetTemplate) {
    const mappings = {
      1: {
        whatToFind: "list",
        photoGallery: "gallery",
        locationInfo: "info",
        ferrySchedule: "schedule",
        journeyVideo: "video",
        familyHotels: "list",
        favoriteActivities: "list",
        howToGetThere: "info",
        howToBookTransport: "info",
        routesFrom: "list",
      },
      2: {
        placesToVisit: "list",
        touristMap: "map",
        quickFact: "info",
        beforeYouVisitRecommendations: "list",
        routesFrom: "list",
        acapulcoGuide: "info",
      },
      3: {
        monthlyInfo: "monthly",
        generalClimateInfo: "info",
        frequentlyAskedQuestions: "faq",
      },
    }

    return mappings[targetTemplate]?.[sectionKey] || "info"
  }

  const formattedBlogData = { [destination]: adaptedData }

  const TemplateComponent =
    templateToUse === 1
      ? Template1Layout
      : templateToUse === 2
        ? Template2Layout
        : templateToUse === 3
          ? Template3Layout
          : Template1Layout

  return <TemplateComponent blogData={formattedBlogData} lang={lang || "es"} />
}

function BlogPage() {
  const { lang } = useParams()
  const { blogData, loading, error } = useBlogData(lang)

  if (lang && lang !== "es" && lang !== "en") {
    return <Navigate to="/blog/es" replace />
  }

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

  const puertoJuarezData = blogData["puerto-juarez-mexico"]
  if (puertoJuarezData) {
    const formattedBlogData = { "puerto-juarez-mexico": puertoJuarezData }
    return <Template1Layout blogData={formattedBlogData} lang={lang || "es"} />
  }

  return <Navigate to="/es" replace />
}

function App() {
  const { lang } = useLanguage()

  return (
    <>
      <Navigation />
      <ScrollToTop />
      <Routes>
        {/* Redirección de la raíz al idioma por defecto */}
        <Route path="/" element={<Navigate to={`/${lang || "es"}`} replace />} />

        {/* Ruta principal del home */}
        <Route path="/:lang" element={<HomePage />} />

        {/* RUTAS PRINCIPALES: Destinos específicos con sus identificadores URL */}
        <Route path="/:lang/:destination" element={<DynamicDestinationPage />} />

        {/* RUTAS ESPECÍFICAS: Componentes específicos dentro de templates */}
        <Route path="/:lang/:template/:component" element={<TemplateComponentPage />} />

        {/* Rutas de blog completo (legacy) */}
        <Route path="/blog/:lang" element={<BlogPage />} />
        <Route path="/blog" element={<Navigate to={`/blog/${lang || "es"}`} replace />} />

        {/* Redirecciones de templates sin idioma (legacy) */}
        <Route path="/template1" element={<Navigate to={`/${lang || "es"}/puerto-juarez-mexico`} replace />} />
        <Route path="/template2" element={<Navigate to={`/${lang || "es"}/acapulco-guia-completa`} replace />} />
        <Route path="/template3" element={<Navigate to={`/${lang || "es"}/cancun-guia-hoteles`} replace />} />

        {/* Ruta catch-all para URLs no válidas */}
        <Route path="*" element={<Navigate to={`/${lang || "es"}`} replace />} />
      </Routes>
      <FooterT />
    </>
  )
}

export default App
