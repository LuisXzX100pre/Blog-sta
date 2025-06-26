"use client"

import { Container } from "../components/general/Container"
import SearchHomeBlog from "../components/blog-home/SearchHomeBlog"
import FilterHomeBlog from "../components/blog-home/FilterHomeBlog"
import NewsHomeBlog from "../components/blog-home/NewsHomeBlog"
import ListingBlog from "../components/blog-home/ListingBlog"
import { useLanguage } from "../context/LanguageContext"

export default function BlogHomeLayout({ lang }) {
  const { lang: contextLang } = useLanguage()
  const currentLang = lang || contextLang || "es"

  return (
    <Container>
      <div className="py-8">
        <div className="flex flex-col xl:flex-row md:justify-between">
          <div className="w-full xl:w-[28%] 2xl:w-[24%] mt-[47px] mb-11 max-md:mb-2">
            <SearchHomeBlog lang={currentLang} />
            <FilterHomeBlog lang={currentLang} />
            <NewsHomeBlog lang={currentLang} />
          </div>

          <div className="flex flex-col w-full xl:w-[80%] max-xl:mx-0 ml-16 h-full mb-4">
            <ListingBlog lang={currentLang} />
          </div>
        </div>
      </div>
    </Container>
  )
}
