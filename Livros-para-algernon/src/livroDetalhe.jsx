import { useParams } from "react-router-dom";
import {data} from './LivrosImagem/1data'
import {data1} from './LivrosImagem/1data'
import {data2} from './LivrosImagem/1data'
import './Style/buttons.css'
import './Style/LivroDetalhe.css'
import { Link } from "react-router-dom";

import { useCart } from "./context/CartContext";

import {useNavigate} from "react-router-dom";

import {useContext} from 'react'

import {useState} from 'react'

export default function LivroDetalhe() {
  const[adicionado, setAdicionado] = useState(false)

  const { id } = useParams();

  const navegar = useNavigate();

  const acharLivro = () =>{
    const livro1 = data.find((l) => l.id ===id)
    const livro2 = data1.find((l) => l.id ===id)
    const livro3 = data2.find((l) => l.id ===id)
    if (livro1){
      return livro1
    }
    else if (livro2){
      return livro2
    }
    else{
      return livro3
    }
  }
  const Name = acharLivro().name
  const Image = acharLivro().image
  const Id = acharLivro().id
  const Autor = acharLivro().autor
  const Capa = acharLivro().capa
  const Sinopse = acharLivro().sinopse
  const Price = acharLivro().price

  const { addToCart } = useCart();

  function handleBuyNow(){
    addToCart({id:Id, image:Image,name: Name, autor:Autor, capa:Capa,price: Price})
    navegar('/carrinho')
  }

  return (
    <div className='livroDetalhe'>
      <div className="detalheEVoltar">
        <h1>Detalhes do livro:</h1>
        <button className='buttonDetalheVoltar' onClick={() => navegar(-1)}>Voltar</button>
      </div>
      <div className="flexDetalhe">
        <div className="imgDetalhe"><img src={Image} alt="imagem do livro" /></div>
         <div className="detalheTexto">
           <h1>{Name}</h1>
           <h2>{Autor}</h2>
           <h3>Capa {Capa}</h3>
           <div className='detalheScroll'><p>{Sinopse}</p></div>
         </div>
         <div className='linhaDetalhe'></div>
         <div className="precoDetalhe">
           <h2>Por apenas: </h2>
           <h1><span>R$</span>{Price}</h1>
           <p>Frete grátis para todo o Brasil a partir de 20 reais</p>

           <div className="buttonAdicionar">

             <button className='adicionarCarrinho adicionar' onClick={()=> {addToCart({id:Id, image:Image,name: Name, autor:Autor, capa:Capa,price: Price});
            setAdicionado(true);
            setTimeout(() => {
              setAdicionado(false);
            }, 2000)
            }}>Adicionar ao carrinho</button>
             {adicionado && (
              <p className='mensagemCarrinho'> Livro adicionado ao carrinho!</p>
             )}
             <button onClick = {handleBuyNow} className='adicionarCarrinho' >Comprar agora</button>
      </div>
         </div>
       </div>
    </div>
  );
}