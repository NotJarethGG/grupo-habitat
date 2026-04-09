import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const valores = [
  {
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    titulo: 'Calidad',
    desc: 'Estándares de ejecución superiores en cada proyecto, usando materiales de primera y técnicas actualizadas.',
  },
  {
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titulo: 'Compromiso',
    desc: 'Cumplimos plazos y presupuestos acordados, manteniendo una comunicación transparente con nuestros clientes.',
  },
  {
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    titulo: 'Innovación',
    desc: 'Incorporamos tecnologías modernas y métodos constructivos eficientes para resultados superiores.',
  },
  {
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titulo: 'Sostenibilidad',
    desc: 'Integramos prácticas responsables con el medio ambiente en nuestros proyectos de construcción y climatización.',
  },
]

export default function SobreNosotros() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Quiénes somos
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-4xl font-extrabold text-gray-900">
            Sobre Nosotros
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-3 w-16 h-1 bg-gray-900 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            className="relative"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Equipo Grupo Hábitat"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.9, ease }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gray-900 text-white px-6 py-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-black">18+</p>
              <p className="text-sm text-gray-400">años de experiencia</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Historia</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Grupo Hábitat nació en 2005 como una empresa familiar con la visión de transformar el sector de la construcción en Costa Rica. A lo largo de los años, hemos expandido nuestros servicios incorporando la división de Aire Acondicionado para ofrecer soluciones integrales a nuestros clientes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Hoy somos una empresa consolidada con presencia en todo el territorio nacional, respaldados por un equipo de más de 80 profesionales especializados y cientos de proyectos exitosamente completados.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="font-bold text-gray-900 mb-2">Misión</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Brindar soluciones constructivas y de climatización de alta calidad que superen las expectativas de nuestros clientes.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="font-bold text-gray-900 mb-2">Visión</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ser la empresa líder en Costa Rica en construcción y climatización, reconocida por excelencia e innovación.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Valores */}
        <div>
          <motion.h3
            className="text-2xl font-bold text-gray-900 text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            viewport={{ once: true, margin: '-60px' }}
          >
            Nuestros Valores
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {valores.map((v) => (
              <motion.div
                key={v.titulo}
                variants={fadeUp}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-md hover:-translate-y-1 transition-[border-color,box-shadow,transform] duration-300 group"
              >
                <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-900 group-hover:text-white text-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all">
                  {v.icono}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{v.titulo}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
