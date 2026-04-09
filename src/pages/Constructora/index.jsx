import NavbarConstructora from '../../components/NavbarConstructora'
import Footer from '../../components/Footer'
import HeroConstructora from './Hero'
import ServiciosConstructora from './Servicios'
import Portafolio from './Portafolio'
import PorQueElegirnos from './PorQueElegirnos'
import CTAConstructora from './CTAConstructora'

export default function Constructora() {
  return (
    <>
      <NavbarConstructora />
      <main>
        <HeroConstructora />
        <ServiciosConstructora />
        <Portafolio />
        <PorQueElegirnos />
        <CTAConstructora />
      </main>
      <Footer />
    </>
  )
}
