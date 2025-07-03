"use client"

import { Container } from "../general/Container"
import ReturnButton from "../general/ReturnButton"
import { COMPONENT_MAP, COMPONENT_TO_SECTION_MAP } from "./ComponentMapper"
import { useBlogData } from "../../hooks/useBlogData"
import LoadingSpinner from "../general/LoadingSpinner"

export default function ComponentRenderer({ templateNumber, componentName, lang = "es" }) {
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
          </div>
        </div>
      </Container>
    )
  }

  const Component = COMPONENT_MAP[componentName]
  if (!Component) {
    return (
      <Container>
        <div className="py-8">
          <ReturnButton />
          <div className="text-center">
            <h1 className="text-fs-24 m-s-b text-gray-800 mb-4">
              {lang === "en" ? "Component not found" : "Componente no encontrado"}
            </h1>
            <p className="text-fs-16 text-gray-600">
              {lang === "en"
                ? `Component "${componentName}" does not exist.`
                : `El componente "${componentName}" no existe.`}
            </p>
          </div>
        </div>
      </Container>
    )
  }

  const sectionKey = COMPONENT_TO_SECTION_MAP[componentName]
  const sectionData = blogData.sections?.[sectionKey] || blogData[sectionKey]

  if (!sectionData) {
    return (
      <Container>
        <div className="py-8">
          <ReturnButton />
          <div className="text-center">
            <h1 className="text-fs-24 m-s-b text-gray-800 mb-4">
              {lang === "en" ? "Data not found" : "Datos no encontrados"}
            </h1>
            <p className="text-fs-16 text-gray-600">
              {lang === "en"
                ? `No data available for "${componentName}".`
                : `No hay datos disponibles para "${componentName}".`}
            </p>
          </div>
        </div>
      </Container>
    )
  }
  const componentType = sectionData.type || "hotel"

  return (
    <Container>
      <div className="py-8">
        <ReturnButton />
        <div className="max-w-[68vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="space-y-12">
              <Component data={sectionData.data || sectionData} type={componentType} lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
