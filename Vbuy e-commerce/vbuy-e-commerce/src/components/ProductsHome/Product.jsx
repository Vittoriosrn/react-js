import { Link } from 'react-router-dom'
import styles from './Product.module.css'

function Product({product}) {
  return (
    <div className={styles.product}>
        <div>
            <img src={product.prodImages[0]} alt='image product'/>
            <span className={styles.prodName}>{product.prodName}</span>
            <div>
                <span className={styles.previousPrice}>R$ {(parseFloat(product.price) + parseFloat(product.price)/2).toFixed(2)}</span>
                <span className={styles.prodValue}>R$ {product.price}</span>
                <span className={styles.prodInfo}>à vista no PIX</span>
            </div>
            <Link className={styles.button}>COMPRAR</Link>
        </div>
    </div>
  )
}

export default Product