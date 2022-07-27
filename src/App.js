import React, { useState } from 'react'
import Scorefinally from './component/Scorefinally';
import { data } from './component/quizData'
import './App.css'
import minecraftletras from "./img/minecraftletras.png"

function App() {
 
    const [score, setScore] = useState(0);
    const [quiz, setQuiz] = useState(0);
    const [finished, setFinished] = useState(false);

    const nextQuestion = (e)=> {

          e.target.classList.add( data[quiz].answer === e.target.textContent ? 
          "correct" : "incorrect")

          setTimeout(() => {
            if (quiz === data.length-1) {
              setFinished(!finished);
            } else setQuiz(quiz + 1);

            if(data[quiz].answer === e.target.textContent) {
              setScore(score+1)
            }
          }, 300);
    }

    if(finished)
    return (
      <Scorefinally score={score} />
    );

    return (
      <div className='container'>
        <div className='container-top'>
          <img className='minecraft-logo' src={minecraftletras} alt="minecraft"/>
          <h1 className='quiz-title'>QUIZ</h1>
        </div>
        <h1 className='question'>{data[quiz].question}</h1>
        {data[quiz].choices.map((result)=> (
          <button className='boton' onClick={nextQuestion} key={result}>{result}</button>
        ))}
        <footer>{quiz+1 + " de " + data.length}</footer>
      </div>   
    );

}

export default App;