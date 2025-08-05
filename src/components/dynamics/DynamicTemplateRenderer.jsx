"use client"

import { Container } from "../../general/Container";
import ReturnButton from "../../general/ReturnButton";
import FlexibleTemplateRenderer from "./FlexibleTemplateRenderer";
import { useBlogData } from "../../hooks/useBlogData";
import LoadingSpinner from "../../general/LoadingSpinner";

export default function DynamicTemplateRenderer({ sectionName, lang = "es" }) {
  const { blogData, loading, error } = useBlogData(lang);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !blogData) {
    return (
      <Container>
        <div className="py-8">
          <ReturnButton />
          <div className="text-center">
            <h1 className="text-fs-24 m-s-b text-gray-800 mb-4">
              {lang === "en" ? "Content not found" : "Contenido no encontrado"}
            </h1>
          </div>
        </div>
      </Container>
    );
  }

  const sectionToDestinationMap = {
    "puerto-juarez-mexico": "puerto-juarez-mexico",
    "acapulco-mexico": "acapulco-mexico",
    "cuando-es-la-mejor-epoca-para-viajar-a-cancun": "cuando-es-la-mejor-epoca-para-viajar-a-cancun",
  };

  const destinationKey = sectionToDestinationMap[sectionName] || sectionName;
  const mainData = blogData[destinationKey];

  if (!mainData) {
    return (
      <Container>
        <div className="py-8">
          <ReturnButton />
          <div className="text-center">
            <h1 className="text-fs-24 m-s-b text-gray-800 mb-4">
              {lang === "en" ? "Data not found" : "Datos no encontrados"}
            </h1>
          </div>
        </div>
      </Container>
    );
  }

  const formattedBlogData = { [destinationKey]: mainData };

  console.log(`🎯 Renderizando ${destinationKey} con template ${mainData.template}`);

  return <FlexibleTemplateRenderer blogData={formattedBlogData} lang={lang} />;
}