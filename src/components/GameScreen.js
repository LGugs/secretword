import "./GameScreen.css"
import {useState} from 'react';

const GameScreen = ({ check, score, categoryWord, tryNum, letters, word, guessedLetters, wrongLetters }) => {

  console.log(categoryWord);

  return (
    <div className="game">
        <p className="points">Pontuação: <span>{score}</span></p>
        <h1>Advinhe a palavra:</h1>
        <h3 className="tip">
          Dica sobre a palavra: <span> {categoryWord} </span>
        </h3>

        <div className="wordContainer">
          {letters.map((letter,i) => (
            // aqui abaixo pegamos o array de letras e comparamos se cada elemento existe no array de tentativas,
            // se tiver ele exibe, senão ele exibe uma caixa vazia
            guessedLetters.includes(letter) ? (
              <span key={i} className="letter">{letter}</span>
            ) : (
              <span key={i} className="blankSquare"></span>
            )
          ))}
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
          {(wrongLetters.length === 0) ? 
            <span>Nenhuma palavra errada!</span> :
            wrongLetters.map((wrongLetter, index) => (
            <span key={index}>{wrongLetter}</span>
          ))}
        </div>

        <p>Você ainda tem {tryNum} tentativa(s).</p>

        {/*<button onClick={check}>Finalizar Jogo!</button>*/}
    </div>
  )
}

export default GameScreen;