import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const proyectos = [
  {
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    titulo: 'Residencia Los Cipreses',
    tipo: 'Residencial',
    lugar: 'Escazú, San José',
    año: '2024',
    m2: '320 m²',
  },
  {
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    titulo: 'Torre Empresarial Centro',
    tipo: 'Comercial',
    lugar: 'San Pedro, San José',
    año: '2023',
    m2: '2,800 m²',
  },
  {
    img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&q=80',
    titulo: 'Condominio Vista Mar',
    tipo: 'Residencial',
    lugar: 'Jacó, Puntarenas',
    año: '2023',
    m2: '1,200 m²',
  },
  {
    img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80',
    titulo: 'Remodelación Oficinas BNS',
    tipo: 'Remodelación',
    lugar: 'Heredia',
    año: '2024',
    m2: '450 m²',
  },
  {
    img: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&q=80',
    titulo: 'Bodega Industrial Alajuela',
    tipo: 'Industrial',
    lugar: 'Alajuela',
    año: '2022',
    m2: '5,000 m²',
  },
  {
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    titulo: 'Casa Club Urbanización Palmas',
    tipo: 'Residencial',
    lugar: 'Cartago',
    año: '2024',
    m2: '180 m²',
  },
]

const tipos = ['Todos', 'Residencial', 'Comercial', 'Industrial', 'Remodelación']

export default function Portafolio() {
  const [filtro, setFiltro] = useState('Todos')
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })
  const proyectosFiltrados = filtro === 'Todos' ? proyectos : proyectos.filter((p) => p.tipo === filtro)

  return (
    <section id="portafolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Nuestro trabajo
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-4xl font-extrabold text-gray-900">
            Portafolio de Proyectos
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-3 w-16 h-1 bg-gray-900 mx-auto rounded-full" />
        </motion.div>

        {/* Filtros */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true }}
        >
          {tipos.map((t) => (
            <motion.button
              key={t}
              onClick={() => setFiltro(t)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filtro === t
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {t}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <div ref={gridRef}>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            animate={gridInView ? 'show' : 'hidden'}
            key={filtro}
          >
            <AnimatePresence mode="popLayout">
              {proyectosFiltrados.map((p) => (
                <motion.div
                  key={p.titulo}
                  variants={fadeUp}
                  layout
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
                >
                  {/* Imagen full-card */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay oscuro que aparece en hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Badge tipo — siempre visible */}
                    <span className="absolute top-3 left-3 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 shadow">
                      {p.tipo}
                    </span>

                    {/* Contenido que emerge desde abajo en hover */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-end translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <h3 className="font-bold text-white text-lg mb-2 leading-tight">{p.titulo}</h3>
                      <div className="flex items-center justify-between text-xs text-gray-300">
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {p.lugar}
                        </span>
                        <span className="text-white/80 font-medium">{p.m2} · {p.año}</span>
                      </div>
                    </div>
                  </div>

                  {/* Franja inferior siempre visible (título) */}
                  <div className="bg-white px-5 py-4 group-hover:bg-gray-900 transition-colors duration-300">
                    <h3 className="font-bold text-gray-900 group-hover:text-white text-sm transition-colors duration-300 truncate">
                      {p.titulo}
                    </h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 mt-0.5 transition-colors duration-300">
                      {p.lugar} · {p.año}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
