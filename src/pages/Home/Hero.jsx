import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

const stats = [
  { value: '18+', label: 'Años de experiencia' },
  { value: '200+', label: 'Proyectos completados' },
  { value: '7', label: 'Provincias con cobertura' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-white">

      {/* Background image — full on mobile, right half on desktop */}
      <motion.div
        className="absolute inset-y-0 right-0 left-0 lg:left-[54%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80')",
        }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease }}
      />

      {/* Dark overlay on photo portion only */}
      <div className="absolute inset-y-0 right-0 left-0 lg:left-[54%] bg-gray-900/45" />

      {/* Mobile: white overlay so text is readable */}
      <div className="absolute inset-0 bg-white/90 lg:hidden" />

      {/* Main content — explicitly constrained to left 50% on desktop */}
      <div className="relative z-10 flex-1 flex items-center w-full pt-6 pb-8">
        <div className="w-full lg:w-[54%] px-6 sm:px-12 lg:px-16 xl:px-20">

          {/* Badge */}
          <motion.div
            className="flex items-center gap-2 mb-8"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
          >
            <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
            <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">
              Costa Rica · Desde 2005
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-extrabold text-gray-900 leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
          >
            <span className="block text-5xl sm:text-6xl lg:text-6xl xl:text-7xl">Construimos</span>
            <span className="block text-5xl sm:text-6xl lg:text-6xl xl:text-7xl">espacios.</span>
            <span className="block text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-light italic text-gray-400 mt-1">
              Creamos confort.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base text-gray-500 leading-relaxed mb-10 max-w-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
          >
            Más de 18 años transformando ideas en estructuras sólidas y ambientes climatizados de primera línea en todo el país.
          </motion.p>

          {/* Division cards */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease }}
          >
            {/* Constructora */}
            <Link
              to="/constructora"
              className="group flex items-center gap-4 bg-gray-900 hover:bg-gray-800 text-white px-5 py-4 rounded-2xl font-medium transition-colors w-full"
            >
              <div className="w-9 h-9 bg-white/10 group-hover:bg-white/15 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm">Constructora</p>
                <p className="text-xs text-white/50 mt-0.5 truncate">Residencial · Comercial · Industrial</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/40 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Aire Acondicionado */}
            <Link
              to="/aire-acondicionado"
              className="group flex items-center gap-4 bg-white border border-gray-200 hover:border-gray-400 text-gray-900 px-5 py-4 rounded-2xl font-medium transition-colors w-full"
            >
              <div className="w-9 h-9 bg-gray-100 group-hover:bg-gray-200 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-gray-900">Aire Acondicionado</p>
                <p className="text-xs text-gray-500 mt-0.5 truncate">Instalación · Mantenimiento · Reparación</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="relative z-10 w-full border-t border-gray-200 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease }}
      >
        <div className="w-full lg:w-[54%] px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="flex items-center divide-x divide-gray-200 py-5">
            {stats.map((s, i) => (
              <div key={s.label} className={`flex items-baseline gap-2 ${i === 0 ? 'pr-6' : 'px-6'}`}>
                <span className="text-2xl font-black text-gray-900">{s.value}</span>
                <span className="text-xs text-gray-500 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
