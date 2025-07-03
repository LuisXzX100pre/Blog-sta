"use client"

import { Routes, Route, Navigate } from "react-router-dom"
import { useLanguage } from "../../context/LanguageContext"
import BlogHomeLayout from "../../layouts/BlogHomeLayout"
import DynamicBlogLayout from "../layouts/DynamicBlogLayout"

export default function BlogRouter() {
  const { lang } = useLanguage()

  return (
    <Routes>
      {/* Ruta del home del blog */}
      <Route path="/" element={<BlogHomeLayout lang={lang} />} />
      <Route path="/:lang" element={<BlogHomeLayout />} />

      {/* 🚀 RUTA DINÁMICA UNIVERSAL - Maneja cualquier slug con query parameters */}
      <Route path="/:lang/:destination" element={<DynamicBlogLayout />} />

      {/* Fallback para rutas no encontradas */}
      <Route path="*" element={<Navigate to={`/${lang || "es"}`} replace />} />
    </Routes>
  )
}
