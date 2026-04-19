import { useState } from 'react'
import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function CTAConstructora() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', tipo: '', m2: '', mensaje: '' })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  function validar() {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'Requerido'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Correo inválido'
    if (!form.mensaje.trim()) e.mensaje = 'Requerido'
    return e
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validar()
    if (Object.keys(e).length > 0) { setErrores(e); return }
    setErrores({})
    setEnviado(true)
  }

  return (
    <section id="contacto-constructora" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-gray-400 text-sm font-semibold uppercase tracking-widest">Hagámoslo realidad</span>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900 mb-5">Solicite su Cotización</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Cuéntenos sobre su proyecto y le enviaremos una cotización detallada sin costo. Nuestro equipo técnico le contactará en menos de 24 horas hábiles.
            </p>
            <motion.div
              className="space-y-4"
              variants={stagger}
            >
              {[
                'Consulta y cotización sin costo',
                'Respuesta en menos de 24 horas',
                'Visita técnica a su terreno o propiedad',
                'Propuesta personalizada y detallada',
              ].map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {enviado ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">¡Solicitud recibida!</h3>
                <p className="text-gray-500 text-sm">Le contactaremos en las próximas 24 horas hábiles.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <h3 className="font-bold text-gray-900 text-lg mb-5">Datos del proyecto</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre *"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 ${errores.nombre ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {errores.nombre && <p className="text-xs text-red-500 mt-1">{errores.nombre}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Correo *"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 ${errores.email ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {errores.email && <p className="text-xs text-red-500 mt-1">{errores.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                  <select
                    value={form.tipo}
                    onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-600"
                  >
                    <option value="">Tipo de proyecto</option>
                    <option value="residencial">Residencial</option>
                    <option value="comercial">Comercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="remodelacion">Remodelación</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Metros cuadrados aproximados"
                  value={form.m2}
                  onChange={(e) => setForm({ ...form, m2: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
                <div>
                  <textarea
                    rows={4}
                    placeholder="Descripción del proyecto *"
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none ${errores.mensaje ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errores.mensaje && <p className="text-xs text-red-500 mt-1">{errores.mensaje}</p>}
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-sm"
                  whileHover={{ scale: 1.01, backgroundColor: '#374151' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  Solicitar Cotización Gratuita
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
