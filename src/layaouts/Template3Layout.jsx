"use client"

import blogData from "../data/blog-data.json"

// SOLO Template 3 components
import WeatherRecommendations from "../components/template3/WeatherRecommendations"
import InfoByMonth from "../components/template3/InfoByMonth"
import CurrentQuestions from "../components/template3/CurrentQuestions"

export default function Template3Layout() {
  const sections = blogData?.sections

  if (!sections) {
    return <div>Error: No se pudieron cargar los datos del Template 3</div>
  }

  return (
    <div className="space-y-12">
      {sections.generalClimateInfo && (
        <section>
          <WeatherRecommendations data={sections.generalClimateInfo.data} />
        </section>
      )}

      {sections.monthlyInfo && (
        <section>
          <InfoByMonth data={sections.monthlyInfo.data} />
        </section>
      )}

      {sections.frequentlyAskedQuestions && (
        <section>
          <CurrentQuestions data={sections.frequentlyAskedQuestions.data} />
        </section>
      )}
    </div>
  )
}
