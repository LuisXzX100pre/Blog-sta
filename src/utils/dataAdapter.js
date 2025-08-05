// Sistema inteligente de adaptación de datos entre templates
export class DataAdapter {
  constructor() {
    // Mapeo de equivalencias entre secciones de diferentes templates
    this.sectionEquivalences = {
      1: {
        2: {
          locationInfo: "touristMap",
          whatToFind: "placesToVisit",
          howToGetThere: "routesFrom",
          familyHotels: "beforeYouVisitRecommendations",
          favoriteActivities: "placesToVisit",
          photoGallery: "quickFact",
        },
        3: {
          locationInfo: "generalClimateInfo",
          whatToFind: "monthlyInfo",
          howToGetThere: "frequentlyAskedQuestions",
          familyHotels: "monthlyInfo",
          favoriteActivities: "frequentlyAskedQuestions",
        },
      },
      2: {
        1: {
          placesToVisit: "whatToFind",
          touristMap: "locationInfo",
          routesFrom: "howToGetThere",
          beforeYouVisitRecommendations: "familyHotels",
          quickFact: "photoGallery",
        },
        3: {
          placesToVisit: "monthlyInfo",
          touristMap: "generalClimateInfo",
          routesFrom: "frequentlyAskedQuestions",
          beforeYouVisitRecommendations: "monthlyInfo",
        },
      },
      3: {
        1: {
          monthlyInfo: "whatToFind",
          generalClimateInfo: "locationInfo",
          frequentlyAskedQuestions: "howToGetThere",
        },
        2: {
          monthlyInfo: "placesToVisit",
          generalClimateInfo: "touristMap",
          frequentlyAskedQuestions: "beforeYouVisitRecommendations",
        },
      },
    }

    // Adaptadores de estructura de datos
    this.dataStructureAdapters = {
      "3->1": {
        monthlyInfo: this.adaptMonthlyInfoToWhatToFind.bind(this),
        generalClimateInfo: this.adaptClimateToLocation.bind(this),
        frequentlyAskedQuestions: this.adaptFaqToHowToGet.bind(this),
      },
      "1->3": {
        whatToFind: this.adaptWhatToFindToMonthly.bind(this),
        locationInfo: this.adaptLocationToClimate.bind(this),
        howToGetThere: this.adaptHowToGetToFaq.bind(this),
      },
    }
  }

  adaptData(sourceData, targetTemplate) {
    const sourceTemplate = sourceData.template
    if (sourceTemplate === targetTemplate) return sourceData

    const adaptedData = {
      ...sourceData,
      template: targetTemplate,
      sections: this.adaptSections(sourceData.sections, sourceTemplate, targetTemplate),
    }

    adaptedData.blogTitle = this.adaptTitle(sourceData.blogTitle, sourceTemplate, targetTemplate)
    adaptedData.introduction = this.adaptIntroduction(sourceData.introduction, sourceTemplate, targetTemplate)

    return adaptedData
  }

  adaptSections(sourceSections, sourceTemplate, targetTemplate) {
    const adaptedSections = {}
    const equivalences = this.sectionEquivalences[sourceTemplate]?.[targetTemplate] || {}
    const adapterKey = `${sourceTemplate}->${targetTemplate}`

    Object.entries(sourceSections).forEach(([sectionKey, sectionData]) => {
      const targetSectionKey = equivalences[sectionKey] || sectionKey
      const adapter = this.dataStructureAdapters[adapterKey]?.[sectionKey]

      if (adapter) {
        adaptedSections[targetSectionKey] = {
          ...sectionData,
          data: adapter(sectionData.data),
        }
      } else {
        adaptedSections[targetSectionKey] = sectionData
      }
    })

    return adaptedSections
  }

  // Adaptadores específicos
  adaptMonthlyInfoToWhatToFind(monthlyData) {
    if (!monthlyData?.seasons) return this.createDefaultWhatToFind()

    const items = []
    monthlyData.seasons.forEach((season, index) => {
      season.monthsData?.forEach((month, monthIndex) => {
        items.push({
          id: `adapted_item_${index}_${monthIndex}`,
          image: {
            src: month.image?.src || "/placeholder.svg",
            alt: month.image?.alt || `Imagen de ${month.monthTitle}`,
          },
          name: month.monthTitle || `Mes ${monthIndex + 1}`,
          description: month.descriptionParagraphs?.[0] || `Información sobre ${month.monthTitle || "este mes"}`,
        })
      })
    })

    return {
      title: "Qué encontrarás en cada época del año",
      items: items.slice(0, 6),
    }
  }

  adaptClimateToLocation(climateData) {
    return {
      title: "Información climática de la ubicación",
      introductionParagraphs: [
        "El clima es un factor importante a considerar para tu visita.",
        "Conoce las condiciones meteorológicas de este destino.",
        "Planifica tu viaje según las mejores condiciones climáticas.",
      ],
      mapSection: {
        image: {
          src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop",
          alt: "Mapa climático de la región",
        },
        caption: "Condiciones climáticas de la región durante el año",
      },
    }
  }

  adaptFaqToHowToGet(faqData) {
    const sections = faqData?.faqList?.map((faq, i) => ({
      id: `adapted_htg_${i}`,
      title: faq.question,
      paragraphs: [faq.answer],
      image: {
        src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop",
        alt: "Información de acceso",
      },
    })) || []

    return { sections: sections.length ? sections : this.createDefaultHowToGetSections() }
  }

  adaptWhatToFindToMonthly(whatToFindData) {
    if (!whatToFindData?.items) return this.createDefaultMonthlyInfo()

    const seasons = [{
      id: "adapted_season_1",
      seasonTitle: "Temporada Principal",
      seasonIntroductionParagraphs: ["Información adaptada desde las atracciones del destino."],
      monthsData: whatToFindData.items.map((item, index) => ({
        id: `adapted_month_${index}`,
        monthTitle: item.name,
        stats: [{ id: `stat_${index}`, icon: "📍", label: "Atracción:", value: item.name }],
        descriptionParagraphs: [item.description],
        image: item.image,
      })),
    }]

    return { seasons }
  }

  // Métodos faltantes que son usados en adapters inversos
  adaptLocationToClimate(locationData) {
    return locationData // puedes agregar lógica aquí si deseas transformar locationInfo a generalClimateInfo
  }

  adaptHowToGetToFaq(howToGetData) {
    return howToGetData // idem para cómo llegar → FAQs
  }

  // Fallbacks
  createDefaultWhatToFind() {
    return {
      title: "Qué encontrarás en este destino",
      items: [{
        id: "default_1",
        image: { src: "/placeholder.svg", alt: "Atracción principal" },
        name: "Atracción Principal",
        description: "Descubre las mejores atracciones de este destino.",
      }],
    }
  }

  createDefaultHowToGetSections() {
    return [{
      id: "default_htg",
      title: "Cómo llegar",
      paragraphs: ["Información sobre cómo llegar a este destino."],
      image: { src: "/placeholder.svg", alt: "Cómo llegar" },
    }]
  }

  createDefaultMonthlyInfo() {
    return {
      seasons: [{
        id: "default_season",
        seasonTitle: "Información General",
        seasonIntroductionParagraphs: ["Información general sobre este destino."],
        monthsData: [{
          id: "default_month",
          monthTitle: "Información Disponible",
          stats: [],
          descriptionParagraphs: ["Información adaptada del contenido original."],
          image: { src: "/placeholder.svg", alt: "Información general" },
        }],
      }],
    }
  }

  adaptTitle(originalTitle, sourceTemplate, targetTemplate) {
    const titleAdaptations = {
      "3->1": {
        "¿Cuándo es la mejor época para viajar a Cancún?": "Guía completa de Cancún - Información climática",
      },
      "1->3": {
        "Puerto Juárez México. Aquí inicio Cancún.": "¿Cuál es el mejor clima en Puerto Juárez?",
      },
      "2->1": {
        "Guía completa de Acapulco": "Acapulco - Destinos y hoteles recomendados",
      },
    }

    const key = `${sourceTemplate}->${targetTemplate}`
    return titleAdaptations[key]?.[originalTitle] || originalTitle
  }

  adaptIntroduction(originalIntro, sourceTemplate, targetTemplate) {
    if (!Array.isArray(originalIntro)) return originalIntro

    const introAdaptations = {
      "3->1": () => [
        "Descubre toda la información que necesitas sobre este increíble destino.",
        "Conoce los mejores lugares, hoteles y actividades disponibles.",
        "Planifica tu viaje perfecto con nuestra guía completa.",
      ],
      "1->3": () => [
        "Conoce las mejores épocas para visitar este destino.",
        "El clima es fundamental para planificar tu viaje perfecto.",
        "Descubre cuándo es el momento ideal para tu aventura.",
      ],
    }

    const key = `${sourceTemplate}->${targetTemplate}`
    return introAdaptations[key]?.() || originalIntro
  }
}

// Instancia global
export const dataAdapter = new DataAdapter()

// Función de conveniencia
export function adaptDataForTemplate(sourceData, targetTemplate) {
  return dataAdapter.adaptData(sourceData, targetTemplate)
}
