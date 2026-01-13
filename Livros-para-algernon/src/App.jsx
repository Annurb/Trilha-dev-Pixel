import './Style/App.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Sobre from './sobre'
import Beneficios from './Beneficios'
import Depoimentos from './Depoimentos'
import Contato from './Contato'
import Footer from './Footer'
import Livros from './Livros'
import Card from './Card'
import bomdiave from './LivrosImagem/Bom dia, verônica.webp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from './Components';
import LivroDetalhe from "./livroDetalhe";
import Carrinho from './Carrinho';

function App() {

  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Components />} />
        <Route path="/livro/:id" element={<LivroDetalhe />} />
        <Route path="/Carrinho" element={<Carrinho />} />
      </Routes>
      </BrowserRouter>

   </>
  )
}

export default App
