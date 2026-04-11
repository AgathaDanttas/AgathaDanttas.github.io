import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from "../src/pages/Home"
import SimUpa from "../src/pages/SimUpa"
import NotFound from "../src/pages/NotFound"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/sim-upa" element={<SimUpa />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
