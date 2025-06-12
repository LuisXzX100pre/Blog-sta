import { Routes, Route } from "react-router-dom"
import HomeView from "./components/views/HomeView"
import Template1View from "./components/views/Template1View"
import Template2View from "./components/views/Template2View"
import Template3View from "./components/views/Template3View"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/template1" element={<Template1View />} />
      <Route path="/template2" element={<Template2View />} />
      <Route path="/template3" element={<Template3View />} />
    </Routes>
  )
}

export default App
