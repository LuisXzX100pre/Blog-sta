"use client"

import { Container } from "../general/container"
import ReturnButton from "../general/return-button"
import HowToBook from "../template1/how-to-book"
import MapView from "../template2/map-view"
import WeatherRecommendations from "../template3/weather-recommendations"
import FamilyHotelsBlog from "../template1/family-hotels-blog"

export default function SectionRenderer({ sectionName, lang = "es" }) {
  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[lang] || textObj?.es || textObj?.en || ""
  }

  const sectionData = {
    howToBookTransport: {
      component: HowToBook,
      data: {
        title: {
          es: "Cómo reservar tu transporte",
          en: "How to book your transport",
        },
        introduction: {
          es: "Sigue estos pasos para reservar tu transporte de manera fácil y segura.",
          en: "Follow these steps to book your transport easily and safely.",
        },
        steps: [
          {
            id: 1,
            icon: { src: "/placeholder.svg?height=32&width=32", alt: "Search" },
            text: {
              es: "Busca tu destino",
              en: "Search your destination",
            },
            highlightStyle: "accent",
          },
          {
            id: 2,
            icon: { src: "/placeholder.svg?height=32&width=32", alt: "Compare" },
            text: {
              es: "Compara opciones",
              en: "Compare options",
            },
          },
          {
            id: 3,
            icon: { src: "/placeholder.svg?height=32&width=32", alt: "Book" },
            text: {
              es: "Reserva y paga",
              en: "Book and pay",
            },
          },
        ],
      },
    },
    touristMap: {
      component: MapView,
      data: {
        title: {
          es: "Mapa Turístico",
          en: "Tourist Map",
        },
        introduction: {
          es: "Explora los mejores destinos con nuestro mapa interactivo.",
          en: "Explore the best destinations with our interactive map.",
        },
        fallbackImage: {
          src: "/placeholder.svg?height=400&width=800",
          alt: {
            es: "Mapa turístico",
            en: "Tourist map",
          },
        },
      },
    },
    weatherInfo: {
      component: WeatherRecommendations,
      data: {
        contentBlocks: [
          {
            type: "mainTitle",
            text: {
              es: "Información del Clima",
              en: "Weather Information",
            },
          },
          {
            type: "paragraph",
            text: {
              es: "Conoce las mejores épocas para viajar y las condiciones climáticas.",
              en: "Know the best times to travel and weather conditions.",
            },
          },
        ],
      },
    },
    hotelRecommendations: {
      component: FamilyHotelsBlog,
      data: {
        title: {
          es: "Hoteles Recomendados",
          en: "Recommended Hotels",
        },
        introductionParagraphs: [
          {
            es: "Descubre los mejores hoteles seleccionados para tu comodidad.",
            en: "Discover the best hotels selected for your comfort.",
          },
        ],
        hotelList: [
          {
            id: 1,
            name: {
              es: "Hotel Paradise",
              en: "Hotel Paradise",
            },
          },
          {
            id: 2,
            name: {
              es: "Resort Tropical",
              en: "Tropical Resort",
            },
          },
        ],
        mainImage: {
          src: "/placeholder.svg?height=400&width=800",
          alt: {
            es: "Hoteles recomendados",
            en: "Recommended hotels",
          },
        },
      },
    },
  }

  const section = sectionData[sectionName]

  if (!section) {
    return (
      <Container>
        <div className="py-8">
          <ReturnButton />
          <div className="text-center">
            <h1 className="text-fs-24 m-s-b text-gray-800 mb-4">
              {lang === "en" ? "Section not found" : "Sección no encontrada"}
            </h1>
            <p className="text-fs-16 text-gray-600">
              {lang === "en" ? "The requested section does not exist." : "La sección solicitada no existe."}
            </p>
          </div>
        </div>
      </Container>
    )
  }

  const Component = section.component

  return (
    <Container>
      <div className="py-8">
        <ReturnButton />
        <div className="max-w-[68vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center">
            <Component data={section.data} type="section" lang={lang} />
          </div>
        </div>
      </div>
    </Container>
  )
}
