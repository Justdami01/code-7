import React from "react"
import Index from "./components/Index"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutUs from "./components/AboutUs"

function App() {
  return (
    <BrowserRouter>
    <div>
     <Routes>
      <Route path="/" exact element={<Index />}  />
      <Route path="/Home"  element={<Index />}  />
      <Route path="/about-us"  element={<AboutUs />} />
     </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App