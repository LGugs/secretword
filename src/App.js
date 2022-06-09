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

  const[gameStage, setGameStage] = useState(stages[0].name); // aqui sempre vai se iniciar com o nome do primeiro estágio

  const[words] = useState(wordsList);

  console.log(words); // É normal sair duplicado devido ao chamado do StrictMode no index.js, onde o mesmo faz verificação de execução dupla.

  return (
    <div className="App">
    {/* É uma maneira de verificar uma variável e trocar a visualização dos componentes */}
      {gameStage === 'start' && <StartScreen/>} {/* Também posso fazer um if ternário, mas não é tão eficiente neste caso: {gameStage === 'start' ? (<StartScreen/>) : ''} */}
      {gameStage === 'game' && <GameScreen/>}
      {gameStage === 'end' && <EndScreen/>}
    </div>
  );
}

export default App;
