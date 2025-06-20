export function isCancunHotelTitle(text, type) {
  return type === "hotel" && text.toLowerCase().includes("cancún")
}

export function extractCancunSections(blogData) {
  const cancunHotelSections = []

  Object.entries(blogData.sections || {}).forEach(([key, section]) => {
    if (section.type === "hotel") {
      // Verificar títulos principales
      const titles = [section.data?.sectionTitle?.es, section.data?.title?.es, section.data?.mainTitle?.es].filter(
        Boolean,
      )

      titles.forEach((title) => {
        if (title && title.toLowerCase().includes("cancún")) {
          cancunHotelSections.push(key)
        }
      })

      // Verificar bloques de contenido
      section.data?.contentBlocks?.forEach((block) => {
        if (block.type === "mainTitle" && block.text?.es?.toLowerCase().includes("cancún")) {
          cancunHotelSections.push(key)
        }
      })

      // Verificar temporadas
      section.data?.seasons?.forEach((season) => {
        if (season.seasonTitle?.es?.toLowerCase().includes("cancún")) {
          cancunHotelSections.push(key)
        }

        season.monthsData?.forEach((month) => {
          if (month.monthTitle?.es?.toLowerCase().includes("cancún")) {
            cancunHotelSections.push(key)
          }
        })
      })
    }
  })

  return [...new Set(cancunHotelSections)] // Eliminar duplicados
}
