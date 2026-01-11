import Catalogo from "./Catalogo";
import carrinho from './Imagem/carrinho.png'
import search from './Imagem/search.png'
import './Livros.css'

import {data} from './LivrosImagem/1data'
import {data1} from './LivrosImagem/1data'
import {data2} from './LivrosImagem/1data'

export default function Livros(){
    return(
        <div className='containerLivros' id='livros'>
            <h1>Livros:</h1>
            <div className='pesquisaCarrinho'>
                <div className='inputGroup'>
                    <input type="search" placeholder='Search'/>
                    <img src={search} alt="icone search" />
                    </div>
                <img src={carrinho} alt="carrinho de compras" />
            </div>
            <h2>Romance:</h2>
            <Catalogo itens={data}/>
            <h2>Terror:</h2>
            <Catalogo itens={data1}/>
            <h2>Filosofia: </h2>
            <Catalogo itens={data2}/>
            

        </div>
    )
}