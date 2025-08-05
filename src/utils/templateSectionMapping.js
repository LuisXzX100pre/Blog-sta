// Mapeo de qué secciones pertenecen a cada template
export const TEMPLATE_SECTIONS = {
  1: [
    'photoGallery',
    'locationInfo', 
    'howToBookTransport',
    'howToGetThere',
    'journeyVideo',
    'ferrySchedule',
    'whatToFind',
    'routesFrom',
    'familyHotels',
    'favoriteActivities'
  ],
  2: [
    'acapulcoGuide',
    'placesToVisit',
    'quickFact',
    'touristMap',
    'beforeYouVisitRecommendations',
    'routesFrom'
  ],
  3: [
    'generalClimateInfo',
    'monthlyInfo',
    'frequentlyAskedQuestions',
    'finalConclusion'
  ]
}

// Función para filtrar secciones según el template
export function filterSectionsByTemplate(sections, templateNumber) {
  if (!sections || !templateNumber) return {}
  
  const allowedSections = TEMPLATE_SECTIONS[templateNumber] || []
  const filteredSections = {}
  
  allowedSections.forEach(sectionKey => {
    if (sections[sectionKey]) {
      filteredSections[sectionKey] = sections[sectionKey]
    }
  })
  
  return filteredSections
}


export function getTemplateLayout(templateNumber) {
  switch(templateNumber) {
    case 1:
      return 'Template1Layout'
    case 2:
      return 'Template2Layout'
    case 3:
      return 'Template3Layout'
    default:
      return 'Template1Layout'
  }
}
