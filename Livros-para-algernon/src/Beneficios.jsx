import bene1 from './Imagem/bene1.png'
import bene2 from './Imagem/bene2.png'
import bene3 from './Imagem/bene3.png'
import './Beneficios.css'

export default function Beneficios(){
    return(
        <div className='beneficiosContainer' id='beneficios'>
            <h1 className='tituloBene'>Benefícios:</h1>
            <img  src={bene1} alt="Benefício 1" />
            <img src={bene2} alt="Benefício 2" />
            <img src={bene3} alt="Benefício 3" />
            <h2 className='h2Bene' >Encontre seu estilo:</h2>
            <h2 className='h2Bene'>Frete 0:</h2>
            <h2 className='h2Bene'>Preços:</h2>
            <p className='itensBene'>Temos uma grande variedade de livros e estilos literários, diferente de qualquer outro.</p>
            <p className='itensBene'>Possuímos frete grátis para todas as regiões do Brasil. </p>
            <p className='itensBene'>Temos os melhores preços do mercado, com diversos fornecedores de diferentes lugares.</p>
        </div>
    )
}