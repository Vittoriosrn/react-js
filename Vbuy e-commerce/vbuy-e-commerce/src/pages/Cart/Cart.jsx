//hooks 
import { useEffect, useState } from 'react';
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useLocalStorage } from '../../hooks/useLocalStorage'

// css
import Styles from './Cart.module.css'

const Cart = () => {
  const [products, setProducts] = useState();
  
  // buscar produtos no carrinho
  useEffect(() =>{
    const {getLocalStorage} = useLocalStorage();
    setProducts(getLocalStorage())
  }, [])

  //console.log(products)
  const {document: product} = useFetchDocument("products", products);

  if (!product) {
    return null // garantir esteja definido
  }

  return (
    <div>
      <section>
        <img src={product.prodImages[1]} alt='image_product'></img>
        <div>
          <p>{product.prodName}</p>
        </div>
      </section>
      <section>

      </section>
    </div>
  )
}

export default Cart