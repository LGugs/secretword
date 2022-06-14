// Utils
import { randomize } from './utils/Utils'

// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Data
import { wordsList } from './data/words'; // massa de dados dentro da pasta data

// Components
import GameScreen from './components/GameScreen';
import StartScreen from './components/StartScreen';
import EndScreen from './components/EndScreen';

const stages = [
  {id: 1, name: "start"}, // index 0
  {id: 2, name: "game"}, // index 1
  {id: 3, name: "end"} // index 2
]

function App() {

  const[words] = useState(wordsList);

  const[score, setScore] = useState(0);

  const[word, setWord] = useState();

  const[category, setCategory] = useState("");

  const[letters, setLetters] = useState("");

  const[guessedLetters, setGuessedLetters] = useState([]); // começa com array vazio

  const[wrongLetters, setWrongLetters] = useState([]);

  const [tryNum, setTryNum] = useState(3);
 

  // pick random words and categories
  const selectCategoryAndWords = () => {
    const categories = Object.keys(words); // pegando cada key (categorias) dentro da massa de palavras
    const category = categories[randomize(categories)]; // Math.random gera um numero quebrado (float), por isso o floor para arredondar.
    //console.log(category);
    
    const word = words[category][randomize(words[category])]; // e aqui ele pega uma palavra randomicamente da categoria selecionada.
    //console.log(word);

    return{ word, category };
  };

  const[gameStage, setGameStage] = useState(stages[0].name); // aqui sempre vai se iniciar com o nome do primeiro estágio

  



  //console.log(words); // É normal sair duplicado devido ao chamado do StrictMode no index.js, onde o mesmo faz verificação de execução dupla.

  // starts the game
  const startGame = () => {

    //pick word and category
    const { word, category } = selectCategoryAndWords();

    // create an array of letters, without space and all of them as lowercase
    let wordLetters = word.split(""); // faz-se o split sem caracteres a mais entre eles.
    wordLetters = wordLetters.map((w) => w.toLowerCase()); // deixa todos em lowercase

    //console.log(wordLetters);

    // now we set the states
    setCategory(category);
    setLetters(wordLetters);
    setWord(word);

    setGameStage(stages[1].name);
  }

  // process the letter input, and at the end, sends to end page
  const checkLetter = (inputedLetter) => {
    console.log(inputedLetter);

    // all letters to lowercase
    const lowerLetter = inputedLetter.toLowerCase();

    // check if letter is already used
    if(guessedLetters.includes(lowerLetter) || wrongLetters.includes(lowerLetter)){
      return alert("Palavra já utilizada!");
    }

    // check if the inserted letter is wrong or right
    if(letters.includes(lowerLetter)) {
      setGuessedLetters((storedLetters) => [...storedLetters, lowerLetter]) // se for correto, ele insere em guessedLetters
      setScore((actualScore) => actualScore+1);
    } else {
      setWrongLetters((storedWrongLetters) => [...storedWrongLetters, lowerLetter]) // se for incorreto, ele insere em wrongLetters
      setTryNum((actualNum) => actualNum-1); // é o mesmo que o 1º comentado abaixo, porém melhor.
    /* PODE SER DESSA FORMA AQUI, ENTRETANTO TEM FORMAS MAIS ELEGANTES! COMO A QUE ESTÃO SENDO UTILIZADAS!  
      if(tryNum > 0){
        setTryNum(tryNum-1); // diminui as chances! esse é o 1º
      }else{
        // go to end page!
        setGameStage(stages[2].name);
      }
    */
    }
  }

  const resetLetters = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  const resetNumbers = () => {
    setTryNum(3);
    setScore(0);
  }

  // ele ficará de "vigia" a cada alteração no tryNum
  useEffect(() => {
    if(tryNum <= 0){
      // reset all states
      resetLetters();
      
      setGameStage(stages[2].name);
    }
  },[tryNum]);

  // play the game again
  const retry = () => {
    setGameStage(stages[1].name);
    resetNumbers();
  }

  // returns to initial page
  const exit = () => {
    setGameStage(stages[0].name);
    resetNumbers();
  }

  return (
    <div className="App">
    {/* É uma maneira de verificar uma variável e trocar a visualização dos componentes */}
      {gameStage === 'start' && <StartScreen start={startGame}/>} {/* Também posso fazer um if ternário, mas não é tão eficiente neste caso: {gameStage === 'start' ? (<StartScreen/>) : ''} */}
      {gameStage === 'game' && 
      <GameScreen 
        check={checkLetter}
        score={score}
        categoryWord={category}
        tryNum={tryNum}
        letters={letters}
        word={word}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}/>}
      {gameStage === 'end' && <EndScreen again={retry} bye={exit}/>}
    </div>
  );
}

export default App;
