"use client"

import { notFound } from "next/navigation"
import { useBlogData } from "../../../hooks/useBlogData"
import LoadingSpinner from "../../../components/general/LoadingSpinner"
import Template1Layout from "../../../layouts/Template1Layout"

export default function BlogPage({ params }) {
  const { lang } = params
  const { blogData, loading, error } = useBlogData(lang)

  // Validar idioma
  if (lang !== "es" && lang !== "en") {
    notFound()
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
    return <Template1Layout blogData={formattedBlogData} lang={lang} />
  }

  notFound()
}
