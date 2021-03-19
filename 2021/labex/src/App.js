import React from 'react'
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial'
import PaginaDeFormulario from './paginas/PaginaDeFormulario/PaginaDeFormulario'
import ListaDeViagens from './paginas/ListaDeViagens/ListaDeViagens'
import CriarViagem from './paginas/privado/CriarViagem/CriarViagem'
import PaginaLogin from './paginas/PaginaLogin/PaginaLogin'
import PaginaAdm from './paginas/privado/PaginaAdm/PaginaAdm'
import DetalhesViagem from './paginas/DetalhesViagem/DetalhesViagem'
import { Switch, Route, BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PaginaInicial/>
        </Route>
        <Route exact path="/form-inscricao">
          <PaginaDeFormulario/>
        </Route>
        <Route exact path="/viagens/lista">
          <ListaDeViagens/>
        </Route>
        <Route exact path="/viagens/lista/:viagemId">
          <DetalhesViagem/>
        </Route>
        <Route exact path="/viagens/criar">
          <CriarViagem/>
        </Route>
        <Route exact path="/login">
          <PaginaLogin/>
        </Route>
        <Route exact path="/adm">
          <PaginaAdm/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
