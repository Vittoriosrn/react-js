// css
import styles from './Home.module.css'

// assets
import bannerImg from '../../assets/img/bannerImg.jpg'

// components
import ProductsHome from '../../components/ProductsHome/ProductsHome'
import Partners from '../../components/Partners/Partners'

const Home = () => {
  return (
    <div className={styles.main}>
      <img className={styles.bannerImg} src={bannerImg} alt='banner'/>
        <ProductsHome />
      <Partners />
    </div>
  )
}

export default Home