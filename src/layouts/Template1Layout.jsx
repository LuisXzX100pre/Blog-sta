"use client"

import { Container } from "../components/general/container"
import ReturnButton from "../components/general/ReturnButton"
import WelcomeImage from "../components/general/WelcomeImage"
import CreationDate from "../components/general/CreationDate"
import Title from "../components/general/titles"
import Paragraph from "../components/general/paragraph"
import CategoryTags from "../components/general/categorytags"
import RelatedArticlesBlog from "../components/general/relatedarticlesblog"
import WhereLocated from "../components/template1/wherelocated"
import HowToGet from "../components/template1/howtoget"
import HowToBook from "../components/template1/howtobook"
import VideoPlace from "../components/template1/videoplace"
import FamilyHotelsBlog from "../components/template1/familyhotelsblog"
import FavoriteActivitiesBlog from "../components/template1/favoriteactivitiesblog"
import FromToBlog from "../components/template1/fromtoblog"
import GalleryPicsCollage from "../components/template1/gallerypicscollage"
import WhatWillYouFind from "../components/template1/whatwillyoufind"
import ScheduleBlog from "../components/template1/scheduleblog"
import { useLanguage } from "../context/languagecontext"

export default function Template1Layout({ blogData: propBlogData, lang }) {
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
  const type = data.type || "hotel"

  return (
    <Container>
      <div className="py-8">
        <ReturnButton />
        <WelcomeImage source={data.heroImage} lang={currentLang} />
        <CreationDate date={data.date} />
        <div className="max-w-[68vw] mx-auto px-4 sm:px:6 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mt-4 mb-6">
              <Title title={data.blogTitle || "Guía de Viaje"} type={type} />
            </div>
            <div className="flex flex-col gap-5">
              {Array.isArray(data.introduction) &&
                data.introduction.map((paragraph, index) => <Paragraph key={index} text={paragraph} />)}

              <div className="space-y-12">
                <GalleryPicsCollage data={sections?.photoGallery?.data} lang={currentLang} />
                <WhereLocated data={sections?.locationInfo?.data} type={type} lang={currentLang} />
                <HowToBook data={sections?.howToBookTransport?.data} type={type} lang={currentLang} />
                <HowToGet data={sections?.howToGetThere?.data} type={type} lang={currentLang} />
                <VideoPlace data={sections?.journeyVideo?.data} type={type} lang={currentLang} />
                <ScheduleBlog data={sections?.ferrySchedule?.data} type={type} lang={currentLang} />
                <WhatWillYouFind data={sections?.whatToFind?.data} type={type} lang={currentLang} />
                <FromToBlog data={sections?.routesFrom?.data} type={type} lang={currentLang} />
                <FamilyHotelsBlog data={sections?.familyHotels?.data} type={type} lang={currentLang} />
                <FavoriteActivitiesBlog data={sections?.favoriteActivities?.data} type={type} lang={currentLang} />
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