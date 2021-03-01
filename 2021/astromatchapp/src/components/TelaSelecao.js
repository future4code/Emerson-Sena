import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CardPerfil from './CardPerfil'
import MinhaAppBar from './AppBar'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components'
import { CssBaseline } from '@material-ui/core';

const DivBotoes = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center; 
    margin-top: 10px; 
    background-color: #9fa8da;  
`

const DivAppBar = styled.div`
    width: 380px;
`

const DivCardPerfil = styled.div`
    margin-top: 10px;
`

const DivTela = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

/* const DivBotoes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 80px;
    width: 80px;
    border: 2px #f50057 solid;
    border-radius: 100px;
` */

const TelaSelecao = (props) => {

    const [idPerfil, setIdPerfil] = useState("")
    const [imagemPerfil, setImagemPerfil] = useState("")
    const [nomePerfil, setNomePerfil] = useState("")
    const [idadePerfil, setIdadePerfil] = useState("")
    const [bioPerfil, setBioPerfil] = useState("")
    const [estadoEscolha, setEstadoEscolha] = useState(true)
    const [mudancaPerfil, setMudancaPerfil] = useState(0)
 

const botaoLike = () => { 
    setEstadoEscolha(true)
    deuMatch()
    setMudancaPerfil(mudancaPerfil + 1)
}
    
    
const botaoDeslike = () => {
    setEstadoEscolha(false)
    deuMatch()
    setMudancaPerfil(mudancaPerfil + 1)
}    
    
    
const pegarPerfil = () => {
    
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/emerson-nunes/person`, {
        headers: {
            "Authorization": "emerson-nunes-muyembe" 
        }
    }).then((res) => {
        setIdPerfil(res.data.profile.id)
        setNomePerfil(res.data.profile.name)
        setIdadePerfil(res.data.profile.age)
        setBioPerfil(res.data.profile.bio)
        setImagemPerfil(res.data.profile.photo)
    }).catch((err) => {
        console.log(err)
    })
}

const deuMatch = () => {
    
    const body = {
        "id": idPerfil,
        "choice": estadoEscolha
    }

    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/emerson-nunes/choose-person`, body, {
        headers: {
            "Authorization": "emerson-nunes-muyembe" 
        }
    }).then((res) => {
        if(res.data.isMatch === true){
            alert("Deu match!!!")
        }
    }).catch((err) => {
        console.log(err)
    })
}

useEffect(() => {
    pegarPerfil()
}, [mudancaPerfil])

    return(
        <DivTela>
            <CssBaseline/>
            <DivAppBar>
                <MinhaAppBar
                    onClickMatches={props.onClickMatches}
                    janelaRend={props.janelaRend}
                />
            </DivAppBar>
            <DivCardPerfil>
            <CardPerfil 
                nomePerfil={nomePerfil}
                idadePerfil={idadePerfil}
                imagemPerfil={imagemPerfil}
                bioPerfil={bioPerfil}
            />
            </DivCardPerfil>
            <DivBotoes>
                <FavoriteIcon 
                    color="secondary"
                    style={{ fontSize: 85 }}
                    onClick={botaoLike}
                />
                <CloseIcon
                    color="primary"
                    style={{ fontSize: 100 }}
                    onClick={botaoDeslike}
                />
            </DivBotoes>
        </DivTela>
    )
}

export default TelaSelecao 