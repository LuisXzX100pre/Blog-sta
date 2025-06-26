"use client"

import { useState, useEffect } from "react"
import CardsHomeBlog from "./CardsHomeBlog"

export default function ListingBlog({ lang = "es" }) {
  const [isLoader, setIsLoader] = useState(true)
  const [currentBlog, setCurrentBlog] = useState([])

  // Las 3 primeras cartas serán los templates principales
  const templateCards = [
    {
      id: "template1",
      name: "template1",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=200&fit=crop",
      date: "2024-01-15",
      type: ["hotel", "transport"],
      isTemplate: true,
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
      id: "template2",
      name: "template2",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
      date: "2024-01-10",
      type: ["tour", "hotel"],
      isTemplate: true,
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
      id: "template3",
      name: "template3",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop",
      date: "2024-01-05",
      type: ["climate"],
      isTemplate: true,
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

  // Blogs adicionales con secciones específicas
  const additionalBlogs = [
    {
      id: "howToBookTransport",
      name: "howToBookTransport",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=200&fit=crop",
      date: "2024-01-01",
      type: ["transport"],
      isSection: true,
      mainTitle: {
        es: "Cómo Reservar Transporte",
        en: "How to Book Transport",
      },
      description: {
        es: "Guía completa para reservar y planificar tu transporte de manera fácil y segura.",
        en: "Complete guide to book and plan your transportation easily and safely.",
      },
    },
    {
      id: "touristMap",
      name: "touristMap",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=200&fit=crop",
      date: "2023-12-28",
      type: ["tour"],
      isSection: true,
      mainTitle: {
        es: "Mapa Turístico Interactivo",
        en: "Interactive Tourist Map",
      },
      description: {
        es: "Explora los mejores destinos con nuestro mapa interactivo y planifica tu ruta perfecta.",
        en: "Explore the best destinations with our interactive map and plan your perfect route.",
      },
    },
    {
      id: "weatherInfo",
      name: "weatherInfo",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop",
      date: "2023-12-25",
      type: ["climate"],
      isSection: true,
      mainTitle: {
        es: "Información del Clima",
        en: "Weather Information",
      },
      description: {
        es: "Conoce las condiciones climáticas actuales y pronósticos para planificar mejor tu viaje.",
        en: "Know current weather conditions and forecasts to better plan your trip.",
      },
    },
    {
      id: "hotelRecommendations",
      name: "hotelRecommendations",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop",
      date: "2023-12-20",
      type: ["hotel"],
      isSection: true,
      mainTitle: {
        es: "Hoteles Recomendados",
        en: "Recommended Hotels",
      },
      description: {
        es: "Descubre los mejores hoteles seleccionados especialmente para tu comodidad y presupuesto.",
        en: "Discover the best hotels specially selected for your comfort and budget.",
      },
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      const allBlogs = [...templateCards, ...additionalBlogs]
      setCurrentBlog(allBlogs)
      setIsLoader(false)
    }, 1000)
  }, [])

  const TruncateLetters = (text, wordLimit) => {
    if (!text) return ""
    const words = text.split(" ")
    if (words.length <= wordLimit) return text
    return words.slice(0, wordLimit).join(" ")
  }

  return (
    <div className="relative">
      {/* Título principal más grande y prominente */}
      <div className="mb-8 text-center">
        <h1 className="text-fs-40 m-b text-gray-800 mb-4">
          {lang === "en" ? "Featured Content" : "Contenido Destacado"}
        </h1>
        <p className="text-fs-16 text-gray-600 max-w-2xl mx-auto">
          {lang === "en"
            ? "Explore our most popular destinations and travel guides"
            : "Explora nuestros destinos más populares y guías de viaje"}
        </p>
      </div>

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
