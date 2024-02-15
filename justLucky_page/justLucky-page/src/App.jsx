import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

//pages
import Home from "./pages/Home"



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App