"use client"

import { useNavigate } from "react-router-dom"

export default function CardsHomeBlog({ blog, lang = "es", TruncateLetters }) {
  const navigate = useNavigate()

  const searchBlog = (blogItem) => {
    // Si es un template, navegar a la ruta del template
    if (blogItem.isTemplate) {
      navigate(`/${lang}/${blogItem.name}`)
    }
    // Si es una sección específica, navegar a la ruta de sección
    else if (blogItem.isSection) {
      navigate(`/blog/${lang}/${blogItem.name}`)
    }
    // Si es un blog normal, navegar al blog específico
    else {
      navigate(`/blog/${lang}/${blogItem.name}`)
    }
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

  // Agregar una etiqueta especial para los templates y secciones
  const getSpecialLabel = (blogItem) => {
    if (blogItem.isTemplate) {
      const labels = {
        template1: lang === "en" ? "Hotel Guide" : "Guía de Hoteles",
        template2: lang === "en" ? "Tour Guide" : "Guía de Tours",
        template3: lang === "en" ? "Climate Guide" : "Guía del Clima",
      }
      return { text: labels[blogItem.name] || (lang === "en" ? "Template" : "Plantilla"), color: "bg-blue-500" }
    }

    if (blogItem.isSection) {
      return { text: lang === "en" ? "Quick Guide" : "Guía Rápida", color: "bg-green-500" }
    }

    return null
  }

  const specialLabel = getSpecialLabel(blog)

  return (
    <>
      <div className="flex gap-4 flex-wrap max-lg:justify-center hover:cursor-pointer hover:shadow-xl group">
        <div
          onClick={() => searchBlog(blog)}
          className="flex flex-col w-[332px] h-[372px] border border-[#ebebeb] px-4 pt-4 pb-6 rounded-lg shadow-3xl justify-between max-xl:w-[309px] max-md:w-full relative"
        >
          {/* Etiqueta especial para templates y secciones */}
          {specialLabel && (
            <div
              className={`absolute top-2 right-2 ${specialLabel.color} text-white px-2 py-1 rounded-full text-fs-10 m-s-b`}
            >
              {specialLabel.text}
            </div>
          )}

          <div className="flex flex-col gap-4">
            {/* IMG CARD */}
            <div className="h-[150px] overflow-hidden max-md:overflow-hidden rounded-lg">
              <img
                src={blog.image || "/placeholder.svg"}
                alt="blog card"
                className="rounded-lg w-full h-full object-cover group-hover:ease-in-out group-hover:scale-110 group-hover:transition-transform group-hover:duration-500 duration-500 ease-in-out select-none"
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
    </>
  )
}
