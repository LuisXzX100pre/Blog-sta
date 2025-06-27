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
import DynamicTemplateRenderer from "./components/dynamics/DynamicTemplateRenderer.jsx"
import ComponentRenderer from "./components/dynamics/ComponentRenderer.jsx"
import { useBlogData } from "./hooks/useBlogData"
import { useLanguage } from "./context/LanguageContext"

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

// Componente para manejar las rutas dinámicas de secciones
function DynamicSectionPage() {
  const { lang, section } = useParams()
  const { setLang } = useLanguage()

  useEffect(() => {
    if (lang && (lang === "es" || lang === "en")) {
      setLang(lang)
    }
  }, [lang, setLang])

  if (lang && lang !== "es" && lang !== "en") {
    return <Navigate to="/es" replace />
  }

  return <DynamicTemplateRenderer sectionName={section} lang={lang || "es"} />
}

// Componente para manejar las rutas de blog completo
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

  return <Template1Layout blogData={blogData} lang={lang || "es"} />
}

// Componente para rutas de template específico con idioma
function TemplatePageWithLang({ TemplateComponent }) {
  const { lang } = useParams()
  const { setLang } = useLanguage()
  const { blogData, loading, error } = useBlogData(lang)

  useEffect(() => {
    if (lang && (lang === "es" || lang === "en")) {
      setLang(lang)
    }
  }, [lang, setLang])

  if (lang && lang !== "es" && lang !== "en") {
    return <Navigate to="/es/template1" replace />
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

  return <TemplateComponent blogData={blogData} lang={lang || "es"} />
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

        {/* NUEVAS RUTAS: Componentes específicos dentro de templates */}
        <Route path="/:lang/:template/:component" element={<TemplateComponentPage />} />

        {/* Rutas dinámicas para secciones específicas */}
        <Route path="/:lang/:section" element={<DynamicSectionPage />} />

        {/* Rutas de blog completo */}
        <Route path="/blog/:lang" element={<BlogPage />} />
        <Route path="/blog" element={<Navigate to={`/blog/${lang || "es"}`} replace />} />

        {/* Rutas de templates específicos */}
        <Route path="/:lang/template1" element={<TemplatePageWithLang TemplateComponent={Template1Layout} />} />
        <Route path="/:lang/template2" element={<TemplatePageWithLang TemplateComponent={Template2Layout} />} />
        <Route path="/:lang/template3" element={<TemplatePageWithLang TemplateComponent={Template3Layout} />} />

        {/* Redirecciones de templates sin idioma */}
        <Route path="/template1" element={<Navigate to={`/${lang || "es"}/template1`} replace />} />
        <Route path="/template2" element={<Navigate to={`/${lang || "es"}/template2`} replace />} />
        <Route path="/template3" element={<Navigate to={`/${lang || "es"}/template3`} replace />} />

        {/* Ruta catch-all para URLs no válidas */}
        <Route path="*" element={<Navigate to="/es" replace />} />
      </Routes>
      <FooterT />
    </>
  )
}

export default App
