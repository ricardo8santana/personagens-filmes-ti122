import SentimentoPage from "./SentimentoPage";

const SentimentoCard = ({titulo, imagem}) => {
    return (
        <>
            <h1 className='sub-title'>{titulo}</h1>
            <div className='section-itens'>
                {
                    imagem.map((catalago) => 
                        <SentimentoPage titulo={catalago.nome} imagem={catalago.imagem}/>
                    )
                }
            </div>
        </>
    )
}

export default SentimentoCard;