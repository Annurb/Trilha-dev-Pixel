import quotes from './Imagem/quotes.png'

export default function CardsDepo({cor='#F3DDB6',nome='Desconhecido', texto, imagemCliente, nota}){
    return(
        <div className='cardDepo' style={{backgroundColor:cor}}>
            <img className='colunaDepo aspas' src={quotes} alt="Aspas" />
            <p className='colunaDepo texto textoCliente' >{texto}</p>
            <div className="fotoNota">
                <img className='linhaDepo textoCliente' src={imagemCliente} alt="Cliente" />
                <div className="notaCliente">
                    <h2 className='nomeNota nomeCliente'>{nome}</h2>
                    <img className='nomeNota nota'src={nota} alt="Nota" />
                </div>
            </div>
            
        </div>
    )
}