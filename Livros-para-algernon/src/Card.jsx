{ /* seção do card para cada livro */ }
import './Style/Card.css'
import './Style/buttons.css'

{ /* import do link para usar as rotas*/ }
import { Link } from "react-router-dom";

{ /* import do useCart para usar a função addToCart do CartContext.jsx */ }
import { useCart } from "./context/CartContext";

export default function Card({image, name, autor, capa, price, id}){
    const {addToCart} = useCart()

    return(
    <div className='card'>
        { /* link para o id, abre a seção de LivroDetalhe.jsx */ }
    <Link
    to={`/livro/${id}`}
    className='linkCard'
  >
        <div className='cardImg'>
            <img src={image} alt="" />
        </div>
            <p className='cardNome'>{name}</p>
            <p className='cardAutor'>{autor}</p>
            <p className='cardCapa'>Capa {capa}</p>
            <p className='cardPreco'><span>R$</span>{price}</p>
    </Link>
        { /* uso do CartContext */ }
        <button onClick={()=> addToCart({id, image, name, autor, capa, price})}className='adicionarCarrinho'>
            Adicionar ao carrinho
        </button>     
        </div>
    )
}