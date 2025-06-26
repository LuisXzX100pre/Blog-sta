"use client"

import { Container } from "../components/general/Container"
import ReturnButton from "../components/general/ReturnButton"
import WelcomeImage from "../components/general/WelcomeImage"
import CreationDate from "../components/general/CreationDate"
import Title from "../components/general/Titles"
import Paragraph from "../components/general/Paragraph"
import CategoryTags from "../components/general/CategoryTags"
import RelatedArticlesBlog from "../components/general/RelatedArticlesBlog"
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
import "../styles/clickable-title.css"
import { useLanguage } from "../context/LanguageContext"

export default function Template1Layout({ blogData: propBlogData, lang }) {
  const { lang: contextLang } = useLanguage()
  const currentLang = lang || contextLang || "es"
  const data = propBlogData // Solo usar los datos recibidos como props
  const sections = data?.sections

  if (!data) {
    return null
  }

  const getSectionType = (sectionKey) => {
    return sections?.[sectionKey]?.type || "hotel"
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
                    ? "Puerto Juárez Mexico. Where Cancún Begins."
                    : "Puerto Juárez México. Aquí inicio Cancún."
                }
                type="hotel"
              />
            </div>
            <div className="flex flex-col gap-5">
              {Array.isArray(data.introduction)
                ? data.introduction.map((paragraph, index) => <Paragraph key={index} text={paragraph} />)
                : data.introduction && <Paragraph text={data.introduction} />}
              <div className="space-y-12">
                {sections?.photoGallery && <GalleryPicsCollage data={sections.photoGallery.data} lang={currentLang} />}
                {sections?.locationInfo && (
                  <WhereLocated
                    data={sections.locationInfo.data}
                    type={getSectionType("locationInfo")}
                    lang={currentLang}
                  />
                )}
                {sections?.howToBookTransport && (
                  <HowToBook
                    data={sections.howToBookTransport.data}
                    type={getSectionType("howToBookTransport")}
                    lang={currentLang}
                  />
                )}
                {sections?.howToGetThere && (
                  <HowToGet
                    data={sections.howToGetThere.data}
                    type={getSectionType("howToGetThere")}
                    lang={currentLang}
                  />
                )}
                {sections?.journeyVideo && (
                  <VideoPlace
                    data={sections.journeyVideo.data}
                    type={getSectionType("journeyVideo")}
                    lang={currentLang}
                  />
                )}
                {sections?.ferrySchedule && (
                  <ScheduleBlog
                    data={sections.ferrySchedule.data}
                    type={getSectionType("ferrySchedule")}
                    lang={currentLang}
                  />
                )}
                {sections?.whatToFind && (
                  <WhatWillYouFind
                    data={sections.whatToFind.data}
                    type={getSectionType("whatToFind")}
                    lang={currentLang}
                  />
                )}
                {sections?.routesFrom && (
                  <FromToBlog data={sections.routesFrom.data} type={getSectionType("routesFrom")} lang={currentLang} />
                )}
                {sections?.familyHotels && (
                  <FamilyHotelsBlog
                    data={sections.familyHotels.data}
                    type={getSectionType("familyHotels")}
                    lang={currentLang}
                  />
                )}
                {sections?.favoriteActivities && (
                  <FavoriteActivitiesBlog
                    data={sections.favoriteActivities.data}
                    type={getSectionType("favoriteActivities")}
                    lang={currentLang}
                  />
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
