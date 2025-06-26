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
  const data = propBlogData // Solo usar los datos recibidos como props
  const sections = data?.sections

  if (!sections) {
    return null
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
        <div className="max-w-[68vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mt-4 mb-6">
              <Title
                title={
                  currentLang === "en"
                    ? "When is the Best Time to Travel to Cancún?"
                    : "¿Cuándo es la mejor época para viajar a Cancún?"
                }
                type="climate"
              />
            </div>
            <div className="flex flex-col gap-5">
              {Array.isArray(data.introduction)
                ? data.introduction.map((paragraph, index) => <Paragraph key={index} text={paragraph} />)
                : data.introduction && <Paragraph text={data.introduction} />}
              <div className="space-y-12">
                {sections?.generalClimateInfo && (
                  <section>
                    <WeatherRecommendations
                      data={sections.generalClimateInfo.data}
                      type={getSectionType("generalClimateInfo")}
                      lang={currentLang}
                    />
                  </section>
                )}
                {sections?.monthlyInfo && (
                  <section>
                    <InfoByMonth
                      data={sections.monthlyInfo.data}
                      type={getSectionType("monthlyInfo")}
                      lang={currentLang}
                    />
                  </section>
                )}
                {sections?.frequentlyAskedQuestions && (
                  <section>
                    <CurrentQuestions
                      data={sections.frequentlyAskedQuestions.data}
                      type={getSectionType("frequentlyAskedQuestions")}
                      lang={currentLang}
                    />
                  </section>
                )}
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
