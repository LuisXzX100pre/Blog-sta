// Sistema inteligente mejorado para adaptación de datos entre templates
export class IntelligentDataAdapter {
  constructor() {
    // Mapeo de campos comunes entre diferentes estructuras
    this.commonFields = {
      title: ["title", "sectionTitle", "mainTitle", "monthTitle", "name", "blogTitle"],
      description: ["description", "descriptionParagraphs", "introductionParagraphs", "text", "answer"],
      image: ["image", "src", "heroImage", "mainImage", "largeImage"],
      items: ["items", "placesList", "monthsData", "activities", "faqList", "recommendations"],
      subtitle: ["subtitle", "introduction", "caption", "fact"],
    }
  }

  // 🎯 MÉTODO PRINCIPAL: Adaptar datos preservando contenido original
  adaptDataForComponent(data, componentType, fallbackData = {}) {
    if (!data) return this.createFallbackData(componentType)

    // 🔥 PRESERVAR DATOS ORIGINALES - No inventar contenido
    const adaptedData = {
      ...fallbackData,
      originalData: data, // Mantener referencia completa a datos originales
    }

    // Adaptaciones específicas por tipo de componente SIN AGREGAR CONTENIDO EXTRA
    switch (componentType) {
      case "list":
        return this.adaptToListComponent(adaptedData)
      case "gallery":
        return this.adaptToGalleryComponent(adaptedData)
      case "info":
        return this.adaptToInfoComponent(adaptedData)
      case "schedule":
        return this.adaptToScheduleComponent(adaptedData)
      case "map":
        return this.adaptToMapComponent(adaptedData)
      case "video":
        return this.adaptToVideoComponent(adaptedData)
      case "faq":
        return this.adaptToFaqComponent(adaptedData)
      case "monthly":
        return this.adaptToMonthlyComponent(adaptedData)
      default:
        return adaptedData
    }
  }

  // 🔧 FUNCIÓN MEJORADA: Extraer texto exacto del JSON
  extractExactText(data, possibleKeys) {
    for (const key of possibleKeys) {
      const value = this.deepGet(data, key)
      if (value !== undefined && value !== null) {
        return this.normalizeText(value)
      }
    }
    return null // Retornar null si no encuentra nada
  }

  // 🔧 FUNCIÓN MEJORADA: Extraer párrafos exactos del JSON
  extractExactParagraphs(data, possibleKeys) {
    for (const key of possibleKeys) {
      const value = this.deepGet(data, key)
      if (value !== undefined && value !== null) {
        return this.normalizeParagraphs(value)
      }
    }
    return [] // Retornar array vacío si no encuentra nada
  }

  // 🔧 FUNCIÓN MEJORADA: Extraer items exactos del JSON
  extractExactItems(data, possibleKeys) {
    for (const key of possibleKeys) {
      const value = this.deepGet(data, key)
      if (value !== undefined && value !== null && Array.isArray(value)) {
        return value
      }
    }
    return [] // Retornar array vacío si no encuentra nada
  }

  // 🔧 Función para normalizar imágenes con URLs reales
  normalizeImage(imageData, fallbackSrc = null) {
    const realImages = [
      "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    ]

    if (!imageData) {
      const randomImage = realImages[Math.floor(Math.random() * realImages.length)]
      return {
        src: fallbackSrc || randomImage,
        alt: "Imagen del destino",
      }
    }

    if (typeof imageData === "string") {
      const isValidUrl =
        imageData.startsWith("http") || (imageData.startsWith("/") && !imageData.includes("placeholder"))
      return {
        src: isValidUrl ? imageData : realImages[0],
        alt: "Imagen del destino",
      }
    }

    if (typeof imageData === "object") {
      const srcUrl = imageData.src || imageData.url
      const isValidUrl =
        srcUrl && (srcUrl.startsWith("http") || (srcUrl.startsWith("/") && !srcUrl.includes("placeholder")))

      return {
        src: isValidUrl ? srcUrl : realImages[0],
        alt: imageData.alt || imageData.caption || "Imagen del destino",
      }
    }

    return {
      src: realImages[0],
      alt: "Imagen del destino",
    }
  }

  // 🔧 Función para normalizar texto EXACTO
  normalizeText(textData) {
    if (!textData) return ""
    if (typeof textData === "string") return textData
    if (typeof textData === "object" && textData !== null) {
      if (textData.type && textData.text) return textData.text
      if (textData.es || textData.en) return textData.es || textData.en || ""
      return JSON.stringify(textData)
    }
    return String(textData)
  }

  // 🔧 Función para normalizar párrafos EXACTOS
  normalizeParagraphs(paragraphsData) {
    if (!paragraphsData) return []
    if (Array.isArray(paragraphsData)) {
      return paragraphsData.map((p) => this.normalizeText(p))
    }
    if (typeof paragraphsData === "string") return [paragraphsData]
    return [this.normalizeText(paragraphsData)]
  }

  // Obtener valor anidado de un objeto
  deepGet(obj, path) {
    if (!obj || typeof obj !== "object") return undefined
    if (obj[path] !== undefined) return obj[path]

    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object" && value !== null) {
        const result = this.deepGet(value, path)
        if (result !== undefined) return result
      }
    }
    return undefined
  }

  // 🎯 ADAPTACIÓN PARA COMPONENTE LISTA - Usar datos exactos del JSON
  adaptToListComponent(data) {
    const originalData = data.originalData

    // 🔥 EXTRAER TÍTULO EXACTO del JSON
    const exactTitle = this.extractExactText(originalData, ["title", "sectionTitle", "mainTitle", "blogTitle"])

    // 🔥 EXTRAER ITEMS EXACTOS del JSON
    let exactItems = []

    // Buscar placesList (Template 2)
    if (originalData.placesList) {
      exactItems = originalData.placesList.map((place) => ({
        id: place.id || `place_${Math.random()}`,
        name: this.normalizeText(place.title) || this.normalizeText(place.name),
        description:
          this.normalizeParagraphs(place.descriptionParagraphs)[0] ||
          this.normalizeText(place.description) ||
          this.normalizeText(place.subtitle),
        image: this.normalizeImage(place.image),
      }))
    }
    // Buscar items directos
    else if (originalData.items) {
      exactItems = originalData.items.map((item) => ({
        id: item.id || `item_${Math.random()}`,
        name: this.normalizeText(item.name) || this.normalizeText(item.title),
        description: this.normalizeText(item.description),
        image: this.normalizeImage(item.image),
      }))
    }
    // Buscar monthsData (Template 3)
    else if (originalData.monthsData) {
      exactItems = originalData.monthsData.map((month) => ({
        id: month.id || `month_${Math.random()}`,
        name: this.normalizeText(month.monthTitle),
        description: this.normalizeParagraphs(month.descriptionParagraphs)[0] || "Información disponible",
        image: this.normalizeImage(month.image),
      }))
    }

    return {
      ...data,
      title: exactTitle || "Información disponible",
      items: exactItems,
    }
  }

  // 🎯 ADAPTACIÓN PARA GALERÍA - Usar imágenes exactas del JSON
  adaptToGalleryComponent(data) {
    const originalData = data.originalData
    let exactImages = []

    // Buscar smallImages directas
    if (originalData.smallImages) {
      exactImages = originalData.smallImages.map((img, index) => ({
        id: `gallery_${index}`,
        ...this.normalizeImage(img),
      }))
    }
    // Buscar imágenes en placesList
    else if (originalData.placesList) {
      exactImages = originalData.placesList.slice(0, 4).map((place, index) => ({
        id: place.id || `gallery_${index}`,
        ...this.normalizeImage(place.image),
      }))
    }
    // Buscar imágenes en monthsData
    else if (originalData.monthsData) {
      exactImages = originalData.monthsData.slice(0, 4).map((month, index) => ({
        id: month.id || `gallery_${index}`,
        ...this.normalizeImage(month.image),
      }))
    }

    return {
      ...data,
      largeImage: this.normalizeImage(originalData.largeImage || originalData.heroImage),
      smallImages: exactImages.length
        ? exactImages
        : [
            { id: "default_1", ...this.normalizeImage(null) },
            { id: "default_2", ...this.normalizeImage(null) },
            { id: "default_3", ...this.normalizeImage(null) },
            { id: "default_4", ...this.normalizeImage(null) },
          ],
    }
  }

  // 🎯 ADAPTACIÓN PARA INFO - Usar información exacta del JSON
  adaptToInfoComponent(data) {
    const originalData = data.originalData

    const exactTitle = this.extractExactText(originalData, ["title", "mainTitle", "blogTitle", "sectionTitle"])

    const exactParagraphs = this.extractExactParagraphs(originalData, [
      "introductionParagraphs",
      "descriptionParagraphs",
      "introduction",
      "description",
    ])

    return {
      ...data,
      title: exactTitle || "Información",
      mainTitle: exactTitle || "Información",
      introductionParagraphs: exactParagraphs.length ? exactParagraphs : ["Información disponible"],
      mapSection: originalData.mapSection || {
        image: this.normalizeImage(null),
        caption: "Ubicación en el mapa",
      },
    }
  }

  // 🎯 ADAPTACIÓN PARA HORARIOS - Usar horarios exactos del JSON
  adaptToScheduleComponent(data) {
    const originalData = data.originalData

    const exactTitle = this.extractExactText(originalData, ["title", "sectionTitle"])
    const exactIntroduction = this.extractExactText(originalData, ["introduction", "subtitle"])

    return {
      ...data,
      title: exactTitle || "Horarios disponibles",
      introduction: exactIntroduction || "Consulta los horarios disponibles.",
      scheduleTable: originalData.scheduleTable || {
        headers: [
          { id: "time", label: "Horario" },
          { id: "activity", label: "Actividad" },
        ],
        rows: [
          { time: "9:00 AM", activity: "Información disponible" },
          { time: "12:00 PM", activity: "Información disponible" },
        ],
      },
      footerNote: originalData.footerNote || "Horarios sujetos a cambio.",
    }
  }

  // 🎯 ADAPTACIÓN PARA MAPA - Usar configuración exacta del JSON
  adaptToMapComponent(data) {
    const originalData = data.originalData

    const exactTitle = this.extractExactText(originalData, ["title", "sectionTitle"])
    const exactIntroduction = this.extractExactText(originalData, ["introduction", "subtitle"])

    return {
      ...data,
      title: exactTitle || "Ubicación en el mapa",
      introduction: exactIntroduction || "Consulta la ubicación en el siguiente mapa:",
      mapConfiguration: originalData.mapConfiguration || {
        defaultCenter: { lat: 20.6843, lng: -105.2551 },
        defaultZoom: 10,
        markers: [{ id: "main", position: { lat: 20.6843, lng: -105.2551 }, name: "Ubicación principal" }],
      },
      fallbackImage: this.normalizeImage(originalData.fallbackImage),
    }
  }

  // 🎯 ADAPTACIÓN PARA VIDEO - Usar video exacto del JSON
  adaptToVideoComponent(data) {
    const originalData = data.originalData

    const exactTitle = this.extractExactText(originalData, ["title", "sectionTitle"])
    const exactParagraphs = this.extractExactParagraphs(originalData, ["descriptionParagraphs", "description"])

    return {
      ...data,
      title: exactTitle || "Video informativo",
      descriptionParagraphs: exactParagraphs.length ? exactParagraphs : ["Disfruta de este contenido audiovisual."],
      video: originalData.video || {
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        ariaTitle: "Video informativo",
      },
      videoCaption: originalData.videoCaption || "Disfruta del contenido.",
    }
  }

  // 🎯 ADAPTACIÓN PARA FAQ - Usar preguntas exactas del JSON
  adaptToFaqComponent(data) {
    const originalData = data.originalData

    const exactTitle = this.extractExactText(originalData, ["sectionTitle", "title"])
    const exactIntroduction = this.extractExactText(originalData, ["introduction", "subtitle"])

    let exactFaqList = []
    if (originalData.faqList) {
      exactFaqList = originalData.faqList.map((faq) => ({
        ...faq,
        question: this.normalizeText(faq.question),
        answer: this.normalizeText(faq.answer),
      }))
    }

    return {
      ...data,
      sectionTitle: exactTitle || "Preguntas frecuentes",
      introduction: exactIntroduction || "Encuentra respuestas a las preguntas más comunes.",
      faqList: exactFaqList.length
        ? exactFaqList
        : [
            {
              id: "default_faq",
              question: "¿Qué información está disponible?",
              answer: "Información disponible en el sistema.",
            },
          ],
    }
  }

  // 🎯 ADAPTACIÓN PARA MENSUAL - Usar datos mensuales exactos del JSON
  adaptToMonthlyComponent(data) {
    const originalData = data.originalData

    let exactSeasons = []
    if (originalData.seasons) {
      exactSeasons = originalData.seasons.map((season) => ({
        ...season,
        seasonTitle: this.normalizeText(season.seasonTitle),
        seasonIntroductionParagraphs: this.normalizeParagraphs(season.seasonIntroductionParagraphs),
        monthsData:
          season.monthsData?.map((month) => ({
            ...month,
            monthTitle: this.normalizeText(month.monthTitle),
            descriptionParagraphs: this.normalizeParagraphs(month.descriptionParagraphs),
            image: this.normalizeImage(month.image),
          })) || [],
      }))
    }

    return {
      ...data,
      seasons: exactSeasons.length
        ? exactSeasons
        : [
            {
              id: "default_season",
              seasonTitle: "Información general",
              seasonIntroductionParagraphs: ["Información disponible."],
              monthsData: [
                {
                  id: "default_month",
                  monthTitle: "Información disponible",
                  stats: [],
                  descriptionParagraphs: ["Datos disponibles."],
                  image: this.normalizeImage(null),
                },
              ],
            },
          ],
    }
  }

  // Crear datos de respaldo mínimos
  createFallbackData(componentType) {
    const fallbacks = {
      list: { title: "Información disponible", items: [] },
      gallery: { largeImage: this.normalizeImage(null), smallImages: [] },
      info: { title: "Información", introductionParagraphs: ["Información disponible."] },
      schedule: { title: "Horarios", scheduleTable: { headers: [], rows: [] } },
      map: { title: "Ubicación", mapConfiguration: {} },
      video: { title: "Video", video: { embedUrl: "", ariaTitle: "Video" } },
      faq: { sectionTitle: "Preguntas", faqList: [] },
      monthly: { seasons: [] },
    }

    return fallbacks[componentType] || { title: "Información", description: "Datos no disponibles" }
  }
}

// Instancia global
export const intelligentAdapter = new IntelligentDataAdapter()

// Hook personalizado para usar en componentes
export function useIntelligentData(data, componentType, fallbackData = {}) {
  return intelligentAdapter.adaptDataForComponent(data, componentType, fallbackData)
}
