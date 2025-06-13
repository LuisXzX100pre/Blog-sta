import { Routes, Route } from "react-router-dom"
import Template1Layout from "./layaouts/Template1Layout"
import Template2Layout from "./layaouts/Template2Layout"
import Template3Layout from "./layaouts/Template3Layout"
import TemplateSelectionLayout from "./layaouts/TemplateSelectionLayout"
import ScrollToTop from "./components/general/ScrollToTop"

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<TemplateSelectionLayout />} />
        <Route path="/template1" element={<Template1Layout />} />
        <Route path="/template2" element={<Template2Layout />} />
        <Route path="/template3" element={<Template3Layout />} />
      </Routes>
    </>
  )
}

export default App
