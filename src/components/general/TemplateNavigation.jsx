"use client"

import { Link } from "react-router-dom"

export default function TemplateNavigation({ currentTemplate }) {
  const templates = [
    { id: "home", name: "Home", color: "gray", path: "/" },
    { id: 1, name: "Template 1", color: "blue", path: "/template1" },
    { id: 2, name: "Template 2", color: "green", path: "/template2" },
    { id: 3, name: "Template 3", color: "purple", path: "/template3" },
  ]

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
      <h3 className="text-fs-16 m-s-b mb-4 text-gray-700">Navegación de Templates</h3>

      <div className="flex gap-2 flex-wrap mb-4">
        {templates.map((template) => {
          const isActive = currentTemplate === template.id
          const bgColor = isActive
            ? template.id === "home"
              ? "bg-gray-500"
              : template.id === 1
                ? "bg-blue-500"
                : template.id === 2
                  ? "bg-green-500"
                  : "bg-purple-500"
            : template.id === "home"
              ? "bg-gray-100"
              : template.id === 1
                ? "bg-blue-100"
                : template.id === 2
                  ? "bg-green-100"
                  : "bg-purple-100"
          const textColor = isActive
            ? "text-white"
            : template.id === "home"
              ? "text-gray-700"
              : template.id === 1
                ? "text-blue-700"
                : template.id === 2
                  ? "text-green-700"
                  : "text-purple-700"
          const hoverBg = isActive
            ? ""
            : template.id === "home"
              ? "hover:bg-gray-200"
              : template.id === 1
                ? "hover:bg-blue-200"
                : template.id === 2
                  ? "hover:bg-green-200"
                  : "hover:bg-purple-200"

          return (
            <Link
              key={template.id}
              to={template.path}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2 rounded-lg text-fs-14 m-mmb ${bgColor} ${textColor} ${hoverBg} transition-colors inline-block`}
            >
              {template.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
