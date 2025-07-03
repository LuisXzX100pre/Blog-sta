"use client"

import { useNavigate } from "react-router-dom"

export default function CardsHomeBlog({ blog, lang = "es", TruncateLetters }) {
  const navigate = useNavigate()

  const searchBlog = (blogItem) => {
    // Navegar a la ruta base (sin query parameters)
    // El template por defecto se tomará del JSON
    const targetUrl = `/${lang}/${blogItem.id}`

    console.log("🔍 Navegando a:", targetUrl)
    navigate(targetUrl)
  }

  const getCategoryName = (type) => {
    const categories = {
      hotel: lang === "en" ? "Hotels" : "Hoteles",
      tour: lang === "en" ? "Tours" : "Tours",
      climate: lang === "en" ? "Climate" : "Clima",
      transport: lang === "en" ? "Transport" : "Transporte",
    }
    return categories[type] || type
  }

  const getTemplateLabel = (templateNumber) => {
    const labels = {
      1: lang === "en" ? "Hotel Guide" : "Guía de Hoteles",
      2: lang === "en" ? "Tour Guide" : "Guía de Tours",
      3: lang === "en" ? "Climate Guide" : "Guía del Clima",
    }
    return labels[templateNumber] || (lang === "en" ? "Guide" : "Guía")
  }

  return (
    <div className="flex gap-4 flex-wrap max-lg:justify-center">
      <div
        onClick={() => searchBlog(blog)}
        className="relative flex flex-col w-[332px] h-[372px] border border-[#ebebeb] px-4 pt-4 pb-6 rounded-lg shadow-3xl justify-between max-xl:w-[309px] max-md:w-full cursor-pointer hover:shadow-xl group transition-shadow duration-300"
      >
        {/* Etiqueta del template por defecto */}
        {blog.template && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-fs-10 m-s-b z-20">
            {getTemplateLabel(blog.template)}
          </div>
        )}

        <div className="flex flex-col gap-4">
          {/* IMG CARD */}
          <div className="h-[150px] overflow-hidden rounded-lg relative z-10">
            <img
              src={blog.image || "/placeholder.svg"}
              alt="blog card"
              className="rounded-lg w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out select-none"
            />
          </div>

          {/* DATE CARD */}
          <div className="flex flex-col gap-2">
            <span className="text-[#d1d2d5] text-fs-12 m-m">{blog.date}</span>

            {/* NAME CARD */}
            <span className="text-fs-16 m-b">
              {TruncateLetters(blog.mainTitle?.[lang] || blog.mainTitle?.es || "...", 10)}
            </span>

            {/* DESCRIPTION */}
            <span className="text-fs-12 m-m text-gry-100 text-justify">
              {TruncateLetters(blog.description?.[lang] || blog.description?.es || "...", 21) + " ..."}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          {blog.type.map((blogT, index) => (
            <div key={index} className="rounded-full bg-gry-50 text-gry-100 px-2 py-1 w-fit text-fs-10">
              {getCategoryName(blogT)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
