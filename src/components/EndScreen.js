const EndScreen = ({ again, score }) => {
  return (
    <div>
        <h1>Jogo acabou!</h1>
        <h2>Sua pontuação foi: <span>{score}</span></h2>
        <div>
            <button onClick={again}>Jogar Novamente</button>
        </div>
    </div>
  )
}

export default EndScreen;