import React, {useState} from 'react'
import axios from 'axios'
import useValorInput from '../../CustomHooks/useInputValue'

const CriarViagem = () => {

const [nomeInput, onChangeNomeInput] = useValorInput()
const [planetaInput, onChangePlanetaInput] = useValorInput()
const [dataInput, onChangeDataInput] = useValorInput()
const [descricaoInput, onChangeDescricaoInput] = useValorInput()
const [duracaoInput, onChangeDuracaoInput] = useValorInput()

const [novaViagem, setNovaViagem] = useState({})

    const addViagem = () => {
        const body = {
            name: nomeInput,
            planet: planetaInput,
            date: dataInput,
            description: descricaoInput,
            durationInDays: duracaoInput
        }

        const headers = {
            "auth": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1NSGgySXUzc3FBVnFVcEp5eUNjIiwiZW1haWwiOiJlbWVyc29uQGdtYWlsLmNvbSIsImlhdCI6MTYxNTc1NDI5MH0.loCU4kVRk5AJ3ZMHeSyDNMq1tYqs3CUriTzxtj1aTUA'
        }
    
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/emerson-muyembe/trips', body, {
        headers 
    }).then((res) => {
        setNovaViagem(res.data)
        console.log(novaViagem)
    }).catch((err) => {
        alert(err)
    })
}

    

    return(
        <div>
            <input placeholder={'Nome'} value={nomeInput} onChange={onChangeNomeInput}></input>
            <input placeholder={'Planeta'} value={planetaInput} onChange={onChangePlanetaInput}></input>
            <input placeholder={'Data'} value={dataInput} onChange={onChangeDataInput}></input>
            <input placeholder={'Descrição'} value={descricaoInput} onChange={onChangeDescricaoInput}></input>
            <input placeholder={'Duração'} value={duracaoInput} onChange={onChangeDuracaoInput}></input>
            <button onClick={addViagem}>Adicionar viagem</button>
        </div>
    )
}

export default CriarViagem