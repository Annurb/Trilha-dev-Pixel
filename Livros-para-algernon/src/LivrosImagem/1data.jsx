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
import bomDiaVero from './Bom dia, Verônica.webp'
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
        id: uuid(),
        image: aRainhaVermelha,
        name:'A rainha vermelha', 
        autor: 'Victoria Aveyard', 
        capa:'comum',
        price:'20,45'
    },
    {
        id: uuid(),
        image: quinzeDias,
        name:'Quinze dias', 
        autor: 'Victor Martins', 
        capa:'comum', 
        price: '10,99'
    },
        {
        id: uuid(),
        image: oCacador,
        name:'O caçador de pipas', 
        autor: 'Khaled Hosseini', 
        capa:'comum', 
        price: '15,50'
    },
    {
        id: uuid(),
        image: lendarios,
        name:'Lendários', 
        autor: 'Tracy Deonn', 
        capa:'comum', 
        price: '21,45'
    },
        {
        id: uuid(),
        image: sombraEOssos,
        name:'Sombra e ossos', 
        autor: 'Leigh Bardugo', 
        capa:'comum', 
        price: '12,99'
    },
        {
        id: uuid(),
        image: eAssimQueAcaba,
        name:'É assim que acaba', 
        autor: 'Collen Hoover', 
        capa:'comum', 
        price: '15,99'
    },
    
    
]
export const data1 = [
    /*suspense e terror */
            {
        id: uuid(),
        image: oQueAconteceuComAnnie,
        name:'O que aconteceu Com Annie', 
        autor: 'C.J Tudor', 
        capa:'dura', 
        price: '27,90'
    },
    {
        id: uuid(),
        image: saborAmargo,
        name:'Sabor Amargo', 
        autor: 'James Hannahan', 
        capa:'dura', 
        price: '32,90'
    },
    {
        id: uuid(),
        image: oColecionador,
        name:'O colecionador', 
        autor: 'John Fewles', 
        capa:'dura', 
        price: '30,00'
    },
    {
        id: uuid(),
        image: bomDiaVero,
        name:'Bom dia, Verônica', 
        autor: 'Raphael Montes', 
        capa:'comum', 
        price: '22,50'
    },
        {
        id: uuid(),
        image: diasPerfeitos,
        name:'Dias perfeitos', 
        autor: 'Raphael Montes', 
        capa:'comum', 
        price: '21,00'
    },
   
]
export const data2 = [
 /*ciencia e filosofia */
            {
        id: uuid(),
        image: brevesRespostas,
        name:'Breves respostas para grandes questôes', 
        autor: 'Stephen hawking', 
        capa:'dura', 
        price: '33,99'
    },
                {
        id: uuid(),
        image: humanoDemasiado,
        name:'Humano, demasiado humano', 
        autor: 'Nietsche', 
        capa:'comum', 
        price: '05,50'
    },
                    {
        id: uuid(),
        image: cosmos,
        name:'Cosmos', 
        autor: 'Carl Sagan', 
        capa:'comum', 
        price: '28,50'
    },
                        {
        id: uuid(),
        image: oContratoSocial,
        name:'O contrato social', 
        autor: 'Rosseau', 
        capa:'comum', 
        price: '08,50'
    }

    
]