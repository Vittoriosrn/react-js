//assets
import arrowLeft from '../../assets/svgs/arrowLeft.svg'

//hooks 
import { useEffect, useState } from 'react';
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useLocalStorage } from '../../hooks/useLocalStorage'

// css
import Styles from './Cart.module.css'

const Cart = () => {
  const [products, setProducts] = useState();
  const [prodQuantys, setProdQuantys] = useState(1)
  
  // buscar produtos no carrinho
  useEffect(() =>{
    const {getLocalStorage} = useLocalStorage();
    setProducts(getLocalStorage())
  }, [])

  // alterar quantidade de produtos

  //console.log(products)
  const {document: product} = useFetchDocument("products", products);

  if (!product) {
    return null // garantir esteja definido
  }

  return (
    <div className={Styles.cart}>
      <section className={Styles.prodInfo}>
        <img className={Styles.imgProd} src={product.prodImages[1]} alt='image_product'></img>
        <div className={Styles.namePrice}>
          <p className={Styles.titleProd}>{product.prodName}</p>
          <span className={Styles.price}>R$ {product.price}</span>
        </div>
        <div className={Styles.select_q}>
          <span onClick={prodQuantys > 1 ? () => setProdQuantys(prodQuantys-1) : undefined} class="material-symbols-outlined">
            arrow_back_ios_new
          </span>
          <input onChange={(e) => setProdQuantys(Number(e.target.value))} className={Styles.numberOfProducts} type="text" value={prodQuantys} />
          <span onClick={() => setProdQuantys(prodQuantys+1)} class="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </div>
      </section>
      <section>

      </section>
    </div>
  )
}

export default Cart