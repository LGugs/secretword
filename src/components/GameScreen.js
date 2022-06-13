import "./GameScreen.css"
// o useRef cria referencia para algum lugar, é como se fosse dado um querySelector
// e selecionado um elemento para manipular
import { useState, useRef } from 'react';

const GameScreen = ({ 
  check, 
  score, 
  categoryWord, 
  tryNum,
  letters,
  word,
  guessedLetters,
  wrongLetters }) => {

  const[inputLetter, setInputLetter] = useState("");
  const inputLetterRef = useRef(null);

  const handleSubmit = (e) => {
      e.preventDefault();

      check(inputLetter);
      setInputLetter("");

      inputLetterRef.current.focus(); // esse elemento sempre será focado após o submit
  }

  //console.log(categoryWord);

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
          <form onSubmit={handleSubmit}>
            <input type="text" 
              name="letter" 
              maxLength="1"
              required
              onChange = {(e) => setInputLetter(e.target.value)}
              value={inputLetter}
              ref={inputLetterRef}  />
            
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