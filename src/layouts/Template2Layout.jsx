"use client"

import { Container } from "../components/general/container"
import ReturnButton from "../components/general/ReturnButton"
import WelcomeImage from "../components/general/WelcomeImage"
import CreationDate from "../components/general/CreationDate"
import CategoryTags from "../components/general/CategoryTags"
import RelatedArticlesBlog from "../components/general/relatedarticlesblog"
import AcapulcoGuideIntro from "../components/template2/acapulcoguideintro"
import FactBox from "../components/template2/factbox"
import MapView from "../components/template2/mapview"
import PlacesToVisit from "../components/template2/placestovisit"
import RecommendationsBeforeVisit from "../components/template2/recommendationsbeforevisit"
import RoutesRecommendations from "../components/template2/routesrecommendations"
import { useLanguage } from "../context/LanguageContext"

export default function Template2Layout({ blogData: propBlogData, lang }) {
  // Eliminamos la dependencia del contexto de idioma
  const currentLang = lang || "es"

  const data = Object.values(propBlogData)[0]

  if (!data) {
    return (
      <Container>
        <div className="py-8 text-center">
          <p>No se encontraron datos para renderizar el blog.</p>
        </div>
      </Container>
    )
  }

  const sections = data.sections
  const type = data.type || "tour"

  return (
    <Container>
      <div className="py-8">
        <ReturnButton />
        <WelcomeImage source={data.heroImage} lang={currentLang} />
        <CreationDate date={data.date} />
        <div className="max-w-[68vw] mx-auto px-4 sm:px:6 lg:px-8">
          <div className="flex flex-col justify-center">
            <AcapulcoGuideIntro data={sections?.acapulcoGuide?.data} type={type} lang={currentLang} />

            <div className="space-y-12">
              <section>
                <PlacesToVisit
                  data={sections?.placesToVisit?.data}
                  showFirstHalf={true}
                  type={type}
                  lang={currentLang}
                />
              </section>

              <section>
                <FactBox data={sections?.quickFact?.data} type={type} lang={currentLang} />
              </section>

              <section>
                <PlacesToVisit
                  data={sections?.placesToVisit?.data}
                  showSecondHalf={true}
                  type={type}
                  lang={currentLang}
                />
              </section>

              <section>
                <MapView data={sections?.touristMap?.data} type={type} lang={currentLang} />
              </section>

              <section>
                <RecommendationsBeforeVisit
                  data={sections?.beforeYouVisitRecommendations?.data}
                  type={type}
                  lang={currentLang}
                />
              </section>

              <section>
                <RoutesRecommendations data={sections?.routesFrom?.data} type={type} lang={currentLang} />
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
