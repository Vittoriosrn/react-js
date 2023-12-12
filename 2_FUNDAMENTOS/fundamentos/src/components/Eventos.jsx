const Eventos = () =>{
    
    const handleMyEvent = (e) =>{
        console.log(e)
        
        console.log("Ativou o evento!")
    }
    const rederSomething = (x) =>{
        if(x){
            return <h2>Rederiza isso</h2>
        } 
        else{
            return <h2>se nao, rederiza isso</h2>
        }
    }
    
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também</button>
            </div>
            <div>
                {rederSomething(true)}
                {rederSomething(false)}
            </div>
        </div>
    )
}

export default Eventos