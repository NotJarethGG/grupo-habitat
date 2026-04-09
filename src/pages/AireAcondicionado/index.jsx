import NavbarAireAcondicionado from '../../components/NavbarAireAcondicionado'
import Footer from '../../components/Footer'
import HeroAire from './Hero'
import ServiciosAire from './Servicios'
import Marcas from './Marcas'
import Cobertura from './Cobertura'
import CTAAire from './CTAAire'

export default function AireAcondicionado() {
  return (
    <>
      <NavbarAireAcondicionado />
      <main>
        <HeroAire />
        <ServiciosAire />
        <Marcas />
        <Cobertura />
        <CTAAire />
      </main>
      <Footer />
    </>
  )
}
