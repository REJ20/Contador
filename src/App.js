import './App.css';
import Boton from './componentes/boton';
import logo from './imagenes/freecodecamp-logo.png';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [ numClics, setNumClics ] = useState(0); //creamos dos constantes para manejar el estado de los Listener

  const manejarClic = () => {
    setNumClics (numClics + 1 );
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img className='logo' src={logo} alt='Logo empresa' />
      </div>
      <div className='main-container'>
        <Contador numClics= {numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} 
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
