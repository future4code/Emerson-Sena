import React from 'react'
import Button from '@material-ui/core/Button'
import {DivBotoes} from './styles'
import {useHistory} from 'react-router-dom'

const PaginaInicial = () => {
    const history = useHistory()

    const areaAdm = () => {
        history.push('/login')
    }

    const candidato = () => {
        history.push('/form-inscricao')
    }

    const viagens = () => {
        history.push("/viagens/lista")
    }

    return(
        <DivBotoes>
            <h1>LabeX</h1>
            <Button onClick={areaAdm} variant="contained" color="secondary">Area Administrativa</Button>
            <Button onClick={candidato} variant="contained" color="secondary">Candidatar-se a uma viagem</Button>
            <Button onClick={viagens} variant="contained" color="secondary">Ver todas as viagens</Button>
        </DivBotoes>
    )
}

export default PaginaInicial