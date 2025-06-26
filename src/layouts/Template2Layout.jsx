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
  const data = propBlogData // Solo usar los datos recibidos como props
  const sections = data?.sections
  const acapulcoGuide = data?.acapulcoGuide

  if (!sections) {
    return null
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
        <div className="max-w-[68vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center">
            {acapulcoGuide && (
              <AcapulcoGuideIntro data={acapulcoGuide.data} type={getSectionType("acapulcoGuide")} lang={currentLang} />
            )}
            <div className="space-y-12">
              {sections?.placesToVisit && (
                <section>
                  <PlacesToVisit
                    data={sections.placesToVisit.data}
                    showFirstHalf={true}
                    type={getSectionType("placesToVisit")}
                    lang={currentLang}
                  />
                </section>
              )}
              {sections?.quickFact && (
                <section>
                  <FactBox data={sections.quickFact.data} type={getSectionType("quickFact")} lang={currentLang} />
                </section>
              )}
              {sections?.placesToVisit && (
                <section>
                  <PlacesToVisit
                    data={sections.placesToVisit.data}
                    showSecondHalf={true}
                    type={getSectionType("placesToVisit")}
                    lang={currentLang}
                  />
                </section>
              )}
              {sections?.touristMap && (
                <section>
                  <MapView data={sections.touristMap.data} type={getSectionType("touristMap")} lang={currentLang} />
                </section>
              )}
              {sections?.beforeYouVisitRecommendations && (
                <section>
                  <RecommendationsBeforeVisit
                    data={sections.beforeYouVisitRecommendations.data}
                    type={getSectionType("beforeYouVisitRecommendations")}
                    lang={currentLang}
                  />
                </section>
              )}
              {sections?.routesFrom && (
                <section>
                  <RoutesRecommendations
                    data={sections.routesFrom.data}
                    type={getSectionType("routesFrom")}
                    lang={currentLang}
                  />
                </section>
              )}
            </div>
            <CategoryTags lang={currentLang} />
            <RelatedArticlesBlog lang={currentLang} />
          </div>
        </div>
      </div>
    </Container>
  )
}
