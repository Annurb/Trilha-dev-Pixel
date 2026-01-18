/*Fantasia ficcao e romance */
import aRainhaVermelha from './A rainha vermelha.webp'
import quinzeDias from './Quinze dias.webp'
import oCacador from './O caçador de pipas.webp'
import lendarios from './Lendários.webp'
import sombraEOssos from './Sombra e ossos.webp'
import eAssimQueAcaba from './É assim que acaba.webp'

/*Suspense e terror */
import oColecionador from './O colecionador.webp'
import oQueAconteceuComAnnie from './O que aconteceu com annie.webp'
import saborAmargo from './Sabor amargo.webp'
import bomDiaVero from './Bom dia, verônica.webp'
import diasPerfeitos from './Dias perfeitos.webp'

/*Ciencia e filosofia */
import brevesRespostas from './Breves respostas para grandes questões.webp'
import humanoDemasiado from './Humano, demasiado humano.webp'
import cosmos from './Cosmos.webp'
import oContratoSocial from './O contrato social.webp'

import {v4 as uuid} from 'uuid'
export const data = [
    /*Fantasia, ficcao e romance */
     {
        id: 'rainha-vermelha',
        image: aRainhaVermelha,
        name:'A rainha vermelha', 
        autor: 'Victoria Aveyard', 
        capa:'comum',
        price:'20,45',
        sinopse: 'Em um mundo dividido pelo sangue — vermelhos pobres e prateados com poderes — Mare Barrow, uma garota comum, descobre habilidades impossíveis para alguém de sua classe. Forçada a viver na corte, ela se envolve em jogos de poder, traições e uma rebelião que pode mudar todo o reino.'
    },
    {
        id: 'quinze-dias',
        image: quinzeDias,
        name:'Quinze dias', 
        autor: 'Victor Martins', 
        capa:'comum', 
        price: '10,99',
        sinopse: 'Quinze Dias é um romance jovem-adulto de Vitor Martins que acompanha Felipe, um adolescente tímido e inseguro que passa as férias em casa. Seus planos mudam quando Caio, seu antigo melhor amigo e primeiro amor, vai se hospedar com ele por quinze dias. Entre conversas, lembranças e conflitos internos — especialmente sobre autoestima e aceitação —, Felipe enfrenta sentimentos guardados e a chance de se reconectar consigo mesmo e com Caio.'
    },
        {
        id: 'o-cacador-de-pipas',
        image: oCacador,
        name:'O caçador de pipas', 
        autor: 'Khaled Hosseini', 
        capa:'comum', 
        price: '15,50',
        sinopse:'A história acompanha Amir e Hassan, dois garotos no Afeganistão, unidos por amizade e separados por culpa e diferenças sociais. Após uma traição que marca suas vidas, Amir passa anos tentando encontrar redenção em meio às transformações de seu país.'
    },
    {
        id: 'lendarios',
        image: lendarios,
        name:'Lendários', 
        autor: 'Tracy Deonn', 
        capa:'comum', 
        price: '21,45',
        sinopse:'Após a morte da mãe, Bree Matthews descobre uma sociedade secreta ligada à lenda do Rei Arthur. Ao se infiltrar nesse mundo mágico, ela busca respostas sobre seu passado enquanto enfrenta forças sobrenaturais, segredos antigos e seu próprio luto.'
    },
        {
        id: 'sombra-e-ossos',
        image: sombraEOssos,
        name:'Sombra e ossos', 
        autor: 'Leigh Bardugo', 
        capa:'comum', 
        price: '12,99', 
        sinopse: 'Alina Starkov descobre ser uma Grisha rara, capaz de invocar luz, em um mundo dominado pela Dobra das Sombras. Seu poder pode ser a única esperança do reino — mas também a coloca no centro de intrigas perigosas e escolhas difíceis.'
    },
        {
        id: 'e-assim-que-acaba',
        image: eAssimQueAcaba,
        name:'É assim que acaba', 
        autor: 'Collen Hoover', 
        capa:'comum', 
        price: '15,99',
        sinopse:'Lily acredita ter encontrado o amor ideal, mas aos poucos percebe que nem tudo é o que parece. O livro aborda relações abusivas, escolhas dolorosas e a força necessária para romper ciclos, misturando romance e reflexões profundas.'
    },
    
    
]
export const data1 = [
    /*suspense e terror */
            {
        id: 'o-que-aconteceu-com-annie',
        image: oQueAconteceuComAnnie,
        name:'O que aconteceu Com Annie', 
        autor: 'C.J Tudor', 
        capa:'dura', 
        price: '27,90', 
        sinopse: 'Anos após um evento traumático da infância, segredos enterrados começam a ressurgir quando uma antiga brincadeira ganha contornos sombrios. A narrativa alterna passado e presente, revelando verdades perturbadoras.'
    },
    {
        id: 'sabor-amargo',
        image: saborAmargo,
        name:'Sabor Amargo', 
        autor: 'James Hannahan', 
        capa:'dura', 
        price: '32,90', 
        sinopse:'Um suspense psicológico intenso que explora violência, desejo e poder. A história mergulha em relações tóxicas e situações extremas, levando o leitor a questionar limites morais e humanos.'
    },
    {
        id: 'o-colecionador',
        image: oColecionador,
        name:'O colecionador', 
        autor: 'John Fewles', 
        capa:'dura', 
        price: '30,00', 
        sinopse:'Frederick, um homem solitário, sequestra Miranda acreditando que pode fazê-la amá-lo. Narrado sob diferentes pontos de vista, o livro é um estudo perturbador sobre obsessão, controle e liberdade.'
    },
    {
        id: 'bom-dia-veronica',
        image: bomDiaVero,
        name:'Bom dia, Verônica', 
        autor: 'Raphael Montes', 
        capa:'comum', 
        price: '22,50', 
        sinopse:'Verônica, uma escrivã da polícia, decide investigar crimes por conta própria e acaba se envolvendo em casos chocantes de violência doméstica e corrupção. Um thriller brasileiro tenso e impactante.'
    },
        {
        id: 'dias-perfeitos',
        image: diasPerfeitos,
        name:'Dias perfeitos', 
        autor: 'Raphael Montes', 
        capa:'comum', 
        price: '21,00', 
        sinopse: 'Teo, um estudante de medicina, se apaixona obsessivamente por Clarice e decide sequestrá-la para viver um “romance perfeito”. A história mistura suspense psicológico com uma narrativa fria e perturbadora.'
    },
   
]
export const data2 = [
 /*ciencia e filosofia */
            {
        id: 'breves-respostas-para-grandes-questoes',
        image: brevesRespostas,
        name:'Breves respostas para grandes questôes', 
        autor: 'Stephen hawking', 
        capa:'dura', 
        price: '33,99', 
        sinopse:'Stephen Hawking discute perguntas fundamentais sobre o universo, Deus, o futuro da humanidade e a ciência. O livro apresenta reflexões profundas de forma acessível e instigante.'
    },
                {
        id: 'humano-demasiado-humano',
        image: humanoDemasiado,
        name:'Humano, demasiado humano', 
        autor: 'Nietsche', 
        capa:'comum', 
        price: '05,50', 
        sinopse:'Uma obra filosófica composta por aforismos que questionam moral, religião, cultura e valores humanos. Nietzsche propõe uma análise crítica da sociedade e da condição humana.'
    },
                    {
        id: 'cosmos',
        image: cosmos,
        name:'Cosmos', 
        autor: 'Carl Sagan', 
        capa:'comum', 
        price: '28,50',
        sinopse: 'Uma viagem fascinante pelo universo, explorando ciência, astronomia e a história da humanidade. Carl Sagan conecta conhecimento científico com reflexões sobre nosso lugar no cosmos.'
    },
                        {
        id: 'o-contrato-social',
        image: oContratoSocial,
        name:'O contrato social', 
        autor: 'Rosseau', 
        capa:'comum', 
        price: '08,50', 
        sinopse:'Rousseau discute a origem da sociedade e do poder político, defendendo que a autoridade legítima vem da vontade coletiva. Uma obra fundamental da filosofia política moderna.'
    }

    
]