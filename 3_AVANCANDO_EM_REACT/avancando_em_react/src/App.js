//components
import ManageData from './components/ManageDate';
import RendeList from './components/RendeList';
import ConditionalRender from './components/ConditionalRender';
import ShowUsername from './components/ShowUsername';
//css

import './App.css';

import Img1 from './assets/img1.jpg';
import { useState } from 'react';

function App() {
  const name = "Vittorio"
  const userName = useState("Vittorio")

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
    </div>
  );
}

export default App;
