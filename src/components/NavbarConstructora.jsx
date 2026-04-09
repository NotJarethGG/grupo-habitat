import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectHabitatLogo from '../assets/ProjectHabitat.jpg'

const links = [
  { label: 'Servicios', href: '#servicios-constructora' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Por Qué Elegirnos', href: '#por-que-elegirnos' },
]

const sectionIds = ['servicios-constructora', 'portafolio', 'por-que-elegirnos', 'contacto-constructora']

export default function NavbarConstructora() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const isActive = (href) => activeSection === href.replace('#', '')

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-14' : 'h-20'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src={ProjectHabitatLogo}
              alt="Grupo Hábitat Constructora"
              className={`rounded-full object-cover transition-all duration-500 ${
                scrolled ? 'w-9 h-9' : 'w-12 h-12'
              }`}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="relative group flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors px-3 py-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Inicio
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </Link>

            <div className="w-px h-4 bg-gray-200 mx-1" />

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative group text-sm font-medium transition-colors px-3 py-2 ${
                  isActive(link.href)
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-0.5 bg-verde-700 transition-transform duration-300 origin-left rounded-full ${
                    isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            ))}

            <div className="w-px h-4 bg-gray-200 mx-1" />

            <a
              href="#contacto-constructora"
              className="bg-gray-900 hover:bg-gray-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors ml-1"
              onClick={() => setMenuOpen(false)}
            >
              Cotizar proyecto
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-900 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Inicio
          </Link>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto-constructora"
            onClick={() => setMenuOpen(false)}
            className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mt-1"
          >
            Cotizar proyecto
          </a>
        </div>
      )}
    </nav>
  )
}
