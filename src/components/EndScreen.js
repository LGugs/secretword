const EndScreen = ({ again, bye }) => {
  return (
    <div>
        <h1>Jogo acabou!</h1>
        <h3>Jogar novamente?</h3>
        <div>
            <button onClick={again}>Sim!</button>
            <button onClick={bye}>Não!</button>
        </div>
    </div>
  )
}

export default EndScreen;