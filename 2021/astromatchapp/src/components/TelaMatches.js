import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MinhaAppBar from './AppBar'
import BotaoResetar from './BotaoResetar'
import styled from 'styled-components'
import { CssBaseline } from '@material-ui/core'

const PerfilMatch = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    width: 100%;
    margin-left: 50px;
img {
    height: 50px;
    width: 50px;
    border-radius: 100px; 
}

p {
    margin-left: 10px;
}
`

const DivAppBar = styled.div`
    width: 380px;
`

const DivMatches = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
` 

const TelaMatches = (props) => {

const [matches, setMatches] = useState([])
     
const carregarMatches = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/emerson-nunes/matches`, {
        headers: {
            "Authorization": "emerson-nunes-muyembe" 
        }
    }).then((res) => {
        setMatches(res.data.matches)
    }).catch((err) => {
    })
}

const resetarMatches = () => {
    axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/emerson-nunes/clear`, {
        headers: {
            "Authorization": "emerson-nunes-muyembe" 
        }
    }).then((res) => {
        alert("Matches resetados!")
    }).catch((err) => {
    })
}

useEffect(() => {
    carregarMatches()
}, [matches])

const listaMatches = matches.map((match) => {
        return <PerfilMatch>
            <img src={match.photo} alt={match.id}></img>
            <p key={match.id}>{match.name}</p>
        </PerfilMatch> 

})

    return(
        <div>
            <CssBaseline/>
                <DivAppBar>
                    <MinhaAppBar
                        onClickPerfis={props.onClickPerfis}                        
                    />
                </DivAppBar>
                <DivMatches>
                    <BotaoResetar
                        resetarMatches={resetarMatches}
                    />
                    {listaMatches}
                </DivMatches>
        </div>
    )
}

export default TelaMatches