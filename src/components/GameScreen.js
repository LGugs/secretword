import "./GameScreen.css"
import {useState} from 'react';

const GameScreen = ({ check, score, categoryWord }) => {
  
  const [tryNum, setTryNum] = useState(3);
  
  console.log(categoryWord);

  return (
    <div className="game">
        <p className="points">Pontuação: <span>{score}</span></p>
        <h1>Advinhe a palavra:</h1>
        <h3 className="tip">
          Dica sobre a palavra: <span> {categoryWord} </span>
        </h3>

        <div className="wordContainer">
          <span className="letter">A</span>
          <span className="blankSquare"></span>
        </div>

        <div className="letterContainer">
          <p>Tente advinhar uma letra da palavra</p>
          <form>
            <input type="text" name="letter" maxLength="1" required  />
            <button>Jogar!</button>
          </form>
        </div>

        <div className="wrongLettersContainer">
          <p>Letras já utilizadas:</p>
          <span>a,</span>
          <span>b,</span>
        </div>

        <p>Você ainda tem {tryNum} tentativa(s).</p>

        {/*<button onClick={check}>Finalizar Jogo!</button>*/}
    </div>
  )
}

export default GameScreen;