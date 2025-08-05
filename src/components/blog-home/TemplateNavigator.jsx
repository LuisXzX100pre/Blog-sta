"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function TemplateNavigator({ currentTemplate, destinationSlug, lang = "es" }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const templates = [
    {
      id: 1,
      name: lang === "en" ? "Hotel Guide" : "Guía de Hoteles",
      icon: "🏨",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: lang === "en" ? "Tour Guide" : "Guía de Tours",
      icon: "🗺️",
      color: "bg-green-500",
    },
    {
      id: 3,
      name: lang === "en" ? "Climate Guide" : "Guía del Clima",
      icon: "🌤️",
      color: "bg-orange-500",
    },
  ];

  const handleTemplateChange = (templateId) => {
    const baseUrl = `/${lang}/${destinationSlug || pathname.split("/").pop()}`;
    if (templateId === 1) {
      router.push(baseUrl);
    } else {
      router.push(`${baseUrl}?template=${templateId}`);
    }
    console.log(`🔄 Navegando a template ${templateId}:`, baseUrl);
  };

  return (
    <div className="bg-white border-b border-gray-200 py-4 mb-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-fs-14 text-gray-600 m-m">{lang === "en" ? "View as:" : "Ver como:"}</span>
          </div>

          <div className="flex items-center gap-2">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleTemplateChange(template.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  template.id === currentTemplate
                    ? `${template.color} text-white shadow-md`
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span className="text-lg">{template.icon}</span>
                <span className="text-fs-12 m-s-b hidden sm:inline">{template.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}