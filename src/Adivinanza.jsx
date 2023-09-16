import React, { useState, useEffect } from 'react';
import './Adivinanza.css';


const Adivinanza = () => {
  
  // Creamos la funcion que genera el numero aleatorio
  const numero = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  /* useState es para declarar y gestionar el estado en un componente. 
  Cada llamada al useState nos devuelve un par de valores: el estado actual y una función para actualizar ese estado.*/

  //DEFINIMOS 4 ESTADOS:

  // targetNumber para guardar el número que se tiene que adivinar. (empieza generando uno aleatorio)
  const [targetNumber, setTargetNumber] = useState(numero());
  // inputValue para guardar  el valor que ingrese el usuario (empieza vacío).
  const [inputValue, setInputValue] = useState('');
  // mensaje para guardar los mensajes del juego (El número es mayor...)
  const [mensaje, setMensaje] = useState('');
  // attempts para guardar los intentos 
  const [attempts, setAttempts] = useState(0);

  

  /*useEffect: hook de react que maneja el ciclo de vida de un componente. Es para ejecutar efectos secundarios en un componente. (Acciones que ocurren después de que el componente se haya renderizado 
    o cuando ciertas dependencias cambian)
  */

  /*En este caso, el efecto se ejecuta cuando cambia targetNumber o el mensaje*/   
  useEffect(() => {
    /*Si el mensaje es igual al que queremos (se adivinó el número), se reinicia el juego*/
    if (mensaje === 'Has adivinado. El número era ' + targetNumber) {
      setTimeout(() => {
        setTargetNumber(numero());
        setMensaje('');
        setAttempts(0);
      }, 2000);
    }
  }, [mensaje, targetNumber]);


  // Función que se ejecuta cuando el usuario hace clic en el botón (parecido al event listener)
  const clickear = () => {
    const adivinanza = parseInt(inputValue);
    setAttempts(attempts + 1);

    if (adivinanza === targetNumber) {
      setMensaje('Has adivinado. El número era ' + adivinanza);

    } else if (adivinanza < targetNumber) {
      setMensaje('El número es mayor');

    } else {
      setMensaje('El número es menor');
    }
    setInputValue('');
  };

  return (
    <div className="divDevuelto">
      <div className="encabezado">
        <h1>Juego de adivinanza</h1>
      </div>

      <div className="juego">
        <p>Intente adivinar un número entre 1 y 100</p>
        <input className='input' type="number" id="input" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button class="button-35" role="button" onClick={clickear}>
          Adivinar
        </button>
        <p id="mensaje">{mensaje}</p>
        <p>{attempts}</p>
      </div>
    </div>
  );
};

export default Adivinanza;
