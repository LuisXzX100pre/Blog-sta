import { intelligentAdapter } from "./intelligentDataAdapter.js"

// 🧠 Helper para que los layouts existentes usen el sistema inteligente
export function ensureIntelligentData(data, componentType, fallback = {}) {
  if (!data) return fallback

  // Si los datos ya están adaptados, devolverlos tal como están
  if (data._intelligentlyAdapted) return data

  // Adaptar los datos usando el sistema inteligente
  const adaptedData = intelligentAdapter.adaptDataForComponent(data, componentType, fallback)

  // Marcar como adaptados para evitar re-adaptación
  adaptedData._intelligentlyAdapted = true

  return adaptedData
}

// 🧠 Helper para obtener el tipo de sección basado en el template
export function getSectionType(sectionKey, template) {
  const typeMapping = {
    1: {
      whatToFind: "hotel",
      familyHotels: "hotel",
      favoriteActivities: "hotel",
      locationInfo: "hotel",
      ferrySchedule: "hotel",
      journeyVideo: "hotel",
      howToGetThere: "hotel",
      howToBookTransport: "hotel",
      routesFrom: "hotel",
    },
    2: {
      placesToVisit: "tour",
      touristMap: "tour",
      beforeYouVisitRecommendations: "tour",
      routesFrom: "tour",
      acapulcoGuide: "tour",
    },
    3: {
      monthlyInfo: "climate",
      generalClimateInfo: "climate",
      frequentlyAskedQuestions: "climate",
    },
  }

  return typeMapping[template]?.[sectionKey] || "hotel"
}
