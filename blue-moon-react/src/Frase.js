import Imagem from './Imagem';

function Frase(){
    return(
        <div>
            <p style={{ fontSize: 15, color: 'purple',}}>
                In et auctor nisl, vel auctor tellus. Integer bibendum aliquam fringilla. Nam bibendum consectetur vestibulum. Pellentesque vitae nibh ipsum. Nunc vestibulum, arcu eu lacinia efficitur, tortor massa tristique libero, sed ultrices justo neque tempor lacus. Ut leo velit, molestie sit amet lorem nec, scelerisque gravida erat. Etiam et volutpat ipsum. Integer augue augue, imperdiet ut pellentesque et, aliquam sit amet nisi.
            </p>

            <Imagem />
        </div>
    )
}

export default Frase;