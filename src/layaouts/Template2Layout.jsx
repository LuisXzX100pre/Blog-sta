"use client"

import blogData from "../data/blog-data.json"

// SOLO Template 2 components
import FactBox from "../components/template2/FactBox"
import MapView from "../components/template2/MapView"
import PlacesToVisit from "../components/template2/PlacesToVisit"
import RecommendationsBeforeVisit from "../components/template2/RecommendationsBeforeVisit"
import RoutesRecommendations from "../components/template2/RoutesRecommendations"

export default function Template2Layout() {
  const sections = blogData?.sections

  if (!sections) {
    return <div>Error: No se pudieron cargar los datos del Template 2</div>
  }

  return (
    <div className="space-y-12">
      {sections.quickFact && (
        <section>
          <FactBox data={sections.quickFact.data} />
        </section>
      )}

      {sections.placesToVisit && (
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
  )
}
