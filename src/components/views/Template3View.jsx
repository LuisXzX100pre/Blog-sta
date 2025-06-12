"use client"

import { Container } from "../general/Container"
import TemplateNavigation from "../general/TemplateNavigation"
import blogData from "../../data/blog-data.json"
import ReturnButton from "../general/ReturnButton"
import WelcomeImage from "../general/WelcomeImage"
import CreationDate from "../general/CreationDate"
import Title from "../general/Titles"
import Paragraph from "../general/Paragraph"

// solo componentes del template 3
import WeatherRecommendations from "../template3/WeatherRecommendations"
import InfoByMonth from "../template3/InfoByMonth"
import CurrentQuestions from "../template3/CurrentQuestions"

export default function Template3View() {
  const sections = blogData?.sections

  return (
    <Container>
      <div className="py-8">
        <TemplateNavigation currentTemplate={3} />

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
              {sections?.generalClimateInfo && <WeatherRecommendations data={sections.generalClimateInfo.data} />}

              {sections?.monthlyInfo && <InfoByMonth data={sections.monthlyInfo.data} />}

              {sections?.frequentlyAskedQuestions && <CurrentQuestions data={sections.frequentlyAskedQuestions.data} />}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
