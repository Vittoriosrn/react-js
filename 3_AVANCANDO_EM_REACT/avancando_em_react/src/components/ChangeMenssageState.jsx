import React from 'react'

const ChangeMenssageState = ({ handleMessage }) => {
    const menssages = ["Oi", "Ola", "Hello"]
  
    return (
    <div>
        <button onClick={() => handleMessage(menssages[0])}>1</button>
        <button onClick={() => handleMessage(menssages[1])}>2</button>
        <button onClick={() => handleMessage(menssages[2])}>3</button>
    </div>
  )
}

export default ChangeMenssageState