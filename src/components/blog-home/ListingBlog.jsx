"use client"

import { useState, useEffect } from "react"
import CardsHomeBlog from "./CardsHomeBlog"
import { useBlogData } from "../../hooks/useBlogData"

export default function ListingBlog({ lang = "es", selectedCategories = [], searchTerm = "" }) {
  const [isLoader, setIsLoader] = useState(true)
  const [currentBlog, setCurrentBlog] = useState([])
  const { blogData, loading } = useBlogData(lang)

  useEffect(() => {
    if (!loading && blogData) {
      let allBlogs = []

      // Convertir cada destino del JSON en una card
      Object.entries(blogData).forEach(([destinationKey, destinationData]) => {
        const blog = {
          id: destinationKey,
          name: destinationData.slug || destinationKey, // Usar slug como name
          slug: destinationData.slug || destinationKey, // Agregar slug explícitamente
          image:
            destinationData.heroImage ||
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=200&fit=crop",
          date: destinationData.date || "2024-01-15",
          type: [destinationData.type || "tour"],
          template: destinationData.template || 1,
          mainTitle: {
            es: destinationData.blogTitle || "Título del Blog",
            en: destinationData.blogTitle || "Blog Title",
          },
          description: {
            es: destinationData.introduction?.[0] || "Descripción del blog",
            en: destinationData.introduction?.[0] || "Blog description",
          },
        }
        allBlogs.push(blog)
      })

      // Filtrar por categorías seleccionadas
      if (selectedCategories.length > 0) {
        allBlogs = allBlogs.filter((blog) => blog.type.some((blogType) => selectedCategories.includes(blogType)))
      }

      // Filtrar por término de búsqueda
      if (searchTerm.trim()) {
        allBlogs = allBlogs.filter((blog) => {
          const title = blog.mainTitle[lang] || blog.mainTitle.es || ""
          const description = blog.description[lang] || blog.description.es || ""
          const searchLower = searchTerm.toLowerCase()
          return title.toLowerCase().includes(searchLower) || description.toLowerCase().includes(searchLower)
        })
      }

      setCurrentBlog(allBlogs)
      setIsLoader(false)
    }
  }, [blogData, loading, selectedCategories, searchTerm, lang])

  const TruncateLetters = (text, wordLimit) => {
    if (!text) return ""
    const words = text.split(" ")
    if (words.length <= wordLimit) return text
    return words.slice(0, wordLimit).join(" ")
  }

  return (
    <div className="relative">
      <div className="flex gap-4 flex-wrap mt-[47px] max-lg:justify-center mb-6">
        {!isLoader && currentBlog.length > 0 ? (
          <>
            {currentBlog.map((blog, index) => (
              <CardsHomeBlog key={index} blog={blog} lang={lang} TruncateLetters={TruncateLetters} />
            ))}
          </>
        ) : (
          !isLoader && (
            <div className="text-center w-full text-fs-18 m-s-b">
              {lang === "en" ? "No results found" : "No se encontraron resultados"}
            </div>
          )
        )}

        {isLoader && (
          <div className="text-center w-full text-fs-16 text-gray-500">
            {lang === "en" ? "Loading..." : "Cargando..."}
          </div>
        )}
      </div>
    </div>
  )
}
