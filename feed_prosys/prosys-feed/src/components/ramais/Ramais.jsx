import { useState } from 'react'
import './Ramais.css'

const Ramais = () => {

  const [ramaisNumbers, setRamaisNumbers] = useState([
    {number: 201, name: 'ADM ProMed (Talita)'},
    {number: 202, name: 'RG (Dra. Maria Rocha)'},
    {number: 203, name: 'Call-Center Supervisão'},
    {number: 208, name: 'Medicina do Trabalho'},
    {number: 209, name: 'Recepção ProMed'},
    {number: 210, name: 'Recepção ProMed'},
    {number: 211, name: 'Recepção ProMed'},
    {number: 212, name: 'Rychard'}
  ])

  const phoneIcon = <svg className='phoneIcon' xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
  <path d="M9.53016 10.1042C8.50933 10.1042 7.48382 9.86682 6.45361 9.39217C5.42341 8.91752 4.47601 8.2479 3.61143 7.38332C2.75033 6.51874 2.08245 5.57222 1.60779 4.54375C1.13314 3.51528 0.895813 2.49063 0.895813 1.46981C0.895813 1.30731 0.94998 1.17102 1.05831 1.06096C1.16665 0.950881 1.30206 0.895844 1.46456 0.895844H3.23121C3.36802 0.895844 3.48868 0.940463 3.59319 1.0297C3.69771 1.11894 3.7642 1.22919 3.79266 1.36043L4.10308 2.95416C4.12461 3.10208 4.12009 3.22917 4.08953 3.33542C4.05898 3.44166 4.00412 3.5309 3.92495 3.60312L2.67392 4.82083C2.87531 5.18958 3.10534 5.53836 3.36403 5.86718C3.62271 6.19601 3.90274 6.51007 4.20412 6.80938C4.50135 7.1066 4.81733 7.38265 5.15205 7.63751C5.48678 7.89237 5.84824 8.12952 6.23643 8.34896L7.45205 7.12292C7.53678 7.03473 7.63938 6.97293 7.75987 6.93751C7.88035 6.9021 8.00553 6.89342 8.13539 6.91147L9.63953 7.21772C9.77634 7.25383 9.88797 7.32362 9.97443 7.42708C10.0609 7.53056 10.1041 7.64793 10.1041 7.77918V9.5354C10.1041 9.6979 10.0491 9.83332 9.93901 9.94165C9.82894 10.05 9.69266 10.1042 9.53016 10.1042Z" fill="#19C692"/>
  </svg>

  return (
    <div className='ramaisContainer'>
      <h2 className='ramaisTitle'>Ramais</h2>
      <div className='ramaisScroll'>
        <ul>
          {ramaisNumbers.map((ramal, i) =>{
            return(
              <li key={i}>
               {phoneIcon} <span className='ramalNumber'>{ramal.number}</span> {ramal.name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Ramais