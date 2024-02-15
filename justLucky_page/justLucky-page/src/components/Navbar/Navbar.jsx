import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/">Link 1</Link>
        <a>Link 1</a>
        <a>Link 1</a>
      </nav>
    </div>
  )
}

export default Navbar