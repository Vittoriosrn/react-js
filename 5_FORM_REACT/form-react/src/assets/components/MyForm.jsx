import './MyForm.css'

const MyForm = () => {
  return (
    <div className='main'>
        <form>
        <div>
          <label htmlFor='name'>Nome</label>
          <input className='input_name' type='text' name='name' placeholder='Digite o seu nome'/>
        </div>
        <input className='button' type='submit' value='Enviar' />
      </form>
    </div>
  )
}

export default MyForm