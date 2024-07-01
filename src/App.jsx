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

function App() {

  const emocaoFotos = [
    { nome: 'Tristeza', imagem: Tristeza1 },
    { nome: 'Alegria', imagem: Alegria2 },
    { nome: 'Raiva', imagem: Raiva3 },
    { nome: 'Medo', imagem: Medo4 },
    { nome: 'Nojinho', imagem: Nojinho5 },
    { nome: 'Ansiedade', imagem: Ansiedade6 },
    { nome: 'Vergonha', imagem: Vergonha7 },
    { nome: 'Inveja', imagem: Inveja8 },
    { nome: 'Tedio', imagem: Tedio9 }

  ];

  return (
    <>
      <SentimentoCard 
        titulo="Fotos Sentimentos"
        imagem={emocaoFotos}
      />
    </>
  )
}

export default App
