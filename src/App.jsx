import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Layout from "./components/Layout"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Layout>
  )
}

export default App
