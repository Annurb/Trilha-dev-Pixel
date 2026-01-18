import imgHero from './Imagem/imgHero.jpg'
import './Style/HeroSection.css'
import './Style/buttons.css'


export default function HeroSection(){
    return(
        <div id='container'>
        <section className="containerImg"><img id='imgHero' src={imgHero} alt="homem lendo" /></section>
        <div id='titulo'>
            <div id='linha'></div>
            <div className='encontreTitulo'><h1>ENCONTRE OS MELHORES <span>LIVROS</span></h1>
            <p>Leia, ame e desfrute cada momento com seu livro</p>
            <a href="#livros"><button className='buttonChamada'>COMPRE AGORA</button></a></div>
        </div>
        </div>
    )
}