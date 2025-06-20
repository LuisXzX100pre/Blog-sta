"use client"

import { Container } from "../components/general/Container"
import blogData from "../data/blog-data.json"
import ReturnButton from "../components/general/ReturnButton"
import WelcomeImage from "../components/general/WelcomeImage"
import CreationDate from "../components/general/CreationDate"

// Componentes generales
import CategoryTags from "../components/general/CategoryTags"
import RelatedArticlesBlog from "../components/general/RelatedArticlesBlog"

// solo componentes del template 2
import AcapulcoGuideIntro from "../components/template2/AcapulcoGuideIntro"
import FactBox from "../components/template2/FactBox"
import MapView from "../components/template2/MapView"
import PlacesToVisit from "../components/template2/PlacesToVisit"
import RecommendationsBeforeVisit from "../components/template2/RecommendationsBeforeVisit"
import RoutesRecommendations from "../components/template2/RoutesRecommendations"

export default function Template2Layout() {
  const sections = blogData?.sections
  const acapulcoGuide = blogData?.acapulcoGuide

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

        {/* Contenedor con padding para el contenido principal */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center">
            {/* Nueva sección de introducción a Acapulco */}
            {acapulcoGuide && <AcapulcoGuideIntro data={acapulcoGuide.data} />}

            <div className="space-y-12">
              {/* Primera mitad de lugares */}
              {sections?.placesToVisit && (
                <section>
                  <PlacesToVisit data={sections.placesToVisit.data} showFirstHalf={true} />
                </section>
              )}

              {/* ¿Sabías que...? - EN EL MEDIO - Forzando los datos directamente */}
              <section>
                <FactBox
                  data={{
                    title: { es: "¿Sabías qué?..." },
                    fact: {
                      es: "Acapulco es la ciudad más grande del Estado de Guerrero y es uno de los 10 destinos turísticos más visitados de México.",
                    },
                  }}
                />
              </section>

              {/* Segunda mitad de lugares */}
              {sections?.placesToVisit && (
                <section>
                  <PlacesToVisit data={sections.placesToVisit.data} showSecondHalf={true} />
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

            {/* NUEVAS SECCIONES: Categorías y Artículos Relacionados */}
            <CategoryTags />
            <RelatedArticlesBlog />
          </div>
        </div>
      </div>
    </Container>
  )
}
