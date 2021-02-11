import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  justify-content: space-around;
  align-items: center;
  height: 100px;
`

const DivUsuarios = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin: 2px;
  align-items: center;
  height: 800px;
`

const MeusUsuarios = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  font-size: 18px;
  width: 300px;
`

export default class App extends React.Component {
state = {
  usuarios: [],
  inputUsuarios: "",
  inputEmail: "",
  estadoRend: true
}

criarUsuario = () => {
  const body = {
    name: this.state.inputUsuarios,
    email: this.state.inputEmail
}
  axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
    headers: {
      Authorization: 'emerson-nunes-muyembe'
    }
  }).then((res) => {
    alert("Deu certo!!")
    this.setState({ inputUsuarios: "", inputEmail: "" })
  }).catch(() => {
    alert("Deu errado!!")
  })
}

listarUsuarios = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: 'emerson-nunes-muyembe'
    }
    }).then((res) => {
        this.setState({ usuarios: res.data, estadoRend: true })
    }).catch((err) => {
        alert("Não consegui carregar a lista de usuarios!")
    })
}

deletarUsuario = (id) => {
  axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
    headers: {
      Authorization: 'emerson-nunes-muyembe' 
  }
  }).then((res) => {
      alert("Apagou")
  }).catch((err) => {
      alert("Nao Apagou")
  })
}

onChangeUsuarios = (event) => {
  this.setState({ inputUsuarios: event.target.value })
}

onChangeEmail = (event) => {
  this.setState({ inputEmail: event.target.value })
}

onClickEsconder = () => {
  this.setState({ estadoRend: false })
}

render(){
  const teste = this.state.usuarios.map((usuario) => {   
    return <MeusUsuarios key={usuario.id}>{usuario.name}
      <button onClick={ () => this.deletarUsuario(usuario.id)} key={usuario.id}>X</button>
      </MeusUsuarios>
  })
  const rendUsuario = () => {
    switch(this.state.estadoRend) {
      case true:
        return teste 
      case false:
        return <div></div>
      default: 
        <div></div>
    }
  }

  return (
    <div>
      <DivPrincipal>
        <input 
          placeholder="Nome do Usuario"
          value={this.state.inputUsuarios}
          onChange={this.onChangeUsuarios}
        />
        <input
          placeholder="Email"
          value={this.state.inputEmail}
          onChange={this.onChangeEmail}
        />
        <button onClick={this.criarUsuario}>Criar Usuario</button>
      <div>
        <button onClick={this.listarUsuarios}>Mostrar Usuarios</button>
        <button onClick={this.onClickEsconder}>Esconder Usuarios</button>
      </div>
      </DivPrincipal>
        <DivUsuarios>
          {rendUsuario()}
        </DivUsuarios>
    </div>
  )
}
}
