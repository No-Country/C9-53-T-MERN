import React from 'react'
import style from './Banner.module.css'
// import BannerCard from './banner cards/BannerCard'
import YellowButton from '../../buttons/YellowButton'
import foto from './banner cards img/img_pesa.jpg'

const Banner = () => {

  

  return (
    <div className={style.img}>
        <div className={style.container}/>

          <span className={style.bannerUpperSpan}>
            <div className={style.bannerHeader}>El Fitness llegó 
            <p>  a tu casa</p> </div>
            <div className={style.bannerFooter}>La mejor Plataforma para
            <p> trabajadores remotos</p></div>
            <YellowButton/>
          </span>

            <div className={style.bannerCardContainer}>
  
                <div className={style.bannerCard}>
                  <img src={foto} style={{ width: '85.16px',
                    height: '37.77px'}}/>
                    <span className={style.bannerCardTitle}>Fuerza</span>
                    <div className={style.bannerCardBody}>Alcanza tus objetivos con entrenamiento guiado</div>
                </div>

                <div className={style.bannerCard}>
                  <img src={foto} style={{ width: '85.16px',
                    height: '37.77px'}}/>
                    <span className={style.bannerCardTitle}>Personalización</span>
                    <div className={style.bannerCardBody}>Encuentra tu rutina a tu propio ritmo</div>
                </div>

                <div className={style.bannerCard}>
                  <img src={foto} style={{ width: '85.16px',
                    height: '37.77px'}}/>
                    <span className={style.bannerCardTitle}>Salud</span>
                    <div className={style.bannerCardBody}>Acompaña el fitness con una vida saludable</div>
                </div>

                <div className={style.bannerCard}>
                  <img src={foto} style={{ width: '85.16px',
                    height: '37.77px'}}/>
                    <span className={style.bannerCardTitle}>Balance</span>
                    <div className={style.bannerCardBody}>Ejercita siguiendo pasos a tu medida</div>
                </div>

            </div>
    </div>

  )
}

export default Banner