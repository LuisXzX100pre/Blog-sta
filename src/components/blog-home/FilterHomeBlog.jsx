"use client"

import { useState, useEffect } from "react"

export default function FilterHomeBlog({ lang = "es", onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([])

  const categories = [
    { id: "hotel", name: lang === "en" ? "Hotels" : "Hoteles" },
    { id: "tour", name: lang === "en" ? "Tours" : "Tours" },
    { id: "climate", name: lang === "en" ? "Climate" : "Clima" },
    { id: "transport", name: lang === "en" ? "Transport" : "Transporte" },
  ]

  const toggleCategory = (categoryId) => {
    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId]

    setSelectedCategories(newCategories)
  }

  // Notificar cambios al componente padre
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(selectedCategories)
    }
  }, [selectedCategories, onFilterChange])

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
      <h3 className="text-fs-16 m-s-b mb-4 text-gray-700">
        {lang === "en" ? "Filter by Category" : "Filtrar por Categoría"}
      </h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <label key={category.id} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.id)}
              onChange={() => toggleCategory(category.id)}
              className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-fs-14 text-gray-700">{category.name}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
