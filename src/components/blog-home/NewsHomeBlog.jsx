"use client"

export default function NewsHomeBlog({ lang = "es" }) {
  const newsItems = [
    {
      id: 1,
      title: lang === "en" ? "New destinations available" : "Nuevos destinos disponibles",
      date: "2024-01-15",
      excerpt: lang === "en" ? "Discover amazing new places..." : "Descubre increíbles lugares nuevos...",
    },
    {
      id: 2,
      title: lang === "en" ? "Travel tips for 2024" : "Consejos de viaje para 2024",
      date: "2024-01-10",
      excerpt: lang === "en" ? "Essential tips for travelers..." : "Consejos esenciales para viajeros...",
    },
    {
      id: 3,
      title: lang === "en" ? "Best hotels of the season" : "Mejores hoteles de la temporada",
      date: "2024-01-05",
      excerpt: lang === "en" ? "Top rated accommodations..." : "Alojamientos mejor valorados...",
    },
  ]

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 className="text-fs-16 m-s-b mb-4 text-gray-700">{lang === "en" ? "Latest News" : "Últimas Noticias"}</h3>
      <div className="space-y-4">
        {newsItems.map((item) => (
          <div key={item.id} className="border-b border-gray-100 pb-3 last:border-b-0">
            <h4 className="text-fs-14 m-s-b text-gray-800 mb-1">{item.title}</h4>
            <p className="text-fs-12 text-gray-500 mb-2">{item.date}</p>
            <p className="text-fs-12 text-gray-600">{item.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
