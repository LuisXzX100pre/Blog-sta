import { use } from "react"
import { notFound } from "next/navigation"
import BlogHomeLayout from "../../layouts/BlogHomeLayout"

export default function LangHomePage({ params }) {
  // Unwrap params usando React.use()
  const { lang } = use(params)

  // Validar idioma
  if (lang !== "es" && lang !== "en") {
    notFound()
  }

  return <BlogHomeLayout lang={lang} />
}

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }]
}
