import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const diferenciadores = [
  {
    num: '01',
    titulo: 'Experiencia comprobada',
    desc: 'Más de 18 años y 200+ proyectos completados en todo Costa Rica, desde residencias hasta grandes complejos comerciales e industriales.',
  },
  {
    num: '02',
    titulo: 'Equipo certificado',
    desc: 'Ingenieros, arquitectos y maestros de obras certificados por el CFIA, con actualización constante en nuevas técnicas y materiales.',
  },
  {
    num: '03',
    titulo: 'Transparencia total',
    desc: 'Presupuestos detallados sin sorpresas. Actualizaciones semanales del avance de obra y acceso a reportes en tiempo real.',
  },
  {
    num: '04',
    titulo: 'Cumplimiento de plazos',
    desc: 'El 96% de nuestros proyectos se entregan en la fecha acordada. Nuestro sistema de gestión de obras garantiza el cronograma.',
  },
  {
    num: '05',
    titulo: 'Garantía post-entrega',
    desc: 'Respaldamos nuestra obra con garantía estructural de 10 años y 2 años en acabados e instalaciones.',
  },
  {
    num: '06',
    titulo: 'Servicio integral',
    desc: 'Desde el diseño arquitectónico hasta la entrega final, incluyendo trámites municipales, permisos y conexión de servicios.',
  },
]

export default function PorQueElegirnos() {
  return (
    <section id="por-que-elegirnos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Nuestra diferencia
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-4xl font-extrabold text-white">
            ¿Por qué elegirnos?
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-3 w-16 h-1 bg-white/30 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {diferenciadores.map((d) => (
            <motion.div
              key={d.num}
              variants={fadeUp}
              className="bg-white/5 rounded-2xl p-7 border border-white/10 hover:border-white/25 group transition-colors"
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <motion.span
                className="text-4xl font-black text-white/15 group-hover:text-white/30 transition-colors block mb-4"
              >
                {d.num}
              </motion.span>
              <h3 className="text-lg font-bold text-white mb-3">{d.titulo}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
