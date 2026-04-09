import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const testimonios = [
  {
    nombre: 'Carlos Rodríguez',
    cargo: 'Gerente General, Inversiones CR S.A.',
    texto: 'Grupo Hábitat superó todas nuestras expectativas en la construcción de nuestras nuevas oficinas. Entregaron el proyecto a tiempo, dentro del presupuesto y con una calidad impecable. Sin duda, los recomendamos ampliamente.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
    proyecto: 'Edificio de Oficinas, San José',
    rating: 5,
  },
  {
    nombre: 'María Fernanda López',
    cargo: 'Directora de Operaciones, Hotel Vista Verde',
    texto: 'La instalación de los sistemas de aire acondicionado en nuestro hotel fue realizada de forma profesional y sin interrumpir nuestras operaciones. El mantenimiento mensual que brindan es excelente.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
    proyecto: 'Hotel Vista Verde, Guanacaste',
    rating: 5,
  },
  {
    nombre: 'Andrés Mora',
    cargo: 'Propietario',
    texto: 'Construyeron mi casa de habitación en menos de 8 meses. El proceso fue muy transparente, con actualizaciones semanales y una atención al detalle que realmente aprecié. Estoy muy satisfecho con el resultado.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
    proyecto: 'Residencia Privada, Escazú',
    rating: 5,
  },
]

function Estrella() {
  return (
    <svg className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Lo que dicen de nosotros
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-4xl font-extrabold text-white">
            Testimonios
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-3 w-16 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {testimonios.map((t) => (
            <motion.div
              key={t.nombre}
              variants={fadeUp}
              className="bg-gray-800 rounded-2xl p-8 flex flex-col"
              whileHover={{ y: -6, backgroundColor: '#1f2937', transition: { duration: 0.25 } }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Estrella key={i} />
                ))}
              </div>

              {/* Quote */}
              <svg className="w-8 h-8 text-gray-600 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7.9C8.4 11.6 10 9.9 12 9.3L10 8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6.1c.5-2.4 2.1-4.1 4.1-4.7L26 8z"/>
              </svg>

              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">{t.texto}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-700">
                <img
                  src={t.avatar}
                  alt={t.nombre}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold text-sm">{t.nombre}</p>
                  <p className="text-gray-500 text-xs">{t.cargo}</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-600 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {t.proyecto}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
