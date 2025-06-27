"use client"

import { useEffect } from "react"
import { Routes, Route, useParams, Navigate } from "react-router-dom"
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
import { adaptDataForTemplate } from "./utils/dataAdapter.js"

// Componente para el home principal
function HomePage() {
  const { lang } = useParams()
  const { setLang } = useLanguage()

  useEffect(() => {
    if (lang && (lang === "es" || lang === "en")) {
      setLang(lang)
    }
  }, [lang, setLang])

  if (lang && lang !== "es" && lang !== "en") {
    return <Navigate to="/es" replace />
  }

  return <BlogHomeLayout lang={lang || "es"} />
}

// Componente para manejar componentes específicos dentro de templates
function TemplateComponentPage() {
  const { lang, template, component } = useParams()
  const { setLang } = useLanguage()

  useEffect(() => {
    if (lang && (lang === "es" || lang === "en")) {
      setLang(lang)
    }
  }, [lang, setLang])

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
  const { setLang } = useLanguage()
  const { blogData, loading, error } = useBlogData(lang)

  // Obtener parámetro de template de la URL si existe
  const urlParams = new URLSearchParams(window.location.search)
  const templateOverride = urlParams.get("template") ? Number.parseInt(urlParams.get("template")) : null

  useEffect(() => {
    if (lang && (lang === "es" || lang === "en")) {
      setLang(lang)
    }
  }, [lang, setLang])

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

  // Verificar si el destino existe en los datos
  const destinationData = blogData[destination]
  if (!destinationData) {
    return <Navigate to="/es" replace />
  }

  // Determinar qué template usar (override, del JSON, o por defecto)
  const templateToUse = templateOverride || destinationData.template || 1

  console.log(`🎯 Template original: ${destinationData.template}, Template a usar: ${templateToUse}`)

  // Adaptar datos usando el nuevo sistema inteligente
  const adaptedData =
    templateToUse !== destinationData.template ? adaptDataForTemplate(destinationData, templateToUse) : destinationData

  // Crear el objeto de datos en el formato esperado por los layouts
  const formattedBlogData = { [destination]: adaptedData }

  // Seleccionar el template correcto según el número de template
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

// Componente para manejar las rutas de blog completo (legacy)
function BlogPage() {
  const { lang } = useParams()
  const { setLang } = useLanguage()
  const { blogData, loading, error } = useBlogData(lang)

  useEffect(() => {
    if (lang && (lang === "es" || lang === "en")) {
      setLang(lang)
    }
  }, [lang, setLang])

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

  // Por defecto mostrar Puerto Juárez (Template 1)
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
        <Route path="/" element={<Navigate to="/es" replace />} />

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
        <Route path="/template2" element={<Navigate to={`/${lang || "es"}/acapulco-mexico`} replace />} />
        <Route
          path="/template3"
          element={<Navigate to={`/${lang || "es"}/cuando-es-la-mejor-epoca-para-viajar-a-cancun`} replace />}
        />

        {/* Ruta catch-all para URLs no válidas */}
        <Route path="*" element={<Navigate to="/es" replace />} />
      </Routes>
      <FooterT />
    </>
  )
}

export default App
