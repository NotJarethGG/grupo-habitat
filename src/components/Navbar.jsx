import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
            <div
              className={`bg-gray-900 rounded-sm flex items-center justify-center transition-all duration-500 ${
                scrolled ? 'w-7 h-7' : 'w-9 h-9'
              }`}
            >
              <span className="text-white font-black text-sm leading-none">GH</span>
            </div>
            <span
              className={`text-gray-900 font-bold tracking-tight hidden sm:block transition-all duration-500 ${
                scrolled ? 'text-base' : 'text-xl'
              }`}
            >
              Grupo Hábitat
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {!isHome && (
              <Link
                to="/"
                className="relative group text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Inicio
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            )}
            <Link
              to="/constructora"
              className={`relative group text-sm font-medium transition-colors ${
                pathname === '/constructora'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Constructora
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 transition-transform duration-300 origin-left rounded-full ${
                  pathname === '/constructora'
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>
            <Link
              to="/aire-acondicionado"
              className={`relative group text-sm font-medium transition-colors ${
                pathname === '/aire-acondicionado'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Aire Acondicionado
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 transition-transform duration-300 origin-left rounded-full ${
                  pathname === '/aire-acondicionado'
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>
            <a
              href={isHome ? '#contacto' : '/#contacto'}
              className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contáctenos
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-900 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {!isHome && (
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Inicio
            </Link>
          )}
          <Link
            to="/constructora"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Constructora
          </Link>
          <Link
            to="/aire-acondicionado"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Aire Acondicionado
          </Link>
          <a
            href={isHome ? '#contacto' : '/#contacto'}
            onClick={() => setMenuOpen(false)}
            className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold text-center"
          >
            Contáctenos
          </a>
        </div>
      )}
    </nav>
  )
}
