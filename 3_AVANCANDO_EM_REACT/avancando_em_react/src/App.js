//components
import ManageData from './components/ManageDate';
import RendeList from './components/RendeList';
import ConditionalRender from './components/ConditionalRender';
import ShowUsername from './components/ShowUsername';
import Container from './components/container';
import ExeculteFunction from './components/ExeculteFunction';
import ChangeMenssageState from './components/ChangeMenssageState';
import Message from './components/Message';
import UserDetails from './components/UserDetails';
//css

import './App.css';

import Img1 from './assets/img1.jpg';
import { useState } from 'react';

function showMenssage(){
  console.log("A função foi ativada")
}


function App() {
  //const name = "Vittorio"
  const userName = useState("Vittorio")
  const [menssage, setMenssage] = useState("")

  const handleMessage = (msg) => {
    setMenssage(msg)
  }

  const [motors]  = useState([
    {nome: "Vittorio", idade: 19, profissao: "Programmer"},
    {nome: "Alisson", idade: 16, profissao: "Designer"},
    {nome: "Henrique", idade: 54, profissao: "Caminhoneiro"}
  ])

  return (
    <div className="App">
      {/* Img em public */}
      <div>
        <h1>Seção 3 | Avançando em React</h1>
        <img src="/img2.jpg" alt="Natal"></img>
      </div>
      {/* Img em asset */}
      <div>
        <img src={Img1} alt="Gatinho"></img>
      </div>
      <div>
        <ManageData />
        <RendeList />
        <ConditionalRender />
        <ShowUsername name={userName}/>
      </div>
      {/* children */}
      <div>
        <Container myValue={16}>
          <p>Esse é o filho</p>
        </Container>
      </div>
      {/* execulte function */}
      <ExeculteFunction myFunction={showMenssage} />
      {/* state lift */}
      <Message msg={menssage}/>
      <ChangeMenssageState handleMessage={handleMessage} />
      {/* Desafios da sessão */}
      <UserDetails motoristas={motors}/>
    </div>
  );
}

export default App;
