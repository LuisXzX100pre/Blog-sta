"use client"

import { Container } from "../components/general/Container"
import blogData from "../data/blog-data.json"
import ReturnButton from "../components/general/ReturnButton"
import WelcomeImage from "../components/general/WelcomeImage"
import CreationDate from "../components/general/CreationDate"
import Title from "../components/general/Titles"
import Paragraph from "../components/general/Paragraph"

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

export default function Template1Layout() {
  const sections = blogData?.sections

  if (!sections) {
    return (
      <Container>
        <div>Error: No se pudieron cargar los datos del Template 1</div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="py-8">
        {/* Navegación entre templates */}
        {/* <TemplateNavigation currentTemplate={1} /> */}

        {/* Header del blog */}
        <ReturnButton />
        <WelcomeImage source={blogData.heroImage} />
        <CreationDate />

        <div className="flex flex-col justify-center">
          <div className="mt-4 mb-6">
            <Title title={blogData.blogTitle.es} />
          </div>
          <div className="flex flex-col gap-5">
            <Paragraph text={blogData.introduction.es} />

            {/* SOLO COMPONENTES DEL TEMPLATE 1 */}
            <div className="space-y-12">
              {sections?.locationInfo && (
                <section>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">📍 Componente: WhereLocated</h3>
                  <WhereLocated data={sections.locationInfo.data} />
                </section>
              )}

              {sections?.howToGetThere && (
                <section>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">🚗 Componente: HowToGet</h3>
                  <HowToGet data={sections.howToGetThere.data} />
                </section>
              )}

              {sections?.howToBookTransport && (
                <section>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">📱 Componente: HowToBook</h3>
                  <HowToBook data={sections.howToBookTransport.data} />
                </section>
              )}

              {sections?.journeyVideo && (
                <section>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">🎥 Componente: VideoPlace</h3>
                  <VideoPlace data={sections.journeyVideo.data} />
                </section>
              )}

              {sections?.familyHotels && (
                <section>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">🏨 Componente: FamilyHotelsBlog</h3>
                  <FamilyHotelsBlog data={sections.familyHotels.data} />
                </section>
              )}

              {sections?.favoriteActivities && (
                <section>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">🎯 Componente: FavoriteActivitiesBlog</h3>
                  <FavoriteActivitiesBlog data={sections.favoriteActivities.data} />
                </section>
              )}

              <section>
                <h3 className="text-sm font-medium text-gray-500 mb-2">🗺️ Componente: FromToBlog</h3>
                <FromToBlog />
              </section>

              {sections?.photoGallery && (
                <section>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">📸 Componente: GalleryPicsCollage</h3>
                  <GalleryPicsCollage data={sections.photoGallery.data} />
                </section>
              )}

              {sections?.whatToFind && (
                <section>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">🔍 Componente: WhatWillYouFind</h3>
                  <WhatWillYouFind data={sections.whatToFind.data} />
                </section>
              )}

              {sections?.ferrySchedule && (
                <section>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">⏰ Componente: ScheduleBlog</h3>
                  <ScheduleBlog data={sections.ferrySchedule.data} />
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
