import React from 'react'

// useContext
import { useContext } from 'react'
import { SomeContext } from '../../components/HookUseContext'

const About = () => {
  const {contextValue} = useContext(SomeContext)

  return (
    <div>
      <div>About</div>
      <p>Valor do contexto: {contextValue}</p>
    </div>
  )
}

export default About