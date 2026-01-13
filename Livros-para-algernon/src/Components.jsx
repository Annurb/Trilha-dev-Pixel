import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Sobre from './sobre'
import Beneficios from './Beneficios'
import Depoimentos from './Depoimentos'
import Contato from './Contato'
import Footer from './Footer'
import Livros from './Livros'
import Card from './Card'
import bomdiave from './LivrosImagem/Bom dia, verônica.webp'

export default function Components(){
    return(
        <div>
            <Navbar/>
    <HeroSection/>
    <Sobre/>
    <Beneficios/>
    <Depoimentos/>
    <Livros/>
    <Contato/>
    <Footer/>
        </div>
    )
}