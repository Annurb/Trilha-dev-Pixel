import Catalogo from "./Catalogo";
import carrinho from './Imagem/carrinho.png'
import search from './Imagem/search.png'
import './Style/Livros.css'

import {data} from './LivrosImagem/1data'
import {data1} from './LivrosImagem/1data'
import {data2} from './LivrosImagem/1data'

import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";
import { useState } from "react";


export default function Livros(){

    const { cart } = useCart();

    const [busca, setBusca] = useState('')

    const totalData = [...data, ...data1, ...data2]

    const resultados = totalData.filter(item => item.name.toLowerCase().includes(busca.toLowerCase()))

/*nota, nao esquecer de mudar o css do search, ele estaa com type search*/
    return(
        <div className='containerLivros' id='livros'>
            <h1>Livros:</h1>
            <div className='pesquisaCarrinho'>
                <div className='inputGroup'>
                    <input type="search" placeholder='Search'
                    value={busca}
                    onChange={(e) =>setBusca(e.target.value)}/>
                    <img src={search} alt="icone search" />
                    </div>
                    <Link
                        to={`/carrinho`}
                        key={"carrinho"}
                        className='cartIcon'
                      >
                <img src={carrinho} alt="carrinho de compras" />
                {cart.length > 0 && (
        <span className="cartCount">{cart.length}</span>
      )}
                </Link>
                </div>
            {busca? (<div>
                <h2>Resultados:</h2>
                {busca &&resultados.length == 0 && (<p>Nenhum livro encontrado</p>)}
                <Catalogo itens={resultados}/>
            </div>):
                       (<div>
            <h2>Romance:</h2>
            <Catalogo itens={data}/>
            <h2>Terror:</h2>
            <Catalogo itens={data1}/>
            <h2>Filosofia: </h2>
            <Catalogo itens={data2}/>
            </div>)}

        </div>
    )
}