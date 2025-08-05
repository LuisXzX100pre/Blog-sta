"use client"

import Link from "next/link"
import { useBlogData } from "../../hooks/useBlogData"
import LoadingSpinner from "../general/LoadingSpinner"

export default function ListingBlog({ lang, selectedCategories, searchTerm }) {
  const { blogData, loading, error } = useBlogData(lang)

  if (loading) return <LoadingSpinner />
  if (error || !blogData) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{lang === "en" ? "Error loading content" : "Error al cargar contenido"}</p>
      </div>
    )
  }

  // Filtrar datos basado en categorías y término de búsqueda
  const filteredData = Object.entries(blogData).filter(([key, data]) => {
    const matchesSearch =
      !searchTerm ||
      data.blogTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.slug?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      key.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => data.type === cat || data.categories?.includes(cat))

    return matchesSearch && matchesCategory
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredData.map(([key, data]) => {
        // Usar el slug si existe, sino usar la key
        const destinationPath = data.slug || key
        const linkUrl = `/${lang}/${destinationPath}`

        console.log(`🔗 Card ${key} -> ${linkUrl}`)

        return (
          <Link
            key={key}
            href={linkUrl}
            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <img
                src={data.heroImage || "/placeholder.svg?height=200&width=300"}
                alt={data.blogTitle}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-fs-18 m-s-b text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {data.blogTitle}
              </h3>
              <p className="text-fs-14 text-gray-600 line-clamp-3 mb-3">
                {Array.isArray(data.introduction) ? data.introduction[0] : data.introduction}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-fs-12 text-gray-500">{data.date || "2024-01-01"}</span>
                <div className="flex items-center gap-2">
                  <span className="text-fs-12 bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {data.type || "tour"}
                  </span>
                  <span className="text-fs-12 bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Template {data.template || 1}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )
      })}

      {filteredData.length === 0 && (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-600">
            {lang === "en"
              ? "No articles found matching your criteria"
              : "No se encontraron artículos que coincidan con tus criterios"}
          </p>
        </div>
      )}
    </div>
  )
}
