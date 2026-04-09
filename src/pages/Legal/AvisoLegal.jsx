import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AvisoLegal() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Aviso Legal</h1>
          <p className="text-sm text-gray-400 mb-10">Última actualización: abril de 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Titularidad del sitio web</h2>
              <p>
                En cumplimiento de la normativa vigente, se informa que el presente sitio web es titularidad de:
              </p>
              <ul className="mt-3 space-y-1 not-prose">
                <li><span className="font-medium text-gray-700">Empresa:</span> Grupo Hábitat S.A.</li>
                <li><span className="font-medium text-gray-700">Domicilio:</span> San José, Costa Rica</li>
                <li>
                  <span className="font-medium text-gray-700">Correo:</span>{' '}
                  <a href="mailto:info@grupohabitat.cr" className="text-gray-800 underline">
                    info@grupohabitat.cr
                  </a>
                </li>
                <li><span className="font-medium text-gray-700">Teléfono:</span> +506 2222-0000</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Objeto y ámbito de aplicación</h2>
              <p>
                El presente Aviso Legal regula el acceso, navegación y uso del sitio web{' '}
                <span className="text-gray-800 font-medium">www.grupohabitat.cr</span>. El acceso al sitio web implica
                la aceptación plena y sin reservas de las condiciones aquí establecidas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Propiedad intelectual e industrial</h2>
              <p>
                Todos los contenidos del sitio web —incluyendo, sin carácter limitativo, textos, fotografías, gráficos,
                imágenes, iconos, tecnología, software, logotipos, marcas, nombres comerciales y demás signos
                distintivos— son propiedad de Grupo Hábitat S.A. o de terceros que han autorizado su uso.
              </p>
              <p className="mt-2">
                Queda prohibida la reproducción, distribución, comunicación pública y transformación total o parcial de
                los contenidos sin la autorización expresa y por escrito de Grupo Hábitat S.A.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Exclusión de garantías y responsabilidad</h2>
              <p>
                Grupo Hábitat S.A. no garantiza la disponibilidad y continuidad del funcionamiento del sitio web. Tampoco
                garantiza la ausencia de virus u otros elementos lesivos. En la medida permitida por la legislación
                aplicable, se excluye cualquier responsabilidad por daños y perjuicios de cualquier naturaleza derivados
                del uso del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Enlaces a terceros</h2>
              <p>
                El sitio web puede contener enlaces a páginas de terceros. Grupo Hábitat S.A. no se hace responsable
                del contenido, información o servicios que aparezcan en dichos sitios, que tendrán exclusivamente carácter
                informativo y que en ningún caso implican relación, recomendación ni supervisión por parte de Grupo Hábitat S.A.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Legislación aplicable y jurisdicción</h2>
              <p>
                Las relaciones entre Grupo Hábitat S.A. y los usuarios del presente sitio web se rigen por la legislación
                vigente en la República de Costa Rica. Para la resolución de cualquier controversia, las partes se someten
                a la jurisdicción de los Tribunales de Justicia de San José, Costa Rica.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Modificaciones</h2>
              <p>
                Grupo Hábitat S.A. se reserva el derecho de modificar el presente Aviso Legal en cualquier momento. Las
                modificaciones entrarán en vigor desde su publicación en este sitio web.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
