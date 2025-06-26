"use client"

import { Link } from "react-router-dom"
import { useLanguage } from "../../context/LanguageContext"

export default function TemplateSelector() {
  const { lang } = useLanguage()

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8 shadow-sm">
      <h3 className="text-fs-16 m-s-b mb-4 text-gray-700">
        {lang === "en" ? "Quick Navigation" : "Navegación Rápida"}
      </h3>
      <div className="flex gap-3 flex-wrap">
        <Link
          to={`/${lang}`}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-fs-14 m-mmb inline-block text-center"
        >
          {lang === "en" ? "Home" : "Inicio"}
        </Link>
        <Link
          to={`/blog/${lang}`}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-fs-14 m-mmb inline-block text-center"
        >
          {lang === "en" ? "View Blog" : "Ver Blog"}
        </Link>
      </div>

      {/* Selector de idioma */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <h4 className="text-fs-14 m-s-b mb-2 text-gray-600">{lang === "en" ? "Language" : "Idioma"}</h4>
        <div className="flex gap-2">
          <Link
            to={`/es${window.location.pathname.substring(3)}`}
            className={`px-3 py-1 rounded text-fs-12 transition-colors ${
              lang === "es" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Español
          </Link>
          <Link
            to={`/en${window.location.pathname.substring(3)}`}
            className={`px-3 py-1 rounded text-fs-12 transition-colors ${
              lang === "en" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            English
          </Link>
        </div>
      </div>
    </div>
  )
}
