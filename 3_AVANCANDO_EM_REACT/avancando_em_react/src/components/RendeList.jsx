import {useState} from 'react'

const RendeList = () => {
  const [list] = useState(["Vittorio","Kevin", "Alves"])

  const [users, setUsers] =  useState([
    {id: 1, name: "Vittorio Kevin Alves Mina", age: 19},
    {id: 2, name: "Richard Alexandre", age: 57}
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    setUsers((prevUsers) => {
        return prevUsers.filter((user) => user.id !== randomNumber);
    })
  }
  
    return (
    <div>
        <ul>
            {list.map((item, i) => (
            <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Remover usuário</button>
    </div>
  )
}

export default RendeList