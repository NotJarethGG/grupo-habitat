import { motion } from 'framer-motion'
import AireHabitatLogo from '../../assets/AireHabitat.jpg'

const ease = [0.25, 0.1, 0.25, 1]

export default function HeroAire() {
  return (
    <section className="relative min-h-screen sm:min-h-[70vh] flex items-end overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=80')" }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-gray-900/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <img
              src={AireHabitatLogo}
              alt="Grupo Hábitat Aire Acondicionado"
              className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-white/20"
            />
            <span className="text-white/70 font-semibold text-sm uppercase tracking-wider">Grupo Hábitat · Aire Acondicionado</span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
          >
            Confort que
            <span className="block font-light italic opacity-90">marca la diferencia</span>
          </motion.h1>

          <motion.p
            className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
          >
            Instalación, mantenimiento y reparación de sistemas de climatización residencial, comercial e industrial. Equipos de primera línea y técnicos certificados.
          </motion.p>

          <motion.a
            href="#contacto-aire"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-base shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease }}
            whileHover={{ scale: 1.02, backgroundColor: '#f3f4f6', y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar servicio
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
