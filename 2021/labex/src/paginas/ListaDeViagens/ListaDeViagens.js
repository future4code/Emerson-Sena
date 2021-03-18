import React from 'react'
import { useHistory } from 'react-router'
import useRequestData from '../CustomHooks/useRequestData'
import {DivViagens} from './styles'

const ListaDeViagens = () => {
    const history = useHistory()

    const viagens = useRequestData(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/emerson-muyembe/trips', []
    )
    
    /* const detalhesViagem = () => {
        history.push(`/viagens/detalhes/${}`)
    } */

    return(
        <div>
        {viagens.map((viagem) => {
            const onClickDetalhes = () => {
                history.push(`/viagens/lista/${viagem.id}`)
            }
            return <DivViagens onClick={onClickDetalhes}>
                <p key={viagem.id}>{viagem.name}</p>
            </DivViagens>
        })}
        </div>
    )
}

export default ListaDeViagens