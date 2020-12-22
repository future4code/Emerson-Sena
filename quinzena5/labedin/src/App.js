import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno.js/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fssz11-1.fna.fbcdn.net/v/t1.0-9/78997727_2958539807523493_2948638852799004672_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=qGpDpcpHyIgAX9TDe8Y&_nc_ht=scontent.fssz11-1.fna&oh=b0bd11cf69b2a6dcc798f7af1be80d28&oe=6009D3B2" 
          nome="Emerson" 
          descricao="Oi, eu sou o Emerson. Estudante de desenvolvimento e sempre em busca de novos conhecimentos."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno 
        imagem="https://image.flaticon.com/icons/png/512/95/95645.png"
        informacao= "Email: enunessena@gmail.com"
        />
      </div>

      <div>
        <CardPequeno 
        imagem="https://image.flaticon.com/icons/png/512/58/58960.png"
        informacao= "Endereço: Av A, 28 - São Vicente"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
