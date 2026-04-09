import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from './Hero'
import SobreNosotros from './SobreNosotros'
import LineasNegocio from './LineasNegocio'
import Testimonios from './Testimonios'
import Contacto from './Contacto'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreNosotros />
        <LineasNegocio />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
