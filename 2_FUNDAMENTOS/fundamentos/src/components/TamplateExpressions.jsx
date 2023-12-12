const TamplateExpressions = () =>{

    const name = "Vittorio"
    const data = {
        age: 19,
        job: "Programmer"
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <h2>Você tem {data.age} anos e trabalha como {data.job}</h2>
            <p>
                {4 + 4} {/* Possivel execultar codigo JS no JSX */}
            </p>
        </div>
    )
}

export default TamplateExpressions