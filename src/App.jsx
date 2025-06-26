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
import SectionRenderer from "./components/sections/SectionRenderer"
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

// Componente para manejar las rutas de blog y secciones
function BlogPage() {
  const { lang, section } = useParams()
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

  // Si hay una sección específica, renderizar solo esa sección
  if (section) {
    return <SectionRenderer sectionName={section} lang={lang || "es"} />
  }

  // Si no hay sección, mostrar el blog completo
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

        {/* Rutas de blog con idioma y secciones dinámicas */}
        <Route path="/blog/:lang" element={<BlogPage />} />
        <Route path="/blog/:lang/:section" element={<BlogPage />} />

        {/* Redirección de blog sin idioma */}
        <Route path="/blog" element={<Navigate to={`/blog/${lang || "es"}`} replace />} />

        {/* Rutas de templates con idioma */}
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
