import library1 from './Imagem/library1.png'
import library2 from './Imagem/library2.png'
import donoElivro from './Imagem/donoElivro.png'
import './Sobre.css'

export default function Sobre(){
    return(
        <div id="containerSobre">
            <img className='imagensSobre' src={library1} alt="Estante de livros" />
            <img className='imagensSobre' src={library2} alt="Estante de livros 2" />
            <div>
            <h3>CRIADO SOB MEDIDA</h3>
            <h1>Sobre:</h1>
            <p>O Livros para Algernon é um sebo que nasceu da paixão por livros antigos e a vontade de recontar histórias que não perdem a validade. Ao escolher a Livros para Algernon, você participa de um consumo consciente e evita desperdício e ajuda na propagação de conhecimento.</p>
            <div className='imagensSobre'>
            <img src={donoElivro} alt="Dono do sebo" />
            </div>
            </div>
        </div>
    )
}