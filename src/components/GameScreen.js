import "./GameScreen.css"
import {useState} from 'react';

const GameScreen = ({ check, score, categoryWord }) => {
  
  const [tryNum, setTryNum] = useState(3);
  
  console.log(categoryWord);

  return (
    <div>
        <p>Pontuação: {score}</p>
        <h2>Advinhe a palavra:</h2>
        <h3>Dica sobre a palavra: {categoryWord}</h3>
        <p>Você ainda tem {tryNum} tentativa(s).</p>
        <button onClick={check}>Finalizar Jogo!</button>
    </div>
  )
}

export default GameScreen;