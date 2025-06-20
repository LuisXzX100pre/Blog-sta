"use client"

import { Container } from "../components/general/Container"
import ReturnButton from "../components/general/ReturnButton"
import WelcomeImage from "../components/general/WelcomeImage"
import CreationDate from "../components/general/CreationDate"
import Title from "../components/general/Titles"
import Paragraph from "../components/general/Paragraph"

// Componentes generales
import CategoryTags from "../components/general/CategoryTags"
import RelatedArticlesBlog from "../components/general/RelatedArticlesBlog"

// solo componentes del template 1
import WhereLocated from "../components/template1/WhereLocated"
import HowToGet from "../components/template1/HowToGet"
import HowToBook from "../components/template1/HowToBook"
import VideoPlace from "../components/template1/VideoPlace"
import FamilyHotelsBlog from "../components/template1/FamilyHotelsBlog"
import FavoriteActivitiesBlog from "../components/template1/FavoriteActivitiesBlog"
import FromToBlog from "../components/template1/FromToBlog"
import GalleryPicsCollage from "../components/template1/GalleryPicsCollage"
import WhatWillYouFind from "../components/template1/WhatWillYouFind"
import ScheduleBlog from "../components/template1/ScheduleBlog"

// Importar datos del JSON
import blogData from "../data/blog-data.json"

// Importar estilos CSS
import "../styles/clickable-title.css"

export default function Template1Layout({ blogData: propBlogData }) {
  // Usar blogData pasado como prop o fallback a datos importados
  const data = propBlogData || blogData
  const sections = data?.sections

  if (!data) {
    return (
      <Container>
        <div>Error: No se pudieron cargar los datos del Template 1</div>
      </Container>
    )
  }

  // Determinar el tipo basado en las secciones del JSON
  const getSectionType = (sectionKey) => {
    return sections?.[sectionKey]?.type || "hotel"
  }

  return (
    <Container>
      <div className="py-8">
        <ReturnButton />
        <WelcomeImage source={data.heroImage} />
        <CreationDate />
        <div className="max-w-[68vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mt-4 mb-6">
              <Title title="Puerto Juárez México. Aquí inicio Cancún." type="hotel" />
            </div>
            <div className="flex flex-col gap-5">
              {Array.isArray(data.introduction?.es)
                ? data.introduction.es.map((paragraph, index) => <Paragraph key={index} text={paragraph} />)
                : data.introduction?.es && <Paragraph text={data.introduction.es} />}
              <div className="space-y-12">
                {/* Contenido existente del template */}
                {sections?.photoGallery && <GalleryPicsCollage data={sections.photoGallery.data} />}
                {sections?.locationInfo && (
                  <WhereLocated data={sections.locationInfo.data} type={getSectionType("locationInfo")} />
                )}
                {sections?.howToBookTransport && (
                  <HowToBook data={sections.howToBookTransport.data} type={getSectionType("howToBookTransport")} />
                )}
                {sections?.howToGetThere && (
                  <HowToGet data={sections.howToGetThere.data} type={getSectionType("howToGetThere")} />
                )}
                {sections?.journeyVideo && (
                  <VideoPlace data={sections.journeyVideo.data} type={getSectionType("journeyVideo")} />
                )}
                {sections?.ferrySchedule && (
                  <ScheduleBlog data={sections.ferrySchedule.data} type={getSectionType("ferrySchedule")} />
                )}
                {sections?.whatToFind && (
                  <WhatWillYouFind data={sections.whatToFind.data} type={getSectionType("whatToFind")} />
                )}
                {sections?.routesFrom && (
                  <FromToBlog data={sections.routesFrom.data} type={getSectionType("routesFrom")} />
                )}
                {sections?.familyHotels && (
                  <FamilyHotelsBlog data={sections.familyHotels.data} type={getSectionType("familyHotels")} />
                )}
                {sections?.favoriteActivities && (
                  <FavoriteActivitiesBlog
                    data={sections.favoriteActivities.data}
                    type={getSectionType("favoriteActivities")}
                  />
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
