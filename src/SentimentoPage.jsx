import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const SentimentoPage = ({titulo, imagem, mensagem}) => {
  const [fav, setFav] = useState();

  const handleFavClick = () => {
    const newFav = !fav;
    setFav(newFav);
  }

  const handleSelecionaEmocao = () => {
    document.getElementById('mensagem').textContent = mensagem
  }

  return(
      <div className='card-fotos'>
        <div className='titulo-card' onClick={handleSelecionaEmocao}>
          {
            fav == true 
            ? <FontAwesomeIcon icon={faStarSolid} className='fa-star' onClick={handleFavClick}/>
            : <FontAwesomeIcon icon={faStarRegular} className='fa-star' onClick={handleFavClick}/>
          }
          <img src={imagem} alt={titulo}/>
        </div>
        <h3>{titulo}</h3>
      </div>
  )
}

export default SentimentoPage;