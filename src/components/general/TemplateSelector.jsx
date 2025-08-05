"use client"

import Link from "next/link"
import { useLanguage } from "../../context/LanguageContext"
import { generateDestinationUrl } from "../../utils/templateFlexibility"

export default function TemplateSelector() {
  const { lang } = useLanguage()

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8 shadow-sm">
      <h3 className="text-fs-16 m-s-b mb-4 text-gray-700">
        {lang === "en" ? "Quick Navigation" : "Navegación Rápida"}
      </h3>

      {/* Enlaces principales a destinos */}
      <div className="flex gap-3 flex-wrap mb-4">
        <Link
          href={`/${lang}`}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-fs-14 m-mmb inline-block text-center"
        >
          {lang === "en" ? "Home" : "Inicio"}
        </Link>
        <Link
          href={generateDestinationUrl("puerto-juarez-mexico", lang)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-fs-14 m-mmb inline-block text-center"
        >
          Puerto Juárez
        </Link>
        <Link
          href={generateDestinationUrl("acapulco-mexico", lang)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-fs-14 m-mmb inline-block text-center"
        >
          Acapulco
        </Link>
        <Link
          href={generateDestinationUrl("cuando-es-la-mejor-epoca-para-viajar-a-cancun", lang)}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-fs-14 m-mmb inline-block text-center"
        >
          {lang === "en" ? "Cancún Climate" : "Clima Cancún"}
        </Link>
      </div>

      {/* Selector de templates alternativos */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <h4 className="text-fs-14 m-s-b mb-2 text-gray-600">
          {lang === "en" ? "Try Different Templates" : "Prueba Diferentes Templates"}
        </h4>
        <div className="grid grid-cols-3 gap-2 text-fs-12">
          {/* Puerto Juárez con diferentes templates */}
          <div>
            <p className="font-semibold mb-1">Puerto Juárez:</p>
            <Link
              href={generateDestinationUrl("puerto-juarez-mexico", lang, 2)}
              className="block text-blue-600 hover:underline"
            >
              Template 2
            </Link>
            <Link
              href={generateDestinationUrl("puerto-juarez-mexico", lang, 3)}
              className="block text-blue-600 hover:underline"
            >
              Template 3
            </Link>
          </div>

          {/* Acapulco con diferentes templates */}
          <div>
            <p className="font-semibold mb-1">Acapulco:</p>
            <Link
              href={generateDestinationUrl("acapulco-mexico", lang, 1)}
              className="block text-green-600 hover:underline"
            >
              Template 1
            </Link>
            <Link
              href={generateDestinationUrl("acapulco-mexico", lang, 3)}
              className="block text-green-600 hover:underline"
            >
              Template 3
            </Link>
          </div>

          {/* Cancún con diferentes templates */}
          <div>
            <p className="font-semibold mb-1">Cancún:</p>
            <Link
              href={generateDestinationUrl("cuando-es-la-mejor-epoca-para-viajar-a-cancun", lang, 1)}
              className="block text-orange-600 hover:underline"
            >
              Template 1
            </Link>
            <Link
              href={generateDestinationUrl("cuando-es-la-mejor-epoca-para-viajar-a-cancun", lang, 2)}
              className="block text-orange-600 hover:underline"
            >
              Template 2
            </Link>
          </div>
        </div>
      </div>

      {/* Selector de idioma */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <h4 className="text-fs-14 m-s-b mb-2 text-gray-600">{lang === "en" ? "Language" : "Idioma"}</h4>
        <div className="flex gap-2">
          <Link
            href={`/es${typeof window !== "undefined" ? window.location.pathname.substring(3) : ""}`}
            className={`px-3 py-1 rounded text-fs-12 transition-colors ${
              lang === "es" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Español
          </Link>
          <Link
            href={`/en${typeof window !== "undefined" ? window.location.pathname.substring(3) : ""}`}
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
