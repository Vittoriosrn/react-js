import { Link } from 'react-router-dom'

// hooks
import { useAuthentication } from '../../hooks/useAuthentication'
import { useState, useEffect } from 'react'

// css
import styles from './Login.module.css'

// assets
import banner from '../../assets/img/bannerImg.jpg'
import googleLogo from '../../assets/img/googlelogo.png'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const {login, error: authError, loading} = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")
    
        const user = { // usar recebe array com os dados de email e senha
            email,
            password
        }

        const res = await login(user) // envia os dados de login para o useAuthentication
    }

    useEffect(() => { // setar error caso o authError ocorra 

        if(authError){
            setError(authError)
        }
  
    }, [authError])


  return (
    <div className={styles.loginPage}>
        <img src={banner} />
        <form onSubmit={handleSubmit}>
            <h2>Fazer Login</h2>
            <input 
                type="email"
                name="email"
                required
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password"
                name="password"
                required
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Link to='/recoverpassword'>Esqueci a senha</Link>
            {!loading && <button className='btn'>Entrar</button>}
            {loading && <button className='btn' disabled>Aguarde</button>}
            {error && <p>{error}</p>}
            <div>
                <h2>Ou entre com suas redes sociais</h2>
                {!loading && <button className='alternativeBtn'><img src={googleLogo} />Entrar com o Google</button>}
                {loading && <button className='alternativeBtn' disabled><img src={googleLogo}/>Aguarde</button>}
            </div>
        </form>
    </div>
  )
}

export default Login