import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const servicios = [
  {
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    titulo: 'Construcción Residencial',
    desc: 'Diseñamos y construimos la casa de sus sueños. Desde residencias unifamiliares hasta condominios y urbanizaciones, garantizando calidad y durabilidad en cada metro cuadrado.',
    puntos: ['Diseño arquitectónico personalizado', 'Materiales de primera calidad', 'Acabados de lujo disponibles', 'Gestión de permisos incluida'],
  },
  {
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    titulo: 'Construcción Comercial',
    desc: 'Edificios de oficinas, locales comerciales, bodegas industriales y centros empresariales. Construimos espacios funcionales que potencian la productividad de su negocio.',
    puntos: ['Diseño orientado a la eficiencia', 'Cumplimiento de normas CFIA', 'Construcción en tiempo récord', 'Proyectos llave en mano'],
  },
  {
    img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80',
    titulo: 'Remodelaciones',
    desc: 'Renovamos y mejoramos espacios existentes conservando la esencia de su propiedad. Remodelaciones integrales o parciales con mínima interrupción a su rutina.',
    puntos: ['Evaluación estructural previa', 'Renovación sin demolición total', 'Actualización de instalaciones', 'Diseño de interiores'],
  },
]

export default function ServiciosConstructora() {
  return (
    <section id="servicios-constructora" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Nuestros Servicios
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-4xl font-extrabold text-gray-900">
            ¿En qué podemos ayudarle?
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-3 w-16 h-1 bg-gray-900 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-20">
          {servicios.map((s, i) => (
            <div key={s.titulo} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
              <motion.div
                className={i % 2 === 1 ? 'lg:order-2' : ''}
                variants={i % 2 === 0 ? fadeLeft : fadeRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
              >
                <motion.img
                  src={s.img}
                  alt={s.titulo}
                  className="w-full h-72 object-cover rounded-2xl shadow-lg"
                  initial={{ scale: 1.04 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.9, ease }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
                />
              </motion.div>
              <motion.div
                className={i % 2 === 1 ? 'lg:order-1' : ''}
                variants={i % 2 === 0 ? fadeRight : fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{s.titulo}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <motion.ul
                  className="space-y-2"
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  {s.puntos.map((p) => (
                    <motion.li key={p} variants={fadeUp} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {p}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
