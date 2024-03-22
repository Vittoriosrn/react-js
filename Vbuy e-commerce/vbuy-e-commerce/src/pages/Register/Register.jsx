import styles from './Register.module.css'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useState, useEffect } from 'react'

// assets
import banner from '../../assets/img/bannerImg.jpg'
import googleLogo from '../../assets/img/googlelogo.png'

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const [error, setError] = useState("")

    const { createUser, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword){
            setError("A senhas precisam ser iguais!")
            return
        }

        const res = await createUser(user)

        console.log(user) // retorna dados do usuario criado
    }

    useEffect(() => {
        if(authError){
            setError(authError)
        }
    }, [authError])
    
  return (
    <div className={styles.register}>
        <img src={banner}/>
        <div>
            <h2>Criar conta</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="displayName"
                        required
                        placeholder="Nome do usuário"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail do usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirme a sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button className='btn'>Cadastrar</button>
                    {/*loading && <button className='btn' disabled>Aguarde...</button>*/}
                    {/*error && <p className="error">{error}</p>*/}
                    <div>
                        <h2>Ou entre com suas redes sociais</h2>
                        <button className='alternativeBtn'><img src={googleLogo} />Entrar com o Google</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register