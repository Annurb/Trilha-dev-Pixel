import facebook from './Imagem/facebook.png'
import instagram from './Imagem/instagram.png'
import linkedin from './Imagem/linkedin.png'
import logo from './Imagem/logo.png'
import copyright from './Imagem/copyright.png'
import './Style/Footer.css'

export default function Footer(){
    return(
        <div className='footerContainer'>
            <img src={logo} alt="logo" />
            <div><p>Sebo Livros para Algernon - livros com história desde 2025</p>
            <div className='copyrightLinha'>
                <img src={copyright} alt="copyright" />
                <p>2026 - Todos os direitos resevados</p>
            </div></div>
            <ol>
                <li><a className='linkFooter' href="#container">
                    Início
                    </a></li>
                <li><a className='linkFooter'  href="#livros">
                    Catálogo / Livros</a></li>
                <li>
                    <a className='linkFooter'  href="#containerSobre">
                    Sobre nós
                    </a>
                </li>
                <li>
                    <a className='linkFooter'  href="#contato">
                    Contato
                    </a>
                </li>
            </ol>
            <ol>
                <li>Florianópolis</li>
                <li>(48) 9999 - 9999</li>
                <li><a className='emailGrande' href="mailto:livrosparaalgernon@gmail.com"
                onClick={(e) => e.stopPropagation()}>
                    livrosparaalgernon@gmail.com
                </a></li>
            </ol>
            <div className='footerBaixo'>
                <a href=""><img src={facebook} alt="facebook" /></a>
                <a href=""><img src={instagram} alt="instagram" /></a>
                <a href=""><img src={linkedin} alt="linkedin" /></a>
            </div>
        </div>
    )
}