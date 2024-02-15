// CSS
import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
    return (
      <div className={styles.about}>
          <h1>Sobre o Mina<span>BLOG</span></h1>
          <p>Este projeto consiste em um blog feito 
            com react no front-end e Firebase no back-end
          </p>
          <Link className="btn" to="/posts/create"><button>Criar Post</button></Link>
      </div>
    )
  }
  
  export default About