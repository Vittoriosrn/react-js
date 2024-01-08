import { useState } from 'react'
import MyForm from './components/MyForm'
import './App.css'

function App() {
  return (
    <>
      {/* Criação de form */}
      <MyForm user={{name: "Josias", email: "josias@gmail.com"}}/>
    </>
  )
}

export default App
