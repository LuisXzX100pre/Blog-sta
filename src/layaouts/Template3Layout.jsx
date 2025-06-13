"use client"

import { Container } from "../components/general/Container"
import blogData from "../data/blog-data.json"
import ReturnButton from "../components/general/ReturnButton"
import WelcomeImage from "../components/general/WelcomeImage"
import CreationDate from "../components/general/CreationDate"
import Title from "../components/general/Titles"
import Paragraph from "../components/general/Paragraph"

// solo componentes del template 3
import WeatherRecommendations from "../components/template3/WeatherRecommendations"
import InfoByMonth from "../components/template3/InfoByMonth"
import CurrentQuestions from "../components/template3/CurrentQuestions"

export default function Template3Layout() {
  const sections = blogData?.sections

  if (!sections) {
    return (
      <Container>
        <div>Error: No se pudieron cargar los datos del Template 3</div>
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
              {sections?.generalClimateInfo && (
                <section>
                  <WeatherRecommendations data={sections.generalClimateInfo.data} />
                </section>
              )}

              {sections?.monthlyInfo && (
                <section>
                  <InfoByMonth data={sections.monthlyInfo.data} />
                </section>
              )}

              {sections?.frequentlyAskedQuestions && (
                <section>
                  <CurrentQuestions data={sections.frequentlyAskedQuestions.data} />
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
