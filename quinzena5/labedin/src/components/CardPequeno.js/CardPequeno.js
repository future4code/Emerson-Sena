import React from 'react'
import './CardPequeno.css'

function CardPequeno(props){
    return (
        <div className="littlecard-container">
            <img src={ props.imagem } />
            <div>
                <p>{ props.informacao }</p>
            </div>
        </div>
    ) 
}

export default CardPequeno;