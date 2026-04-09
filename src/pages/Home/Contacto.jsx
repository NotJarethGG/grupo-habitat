import { useState } from 'react'
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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  function validar() {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'El nombre es requerido.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Ingrese un correo válido.'
    if (!form.mensaje.trim()) e.mensaje = 'El mensaje es requerido.'
    return e
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validar()
    if (Object.keys(e).length > 0) {
      setErrores(e)
      return
    }
    setErrores({})
    setEnviado(true)
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUp} className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Estamos para ayudarle
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 text-4xl font-extrabold text-gray-900">
            Contáctenos
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-3 w-16 h-1 bg-gray-900 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              <motion.ul
                className="space-y-5"
                variants={stagger}
              >
                {[
                  {
                    icono: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    titulo: 'Dirección',
                    desc: 'San José, Costa Rica\nDetrás del Mall San Pedro, 200 m norte',
                  },
                  {
                    icono: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    titulo: 'Teléfono',
                    desc: '+506 2222-0000\n+506 8888-1111 (WhatsApp)',
                  },
                  {
                    icono: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    titulo: 'Correo',
                    desc: 'info@grupohabitat.cr\ncotizaciones@grupohabitat.cr',
                  },
                  {
                    icono: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    titulo: 'Horario',
                    desc: 'Lunes a Viernes: 8:00 am – 6:00 pm\nSábados: 8:00 am – 12:00 pm',
                  },
                ].map((item) => (
                  <motion.li key={item.titulo} variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 text-gray-600">
                      {item.icono}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.titulo}</p>
                      {item.desc.split('\n').map((line, i) => (
                        <p key={i} className="text-gray-500 text-sm">{line}</p>
                      ))}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3 bg-gray-50 rounded-2xl p-8"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {enviado ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-600 mb-6">Nos pondremos en contacto con usted en las próximas 24 horas hábiles.</p>
                <button
                  onClick={() => { setEnviado(false); setForm({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' }) }}
                  className="text-sm text-gray-500 hover:text-gray-900 underline"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                    <input
                      type="text"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      placeholder="Juan Pérez"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition ${errores.nombre ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'}`}
                    />
                    {errores.nombre && <p className="mt-1 text-xs text-red-500">{errores.nombre}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="juan@correo.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition ${errores.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'}`}
                    />
                    {errores.email && <p className="mt-1 text-xs text-red-500">{errores.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input
                      type="tel"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      placeholder="+506 8888-0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Servicio de interés</label>
                    <select
                      value={form.servicio}
                      onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition text-gray-700"
                    >
                      <option value="">Seleccione...</option>
                      <option value="construccion">Construcción Residencial</option>
                      <option value="comercial">Construcción Comercial</option>
                      <option value="remodelacion">Remodelación</option>
                      <option value="aire-instalacion">Instalación de A/C</option>
                      <option value="aire-mantenimiento">Mantenimiento de A/C</option>
                      <option value="aire-reparacion">Reparación de A/C</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
                  <textarea
                    rows={5}
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    placeholder="Cuéntenos sobre su proyecto o consulta..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition resize-none ${errores.mensaje ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'}`}
                  />
                  {errores.mensaje && <p className="mt-1 text-xs text-red-500">{errores.mensaje}</p>}
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.01, backgroundColor: '#374151' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  Enviar Mensaje
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
