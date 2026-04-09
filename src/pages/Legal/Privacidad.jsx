import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Privacidad() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Privacidad</h1>
          <p className="text-sm text-gray-400 mb-10">Última actualización: abril de 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Responsable del tratamiento</h2>
              <p>
                <strong>Grupo Hábitat S.A.</strong>, con domicilio en San José, Costa Rica, es la entidad responsable del
                tratamiento de sus datos personales recabados a través del sitio web{' '}
                <span className="text-gray-800">www.grupohabitat.cr</span>.
              </p>
              <p className="mt-2">
                Contacto del responsable:{' '}
                <a href="mailto:info@grupohabitat.cr" className="text-gray-800 underline">
                  info@grupohabitat.cr
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Datos que recopilamos</h2>
              <p>Podemos recopilar los siguientes datos personales:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Información sobre el proyecto o servicio de interés</li>
                <li>Datos de navegación (a través de cookies técnicas y analíticas)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Finalidad del tratamiento</h2>
              <p>Utilizamos sus datos personales para:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Responder a sus consultas y solicitudes de cotización.</li>
                <li>Gestionar la relación contractual con nuestros clientes.</li>
                <li>Enviarle comunicaciones comerciales sobre nuestros servicios, siempre que haya otorgado su consentimiento.</li>
                <li>Mejorar la experiencia de navegación en nuestro sitio web.</li>
                <li>Cumplir con obligaciones legales aplicables en Costa Rica.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Base legal</h2>
              <p>
                El tratamiento de sus datos se basa en: (a) su consentimiento explícito cuando completa formularios de contacto;
                (b) la ejecución de un contrato o medidas precontractuales; y (c) el cumplimiento de obligaciones legales
                conforme a la Ley de Protección de la Persona Frente al Tratamiento de sus Datos Personales (Ley N.° 8968 de
                Costa Rica).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Conservación de los datos</h2>
              <p>
                Conservamos sus datos durante el tiempo necesario para cumplir con la finalidad para la que fueron recopilados
                y, en todo caso, durante los plazos de prescripción legal aplicables.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Derechos del titular</h2>
              <p>De conformidad con la Ley N.° 8968, usted tiene derecho a:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Acceder a sus datos personales.</li>
                <li>Rectificar datos inexactos o incompletos.</li>
                <li>Solicitar la supresión de sus datos cuando ya no sean necesarios.</li>
                <li>Oponerse al tratamiento de sus datos para fines de mercadeo.</li>
                <li>Revocar el consentimiento otorgado en cualquier momento.</li>
              </ul>
              <p className="mt-2">
                Para ejercer sus derechos, escríbanos a{' '}
                <a href="mailto:info@grupohabitat.cr" className="text-gray-800 underline">
                  info@grupohabitat.cr
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Seguridad</h2>
              <p>
                Aplicamos medidas técnicas y organizativas adecuadas para proteger sus datos frente a accesos no autorizados,
                pérdida o divulgación accidental.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Cambios en esta política</h2>
              <p>
                Nos reservamos el derecho de actualizar esta Política de Privacidad. Le notificaremos cualquier cambio material
                publicando la versión actualizada en esta página con la nueva fecha de vigencia.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
