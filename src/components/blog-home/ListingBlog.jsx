"use client"

import { useState, useEffect } from "react"
import CardsHomeBlog from "./CardsHomeBlog"
import { useBlogData } from "../../hooks/useBlogData"

export default function ListingBlog({ lang = "es" }) {
  const [isLoader, setIsLoader] = useState(true)
  const [currentBlog, setCurrentBlog] = useState([])
  const { blogData } = useBlogData(lang)

  // Las 3 primeras cartas serán los templates principales
  const templateCards = [
    {
      id: "puerto-juarez-mexico",
      name: "puerto-juarez-mexico",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=200&fit=crop",
      date: "2024-01-15",
      type: ["hotel", "transport"],
      isTemplate: true,
      templateNumber: 1,
      mainTitle: {
        es: "Puerto Juárez México. Aquí inicio Cancún.",
        en: "Puerto Juárez Mexico. Where Cancún Begins.",
      },
      description: {
        es: "Descubre el punto de partida hacia las mejores aventuras en el Caribe mexicano. Puerto Juárez es la puerta de entrada a experiencias inolvidables.",
        en: "Discover the starting point to the best adventures in the Mexican Caribbean. Puerto Juárez is the gateway to unforgettable experiences.",
      },
    },
    {
      id: "acapulco-mexico",
      name: "acapulco-mexico",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
      date: "2024-01-10",
      type: ["tour", "hotel"],
      isTemplate: true,
      templateNumber: 2,
      mainTitle: {
        es: "Guía completa de Acapulco",
        en: "Complete Acapulco Guide",
      },
      description: {
        es: "Todo lo que necesitas saber para disfrutar al máximo tu visita a Acapulco. Lugares imperdibles, hoteles recomendados y actividades emocionantes.",
        en: "Everything you need to know to make the most of your visit to Acapulco. Must-see places, recommended hotels and exciting activities.",
      },
    },
    {
      id: "cuando-es-la-mejor-epoca-para-viajar-a-cancun",
      name: "cuando-es-la-mejor-epoca-para-viajar-a-cancun",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop",
      date: "2024-01-05",
      type: ["climate"],
      isTemplate: true,
      templateNumber: 3,
      mainTitle: {
        es: "¿Cuándo es la mejor época para viajar a Cancún?",
        en: "When is the Best Time to Travel to Cancún?",
      },
      description: {
        es: "Conoce el clima de Cancún durante todo el año y planifica tu viaje en la época perfecta para disfrutar al máximo de este paraíso tropical.",
        en: "Learn about Cancún's climate throughout the year and plan your trip at the perfect time to make the most of this tropical paradise.",
      },
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      let allBlogs = [...templateCards]

      // Agregar secciones del JSON como cards adicionales
      if (blogData?.sections) {
        const sectionCards = Object.entries(blogData.sections).map(([sectionKey, sectionData]) => ({
          id: sectionKey,
          name: sectionKey,
          image: getSectionImage(sectionKey),
          date: "2024-01-01",
          type: [sectionData.type || "tour"],
          isSection: true,
          template: sectionData.template || 1,
          mainTitle: {
            es: getSectionTitle(sectionKey, "es"),
            en: getSectionTitle(sectionKey, "en"),
          },
          description: {
            es: getSectionDescription(sectionKey, "es"),
            en: getSectionDescription(sectionKey, "en"),
          },
        }))

        allBlogs = [...allBlogs, ...sectionCards]
      }

      setCurrentBlog(allBlogs)
      setIsLoader(false)
    }, 1000)
  }, [blogData])

  // Función para obtener imagen según la sección
  const getSectionImage = (sectionKey) => {
    const imageMap = {
      howToBookTransport: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=200&fit=crop",
      locationInfo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
      whatToFind: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=200&fit=crop",
      howToGetThere: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=200&fit=crop",
      routesFrom: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop",
      photoGallery: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop",
      familyHotels: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop",
      journeyVideo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop",
      ferrySchedule: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
      favoriteActivities: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=200&fit=crop",
    }
    return imageMap[sectionKey] || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
  }

  // Función para obtener título según la sección
  const getSectionTitle = (sectionKey, lang) => {
    const titleMap = {
      howToBookTransport: {
        es: "Cómo Reservar Transporte",
        en: "How to Book Transport",
      },
      locationInfo: {
        es: "Información de Ubicación",
        en: "Location Information",
      },
      whatToFind: {
        es: "Qué Encontrarás",
        en: "What You'll Find",
      },
      howToGetThere: {
        es: "Cómo Llegar",
        en: "How to Get There",
      },
      routesFrom: {
        es: "Rutas Disponibles",
        en: "Available Routes",
      },
      photoGallery: {
        es: "Galería de Fotos",
        en: "Photo Gallery",
      },
      familyHotels: {
        es: "Hoteles Familiares",
        en: "Family Hotels",
      },
      journeyVideo: {
        es: "Video del Viaje",
        en: "Journey Video",
      },
      ferrySchedule: {
        es: "Horarios del Ferry",
        en: "Ferry Schedule",
      },
      favoriteActivities: {
        es: "Actividades Favoritas",
        en: "Favorite Activities",
      },
    }
    return titleMap[sectionKey]?.[lang] || sectionKey
  }

  // Función para obtener descripción según la sección
  const getSectionDescription = (sectionKey, lang) => {
    const descMap = {
      howToBookTransport: {
        es: "Guía completa para reservar y planificar tu transporte de manera fácil y segura.",
        en: "Complete guide to book and plan your transportation easily and safely.",
      },
      locationInfo: {
        es: "Descubre la ubicación exacta y cómo llegar a tu destino.",
        en: "Discover the exact location and how to get to your destination.",
      },
      whatToFind: {
        es: "Explora todo lo que puedes encontrar en este increíble destino.",
        en: "Explore everything you can find in this incredible destination.",
      },
      howToGetThere: {
        es: "Instrucciones detalladas sobre cómo llegar a tu destino.",
        en: "Detailed instructions on how to get to your destination.",
      },
      routesFrom: {
        es: "Conoce todas las rutas disponibles desde diferentes puntos.",
        en: "Learn about all available routes from different points.",
      },
      photoGallery: {
        es: "Disfruta de una hermosa galería de fotos del destino.",
        en: "Enjoy a beautiful photo gallery of the destination.",
      },
      familyHotels: {
        es: "Los mejores hoteles familiares para tu estancia perfecta.",
        en: "The best family hotels for your perfect stay.",
      },
      journeyVideo: {
        es: "Mira videos del viaje y experiencias únicas.",
        en: "Watch journey videos and unique experiences.",
      },
      ferrySchedule: {
        es: "Consulta los horarios actualizados del ferry.",
        en: "Check updated ferry schedules.",
      },
      favoriteActivities: {
        es: "Nuestras actividades favoritas recomendadas para ti.",
        en: "Our favorite recommended activities for you.",
      },
    }
    return descMap[sectionKey]?.[lang] || "Descripción no disponible"
  }

  const TruncateLetters = (text, wordLimit) => {
    if (!text) return ""
    const words = text.split(" ")
    if (words.length <= wordLimit) return text
    return words.slice(0, wordLimit).join(" ")
  }

  return (
    <div className="relative">
      {/* Sin título ni descripción - directo a las cards */}
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
