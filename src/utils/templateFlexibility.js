// Sistema flexible para cambiar templates dinámicamente
export const DESTINATION_CONFIG = {
  "puerto-juarez-mexico": {
    defaultTemplate: 1,
    availableTemplates: [1, 2, 3],
    titles: {
      es: "Puerto Juárez México. Aquí inicio Cancún.",
      en: "Puerto Juárez Mexico. Where Cancún Begins.",
    },
  },
  "acapulco-mexico": {
    defaultTemplate: 2,
    availableTemplates: [1, 2, 3],
    titles: {
      es: "Guía completa de Acapulco",
      en: "Complete Acapulco Guide",
    },
  },
  "cuando-es-la-mejor-epoca-para-viajar-a-cancun": {
    defaultTemplate: 3,
    availableTemplates: [1, 2, 3],
    titles: {
      es: "¿Cuándo es la mejor época para viajar a Cancún?",
      en: "When is the Best Time to Travel to Cancún?",
    },
  },
}

// Función para obtener el template correcto según destino y parámetro opcional
export function getTemplateForDestination(destinationId, forceTemplate = null) {
  const config = DESTINATION_CONFIG[destinationId]
  if (!config) return 1

  // Si se fuerza un template específico, verificar que esté disponible
  if (forceTemplate && config.availableTemplates.includes(forceTemplate)) {
    return forceTemplate
  }

  // Usar el template por defecto
  return config.defaultTemplate
}

// Función para generar URL con template opcional
export function generateDestinationUrl(destinationId, lang = "es", templateOverride = null) {
  const baseUrl = `/${lang}/${destinationId}`

  if (templateOverride) {
    return `${baseUrl}?template=${templateOverride}`
  }

  return baseUrl
}

// Función para adaptar datos según el template seleccionado
export function adaptDataForTemplate(destinationData, targetTemplate) {
  const originalTemplate = destinationData.template

  if (originalTemplate === targetTemplate) {
    return destinationData // No hay cambios necesarios
  }

  // Crear una copia adaptada de los datos
  const adaptedData = {
    ...destinationData,
    template: targetTemplate,
    // Mantener las secciones compatibles con el nuevo template
    sections: filterSectionsForTemplate(destinationData.sections, targetTemplate),
  }

  return adaptedData
}

// Función para filtrar secciones según el template objetivo
function filterSectionsForTemplate(sections, targetTemplate) {
  const templateSections = {
    1: [
      "photoGallery",
      "locationInfo",
      "howToBookTransport",
      "howToGetThere",
      "journeyVideo",
      "ferrySchedule",
      "whatToFind",
      "routesFrom",
      "familyHotels",
      "favoriteActivities",
    ],
    2: ["acapulcoGuide", "placesToVisit", "quickFact", "touristMap", "beforeYouVisitRecommendations", "routesFrom"],
    3: ["generalClimateInfo", "monthlyInfo", "frequentlyAskedQuestions", "finalConclusion"],
  }

  const allowedSections = templateSections[targetTemplate] || []
  const filteredSections = {}

  allowedSections.forEach((sectionKey) => {
    if (sections[sectionKey]) {
      filteredSections[sectionKey] = sections[sectionKey]
    }
  })

  return filteredSections
}
