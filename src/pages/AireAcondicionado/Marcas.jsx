import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const marcas = [
  { nombre: 'Daikin', logo: 'https://via.placeholder.com/120x50/f3f4f6/374151?text=DAIKIN', desc: 'Líder mundial en tecnología de climatización inverter.' },
  { nombre: 'Mitsubishi', logo: 'https://via.placeholder.com/120x50/f3f4f6/374151?text=MITSUBISHI', desc: 'Alta eficiencia energética y silencio excepcional.' },
  { nombre: 'LG', logo: 'https://via.placeholder.com/120x50/f3f4f6/374151?text=LG', desc: 'Innovación y diseño para espacios residenciales y comerciales.' },
  { nombre: 'Samsung', logo: 'https://via.placeholder.com/120x50/f3f4f6/374151?text=SAMSUNG', desc: 'Conectividad inteligente y control desde su smartphone.' },
  { nombre: 'Carrier', logo: 'https://via.placeholder.com/120x50/f3f4f6/374151?text=CARRIER', desc: 'Más de 100 años de excelencia en climatización industrial.' },
  { nombre: 'Trane', logo: 'https://via.placeholder.com/120x50/f3f4f6/374151?text=TRANE', desc: 'Sistemas robustos para aplicaciones comerciales e industriales.' },
  { nombre: 'York', logo: 'https://via.placeholder.com/120x50/f3f4f6/374151?text=YORK', desc: 'Soluciones de climatización de alto rendimiento.' },
  { nombre: 'Midea', logo: 'https://via.placeholder.com/120x50/f3f4f6/374151?text=MIDEA', desc: 'Eficiencia y confiabilidad a precio competitivo.' },
]

export default function Marcas() {
  return (
    <section id="marcas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Nuestros aliados
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-4xl font-extrabold text-gray-900">
            Marcas y Equipos
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-3 w-16 h-1 bg-gray-900 mx-auto rounded-full" />
          <motion.p variants={fadeUp} className="mt-4 text-gray-600 max-w-xl mx-auto text-sm">
            Trabajamos exclusivamente con las mejores marcas del mundo, garantizando equipos de alta eficiencia energética y larga durabilidad.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {marcas.map((m) => (
            <motion.div
              key={m.nombre}
              variants={fadeUp}
              className="bg-white rounded-2xl p-5 flex flex-col items-center text-center border border-gray-100 hover:border-gray-300 group transition-colors"
              whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(0,0,0,0.08)', transition: { duration: 0.25 } }}
            >
              <img
                src={m.logo}
                alt={m.nombre}
                className="h-10 object-contain mb-4 rounded"
              />
              <h3 className="font-bold text-gray-900 text-sm mb-1">{m.nombre}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 bg-gray-900 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <h3 className="text-xl font-bold mb-2">¿Tiene un equipo de otra marca?</h3>
          <p className="text-white/60 text-sm mb-5">También damos servicio técnico a cualquier marca. Contáctenos y le asesoramos.</p>
          <motion.a
            href="#contacto-aire"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Consultar servicio
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
