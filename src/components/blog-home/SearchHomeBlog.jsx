"use client"

import { useState } from "react"

export default function SearchHomeBlog({ lang = "es", onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    if (onSearchChange) {
      onSearchChange(value)
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
      <h3 className="text-fs-16 m-s-b mb-4 text-gray-700">{lang === "en" ? "Search Articles" : "Buscar Artículos"}</h3>
      <div className="relative">
        <input
          type="text"
          placeholder={lang === "en" ? "Search..." : "Buscar..."}
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute right-3 top-2.5">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
