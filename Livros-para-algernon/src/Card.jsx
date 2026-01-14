import './Style/Card.css'
import './Style/buttons.css'

import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";

export default function Card({image, name, autor, capa, price, id}){
    const {addToCart} = useCart()

    return(
    <div className='card'>
    <Link
    to={`/livro/${id}`}
    className='linkCard'
  >
            <div className='cardImg'><img src={image} alt="" /></div>
            <p className='cardNome'>{name}</p>
            <p className='cardAutor'>{autor}</p>
            <p className='cardCapa'>Capa {capa}</p>
            <p className='cardPreco'><span>R$</span>{price}</p>
            </Link>
            <button onClick={()=> addToCart({id, image, name, autor, capa, price})}className='adicionarCarrinho'>Adicionar ao carrinho</button>
            
        </div>
    )
}