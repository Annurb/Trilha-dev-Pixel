 { /* função components para mostrar todas as seções, necessária para o uso do react-router-dom*/ }
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Sobre from './Sobre'
import Beneficios from './Beneficios'
import Depoimentos from './Depoimentos'
import Contato from './Contato'
import Footer from './Footer'
import Livros from './Livros'
import AcaoFinal from './AcaoFinal'

export default function Components(){
    return(
        <>
    <Navbar/>
    <HeroSection/>
    <Sobre/>
    <Beneficios/>
    <Livros/>
    <Depoimentos/>
    <Contato/>
    <AcaoFinal/>
    <Footer/>
        </>
    )
}