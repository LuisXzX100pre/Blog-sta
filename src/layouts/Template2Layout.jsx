"use client"

import { Container } from "../components/general/Container"
import ReturnButton from "../components/general/ReturnButton"
import WelcomeImage from "../components/general/WelcomeImage"
import CreationDate from "../components/general/CreationDate"
import CategoryTags from "../components/general/CategoryTags"
import RelatedArticlesBlog from "../components/general/RelatedArticlesBlog"
import AcapulcoGuideIntro from "../components/template2/AcapulcoGuideIntro"
import FactBox from "../components/template2/FactBox"
import MapView from "../components/template2/MapView"
import PlacesToVisit from "../components/template2/PlacesToVisit"
import RecommendationsBeforeVisit from "../components/template2/RecommendationsBeforeVisit"
import RoutesRecommendations from "../components/template2/RoutesRecommendations"
import "../styles/clickable-title.css"
import { useLanguage } from "../context/LanguageContext"

export default function Template2Layout({ blogData: propBlogData, lang }) {
  const { lang: contextLang } = useLanguage()
  const currentLang = lang || contextLang || "es"

  // 🧠 BUSCAR DATOS INTELIGENTEMENTE - cualquier destino que tenga template 2
  let data = null
  let destinationKey = null

  // Buscar el primer destino que tenga template 2, o usar el primero disponible
  if (propBlogData) {
    for (const [key, value] of Object.entries(propBlogData)) {
      if (value.template === 2) {
        data = value
        destinationKey = key
        break
      }
    }
    
    // Si no encontramos template 2, usar el primero disponible (datos adaptados)
    if (!data) {
      const firstKey = Object.keys(propBlogData)[0]
      data = propBlogData[firstKey]
      destinationKey = firstKey
    }
  }

  const templateNumber = data?.template || 2

  console.log(`🎯 Template2Layout renderizando ${destinationKey} con template ${templateNumber}`)

  // ✅ QUITAR VALIDACIÓN - Permitir cualquier template
  // if (templateNumber !== 2) {
  //   return (
  //     <Container>
  //       <div className="py-8 text-center">
  //         <p>Este contenido no está disponible para Template 2</p>
  //       </div>
  //     </Container>
  //   )
  // }

  const sections = data?.sections
  const acapulcoGuide = data?.acapulcoGuide || sections?.acapulcoGuide

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
    return sections?.[sectionKey]?.type || "hotel"
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
            {/* 🧠 Componente inteligente que se adapta a cualquier dato */}
            <AcapulcoGuideIntro 
              data={acapulcoGuide?.data || data} 
              type={getSectionType("acapulcoGuide")} 
              lang={currentLang} 
            />
            
            <div className="space-y-12">
              {/* 🧠 Componentes inteligentes que se adaptan a cualquier estructura de datos */}
              <section>
                <PlacesToVisit
                  data={sections?.placesToVisit?.data || sections?.whatToFind?.data || sections?.monthlyInfo?.data}
                  showFirstHalf={true}
                  type={getSectionType("placesToVisit")}
                  lang={currentLang}
                />
              </section>

              <section>
                <FactBox 
                  data={sections?.quickFact?.data || data} 
                  type={getSectionType("quickFact")} 
                  lang={currentLang} 
                />
              </section>

              <section>
                <PlacesToVisit
                  data={sections?.placesToVisit?.data || sections?.whatToFind?.data || sections?.monthlyInfo?.data}
                  showSecondHalf={true}
                  type={getSectionType("placesToVisit")}
                  lang={currentLang}
                />
              </section>

              <section>
                <MapView 
                  data={sections?.touristMap?.data || sections?.locationInfo?.data || data} 
                  type={getSectionType("touristMap")} 
                  lang={currentLang} 
                />
              </section>

              <section>
                <RecommendationsBeforeVisit
                  data={sections?.beforeYouVisitRecommendations?.data || sections?.howToGetThere?.data || sections?.frequentlyAskedQuestions?.data}
                  type={getSectionType("beforeYouVisitRecommendations")}
                  lang={currentLang}
                />
              </section>

              <section>
                <RoutesRecommendations
                  data={sections?.routesFrom?.data || sections?.howToGetThere?.data || data}
                  type={getSectionType("routesFrom")}
                  lang={currentLang}
                />
              </section>
            </div>
            <CategoryTags lang={currentLang} />
            <RelatedArticlesBlog lang={currentLang} />
          </div>
        </div>
      </div>
    </Container>
  )
}
