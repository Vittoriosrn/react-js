import { useCounterContext } from "../hook/useCounterContext"
import { useTitleColorContext } from "../hook/useTitleContext"


const AboutUs = () => {

  const {color, dispatch} = useTitleColorContext()

  const { counter } = useCounterContext()

  return (
    <div>
      <h1 style={{ color: color }}>AboutUs</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default AboutUs