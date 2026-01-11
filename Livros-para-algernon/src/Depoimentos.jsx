import './Depoimentos.css'
import cliente1 from './Imagem/cliente1.png'
import cliente2 from './Imagem/cliente2.png'
import cliente3 from './Imagem/cliente3.png'
import cliente4 from './Imagem/cliente4.png'
import estrelasNota from './Imagem/estrelasNota.png'
import CardsDepo from './CardsDepo'


export default function Depoimentos(){
    return(
        <div className='containerDepoimentos' id='depoimentos'>
            <h1 className='tituloDepo'>Depoimentos: </h1>
            <h2 className='h2Depo'>Leia o que nossos clientes dizem</h2>
            <CardsDepo nome='Ana S.' texto='O Livros para Algernon é o meu refúgio favorito. A curadoria é impecável e sempre encontro edições raras que parecem ter sido escolhidas a dedo para mim. É mais que um sebo, é uma experiência literária.' imagemCliente={cliente1} nota={estrelasNota}/>
            <CardsDepo cor='#F2EFCE' nome='Marcos V.' texto='O atendimento é extremamente atencioso e o estado de conservação dos livros me surpreendeu. Recebi meu pedido rápido e com um cuidado que raramente vejo em grandes livrarias. Recomendo de olhos fechados!' imagemCliente={cliente2} nota={estrelasNota}/>
            <CardsDepo cor='#F2EFCE' nome='Lucas R.' texto='Encontrei títulos que procurava há anos! O Livros para Algernon já virou minha primeira parada antes de comprar qualquer livro novo.' imagemCliente={cliente3} nota={estrelasNota}/>
            <CardsDepo nome='Beatriz L.' texto='Adoro como o sebo resgata histórias esquecidas. Comprei uma edição antiga com uma dedicatória linda e senti que herdei um tesouro. Preços justos e um acervo que realmente valoriza a literatura.' imagemCliente={cliente4} nota={estrelasNota}/>
        </div>
    )
}