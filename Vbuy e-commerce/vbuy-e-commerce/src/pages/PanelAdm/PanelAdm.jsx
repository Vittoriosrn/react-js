import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { Link } from 'react-router-dom'

import styles from './PanelAdm.module.css'

const PanelAdm = () => {
    const {documents: products} = useFetchDocuments("products")

  return ( 
    <div className={styles.PanelAdm}>
        <section>
            <h2>Produtos cadastrados</h2>
            <div>
                <div className={styles.painelProducts}>
                    {products && products.map((product) => (
                        <div className={styles.PrevProduct} key={product.id}>
                            <span>{product.prodName}</span>
                            <div>
                                <Link>Ver Produto</Link>
                                <Link>Editar</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to='/newproduct'>Novo produto</Link>
            </div>
        </section>
    </div>
  )
}

export default PanelAdm