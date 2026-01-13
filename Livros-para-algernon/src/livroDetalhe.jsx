import { useParams } from "react-router-dom";
import {data} from './LivrosImagem/1data'
import {data1} from './LivrosImagem/1data'
import {data2} from './LivrosImagem/1data'
import './Style/buttons.css'
import './Style/LivroDetalhe.css'

import {useNavigate} from "react-router-dom";

export default function LivroDetalhe() {
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

  return (
    <div className='livroDetalhe'>
      <div className="detalheEVoltar">
        <h1>Detalhes do livro:</h1>
        <button className='buttonDetalheVoltar' onClick={() => navegar(-1)}>Voltar</button>
      </div>
      <div className="flexDetalhe">
        <div className="imgDetalhe"><img src={acharLivro().image} alt="imagem do livro" /></div>
         <div className="detalheTexto">
           <h1>{acharLivro().name}</h1>
           <h2>{acharLivro().autor}</h2>
           <h3>Capa {acharLivro().capa}</h3>
           <div className='detalheScroll'><p>{acharLivro().sinopse}</p></div>
         </div>
         <div className='linhaDetalhe'></div>
         <div className="precoDetalhe">
           <h2>Por apenas: </h2>
           <h1><span>R$</span>{acharLivro().price}</h1>
           <p>Frete grátis para todo o Brasil a partir de 20 reais</p>
           <div className="buttonAdicionar">
             <button className='adicionarCarrinho' style={{backgroundColor: '#532728'}}>Adicionar ao carrinho</button>
             <button className='adicionarCarrinho' >Comprar agora</button>
      </div>
         </div>
       </div>
    </div>
  );
}