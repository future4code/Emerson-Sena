import React from "react"
import styled from "styled-components"

const DivGrande = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
`

function Etapa2() {
  return (
    <DivGrande>
      <h1>ETAPA 1 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
      <p>Qual curso?</p>
      <input />
      <p>Qual unidade de ensino?</p>
      <input />
    </DivGrande>
  );
}

export default Etapa2;