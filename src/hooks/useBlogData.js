"use client"

import { useState, useEffect } from "react"

export function useBlogData(lang, destinationSlug = null) {
  const [blogData, setBlogData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadBlogData = async () => {
      try {
        setLoading(true)
        setError(null)

        let data
        if (lang === "en") {
          // Importar datos en inglés
          const module = await import("../data/blog-data-en.json")
          data = module.default
        } else {
          // Por defecto usar español
          const module = await import("../data/blog-data-es.json")
          data = module.default
        }

        // Si se especifica un destino específico, devolver solo ese
        if (destinationSlug && data[destinationSlug]) {
          setBlogData({ [destinationSlug]: data[destinationSlug] })
        } else {
          setBlogData(data)
        }
      } catch (err) {
        console.error("Error loading blog data:", err)
        setError(err)
        // Fallback a datos en español si hay error
        try {
          const fallbackModule = await import("../data/blog-data-es.json")
          setBlogData(fallbackModule.default)
        } catch (fallbackErr) {
          console.error("Error loading fallback data:", fallbackErr)
        }
      } finally {
        setLoading(false)
      }
    }

    if (lang) {
      loadBlogData()
    }
  }, [lang, destinationSlug])

  return { blogData, loading, error }
}
