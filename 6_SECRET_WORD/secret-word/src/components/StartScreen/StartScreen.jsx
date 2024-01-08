import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div>
        <h2 className='title'>SecretWord</h2>
        <p className='subTitle'>Clique abaixo para começar</p>
        <button onClick={startGame}>COMEÇAR</button>
    </div>
  )
}

export default StartScreen