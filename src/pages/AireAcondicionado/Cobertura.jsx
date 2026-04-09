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

const provincias = [
  { nombre: 'San José', zonas: ['Escazú', 'Santa Ana', 'Desamparados', 'Curridabat', 'La Unión', 'Tibás', 'Moravia', 'San Pedro'], principal: true },
  { nombre: 'Alajuela', zonas: ['Ciudad Alajuela', 'San Carlos', 'Grecia', 'Naranjo', 'Palmares', 'Atenas'], principal: false },
  { nombre: 'Heredia', zonas: ['Ciudad Heredia', 'Santo Domingo', 'San Joaquín', 'Barva', 'San Pablo', 'Santa Bárbara'], principal: false },
  { nombre: 'Cartago', zonas: ['Ciudad Cartago', 'La Unión', 'Tres Ríos', 'Paraíso', 'Oreamuno'], principal: false },
  { nombre: 'Guanacaste', zonas: ['Liberia', 'Nicoya', 'Tamarindo', 'Flamingo', 'Papagayo'], principal: false },
  { nombre: 'Puntarenas', zonas: ['Ciudad Puntarenas', 'Jacó', 'Quepos', 'Manuel Antonio'], principal: false },
]

export default function Cobertura() {
  return (
    <section id="cobertura" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Dónde operamos
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-4xl font-extrabold text-white">
            Cobertura Nacional
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-3 w-16 h-1 bg-white/30 mx-auto rounded-full" />
          <motion.p variants={fadeUp} className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
            Contamos con equipos técnicos distribuidos en todo el país para garantizar tiempos de respuesta rápidos.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {provincias.map((prov) => (
            <motion.div
              key={prov.nombre}
              variants={fadeUp}
              className={`rounded-2xl p-6 border transition-[border-color,transform] duration-300 ${
                prov.principal
                  ? 'bg-white/10 border-white/20'
                  : 'bg-white/5 border-white/10 hover:border-white/25 hover:-translate-y-1'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${prov.principal ? 'bg-white/20' : 'bg-white/10'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{prov.nombre}</h3>
                  {prov.principal && <span className="text-white/50 text-xs">Sede principal</span>}
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {prov.zonas.map((z) => (
                  <span
                    key={z}
                    className={`text-xs px-2.5 py-1 rounded-full ${
                      prov.principal ? 'bg-white/15 text-white/80' : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    {z}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tiempos de respuesta */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {[
            { titulo: 'Gran Área Metropolitana', tiempo: '2-4 horas', desc: 'San José, Heredia, Alajuela y Cartago' },
            { titulo: 'Zona Pacífico', tiempo: '4-8 horas', desc: 'Puntarenas, Jacó, Guanacaste' },
            { titulo: 'Otras zonas', tiempo: '24 horas', desc: 'Coordinación previa requerida' },
          ].map((t) => (
            <motion.div
              key={t.titulo}
              variants={fadeUp}
              className="bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:-translate-y-1 transition-transform duration-300"
            >
              <p className="text-3xl font-extrabold text-white mb-2">{t.tiempo}</p>
              <h3 className="text-white font-semibold text-sm mb-1">{t.titulo}</h3>
              <p className="text-gray-500 text-xs">{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
