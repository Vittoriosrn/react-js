import { useState } from "react"
import './CarDetails.css'

const CarDetails = () => {
    const [cars] = useState([
        {marca: 'Audi', modelo: 'R8', cor: 'Preta'},
        {marca: 'Chevrolet', modelo: 'Prisma', cor: 'Vermelha'},
        {marca: 'Honda', modelo: 'Civic', cor: 'Branco'}
    ])

    return (
    <div>
        <ul>
            {cars.map((car, i) => (
                <li key={i}>
                    {car.marca} - {car.modelo} - {car.cor}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CarDetails