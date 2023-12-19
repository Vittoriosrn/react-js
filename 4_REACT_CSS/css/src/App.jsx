import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const redTitle = true
  const n = 3;
  const [count, setCount] = useState(0)

  return (
    <>
      {/* CSS global */}
      <h1>Estilos com CSS</h1>
      {/* CSS de componente */}
      <p>Este paragrafo é do App.jsx</p><MyComponent />
      
      {/* CSS inline dinamico */}
      <h1 style={n < 10 ? ({color: "red"}) : ({color: "green"})}>CSS dinamico</h1>
      <h1 style={n > 10 ? ({color: "red"}) : ({color: "green"})}>CSS dinamico</h1>
      {/* Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este texto vai ter classe dinamica</h2>
    </>
  )
}

export default App
