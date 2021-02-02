import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'


const DivAddPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 130px;
  width: 300px;
` 

const Button = styled.button`
  width: 80px;
  height: 30px;
`

const InputAddUser = styled.input`
  width: 300px;
  `

const InputAddUserImg = styled.input`
  width: 300px;
`


const InputAddPost = styled.input`
  width: 300px;
`

class App extends React.Component {
    state = {
      usuarios: [
        {
          nomeUsuario: "Paulinha",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150"
        },
        {
          nomeUsuario: "Neymar",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150"
        }, 
        {
          nomeUsuario: "Emerson",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150"
        }
    ], 
          nomeUsuario: "",
          fotoUsuario: "",
          fotoPost: ""
  }

  addUser = () => {
  const user = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost
  }

  const novoUser = [...this.state.usuarios, user]

  this.setState({usuarios: novoUser})
}

  onChangeInputAddUser = (event) => {
    this.setState({nomeUsuario: event.target.value})
  }

  onChangeInputAddUserImg = (event) => {
    this.setState({fotoUsuario: event.target.value})
  }

  onChangeInputAddPost = (event) => {
    this.setState({fotoPost: event.target.value})
  }

  render() {
    const listaUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <Post
          nomeUsuario={usuario.nomeUsuario}
          fotoUsuario={usuario.fotoUsuario}
          fotoPost={usuario.fotoPost}
        />
      )}
    )

  return (
    <div>
      <div className={'app-container'}>
        <DivAddPost>  
          <InputAddUser value={this.state.inputAddUser} onChange={this.onChangeInputAddUser} placeholder={"Usuário"}/>
          <InputAddUserImg value={this.state.inputAddUserImg} onChange={this.onChangeInputAddUserImg} placeholder={"Foto de perfil usuário"}/>
          <InputAddPost value={this.state.InputAddPost} onChange={this.onChangeInputAddPost} placeholder={"Imagem do post"} />
          <Button onClick={this.addUser} >ENVIAR</Button>
        </DivAddPost>
        {listaUsuarios}
      </div>
    </div>
    )
  }
}

export default App;
