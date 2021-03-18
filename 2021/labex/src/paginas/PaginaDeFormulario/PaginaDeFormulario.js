import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { DivForm } from './styles'

const PaginaDeFormulario = () => {
    const [viagens, setViagens] = useState([])
    const [form, setForm] = useState({
        nome: "",
        idade: 0,
        textoAplicacao: "",
        profissao: "",
        pais: "",
        viagem: null
    })

    const onChangeForm = (event) => {
        const novoValor = event.target.value
        const nomeCampo = event.target.name

        setForm({...form, [nomeCampo]: novoValor})
    }

    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/emerson-muyembe/trips')
        .then((res) => {
            setViagens(res.data.trips)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(form)

    const inscricaoViagem = () => {
        const body = {
            name: form.nome,
            age: form.idade,
            applicationText: form.textoAplicacao,
            profession: form.profissao,
            country: form.pais
        }
    
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/emerson-muyembe/trips/${form.viagem}/apply`, body)
        .then((res) => {
            alert("Inscrito! Aguarde a aprovação.")
        }).catch((err) => {
            console.log(err)
        })
    }
    return(
        <DivForm>     
            <input placeholder="Nome" name={'nome'} value={form['nome']} onChange={onChangeForm}></input>
            <input placeholder="Idade" name={'idade'} value={form['idade']} onChange={onChangeForm}></input>
            <input placeholder="Texto de aplicação" name={'textoAplicacao'} value={form['textoAplicacao']} onChange={onChangeForm}></input>
            <input placeholder="Profissão" name={'profissao'} value={form['profissao']} onChange={onChangeForm}></input>
            <input placeholder="País" name={'pais'} value={form['pais']} onChange={onChangeForm}></input>
            <select name={'viagem'} value={form['viagem']} onChange={onChangeForm} >
                {viagens.map((viagem) => {return <option key={viagem.id} value={viagem.id}>{viagem.name}</option>})}
            </select>
            <button onClick={inscricaoViagem}>Inscrever-se</button>
        </DivForm>   
    )
}

export default PaginaDeFormulario