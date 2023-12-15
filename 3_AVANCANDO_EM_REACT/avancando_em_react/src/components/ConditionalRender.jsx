import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(true)

  const [name] = useState("Vittorio")
 
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se for true</p>}
      {!x && <p>Se for false</p>}

      <h1>If ternário</h1>
      {name === "Vittorio" ? (
        <div>
          <p>É vittorio</p>  
        </div>
      ) : (
        <div>
          <p>Não é vittorio</p>
        </div>
      )}

    </div>
  )
}

export default ConditionalRender