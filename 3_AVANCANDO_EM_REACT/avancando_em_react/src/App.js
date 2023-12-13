//components
import ManageData from './components/ManageDate';
//css

import './App.css';

import Img1 from './assets/img1.jpg';

function App() {
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
      </div>
    </div>
  );
}

export default App;
