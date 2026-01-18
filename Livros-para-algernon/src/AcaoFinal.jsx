{ /*componente acao final*/}
import './Style/buttons.css'
import './Style/AcaoFinal.css'

export default function AcaoFinal(){
    return(
        <div className='containerAcaoFinal'>
            <h2>Faça parte dessa ação</h2>
            <p>Não se esqueça e obtenha seu livro agora: </p>
            <a href="#livros"><button className='buttonChamada'>Compre agora</button></a>
        </div>
    )
}