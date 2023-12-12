// components
import FirstComponent from './components/FirstComponent';
import TamplateExpressions from './components/TamplateExpressions';
import Eventos from './components/Eventos';
import Challenge from './components/Challenge';

// styles / css
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TamplateExpressions />
      <Eventos />
      <p className='texto'>Meu texto</p>
      <Challenge />
    </div>
  );
}

export default App;
