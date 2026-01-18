import './Style/App.css'

/* import para o uso de rotas para entrar em outra página ao clicar*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

{ /* importação do cartProvider para gerenciar e compartilhar o estado do carrinho em diferentes páginas*/ }
import { CartProvider } from "./context/CartContext";

/* componentes para as rotas */
import Components from './Components';
import LivroDetalhe from "./LivroDetalhe";
import Carrinho from './Carrinho';

function App() {

  return (
      <BrowserRouter>
      <CartProvider>
      <Routes>       
         { /* rota principal */ }
        <Route path="/" element={<Components />} />
         { /* rota para os cada livro ao clicar no card */ }
        <Route path="/livro/:id" element={<LivroDetalhe />} />
         { /* rota para o carrinho */ }
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
      </CartProvider>
      </BrowserRouter>

  )
}

export default App
