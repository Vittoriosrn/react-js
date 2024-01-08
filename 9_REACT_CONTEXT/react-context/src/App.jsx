// Style
import './App.css'

// Pages
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Home from './pages/Home'

// Components
import Header from './components/Header'

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <h1>React Context</h1>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
