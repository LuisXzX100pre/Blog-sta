"use client"

import { Container } from "../components/general/Container"
import blogData from "../data/blog-data.json"
import ReturnButton from "../components/general/ReturnButton"
import WelcomeImage from "../components/general/WelcomeImage"
import CreationDate from "../components/general/CreationDate"
import Title from "../components/general/Titles"
import Paragraph from "../components/general/Paragraph"

// solo componentes del template 2
import FactBox from "../components/template2/FactBox"
import MapView from "../components/template2/MapView"
import PlacesToVisit from "../components/template2/PlacesToVisit"
import RecommendationsBeforeVisit from "../components/template2/RecommendationsBeforeVisit"
import RoutesRecommendations from "../components/template2/RoutesRecommendations"

export default function Template2Layout() {
  const sections = blogData?.sections

  if (!sections) {
    return (
      <Container>
        <div>Error: No se pudieron cargar los datos del Template 2</div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="py-8">
        <ReturnButton />
        <WelcomeImage source={blogData.heroImage} />
        <CreationDate />

        <div className="flex flex-col justify-center">
          <div className="mt-4 mb-6">
            <Title title={blogData.blogTitle.es} />
          </div>
          <div className="flex flex-col gap-5">
            <Paragraph text={blogData.introduction.es} />

            <div className="space-y-12">
              {sections?.quickFact && (
                <section>
                  <FactBox data={sections.quickFact.data} />
                </section>
              )}

              {sections?.placesToVisit && (
                <section>
                  <PlacesToVisit data={sections.placesToVisit.data} />
                </section>
              )}

              <section>
                <MapView />
              </section>

              <section>
                <RecommendationsBeforeVisit />
              </section>

              <section>
                <RoutesRecommendations />
              </section>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
