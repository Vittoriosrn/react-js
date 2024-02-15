import {useEffect, useState} from 'react'

const HookUseEffect = () => {
    // 1 - useEffect sem depedencias

    useEffect(() => {
        console.log("Estou sendo executado!")
    })

    const [number, setNumber] = useState(1)

    const changeSomething = (e) => {
        e.preventDefault()
        setNumber(number + 1)
    }

    // 2 - array de dependencias vazio

    useEffect(() => {
        console.log("Serei executado apenas uma vez")
    }, []) // array de dependencias vazio é executado apenas uma vez

    // 3 - array com dependencias

    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if (anotherNumber > 0){ // na primeira rederização execução ele não executa
            console.log("Número alterado!")
        }
    }, [anotherNumber])

    // 4 - cleanUp do useEffect

    useEffect (() => {

        const timer = setTimeout(() => {
            //setAnotherNumber(anotherNumber + 1)
        }, 2000)

        return () => clearTimeout(timer)
    }, [anotherNumber])

  return (
    <div>
        <h2>UseEffect</h2>
        <p>Aumente o valor</p>
        <p>{number}</p>
        <button onClick={changeSomething}>+</button>
        <p>Another number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber!</button>
        <hr />
    </div>
  )
}

export default HookUseEffect