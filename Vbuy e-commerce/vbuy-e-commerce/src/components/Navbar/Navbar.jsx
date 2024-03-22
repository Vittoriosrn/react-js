import { Link } from 'react-router-dom'

// context
import { useAuthValue } from '../../context/AuthProvider'

// hooks
import { useAuthentication } from '../../hooks/useAuthentication'

// css
import styles from './Navbar.module.css'

// assets
import searchIcon from '../../assets/img/searchIcon.png'
import cartIcon from '../../assets/img/cartIcon.png'
import vbLogo from '../../assets/img/vbLogo.png'

const Navbar = () => {
  const { user } = useAuthValue()
  const { logout } = useAuthentication()

  return (
    <>
        <nav>
            <Link to='/'><img src={vbLogo} /></Link>
            <div className={styles.linkPages}>
                <Link to='/'>Produtos</Link>
                <Link to='/support'>Suporte</Link>
                {user && <Link to='/painel'>Painel Administrativo</Link>}
                <img src={searchIcon}/>
                <Link to='/cart'><img src={cartIcon} /></Link>
            </div>
            <div className={styles.navbarAuth}>
              {!user ? (
                <>
                  <Link to='/singin'>Entrar</Link>
                  <Link className='btn' to='/singup'>Registrar</Link>
                </>
              ) : (
                <>
                  <span onClick={logout}>Sair</span>
                </>
              )}
            </div>
        </nav>
    </>
  )
}

export default Navbar