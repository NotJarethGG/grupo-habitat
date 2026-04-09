import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Cookies() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Cookies</h1>
          <p className="text-sm text-gray-400 mb-10">Última actualización: abril de 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web.
                Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para
                proporcionar información a los propietarios del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Cookies que utilizamos</h2>

              <div className="mt-4 space-y-5">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Cookies estrictamente necesarias</h3>
                  <p className="text-sm">
                    Son esenciales para el funcionamiento del sitio web. Sin estas cookies, el sitio no puede funcionar
                    correctamente. No requieren su consentimiento para ser instaladas.
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-medium text-gray-700">Duración:</span> Sesión / hasta 1 año<br />
                    <span className="font-medium text-gray-700">Finalidad:</span> Funcionamiento técnico del sitio.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Cookies analíticas</h3>
                  <p className="text-sm">
                    Nos permiten contar las visitas y las fuentes de tráfico para medir y mejorar el rendimiento de
                    nuestro sitio. Toda la información que recopilan es agregada y, por tanto, anónima.
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-medium text-gray-700">Proveedor:</span> Google Analytics (si aplica)<br />
                    <span className="font-medium text-gray-700">Duración:</span> Hasta 2 años<br />
                    <span className="font-medium text-gray-700">Finalidad:</span> Estadísticas de uso del sitio.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Cookies de preferencias</h3>
                  <p className="text-sm">
                    Permiten que el sitio web recuerde información que cambia la forma en que se comporta o se ve,
                    como su idioma preferido o la región en la que se encuentra.
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-medium text-gray-700">Duración:</span> Hasta 1 año<br />
                    <span className="font-medium text-gray-700">Finalidad:</span> Personalización de la experiencia.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Gestión y control de cookies</h2>
              <p>
                Puede controlar y/o eliminar las cookies cuando lo desee. Puede eliminar todas las cookies que ya están
                en su dispositivo y puede configurar la mayoría de los navegadores para que no las acepten.
              </p>
              <p className="mt-2">
                Tenga en cuenta que, si bloquea las cookies, es posible que algunas funcionalidades del sitio web no
                estén disponibles o no funcionen correctamente.
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Más información</h2>
              <p>
                Si tiene preguntas sobre nuestra Política de Cookies, contáctenos en{' '}
                <a href="mailto:info@grupohabitat.cr" className="text-gray-800 underline">
                  info@grupohabitat.cr
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
