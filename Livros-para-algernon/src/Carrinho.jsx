{ /* import do componente para mostrar os detahes e preços */ }
import TabelaProduto from './TabelaProduto'

import './Style/Carrinho.css'

{ /* import do useCart para as funções do carrinho(atualização de quantidade, total, etc) */ }
import { useCart } from "./context/CartContext";


{ /* import da função useNavigate para voltar à página anterior */ }
import {useNavigate} from "react-router-dom";

export default function Carrinho(){

    { /* criação da função */ }
    const navegar = useNavigate();

    { /* uso do useCart para passar todas as funções exportadas pelo context */ }
    const {cart, removeFromCart, total, addToCart, subQuantity, totalFinal, totalItem, removeCart} = useCart()

    return(
      <div className='containerCarrinho'>

          <div className="containerCarrinhoVoltar">
            <h1>Seu carrinho:</h1>
            <button className='buttonDetalheVoltar' onClick={() => navegar(-1)}>Voltar</button>
          </div>

          <main>
          <div className='content'>
              <section>
              <table>
              <thead>
                  <tr>
                      <th>PRODUTO</th>
                      <th>PREÇO</th>
                      <th>QUANTIDADE</th>
                      <th>TOTAL</th>
                      <th>-</th>
                  </tr>
                  </thead>

          { /* seção com os itens do carrinho */ }
          <tbody>
            {cart.length === 0 && (
          <tr>
            <td colSpan="5" style={{ textAlign: 'center' }}>
              Carrinho de compras vazio
            </td>
          </tr>
        )}

        {cart.map(item => (
          <TabelaProduto key={item.id} item={item} onRemove={removeFromCart} addCart = {addToCart} subCart = {subQuantity} totalItem={totalItem(item)} />
        ))}
        </tbody>
        </table>

         { /* botão limpar carrinho */ }
        <button className='adicionarCarrinho' onClick = {removeCart}>Limpar carrinho</button>

         { /* seção com as informação finais*/ }
      </section>                    
      <aside>
      <div className='caixa'>
      <header>Resumo da compra</header>
      <div className='info'>
        <div>
          <span>Sub-total</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
        <div>
          <span>Frete</span>
          <span>{totalFinal == total?'Grátis':'15,00'}</span>
        </div>
      </div>
      <footer>
        <span>Total</span>
        <span>R$ {totalFinal.toFixed(2)}</span>
      </footer>
    </div>
    <button className='buttonChamada'>Finalizar Compra</button>
    </aside>
              
          </div>
          </main>
      </div>
    )
}