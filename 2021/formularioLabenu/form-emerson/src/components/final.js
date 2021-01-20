import React from "react"
import styled from "styled-components"

const DivGrande = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
`

function Final() {
  return (
    <DivGrande>
      <h1>O FORMULÁRIO ACABOU</h1>
      <h2>Muito obrigado por participar!</h2>
    </DivGrande>
  );
}

export default Final;