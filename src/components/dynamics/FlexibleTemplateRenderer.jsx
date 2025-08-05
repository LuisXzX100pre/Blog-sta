"use client"

import { Container } from "../../general/Container";
import ReturnButton from "../../general/ReturnButton";
import WelcomeImage from "../../general/WelcomeImage";
import CreationDate from "../../general/CreationDate";
import Title from "../../general/Titles";
import Paragraph from "../../general/Paragraph";
import CategoryTags from "../../general/CategoryTags";
import RelatedArticlesBlog from "../../general/RelatedArticlesBlog";

// Template 1 Components
import WhereLocated from "../../template1/WhereLocated";
import HowToGet from "../../template1/HowToGet";
import HowToBook from "../../template1/HowToBook";
import VideoPlace from "../../template1/VideoPlace";
import FamilyHotelsBlog from "../../template1/FamilyHotelsBlog";
import FavoriteActivitiesBlog from "../../template1/FavoriteActivitiesBlog";
import FromToBlog from "../../template1/FromToBlog";
import GalleryPicsCollage from "../../template1/GalleryPicsCollage";
import WhatWillYouFind from "../../template1/WhatWillYouFind";
import ScheduleBlog from "../../template1/ScheduleBlog";

// Template 2 Components
import AcapulcoGuideIntro from "../../template2/AcapulcoGuideIntro";
import FactBox from "../../template2/FactBox";
import MapView from "../../template2/MapView";
import PlacesToVisit from "../../template2/PlacesToVisit";
import RecommendationsBeforeVisit from "../../template2/RecommendationsBeforeVisit";
import RoutesRecommendations from "../../template2/RoutesRecommendations";

// Template 3 Components
import WeatherRecommendations from "../../template3/WeatherRecommendations";
import InfoByMonth from "../../template3/InfoByMonth";
import CurrentQuestions from "../../template3/CurrentQuestions";

import { useLanguage } from "../../context/LanguageContext";

export default function FlexibleTemplateRenderer({ blogData: propBlogData, lang }) {
  const { lang: contextLang } = useLanguage();
  const currentLang = lang || contextLang || "es";

  let data = null;
  let destinationKey = null;
  let targetTemplate = 1;

  if (propBlogData) {
    const firstKey = Object.keys(propBlogData)[0];
    data = propBlogData[firstKey];
    destinationKey = firstKey;
    targetTemplate = data?.template || 1;
  }

  console.log(`🎯 FlexibleTemplateRenderer: Renderizando ${destinationKey} con template ${targetTemplate}`);

  if (!data) {
    return (
      <Container>
        <div className="py-8 text-center">
          <p>No hay datos disponibles</p>
        </div>
      </Container>
    );
  }

  const sections = data?.sections || {};

  const getSectionComponentMapping = (targetTemplate) => {
    const mappings = {
      1: {
        photoGallery: GalleryPicsCollage,
        locationInfo: WhereLocated,
        howToBookTransport: HowToBook,
        howToGetThere: HowToGet,
        journeyVideo: VideoPlace,
        ferrySchedule: ScheduleBlog,
        whatToFind: WhatWillYouFind,
        routesFrom: FromToBlog,
        familyHotels: FamilyHotelsBlog,
        favoriteActivities: FavoriteActivitiesBlog,
        placesToVisit: WhatWillYouFind,
        touristMap: WhereLocated,
        beforeYouVisitRecommendations: HowToGet,
        generalClimateInfo: WhereLocated,
        monthlyInfo: WhatWillYouFind,
        frequentlyAskedQuestions: HowToGet,
      },
      2: {
        placesToVisit: PlacesToVisit,
        quickFact: FactBox,
        touristMap: MapView,
        beforeYouVisitRecommendations: RecommendationsBeforeVisit,
        routesFrom: RoutesRecommendations,
        whatToFind: PlacesToVisit,
        locationInfo: MapView,
        howToGetThere: RecommendationsBeforeVisit,
        familyHotels: PlacesToVisit,
        favoriteActivities: PlacesToVisit,
        generalClimateInfo: RecommendationsBeforeVisit,
        monthlyInfo: PlacesToVisit,
        frequentlyAskedQuestions: RecommendationsBeforeVisit,
      },
      3: {
        generalClimateInfo: WeatherRecommendations,
        monthlyInfo: InfoByMonth,
        frequentlyAskedQuestions: CurrentQuestions,
        whatToFind: InfoByMonth,
        locationInfo: WeatherRecommendations,
        howToGetThere: CurrentQuestions,
        familyHotels: InfoByMonth,
        favoriteActivities: InfoByMonth,
        placesToVisit: InfoByMonth,
        touristMap: WeatherRecommendations,
        beforeYouVisitRecommendations: CurrentQuestions,
      },
    };
    return mappings[targetTemplate] || {};
  };

  const getMainTitle = () => {
    if (data.acapulcoGuide?.data?.mainTitle) return data.acapulcoGuide.data.mainTitle;
    if (data.blogTitle) return data.blogTitle;
    if (sections?.generalClimateInfo?.data?.title) return sections.generalClimateInfo.data.title;
    return currentLang === "en" ? "Travel Guide" : "Guía de Viaje";
  };

  const getTitleType = () => {
    if (data.type === "climate" || targetTemplate === 3) return "climate";
    if (data.type === "tour" || targetTemplate === 2) return "tour";
    return "hotel";
  };

  const getSectionType = (sectionKey) => {
    const typeMapping = {
      1: "hotel",
      2: "tour",
      3: "climate",
    };
    return typeMapping[targetTemplate] || "hotel";
  };

  const renderAllSections = () => {
    const componentMapping = getSectionComponentMapping(targetTemplate);
    const renderedSections = [];

    if (targetTemplate === 2 && (data.acapulcoGuide?.data || data.blogTitle)) {
      renderedSections.push(
        <AcapulcoGuideIntro
          key="intro-guide"
          data={data.acapulcoGuide?.data || data}
          type={getSectionType("acapulcoGuide")}
          lang={currentLang}
        />,
      );
    }

    Object.entries(sections).forEach(([sectionKey, sectionData], index) => {
      const Component = componentMapping[sectionKey];

      if (Component && sectionData?.data) {
        console.log(`🎯 Renderizando sección: ${sectionKey} con componente:`, Component.name);

        if (Component === PlacesToVisit && targetTemplate === 2) {
          renderedSections.push(
            <Component
              key={`${sectionKey}-first`}
              data={sectionData.data}
              showFirstHalf={true}
              type={getSectionType(sectionKey)}
              lang={currentLang}
            />,
          );

          if (sections.quickFact?.data) {
            renderedSections.push(<FactBox key="fact-box" data={sections.quickFact.data} lang={currentLang} />);
          }

          renderedSections.push(
            <Component
              key={`${sectionKey}-second`}
              data={sectionData.data}
              showSecondHalf={true}
              type={getSectionType(sectionKey)}
              lang={currentLang}
            />,
          );
        } else {
          renderedSections.push(
            <Component key={sectionKey} data={sectionData.data} type={getSectionType(sectionKey)} lang={currentLang} />,
          );
        }
      } else {
        console.log(`⚠️ No se encontró componente para la sección: ${sectionKey}`);
      }
    });

    if (targetTemplate === 2 && sections.quickFact?.data && !renderedSections.some((s) => s.key === "fact-box")) {
      const factBoxIndex = Math.floor(renderedSections.length / 2);
      renderedSections.splice(
        factBoxIndex,
        0,
        <FactBox key="fact-box-standalone" data={sections.quickFact.data} lang={currentLang} />,
      );
    }

    if (targetTemplate === 3 && sections?.finalConclusion) {
      renderedSections.push(
        <section key="final-conclusion">
          <div className="mt-11">
            <Title title={currentLang === "en" ? "Conclusion" : "Conclusión"} type="climate" />
            <hr className="my-[15.5px]" />
            <div className="flex flex-col gap-5">
              {sections.finalConclusion.data.conclusionParagraphs?.map((paragraph, index) => (
                <Paragraph key={index} text={paragraph} />
              ))}
            </div>
            {sections.finalConclusion.data.finalCallToAction && (
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <Paragraph text={sections.finalConclusion.data.finalCallToAction} />
              </div>
            )}
          </div>
        </section>,
      );
    }

    return renderedSections;
  };

  return (
    <Container>
      <div className="py-8">
        <ReturnButton />
        <WelcomeImage source={data.heroImage} lang={currentLang} />
        <CreationDate />
        <div className="max-w-[68vw] mx-auto px-4 sm:px:6 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mt-4 mb-6">
              <Title title={getMainTitle()} type={getTitleType()} />
            </div>
            <div className="flex flex-col gap-5">
              {Array.isArray(data.introduction)
                ? data.introduction.map((paragraph, index) => <Paragraph key={index} text={paragraph} />)
                : data.introduction && <Paragraph text={data.introduction} />}

              <div className="space-y-12">{renderAllSections()}</div>

              <CategoryTags lang={currentLang} />
              <RelatedArticlesBlog lang={currentLang} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}