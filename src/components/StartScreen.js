import './StartScreen.css';

const startScreen = ({ start }) => {

  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar!</p>
        <button onClick={start}>Começar o jogo</button>
    </div>
  )
}

export default startScreen;