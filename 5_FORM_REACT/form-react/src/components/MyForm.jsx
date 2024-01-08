import './MyForm.css'
import { useState } from 'react'

const MyForm = ({user}) => {
  // manipulação de dados
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmal] = useState(user ? user.email : '')

  const [bio, setBio] = useState("")
  const [role, setRole] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Enviando formulario")
    console.log(name)
    console.log(email)
    console.log(bio)
    console.log(role)

    {/* Limpar formuário */}
    setEmal("")
    setName("")
    setBio("")
  } 
  /*const handleName = (e) =>{
    console.log(e.target.value)
  }*/
  return (
    <div className='main'>
        {/* Criação de form */}
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nome</label>
          <input 
            className='input_field' 
            type='text' 
            name='name' 
            placeholder='Digite o seu nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* label envolvendo input */}
        <div>
          <label>
            <span>E-mail</span>
          </label>
          <input 
            className='input_field' 
            type='email' 
            name='email' 
            placeholder='Digite o seu E-mail' 
            value={email}
            onChange={(e) => setEmal(e.target.value)}>  
          </input>
        </div>
        
        {/* Textarea */}
        <div>
          <label>
            <span>Bio</span>
          </label>
          <textarea 
          name='bio' placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}
          ></textarea>
        </div>

        {/* Select */}
        <select name='role' onChange={(e) => setRole(e.target.value)}>
          <option value='user'>Usuário</option>
          <option value='editor'>Editor</option>
          <option value='admin'>Administrador</option>
        </select>

        <input className='button' type='submit' value='Enviar'/>
        </form>
    </div>
  )
}

export default MyForm