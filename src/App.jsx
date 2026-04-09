import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Constructora from './pages/Constructora'
import AireAcondicionado from './pages/AireAcondicionado'
import Privacidad from './pages/Legal/Privacidad'
import Cookies from './pages/Legal/Cookies'
import AvisoLegal from './pages/Legal/AvisoLegal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/constructora" element={<Constructora />} />
        <Route path="/aire-acondicionado" element={<AireAcondicionado />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
      </Routes>
    </BrowserRouter>
  )
}
