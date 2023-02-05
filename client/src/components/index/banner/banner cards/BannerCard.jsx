import style from './BannerCard.module.css'
import foto from './banner cards img/img_pesa.jpg'

const BannerCard = () => {
    return (<>

        <div className={style.bannerCard}>
            <img src={foto} style={{ width: '85.16px',
                height: '37.77px'}}/>
            <span className={style.bannerCardTitle}>Fuerza</span>
        </div>
        
    </>)
}

export default BannerCard