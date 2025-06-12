"use client"

import blogData from "../../data/blog-data.json"

import Title from "./Titles"
import Paragraph from "./Paragraph"
import CreationDate from "./CreationDate"
import ReturnButton from "./ReturnButton"
import WelcomeImage from "./WelcomeImage"

export default function StartBlog({ children }) {
  return (
    <div>
      {/* BTN RETURN */}
      <ReturnButton />

      <WelcomeImage source={blogData.heroImage} />

      <CreationDate />

      <div className="px-[98.5px] flex flex-col justify-center max-lg:p-0">
        {/* TITLE BLOG */}
        <div className="mt-4 mb-6">
          <Title title={blogData.blogTitle.es} />
        </div>
        <div className="flex flex-col gap-5">
          <Paragraph text={blogData.introduction.es} />
          {children}
        </div>
      </div>
    </div>
  )
}
