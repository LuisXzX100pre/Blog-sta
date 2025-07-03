"use client"

// Template 1 Components
import FamilyHotelsBlog from "../template1/FamilyHotelsBlog"
import GalleryPicsCollage from "../template1/GalleryPicsCollage"
import HowToBook from "../template1/HowToBook"
import FromToBlog from "../template1/FromToBlog"
import FavoriteActivitiesBlog from "../template1/FavoriteActivitiesBlog"
import HowToGet from "../template1/HowToGet"
import WhatWillYouFind from "../template1/WhatWillYouFind"
import WhereLocated from "../template1/WhereLocated"
import ScheduleBlog from "../template1/ScheduleBlog"
import VideoPlace from "../template1/VideoPlace"

// Template 2 Components
import AcapulcoGuideIntro from "../template2/AcapulcoGuideIntro"
import PlacesToVisit from "../template2/PlacesToVisit"
import FactBox from "../template2/FactBox"
import MapView from "../template2/MapView"
import RecommendationsBeforeVisit from "../template2/RecommendationsBeforeVisit"
import RoutesRecommendations from "../template2/RoutesRecommendations"

// Template 3 Components
import WeatherRecommendations from "../template3/WeatherRecommendations"
import InfoByMonth from "../template3/InfoByMonth"
import CurrentQuestions from "../template3/CurrentQuestions"

// Sistema flexible
import FlexibleTemplateRenderer from "./FlexibleTemplateRenderer"

// 🎯 MAPEO COMPLETO DE SECCIONES A COMPONENTES
export const SECTION_TO_COMPONENT_MAPPING = {
  // Secciones originales de cada template
  template1: {
    photoGallery: GalleryPicsCollage,
    locationInfo: WhereLocated,
    howToBookTransport: HowToBook,
    howToGetThere: HowToGet,
    journeyVideo: VideoPlace,
    ferrySchedule: ScheduleBlog,
    whatToFind: WhatWillYouFind,
    routesFrom: FromToBlog,
    familyHotels: FamilyHotelsBlog,
    favoriteActivities: FavoriteActivitiesBlog,
  },
  template2: {
    placesToVisit: PlacesToVisit,
    quickFact: FactBox,
    touristMap: MapView,
    beforeYouVisitRecommendations: RecommendationsBeforeVisit,
    routesFrom: RoutesRecommendations,
    acapulcoGuide: AcapulcoGuideIntro,
  },
  template3: {
    generalClimateInfo: WeatherRecommendations,
    monthlyInfo: InfoByMonth,
    frequentlyAskedQuestions: CurrentQuestions,
  },
}

// 🎯 MAPEO CRUZADO: Cómo renderizar secciones de un template en otro
export const CROSS_TEMPLATE_MAPPING = {
  // Cuando Template 1 recibe datos de otros templates
  1: {
    // Secciones de Template 2 → Componentes de Template 1
    placesToVisit: WhatWillYouFind,
    touristMap: WhereLocated,
    beforeYouVisitRecommendations: HowToGet,
    routesFrom: FromToBlog,
    quickFact: WhereLocated, // FactBox → WhereLocated

    // Secciones de Template 3 → Componentes de Template 1
    generalClimateInfo: WhereLocated,
    monthlyInfo: WhatWillYouFind,
    frequentlyAskedQuestions: HowToGet,

    // Mantener secciones originales de Template 1
    ...SECTION_TO_COMPONENT_MAPPING.template1,
  },

  // Cuando Template 2 recibe datos de otros templates
  2: {
    // Secciones de Template 1 → Componentes de Template 2
    whatToFind: PlacesToVisit,
    locationInfo: MapView,
    howToGetThere: RecommendationsBeforeVisit,
    familyHotels: PlacesToVisit,
    favoriteActivities: PlacesToVisit,
    photoGallery: MapView, // Gallery → MapView

    // Secciones de Template 3 → Componentes de Template 2
    generalClimateInfo: RecommendationsBeforeVisit,
    monthlyInfo: PlacesToVisit,
    frequentlyAskedQuestions: RecommendationsBeforeVisit,

    // Mantener secciones originales de Template 2
    ...SECTION_TO_COMPONENT_MAPPING.template2,
  },

  // Cuando Template 3 recibe datos de otros templates
  3: {
    // Secciones de Template 1 → Componentes de Template 3
    whatToFind: InfoByMonth,
    locationInfo: WeatherRecommendations,
    howToGetThere: CurrentQuestions,
    familyHotels: InfoByMonth,
    favoriteActivities: InfoByMonth,

    // Secciones de Template 2 → Componentes de Template 3
    placesToVisit: InfoByMonth,
    touristMap: WeatherRecommendations,
    beforeYouVisitRecommendations: CurrentQuestions,
    routesFrom: CurrentQuestions,

    // Mantener secciones originales de Template 3
    ...SECTION_TO_COMPONENT_MAPPING.template3,
  },
}

// 🎯 FUNCIÓN PARA OBTENER EL COMPONENTE CORRECTO
export function getComponentForSection(sectionKey, targetTemplate) {
  const mapping = CROSS_TEMPLATE_MAPPING[targetTemplate]
  return mapping?.[sectionKey] || null
}

// 🎯 FUNCIÓN PARA OBTENER TODAS LAS SECCIONES DISPONIBLES
export function getAllAvailableSections(data) {
  const sections = data?.sections || {}
  return Object.keys(sections).filter((key) => sections[key]?.data)
}

// 🎯 FUNCIÓN PARA VALIDAR SI UNA SECCIÓN PUEDE SER RENDERIZADA
export function canRenderSection(sectionKey, targetTemplate) {
  return getComponentForSection(sectionKey, targetTemplate) !== null
}

// Mapeo de todos los componentes disponibles (ahora todos son inteligentes 🧠)
export const COMPONENT_MAP = {
  // Template 1 Components (🧠 Inteligentes)
  FamilyHotelsBlog,
  GalleryPicsCollage,
  HowToBook,
  FromToBlog,
  FavoriteActivitiesBlog,
  HowToGet,
  WhatWillYouFind,
  WhereLocated,
  ScheduleBlog,
  VideoPlace,

  // Template 2 Components (🧠 Inteligentes)
  AcapulcoGuideIntro,
  PlacesToVisit,
  FactBox,
  MapView,
  RecommendationsBeforeVisit,
  RoutesRecommendations,

  // Template 3 Components (🧠 Inteligentes)
  WeatherRecommendations,
  InfoByMonth,
  CurrentQuestions,

  // Sistema flexible
  FlexibleTemplateRenderer,
}

// Lista de todos los componentes disponibles para navegación
export const AVAILABLE_COMPONENTS = Object.keys(COMPONENT_MAP)

// 🧠 NUEVAS FUNCIONES INTELIGENTES

// Función para obtener componentes compatibles con cualquier tipo de datos
export function getCompatibleComponents(dataType) {
  // Todos los componentes son ahora compatibles con todos los tipos de datos
  return AVAILABLE_COMPONENTS
}

// Función para obtener el mejor componente para un tipo de datos específico
export function getBestComponentForData(data, preferredTemplate = null) {
  if (!data) return null

  // Si se especifica un template preferido, usar componentes de ese template
  if (preferredTemplate) {
    const templateComponents = {
      1: ["WhatWillYouFind", "WhereLocated", "HowToGet", "VideoPlace", "FamilyHotelsBlog"],
      2: ["PlacesToVisit", "MapView", "FactBox", "RecommendationsBeforeVisit"],
      3: ["InfoByMonth", "WeatherRecommendations", "CurrentQuestions"],
    }
    return templateComponents[preferredTemplate]?.[0] || "FlexibleTemplateRenderer"
  }

  // Detección automática basada en la estructura de datos
  if (data.placesList) return "PlacesToVisit"
  if (data.items) return "WhatWillYouFind"
  if (data.seasons) return "InfoByMonth"
  if (data.faqList) return "CurrentQuestions"
  if (data.scheduleTable) return "ScheduleBlog"
  if (data.video) return "VideoPlace"
  if (data.hotelList) return "FamilyHotelsBlog"
  if (data.routes) return "RoutesRecommendations"

  return "FlexibleTemplateRenderer"
}

// Función para validar si un componente puede manejar ciertos datos
export function canComponentHandleData(componentName, data) {
  // Todos los componentes inteligentes pueden manejar cualquier tipo de datos
  return AVAILABLE_COMPONENTS.includes(componentName)
}

export const COMPONENT_TO_SECTION_MAP = {
  // Template 1
  FamilyHotelsBlog: "familyHotels",
  GalleryPicsCollage: "photoGallery",
  HowToBook: "howToBookTransport",
  FromToBlog: "routesFrom",
  FavoriteActivitiesBlog: "favoriteActivities",
  HowToGet: "howToGetThere",
  WhatWillYouFind: "whatToFind",
  WhereLocated: "locationInfo",
  ScheduleBlog: "ferrySchedule",
  VideoPlace: "journeyVideo",

  // Template 2
  AcapulcoGuideIntro: "acapulcoGuide",
  PlacesToVisit: "placesToVisit",
  FactBox: "quickFact",
  MapView: "touristMap",
  RecommendationsBeforeVisit: "beforeYouVisitRecommendations",
  RoutesRecommendations: "routesFrom",

  // Template 3
  WeatherRecommendations: "generalClimateInfo",
  InfoByMonth: "monthlyInfo",
  CurrentQuestions: "frequentlyAskedQuestions",
}
