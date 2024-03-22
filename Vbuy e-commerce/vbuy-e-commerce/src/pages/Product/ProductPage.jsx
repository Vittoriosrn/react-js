import React from 'react'
import style from './ProductPage.module.css'
import {useState} from 'react'

import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useParams } from 'react-router-dom'

//assets 
import cartIcon from '../../assets/img/cartIcon.png'

const ProductPage = () => {
  const [mainImage, setMainImage] = useState()
  const {id} = useParams()
  const {document: product}  = useFetchDocument("products", id)
  
  if (!product) {
    return null // garantir que post esteja definido
  }

  // Divide o corpo do post em linhas separadas
  const lines = product.specifications.split('\n')
  // Mapeia as linhas para elementos <p> dentro de um array
  const formattedLines = lines.map((line, index) => (
    <p key={index}>{line}</p>
  ))

  return (
    <div className={style.prodContainer}>
      <div>
        <section className={style.prodImagesContainer}>
          <div className={style.imageThumbnails}>
            <img onClick={(e) => setMainImage(e.target.src)} src={product.prodImages[0]} />
            <img onClick={(e) => setMainImage(e.target.src)} src={product.prodImages[1]} />
            <img onClick={(e) => setMainImage(e.target.src)} src={product.prodImages[2]} />
            <img onClick={(e) => setMainImage(e.target.src)} src={product.prodImages[3]} />
          </div>
          <div className={style.mainImage}>
            <img src={!mainImage ? product.prodImages[0] : mainImage} />
          </div>
        </section>
        <section className={style.prodInfo}>
          <h2>{product.prodName}</h2>
          <div className={style.priceInfo}>
            <span className={style.oldPrice}>R$ {(parseFloat(product.price) + (0.15 * parseFloat(product.price))).toFixed(2)}</span>
            <span className={style.prodPrice}>R$ {product.price}</span>
            <span>no PIX com <strong>15% desconto</strong></span>
          </div>
          <div className={style.paymentsOpt}>
            <p>
              Em até 6x de <strong>{(product.price/6).toFixed(2)}</strong> sem juros
              <br/>Ou em 1x no cartão com até
              <strong> 10% OFF</strong>
            </p>
            <p className={style.moreOpt}>Ver mais opções de pagamento</p>
          </div>
          <div className={style.buttonContainer}>
            <button className='btn'>COMPRAR</button>
            <button className='alternativeBtn'>Adicionar ao carrinho<img src={cartIcon}/></button>
          </div>
        </section>
      </div>
      <section>
        <div>
          <h2>Especificações do produto</h2>
          {formattedLines}
        </div>

        <div>
          <h2>Conteúdo da Embalagem</h2>
          <p>{product.packageContent}</p>
        </div>

        <div>
          <h2>Garantia</h2>
          <p>{product.guarantee}</p>
        </div>

        <div>
          <h2>Peso</h2>
          <p>{product.prodWeight}</p>
        </div>
      </section>
    </div>
  )
}

export default ProductPage