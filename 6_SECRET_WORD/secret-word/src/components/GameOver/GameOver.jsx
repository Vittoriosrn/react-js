import "./GameOver.css"

const GameOver = ({retry, score} ) => {
  return (
    <div>
      <h1>Fim de Jogo!</h1>
      <h2>A sua pontuação foi: <br></br><span>{score}</span> </h2>
      <button onClick={retry}>REINICIAR O JOGO</button>
    </div>
  )
}

export default GameOver