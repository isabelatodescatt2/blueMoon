import palmeiras from './Img/palmeias.jpg';

function Imagem(){
    return(
        <div>
            <img src={ palmeiras } alt="palmeias"  style={{width: 700, height: 400,}} />
        </div>
    )
}

export default Imagem;