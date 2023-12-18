import React from 'react'

const ExeculteFunction = ({ myFunction }) => {
  return (
    <div>
        <button onClick={myFunction}>Clique para execultar a função</button>
    </div>
  )
}

export default ExeculteFunction