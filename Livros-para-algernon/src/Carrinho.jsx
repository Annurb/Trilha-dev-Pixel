import TableRow from './TableRow'
import './Style/Carrinho.css'
import { useState } from 'react';
import { useCart } from "./context/CartContext";

import {useNavigate} from "react-router-dom";

export default function Carrinho(){
    const navegar = useNavigate();

    const {cart, removeFromCart, total, addToCart, subQuantity, totalFinal, totalItem, removeCart} = useCart()

    return(
        <div className='containerCarrinho'>
            <h1>Seu carrinho:</h1>
            <button className='buttonDetalheVoltar' onClick={() => navegar(-1)}>Voltar</button>
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
                    <tbody>
                         {cart.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>
                Carrinho de compras vazio
              </td>
            </tr>
          )}

          {cart.map(item => (
            <TableRow key={item.id} item={item} onRemove={removeFromCart} addCart = {addToCart} subCart = {subQuantity} totalItem={totalItem(item)} />
          ))}
                    </tbody>
                    </table>
                    </section>
                    <button onClick = {removeCart}>Limpar carrnho</button>
                    <aside>

        <div className='box'>
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
      <button>Finalizar Compra</button>
                    </aside>
                
            </div>
           </main>
        </div>
    )
}