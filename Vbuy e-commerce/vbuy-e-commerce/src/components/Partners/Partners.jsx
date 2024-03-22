// assets
import parceiroA from '../../assets/img/partners/asus.png'
import parceiroB from '../../assets/img/partners/hyperx.png'
import parceiroC from '../../assets/img/partners/redragon.png'
import parceiroD from '../../assets/img/partners/amd.png'
import parceiroE from '../../assets/img/partners/husky.png'


// css
import styles from './Partners.module.css'

const Partners = () => {
  return (
    <div className={styles.bannerMarcas}>
        <img src={parceiroA} />
        <img src={parceiroB} />
        <img src={parceiroC} />
        <img src={parceiroD} />
        <img src={parceiroE} />
    </div>
  )
}

export default Partners