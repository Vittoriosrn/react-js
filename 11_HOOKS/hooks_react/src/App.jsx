import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'

// pages
import { Home } from './pages/Home/Home'
import About from './pages/About/About'

import { HookUseContext } from './components/HookUseContext'

function App() {

  return (
    <HookUseContext>
      <div className='App'>
        <BrowserRouter>
          <h1>Hooks ReactJs</h1>
          <ul className="Navbar">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/about'>Sobre</Link>
            </li>
          </ul>
      
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HookUseContext>
  )
}

export default App
