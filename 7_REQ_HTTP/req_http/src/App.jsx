import './App.css'

import { useState, useEffect} from 'react'

// 4 - custom hook

import { useFetch } from './hooks/useFetch'

const url = "http://localhost:3000/products"

function App() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const [products, setProducts] = useState([])

  // 4 - custom
  const { data: items, httpConfig, loading, error } = useFetch(url)


  // 1 - reasgatando dados
 /* useEffect(() => {
    
    async function fetchData() {
        const res = await fetch(url)

        const data = await res.json()

        setProducts(data)
    }

    fetchData();
  }, [])*/

  // 2-  Add de produtos
  const handleSubmit = async (e) =>{
    e.preventDefault()

      const product ={
        name,
        price
      }

      httpConfig(product, "POST")

      setName("")
      setPrice("")

    
    /*const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })

    // 3 - corregamento dinâmico
    const addedProduct = await res.json()

    setProducts((prevProducts) =>[...prevProducts, addedProduct])*/

    // 5 refatorando post
  }

  const handleRemove = (id) =>{
    httpConfig(id, "DELETE")
  }

  return (
    <>
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p> }
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
              <input type='submit' className={product.id} onClick={()=> handleRemove(product.id)} value='X' />
            </li>
          ))}
        </ul>
      )}
      <div className='addProduct'>
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input 
                type='text' 
                value={name} 
                name='name' 
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Preço:
              <input 
                type='number' 
                value={price} 
                name='price' 
                onChange={(e) => setPrice(e.target.value)} />
            </label>
            {/* 7 - state de loading no post */}
            {loading && <input type='submit' disabled value='Aguarde' />}
            {!loading && <input type='submit' value='Criar' />}
          </form>
      </div>
    </>
  )
}

export default App
