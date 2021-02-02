import React from "react"
import styled from "styled-components"

const DivGrande = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
`

function Etapa3() {
  return (
    <DivGrande>
      <h1>ETAPA 1 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
      <p>Por que você não terminou o curso de graduação?</p>
      <input />
      <p>Já fez algum curso complementar?</p>
      <select>
        <option>Não</option>
        <option>Sim</option>
      </select>
    </DivGrande>
  );
}

export default Etapa3;