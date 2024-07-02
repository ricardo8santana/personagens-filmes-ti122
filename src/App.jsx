//Importe de imagens
import './App.css';
import Tristeza1 from './img/Tristeza1.jpg';
import Alegria2 from './img/Alegria2.jpg';
import Raiva3 from './img/Raiva3.jpg';
import Medo4 from './img/Medo4.jpg';
import Nojinho5 from './img/Nojinho5.jpg';
import Ansiedade6 from './img/Ansiedade6.jpg';
import Vergonha7 from './img/Vergonha7.jpg';
import Inveja8 from './img/Inveja8.jpg';
import Tedio9 from './img/Tedio9.jpg';

import SentimentoCard from './SentimentoCard';
//Declaração da função, e mensagens que ao cliclar sobre a imagem parece uma mensagem
function App() {

  const emocaoFotos = [
    { nome: 'Tristeza', imagem: Tristeza1, mensagem:'Você escolheu Tristeza' },
    { nome: 'Alegria', imagem: Alegria2,  mensagem:'Você escolheu Alegria'},
    { nome: 'Raiva', imagem: Raiva3, mensagem:'Você escolheu Raiva' },
    { nome: 'Medo', imagem: Medo4, mensagem:'Você escolheu Medo' },
    { nome: 'Nojinho', imagem: Nojinho5, mensagem:'Você escolheu Nojinho' },
    { nome: 'Ansiedade', imagem: Ansiedade6, mensagem:'Você escolheu Ansiedade' },
    { nome: 'Vergonha', imagem: Vergonha7, mensagem:'Você escolheu Vergonha' },
    { nome: 'Inveja', imagem: Inveja8, mensagem:'Você escolheu Inveja' },
    { nome: 'Tedio', imagem: Tedio9, mensagem:'Você escolheu Tedio' }

  ];
//Titulos e perguntas que irão ser exibida.
  return (
    <>
      <SentimentoCard 
        titulo="Fotos Sentimentos"
        imagem={emocaoFotos}
      />
      <h1>Selecione uma imagem e descubra o sentimento!</h1>
      <p id='mensagem'>Escolha um Sentimento </p>
    </>
  )
};

export default App
