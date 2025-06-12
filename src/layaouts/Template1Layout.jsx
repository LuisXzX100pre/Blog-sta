"use client"

import { Container } from "../components/general/Container"
import blogData from "../data/blog-data.json"

// solo componentes del template 3
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
      <div className="space-y-12">
        {sections.locationInfo && (
          <section>
            <WhereLocated data={sections.locationInfo.data} />
          </section>
        )}

        {sections.howToGetThere && (
          <section>
            <HowToGet data={sections.howToGetThere.data} />
          </section>
        )}

        {sections.howToBookTransport && (
          <section>
            <HowToBook data={sections.howToBookTransport.data} />
          </section>
        )}

        {sections.journeyVideo && (
          <section>
            <VideoPlace data={sections.journeyVideo.data} />
          </section>
        )}

        {sections.familyHotels && (
          <section>
            <FamilyHotelsBlog data={sections.familyHotels.data} />
          </section>
        )}

        {sections.favoriteActivities && (
          <section>
            <FavoriteActivitiesBlog data={sections.favoriteActivities.data} />
          </section>
        )}

        <section>
          <FromToBlog />
        </section>

        {sections.photoGallery && (
          <section>
            <GalleryPicsCollage data={sections.photoGallery.data} />
          </section>
        )}

        {sections.whatToFind && (
          <section>
            <WhatWillYouFind data={sections.whatToFind.data} />
          </section>
        )}

        {sections.ferrySchedule && (
          <section>
            <ScheduleBlog data={sections.ferrySchedule.data} />
          </section>
        )}
      </div>
    </Container>
  )
}
