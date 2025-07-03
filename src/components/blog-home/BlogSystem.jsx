"use client"

import { BrowserRouter as Router } from "react-router-dom"
import { LanguageProvider } from "../../context/LanguageContext"
import BlogRouter from "./BlogRouter"

export default function BlogSystem() {
  return (
    <LanguageProvider>
      <Router>
        <BlogRouter />
      </Router>
    </LanguageProvider>
  )
}
