import imgHero from './Imagem/imgHero.jpg'
import './HeroSection.css'
import './buttons.css'

export default function HeroSection(){
    return(
        <div id='container'>
        <img id='imgHero' src={imgHero} alt="homem lendo" />
        <div id='titulo'>
            <div id='linha'></div>
        <div className='encontreTitulo'><h1>ENCONTRE OS MELHORES <span>LIVROS</span></h1>
        <p>Leia, ame e desfrute cada momento com seu livro</p>
        <button className='buttonChamada'>COMPRE AGORA</button></div>
        </div>
        </div>
    )
}