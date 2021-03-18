import React from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { DivLogin } from './styles'
import useValorInput from '../CustomHooks/useInputValue'

const PaginaLogin = () => {
    const [emailInput, onChangeEmail] = useValorInput()
    const [senhaInput, onChangeSenha] = useValorInput()

    const history = useHistory()
    
    const login = () => {
        const body = {
        "email": emailInput,
        "password": senhaInput
        }
    
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/emerson-muyembe/login', body)
        .then((res) => {
            window.localStorage.setItem("Token", res.data.token)
            history.replace('/adm')
        })
    }

    return(
        <DivLogin>
                <input type="email" value={emailInput} onChange={onChangeEmail} required></input>
                <input type="password" value={senhaInput} onChange={onChangeSenha} required></input>
                <button onClick={login}>Entrar</button>
        </DivLogin>
    )
}

export default PaginaLogin