import StartBlog from "../general/StartBlog";
import CategoryTags from "../general/CategoryTags";
import RelatedArticlesBlog from "../general/RelatedArticlesBlog";
import TemplateSelector from "../general/TemplateSelector";
import blogData from "../../data/blog-data.json";

// Template 1 componentes
import WhereLocated from "../template1/WhereLocated";
import HowToGet from "../template1/HowToGet";
import HowToBook from "../template1/HowToBook";
import VideoPlace from "../template1/VideoPlace";
import FamilyHotelsBlog from "../template1/FamilyHotelsBlog";
import FavoriteActivitiesBlog from "../template1/FavoriteActivitiesBlog";
import FromToBlog from "../template1/FromToBlog";
import GalleryPicsCollage from "../template1/GalleryPicsCollage";
import WhatWillYouFind from "../template1/WhatWillYouFind";
import ScheduleBlog from "../template1/ScheduleBlog";

// Template 2 componentes
import FactBox from "../template2/FactBox";
import MapView from "../template2/MapView";
import PlacesToVisit from "../template2/PlacesToVisit";
import RecommendationsBeforeVisit from "../template2/RecommendationsBeforeVisit";
import RoutesRecommendations from "../template2/RoutesRecommendations";

// Template 3 componentes
import WeatherRecommendations from "../template3/WeatherRecommendations";
import InfoByMonth from "../template3/InfoByMonth";
import CurrentQuestions from "../template3/CurrentQuestions";

export default function HomeView() {
  const sections = blogData?.sections;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Selector de Templates */}
      <TemplateSelector />

      <StartBlog>
        <div className="space-y-16">
        //template 1 completo
          <div className="space-y-12">
            {sections?.locationInfo && <WhereLocated data={sections.locationInfo.data} />}
            {sections?.howToGetThere && <HowToGet data={sections.howToGetThere.data} />}
            {sections?.howToBookTransport && <HowToBook data={sections.howToBookTransport.data} />}
            {sections?.journeyVideo && <VideoPlace data={sections.journeyVideo.data} />}
            {sections?.familyHotels && <FamilyHotelsBlog data={sections.familyHotels.data} />}
            {sections?.favoriteActivities && <FavoriteActivitiesBlog data={sections.favoriteActivities.data} />}
            <FromToBlog />
            {sections?.photoGallery && <GalleryPicsCollage data={sections.photoGallery.data} />}
            {sections?.whatToFind && <WhatWillYouFind data={sections.whatToFind.data} />}
            {sections?.ferrySchedule && <ScheduleBlog data={sections.ferrySchedule.data} />}
          </div>

        //template 2 completo
          <div className="space-y-12">
            {sections?.quickFact && <FactBox data={sections.quickFact.data} />}
            {sections?.placesToVisit && <PlacesToVisit data={sections.placesToVisit.data} />}
            <MapView />
            <RecommendationsBeforeVisit />
            <RoutesRecommendations />
          </div>

         //template 3 completo
          <div className="space-y-12">
            {sections?.generalClimateInfo && <WeatherRecommendations data={sections.generalClimateInfo.data} />}
            {sections?.monthlyInfo && <InfoByMonth data={sections.monthlyInfo.data} />}
            {sections?.frequentlyAskedQuestions && <CurrentQuestions data={sections.frequentlyAskedQuestions.data} />}
          </div>
        </div>
      </StartBlog>

      <CategoryTags />
      <RelatedArticlesBlog />
    </div>
  );
}