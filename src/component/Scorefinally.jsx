import React from 'react';
import '../App.css'
import godpleaseno from '../img/godpleaseno.gif'
import verygood from '../img/verygood.gif'
import perfect from '../img/perfect.gif'
import meh from '../img/meh.gif'

function Scorefinally( { score } ) {
    return (
        <div>
          <div className='container-finally'>
            <div className='container-score'>
              <h1>Finalizado</h1>
              <h1>Tu puntaje: {score}</h1>
            </div>
            {score <= 3 ?
            <>
              <img src={godpleaseno} alt='no-god-please-no'/>
              <h1>Muy mal.</h1> 
            </>
            : null}

            {score > 3 && score < 7 ?
            <>
              <img src={meh} alt='nice'/>
              <h1>Bien, pero puedes mejorar.</h1> 
            </>
            : null}

            {score >= 7 && score <= 9 ?
            <>
              <img src={verygood} alt='nice'/>
              <h1>Excelente, casi perfecto.</h1>
            </>
            : null}

            {score === 10 ?
            <>
              <img src={perfect} alt='perfect'/>
              <h1>Enhorabuena, está perfecto.</h1>
            </>
            : null}
            <button onClick={() => (window.location.href = "/")}>Volver a jugar</button>
          </div>
        </div>
    );
}

export default Scorefinally;