import './App.css';
import React from "react"
import Etapa1 from './components/etapa1';
import Etapa2 from './components/etapa2';
import Etapa3 from './components/etapa3';
import Final from './components/final';
import styled from "styled-components"

const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`

const BotaoConcluido = styled.button`
  height: 25px;
  width: 130px;
  margin-top: 100px;
`

export class App extends React.Component {

state = {
  etapa: 1,
}

irProximaEtapa = () => {
  this.setState({
    etapa: this.state.etapa + 1
  })
}

renderizaEtapa = () => {
  switch (this.state.etapa){
    case 1:
      return <Etapa1 />
    case 2:
      return <Etapa2 />
    case 3:
      return <Etapa3 />
    case 4:
      return <Final />
    default:
      return <h1>Erro</h1>
  }
}


concluido = () => {
  if(this.state.etapa === 4){
    return(
      <div></div>
  )}else{
      return(
        <BotaoConcluido onClick={this.irProximaEtapa}>Próxima etapa</BotaoConcluido>
      )
  }
}
  render() {
    return (
      <DivPrincipal>
        {this.renderizaEtapa()}
        {this.concluido()}
      </DivPrincipal>
    )
  }
}

export default App;
