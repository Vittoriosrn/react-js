import './App.css'

// 1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

//components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/info'
import Search from './pages/Search'

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        {/* 9 - serach */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 - rota dinamica */}
          <Route path='/products/:id' element={<Product />}/>
          {/* 6 -  */}
          <Route path='/products/:id/info' element={<Info />}/>
          {/* 9 - search */}
          <Route path='/search' element={<Search />} />
          {/* 10 - Redirect */}
          <Route path='/company' element={<Navigate to='/about'/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
