// css
import styles from './ProductsHome.module.css'

// assets
import prodIcon from '../../assets/img/prodIcon.png'
import filterIcon from '../../assets/img/filterIcon.png'

//components
import Product from './Product'

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { Link } from 'react-router-dom'

const ProductsHome = () => {
  const {documents: products}  = useFetchDocuments("products")

  return (
    <div>
      <section className={styles.productsArea}>
        <div className={styles.prodFilterContainer}>
          <div><img src={filterIcon} />Filtros</div>
          <section className={styles.prodFilter}>

          </section>
        </div>
        <div className={styles.ListProductsContainer}>
          <div><img src={prodIcon} />Lista de produtos</div>
          <div className={styles.products}>
            {products && products.map((product) => (
                <Link to={`/product/${product.id}`}>
                  <Product key={product.id} product={product} />
                </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsHome