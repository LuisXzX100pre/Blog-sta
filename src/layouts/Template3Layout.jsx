"use client"

import { Container } from "../components/general/container"
import ReturnButton from "../components/general/ReturnButton"
import WelcomeImage from "../components/general/WelcomeImage"
import CreationDate from "../components/general/CreationDate"
import Title from "../components/general/titles"
import Paragraph from "../components/general/paragraph"
import CategoryTags from "../components/general/categorytags"
import RelatedArticlesBlog from "../components/general/relatedarticlesblog"
import WeatherRecommendations from "../components/template3/weatherrecommendations"
import InfoByMonth from "../components/template3/infobymonth"
import CurrentQuestions from "../components/template3/currentquestions"
import { useLanguage } from "../context/LanguageContext"

export default function Template3Layout({ blogData: propBlogData, lang }) {
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
            <div className="mt-4 mb-6">
              <Title title={data.blogTitle || "Guía Climática"} type={type} />
            </div>
            <div className="flex flex-col gap-5">
              {Array.isArray(data.introduction) &&
                data.introduction.map((paragraph, index) => <Paragraph key={index} text={paragraph} />)}

              <div className="space-y-12">
                <WeatherRecommendations data={sections?.climateOverview?.data} type={type} lang={currentLang} />
                <InfoByMonth data={sections?.monthlyWeatherInfo?.data} type={type} lang={currentLang} />
                <CurrentQuestions data={sections?.frequentlyAskedQuestions?.data} type={type} lang={currentLang} />
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