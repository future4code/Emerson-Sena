import React, {useState} from 'react'
import axios from 'axios'

const TelaSelecao = (props) => {

    const pegarPerfil = () => {
        
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person', {
        headers: {
            "Authorization": "emerson-nunes-muyembe" 
        }
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}
    return(
        <div>
            <button>{pegarPerfil}</button>
        </div>
    )
}

export default TelaSelecao 