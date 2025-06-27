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

// Mapeo de todos los componentes disponibles
export const COMPONENT_MAP = {
  // Template 1 Components
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

  // Template 2 Components
  AcapulcoGuideIntro,
  PlacesToVisit,
  FactBox,
  MapView,
  RecommendationsBeforeVisit,
  RoutesRecommendations,

  // Template 3 Components
  WeatherRecommendations,
  InfoByMonth,
  CurrentQuestions,
}

// Mapeo de componentes a sus secciones de datos correspondientes
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

// Lista de todos los componentes disponibles para navegación
export const AVAILABLE_COMPONENTS = Object.keys(COMPONENT_MAP)
