import { notFound } from "next/navigation"
import ComponentRenderer from "../../../../../components/dynamics/DynamicTemplateRenderer"

export default function TemplateComponentPage({ params }) {
  const { lang, template, component } = params

  // Validar idioma
  if (lang !== "es" && lang !== "en") {
    notFound()
  }

  // Extraer el número del template
  const templateNumber = template.replace("template", "")

  return <ComponentRenderer templateNumber={templateNumber} componentName={component} lang={lang} />
}
