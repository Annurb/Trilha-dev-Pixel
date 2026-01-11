import './Card.css'
import './buttons.css'

export default function Card({image, name, autor, capa, price}){
    return(
        <div className='card'>
            <div className='cardImg'><img src={image} alt="" /></div>
            <p className='cardNome'>{name}</p>
            <p className='cardAutor'>{autor}</p>
            <p className='cardCapa'>Capa {capa}</p>
            <p className='cardPreco'><span>R$</span>{price}</p>
            <button className='adicionarCarrinho'>Adicionar ao carrinho</button>
            
        </div>
    )
}