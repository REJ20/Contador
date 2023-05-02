import react from 'react';
import '../estilos/boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }){
    return(
        <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } 
        onClick={manejarClic}> <div /*aqui  creamos el eventListener*/></div>
            {texto}
        </button>
    );
}

export default Boton;