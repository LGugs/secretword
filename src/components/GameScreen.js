import "./GameScreen.css"
import {useState} from 'react';

const GameScreen = () => {
  const [score, setScore] = useState(0);
  var [word, setWord] = useState(() => {
      // criar algo randomico
  });
  const [tryNum, setTryNum] = useState(3);
  
  return (
    <div>
        <p>Pontuação: {score}</p>
        <h2>Advinhe a palavra:</h2>
        <h3>Dica sobre a palavra: {word}</h3>
        <p>Você ainda tem {tryNum} tentativa(s).</p>
        
    </div>
  )
}

export default GameScreen;