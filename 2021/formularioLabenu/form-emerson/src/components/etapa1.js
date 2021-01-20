import React from "react"
import styled from "styled-components"

const DivGrande = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
`

const MeuSelect = styled.select`
  height: 20px;
  width: 210px;
`

function Etapa1() {
  return (
    <DivGrande>
      <h1>ETAPA 1 - DADOS GERAIS</h1>
      <p>1. Qual seu nome?</p>
      <input placeholder="Nome"/>
      <p>2. Qual sua idade?</p>
      <input placeholder="Idade" />
      <p>3. Qual seu email?</p>
      <input placeholder="Email" />
      <p>4. Qual sua escolaridade?</p>
      <MeuSelect>
        <option>Ensino fundamental incompleto</option>
        <option>Ensino fundamental completo</option>
        <option>Ensino médio incompleto</option>
        <option>Ensino médio completo</option>
        <option>Ensino superior incompleto</option>
        <option>Ensino superior completo</option>
      </MeuSelect>
    </DivGrande>
  );
}

export default Etapa1;