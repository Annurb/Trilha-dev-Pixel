import Catalogo from "./Catalogo";
import carrinho from './Imagem/carrinho.png'
import search from './Imagem/search.png'
import './Style/Livros.css'

 { /* import da base de dados */ }
import {data} from './LivrosImagem/1data'
import {data1} from './LivrosImagem/1data'
import {data2} from './LivrosImagem/1data'

 { /* import do link para navegar nas paginas */ }
import { Link } from "react-router-dom";

 { /* uso do cartContext para as funções do carrinho/livros*/ }
import { useCart } from "./context/CartContext";

import { useState } from "react";

export default function Livros(){

    const { cart } = useCart();

     { /* useState para buscar livros*/ }
    const [busca, setBusca] = useState('')

    const totalData = [...data, ...data1, ...data2]

     { /* resultados da busca */ }
    const resultados = totalData.filter(item => item.name.toLowerCase().includes(busca.toLowerCase()))

    return(
        <div className='containerLivros' id='livros'>

            <h1>Livros:</h1>

            <div className='pesquisaCarrinho'>
                <div className='inputGroup'>
                    <input type="text" placeholder='Search'
                    value={busca}
                    onChange={(e) =>setBusca(e.target.value)}/>
                    <img src={search} alt="icone search" />
                </div>

                 { /* link que leva ao carrinho */ }
                <Link
                    to={`/carrinho`}
                    key={"carrinho"}
                    className='cartIcon'>
                        
                <img src={carrinho} alt="carrinho de compras" />

                { /* span para a quantidade de itens com id diferentes no carrinho */ }
                {cart.length > 0 && (
                <span className="cartCount">
                    {cart.length}
                </span>
            )}
                </Link>

                </div>

                 { /* resultados da busca (caso aja) */ }
            {busca? (<div>
                <h2>Resultados:</h2>
                {busca &&resultados.length == 0 && (<p>Nenhum livro encontrado</p>)}
                <Catalogo itens={resultados}/>
            </div>):
            (<div>
            <h2>Romance/ Fantasia:</h2>
            <Catalogo itens={data}/>
            <h2>Terror/ Suspense:</h2>
            <Catalogo itens={data1}/>
            <h2>Filosofia/ Estudos: </h2>
            <Catalogo itens={data2}/>
            </div>)}

        </div>
    )
}