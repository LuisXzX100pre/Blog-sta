"use client"

import { useNavigate } from "react-router-dom"

export default function TemplateCards() {
  const navigate = useNavigate()

  const handleCardClick = (templatePath) => {
    navigate(templatePath)
    // Hacer scroll al inicio de la página
    window.scrollTo(0, 0)
  }

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Selecciona el Tema de tu interes</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Template 1 Card */}
        <div
          onClick={() => handleCardClick("/template1")}
          className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full cursor-pointer"
        >
          <div className="h-48 bg-blue-500 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">Template 1</span>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Guía de Viaje</h3>
            <p className="text-gray-600 mb-4">
              Ideal para blogs de viajes con información detallada sobre ubicaciones, hoteles, actividades y más.
            </p>
            <ul className="text-sm text-gray-500 mb-4 flex-grow">
              <li>• Información de ubicación</li>
              <li>• Cómo llegar</li>
              <li>• Hoteles recomendados</li>
              <li>• Actividades favoritas</li>
              <li>• Galería de fotos</li>
            </ul>
            <div className="mt-auto">
              <div className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Seleccionar Template 1
              </div>
            </div>
          </div>
        </div>

        {/* Template 2 Card */}
        <div
          onClick={() => handleCardClick("/template2")}
          className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full cursor-pointer"
        >
          <div className="h-48 bg-orange-500 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">Template 2</span>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Guía de Lugares</h3>
            <p className="text-gray-600 mb-4">
              Perfecto para blogs enfocados en lugares específicos con mapas, rutas y recomendaciones.
            </p>
            <ul className="text-sm text-gray-500 mb-4 flex-grow">
              <li>• Datos rápidos</li>
              <li>• Lugares para visitar</li>
              <li>• Vista de mapa</li>
              <li>• Recomendaciones</li>
              <li>• Rutas sugeridas</li>
            </ul>
            <div className="mt-auto">
              <div className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Seleccionar Template 2
              </div>
            </div>
          </div>
        </div>

        {/* Template 3 Card */}
        <div
          onClick={() => handleCardClick("/template3")}
          className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full cursor-pointer"
        >
          <div className="h-48 bg-black flex items-center justify-center">
            <span className="text-white text-4xl font-bold">Template 3</span>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Guía Climática</h3>
            <p className="text-gray-600 mb-4">
              Especializado en información climática, recomendaciones por temporada y preguntas frecuentes.
            </p>
            <ul className="text-sm text-gray-500 mb-4 flex-grow">
              <li>• Información climática</li>
              <li>• Datos por mes</li>
              <li>• Preguntas frecuentes</li>
              <li>• Recomendaciones por temporada</li>
              <li>• Consejos de viaje</li>
            </ul>
            <div className="mt-auto">
              <div className="block w-full text-center bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Seleccionar Template 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
