"use client"

import { Container } from "../general/Container"
import ReturnButton from "../general/ReturnButton"
import Template1Layout from "../../layouts/Template1Layout"
import Template2Layout from "../../layouts/Template2Layout"
import Template3Layout from "../../layouts/Template3Layout"
import { useBlogData } from "../../hooks/useBlogData"
import LoadingSpinner from "../general/LoadingSpinner"

export default function DynamicTemplateRenderer({ sectionName, lang = "es" }) {
  const { blogData, loading, error } = useBlogData(lang)

  if (loading) {
    return <LoadingSpinner />
  }

  if (error || !blogData) {
    return (
      <Container>
        <div className="py-8">
          <ReturnButton />
          <div className="text-center">
            <h1 className="text-fs-24 m-s-b text-gray-800 mb-4">
              {lang === "en" ? "Content not found" : "Contenido no encontrado"}
            </h1>
            <p className="text-fs-16 text-gray-600">
              {lang === "en" ? "The requested content does not exist." : "El contenido solicitado no existe."}
            </p>
          </div>
        </div>
      </Container>
    )
  }

  // Buscar la sección en el JSON
  const section = blogData.sections?.[sectionName]

  if (!section) {
    return (
      <Container>
        <div className="py-8">
          <ReturnButton />
          <div className="text-center">
            <h1 className="text-fs-24 m-s-b text-gray-800 mb-4">
              {lang === "en" ? "Section not found" : "Sección no encontrada"}
            </h1>
            <p className="text-fs-16 text-gray-600">
              {lang === "en" ? "The requested section does not exist." : "La sección solicitada no existe."}
            </p>
          </div>
        </div>
      </Container>
    )
  }

  // Determinar qué template usar basado en el JSON
  const templateNumber = section.template || 1

  // Crear un blogData modificado que solo contenga esta sección
  const sectionBlogData = {
    ...blogData,
    sections: {
      [sectionName]: section,
    },
  }

  // Seleccionar el template correcto
  const TemplateComponent =
    templateNumber === 1 ? Template1Layout : templateNumber === 2 ? Template2Layout : Template3Layout

  return <TemplateComponent blogData={sectionBlogData} lang={lang} />
}
