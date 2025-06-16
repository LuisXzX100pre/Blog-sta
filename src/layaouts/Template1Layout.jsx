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
        <ReturnButton />
        <WelcomeImage source={blogData.heroImage} />
        <CreationDate />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mt-4 mb-6">
              <Title title={blogData.blogTitle.es} />
            </div>
            <div className="flex flex-col gap-5">
              {Array.isArray(blogData.introduction.es) ? (
                blogData.introduction.es.map((paragraph, index) => <Paragraph key={index} text={paragraph} />)
              ) : (
                <Paragraph text={blogData.introduction.es} />
              )}
              <div className="space-y-12">
                {/* Contenido existente del template */}
                {sections?.photoGallery && <GalleryPicsCollage data={sections.photoGallery.data} />}
                {sections?.locationInfo && <WhereLocated data={sections.locationInfo.data} />}
                {sections?.howToBookTransport && <HowToBook data={sections.howToBookTransport.data} />}
                {sections?.howToGetThere && <HowToGet data={sections.howToGetThere.data} />}
                {sections?.journeyVideo && <VideoPlace data={sections.journeyVideo.data} />}
                {sections?.ferrySchedule && <ScheduleBlog data={sections.ferrySchedule.data} />}
                {sections?.whatToFind && <WhatWillYouFind data={sections.whatToFind.data} />}
                {sections?.routesFrom && <FromToBlog data={sections.routesFrom.data} />}
                {sections?.familyHotels && <FamilyHotelsBlog data={sections.familyHotels.data} />}
                {sections?.favoriteActivities && <FavoriteActivitiesBlog data={sections.favoriteActivities.data} />}
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
