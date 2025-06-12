"use client"

import TemplateNavigation from "../general/TemplateNavigation"
import blogData from "../../data/blog-data.json"
import ReturnButton from "../general/ReturnButton"
import WelcomeImage from "../general/WelcomeImage"
import CreationDate from "../general/CreationDate"
import Title from "../general/Titles"
import Paragraph from "../general/Paragraph"

// Template 1 importaciones
import WhereLocated from "../template1/WhereLocated"
import HowToGet from "../template1/HowToGet"
import HowToBook from "../template1/HowToBook"
import VideoPlace from "../template1/VideoPlace"
import FamilyHotelsBlog from "../template1/FamilyHotelsBlog"
import FavoriteActivitiesBlog from "../template1/FavoriteActivitiesBlog"
import FromToBlog from "../template1/FromToBlog"
import GalleryPicsCollage from "../template1/GalleryPicsCollage"
import WhatWillYouFind from "../template1/WhatWillYouFind"
import ScheduleBlog from "../template1/ScheduleBlog"

export default function Template1View() {
  const sections = blogData?.sections

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navegación entre templates */}
      <TemplateNavigation currentTemplate={1} />

      {/* Header del blog */}
      <ReturnButton />
      <WelcomeImage source={blogData.heroImage} />
      <CreationDate />

      <div className="px-[98.5px] flex flex-col justify-center max-lg:p-0">
        <div className="mt-4 mb-6">
          <Title title={blogData.blogTitle.es} />
        </div>
        <div className="flex flex-col gap-5">
          <Paragraph text={blogData.introduction.es} />

          {/* SOLO COMPONENTES DEL TEMPLATE 1 */}
          <div className="space-y-12">
            {sections?.locationInfo && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">📍 Componente: WhereLocated</h3>
                <WhereLocated data={sections.locationInfo.data} />
              </div>
            )}

            {sections?.howToGetThere && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">🚗 Componente: HowToGet</h3>
                <HowToGet data={sections.howToGetThere.data} />
              </div>
            )}

            {sections?.howToBookTransport && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">📱 Componente: HowToBook</h3>
                <HowToBook data={sections.howToBookTransport.data} />
              </div>
            )}

            {sections?.journeyVideo && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">🎥 Componente: VideoPlace</h3>
                <VideoPlace data={sections.journeyVideo.data} />
              </div>
            )}

            {sections?.familyHotels && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">🏨 Componente: FamilyHotelsBlog</h3>
                <FamilyHotelsBlog data={sections.familyHotels.data} />
              </div>
            )}

            {sections?.favoriteActivities && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">🎯 Componente: FavoriteActivitiesBlog</h3>
                <FavoriteActivitiesBlog data={sections.favoriteActivities.data} />
              </div>
            )}

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">🗺️ Componente: FromToBlog</h3>
              <FromToBlog />
            </div>

            {sections?.photoGallery && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">📸 Componente: GalleryPicsCollage</h3>
                <GalleryPicsCollage data={sections.photoGallery.data} />
              </div>
            )}

            {sections?.whatToFind && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">🔍 Componente: WhatWillYouFind</h3>
                <WhatWillYouFind data={sections.whatToFind.data} />
              </div>
            )}

            {sections?.ferrySchedule && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">⏰ Componente: ScheduleBlog</h3>
                <ScheduleBlog data={sections.ferrySchedule.data} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}