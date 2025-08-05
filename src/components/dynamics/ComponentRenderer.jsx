"use client"

import { notFound } from "next/navigation"
import { Container } from "../general/container"
import ReturnButton from "../general/return-button"

// Importar componentes de cada template
import HowToBook from "../template1/how-to-book"
import WhereLocated from "../template1/where-located"
import HowToGet from "../template1/how-to-get"
import VideoPlace from "../template1/video-place"
import FamilyHotelsBlog from "../template1/family-hotels-blog"
import FavoriteActivitiesBlog from "../template1/favorite-activities-blog"
import FromToBlog from "../template1/from-to-blog"
import GalleryPicsCollage from "../template1/gallery-pics-collage"
import WhatWillYouFind from "../template1/what-will-you-find"
import ScheduleBlog from "../template1/schedule-blog"

import FactBox from "../template2/fact-box"
import MapView from "../template2/map-view"
import PlacesToVisit from "../template2/places-to-visit"
import RecommendationsBeforeVisit from "../template2/recommendations-before-visit"
import RoutesRecommendations from "../template2/routes-recommendations"
import AcapulcoGuideIntro from "../template2/acapulco-guide-intro"

import WeatherRecommendations from "../template3/weather-recommendations"
import InfoByMonth from "../template3/info-by-month"
import CurrentQuestions from "../template3/current-questions"

export default function ComponentRenderer({ templateNumber, componentName, lang = "es" }) {
  // Mapeo de componentes por template
  const componentMap = {
    1: {
      "how-to-book": HowToBook,
      "where-located": WhereLocated,
      "how-to-get": HowToGet,
      "video-place": VideoPlace,
      "family-hotels": FamilyHotelsBlog,
      "favorite-activities": FavoriteActivitiesBlog,
      "from-to": FromToBlog,
      "gallery-pics": GalleryPicsCollage,
      "what-will-you-find": WhatWillYouFind,
      schedule: ScheduleBlog,
    },
    2: {
      "fact-box": FactBox,
      "map-view": MapView,
      "places-to-visit": PlacesToVisit,
      recommendations: RecommendationsBeforeVisit,
      routes: RoutesRecommendations,
      "guide-intro": AcapulcoGuideIntro,
    },
    3: {
      "weather-recommendations": WeatherRecommendations,
      "info-by-month": InfoByMonth,
      "current-questions": CurrentQuestions,
    },
  }

  const template = Number.parseInt(templateNumber)
  const Component = componentMap[template]?.[componentName]

  if (!Component) {
    notFound()
  }

  // Datos de ejemplo para el componente
  const mockData = {
    title: {
      es: `Componente ${componentName} - Template ${template}`,
      en: `Component ${componentName} - Template ${template}`,
    },
    introduction: {
      es: "Este es un componente de ejemplo renderizado individualmente.",
      en: "This is an example component rendered individually.",
    },
  }

  return (
    <Container>
      <div className="py-8">
        <ReturnButton />
        <div className="max-w-[68vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="text-fs-28 m-s-b text-gray-800 mb-2">
                {lang === "en" ? `Template ${template} Component` : `Componente Template ${template}`}
              </h1>
              <p className="text-fs-16 text-gray-600">
                {lang === "en" ? `Component: ${componentName}` : `Componente: ${componentName}`}
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <Component data={mockData} type="demo" lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
