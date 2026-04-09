import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}

const servicios = [
  {
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titulo: 'Instalación',
    desc: 'Instalación profesional de sistemas de aire acondicionado split, cassette, ducted y VRF. Dimensionamiento correcto para cada espacio.',
    puntos: [
      'Análisis de carga térmica previo',
      'Instalación certificada',
      'Pruebas y puesta en marcha',
      'Capacitación de uso al cliente',
    ],
  },
  {
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    titulo: 'Mantenimiento Preventivo',
    desc: 'Planes de mantenimiento periódico para garantizar el rendimiento óptimo de sus equipos, reducir el consumo eléctrico y prolongar su vida útil.',
    puntos: [
      'Limpieza de filtros y evaporador',
      'Revisión de niveles de refrigerante',
      'Lubricación de componentes',
      'Informe técnico detallado',
    ],
  },
  {
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    titulo: 'Reparación',
    desc: 'Diagnóstico y reparación de cualquier falla en sus equipos de climatización. Servicio de emergencia disponible 7 días a la semana.',
    puntos: [
      'Diagnóstico preciso con equipos especializados',
      'Repuestos originales garantizados',
      'Servicio de emergencia 24/7',
      'Garantía en reparaciones',
    ],
  },
  {
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    titulo: 'Climatización Industrial',
    desc: 'Soluciones de climatización a gran escala para plantas industriales, centros de datos, hospitales y grandes superficies comerciales.',
    puntos: [
      'Sistemas chiller y torres de enfriamiento',
      'Salas blancas y ambientes controlados',
      'Diseño de red de ductos',
      'Integración con BMS (Building Management System)',
    ],
  },
]

export default function ServiciosAire() {
  return (
    <section id="servicios-aire" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Lo que ofrecemos
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-4xl font-extrabold text-gray-900">
            Nuestros Servicios
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-3 w-16 h-1 bg-gray-900 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {servicios.map((s) => (
            <motion.div
              key={s.titulo}
              variants={fadeUp}
              className="border border-gray-100 rounded-2xl p-7 hover:border-gray-300 hover:shadow-md hover:-translate-y-1.5 transition-[border-color,box-shadow,transform] duration-300 group"
            >
              <div className="w-14 h-14 bg-gray-100 group-hover:bg-gray-900 text-gray-700 group-hover:text-white rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                {s.icono}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.titulo}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.puntos.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
