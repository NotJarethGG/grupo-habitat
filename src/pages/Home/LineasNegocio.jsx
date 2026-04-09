import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const stats = [
  { raw: 200, suffix: '+', label: 'Proyectos completados' },
  { raw: 18, suffix: '', label: 'Años de experiencia' },
  { raw: 80, suffix: '+', label: 'Profesionales' },
  { raw: 95, suffix: '%', label: 'Clientes satisfechos' },
]

function AnimatedCounter({ raw, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const startTime = performance.now()
    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * raw))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(raw)
    }
    requestAnimationFrame(tick)
  }, [inView, raw])

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
      whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.10)', transition: { duration: 0.25 } }}
    >
      <p className="text-6xl font-extrabold text-gray-900 tabular-nums leading-none">
        {count}
        <span className="text-4xl">{suffix}</span>
      </p>
      <p className="text-sm text-gray-500 mt-3 font-medium">{label}</p>
    </motion.div>
  )
}

export default function LineasNegocio() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Lo que hacemos
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-4xl font-extrabold text-gray-900">
            Nuestras Líneas de Negocio
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-3 w-16 h-1 bg-gray-900 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Constructora */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl shadow-xl"
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          >
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
              alt="Constructora Grupo Hábitat"
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">Línea 1</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-3">Constructora</h3>
              <p className="text-white/75 text-sm leading-relaxed mb-6 max-w-sm">
                Construcción residencial, comercial y remodelaciones. Proyectos llave en mano con los más altos estándares de calidad y cumplimiento de plazos.
              </p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {['Residencial', 'Comercial', 'Remodelaciones', 'Industrial'].map((tag) => (
                  <li key={tag} className="bg-white/15 text-white/80 text-xs px-3 py-1 rounded-full border border-white/10">
                    {tag}
                  </li>
                ))}
              </ul>
              <Link
                to="/constructora"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                Ver Constructora
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Aire Acondicionado */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl shadow-xl"
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          >
            <img
              src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
              alt="Aire Acondicionado Grupo Hábitat"
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">Línea 2</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-3">Aire Acondicionado</h3>
              <p className="text-white/75 text-sm leading-relaxed mb-6 max-w-sm">
                Instalación, mantenimiento y reparación de sistemas de climatización residencial, comercial e industrial con las marcas líderes del mercado.
              </p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {['Instalación', 'Mantenimiento', 'Reparación', 'Industrial'].map((tag) => (
                  <li key={tag} className="bg-white/15 text-white/80 text-xs px-3 py-1 rounded-full border border-white/10">
                    {tag}
                  </li>
                ))}
              </ul>
              <Link
                to="/aire-acondicionado"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                Ver Aire Acondicionado
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats con contadores animados */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
