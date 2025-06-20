"use client"

import { Container } from "../components/general/Container"
import blogData from "../data/blog-data.json"
import ReturnButton from "../components/general/ReturnButton"
import WelcomeImage from "../components/general/WelcomeImage"
import CreationDate from "../components/general/CreationDate"
import Title from "../components/general/Titles"
import Paragraph from "../components/general/Paragraph"

// Componentes generales
import CategoryTags from "../components/general/CategoryTags"
import RelatedArticlesBlog from "../components/general/RelatedArticlesBlog"

// solo componentes del template 3
import WeatherRecommendations from "../components/template3/WeatherRecommendations"
import InfoByMonth from "../components/template3/InfoByMonth"
import CurrentQuestions from "../components/template3/CurrentQuestions"

// Importar estilos CSS
import "../styles/clickable-title.css"

export default function Template3Layout() {
  const sections = blogData?.sections

  if (!sections) {
    return (
      <Container>
        <div>Error: No se pudieron cargar los datos del Template 3</div>
      </Container>
    )
  }

  // Determinar el tipo basado en las secciones del JSON
  const getSectionType = (sectionKey) => {
    return sections[sectionKey]?.type || "hotel"
  }

  return (
    <Container>
      <div className="py-8">
        <ReturnButton />
        <WelcomeImage source={blogData.heroImage} />
        <CreationDate />
        <div className="max-w-[68vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mt-4 mb-6">
              <Title title={blogData.blogTitle.es} type="hotel" />
            </div>
            <div className="flex flex-col gap-5">
              {Array.isArray(blogData.introduction.es) ? (
                blogData.introduction.es.map((paragraph, index) => <Paragraph key={index} text={paragraph} />)
              ) : (
                <Paragraph text={blogData.introduction.es} />
              )}
              <div className="space-y-12">
                {sections?.generalClimateInfo && (
                  <section>
                    <WeatherRecommendations
                      data={sections.generalClimateInfo.data}
                      type={getSectionType("generalClimateInfo")}
                    />
                  </section>
                )}
                {sections?.monthlyInfo && (
                  <section>
                    <InfoByMonth data={sections.monthlyInfo.data} type={getSectionType("monthlyInfo")} />
                  </section>
                )}
                {sections?.frequentlyAskedQuestions && (
                  <section>
                    <CurrentQuestions
                      data={sections.frequentlyAskedQuestions.data}
                      type={getSectionType("frequentlyAskedQuestions")}
                    />
                  </section>
                )}
                {sections?.finalConclusion && (
                  <section>
                    <div className="mt-11">
                      <Title title={sections.finalConclusion.data.sectionTitle.es} type="hotel" />
                      <hr className="my-[15.5px]" />
                      <div className="flex flex-col gap-5">
                        {sections.finalConclusion.data.conclusionParagraphs.map((paragraph, index) => (
                          <Paragraph key={index} text={paragraph.es} />
                        ))}
                      </div>
                      {sections.finalConclusion.data.finalCallToAction && (
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                          <Paragraph text={sections.finalConclusion.data.finalCallToAction.es} />
                        </div>
                      )}
                    </div>
                  </section>
                )}
              </div>
              <CategoryTags />
              <RelatedArticlesBlog />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
