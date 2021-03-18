import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import {DivDetalhes} from './styles'
import usePaginaProtegida from '../CustomHooks/usePaginaProtegida'

const DetalhesViagem = () => {
    const [detalhesViagem, setDetalhesViagem] = useState({})
   /*  const [candidato, setCandidato] = useState([]) */
    
    const params = useParams()

    usePaginaProtegida()
    useEffect(() => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/emerson-muyembe/trip/${params.viagemId}`, {
            headers: {
                auth: window.localStorage.getItem("Token")
            }
        })
        .then((res) => {
            setDetalhesViagem(res.data.trip)
    
        }).catch((err) => {
            console.log(err)
        })
    }, [params])

    return(
        <DivDetalhes>
            <p>Nome: {detalhesViagem.name}</p>
            <p>Planeta: {detalhesViagem.planet}</p>
            <p>Descrição: {detalhesViagem.description}</p>
            <p>Data: {detalhesViagem.date}</p>
            <p>Duração: {detalhesViagem.durationInDays} dias</p>
        </DivDetalhes>
    )
}

export default DetalhesViagem