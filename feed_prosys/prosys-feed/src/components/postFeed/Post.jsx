import './Post.css'

const post = () => {
  return (
    <div className="postFeed">
        <div className='profileInfo'>
            <img className='profilePicturePost' src='./src/assets/profile_picture.png' alt='profile Picture'></img>
            <span className='userNamePost'>Vittorio Kevin</span>
            <span className='postTime'>21 de Nov 2023 - 14:53</span>
        </div>
        <div className='textPost'>
            <p>Olá!!!<br></br>Conecte-se, compartilhe e cresça juntos! O Prosys está esperando por você.Faça parte da comunidade que valoriza a sua voz e promove o seu desenvolvimento.Vamos construir juntos um ambiente mais colaborativo e informado. #UseOProsys #ComecePorSuaEquipe</p>
        </div>
        <div>
            <img className='imgPost' src='./src/assets/feed_post.jpg' alt=''></img>
        </div>
        <div className='reactions'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M16 20H6V7L13 0L14.25 1.25C14.3667 1.36667 14.4625 1.525 14.5375 1.725C14.6125 1.925 14.65 2.11667 14.65 2.3V2.65L13.55 7H19C19.5333 7 20 7.2 20.4 7.6C20.8 8 21 8.46667 21 9V11C21 11.1167 20.9875 11.2417 20.9625 11.375C20.9375 11.5083 20.9 11.6333 20.85 11.75L17.85 18.8C17.7 19.1333 17.45 19.4167 17.1 19.65C16.75 19.8833 16.3833 20 16 20ZM4 7V20H0V7H4Z" fill="#E4E6EB"/>
        </svg>
            <span className='reactCiente'>Ciente</span>
        </div>
        <div className='comnentContainer'>
            <img src='./src/assets/profile_picture.png' alt='profile Picture'></img>
            <input placeholder='Escreva seu comentário'></input>
        </div>
    </div>
  )
}

export default post