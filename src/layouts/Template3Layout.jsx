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
  const type = data.type || "climate"

  return (
    <Container>
      <div className="py-8">
        <ReturnButton />
        <WelcomeImage source={data.heroImage} lang={currentLang} />
        <CreationDate date={data.date} />
        <div className="max-w-[68vw] mx-auto px-4 sm:px:6 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mt-4 mb-6">
              <Title title={data.blogTitle || "Guía Climática"} type={type} />
            </div>
            <div className="flex flex-col gap-5">
              {Array.isArray(data.introduction) &&
                data.introduction.map((paragraph, index) => <Paragraph key={index} text={paragraph} />)}

              <div className="space-y-12">
            
                <section>
                  <WeatherRecommendations data={sections?.generalClimateInfo?.data} type={type} lang={currentLang} />
                </section>

                <section>
                  <InfoByMonth data={sections?.monthlyInfo?.data} type={type} lang={currentLang} />
                </section>

                <section>
                  <CurrentQuestions data={sections?.frequentlyAskedQuestions?.data} type={type} lang={currentLang} />
                </section>

                {sections?.finalConclusion && (
                  <section>
                    <div className="mt-11">
                      <Title title={currentLang === "en" ? "Conclusion" : "Conclusión"} type={type} />
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
