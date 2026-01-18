{ /* import das ferramentas para gerenciar o estado */ }
import { createContext, useContext, useState } from 'react'

{ /* criação do espaço para os dados */ }
const CartContext = createContext()

{ /* exportação do componente com o props para que todos os componentes filhos sejam renderizados pelo provider */ }
export function CartProvider({ children }) {

  const [cart, setCart] = useState([])

  { /* funções do carrinho */ }
  const addToCart = (product) => {
    setCart(prevCart => {
    const itemExistente = prevCart.find(
      item => item.id === product.id
    )
    if(itemExistente){
      return prevCart.map(item => item.id === product.id? {...item, quantity:item.quantity+1}:item)
    }

    return [...prevCart, {...product, quantity:1}]
  })
  }

  const subQuantity = (product) => {
    setCart(prevCart => {
      const itemAchado = prevCart.find(
        item => item.id === product.id)
        if(itemAchado.quantity>1){
          return prevCart.map(item =>item.id === product.id?{...item, quantity:item.quantity-1}:item)
        }
        else{
          return prevCart.filter(item =>item.id !== itemAchado.id)
        }
    })
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item =>item.id !== id))
  }

  const totalItem = (product) =>{
        return Number(product.price.replace(',','.'))*product.quantity
  }

  const total = cart.reduce((acc, item) => acc+Number(item.price.replace(',','.'))*item.quantity, 0)

  let totalFinal = 0 

  if (total <=20 && total !== 0 ){
    totalFinal = total + 15;
  }
  else{
      totalFinal=total
  }

  const removeCart = () => {setCart([])}

  { /* export de todas as funções */ }
  return (
    
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total, subQuantity, totalFinal, totalItem, removeCart}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
