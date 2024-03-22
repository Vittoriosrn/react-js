import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

// css
import './App.css'

// context
import { AuthProvider } from './context/AuthProvider'

// hooks
import { useAuthentication } from './hooks/useAuthentication'

// components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AddProduct from './components/AddProduct/AddProduct'



// pages
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Support from './pages/Support/Support'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import PanelAdm from './pages/PanelAdm/PanelAdm'
import ProductPage from './pages/Product/ProductPage'


const App = () => {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {setUser(user)})
  }, [auth])

  return (
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/support' element={<Support />} />
              <Route path='/singin' element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path='/singup' element={!user ? <Register /> : <Navigate to='/' />} />
              <Route path='/painel' element={user ? <PanelAdm /> : <Navigate to='/login' />} />
              <Route path='/newproduct' element={user ? <AddProduct /> : <Navigate to='/login' />}></Route>
              <Route path='/product/:id' element={<ProductPage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
  )
}

export default App