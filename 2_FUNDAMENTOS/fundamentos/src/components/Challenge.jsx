const Challenge = () => {

    const n1 = 3
    const n2 = 5

    console.log(n1)
    console.log(n2)

    const soma = () =>{
        console.log(n1+n2)
    }

    return(
        <div>
            <button onClick={soma}>Some os dois numeros</button>
        </div>
    )
}

export default Challenge