import React, { useMemo } from 'react'
import { useEffect, useState } from 'react'

const HookUseMemo = () => {
  const [number, setNumber] = useState()
  const premiumNumbers = useMemo((e) => {
    return ["10", "50", "100", "200"]
  }, [])

  useEffect (() => { // use effect passa a ser inutil por conta do useMemo
    console.log("Número premiado alterado")
  }, [premiumNumbers])
  
  return (
    <div>
        <h2>useMemo</h2>
        <input onChange={(e) => setNumber(e.target.value)}/>
        {premiumNumbers.includes(number) && <p>Você acertou o número!</p>}
        <hr />
    </div>
  )
}

export default HookUseMemo