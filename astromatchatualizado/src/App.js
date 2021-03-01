import React, {useState} from 'react'
import TelaSelecao from './components/TelaSelecao'
import TelaMatches from './components/TelaMatches'
import styled from 'styled-components'

const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100%;
  width: 100%;
`

function App(props) {

const [janelaRend, setJanelaRend] = useState("Perfis")

const onClickMatches = () => {
  setJanelaRend("Matches")
}

const onClickPerfis = () => {
  setJanelaRend("Perfis")
}

const paginaAtual = () => {
  switch(janelaRend){
    case "Perfis":
      return <TelaSelecao
        onClickMatches={onClickMatches}
        janelaRend={janelaRend}
      />
    case "Matches":
      return <TelaMatches
        onClickPerfis={onClickPerfis}
      />
    default:
  }
}

console.log(janelaRend)

  return (
    <DivPrincipal> 
      {paginaAtual()}
    </DivPrincipal>
  )
}

export default App;
