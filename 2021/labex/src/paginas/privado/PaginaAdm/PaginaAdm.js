import React from 'react'
import Button from '@material-ui/core/Button'
import {DivAdm} from './styles'
import {useHistory} from 'react-router-dom'
import usePaginaProtegida from '../../CustomHooks/usePaginaProtegida'


const PaginaAdm = () => {
    const history = useHistory()
    usePaginaProtegida()

    const addViagem = () => {
        history.push("/viagens/criar")
    }

    const listarViagens = () => {
        history.push('/viagens/lista')
    }

    return (
        <div>
        <DivAdm>
            <h1>Area do Administrador</h1>
            <Button onClick={listarViagens} variant="contained" color="primary">Listar viagens</Button>
            <Button onClick={addViagem} variant="contained" color="primary">Criar nova viagem</Button>
        </DivAdm>
        </div>
    )
}

export default PaginaAdm