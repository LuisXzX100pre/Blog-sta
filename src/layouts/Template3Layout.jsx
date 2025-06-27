"use client"

import { Container } from "../components/general/Container"
import ReturnButton from "../components/general/ReturnButton"
import WelcomeImage from "../components/general/WelcomeImage"
import CreationDate from "../components/general/CreationDate"
import Title from "../components/general/Titles"
import Paragraph from "../components/general/Paragraph"
import CategoryTags from "../components/general/CategoryTags"
import RelatedArticlesBlog from "../components/general/RelatedArticlesBlog"
import WeatherRecommendations from "../components/template3/WeatherRecommendations"
import InfoByMonth from "../components/template3/InfoByMonth"
import CurrentQuestions from "../components/template3/CurrentQuestions"
import "../styles/clickable-title.css"
import { useLanguage } from "../context/LanguageContext"

export default function Template3Layout({ blogData: propBlogData, lang }) {
  const { lang: contextLang } = useLanguage()
  const currentLang = lang || contextLang || "es"
  
  // 🧠 BUSCAR DATOS INTELIGENTEMENTE - cualquier destino que tenga template 3
  let data = null
  let destinationKey = null

  // Buscar el primer destino que tenga template 3, o usar el primero disponible
  if (propBlogData) {
    for (const [key, value] of Object.entries(propBlogData)) {
      if (value.template === 3) {
        data = value
        destinationKey = key
        break
      }
    }
    
    // Si no encontramos template 3, usar el primero disponible (datos adaptados)
    if (!data) {
      const firstKey = Object.keys(propBlogData)[0]
      data = propBlogData[firstKey]
      destinationKey = firstKey
    }
  }

  const templateNumber = data?.template || 3

  console.log(`🎯 Template3Layout renderizando ${destinationKey} con template ${templateNumber}`)

  // ✅ QUITAR VALIDACIÓN - Permitir cualquier template
  // if (templateNumber !== 3) {
  //   return (
  //     <Container>
  //       <div className="py-8 text-center">
  //         <p>Este contenido no está disponible para Template 3</p>
  //       </div>
  //     </Container>
  //   )
  // }

  const sections = data?.sections

  if (!data) {
    return (
      <Container>
        <div className="py-8 text-center">
          <p>No hay datos disponibles</p>
        </div>
      </Container>
    )
  }

  const getSectionType = (sectionKey) => {
    return sections?.[sectionKey]?.type || "climate"
  }

  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj
    return textObj?.[currentLang] || textObj?.es || textObj?.en || ""
  }

  return (
    <Container>
      <div className="py-8">
        <ReturnButton />
        <WelcomeImage source={data.heroImage} lang={currentLang} />
        <CreationDate />
        <div className="max-w-[68vw] mx-auto px-4 sm:px:6 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mt-4 mb-6">
              <Title
                title={data.blogTitle || (currentLang === "en" ? "Climate Guide" : "Guía Climática")}
                type="climate"
              />
            </div>
            <div className="flex flex-col gap-5">
              {Array.isArray(data.introduction)
                ? data.introduction.map((paragraph, index) => <Paragraph key={index} text={paragraph} />)
                : data.introduction && <Paragraph text={data.introduction} />}
              <div className="space-y-12">
                {/* 🧠 Componentes inteligentes que se adaptan a cualquier estructura de datos */}
                <section>
                  <WeatherRecommendations
                    data={sections?.generalClimateInfo?.data || sections?.whatToFind?.data || sections?.placesToVisit?.data}
                    type={getSectionType("generalClimateInfo")}
                    lang={currentLang}
                  />
                </section>

                <section>
                  <InfoByMonth
                    data={sections?.monthlyInfo?.data || sections?.placesToVisit?.data || sections?.whatToFind?.data}
                    type={getSectionType("monthlyInfo")}
                    lang={currentLang}
                  />
                </section>

                <section>
                  <CurrentQuestions
                    data={sections?.frequentlyAskedQuestions?.data || sections?.howToGetThere?.data || data}
                    type={getSectionType("frequentlyAskedQuestions")}
                    lang={currentLang}
                  />
                </section>

                {sections?.finalConclusion && (
                  <section>
                    <div className="mt-11">
                      <Title title={currentLang === "en" ? "Conclusion" : "Conclusión"} type="climate" />
                      <hr className="my-[15.5px]" />
                      <div className="flex flex-col gap-5">
                        {sections.finalConclusion.data.conclusionParagraphs?.map((paragraph, index) => (
                          <Paragraph key={index} text={paragraph} />
                        ))}
                      </div>
                      {sections.finalConclusion.data.finalCallToAction && (
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                          <Paragraph text={sections.finalConclusion.data.finalCallToAction} />
                        </div>
                      )}
                    </div>
                  </section>
                )}
              </div>
              <CategoryTags lang={currentLang} />
              <RelatedArticlesBlog lang={currentLang} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
