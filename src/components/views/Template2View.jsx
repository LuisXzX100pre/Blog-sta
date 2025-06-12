"use client"

import { Container } from "../general/Container"
import TemplateNavigation from "../general/TemplateNavigation"
import blogData from "../../data/blog-data.json"
import ReturnButton from "../general/ReturnButton"
import WelcomeImage from "../general/WelcomeImage"
import CreationDate from "../general/CreationDate"
import Title from "../general/Titles"
import Paragraph from "../general/Paragraph"

// solo componentes del template 2
import FactBox from "../template2/FactBox"
import MapView from "../template2/MapView"
import PlacesToVisit from "../template2/PlacesToVisit"
import RecommendationsBeforeVisit from "../template2/RecommendationsBeforeVisit"
import RoutesRecommendations from "../template2/RoutesRecommendations"

export default function Template2View() {
  const sections = blogData?.sections

  return (
    <Container>
      <div className="py-8">
        <TemplateNavigation currentTemplate={2} />

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
              {sections?.quickFact && <FactBox data={sections.quickFact.data} />}

              {sections?.placesToVisit && <PlacesToVisit data={sections.placesToVisit.data} />}

              <MapView />

              <RecommendationsBeforeVisit />

              <RoutesRecommendations />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
