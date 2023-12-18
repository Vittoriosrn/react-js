
const UserDetails = ({motoristas}) => {
  return (
    <div>
        <h1>Informações dos motoristas</h1>
        <ul>
            {motoristas.map((motor) => (
                <li key={motor.idade}>
                    {motor.nome} - {motor.idade} - {motor.profissao}
                    {motor.idade >= 18 ? (
                        <p>Pode dirigir</p>
                    ) : (
                        <p>Não pode dirigir</p> 
                    )}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UserDetails