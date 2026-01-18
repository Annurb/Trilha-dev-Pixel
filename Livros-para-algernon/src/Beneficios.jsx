{ /* seção de beneficios */ }
import bene1 from './Imagem/bene1.png'
import bene2 from './Imagem/bene2.png'
import bene3 from './Imagem/bene3.png'
import './Style/Beneficios.css'

export default function Beneficios(){
    
    return(
        <div className='beneficiosContainer' id='beneficios'>
            <h1 className='tituloBene'>Benefícios:</h1>
            <section className="beneficios">
                <img  src={bene1} alt="Benefício 1" />
                <h2 className='h2Bene' >Encontre seu estilo:</h2>
                <p className='itensBene'>Temos uma grande variedade de livros e estilos literários, diferente de qualquer outro.</p>
            </section>
            <section className="beneficios">
                <img src={bene2} alt="Benefício 2" />
                <h2 className='h2Bene'>Frete 0:</h2>
                <p className='itensBene'>Possuímos frete grátis para todas as regiões do Brasil em compras a partir de 20 reais. </p>
            </section>
            <section className="beneficios">
                <img src={bene3} alt="Benefício 3" />
                <h2 className='h2Bene'>Preços:</h2>
                <p className='itensBene'>Temos os melhores preços do mercado, com diversos fornecedores de diferentes lugares.</p>
            </section>
        </div>
    )
}